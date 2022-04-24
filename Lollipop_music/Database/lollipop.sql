DROP DATABASE IF EXISTS lollipop; 
CREATE DATABASE IF NOT EXISTS lollipop;
use lollipop;

create table `music`(
	id			INT(10)  primary key not null,
    song		VARCHAR(45) not null, /**product name**/
	artist		VARCHAR(45) not null, /**product founder name**/
    released   	YEAR        not null,
    album		VARCHAR(45) not null,
    pages       VARCHAR(20) not null,
    imgurl      VARCHAR(250)not null,
    sound       VARCHAR(250)not null
);
insert into  `music`(id,song,artist,album,released, pages, imgurl, sound)
value 	('1',"Bite me","Avril Lavigne","LOVE SUX","2022", "ROCK", "http://localhost:8000/Rock/birt%20me.jpeg","http://localhost:8000/Rock/Avril-Lavigne-Bite-Me-acoustic.mp3"),
		('2',"Spring Day","BTS","YOU NEVER WALK ALONE","2017", "K-POP", "http://localhost:8000/Spring%20Day.jpg", "http://localhost:8000/Spring%20Day.mp3"),
        ('3',"Runaway","EXO","DON'T FIGHT THE FEELING","2021", "K-POP","http://localhost:8000/Runaway.jpg","http://localhost:8000/Runaway.mp3"),
        ('4',"Deja vu","OLIVIA RODRIGO","SOUR","2021", "BROWSE","http://localhost:8000/Deja%20vu.jpg","http://localhost:8000/Deja%20vu.mp3"),
        ('5',"Getting Over You","LAUV","I MET YOU WHEN I WAS 18","2018", "POP","http://localhost:8000/Getting%20Over%20You.jpg","http://localhost:8000/Getting%20Over%20You.mp3"),
        ('6',"Level of Concern","TWENTY ONE PILOTS","Level of Concern","2020", "ROCK","http://localhost:8000/Level%20of%20Concern.jpg","http://localhost:8000/Level%20of%20Concern.mp3"),
        ('7',"All I Wanna Do","JAY PARK","EVERYTHING YOU WANTED","2016", "K-POP","http://localhost:8000/All%20I%20Wanna%20Do.jpg","http://localhost:8000/All%20I%20Wanna%20Do.mp3"),
        ('8',"Light Switch","CHARLIE PUTH","LIGHT SWITCH","2022", "POP","http://localhost:8000/Light%20Switch.jpg","http://localhost:8000/Light%20Switch.mp3"),
        ('9',"Lucid dream","AESPA","SAVAGE","2021","K-POP", "http://localhost:8000/Lucid%20Dream.jpg","http://localhost:8000/Lucid%20Dream.mp3"),
        ('10',"MS.winter","IMHAVINGABADDAY.","MS. WINTER","2020", "INDIE","http://localhost:8000/Ms.winter.jpg","http://localhost:8000/Ms.winter.mp3"),
        ('11',"Fetal attraction","Reality Club","Never Get Better","2017","BROWSE","http://localhost:8000/Fatal%20Attraction.jpg","http://localhost:8000/Fatal%20Attraction.mp3"),
        ('12',"Wildfires","Sault","Untitled (Black Is)","2020", "INDIE","http://localhost:8000/Wildfires.jpg","http://localhost:8000/Wildfires.mp3"),
        ('13',"Please Mr Postman","CARPENTERS","HORIZON","1975", "POP","http://localhost:8000/Please%20Mr%20Postman.jpg","http://localhost:8000/Please%20Mr%20Postman.mp3"),
        ('14',"Here come the sun","The Beatles","Abbey Road","1969", "ROCK","http://localhost:8000/Here%20Comes%20The%20Sun.jpg","http://localhost:8000/Here%20Comes%20The%20Sun.mp3"),
        ('15',"SUNRISE","MICHELLE","SUNRISE","2021", "INDIE","http://localhost:8000/SUNRISE.jpg","http://localhost:8000/SUNRISE.mp3"),
        ('16',"Girls","The 1975","The 1975","2013", "INDIE","http://localhost:8000/Girls.jpg","http://localhost:8000/Girls.mp3"),
        ('17',"Califonication","RED HOT CHILI PEPPERS","CALIFORNICATION","1999","BROWSE","http://localhost:8000/Califonication.jpg","http://localhost:8000/Califonication.mp3"),
        ('18',"Welcome to the Family","Avenged Sevenfold","Nightmare","2010", "ROCK","http://localhost:8000/Welcome%20to%20the%20Family.jpg","http://localhost:8000/Welcome%20to%20the%20Family.mp3"),
        ('19',"Up to me","LANY","GG BB XX","2021","BROWSE","http://localhost:8000/Up%20to%20me.jpg","http://localhost:8000/Up%20to%20me.mp3"),
        ('20',"How to get the girl","Taylor Swift","1989","2014","POP","http://localhost:8000/How%20you%20get%20the%20girl.jpg","http://localhost:8000/How%20you%20get%20the%20girl.mp3"),
        ('21',"Home.(ดูดฝุ่น)","Morvasu x Violette Wautier","Morvasu x Violette Wautier","2021","Listen now", "http://localhost:8000/home.jpg","http://localhost:8000/home.mp3");
        
