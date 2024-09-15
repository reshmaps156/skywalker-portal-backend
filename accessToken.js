const { google } = require('googleapis');
require('dotenv').config()
const {DIALOGUE_FLOW_TYPE,DIALOGUE_FLOW_PROJECT_ID ,DIALOGUE_FLOW_PRIVATE_KEY_ID,DIALOGUE_FLOW_PRIVATE_KEY,DIALOGUE_FLOW_CLIENT_EMAIL,DIALOGUE_FLOW_CLIENT_ID,DIALOGUE_FLOW_AUTH_URI,DIALOGUE_FLOW_TOKEN_URI,DIALOGUE_FLOW_AUTH_PROVIDER_CERT,DIALOGUE_FLOW_CLIENT_CERT,UNIVERSE_DOMAIN} = process.env;
const serviceAccount = {
  "type": DIALOGUE_FLOW_TYPE,
  "project_id": DIALOGUE_FLOW_PROJECT_ID,
  "private_key_id": DIALOGUE_FLOW_PRIVATE_KEY_ID,
  "private_key": DIALOGUE_FLOW_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": DIALOGUE_FLOW_CLIENT_EMAIL,
  "client_id": DIALOGUE_FLOW_CLIENT_ID,
  "auth_uri": DIALOGUE_FLOW_AUTH_URI,
  "token_uri": DIALOGUE_FLOW_TOKEN_URI,
  "auth_provider_x509_cert_url":DIALOGUE_FLOW_AUTH_PROVIDER_CERT,
  "client_x509_cert_url": DIALOGUE_FLOW_CLIENT_CERT,
  "universe_domain":UNIVERSE_DOMAIN
}


let cachedToken = null;
let tokenExpirationTime = 0;

const getAccessToken = async () => {
  try {
    const now = Date.now();
    if (cachedToken && now < tokenExpirationTime) {
      return cachedToken;
    }

    const authClient = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const client = await authClient.getClient();
    const accessTokenResponse = await client.getAccessToken();
    
    if (accessTokenResponse && accessTokenResponse.token) {
      cachedToken = accessTokenResponse.token;
      tokenExpirationTime = now + 3600 * 1000;
      return cachedToken;
    } else {
      throw new Error('Unable to retrieve access token.');
    }
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    return null;
  }
};

module.exports = getAccessToken;
