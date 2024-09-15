const userGrievances = require("../models/grievanceModel");
const sendMail = require('../gmailAuth'); 
const getAccessToken = require("../accessToken");

exports.postGrievanceController = async (req, res) => {
  const { username, email, mobileNumber, subject, priority, grievanceDetails, submitTime } = req.body;

  try {
    // Validate required fields
    if (!username || !email || !mobileNumber || !subject || !grievanceDetails || !priority) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create new grievance
    const newGrievance = new userGrievances({
      username,
      email,
      mobileNumber,
      subject,
      priority,
      grievanceDetails,
      submitTime,
    });

    // Save grievance to the database
    await newGrievance.save();

    // Send email notification to the admin with the grievance details
    await sendMail(username, subject, grievanceDetails);

    return res.status(201).json(newGrievance);
  } catch (error) {
    console.error('Error in postGrievanceController:', error.message);
    return res.status(500).json({ message: `Failed to submit form due to: ${error.message}` });
  }
};

exports.getAccessTokenController = async (req, res) => {
  try {
    const token = await getAccessToken();
    console.log(token);
    
    if (token) {
      res.status(200).json({ token }); 
      
      
    } else {
      res.status(500).json({ error: 'Failed to retrieve access token.' });
    }
  } catch (error) {
    console.error('Error in getAccessTokenController:', error.message);
    res.status(500).json({ error: 'Failed to retrieve access token.' });
  }
};
