/**
  This script will inject the global page #gheader div of each page  
**/






const INJECTION = '<div id="global-preheader"><h1>Welcome! to Javier\'s Website</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/ochoa/home.html">Home</a></li><li><a href="#">Photos</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/jones/art-projects/index.html">JavaScript </a><ul><li><a href="/ochoa/JavaScript/experiments/index.html">Experiments</a></li><li><a href="/ochoa/JavaScript/projects/index.html">Projects</a></li><li><a href="/ochoa/JavaScript/index.html">JS home page</a></li></ul></li><li><a href="/jones/music/index.html"> music</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/ochoa/web-dev">Web Development</a><ul><li><a href="/ochoa/wdsub/week1.html">Week 1</a></li><li><a href="/ochoa/wdsub/recipe.html"> Week 2</a></li><li><a href="/ochoa/wdsub/anchors.html"> Week 3</a></li><li><a href="https://yacs-2.github.io/ochoa/wdsub/poem.html">Week 4</a></li><li><a href="https://yacs-2.github.io/ochoa/wdsub/reviews.html">Week 5</a></li><li><a href="https://yacs-2.github.io/ochoa/wdsub/week6.html">Week 6</a></li><li><a href="https://yacs-2.github.io/ochoa/wdsub/band-camp.html">Week 7</a></li><li><a href="https://yacs-2.github.io/ochoa/wdsub/list-maker.html">Week 8</a></li><li><a href="https://yacs-2.github.io/ochoa/wdsub/pythag.html">Week 9</a></li><li><a href="https://yacs-2.github.io/ochoa/wdsub/ttt.html">Week 10</a></li></ul></a></li></ul></div>'
  let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;

