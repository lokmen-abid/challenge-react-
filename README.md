# React app challenge (from scratch)

## Objective

The goal of this challenge is to get your hands dirty writing code with the least ammount of help possible. We encourage you to use this README file and MOSTLY (if not only) this README file while developing your application.

As we said during the quick call we had yesterday, you will only master react if you try to create an app, from scratch, with no external resources whatsoever.

We believe the most PERFECT application to master react is a todolist app. What you will be doing in this sprint is creating 3 main components:

- [ ] The App component
- [ ] The TodoList component
- [ ] The TodoItem component
- [ ] The AddTodo component

Eventually, your app will look almost like [this](https://www.kirupa.com/react/examples/todolist/index.html)

Note that the source code for this exact app is available on github. However, remember that you're doing this for yourself and that checking out the solution code, even if you're stuck, is considered as cheating yourself. If you plan to do that, feel free to take a rest for the entire day as it would be much more beneficial for you...

Before you start coding, think of the functionalities that you want to have in your todo app. First of all, you want to be able to see all todos. Also, you would probably want to add, delete and maybe update a specific todo.

Now, let's think of what each and every component should be and what state should it hold. The app component renders both the AddTodo and the TodoList components. The AddTodo component will create a new todo and add it to the list of todos while the TodoList component will take care of rendering all those todos. With that said, think about where you want your todos array state to be? Think about how you're going to pass the newly created todo to that list and how you're going to pass the todos to the TodoList component.

Finally, think about where the delete and update todo functions should be? Where should they be invoked? How to pass them through your components? It's okay to pause for a second, grab a piece of paper and plan ahead before you dive into the code.

Now that you're ready, follow the instructions to setup your application.

One last note before we start, whenever you're stuck in an error, follow this process:

- [ ] Take a screenshot of it or simply mark it down.
- [ ] Try to solve it on your own by reading the error on the terminal.
- [ ] Try to solve it on your own by reading the error on browser console.
- [ ] If it's a semantic error, use console.log and check the console. Maybe your function is not executing? maybe you're not passing props correctly? Maybe you're not updating your state?...
- [ ] Google it.
- [ ] If solved, please write down the steps you followed to actually solve it (as silly as it might be)
- [ ] If not, slack @Henimezrani and I'll join you on discord. As soon as we solve it, write donw the steps you did to solve it
- [ ] By the end of the day, we will have a quick call to share the errors that we encountered and how everyone managed to solve them.


## Basic requirements

We want you to start simple and focus on a working product. At the same time this challenge has no limitations and we encourage you to be creative in terms of functionality and style.

### Example User stories
- **Create todo** As a user I want to create a new todo/task
- **List todos** As a user I want to see all my todos in a list.
- **Delete todo** As a user I want to delete a todo from the list when I'm done with it.

Optional:

- **Update todo** A a user I want to be able to modify an existing todo.
- **Move todos** As a user I want to rearrange my todos.


### Delivery requirements
- Push your application to GitHub and send the repository url on Slack.
- It should show a list of todos/tasks.
- It should include a form to add todos/tasks.
- The solution must run properly


### Delivery extra (not required)
- Use redux
- Any kind of look & feel or usability improvement for showing your ability/experience in making attractive UI/UX.
- Any extra comment explaining about what was done or what the candidate would had wanted to improve but didn’t due to lack of time, will be appreciated.


## Instructions

### Set up (part 1)

Here, we decided to let you do the entire application FROM SCRATCH.

Now, if you remember, most of our projects since we started react until databases yesterday contain a `package.json` file that has all the dependencies and scripts to start your application. This repo will only contain a `README` file. But don't worry, we got you covered.

So before we start, let's see how we can actually start a project from scratch (even though you will not be doing that)

- [ ] Open the terminal in this current directory (either on VS Code, Git Bash or the cmd)
- [ ] run `npm init`

this command initializes a nex project for you. In the terminal, you will be asked some questions in order to set up your project. What's the name of the project? Version? Description? entrypoint? test script? repo? and so on...

You can either answer those questions one by one, pressing `enter` each time then finally confirming with `enter`. If you want the default config, just run `npm init -y` to basically answer YES to all the questions and keep the default.

Now that you are done, you should see a `package.json` file.

Congratulations, you have just initialized your first project.

Now, as we know, every project needs some dependencies to run. If we're writing a react app, we will probably need dependencies like react, react-dom, webpack and so on... If it's a backend project, we will need express, nodemon and so on.

Now, if you have been careful in the last couple of sprints, we explained during the solution that nodemon is a cool tool to have when you're developing an application. However, you do not want to have it in production (meaning, when your application is fully running and ready to show for the world!) Same thing for babel, when writing code, you want your application to transpile the code from jsx to js. However, when in production, you will build your application and deploy the final version for the world to see. Now do you really need nodemon or babel to be in your production code? Probably not even though that will not hurt you.

For that reason, you can install dependencies in multiple ways.

- [ ] For dependencies like react, react-dom that are crucial for our application to work in production, we install them using `npm i --save react` or simply `npm i react`
- [ ] For dev dependencies like nodemon or babel, since I only need them in development mode, I will install them using `npm i --save-dev babel` or simply `npm i -D babel`
- [ ] For global dependencies that you want to be accessible from everywhere, regardless of the project, you would probably want to install them globally. A good example of global dependencies is CLIs (Command Line Interfaces) that help you initialize a new project in a specific language for example. You can also do that for dependencies like nodemon (It's not recommended but I have nodemon globally and I'm ashamed of it...). To do that, you simply do `npm i -g nodemon`


Now that you have learnt what dependencies are, let's install the dependencies that our project needs! For this first part of the challenge, we will set up an application from scratch in two ways. The first one is using Webpack!

- [ ] install the following `dev dependencies`:
    "@babel/core"
    "@babel/preset-env"
    "@babel/preset-react"
    "babel-loader"
    "webpack"
    "webpack-cli"
    "webpack-dev-server"

PRO TIP: To install multiple dependencies at one, you can simply do the following:

Suppose I want to install both webpack and babel-loader, I would run `npm i webpack babel-loader -D` and it will install both at the same time. Can you do that for all the dev dependencies?

If you did that step, go check out your package.json file. What does it contain now? That cool right?

Now, Install the dependencies of your project. For now, you will just need two. Can you figure out what they are before you take a sneak peak down there?

- [ ] Install the following dependencies:
    react
    react-dom

Perfect! Look what we have now in our package.json. Also, notice the new folder called `node_modules` in our directory. What does it contain? Take a sneak peak there and see if react is in there! Wait... How come it contains other stuff that I did not install? Well, if you remember the nodeJS or expressJS sprint, we used libraries like fs, http and so on. We did not need to install them in order to use them because they are part of the **Core NodeJS Modules**. Meaning, they come in handy with any project as soon as you do `npm i`

Now that you're all set, we're missing one more step to finish the set up. What is that? Wan you guess it?

You're probably right. We need to set up webpack! Now this is pretty tricky to do because if you google it, you will find a lot of articles that use different versions of webpack. Since we are using the latest versions, here is how to set up a react app with webpack.

First, let's look at the structure that we are going to have.

    ├── /build                  # Contains the build of our application.
    │   ├── index.html          # The HTML file that we will serve to see our application
    │   ├── style.css           # Stylesheet for our application
    │   └── bundle.js           # The file created by webpack that bundles all of our JSX files in the src folder
    ├── /src                    # Source files. This is where we will be writing code
    │   ├── index.jsx           # Main entry-point of our application. This is where we are going to render our app into the DOM.
    │   └── /components         # A folder that contains all of our components
    │       └── Component1.jsx
    │       └── Component2.jsx
            └── ...
    ├── package.json            # We covered this
    ├── webpack.config.js       # All your webpack config goes here
    └── .gitignore              # What the hell is this? I'm glad you asked

Let's pause here for a second. What is that .gitignore file? Now that I think of it, it's in almost all of our repos that you clone from the organization! How come?

Imagine if I push a project that has 100 dependencies. That will literally take forever to push. Also, do I consider the dependencies as part of my project? Do I really need to push them to github everytime?

The answer is no! Even if you're collaborating on a project within a team, your team just has to run `npm i` and they will have all the dependencies that the project needs. One more reason to create this file is the following. Imagine you're working on a project that handles financial information of people that you store in a database. In order for the app to work, you need to connect it to a database! In yesterday's sprint, you had to put the link to the db and your password in the code. For now it's fine. However, how about when your application is deployed? Do you really want people to access your database and be able to see your password on github? For that reason, you should put your credentials in a file (let's name it config.js for now, but it has another name that you will discover next week) and you need to add that file to the .gitignore file so that it's not tracked when you do git add and not pushed when you do git push.

Now, let's go back to the content of the files that we talked about above.

The .gitignore should contain the following code:

    node_modules

The index.html should contain the following code:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>React Challenge</title>
        <link href="style.css" rel="stylesheet" />
        <script defer src="bundle.js"></script>
      </head>
      <body>
        <noscript> You need to enable JavaScript to run this app. </noscript>
        <div id="app">
          <!-- This div is where our app will run -->
        </div>
      </body>
    </html>

The webpack.config.js should contain the following code:

    const path = require("path");

    module.exports = {
      entry: path.join(__dirname, "src", "index.jsx"),
      output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
      },
      devServer: {
        contentBase: "./build"
      },
      mode: "development",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          }
        ]
      }
    };

