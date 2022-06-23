const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'meteor0323',
  database: 'test',
  port: '3306'
});

app.post("/addbook", (req, res) => {
  const author = req.body.author;
  const bookTitle = req.body.bookTitle;
  const category = req.body.category;
  const IssueDate = req.body.IssueDate;
  const version = req.body.version;
  const price = req.body.price;

  db.query(
    "INSERT INTO book (author, bookTitle, Category, IssueDate, version, price) VALUES (?,?,?,?,?,?)",
    [author, bookTitle, category, IssueDate, version, price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/book", (req, res) => {
  db.query("SELECT * FROM book", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
  console.log("your server is running on port 3001");
});