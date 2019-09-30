function manipulate()
{
  let dummy = document.getElementById('dummy');

  let bd_red = document.getElementById('bd_red').value;
  let bd_green = document.getElementById('bd_green').value;
  let bd_blue = document.getElementById('bd_blue').value;
  let bd_width = document.getElementById('bd_width').value;
  let bg_red = document.getElementById('bg_red').value;
  let bg_green = document.getElementById('bg_green').value;
  let bg_blue = document.getElementById('bg_blue').value;

  dummy.style.borderColor = '#' + bd_red + bd_green + bd_blue;
  dummy.style.backgroundColor = '#' + bg_red + bg_green + bg_blue;

  dummy.style.borderWidth = bd_width + 'px';
}
