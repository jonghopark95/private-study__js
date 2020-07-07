import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const app = express();
const upload = multer({ dest: "uploads/" });
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

let convertedData = "";

// make Routingggg
app.get("/", (req, res) => res.render("day23"));

app.post("/", upload.single("uploaded_file"), (req, res) => {
  const {
    file: { path },
  } = req;
  // get Convert Data
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    convertedData = data.toString();
    //res.send(`${convertData}`);
    res.redirect("/read");
  });
});

app.get("/read", (req, res) => {
  res.render("day23_read", { convertedData });
});

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
