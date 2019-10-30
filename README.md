<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

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
Documentation of the functionality can be found here :
<a href="https://drive.google.com/open?id=1IcBQv2dbP0MCgmllVlVkqowVFKBxmyzY "> PDF</a>

## Survey matching
  The survey is used as a mechanism to match individuals. On the backend their is an array of
  previous participants who have answered the survey. The optimal match is determined by the
  individual that minimizes the following function :
  
  (Insert the mathematical formula for the optimization)
  <p>
  When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are
  \[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]
</p>

  Once the user completes the survey the name and picture of the optimal match is displayed in a modal pop-up.

  Their is a href link in the bottom of the page that links to all individuals that have completed the survey.