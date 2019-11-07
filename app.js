const express = require("express");

const app = express();
const port = 4000;

const db = require("./config/database");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1 class="display-4 text-center py-1">To-Do App</h1>
      
      <div class="jumbotron p-3 shadow-sm">
        <form action="/" method="POST">
          <div class="d-flex align-items-center">
            <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
            <button class="btn btn-success">Ajouter la tâche</button>
          </div>
        </form>
      </div>
      
      <ul class="list-group pb-5">
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">Aller faire des courses</span>
          <div>
            <button class="edit-me btn btn-warning btn-sm mr-1">Modifier</button>
            <button class="delete-me btn btn-danger btn-sm">Supprimer</button>
          </div>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">Faire la session moto</span>
          <div>
            <button class="edit-me btn btn-warning btn-sm mr-1">Modifier</button>
            <button class="delete-me btn btn-danger btn-sm">Supprimer</button>
          </div>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">Manger des gâteaux</span>
          <div>
            <button class="edit-me btn btn-warning btn-sm mr-1">Modifier</button>
            <button class="delete-me btn btn-danger btn-sm">Supprimer</button>
          </div>
        </li>
      </ul>
      
    </div>
    
  </body>
  </html>`);
});

app.post("/", (req, res) => {
  console.log(req.body.item);
  res.send("POST request successfully !");
});

app.listen(port);
