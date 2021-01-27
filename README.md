demo: https://madde-github-jobs.netlify.app/



The task is to create a react app that lets the user search for jobs using the description. The first view should contain one input:

-Description
The API has the following structure:
https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript

-Add an input field where the user can enter something to search on Add a button to trigger the search

The API expects "spaces" to be changed to "plus-signs"
If a user searchs for "react javascript", change the string to "react+javascript"
When the user searchs for a specific term (description), list the result returned from the API.

-Make sure that the type value returned from the API is contained in a strong-element

-Make sure that the title value returned from the API is contained in a element

-Make sure that the company_url value returned from the API is contained in a a-element

-Make sure that the description value returned from the API is contained in a p-element or div-element

-Make sure that the company_logo value returned from the API is added to the src attribute for a img-element

-If the API returns an empty array, make sure to show a message to the users with the following text: "No jobs found"
  
 

Write tests to make sure that all the components in your project are working as expected (at least 10 tests).

Create at least three components 
-JobList

-JobItem

-Image

VG (all of the below should be developed to receive the higher grade):

-When the user clicks on a job posting the user is redirected to the detail page for that job posting

-Save the result from the API in context, check if the value the user is searching for is already in context, if so, return it from context instead for fetching it again

-Deploy application to any hosting site (github pages, netlify, firebase, vercel etc)

Tips:
To render HTML that is returned from the API, please use dangerouslySetInnerHTML (https://reactjs.org/docs/dom-elements.html)
To make sure urls are handled correctly on the hosting service, use HashRouter if necessary.