create table `user_information`(
	email      varchar(45) primary key NOT NULL,
    Uid        varchar(3)  NOT NULL,
    fullname   varchar(45) NOT NULL,
	pword      varchar(45) NOT NULL,
    tel        varchar(10) NOT NULL,
    roles      varchar(10) NOT NULL,
    flag       int(10) NOT NULL
);
insert into `user_information` (Uid, fullname, email, pword, tel, roles,flag)
value ('001','Waris MandM','waarisss_Mmy@hotmail.com', 'M2345back','0899234514','User','0'),
	  ('002','Mhoomeow Mind','mhoomindd.mindmint@gmail.com', 'mindLovesmeow03','0874940437','User','0'),
      ('003','Dukdik Omey','omewwhhyy@gmail.com', 'yyis983J','0645462716','User','0'),
      ('004','Phasboo Jacky','jackiemamba@gmail.com', '56789fish','0853849405','User','0'),
      ('005','Tai Senyai','Senyai_bark@hotmail.com', 'loveDogs88','0982757122','User','0'),
      -- admin
      ('114','Waris Damkham','waris.dam@student.mahidol.ac.th','27102544','0125768903','Admin','1'),
      ('120','Chalumphu Atjarit','chalumphu.atj@student.mahildol.ac.th','mhoomind','0156934782','Admin','1'),
      ('122','Pattanan Korkiattrakool','pattanan.kor@student.mahidol.ac.th','Taisenyai12','0127857121','Admin','1'),
      ('119','Kittipat Donsom','kittapat.don@student.mahdiol.ac.th','mukyy1234','0169359809','Admin','1');
      
create table `login_information`(
	Uid		   VARCHAR(3) 	primary key not null,
    email      VARCHAR(45)  not null,
    pword      VARCHAR(45)  not null,
	CONSTRAINT FK_email FOREIGN KEY (email)
	REFERENCES user_information(email)
);
insert into `login_information` (Uid, email, pword)
value ('001','waarisss_Mmy@hotmail.com', 'M2345back'),
	  ('002','mhoomindd.mindmint@gmail.com', 'mindLovesmeow03'),
      ('003','Senyai_bark@hotmail.com', 'loveDogs88'),
      ('004','omewwhhyy@gmail.com', 'yyis983J'),
      ('005','jackiemamba@gmail.com', '56789fish'),
      -- admin 
      ('114','waris.dam@student.mahidol.ac.th', '27102544'),
      ('120','chalumphu.atj@student.mahildol.ac.th', 'mhoomind'),
      ('122','pattanan.kor@student.mahidol.ac.th', 'Taisenyai12'),
      ('119','kittapat.don@student.mahdiol.ac.th', 'mukyy1234');
-- print demo
select * 
from `music`;  
select * 
from `user_information`;  

SELECT fullname as 'Admin', Uid as 'Admin ID'
FROM `user_information`
WHERE (Uid) > 010
ORDER BY Uid ASC;

 select *
 from `user_information`
 where (roles) = 'Admin'
 ORDER BY Uid ASC;
 
 select *
 from `user_information`
 where (email) = 'waris.dam@student.mahidol.ac.th' and (pword) = '27102544';

select * 
From music 
where pages LIKE "K-POP"
