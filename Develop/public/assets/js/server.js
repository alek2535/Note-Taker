// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("../../../db/db.json");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Notes Taken (DATA)
// =============================================================

// API Routes
// =============================================================

// GET 
app.get("/api/notes", (req, res) => res.json(db));

// POST

app.post("/api/notes", (req, res) => {
  const newNote = req.body;

  newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

  fs.appendFile(db, newNote, err => {
      if (err) throw err;
  });

  res.json(db);
});

// HTML Routes
// =============================================================

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../notes.html"));
});

// default to home
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));