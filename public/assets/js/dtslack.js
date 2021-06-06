function toggleExtraInfo(id) {
  var x = document.getElementById(id);
  if(x) {
    x.disabled = !x.disabled;
  }
}

function validateRequest() {
  // We check things from bottom to top, so that the topmost problem ends up
  // with focus
  
  rv = true;

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
