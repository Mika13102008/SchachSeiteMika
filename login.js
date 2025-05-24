var count = 2;

function validate ()
{
   var user = document.login.username.value;
   var password = document.login.password.value;
   var valid = false;
   var usernameArray = ["Mika"]
   var passwordArray = ["13102008"]
   for (var i = 0; i < usernameArray.length; i++)

if (user == usernameArray[i])
if (password == passwordArray [i])
{
   valid = true;
   break;
}

if(valid)
{
   alert("Login was successful");
   window.location = "Haubtseite2_0.html"
   return false ;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   alert("Falsches Passwort oder Benutzername")
   count--;
}
}
