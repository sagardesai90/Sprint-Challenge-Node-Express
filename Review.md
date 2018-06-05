# Review Questions

## What is Node.js?
 It is a JS run time environment that executes JS code server-side. 


## What is Express?
It is a minimal and flexible node.js web app framework that provides a robust set of features for web and mobile apps.

## Mention two parts of Express that you learned about this week.
Express contains middleware, and allows us to do routing as well.

## What is Middleware?
Functions we put together that are between our routes and endpoints, often times they help clean up our code to be more succinct.

## What is a Resource?
An object we can return to our API calls, like {error: "This is a server side error."}.

## What can the API return to help clients know if a request was successful?
Status codes along with messages describing the error, and perhaps what they can do to resolve the issue.

## How can we partition our application into sub-applications?
node routers

## What is CORS and why do we need it?
CORS stands for cross origin resource sharing, we need it to selectively give access to our API.