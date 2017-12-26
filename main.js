// Initialize Firebase
var config = {
    apiKey: "AIzaSyBHOKP5jB3G7tvuY2g6lze799WLgWHXveA",
    authDomain: "contactform-ed051.firebaseapp.com",
    databaseURL: "https://contactform-ed051.firebaseio.com",
    projectId: "contactform-ed051",
    storageBucket: "contactform-ed051.appspot.com",
    messagingSenderId: "658918585664"
  };
  firebase.initializeApp(config);

//referance message collections

var messageRef = firebase.database().ref('messages');


//listerners  for form submit
document.getElementById('contactform').addEventListener('submit',submitForm);
//submit form
function submitForm(e){
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //save message
    saveMessage(name, company, email, phone, message);
    //show it was submited

    document.querySelector('.alert').style.display = 'block';

    //hid alert after some time
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'block';
    },3000);
    
    document.getElementById('contactform').reset();

}

// functions to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save the message to firebas e
function saveMessage(name, company, email, phone, message)
{
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name :name,
        company:company,
        email:email,
        phone:phone,
        message:message

    });
}