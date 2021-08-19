# LearnJS Exercise Tester

**LearnJS** is a web application for JavaScript exercises with test cases, written with Vue. Download
and serve this application locally to see the exercises, write solutions, and test them.

## Requirements

You need up-to-date versions of the following installed:

* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Recommended for editing code:

* [Visual Studio Code](https://code.visualstudio.com/download) 
* [Live Server plug-in installed in VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

You need to know how to open in a terminal window to run a shell command.

* On a MacIntosh, use the **Terminal** application. [Terminal Beginners Tutorial](https://academind.com/tutorials/terminal-zsh-basics/)
* On Windows, use the **Git Bash** application. It's installed with Git for Windows. [Command Line Interace Tutorial (with Git Bash)](https://www.youtube.com/watch?v=sw9kdFka8rA)

## Installing LearnJS

Create a directory where you will keep your code projects. 

Open a terminal commmand window and **cd** to that directory. Enter the following three commands.

```
git clone https://gitlab.com/criesbeck/learn-js.git
```

The first line downloads the LearnJS code. If you want to use a different name, add
it to the end of the above command, e.g., 

```
git clone https://gitlab.com/criesbeck/learn-js.git exercise-tester
```

## Running

Since the point of this application is to edit and test code, it makes sense to run LearnJS
inside an editor that supports that, like VS Code.

If you have VS Code installed, start it. Use **File | Open** to open the *learn-js* directory.

Open the **index.html** file. If the Go Live button does not appear at the bottom of the screen,
type control-shift-P (Windows, Linux) / command-shift-P (MacOS), type "Live Server", and select it
to activate it.

The LearnJS Exercise Tester page should open on http://localhost:5500. It should look the same
as [this page](https://criesbeck.github.io/learn-js/).

## The LearnJS interface

The LearnJS Exercise Tester page shows a list of JavaScript exercise modules.
Each module contains exercises to do.

The color of the module name indicates the status of the exercises in it:

* <span style="color:red">red</span> means one or more exercises in the block have failing test cases.
* <span style="color:green">green</span> means all the exercises in the block are done.
* <span style="color:orange">orange</span> means some of the exercises in block are done.
* <span style="color:gray">gray</span> means none of the exercises in the block have been started.

Click on a module name to see the exercises it contains, and links to relevant
materials to read.

Click on an exercise to see a description of what it's supposed to do, and 
the test cases that your solution has to pass.

Out of the box, the first module will be in <span style="color:red">red</span>. That
means one or more of its exercises have tests that fail.

Click on the first module to open it up. That will show that the **rectPerimeter** exercise is
<span style="color:red">red</span>. That is the exercise that has a broken solution.

Click on **rectPerimeter** to see a description of the exercise. Every exercise asks
you to define a function. The exercise gives a brief
description of the function to be defined -- what it is passed and what it returns --
and a table of test cases. Each test case has:

* a call to the function
* the value that should be returned by the function call
* the value that the current solution returns, if a solution has been defined

In this case, **rectPerimeter(x, y)** is supposed to take the dimensions of a rectangle and return
the perimeter, but the current solution is returning a number that is too small in both cases. 

## Editing solutions


To see how **rectPerimeter** is currently defined, open the file **solutions.js** in
your text editor. The initial definition there is

```
export const rectPerimeter = (x, y) => x + y;
```

If you want to know what this does, see the
[resources](#resources) for introductions to JavaScript.

This definition of **rectPerimeter** fails because it just adds the two sides, **x** and **y**. 
To get the perimeter, it needs to return twice that amount. Edit the definition to be

```
export const rectPerimeter = (x, y) => 2 * (x + y);
```

Save the file and go back to the web page again. **Live Server** should have updated the page automatically. 
The **rectPerimeter** test cases should now all be green.

The module name should now be <span style="color:orange">orange</span>. That means it has no failing cases, 
but it does have exercises with no solutions.

## Exercise guidelines

Solutions are functions. They must be defined in **solutions.js** and
exported for the tester to see them. See the definition of **rectPerimeter** for an example.

Feel free to define helper functions, but don't export them.

Write modern code. Use arrow syntax to define functions.

Write clean code. Unless required by the exercise, solutions should not

* destructively modify input objects
* print anything


## Resources

[Hello, JavaScript!](https://courses.cs.northwestern.edu/394/guides/intro-js.php) is
the primary resource for these exercises. It covers just the parts you need to know for 
the exercises and to get started with React programming.

For a longer introduction to JavaScript, see  [The Modern JavaScript Tutorial](https://javascript.info/). Note that to be complete it covers many features in JavaScript that are no longer 
recommended practice. 

A good reference for specific details about various JavaScript functions and methods is  
[the Mozilla Developer  site](https://developer.mozilla.org/en-US/).


## Authors

* **Chris Riesbeck** - [home page](https://users.cs.northwestern.edu/~riesbeck/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
