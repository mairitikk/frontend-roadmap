# Useful commands

## Important

- Terminal should be in "Command Prompt", NO in "Powershell"


## Command Shell

- List folders: dir (command prompt) | ls (Powershell)
- Move between folders: cd FOLDER/FOLDER2
- Go to previous folder: cd ..
- Create dir: mkdir FOLDER

## npm

- create package.json: npm init --yes

## Node SASS
- instalar Sass: npm install -g node-sass (only one time)
- generate css: node-sass -o css scss/main.scss
- generate css with watch: node-sass -o css scss/main.scss -w

## for starting 
npm run watch

## restart terminal ctrl +c
y (yes)
and npm run watch

# Steps 
1) set Terminal in "Command Prompt"
2) find the correct folder using cd comand
3) create package.json: npm init --yes
5) change the script attribute in package.json from test to watch and add as value: node-sass -o css scss/main.scss -w
6) start: npm run watch
7) every time when open new visal Studio : npm run watch
