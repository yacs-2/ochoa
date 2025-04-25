/**
  This script will inject the global page #gheader div of each page  
**/

const INJECTION ="

 '<div id="global-preheader"></div><h1 style="font-weight: bolder;">javier cite</h1><div id="global-header"><ul id="nav-list"><li><a href="#">Home</a></li><ul><li>Favorite Movie</li><li>Favorite Show</li><li>Favorite Book</li><li>Favorite Song</li></ul><li>Photos<ul><li>album 1</li><li>album 2</li><li>album 3</li></ul></li> <li><a href="#">Web Development</a><ul><li><a href="#">Week 1</a></li><li><a href="#">Week 2</a></li><li><a href="#">Week 3</a></li><li><a href="#">Week 4</a></li><li><a href="#">Week 5</a></li><li><a href="#">Week 6</a></li><li><a href="#">Week 7</a></li><li><a href="#">Week 8</a></li><li><a href="#">Week 9</a></li></ul></li><div>'

  let _div = document.getElementById("gheader");


  _div.innerHtml = INJECTION;
";
