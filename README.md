# LearnJS Exercise Tester

**LearnJS** is a web application for JavaScript exercises with test cases, written with Vue. Download
and serve this application locally to see the exercises, write solutions, and test them.

## Requirements

You need up-to-date versions of the following installed:

* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Recommended for editing code:

* [Visual Studio Code](https://code.visualstudio.com/download) 
* [Live Server plug-in installed in VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


## Installing LearnJS

Download this repository. Use the ![](./download-code.png) button to get a Zip archive or
the terminal command to create a **learn-js** directory:

```
git clone https://github.com/criesbeck/learn-js.git
```

## Running in VS Code

In VS Code, use **File | Open** to open the **learn-js** directory.

Start [Live Server.](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

The LearnJS Exercise Tester page should open on http://localhost:5500. It should look like [this](https://criesbeck.github.io/learn-js/).

## The LearnJS interface

The LearnJS Exercise Tester page displays a list of JavaScript exercise modules. 
The color of each module indicates the status of the exercises in it:

* <span style="color:gray">gray</span> means none of the exercises in the block have been started
* <span style="color:red">red</span> means one or more exercises in the block have failing test cases
* <span style="color:orange">orange</span> means some of the exercises in block are done
* <span style="color:green">green</span> means all the exercises in the block are done

Click on a module to see the exercises in it, along with a few background links on relevant
materials. The exercises are also color coded:

* <span style="color:gray">gray</span> means the exercise has not been started
* <span style="color:red">red</span> means one or more test cases fail
* <span style="color:green">green</span> means all the test cases pass

Click on a specific exercise to see what you need to write, and 
the test cases that your solution has to pass.

Out of the box, the solution to the first exercise in the first module is broken. That's why the
first module is <span style="color:red">red</span>. 

Click on the first module to open it up. That will show that the **rectPerimeter** exercise is
<span style="color:red">red</span>. That is the exercise that has a broken solution.

Click on **rectPerimeter** to see details. Every exercise asks
you to define a function. The exercise describes what arguments the function takes, 
what the function returns, and what test cases have to be passed. 
Each test case has:

* a call to the function
* the value that should be returned by the function call
* the value that the current solution returns, if a solution has been defined

In this case, **rectPerimeter(x, y)** is supposed to take the dimensions of a rectangle and return
the perimeter, but the current solution is returning a number that is too small in both cases. 

## Solving an exercise

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

Use modern JavaScript features.

Write clean code. Unless required by the exercise, solutions should not

* destructively modify input objects
* print anything

## Resources

[Hello, JavaScript!](https://courses.cs.northwestern.edu/394/guides/intro-js.php) is
the primary resource for these exercises. It covers just the parts you need to know for 
the exercises and to get started with React programming.

[Modern JS Features](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#use_modern_js_features)
gives a quick list of what "modern JavaScript features" normally means.

For a longer introduction to JavaScript, see  [The Modern JavaScript Tutorial](https://javascript.info/). Note that to be complete it covers many features in JavaScript that are no longer 
recommended practice. 

A good reference for specific details about various JavaScript functions and methods is  
[the Mozilla Developer  site](https://developer.mozilla.org/en-US/).


## Authors

* **Chris Riesbeck** - [home page](https://users.cs.northwestern.edu/~riesbeck/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
