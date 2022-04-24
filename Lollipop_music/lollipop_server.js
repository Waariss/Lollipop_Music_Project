const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
const mysql = require('mysql2')
dotenv.config()
app.use(cors())
app.use(router)
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2710",
  database: "lollipop",
})
dbConnection.connect((err) => {
  if (err) throw err
  console.log(`Connected DB: ${process.env.DB_name}`)
})
//Criteria search- search by song name, artist name, released year, genre type, and album name
router.get('/search/all/:query', function(req, res){ //view user
    let query = req.params.query;
    console.log(query);
    var sql = "select* From music\n";
    sql += ' WHERE song LIKE \'%' + query + ' %\' OR artist LIKE \'%'+query+'%\'OR album LIKE \'%'+query+'%\'';
    dbConnection.query(sql, function(error, results){
      if (error) throw error;
      res.render('music',{title:'Result', result: results});
    });
});
//No criteria search
router.get('/search/lollipop', function(req, res){ //view user
    let query = req.params.query;
    console.log(query);
    var sql = "select* From music\n";
    dbConnection.query(sql, function(error, results){
    if (error) throw error;
    res.render('result',{title:'Result', music: results});
    });
});
app.get('/search/user/:query', function(req, res){ //search user
  let query = req.params.query;
  console.log(query);
  var sql = "select* From user_information WHERE (Uid) = ?";
  dbConnection.query(sql,query, function(error, results){
    if (error) throw error;
    res.render('user',{title:'Result', data: results});
  });
})
app.get("/Browse",(req, res) =>{
  var sql = "select * From music where pages LIKE 'BROWSE'\n";
  dbConnection.query(sql, function(error, results){
  if (error) throw error;
  res.render('Browse',{title:'Browse', bro: results});
  });
});
app.get("/Rock",(req, res) =>{
  var sql = "select * From music where pages LIKE 'ROCK'\n";
  dbConnection.query(sql, function(error, results){
  if (error) throw error;
  res.render('Rock',{title:'ROCK', rock: results});
  });
});
app.get("/Pop",(req, res) =>{
  var sql = "select * From music where pages LIKE 'POP'\n";
  dbConnection.query(sql, function(error, results){
  if (error) throw error;
  res.render('Pop',{title:'POP', pop: results});
  });
});
app.get("/Indie",(req, res) =>{
  var sql = "select * From music where pages LIKE 'INDIE'\n";
  dbConnection.query(sql, function(error, results){
  if (error) throw error;
  res.render('Indie',{title:'Indie', indie: results});
  });
});
app.get("/Kpop",(req, res) =>{
  var sql = "select * From music where pages LIKE 'K-POP'\n";
  dbConnection.query(sql, function(error, results){
  if (error) throw error;
  res.render('Kpop',{title:'K-POP', kpop: results});
  });
});
//upload Css for song link in hbs
app.get("/search/css/cssforsong.css",(req, res) =>{
  res.sendFile(`${__dirname}/public/css/cssforsong.css`, (err) => {
      if (err) {
          console.log(err);
          res.end(err.message);
      }
  });
});
//upload html file into localhost server with port 7000
app.post('/auth', function(req, res) {
	// Capture the input fields
  const email = req.body.email;
  const pword = req.body.pword;
  console.log(email);
  console.log(pword);
	// Ensure the input fields exists and are not empty
	if (email,pword) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		dbConnection.query('SELECT flag FROM user_information WHERE (email) = ? AND (pword) = ?', [email, pword], function(error, results) {
			// If there is an issue with the query, output the error
			if (error) throw error;
      console.log(results);
      console.log(results[0].flag);
      if(results.length === 0){
        return res.send('Please re');
      }
      else{
        if (results[0].flag === 0) {
          console.log(results[0].flag);
          return res.redirect('/homepage2');
        } 
        else if (results[0].flag === 1) {
          console.log(results[0].flag);
          return res.redirect("http://localhost:3000/");
        }
        else{
          console.log(results[0].flag);
          return res.send('Please register///  Under development');
        }	
      }
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/login2.html`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});
app.get("/Search", (req, res) => {
res.sendFile(`${__dirname}/views/Search.html`, (err) => {
  if (err) {
    console.log(err);
    res.end(err.message);
  }
});
});
app.get("/homepage2",(req, res) =>{
  res.sendFile(`${__dirname}/views/homepage2.html`, (err) => {
      if (err) {
          console.log(err);
          res.end(err.message);
      }
  });
});
app.get("/about",(req, res) =>{
  res.sendFile(`${__dirname}/views/about.html`, (err) => {
      if (err) {
          console.log(err);
          res.end(err.message);
      }
  });
});
app.get("/listen3",(req, res) =>{
  res.sendFile(`${__dirname}/views/listen3.html`, (err) => {
      if (err) {
          console.log(err);
          res.end(err.message);
      }
  });
});
app.get("/login2",(req, res) =>{
  res.sendFile(`${__dirname}/views/login2.html`, (err) => {
      if (err) {
          console.log(err);
          res.end(err.message);
      }
  });
});
app.listen(7000, () => {
  console.log(`Welcome to LOLLIPOP MUSIC`)
})