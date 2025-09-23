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
