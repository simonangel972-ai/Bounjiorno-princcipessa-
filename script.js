body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #ffe3e6;
    margin: 0;
    font-family: 'Arial', sans-serif;
}

#card {
    text-align: center;
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    width: 350px;
    position: relative;
}

#bear {
    width: 200px;
}

.buttons {
    margin-top: 20px;
    position: relative;
    height: 60px;
}

button {
    padding: 12px 25px;
    border: none;
    border-radius: 12px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

#yesBtn {
    background: #ff5a7d;
    color: white;
}

#yesBtn:hover {
    transform: scale(1.1);
}

#noBtn {
    background: #eeeeee;
    color: #555;
    position: absolute;
    left: 150px;
}

.hidden {
    display: none;
}
