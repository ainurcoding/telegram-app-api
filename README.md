
# mama_recipe_app
<div align="center"><img src="https://cdn-icons-png.flaticon.com/512/2899/2899298.png" height="50" width="50"/></div>
<div align='center'><a href='https://github.com/ainurcoding/telegram-app-fe'> >> Visit Frontend Repository << </a></div>

<hr />

### Description

<p>Telegram App is a real-time application that can carry out real-time chat conversations between its users. This application is made using NodeJS, JavaScript, CSS, and HTML technology. For use on the backend, I use Express JS (a library from NodeJS) and React JS for the front end (also a library from NodeJS).
</p>
<hr/>

## General Information

### Table of contents
<ul id='table-of-contents'>
  <li><a href='#build-with'>Build With</a></li>
  <li><a href='#structure-folder'>Structure Folder</a></li>
  <li><a href='#installation-guide'>Installation Guide</a></li>
  <li><a href='#commands'>Commands</a></li>
  <li><a href='#env-variables'>Environtment Variables</a></li>
  <li><a href='#api-documentation'>API Documentation</a></li> 
  <li><a href='#packages-included'>Packages Included</a></li>
  <li><a href='#demo-application'>Demo Application</a></li>
  <li><a href='#for-more-information'>For More Information </a></li>
</ul>

<hr />

### Build with
<ul id='build-with'>
  <li><a href='https://www.postgresql.org/'>postgre SQL (for Database Management System)</a></li>
  <li><a href='https://www.postman.com/'>Postman for API documentation management</a></li>
  <li><a href='https://www.npmjs.com/'>NPM for dependency management</a></li>
  <li><a href='https://github.com/motdotla/dotenv'>dotenv: for using environment variabels</a></li>
  <li><a href='https://helmetjs.github.io/'>helmet: for set security HTTP headers</a></li>
  <li><a href='https://www.npmjs.com/package/xss'>XSS: to sanitize untrusted HTML (to prevent XSS)</a></li>
  <li><a href='https://github.com/expressjs/cors'>CORS: Cross-Origin Resourece-Sharing enabled using</a></li>
  <li><a href='https://github.com/kelektiv/node.bcrypt.js'>bcrypt: for hashing password</a></li>
  <li><a href='https://eslint.org/'>ESLINT: for linting and prettier code formatter</a></li>
  <li><a href='https://expressjs.com/'>ExpressJS: for CRUD management</a></li>
  <li><a href='https://jwt.io/'>JWT: for generate JSON WEB TOKEN</a></li>
  <li><a href='https://cloudinary.com/'>Cloudinary: (for file management such as photo or video)</a></li>
  <li><a href='https://socket.io/'>Socket.io: Bidirectional and low-latency communication for every platform.</a></li>
  <li><a href='https://nodejs.org/en/'>NodeJS</a></li>
  <li><a href='https://github.com/ainurcoding/mama_recipe_app/blob/master/backend/package.json'>and you can see the dependencies used in the package.json</a></li>
</ul>
<a href='#table-of-contents'>Back to top</a>
<hr />


### Structure Folder 
<p id='structure-folder'>Backend</p>
<ul>
  <li>public</li>
  <ul>
    <li>img <span><b><i>image public access</i></b></span></li>
  </ul>
  <li>src</li>
  <ul>
    <li>config ||<span><b><i>You can put database configuration in here</i></b></span></li>
    <li>controller ||<span><b><i>This folder for the logic componenent of API</i></b></span></li>
    <li>helper ||<span><b><i>This folder is used to help improve the logic of the controller, for example, response alignment.</i></b></span></li>
    <li>middleware ||<span><b><i>Middleware is used as a bridge during the routes API, for example, uploading images.</i></b></span></li>
    <li>model ||<span><b><i>Models are used to give commands to database manipulation, as in the crud example.</i></b></span></li>
    <li>router ||<span><b><i>The router is the place to set the endpoint for the API.</i></b></span></li>
    <li>socket ||<span><b><i>This folder contains configuration based on the socket.io library, which manages the application to run in real time.</i></b></span></li>
  </ul>
  <li>index.js || <span><b><i>You can setup this application in this file, such as set port, set another library, and other.</i></b></span></li>
</ul>
<a href='#table-of-contents'>Back to top</a>
<hr/>

