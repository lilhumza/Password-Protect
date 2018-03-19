var pass;
var ans = "humza123";
pass=prompt('Please enter your password to view this page!','');
var div = document.getElementById('password');
div.style.visibility = 'hidden';
if (pass == "humza123"){
  alert('Password Correct!');
  div.style.visibility = 'visible';
} else{ // (pass !== ans) {
  Window.location="https://www.google.com";
  HTMLBodyElement.style.visibility ='hidden';
  div.style.visibility = 'hidden';  

  alert('Ba Bye')
    }
