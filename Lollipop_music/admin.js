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
const port = process.env.DB_PORT || 9000
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
const dbConnection = mysql.createConnection({
  host: process.env.host,
  user: process.env.DB_user,
  password: process.env.DB_pass,
  database: process.env.DB_name,
})
dbConnection.connect((err) => {
  if (err) throw err
  console.log(`Connected DB: ${process.env.DB_name}`)
})
// router.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/StudentForm.html')),
// ) continue in phase 3 for admin html
router.get('/search/music', (req, res) => { //view music
  dbConnection.query('SELECT * FROM music', (error, results) => { // select all information in music table
    if (error)
      return res.status(400).json({ status: 'error', message: error.sqlMessage,})
  return res.send(results)
  })
})
// Testing View all Music
// method: get
// URL: http://localhost:9000/search/music
router.get('/search/music/:query', function(req, res){ //view user
  const { query } = req.params;
  console.log(query);
  var sql = "select* From music\n";
  sql += ' WHERE song LIKE \'%' + query + ' %\' OR artist LIKE \'%'+query+'%\'OR album LIKE \'%'+query+'%\'OR id LIKE \'%'+query+'%\'';
  dbConnection.query(sql, function(error, results){
    if (error) throw error;
    return res.send(results);
  });
});
// Testing search Music
// method: get
// URL: http://localhost:9000/search/music/1
// URL: http://localhost:9000/search/music/14
router.post('/post/music', (req, res) => { //insert music
  const { musicinfo: mInfo } = req.body;  // set params for JSON text
  if (!mInfo)
    return res.status(400).json({status: 'error',message: 'Please provide correct Music information',})
  dbConnection.query('INSERT INTO music SET ?',mInfo,(error, results) => { // insert new music by input music's information to create new music in table
    if (error)
      return res.status(400).json({ status: 'error',  message: error.sqlMessage,})
    return res.send(results)
  },)
})
// Testing Insert new Music
// method: post
// URL: http://localhost:9000/post/music
// body: raw JSON
// {
//   "musicinfo":{
//       "id": 50,
//       "song": "Nok yor",
//       "artist": "yor",
//       "album": "araya",
//       "released": "2023",
//       "pages": "K-POP",
//       "imgurl": "http://localhost:9000/araya.jpg",
//       "sound": "http://localhost:9000/araya.mp3"
//   }
// }
// URL: http://localhost:9000/post/music
// body: raw JSON
// {
//   "musicinfo":{
//       "id": 25,
//       "song": "Nok",
//       "artist": "araya",
//       "album": "yor",
//       "released": "2010",
//       "pages": "Rock",
//       "imgurl": "http://localhost:9000/araya.jpg",
//       "sound": "http://localhost:9000/araya.mp3"
//   }
// }
router.delete('/delete/music', (req, res) => { //delete music
  const { id } = req.body;// set params id
  if (!id)
    return res.status(400).json({status: 'error',message: 'Please provide correct Music ID',})
  dbConnection.query('DELETE FROM music WHERE id = ?',[id],(error, results) => {// delete music by input music's id 
    if (error)
      return res.status(400).json({status: 'error',message: error.sqlMessage,})
    return res.json({status: 'success',message: 'Music has been deleted successfully.',})
  },)
})
// Testing Delete Music
// method: Delete
// URL: http://localhost:9000/delete/music
// body: raw JSON
// {
//   "id": 50
// }
// body: raw JSON
// {
//   "id": 25
// }
router.put('/update/music', (req, res) => { //Update music
  const { musicinfo: mInfo } = req.body // set params for JSON text
  const { id } = mInfo // set params id
  if (!mInfo || !id)
    return res.status(400).json({status: 'error',message: 'Please provide correct Music information',})
  dbConnection.query('UPDATE music SET ? WHERE id = ?',[mInfo, id],(error, results) => { // update music's information 
    if (error)
      return res.status(400).json({status: 'error',message: error.sqlMessage,})
    return res.json({status: 'success',message: 'Music has been updated successfully.',})
  },)
})
// Testing Update Music
// method: Put
// URL: http://localhost:9000/update/music
// body: raw JSON
// {
//   "musicinfo":{
//       "id": 50,
//       "song": "Nok yor",
//       "artist": "yor",
//       "album": "araya",
//       "released": "2000", This example change year of released
//       "pages": "Rock",
//       "imgurl": "http://localhost:9000/araya.jpg",
//       "sound": "http://localhost:9000/araya.mp3"
//   }
// }
// body: raw JSON
// {
//   "musicinfo":{
//       "id": 50,
//       "song": "Nok yor",
//       "artist": "yor",
//       "album": "araya",
//       "released": "2023", 
//       "pages": "POP", This example change pages
//       "imgurl": "http://localhost:9000/araya.jpg",
//       "sound": "http://localhost:9000/araya.mp3"
//   }
// }
router.get('/search/user', (req, res) => { //view user
  dbConnection.query('SELECT * FROM user_information ORDER BY Uid ASC', (error, results) => { // select all information in user table
    if (error)
      return res.status(400).json({ status: 'error', message: error.sqlMessage,})
  return res.send(results)
  })
})
// Testing View all User
// method: get
// URL: http://localhost:9000/search/user
// router.get('/search/user/:uId', (req, res) => { //search user
//   const { uId } = req.params // set params to uId for input id
//   if (!uId)
//     return res.status(400).json({ status: 'error', message: 'Please provide correct User id',})
//   dbConnection.query('SELECT * FROM user_information where Uid = ?',uId,(error, results) => { // select by user id to show information in user table
//     return res.send(results)
//   },)
// })
router.get('/search/user/:query', function(req, res){ //view user
  const { query } = req.params;
  console.log(query);
  var sql = "select* From user_information\n";
  sql += ' WHERE roles LIKE \'%' + query + ' %\' OR flag LIKE \'%'+query+'%\'OR Uid LIKE \'%'+query+'%\'OR email LIKE \'%'+query+'%\' OR fullname LIKE \'%'+query+'%\'';
  dbConnection.query(sql, function(error, results){
    if (error) throw error;
    return res.send(results);
  });
});
// Testing search User
// method: get
// URL: http://localhost:9000/search/user/001
// URL: http://localhost:9000/search/user/120
router.post('/post/user', (req, res) => { //insert user
  const { userinfo: uInfo } = req.body; // set params for JSON text
  if (!uInfo)
    return res.status(400).json({status: 'error',message: 'Please provide correct User information',})
  dbConnection.query('INSERT INTO user_information SET ?',uInfo,(error, results) => { // insert new user by input user's information to create new user in table
    if (error)
      return res.status(400).json({ status: 'error',  message: error.sqlMessage,})
    return res.json({status: 'success',message: 'New user has been created successfully.',})
  },)
})
// Testing insert user
// method: post
// URL: http://localhost:9000/post/user
// body: raw JSON
// {
//     "userinfo":{
//         "Uid": 500,
//         "fullname": "Nokyor araya",
//         "email": "arayawwhhyy@gmail.com",
//         "pword": "ar",
//         "tel": "0123456789",
//         "roles": "User",
//         "flag": 0
//     }
// }
// body: raw JSON
// {
//     "userinfo":{
//         "Uid": 501,
//         "fullname": "Nokyor,
//         "email": "araya@gmail.com",
//         "pword": "araya",
//         "tel": "0123456789",
//         "roles": "User",
//         "flag": 0
//     }
// }
router.delete('/delete/user', (req, res) => { //delete user
  const { Uid } = req.body; // set param 
  if (!Uid) 
    return res.status(400).json({status: 'error',message: 'Please provide correct User id',})
  dbConnection.query('DELETE FROM user_information WHERE Uid = ?',[Uid],(error, results) => { // delete music by input user's id 
    if (error)
      return res.status(400).json({status: 'error',message: error.sqlMessage,})
    return res.json({status: 'success',message: 'User has been deleted successfully.',})
  },)
})
// Testing Delete User
// method: Delete
// URL: http://localhost:9000/delete/user
// body: raw JSON
// {
//   "id": 500
// }
// body: raw JSON
// {
//   "id": 501
// }
router.put('/update/user', (req, res) => { //Update User
  const { userinfo: uInfo } = req.body // set params for JSON text
  const { Uid } = uInfo // set params id
  if (!uInfo || !Uid)
    return res.status(400).json({status: 'error',message: 'Please provide correct User information',})
  dbConnection.query('UPDATE user_information SET ? WHERE Uid = ?',[uInfo, Uid],(error, results) => { // update user's information 
    if (error)
      return res.status(400).json({status: 'error',message: error.sqlMessage,})
    return res.json({status: 'success',message: 'User has been updated successfully.',})
  },)
})
// Testing Update User
// method: post
// URL: http://localhost:9000/update/user
// body: raw JSON
// {
//   "userinfo":{
//       "Uid": 500,
//       "fullname": "Nokyor araya",
//       "email": "arayawwhhyy@gmail.com",
//       "pword": "aradasda",
//       "tel": "0123456789",
//       "roles": "Admin",
//       "flag": 1
//   }
// }
// body: raw JSON
// {
//     "userinfo":{
//         "Uid": 501,
//         "fullname": "Nokyordad,
//         "email": "araya@gmail.com",
//         "pword": "OHM",
//         "tel": "0123456789",
//         "roles": "Admin",
//         "flag": 1
//     }
// }
app.listen(port, () => {
  console.log(`Welcome to LOLLIPOP MUSIC`)
})