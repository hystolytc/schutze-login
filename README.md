## This is a web app that demonstrate Login for Schutze

## This app consists of 3 pages
- Login
- Home

## Tech stack
- ReactJS generated with `create-react-app`
- Typescript
- React router dom
- TailwindCSS

## The rule
- When user first time visit the web or if the user has no token saved, the web will be redirect to login page with url path `/login`
- If user success to login, then the user will be redirected to url path `/` that consist Home page.
- For simulating login flow, this web store `user_token` into localstorage with token format `usernamepassword` for granted the access to the home page, and user could revoke access token when hit logout button in home page