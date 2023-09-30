# Lollipop_Music_Project

This project is a part of ITCS212_Web Programming at the Faculty of Information and Communication Technology (ICT Mahidol). It aims to design and develop a music application named "Lollipop Music".

#### Team ID: 120 - Useless

---

## Introduction

I successfully designed and developed a project focused on creating a music application called Lollipop Music using React and Node.js. With a passion for music and technology, I utilized my skills to design an intuitive and user-friendly interface for browsing and playing music. Leveraging React for the frontend and Node.js for the backend, I implemented key features such as user authentication, playlist management, and audio playback. This project deepened my knowledge of web development, strengthened my skills in React and Node.js, and demonstrated my ability to create engaging and functional music applications. I'm excited to have contributed to the world of music through technology!

---

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- MySQL - Run our database files located in the "Database" folder. The "sec1_gr11_database.sql" is the schema and "lollipop.sql" is the database.

### For LOLLIPOP MUSIC

1. Clone or save this project to your computer.
2. Open the Command Prompt and navigate to the LOLLIPOP MUSIC directory.
3. Initialize the project with `npm init`.
4. Install the necessary packages:
    ```bash
    npm install pm2 -g cors dotenv express express-handlebars express-validator hbs mysql2 nodemon
    ```
5. Start the server with:
    ```bash
    pm2 start lollipop_resource.js
    pm2 start lollipop_server.js
    ```
6. Access the application in your browser at [http://localhost:7000/](http://localhost:7000/). Click login, and use the credentials:
    - Email ID: `Test@hotmail.com`
    - Password: `Test`

### For LOLLIPOP ADMIN

1. Ensure you have LOLLIPOP MUSIC included in your project files.
2. Navigate to the LOLLIPOP MUSIC directory and start the necessary servers:
    ```bash
    pm2 start lollipop_resource.js
    pm2 start admin.js
    pm2 start lollipop_server.js
    ```
3. Navigate to the Project1 directory.
4. Create a new React app with `npx create-react-app lollipop_admin`.
5. Move files inside the `lollipop_admin` folder into your new react folder.
6. Install the necessary React packages:
    ```bash
    npm install axios react-bootstrap bootstrap react-icons react-router-dom react-scripts styled-components
    ```
7. Start the React application with `npm start`.

---

We hope you enjoy the Lollipop Music experience!