I will leave this to you to understand what each line means. I invite you to go back to the react koans sprint or just google it.

FINALLY! We're ready to go! Oh wait... Now that I have all the config ready, how do we start the app? npm scripts to the rescue!

Since we started with a project from scratch, we need to set up a couple of scripts. What is a script? In any project, there are some commands that you need to execute very often. In order to avoid writing those commands over and over again (some of them may be very long) you can create your own scripts. When you execute those scripts in the terminal, it will execute the command that you want. How to do that, let's go back to our package.json file.

- [ ] add a `start` script that will bundle all the src files into the bundle.js and serve the app on the browser. We will do that through this command: `webpack serve --config ./webpack.config.js`

Congratulations! If you run `npm start` and go to http://localhost:8080/ , you should see..... NOTHING

Why is that? our index.jsx is empty!

Now let's create our first component, the App Component. For that, we need to go to the index.jsx and do a couple of things.

We need to create a react component and render it to the DOM. Can you think of the dependencies that we need to import? Can you try to write it on your own? Remember the following. How can a class become a React Component? What should it extend? What should in contain? How about the ReactDOM render function? What does it take as arguments? What's the id of the target in my index.html? Try to do this step on your own!

If you're stuck, here's how to do it. in the index.jsx file, write the following code.

    import React from "react";
    import ReactDOM from "react-dom";

    class App extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return <div>Hello</div>;
      }
    }

    ReactDOM.render(<App />, document.getElementById("app"));


