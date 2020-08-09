/*var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");*/
b = [
  {
    //PLACEMENT IN THE ARRAY SHOULD NOT BE REMOVED EVER

    x: -100,
    y: -100,
    w: 0,
    h: 0,
    c: "blue",
    t: "wel",
    tc: "green",
    ts: "0px",
    tt: "Arial",
    id: "button1",
  },
];
//Function to get the mouse position
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect) {
  return (
    pos.x > rect.x &&
    pos.x < rect.x + rect.w &&
    pos.y < rect.y + rect.h &&
    pos.y > rect.y
  );
}

//The rectangle should have x,y,width,height properties
var ispress = [null];
//Binding the click event on the canvas
canvas.addEventListener(
  "click",
  function (e) {
    var x = 0;
    let i = 0;
    // console.log("dsf");
    for (i = 0; i < b.length; i++) {
      var mousePos = { x: e.clientX, y: e.clientY };
      x + 1;
      if (isInside(mousePos, b[i])) {
        ispress[i] = true;
      } else {
        ispress[i] = false;
      }
    }
    console.log("ds" + ispress + "ss" + x + "ss" + b.length);
  },
  false
);
function addButton(x, y, w, h, c, t, tc, ts, tt, i) {
  b.push({
    x: x,
    y: y,
    w: w,
    h: h,
    c: c,
    t: t,
    tc: tc,
    ts: ts,
    tt: tt,
    id: i,
  });
}

function checkbuttonlib() {
  return "buttonlib";
}
function getb() {
  return b;
}
function ispressed(f) {
  let x = ispress[f];
  ispress[f] = false;
  return x;
}
