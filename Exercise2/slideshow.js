
let current_index = 1;

function previous()
{
  current_index--;
  if (current_index < 1)
  {
    current_index = 5;
  }
  document.getElementById("pic").src = "images/cat" + current_index + ".jpg";
}

function next()
{
  current_index++;
  if (current_index > 5)
  {
    current_index = 1;
  }
  document.getElementById("pic").src = "images/cat" + current_index + ".jpg";
}
