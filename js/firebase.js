// Initialize Firebase(2)
var config = {
    databaseURL: 'https://hack-4-u-default-rtdb.firebaseio.com/',
    apiKey: "AIzaSyDkIfp-HT04UgYagcssRez2zoG_VKPRpTo",
    authDomain: "hack-4-u.firebaseapp.com",
    projectId: "hack-4-u",
    storageBucket: "hack-4-u.appspot.com",
    messagingSenderId: "962786841909",
    appId: "1:962786841909:web:0ca4bbd3e39b9e5618e87c",
    measurementId: "G-D54DMTPM10"
  };
  firebase.initializeApp(config);
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('register');
  
  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    //send message values
    sendMessage(name, email, password, bio, job, interest);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email, password, bio, job, interest) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      password: password,

    });
  }