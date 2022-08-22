# CS325 JavaScript Exercise Tester

This is a web application for JavaScript exercises with test cases. These
particular exercises are designed for students in 
[CS325 Introduction to AI Programming](https://courses.cs.northwestern.edu/325/).

For a more generic set of exercises, see [this repo](https://github.com/criesbeck/learn-js).

Download and serve this application locally to see the exercises, write solutions, and test them.

## Requirements

Recommended for editing and running the code:

* [Visual Studio Code](https://code.visualstudio.com/download) 
* [Live Server plug-in installed in VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


## Installation

The tester is a web application that you run locally.
Download it using a command shell like Terminal in MacOS
or Git Bash on Windows. In a command shell, **cd** to the directory where you want
to create a directory for your JavaScript solutions.

 If you have Node installed, use
[degit](https://www.npmjs.com/package/degit):

```
npx degit criesbeck/cs325-js-tester your-js-folder-name
```

If you don't have and don't want to install Node, use **git clone**:

```
git clone https://github.com/criesbeck/cs325-js-tester.git your-js-folder-name
```

``npx degit`` is faster and downloads fewer files. 

## Running in VS Code

Run this web app in a local server and open **index.html**.

If you have **VS Code** and **Live Server**, 

* In VS Code, use **File | Open** to open the entire downloaded directory (not a specific file)
* Start **Live Server** to serve **index.html**.
* The exercise tester page should open on http://localhost:5500.

If you don't have VS Code, consider installing it. It is a fine JavaScript editor. But feel
free to use any editor that properly indents JavaScript code and any web server to test
your solutions.

The local test page hould look like [this](https://criesbeck.github.io/cs325-js-tester/).

## The interface

The tester page displays a list of JavaScript exercise modules.
The color of each module indicates its status:

* <span style="color:gray">gray</span> means none of the exercises in the module have been started
* <span style="color:red">red</span> means one or more exercises in the module have failing test cases
* <span style="color:orange">orange</span> means some of the exercises in module are done
* <span style="color:green">green</span> means all the exercises in the module are done

Click on a module to see the exercises in it. The exercises are also color coded:

* <span style="color:gray">gray</span> means the exercise has not been started
* <span style="color:red">red</span> means one or more test cases are failing
* <span style="color:green">green</span> means all the test cases are passing

Click on a specific exercise to see the requirements and test cases.

## Viewing results

For demonstration purposes, the repository comes with a broken solution to the first exercise in the first module. That's why that module is <span style="color:red">red</span>. 

Click on the first module to open it up. That will show that the first exercise is also
<span style="color:red">red</span>. It has a broken solution.

Click on the first exercise to see what function has to be defined, 
what arguments the function takes, 
what the function returns, and what test cases have to be passed. 

Each test case has:

* a call to the function
* the value that should be returned by the function call
* the value that the current solution returns, if a solution has been defined

In this case, all of the test results are <span style="color:red">red</span>
because all of the tests fail.

## Fixing a solution

All exercise solutions are in the file **solutions.js**. Open that file. 

Out of the box, there is one function exported. 

```
export const sumOfSquares = (x, y) => x + y;
```

Edit that definition to be

```
export const sumOfSquares = (x, y) => x * x + y * y;
```

Save the file and go back to the web page again. **Live Server** should have updated the page automatically. 
The test cases should now all be green.

The module name should now be <span style="color:orange">orange</span>. That means it has no failing cases, 
but it does have exercises with no solutions.

## Overview of the modules

Here are the current test modules.

**Warmup**: As suggested, these are warmup exercises, to get you used to the testing interface. Do not 
submit these for code review. 

**Mapping**:  One step above the warmup exercises, these emphasize looping, to get you
used to modern JavaScript iteration
with **map**, **filter**, and such, rather than **for** or **while**.

**Match**: A sequence of increasingly challenging modules 
that incrementally develops a recursive object pattern matcher.

**DDR**: Exercises on unification and deductive retrieval.

## Exercise guidelines

Solutions are functions. They must be defined in **solutions.js** and
exported for the tester to see them.

Feel free to define helper functions, but don't export them.

Use [modern JavaScript features](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#use_modern_js_features).

Write clean code. Unless required by the exercise, solutions should not

* destructively modify input objects
* print anything

## Modularization

You can put your solutions in separate files, such as

* **solutions/warmup.js**
* **solutions/mapping.js**
* **solutions/match.js**

In **solutions.js** put

```
export * from '/solutions/warmup.js';
export * from '/solutions/mapping.js';
export * from '/solutions/match.js';
```

## Updating

When the exercises or tests are updated, you can update the tester without losing
your solution code. In a command shell, **cd** into the folder you created to
hold the tester.

If you installed using **npx degit** then update with

```
npx degit criesbeck/cs325-js-tester
```

If you installed using **git clone** then update with

```
git pull
```

## Resources

[Hello, JavaScript!](https://courses.cs.northwestern.edu/394/guides/intro-js.php) is
the primary resource for these exercises. It emphasizes
[the modern parts of JavaScript](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#use_modern_js_features).
It deliberately ignores and does not recommend elements such as **var**, **function**, **for**, and so on.

For a longer introduction to JavaScript, see  [The Modern JavaScript Tutorial](https://javascript.info/). Note that to be complete it covers many features in JavaScript that are no longer 
recommended practice. 

A good reference for specific details about various JavaScript functions and methods is  
[the Mozilla Developer site](https://developer.mozilla.org/en-US/).


## Authors

* **Chris Riesbeck** - [home page](https://users.cs.northwestern.edu/~riesbeck/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
