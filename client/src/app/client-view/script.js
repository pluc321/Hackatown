

function test()
{
  document.getElementById("test").innerHTML = "<h1>lol</h1>";
  var x = "";
  j;
  for (j = 1; j < 4; j++) {
    x = x + "<i class=\"fas fa-star\"></i>";
  }

  document.getElementById("restos").innerHTML = x;
}
