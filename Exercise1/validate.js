function validate_password()
{
  var first_entry = document.getElementById('first_entry');
  var second_entry = document.getElementById('second_entry');

  if (first_entry.value != second_entry.value)
  {
    alert("The passwords entered do not match!");
  }
  else if (first_entry.value.length < 8)
  {
    alert("The password is not at least 8 characters long!");
  }
  else
  {
    alert("Password confirmed!");
  }
}
