# About

This repo is a scratchpad for the files and lessons learned from [Intro To Node](https://frontendmasters.com/courses/node-js/course-overview/) by Scott Moss on Front End Masters.

## Motivation

I learn by writing and blowing things up. All of my repositories that start with the word "learnings" are from tutorials or books I have read.

## Goals for Project

-   documenting things I learned so I can use them as resource later
-   Introduction to mocha testing
-   general awesomeness in Node development

## Tech Used

-   [Node](https://nodejs.org/en/)
-   [Express](https://express.com/)
-   [Mocha](https://mochajs.org/)

## Installation

## Lessons Learned

-   What is node?
    -- Environment to run javascript outside a browser.
    -- Open source runtime
    -- Built on Chrome's V8 JS Engine
    -- It is single threaded and event based

-   What can I create with Node?
    -- Pretty much anything a scripting and server language like python or Ruby can do but with Js
    -- Tooling (build, automation, etc)
    -- API's (restm realtime)
    -- CDN's
    -- Shareable libraries
    -- Desktop Applications (with Electron)

-   Running JS Code
    -- Interactive REPL for playing around, cli for everything else

-   Browser vs Node
    -- No window, just global
    -- Node - no GUI, no DOM
    -- Browsers are now adopting common js
    -- No browser based API's in Node

-   Node Globals
    -- process - machines, name, pathm location, env variables - has info about the env the program is running in
    -- require - function to find and use modules in current module
    -- \_\_dirname the current directory path
    -- module - information about the current module (everything is a module), moethods for making a module consumable
    -- global, global object

-   Node Modules
    -- encapsulated code
    -- ecmascript modules will be the new standard (eventually)

-   Creating Modules
    -- as the author, decide what to expose
    -- module.exports can be a value or an object. rule of thumb is that if you are exporting more than one thing, export an object

-   Using Modules
    -- require, takes a relative path to the module you want to consume and synchronously loads it by returning whatever the target module exported

-   Shipped Modules
    -- fs - shipped with node, the file-system allows for anything dealing with...fies :)
    -- read, write, all that stuff
    -- path - useful for manipulating paths and handling diffs across many os's. Path.join is if you have a better idea of where the file is where path.resolve helps you resolve it without knowing that
    -- http - can create servers, apis, etc, low-level

-   Node Modules and NPX
    -- remote modules (npm, npx), shipped modules ('fs', 'path'), local modules (require('./app))
    -- npx allows cli usage of a remote module (i.e. create-react-appp)
-   Node is Single Threaded
    -- but it is event driven so you can use async JS

-   Error handling
    -- Errors kill your app, it'll caseut the process to crash and exit
    -- app will have errors that should not cause a crash, so you have to handle accordingly (i.e. responses to API)

-   Servers
    -- one server instance will handle many client requests

-   Node Debugging
    -- can use the --inspect flag when running node and use chrome://inspect to see console.

## Follow Ups

-   Checkout desktop applications built in Node
-   Refactor all test to use Mocha instead of jest