Now, visit http://localhost:8080 . If you do not see "Hello", that means that you probably forgot to execute `npm start` (caught you, shame on you! I see you laughing there)

Now, really, congratulations. But unluckily for you, this will be the last piece of code that you see written for you. Starting from now, I will guide you, step by step to write your app. Please only refer to the code written in this readme file when coding your application.

### Set up (part 2)

If you have reached this, that you have successfully started your app and that you see "Hello" on the browser.

Now, what I want you to do is pretty simple. Delete **EVERYTHING except the REAME.md file**. Yess, you heard that right. Delete it. Now!

Done? Alright, The second way I'm going to show you is much easier and it will absolutely work fine for any app that you will do for the rest of the immersive. We are going to be using a tool that sets up the entire environment for us, no code needed.

Open up your terminal and run the following commands:

- [ ] npx create-react-app todolist
- [ ] cd todolist
- [ ] npm start

npx is not a mistake, it’s a package runner tool that comes automatically with npm.

Take a look at the package.json file. What is `react-scripts`? react-scripts is a set of scripts from the create-react-app starter pack. create-react-app helps you kick off projects without configuring, so you do not have to setup your project by yourself. react-scripts start sets up the development environment and starts a server.

Notice that it has almost the same structure. Now, take a look at everything that is inside the src folder. Are you done? Great! Now delete everything inside the src folder and the public folder. Yes, everything, once again.

In the public, create and index.html file:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>React Challenge</title>
      </head>
      <body>
        <noscript> You need to enable JavaScript to run this app. </noscript>
        <div id="app">
          <!-- This div is where our app will run -->
        </div>
      </body>
    </html>

In the src folder, create the following files:

index.css (leave it empty for now, go back to it as you write code)

index.js:

    import React from 'react'
    import ReactDOM from 'react-dom'
    import './index.css'
    import App from './App.js'

    ReactDOM.render(<App />, document.getElementById('app'))

App.js: Start your work here

Finally, create a folder called 'components' inside src that will contain all of your components.

Notice that using create-react-app, you do not need to use JSX. go ahead and create your components inside the components folder as Component1.js and Component2.js.

Make Component1 a functional component and Component2 a stateful component. Remember, what does component 2 need to import? What to extend? Alright! Now render both components in the app and see how it turns out!

If you have done this correctly, here is what your files should look like:

App.js:

    import Component1 from "./components/Component1";
    import Component2 from "./components/Component2";

    function App() {
      return (
        <div>
          <Component1 />
          <Component2 />
        </div>
      );
    }

    export default App;


components/Component1.js:

    function Component1() {
      return (
        <div>
          Hello from Component1
        </div>
      );
    }

    export default Component1;


components/Component2.js:

    import react from "react";

    class Component2 extends react.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return <div>Hello from Component2</div>;
      }
    }

    export default Component2;
