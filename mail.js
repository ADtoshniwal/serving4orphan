const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyDTagGWxr5mPgrEdwO6C4wxeY5FaKkXdvs",
    authDomain: "serving4u-e6958.firebaseapp.com",
    databaseURL: "https://serving4u-e6958-default-rtdb.firebaseio.com",
    projectId: "serving4u-e6958",
    storageBucket: "serving4u-e6958.appspot.com",
    messagingSenderId: "255328300005",
    appId: "1:255328300005:web:aa83e6e6cd098b43e3dd0c"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var address = getElementVal("address");
  
    saveMessages(name, emailid, address);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid,address) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      address: address,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };