// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./db/db.json");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Notes Taken (DATA)
// =============================================================

// API Routes
// =============================================================

// GET 
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"))});

// POST

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = req.body.title;

  db.push(newNote);

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    const jsonNotes = JSON.parse(data);
    jsonNotes.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(jsonNotes), err => {
      if (err) throw err;
    })
    
  });

  res.json(newNote);

});

//Delete
app.delete("/api/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    const jsonID = JSON.parse(data);
    const ident = jsonID.find(newNote => newNote.id === req.params.id);
    const index = jsonID.indexOf(ident);
    jsonID.splice(index, 1);

    fs.writeFile("./db/db.json", JSON.stringify(jsonID), err => {
      if (err) throw err;
      res.json(jsonID);
    });
  });  
});

// HTML Routes
// =============================================================

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));