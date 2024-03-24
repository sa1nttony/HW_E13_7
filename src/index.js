import './styles.css'

const xhr = new XMLHttpRequest()
const xhr1 = new XMLHttpRequest()
xhr.onload = function() {
    document.getElementById("ul1").innerHTML = `${xhr.response}`
    };
xhr.open("get", "http://localhost:3000/Contacts", true);
xhr.send();

xhr1.onload = function() {
    document.getElementById("ul2").innerHTML = `${xhr1.response}`
    };
xhr1.open("get", "http://localhost:3000/Adress", true);
xhr1.send();

