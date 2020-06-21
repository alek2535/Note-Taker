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
app.get("/api/notes", (req, res) => res.json(db));

// POST

app.post("/api/notes", (req, res) => {
  const newNote = req.body;

  db.push(newNote);

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    const json = JSON.parse(data);
    json.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(json), err => {
      if (err) throw err;
    })
  });

  // dbArray.push(newNote);

  // fs.appendFile("./db/db.json", JSON.stringify(newNote), err => {
  //     if (err) throw err;
  // })

//   newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

  res.json(fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            return data;
        }
    }));
});

// HTML Routes
// =============================================================

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));