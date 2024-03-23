const firebaseConfig = {
  apiKey: "AIzaSyBaSrSPnGatyu363qNpH9c14PWQqevkwkY",
  authDomain: "insta-clone-9c3c6.firebaseapp.com",
  databaseURL: "https://insta-clone-9c3c6-default-rtdb.firebaseio.com",
  projectId: "insta-clone-9c3c6",
  storageBucket: "insta-clone-9c3c6.appspot.com",
  messagingSenderId: "1012873969055",
  appId: "1:1012873969055:web:c64b021a67f5a0004a91aa",
  measurementId: "G-60HJS6Q8EH"
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
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
