/**
  This script will inject the global page #gheader div of each page  
**/





const INJECTION = '<div id="global-preheader"><h1>Welcome! to Javier\'s Website</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/jones"></a>Home</a></li><li> <a href="#">Photos</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/jones/art-projects/index.html">Projects </a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/jones/music/index.html"> music</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/jones/web-dev">Web Development</a><ul><li><a href="/jones/wdsub/week1.html">album 1</a></li><li><a href="/jones/wdsub/recipe.html"> album 2</a></li><li><a href="/jones/wdsub/anchors.html"> album 3</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/poem.html">album 1</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/reviews.html">album 2</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/journal.html">album 3</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/band-camp.html">album 1</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/list-maker.html">album 2</a></li></ul></a></li></ul></div>'
let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
