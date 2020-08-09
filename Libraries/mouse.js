function MousePosses(canvas, event) {
  var rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}
var MousePos;
canvas.addEventListener("mousemove", (e) => {
  MousePos = MousePosses(canvas, e);
});
