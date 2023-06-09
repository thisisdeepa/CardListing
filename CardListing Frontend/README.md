-> Install Nodejs from https://nodejs.org/en
-> Once the setup is complete, Go to vscode which is an editor that I used and create a new React project by running the following command in new terminal:
    -> npx create-react-app card-listing
    -> cd card-listing
   the folder opens which is a new directory called “card-listing” with a basic React setup.
-> In the "src" we need to edit the code.
-> Since I have not used any components here, the entire logic lies in "App.js" file.
-> The styling for it is in "App.css" file.
-> In the "index.js" file we need to add <App/> to render it.
-> I have created a "userData.json" file which contains the user details as mentioned in the question.
-> The following commands are added in "App.js" files.
    -> import './App.css';
    -> import userData from './userData.json'; 
-> Once the code is written, enter 
    -> npm start
   in the terminal. This will open the localhost:3000 in your default browser.
