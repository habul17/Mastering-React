# Notes

## Using Version Control

- Let us create version control for mastering React

- First you need to initialise git locally

`git init` : initialize git locally

- After initializing git you need to add all files to staged area

`git add .` : Move all files to staging area (if . is used) or you can specify which file to add by explicitly mentioning the file name.

- opttionally you can now change the branch from master to main

`git branch -M 'main'` : change branch from master to main

- after moving files to staging area you need to move all files to local git

`git commit -m "message"` : -m flag is used for message.

- after moving file to local git its time to push the file to github , before that you need the link of your repositiory

`git remote add origin <link>` : connect to the repository of the github

- Now you need to push the file from local to cloud 

`git push origin main` : push file to github

## Difference between git & github

`git` : This is the actual versioning system

`github` : This is a website where all your git repositiory is hosted , you can view others code , do pull request and etc..

## NPM

- To make a production ready code only react isn't enough you need bundlers like webpack, parcel, vite etc.. , caching, minification all these are necessary.

`npm` : is a fmaous javascript package manager which has all the open source tools and packages

`npm init` : initialize npm in your local project and ask bunch of question if you want auto accept everything add -y flag.

- This creates package.json which is a configuration file for npm it has all the details and also the details of dependencies

- Now let us install our bundler parcel as a dev dependencies

- There are 2 types of dependenices

    - dependencies - packages or tools needed in the production also
    - dev dependencies - packages or tools needed only for devlopment and not for production like , bundlers , tes scripts like jest etc...

`npm i -D parcel` : installs parcel bundler for your project

- This creaets 3 extra folders in you project

`node_modules` : This is the folder where all the packages are installed , all the dependencies its dependencies .. are installed here this is called transitive dependencies.

`package-lock.json` : This is where exact verion of all packages and dependencies are stored , this solve the problem of 'but its working in my computer'

`package.json` : inside it you can see new dependecy is added which is parcel

`.gitignore` : ignore files from pushing to git

- you can see ^ near dependencies which allows you to update to lates minor update
- ~ let it automatically update if it is patch

- now install react , delete cdn and then install and import from node_module -> react and reactDOM

---