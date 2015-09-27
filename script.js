	

function palindrome(str) {

  str = str.toLowerCase();
  str = str.replace(/\W/g, '');
  str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  var rts = str.split("").reverse().join("");
  
  if (str === rts){
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
