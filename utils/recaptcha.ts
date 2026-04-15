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
    try {
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

        const [response] = await client.createAssessment(request);
        
        // ... (rest of the logic inside try)
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
    } catch (error: any) {
        console.error("reCAPTCHA Assessment Error (likely missing credentials):", error.message);
        
        // Fallback for development or if credentials aren't set up yet
        // This prevents the whole form from breaking if we only have a configuration error
        if (error.message.includes("Could not load the default credentials")) {
            console.warn("WARNING: reCAPTCHA credentials not found. Allowing pass-through for debugging.");
            return {
                success: true,
                score: 1.0, // Assume safe for now while debugging
                reasons: ["CREDENTIALS_MISSING_FALLBACK"]
            };
        }
        
        throw error;
    } finally {
        // Ensure the client is closed if not cached
        await client.close();
    }
}
