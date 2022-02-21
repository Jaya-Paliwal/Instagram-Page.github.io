document.getElementById("c1").addEventListener("click", home);
function home(){
document.getElementById("fullpage").innerHTML = document.getElementById("homepage").innerHTML;
}

document.getElementById("c2").addEventListener("click", messenger);
function messenger(){
document.getElementById("fullpage").innerHTML = document.getElementById("chat").innerHTML;
}

document.getElementById("c3").addEventListener("click", addpost);
function addpost(){
document.getElementById("fullpage").innerHTML = document.getElementById("addition").innerHTML;
}

document.getElementById("c4").addEventListener("click", REELS);
function REELS(){
document.getElementById("fullpage").innerHTML = document.getElementById("reels").innerHTML;
}

document.getElementById("c5").addEventListener("click", LIKES);
function LIKES(){
document.getElementById("fullpage").innerHTML = document.getElementById("like").innerHTML;
}

document.getElementById("dp").addEventListener("click", PROFILE);
function PROFILE(){
    document.getElementById("fullpage").innerHTML = document.getElementById("fullpages").innerHTML
}

function myFunction() {
    var x = document.getElementById("Profile-pic");
    var y = document.getElementById("fullpage");
    var z = document.getElementById("body");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.filter = "brightness(50%)";
      z.style.backgroundColor = " rgb(182, 182, 182)";
    } else {
      x.style.display = "none";
      y.style.filter = "none";
      z.style.backgroundColor = "white";
    }
  }
  function myThreedots() {
    var a = document.getElementById("threedot");
    var b = document.getElementById("fullpage");
    var c = document.getElementById("body");
    if (a.style.display === "none") {
      a.style.display = "block";
      b.style.filter = "brightness(50%)";
      c.style.backgroundColor = " rgb(182, 182, 182)";
    } else {
      a.style.display = "none";
      b.style.filter = "none";
      c.style.backgroundColor = "white";
    }
  }
  function myArrow() {
    var aa = document.getElementById("downarrows");
    var ee = document.getElementById("fullpage");
    if (aa.style.display === "none") {
      aa.style.display = "block";
      ee.style.display = "none";
    } else {
      aa.style.display = "none";
      ee.style.display = "block";
    }
  }
document.getElementById("reel").addEventListener("click", reels);
function reels(){
document.getElementById("part3").innerHTML = document.getElementById("myreels").innerHTML;
}
document.getElementById("reel1").addEventListener("click", video);
function video(){
document.getElementById("part3").innerHTML = document.getElementById("myvideos").innerHTML;
}
document.getElementById("reel2").addEventListener("click", tagged);
function tagged(){
document.getElementById("part3").innerHTML = document.getElementById("mytagged").innerHTML;
}
document.getElementById("reel3").addEventListener("click", post);
function post(){
document.getElementById("part3").innerHTML = document.getElementById("posts").innerHTML;
}

function postimage() {
  var a = document.getElementById("post-img-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:620px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:700px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}
function postimagea() {
  var a = document.getElementById("post-img-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:1150px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:1100px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}
function postimageb() {
  var a = document.getElementById("post-img-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:1550px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:1500px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}
function postimagec() {
  var a = document.getElementById("post-img-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:1950px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:1900px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}
function postimaged() {
  var a = document.getElementById("post-img-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:2250px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:2200px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}
function show() {
  let image = document.getElementById("image");
  image.src = "images/himachal.jpg"
}
function showa() {
  let image = document.getElementById("image");
  image.src = "images/italy.jpg"
  document.getElementById("images").style.display = "none";
}
function showb() {
  let image = document.getElementById("image");
  image.src = "images/Japan.jpg"
}
function showc() {
  let image = document.getElementById("image");
  image.src = "images/nepal.jpg"
}
function showd() {
  let image = document.getElementById("image");
  image.src = "images/switzerland.webp"
}
function showe() {
  let image = document.getElementById("image");
  image.src = "images/udaipur.jpg"
}
function showf() {
  let image = document.getElementById("image");
  image.src = "images/ooty.jpg"
}
function showg() {
  let image = document.getElementById("image");
  image.src = "images/manali.jpg"
}
function showh() {
  let image = document.getElementById("image");
  image.src = "images/kulu.png"
}
function showi() {
  let image = document.getElementById("image");
  image.src = "images/kashmir.jpg"
}
function showj() {
  let image = document.getElementById("image");
  image.src = "images/jaipur.jpg"
}
function showk() {
  let image = document.getElementById("image");
  image.src = "images/darjeeling.jpg"
}
function showl() {
  let image = document.getElementById("image");
  image.src = "images/China.jpg"
}

function postimages() {
  var a = document.getElementById("post-video-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:620px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:700px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}

function postimagesa() {
  var a = document.getElementById("post-video-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:1150px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:1100px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}
function postimagesb() {
  var a = document.getElementById("post-video-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:1550px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:1500px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}
function postimagesc() {
  var a = document.getElementById("post-video-1");
  var b = document.getElementById("fullpage");
  var c = document.getElementById("body");
  var d = document.getElementsByClassName("cross");
  if (a.style.display === "none") {
    a.style="position:absolute; left:80px; top:1950px;";
    a.style.display = "block";
    b.style.filter = "brightness(50%)";
    c.style.backgroundColor = " rgb(182, 182, 182)";
    d.style="position:absolute; left:900px; top:1900px;";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.backgroundColor = "white";
  }
}
function showm() {
  let video = document.getElementById("images");
  video.src = "videos/p6_n.mp4"
}
function shown() {
  let video = document.getElementById("images");
  video.src = "videos/p2_n.mp4"
}
function showo() {
  let video = document.getElementById("images");
  video.src = "videos/p5_n.mp4"
}
function showp() {
  let video = document.getElementById("images");
  video.src = "videos/p7_n.mp4"
}
function showq() {
  let video = document.getElementById("images");
  video.src = "videos/p8_n.mp4"
}

