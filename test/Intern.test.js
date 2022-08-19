const answer = require("inquirer");

// prompt name, location, bio, LinkedIn URL, and GitHub URL.
answer.prompt([
    {
    type: 'input',
    message: 'what is your name?',
    name: 'username',
    },
    {
    type: 'input',
    message: 'what is your location?',
    name: 'location',
    },
    {
    type: 'input',
    message: 'what is your bio?',
    name: 'bio',
    },
    {
    type: 'input',
    message: 'what is your LinkedIn URL?',
    name: 'LinkedIn',
    },
    {
    type: 'input',
    message: 'what is your GitHub URL?',
    name: 'GitHub',
    },

]);

then((answer) =>
answer.confirm === answer.input



const renderHTML = (answer) =>
{
    const html= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <style>
             body { background-color: rgb(60, 15, 225); }
            p { color: #fff; font: 18px Arial, sans-serif;}
            </style>
    <p>${answer.username}</p>
    <p>${answer.location}</p>
    <p>${answer.bio}</p>
    <p>${answer.LinkedIn}</p>
    <p>${answer.GitHub}</p>

    </body>
    </html>`

fs.writeFile("index.html", html, (err) =>
err ? console.error(`Input entered! Your input is ${answer.input}`)
:console.log('input is not correct')
);
}