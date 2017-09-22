# Welcome to Peaks Test Project.

## How to install and run the project

1. Fetch the git repository via :

```
git clone https://github.com/seedy/peaksTest
```

2. Install Node and NPM
- Node v6.9.4 (https://nodejs.org/en/download/)
- Then open a cmd and check your NPM version :
```
npm -v
```
- Version used for the project : 5.3.0
You can install this version through the command :
```
npm install -g npm@5.3.0
```

3. Install the project's dependencies

Open a terminal at the project's root
```
npm install
```

4. Marvel API Keys

To consume data from Marvel API, you need to insert your public api key in the project.
Run a terminal at the project's root
```
mkdir secret
```

Either copy the file manually or create a new one via :
```
touch secret/marvel-keys.ts
```
Here's the expected file format :
```
export const marvelKeys = {
  "apikey": "XXX"
};
```

5. Launch the app locally

Within your terminal at the project's root
```
npm start
```
A browser page should open under (http://localhost:8080)
If not just go to the link on your browser.

## How to run unit-tests

### Prerequisite : install the project, then...

1. Within a terminal at the project's root

```
npm test
```

Will run the project's unit tests in your command line and launch karma's debugger on chrome.


## Development Choices and Comments

My stack for this project :
 
 - Angular2
 
 As my frontend dev framework. I'm still learning stuff on it, but I'm getting more and more used to it.
 I used this test as an occasion to train even more on aspects I didn't focus on yet - mainly unit tests.
  
 - Angular-Material
 
 I love material design and got pretty much bored of Bootstrap design pattern.
 Much more precise rendering, made very easy thanks to the flex and layout integration.
 
 - Sass
 
 Easy and efficient tool for css design and organizing. 
 I find Angular2's scoping pattern for CSS awesome! No more colliding rules.
 
 - Karma / Jasmine
 
 My bread and butter for unit-tests, I went deep on their use with AngularJs.
 I'm still learning on TestBed and the new components brought by Angular2.
