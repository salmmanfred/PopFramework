const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var p = [
  [10, 20, 10, 10, "blue", "self"],
  [20, 50, 10, 10, "red", "solf"],
];
function addObj(x, y, w, h, c, i) {
  p.push([x, y, w, h, c, i]);
}

function removeObj(s) {
  p.slice(s, 1);
}

function getnum(n) {
  for (i = 0; i < p.length; i++) {
    if (p[i][5] == n) {
      return i;
    }
  }
}
var hei;
var wid;

function setup(h, w) {
  hei = h;
  wid = w;
}
function changeVal(i, t, x, v) {
  if (t == "+") {
    p[i][x] = p[i][x] + v;
  }
  if (t == "-") {
    p[i][x] = p[i][x] + v;
  }
}

function render() {
  let i;
  ctx.clearRect(0, 0, hei, wid);
  for (i = 0; i < p.length; i++) {
    ctx.fillStyle = p[i][4];

    ctx.fillRect(p[i][0], p[i][1], p[i][2], p[i][3]);
  }
}

function collided(n, nn) {
  let is;
  let iis;
  for (i = 0; i < p.length; i++) {
    if (p[i][5] == n) {
      is = i;
    }
    if (p[i][5] == nn) {
      iis = i;
    }
  }
  return col(is, iis);
}

function col(x, xx) {
  let i;
  let s = true;
  if (
    p[x][0] < p[xx][0] + p[xx][2] &&
    p[x][0] + p[x][2] > p[xx][0] &&
    p[x][1] < p[xx][1] + p[xx][3] &&
    p[x][1] + p[x][3] > p[xx][1]
  ) {
    return true;
  }
}

function outofframe(n) {
  let i;
  for (i = 0; i < p.length; i++) {
    if (p[i][5] == n) {
      if (p[i][0] >= wid) {
        return true;
      }
      if (p[i][1] >= hei) {
        return true;
      }
    }
    break;
  }
}
