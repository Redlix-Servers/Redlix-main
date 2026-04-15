/**
 * Assessment parameters interface
 */
interface AssessmentParams {
    projectID?: string;
    recaptchaKey?: string;
    token: string;
    recaptchaAction: string;
}

/**
 * Creates an assessment to analyze the risk of a UI action using Google reCAPTCHA Enterprise.
 * Uses the REST API to avoid complex service account authentication on Vercel.
 */
export async function createAssessment({
    projectID = "my-project-6865-1776274939117",
    recaptchaKey = "6LeKMbksAAAAAAr38bUfV7f2ShiEbSabyFLfzqEO",
    token,
    recaptchaAction,
}: AssessmentParams) {
    const apiKey = process.env.RECAPTCHA_API_KEY || "AIzaSyCw40Iu0tg0pt5dxsvdRE4btzVx7nKj8O0";
    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectID}/assessments?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                event: {
                    token: token,
                    siteKey: recaptchaKey,
                    expectedAction: recaptchaAction,
                },
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("reCAPTCHA API Error Response:", errorText);
            throw new Error(`reCAPTCHA API responded with status ${response.status}`);
        }

        const data = await response.json();

        // Check if the token is valid
        if (!data.tokenProperties?.valid) {
            console.error(`reCAPTCHA Assessment failed: ${data.tokenProperties?.invalidReason}`);
            return {
                success: false,
                reason: data.tokenProperties?.invalidReason,
                score: 0
            };
        }

        // Check if the expected action was executed
        if (data.tokenProperties.action === recaptchaAction) {
            console.log(`reCAPTCHA Risk Score: ${data.riskAnalysis?.score}`);
            
            return {
                success: true,
                score: data.riskAnalysis?.score || 0,
                reasons: data.riskAnalysis?.reasons || []
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
        console.error("reCAPTCHA Assessment Exception:", error.message);
        
        // Fallback for network issues or configuration errors
        // This ensures the form functionality is not broken by verification failures
        return {
            success: true, // Allow pass-through in case of API issues
            score: 1.0, 
            reasons: ["REST_API_ERROR_FALLBACK"]
        };
    }
}
