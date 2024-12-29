/*drag svg element */
var svg, sel, pos0, pos;
function startDrag(evt) {
  if (!evt.target.classList.contains('draggable')) return; 
    sel = evt.target;
    pos0 = getMousePosition(evt);
    el_drag( sel, true, pos0, 0, 0 );     

  }
  
function getMousePosition(evt) {
  var CTM = svg.getScreenCTM();
  if (evt.touches) { evt = evt.touches[0]; }
  return {
    x: (evt.clientX - CTM.e) / CTM.a,
    y: (evt.clientY - CTM.f) / CTM.d
  };
}  
/*user function*/
function drag(evt) {
  if (sel==null) return;
  evt.preventDefault();
  pos = getMousePosition(evt);
  el_drag( sel, false, pos, pos.x-pos0.x, pos.y-pos0.y );     
}

function endDrag(evt) { sel = null;} 
  
function makeDraggable(evt) {
  svg = evt.target;
  /*
  svg.addEventListener('mousedown', startDrag);
  svg.addEventListener('mousemove', drag);
  svg.addEventListener('mouseup', endDrag);
  svg.addEventListener('mouseleave', endDrag);
  */
  /* for touch*/
  svg.addEventListener('touchstart', startDrag);
  svg.addEventListener('touchmove', drag);
  svg.addEventListener('touchend', endDrag);
  svg.addEventListener('touchleave', endDrag);
  svg.addEventListener('touchcancel', endDrag);
} 

