(function(){
  const svg = document.getElementById('canvas');
  let color = '#000';
  let drawing = false;
  let current = null;

  function svgPoint(clientX, clientY){
    const pt = svg.createSVGPoint();
    pt.x = clientX; pt.y = clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  function createElement(name){
    return document.createElementNS('http://www.w3.org/2000/svg', name);
  }

  function startDraw(e){
    const p = svgPoint(e.clientX, e.clientY);
    drawing = true;
    const path = createElement('path');
    path.setAttribute('d', `M ${p.x} ${p.y}`);
    path.setAttribute('stroke', color);
    path.setAttribute('class', 'shape');
    path.setAttribute('fill', 'none');
    svg.appendChild(path);
    current = path;
  }

  function moveDraw(e){
    if (!drawing || !current) return;
    const p = svgPoint(e.clientX, e.clientY);
    const d = current.getAttribute('d');
    current.setAttribute('d', d + ` L ${p.x} ${p.y}`);
  }

  function endDraw(){
    drawing = false; current = null;
  }

  svg.addEventListener('pointerdown', (e)=>{ svg.setPointerCapture(e.pointerId); startDraw(e); });
  svg.addEventListener('pointermove', moveDraw);
  svg.addEventListener('pointerup', (e)=>{ svg.releasePointerCapture(e.pointerId); endDraw(); });
  svg.addEventListener('pointercancel', endDraw);
})();