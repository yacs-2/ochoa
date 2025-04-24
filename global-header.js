/**
  This script will inject the global page #gheader div of each page  
**/

const INJECTION ="

 <div id="global-preheader"></div><h1 style="font-weight: bolder;">Bat Cave</h1><div id="global-header"><ul id="nav-list"><li>Home</li><ul><li>Favorite Movie</li><li>Favorite Show</li><li>Favorite Book</li><li>Favorite Song</li></ul><li>Photos<ul><li>album 1</li><li>album 2</li><li>album 3</li></ul></li><li>Web Development<ul><li>Week 1</li><li>Week 2</li><li>Week 3</li><li>Week 4</li><li>Week 5</li><li>Week 6</li><li>Week 7</li><li>Week 8</li><li>Week 9</li></ul></li>

  let _div = document.getElementById("gheader");


  _div.innerHtml = INJECTION;
";
