function surNameChangeHandler() {
  const name = document.getElementById("surname").value;

  console.log("Name" + "=" + name);
}

function firstNameChangeHandler() {
  const firstname = document.getElementById("firstname").value;

  console.log("Firstname" + "=" + firstname);
}

function phoneChangeHandler() {
  const phone = document.getElementById("mobile").value;

  const phoneRE = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
  if (!phoneRE.test(phone)) {
    document.getElementById("form-validation").innerHTML =
      "Phone number entered is not valid";
  } else {
    document.getElementById("form-validation").innerHTML = "";
    console.log("Telephone" + "=" + phone);
  }
}

function emailChangeHandler() {
  const email = document.getElementById("email").value;

  const emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRE.test(email)) {
    document.getElementById("form-validation").innerHTML =
      "Email entered is not valid";
    return false;
  } else {
    document.getElementById("form-validation").innerHTML = "";
    console.log("Email" + "=" + email);
  }
}

function messagechangechangeHandler() {
  const message = document.getElementById("message").value;

  console.log("Message" + "=" + message);
}

function openform() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("mobile").value;
  const firstname = document.getElementById("firstname").value;
  const name = document.getElementById("surname").value;
  const message = document.getElementById("message").value;

  if (
    email === "" ||
    phone === "" ||
    firstname === "" ||
    name === "" ||
    message === ""
  ) {
    document.getElementById("form-validation").innerHTML =
      "Please enter the required fields";
    return false;
  }

  document.getElementById("popup").style.display = "block";

  document.getElementById("contact-form").reset();
  document.getElementById("form-validation").innerHTML = "";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}
