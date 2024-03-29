# week-10_employee_Application

# 10 Object-Oriented Programming: Team Profile Generator

## Your Task

This project is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so I have also written a unit to test for every part of the code to ensure that it passes each test.

Here is a link to a walkthrough video that demonstrates its functionality and all of the tests passing.

https://watch.screencastify.com/v/sEg1JY2IyLRYUy9wps7k
https://watch.screencastify.com/v/Dis4Q1D6dlptu75E844G

The application uses Jest [Jest](https://www.npmjs.com/package/jest) to run the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

The application can be invoked by using the following command:

```npm i
node index.js
```

The directory structure looks like the following example:

```md
.
├── **tests**/ //jest tests
│ ├── Employee.test.js
│ ├── Engineer.test.js
│ ├── Intern.test.js
│ └── Manager.test.js
├── dist/ // rendered output (HTML) and CSS style sheet  
├── lib/ // classes
├── src/ // template helper code
├── .gitignore // indicates which folders and files Git should ignore
├── index.js // runs the application
└── package.json
```

The first class is an `Employee` parent class with the following properties and methods:

- `name`

- `id`

- `email`

- `getName()`

- `getId()`

- `getEmail()`

- `getRole()`&mdash;returns `'Employee'`

The other three classes extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` has the following:

- `officeNumber`

- `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` has the following:

- `github`&mdash;GitHub username

- `getGithub()`

- `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` has the following:

- `school`

- `getSchool()`

- `getRole()`&mdash;overridden to return `'Intern'`

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)

## Licence

MIT

## Author

skirkzzz@gmail.com
https://github.com/Skirkzzz
