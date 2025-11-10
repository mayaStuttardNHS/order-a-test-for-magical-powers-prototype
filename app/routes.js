// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line
// Called when answering question about whether NHS number is known
router.post("/magical-powers-answer", (req, res) => {
  // Make a variable and give it the value from 'nhsNumberKnown'
  const hasSymptoms = req.session.data.hasSymptoms;

  // Check whether the variable matches a condition
  if (hasSymptoms === "Yes") {
    // Send user to a page where they'll enter their symptoms
    res.redirect("/symptoms");
  } else if (hasSymptoms === "No") {
    // Send user to a page where they are ejected
    res.redirect("/ineligible");
  } else {
    // Send user back to the question page
    res.redirect("/visual-check");
  }
});

// Called when answering question about whether NHS number is known
router.post("/see-cat-answer", (req, res) => {
  // Make a variable and give it the value from 'nhsNumberKnown'
  const seeCat = req.session.data.seeCat;

  // Check whether the variable matches a condition
  if (seeCat === "Pet") {
    // Send user to a page where they'll enter their symptoms
    res.redirect("/ineligible");
  } else if (seeCat === "Wise-being") {
    // Send user to a page where they are ejected
    res.redirect("/symptoms");
  } else {
    // Send user back to the question page
    res.redirect("/ineligible");
  }
});
module.exports = router
