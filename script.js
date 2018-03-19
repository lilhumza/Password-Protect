// var pass;
// var ans = "humza123";
// pass=prompt('Please enter your password to view this page!','');
// var div = document.getElementById('password');
// div.style.visibility = 'hidden';
// if (pass == "humza123"){
//   alert('Password Correct!');
//   div.style.visibility = 'visible';
// } else{ // (pass !== ans) {
//   Window.location="https://www.google.com";
//   HTMLBodyElement.style.visibility ='hidden';
//   div.style.visibility = 'hidden';  

//   alert('Ba Bye')
//     }
function passWord() {
  var testV = 1;
  var pass1 = prompt('Please Enter Your Password',' ');
  while (testV < 3) {
  if (!pass1) 
  history.go(-1);
  if (pass1.toLowerCase() == "humza123") {
  alert('You Got it Right!');
  window.open('bonjour.html');
  break;
  } 
  testV+=1;
  var pass1 = 
  prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
  }
  if (pass1.toLowerCase()!="password" & testV ==3) 
  history.go(-1);
  return " ";
  } 
  