# Vimages

A simple personal image uploader and gallery built using Vue.js and the Imgur API.

## Live Demo

https://vimages-f910f.web.app/

## Steps to Run Locally

### Create Imgur API Client

1. Create an Imgur account.
2. Visit https://apidocs.imgur.com/ and register your application: https://api.imgur.com/oauth2/addclient
3. Give your application any name you like and set the Authorization type to "Oauth 2 authorization with a callback URL"
4. Imgur blocks localhost API calls, make sure to set your callback URL as https://<YOUR IP HERE>/oauth2/callback
5. Add an email and description if you would like and click "Submit"
6. Take note of the Client ID that is generated

### Add Imgur API Client ID and Run Project

1. Add a .env.local file to the root folder of the project
2. Add a line to that file with your Client ID like this: VUE_APP_CLIENT_ID = 'YOUR CLIENT ID HERE'
3. Open a terminal in the root folder of the project and type _npm install_
4. After the install finishes, type _npm run serve_
5. Access the network address in a web browser (eg. http://192.168.x.x:8080/). Ensure you do not use "localhost:8080" or the Imgur API calls will not work