### Installation Guide
<p id='installation-guide'>Backend</p>
<ol type="1">
  <li>Clone the repo git clone https://github.com/ainurcoding/mama_recipe_app.git</li>
  <li>Run `npm install` to install the dependencies</li>
  <li>Import database `db_mama_recipe_psql` to your PostgreSQL ([Backup and Restore PostgreSQL](https://www.postgresql.org/docs/8.1/backup.html#BACKUP-DUMP-RESTORE</li>
  <li>Set the environment variables:</li>
  <ul>
    <li>PORT: fill for set the API running port</li>
    <li>DB_HOST: fill for set the database host</li>
    <li>DB_PORT: fill for set the database port</li>
    <li>DB_USER: fill for set the database user</li>
    <li>DB_PASSWORD: fill for set the database password</li>
    <li>DB_NAME: fill for set the database name</li>
    <li>JWT_SECRET: fill for set the jwt secret</li>
    <li>CLOUD_NAME: fill for set the cloudinary name</li>
    <li>API_KEY: fill for set the cloudinary API key</li>
    <li>API_SECRET: fill for set the cloudinary API secret</li>
  </ul>
  <li>You can first import the postman documentation contained in this repo and pay attention to the fields in each POST request.
</li>
<li>Run With</li>
<ul>
  <li><b>npm run start</b> : if you want to run it in client mode (use <b>node</b>) without auto restart on every changing code</li>
  <li><b>npm run dev</b> : if you want to run it in developer mode (use <b>nodemon</b>) every change and save it will auto restart</li>
</ul>
</ol>
<a href='#table-of-contents'>Back to top</a>
<hr />

### Commands 

<p id='commands'>Running in client mode</p>

```
npm run start
```

Running in developer mode:

```
npm run dev
```

Testing:

```
npm run test
```

Linting:

```npm run lint -- --fix```

<a href='#table-of-contents'>Back to top</a>
<hr />

### Environment Variables

<p id='env-variables'>The environment variables can be found and modified in the `.env` file. They come with these default values:</p>

```
DB_USERNAME=your_DB_USERNAME
DB_HOST=your_DB_HOST
DB_DATABASE=your_DB_DATABASE
DB_PASSWORD=your_DB_PASSWORD
DB_PORT=your_DB_PORT
PORT=your_PORT
SECRET_KEY_JWT=your_SECRET_KEY_JWT
# cloudinary
CLOUD_NAME=your_CLOUD_NAME
API_KEY=your_API_KEY
API_SECRET=your_API_SECRET
```

<a href='#table-of-contents'>Back to top</a>
<hr />

### API Documentation

<p id='api-documentation'>List of available routes:</p>

**Auth Route**\
`POST /register` - register\
`POST /login` - login

**users Route**\
`GET /user` - list users\
`GET /user/:id` - Get user by user id\
`PUT /user/update_ava_cloudinary/:id` - Update avatar user by user id\
`PUT /update_data_user/:id` - Update data user by user id\
`DELETE /delete_user/:id` - Delete user by user id



<a href='#table-of-contents'>Back to top</a>
<hr />

### Packages Included

<ul id='packages-included'>
  <li><p>NPM dependencies</p></li>
</ul>


  ![](https://img.shields.io/badge/bcrypt-v5.0.1-blue)
  ![](https://img.shields.io/badge/body--parser-v1.19.2-blue)
  ![](https://img.shields.io/badge/cors-v2.8.5-blue)
  ![](https://img.shields.io/badge/dotenv-v16.0.0-blue)
  ![](https://img.shields.io/badge/express-v4.17.3-blue)
  ![](https://img.shields.io/badge/express--validator-v5.3.1-blue)
  ![](https://img.shields.io/badge/helmet-v5.0.2-blue)
  ![](https://img.shields.io/badge/pg-v8.7.3-blue)
  ![](https://img.shields.io/badge/multer-v1.4.4-blue)
  ![](https://img.shields.io/badge/xss--clean-v0.1.1-blue)
  ![](https://img.shields.io/badge/jsonwebtoken-v8.5.1-blue)
  ![](https://img.shields.io/badge/sweetalert-v2.1.2-blue)
  ![](https://img.shields.io/badge/reactstrap-v9.0.2-blue)
  ![](https://img.shields.io/badge/react-router-dom-v6.3.0-blue)
  ![](https://img.shields.io/badge/react-dom-v17.0.2-blue)
  ![](https://img.shields.io/badge/react-v17.0.2-blue)
  ![](https://img.shields.io/badge/jwt-decode-v3.1.2-blue)
  ![](https://img.shields.io/badge/axios-v0.26.1-blue)
  ![](https://img.shields.io/badge/bootstrap-v5.1.3-blue)
  ![](https://img.shields.io/badge/socket.io-4.5.3-blue)
  
<a href='#table-of-contents'>Back to top</a>
<hr />

### Demo Application
<p id='demo-application'><a href='https://github.com/ainurcoding/telegram-app-fe'>Visit frontend repository</a></p>
<p>Visit this link for app demo <a href='https://telegram-app-henna.vercel.app/'>Telegram App</a></p>

<a href='#table-of-contents'>Back to top</a>
<hr />

### For More Information
<p id='for-more-information'>My Social media account:</p> <br />
<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667' alt='ig-icon'></img><span> : @ainurridwan_</span>
</div>

<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/4a3dd8d10a27c272fd04b2ce8ed1a130606f95ea6a76b5e19ce8b642faa18c27/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676d61696c2e737667' alt='gmail-icon'></img><span> : ainurridwank2@gmail.com</span>
</div>

<div align='center'>
:copyright: Ainur Ridwan, 2022
</div>

<a href='#table-of-contents'>Back to top</a>


