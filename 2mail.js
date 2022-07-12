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
  var clothsformDB = firebase.database().ref("clothsform");
  
  document.getElementById("clothsform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var contact = getElementVal("contact");
    var Quantity = getElementVal("Quantity");
    var emailid = getElementVal("emailid");
    var address = getElementVal("address");
    var description = getElementVal("description");
  
    saveMessages(name, contact,Quantity,emailid, address,description);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("clothsform").reset();
  }
  
  const saveMessages = (name, contact,Quantity,emailid, address,description) => {
    var newclothsform= clothsformDB.push();
  
    newclothsform.set({
      name: name,
      contact: contact,
      Quantity: Quantity,
      emailid: emailid,
      address: address,
      description: description,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };