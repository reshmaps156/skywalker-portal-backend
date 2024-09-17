
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const refresh_token = process.env.REFRESH_TOKEN;

const oAuthClient = new google.auth.OAuth2(client_id, client_secret, redirect_uri);
oAuthClient.setCredentials({ refresh_token: refresh_token });

const sendMail = async (username, subject, grievanceDetails) => {
  try {
    const accessToken = await oAuthClient.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'reshmaps156@gmail.com',
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: refresh_token,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: 'reshmaps156@gmail.com',
      to: 'skywalkerportal@gmail.com', 
      subject: `New Grievance Submitted`,
      text: `Dear Admin,

A new grievance has been submitted by ${username}.


 Subject : ${subject}
 
 ${grievanceDetails}

Please log in to the admin portal to view more details.

Best Regards,
Skywalker Portal Team`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = sendMail;
