# Automation with Jest & Puppeteer & Supertest
### **Description** 
Automate test with Puppeteer and jest, written with javascript.\
the purpose of the project build automation system tests and Scraping the website.

*REFERENCES*:
1) *https://jestjs.io/*
2) *https://pptr.dev/*
3) *https://npmjs.com/package/jest-html-reporters*

- UI tests
  - Project: demoblaze
  - website: https://www.demoblaze.com/
  - type: user interaction tests

<br>

- APIS TESTS
  - Project: restful-booker
  - website: https://restful-booker.herokuapp.com
  - type: restful api test 

**Basic Project structure**
```
── puppetter_jest
│  ├─ Qualitest.ico
│  ├─ README.MD
│  ├─ configuration
│  │  ├─ jest.config.js
│  │  ├─ puppeteer.config.js
│  │  └─ supertest.config.js
│  ├─ html-report
│  │  ├─ jest-html-reporters-attach
│  │  │  └─ report
│  │  │     ├─ index.js
│  │  │     └─ result.js
│  │  └─ report.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ data_test
│  │  │  └─ apiData.json
│  │  └─ models
│  │     ├─ APIS
│  │     │  ├─ base_http.js
│  │     │  └─ request_http.js
│  │     └─ UI
│  │        ├─ base_page.js
│  │        ├─ home_page.js
│  │        ├─ login_page.js
│  │        └─ signup_page.js
│  └─ tests
│     ├─ api_getAllBooking.test.js
│     ├─ api_postBooking.test.js
│     ├─ api_token.test.js
│     ├─ ui_cartAddProduct.test.js
│     ├─ ui_loginFails.test.js
│     └─ ui_loginSuccess.test.js
└─ html-report
   ├─ jest-html-reporters-attach
   │  └─ report
   │     ├─ index.js
   │     └─ result.js
   └─ report.html
```
   
 **Tested on**
 - node.js v12.19.1
 - MacOs Catalina 10.15.7
   
**Dependencies**
 - jest v27.5.0
 - jest-html-reporters v3.0.5
 - puppeteer v13.2.0
 - supertest v6.2.2

**Installation and executing**
1) clone project from github repository.
```cmd
$ git clone https://github.com/erezasmara/Automation_puppeteer_jest.git
```
2) install dependencies packages.
```cmd
## packages installation
$ npm i 
$ npm i -D

## force install chromium-browser
$ sudo npm install puppeteer --unsafe-perm=true --allow-root
```

**Run**\
Switch to staging branch.
```
1) run all tests
$ npm run test:all

2) run ui tests
$ npm run test:ui

3) run apis tests
$ npm run test:apis

4) run visual mode
$ npm run test:visual

5) run debugging mode 
$ npm run test:debug

6) run incognito mode
$ npm run test:incognito

7) run test parallel
$ npm run test:parallel
```

**Terminal Output**
![terminal-output](https://user-images.githubusercontent.com/33747218/153761063-5eafbeca-4af0-43ef-84b1-839554671ee6.png)

**Reports Output**
./html-report/report.html
![html-report](https://user-images.githubusercontent.com/33747218/153761067-2a6462c9-e523-4272-a7c1-39899c877abc.png)
![html-report1](https://user-images.githubusercontent.com/33747218/153761071-bd7c5a76-23ea-4142-a9ca-83f7c31a53c7.png)
<BR>

**Enjoy!.**

Made by erezAs (c)
