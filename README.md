# Note-Taker
Week-11 HW

![License Badge](https://img.shields.io/badge/license-MIT-blue)


## Description

This is an application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.

Thie application has the following HTML routes:

  * GET `/notes` - Returns the `notes.html` file.

  * GET `*` -Returns the `index.html` file

This application has a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

It also has the following API routes:

  * GET `/api/notes` - Reada the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - Receives a new note and saves on the request body, adds it to the `db.json` file, and then returns the new note to the user.

  * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete.

## Table of Contents

  * [User-Story](#user-story)
  * [Acceptance-Criteria](#acceptance-criteria)
  * [Deployed Application](#deployed-application)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## User Story

```
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.
```

## Deployed Application

Here is the URL for the deployed [Note Taker Application](https://damp-sands-84380.herokuapp.com/) on Heroku.


## Installation

To access this project:

```
1. Go to https://github.com/alek2535/Note-Taker

2. Fork the branch and then click on clone or download

3. Paste copied link after `git clone` into your bash console in your desired directory

4. You should now have access to the repository
```

Since there is a `package.json`, you will need to run `npm install`.

Once you have the dependancies installed run the command:

```
node server.js
```

## Usage

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

Technologies Used:

* JavaScript
* Node.js
* Express
* jQuery
* fs
* path

## Contributing

Use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Credits

Thank you to Carmen Obied(@carmenobied), CJ Pia(@cjpia612), and Zack Corpus(@zcorpuz) who helped get me through this. Bouncing ideas off of each other and providing useful resources helped make this project successful.

## License

[MIT License](./LICENSE)

Copyright (c) [2020] [Alek Valencia]

## Project Status

This project meets all requirements in the Acceptance Criteria and is fully functional. Any additions would be to make the code better and to add more functionality.

## Tests

There are currently no tests for this project.

## Questions

[alek2535](https://github.com/alek2535)

alekvalencia2535@gmail.com

If you have any questions about the project you can reach me at the above email.