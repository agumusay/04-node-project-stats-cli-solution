# project-stats-cli

## Overview

Create a CLI that gives you information about a folder, more specifically if it is a web development project.

You will need to read contents of a folder and check for the existence of files.

### Example use:

    ~/projects/calculator $ project-stats .
    Project Name:    Calculator
    Version:         1.2.1
    Dependencies:
    	- isEven
    	- isOdd
      - isNaN
    devDependencies:
    	- nodemon

    is git repo:     true
    remote repo:     https://github.com/dci-ber-fbw21/first-cli

Explanation:

We are currently in the folder `~/projects/calculator` and run our cli with this folder as an input `project-stats .` in this folder we need to analyse if it has a the following features:

- does it have a package.json
- does it have a .git folder

If those file/folders exist we can read and analyse those files to display this information.

Remember:

- Every cli needs a usage / help
- review `__dirname` and `process.env.PWD`
- use promises `require('fs').promises`

### Extra

- `project-stats all` lists all previous found projects
