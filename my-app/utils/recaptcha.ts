import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

/**
 * Interface for the assessment parameters
 */
interface AssessmentParams {
    projectID?: string;
    recaptchaKey?: string;
    token: string;
    recaptchaAction: string;
}

/**
 * Creates an assessment to analyze the risk of a UI action using Google reCAPTCHA Enterprise.
 * This runs on the server side.
 */
export async function createAssessment({
    projectID = "my-project-6865-1776274939117",
    recaptchaKey = "6LeKMbksAAAAAAr38bUfV7f2ShiEbSabyFLfzqEO",
    token,
    recaptchaAction,
}: AssessmentParams) {
    // Create the reCAPTCHA client
    // Note: In production, you should use environment variables for projectID and credentials
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(projectID);

    // Build the assessment request
    const request = {
        assessment: {
            event: {
                token: token,
                siteKey: recaptchaKey,
            },
        },
        parent: projectPath,
    };

    try {
        const [response] = await client.createAssessment(request);

        // Check if the token is valid
        if (!response.tokenProperties?.valid) {
            console.error(`reCAPTCHA Assessment failed: ${response.tokenProperties?.invalidReason}`);
            return {
                success: false,
                reason: response.tokenProperties?.invalidReason,
                score: 0
            };
        }

        // Check if the expected action was executed
        if (response.tokenProperties.action === recaptchaAction) {
            console.log(`reCAPTCHA Risk Score: ${response.riskAnalysis?.score}`);
            
            // Return the results
            return {
                success: true,
                score: response.riskAnalysis?.score || 0,
                reasons: response.riskAnalysis?.reasons || []
            };
        } else {
            console.error("reCAPTCHA Action mismatch");
            return {
                success: false,
                reason: "Action mismatch",
                score: 0
            };
        }
    } catch (error) {
        console.error("Error creating reCAPTCHA assessment:", error);
        throw error;
    } finally {
        // Ensure the client is closed if not cached
        await client.close();
    }
}
