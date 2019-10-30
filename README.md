# Friend-Ship
An app to connect to people who share similar belief as you. The compability analysis is done via a survey. This app uses the following technology stack :

# Technology Stack
The main language of this project is Javascript.

The Node libraries used for this project are the following.

<ul>
  <li> Heroku </li>
    A platform for deploying node applications.
  <li> Express </li>
    A node library used to handle the html routing that also connects the backend with the frontend.

# Functionality
This app has been deployed to heroku. You can take it for a test drive in the following link :
<a href="https://secure-earth-43367.herokuapp.com/ "> APP</a>

## Survey matching
  The survey is used as a mechanism to match individuals. On the backend their is an array of
  previous participants who have answered the survey. The optimal match is the individual whose answers are the closest to the answers 
  of the individual filling the survey. The distance between two individuals is calculated by summing the absolute value of the difference per question. 
  
  Once the user completes the survey the name and picture of the optimal match is displayed in a modal pop-up.

  Their is a href link in the bottom of the page that links to all individuals that have completed the survey.