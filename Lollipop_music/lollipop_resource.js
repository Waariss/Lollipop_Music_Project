const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/`));
// Upload aduio and image file into local host server port 8000
// Member
app.get("/M.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/team/M.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Mind.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/team/mind.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Tai.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/team/tai.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
// ลบดีไหมนะ
app.get("/Mucky.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/team/mucky.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//images
app.get("/user.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/team/user.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/rock.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/se/rock.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/pop.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/se/pop.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/indie.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/se/indie.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/kpop.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/se/kpop.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/listen3.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/homepage/head.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Browse.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/homepage/hehe.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Search.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/homepage/dadadadasd.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
// Lucid Dream
app.get("/Lucid%20Dream.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/k-pop/Lucid Dream (128 kbps).mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Lucid%20Dream.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/k-pop/aespa.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
// All I wanna do
app.get("/All%20I%20Wanna%20Do.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/k-pop/Jay Park - All I Wanna Do [Lyrics] (128 kbps).mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/All%20I%20Wanna%20Do.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/k-pop/all.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
// Bite me 
app.get("/Bite%20me.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/Rock/Avril-Lavigne-Bite-Me-acoustic.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Bite%20me.jpeg",(req, res) =>{
    res.sendFile(`${__dirname}/Rock/birt me.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
// Californication
app.get("/Califonication.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/recom/Red Hot Chili Peppers - Californication [Official Music Video] (128 kbps).mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Califonication.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/recom/cal.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
// Deja vu
app.get("/Deja%20vu.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/recom/deja vu - Olivia Rodrigo.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Deja%20vu.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/recom/deja.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Fatal Attraction
app.get("/Fatal%20Attraction.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/recom/Reality Club - Fatal Attraction (128 kbps).mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Fatal%20Attraction.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/recom/fata.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Getting Over You
app.get("/Getting%20Over%20You.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/pop/Lauv - Getting Over You.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Getting%20Over%20You.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/pop/lauv.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Girls
app.get("/Girls.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/Indie/The 1975 - Girls.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Girls.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/Indie/1975.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Here Comes The Sun
app.get("/Here%20Comes%20The%20Sun.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/Rock/HereComesTheSun.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Here%20Comes%20The%20Sun.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/Rock/bee.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Home.(ดูดฝุ่น)
app.get("/home.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/recom/ดูด.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/home.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/recom/ดูด.jpeg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//How you get the girl
app.get("/How%20you%20get%20the%20girl.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/pop/How You Get The Girl.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/How%20you%20get%20the%20girl.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/pop/ty.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Level of Concern
app.get("/Level%20of%20Concern.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/Rock/Level of Concern - twenty one pilots.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Level%20of%20Concern.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/Rock/level.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Light Switch
app.get("/Light%20Switch.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/pop/Light Switch - Charlie Puth.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Light%20Switch.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/pop/light.jfif`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Ms.winter
app.get("/Ms.winter.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/Indie/imhavingabadday - MS. WINTER.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Ms.winter.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/Indie/winter.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Please Mr Postman
app.get("/Please%20Mr%20Postman.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/pop/Please Mr Postman- Carpenters.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Please%20Mr%20Postman.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/pop/pls.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Runaway
app.get("/Runaway.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/k-pop/EXO - Runaway.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Runaway.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/k-pop/runnn.jfif`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Spring Day
app.get("/Spring%20Day.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/k-pop/BTs.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Spring%20Day.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/k-pop/BTs.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//SUNRISE
app.get("/SUNRISE.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/Indie/MICHELLE - SUNRISE.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/SUNRISE.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/Indie/sun.jfif`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Up to me
app.get("/Up%20to%20me.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/recom/LANY - up to me.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Up%20to%20me.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/recom/dad.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Welcome to the Family
app.get("/Welcome%20to%20the%20Family.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/Rock/avenged-sevenfold_welcome-to-the-family.mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Welcome%20to%20the%20Family.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/Rock/wel.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
//Wildfires
app.get("/Wildfires.mp3",(req, res) =>{
    res.sendFile(`${__dirname}/Indie/Wildfires (128 kbps).mp3`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.get("/Wildfires.jpg",(req, res) =>{
    res.sendFile(`${__dirname}/Indie/saaa.jpg`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});
app.listen(8000, "localhost", () => {
  console.log("Server is running on port 8000");
});
