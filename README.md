# introduction2modernjs
Introduction to modern JavaScript - presentation given in the Infusion office, Wroclaw, Poland

My aim was to get colleagues interested in JavaScript application development, and show them some tools that help with development and application scaffolding.

## Presentation

This presentation touches:
- a bit of JavaScript history
- NodeJS, npm (Node Package Manager)
- online tools: Plunkr, Codepen, jsFiddle
- yeoman - universal project scaffolder
- e2e tests using DalekJS

## Launching e2e tests

This repo contains two simple e2e tests created using DalekJS. After cloning the repo just ```npm install``` and then ```npm install -g dalek-cli``` and you should be ready to go. Type ```dalek dalek-tests.js``` to launch tests. Tests use Chrome browser by default, but this behavior could be changed using ```Dalekfile.json```
