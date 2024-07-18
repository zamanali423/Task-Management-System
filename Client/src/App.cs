@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}
/* body{
  background: #1abc9c;
   overflow: hidden; 
} */

*,
*::after,
*::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.html{
    font-size: 62.5%;
}

.navbar input[type="checkbox"],
.navbar .hamburger-lines{
    display: none;
}

.container1{
    max-width: 1200px;
    width: 90%;
    margin: auto;
}

.navbar{
    box-shadow: 0px 5px 10px 0px #aaa;
    /* position: sticky; */
    width: 100%;
    background: #fff;
    color: #000;
    opacity: 0.85;
    z-index: 100;
    /* top: 0; */
    /* left: 0; */
}

.navbar-container{
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;
}

.menu-items{
    order: 2;
    display: flex;
    align-items: self-end;
}
.logo{
    order: 1;
    font-size: 2.3rem;
}

.menu-items li{
    list-style: none;
    margin-left: 1.5rem;
    font-size: 1.3rem;
}

.navbar a{
    color: #444;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
}

.navbar a:hover{
    color: #117964;
}

@media (max-width: 768px){
    .navbar{
        opacity: 0.95;
    }

    .navbar-container input[type="checkbox"],
    .navbar-container .hamburger-lines{
        display: block;
    }

    .navbar-container{
        display: block;
        position: relative;
        height: 150px;
    }

    .navbar-container input[type="checkbox"]{
        position: absolute;
        display: block;
        height: 32px;
        width: 30px;
        top: 20px;
        left: 20px;
        z-index: 5;
        opacity: 0;
        cursor: pointer;
    }

    .navbar-container .hamburger-lines{
        display: block;
        height: 28px;
        width: 35px;
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .navbar-container .hamburger-lines .line{
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: #333;
    }
    
    .navbar-container .hamburger-lines .line1{
        transform-origin: 0% 0%;
        transition: transform 0.3s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2{
        transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3{
        transform-origin: 0% 100%;
        transition: transform 0.3s ease-in-out;
    }

    .navbar .menu-items{
        padding-top: 100px;
        background: #fff;
        height: 100vh;
        max-width: 300px;
        transform: translate(-150%);
        display: flex;
        flex-direction: column;
        margin-left: -50px;
        padding-left: 40px;
        transition: transform 0.5s ease-in-out;
        box-shadow:  5px 0px 10px 0px #aaa;
        overflow: scroll;
    }

    .navbar .menu-items li{
        margin-bottom: 1.8rem;
        font-size: 1.1rem;
        font-weight: 500;
        margin-right: 6.5rem;
    }

    .logo{
        position: absolute;
        top: 10px;
        left: 60px;
        font-size: 2.5rem;
    }

    .navbar-container input[type="checkbox"]:checked ~ .menu-items{
        transform: translateX(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
        transform: rotate(45deg);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
        transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
        transform: rotate(-45deg);
    }

}

@media (max-width: 500px){
    .navbar-container input[type="checkbox"]:checked ~ .logo{
        display: none;
    }
}



  /* Login form  */

  .login-container {
    width: 100%;
    max-width: 400px;
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-container h2 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
}

.login-container .form-group {
    margin-bottom: 1.5rem;
}

.login-container .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
}

.login-container .form-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.login-container .form-group input:focus {
    border-color: #007bff;
    outline: none;
}

.login-container button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-container button:hover {
    background-color: #0056b3;
}

.mainForm{
    display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
}

@media (max-width: 480px) {
    .login-container {
        padding: 1.5rem;
    }

    .login-container .form-group input {
        padding: 0.5rem;
    }

    .login-container button {
        padding: 0.5rem;
    }
}

/* Signin form  */

.container3 {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.signup-form {
    display: flex;
    flex-direction: column;
}

.signup-form h2 {
    margin-bottom: 20px;
    color: #333;
    text-align: center;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
}

.input-group input:focus {
    border-color: #007BFF;
    outline: none;
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #007BFF;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #0056b3;
}

@media (max-width: 480px) {
    .container {
        padding: 15px;
    }

    .signup-form h2 {
        font-size: 20px;
    }

    button {
        font-size: 14px;
    }
}


/* task form  */

.mainForm2{
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 155vh;
}
.container2 {
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    max-width: 700px;
    width: 100%;
  }
  
  .task-form {
    display: flex;
    flex-direction: column;
  }
  
  .task-form h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }
  
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #218838;
  }
  
  @media (max-width: 600px) {
    .container2 {
      padding: 15px;
    }
  }

  .logout{
    cursor: pointer;
    color: #515050;
    font-weight: 500;
  }


  /* tasks  */

  .container4 {
    margin: 20px auto;
    padding: 20px;
    max-width: 1000px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .task-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .task-table th,
  .task-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .task-table th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  .task-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .task-table tr:hover {
    background-color: #f1f1f1;
  }
  
  @media screen and (max-width: 768px) {
    .task-table thead {
      display: none;
    }
  
    .task-table, .task-table tbody, .task-table tr, .task-table td {
      display: block;
      width: 100%;
    }
  
    .task-table tr {
      margin-bottom: 15px;
    }
  
    .task-table td {
      text-align: right;
      padding-left: 50%;
      position: relative;
    }
  
    .task-table td::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      width: calc(50% - 20px);
      text-align: left;
      font-weight: bold;
    }
  }

  .icon{
    cursor: pointer;
  }


  /* update tasks  */

  .form-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 500px; /* Adjust as needed for larger screens */
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Labels and inputs */
label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
}

textarea {
    height: 100px; /* Adjust as needed for multi-line input */
}

/* Select element for priority */
select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

/* Submit button */
button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

/* Media query for smaller screens */
@media screen and (max-width: 768px) {
    .form-container {
        flex-direction: column;
    }
}


