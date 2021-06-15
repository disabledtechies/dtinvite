function toggleExtraInfo(id) {
  var div = document.getElementById("reason-" + id + "-extra-section");
  var txt = document.getElementById("reason-" + id + "-extra");
  if(!div) {
    return
  }
  if(div.style.display == 'none') {
    div.style.display = 'block';
    txt.disabled = false;
  } else {
    div.style.display = 'none';
    txt.disabled = true;
  }
}

function validateRequest() {
  // We check things from bottom to top, so that the topmost problem ends up
  // with focus
  
  rv = true;

  // Make sure if there's any 'extra info' required from a checked box,
  // that it's filled in
  var elements = document.querySelectorAll("[id$='extra']")
  for (var i = 0, element; element = elements[i++];) {
    if(element.disabled == false && element.value == '') {
      alertbox = document.getElementById(element.id + "-alert");
      alertbox.innerHTML = "<div class='alert alert-danger'>You must enter information into the below text field if the above checkbox is checked.</div>";
      alertbox.focus();
      rv = false;
    } else {
      alertbox.innerHTML = "";
    }
  }
  
  // Make sure some checkboxes are selected
  var elements = document.querySelectorAll("#joinform input[type=checkbox]")

  var checked = 0;
  for (var i = 0, element; element = elements[i++];) {
    if(element.checked) {
      checked += 1;
    }
  }
  
  alertbox = document.getElementById('checkbox-alert');
  if(checked == 0) {
    alertbox.innerHTML = "<div class='alert alert-danger'>You must select at least one checkbox before submitting your request.</div>";
    alertbox.focus();
    console.log("boxes failed");
    rv = false;
  } else {
    alertbox.innerHTML = "";
  }
  
  // Make sure the email looks at least vaguely email-ey
  email = document.querySelector('#email.form-control');
  alertbox = document.getElementById('email-alert');
  if(email.value.indexOf('@') < 0 || email.value.indexOf(' ') >= 0 || email.value.length < 3) {
    alertbox.innerHTML = "<div class='alert alert-danger'>Your email address must contain an @ symbol and must not contain any spaces.</div>";
    alertbox.focus();
    console.log("email failed");
    rv = false;
  } else {
    alertbox.innerHTML = "";
  }
  
  // Make sure they entered a name
  namefield = document.querySelector('#name.form-control');
  alertbox = document.getElementById('name-alert');
  if(namefield.value.length == 0) {
    alertbox.innerHTML = "<div class='alert alert-danger'>You must enter a name.</div>";
    alertbox.focus();
    rv = false;
    console.log("name failed");
  } else {
    alertbox.innerHTML = "";
  }

  return rv;
}
