/* ================================================================
   MATHEMATICA — Polygon Shape Recognition & Drawing Questions
   --------------------------------------------------------------
   Two question modes:
     1. NAME IT — show an SVG polygon, ask students to name it
     2. DRAW IT — show the polygon name, ask about its properties
        (actual freehand drawing isn't possible in the chatbot,
        so "draw it" questions ask: how many sides? how many corners?
        which shape matches the description? — mirroring the textbook
        "complete the table by drawing each polygon" task)

   All items use the standard quiz item shape:
     { _kind, unit, q (HTML with inline SVG), options[], answer, explain }
   ================================================================ */

/* ----------------------------------------------------------------
   SVG helpers — draw clean labeled polygons inline
   ---------------------------------------------------------------- */
function polyShapeSVG(points, opts) {
  opts = opts || {};
  const W = opts.w || 160, H = opts.h || 140;
  const fill   = opts.fill   || '#d4e8f8';
  const stroke = opts.stroke || '#1a4e88';
  const label  = opts.label  || '';           // shown below shape if provided
  const hideLabel = opts.hideLabel || false;  // hide for "name it" questions

  const pts = points.map(([x,y]) => `${x},${y}`).join(' ');
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:middle">`;
  svg += `<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>`;
  if (label && !hideLabel) {
    svg += `<text x="${W/2}" y="${H-6}" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a4e88" font-family="Georgia,serif">${label}</text>`;
  }
  svg += `</svg>`;
  return svg;
}

function shapeWrap(svgStr, caption) {
  return `<div class="bg-wrap" style="text-align:center;padding:10px 18px">` +
         svgStr +
         (caption ? `<div class="bg-caption" style="margin-top:4px">${caption}</div>` : '') +
         `</div>`;
}

/* ----------------------------------------------------------------
   Polygon point sets (centered in 160×120 canvas unless noted)
   ---------------------------------------------------------------- */
// Triangle
const TRI_PTS   = [[80,15],[148,115],[12,115]];
// Quadrilateral — generic parallelogram (not rectangle)
const PARA_PTS  = [[40,105],[110,105],[145,25],[75,25]];
// Rectangle
const RECT_PTS  = [[18,30],[142,30],[142,100],[18,100]];
// Square
const SQ_PTS    = [[30,20],[130,20],[130,120],[30,120]];
// Rhombus
const RHO_PTS   = [[80,12],[148,65],[80,118],[12,65]];
// Trapezoid
const TRAP_PTS  = [[35,105],[125,105],[105,30],[55,30]];
// Pentagon
const PENT_PTS  = [[80,10],[148,58],[122,128],[38,128],[12,58]];
// Hexagon
const HEX_PTS   = [[80,8],[140,44],[140,104],[80,140],[20,104],[20,44]];
// Octagon (W=160,H=160)
const OCT_PTS   = [[60,8],[100,8],[140,48],[140,112],[100,152],[60,152],[20,112],[20,48]];

/* ----------------------------------------------------------------
   Pre-built SVGs (hidden label = for "name it" questions)
   ---------------------------------------------------------------- */
const SVG = {
  triangle:      polyShapeSVG(TRI_PTS,  { fill:'#fde8c0', hideLabel:true }),
  parallelogram: polyShapeSVG(PARA_PTS, { fill:'#d4e8f8', hideLabel:true }),
  rectangle:     polyShapeSVG(RECT_PTS, { fill:'#d8f0d8', hideLabel:true }),
  square:        polyShapeSVG(SQ_PTS,   { fill:'#e8d8f8', hideLabel:true }),
  rhombus:       polyShapeSVG(RHO_PTS,  { fill:'#f8d8d8', hideLabel:true }),
  trapezoid:     polyShapeSVG(TRAP_PTS, { fill:'#feefc0', hideLabel:true }),
  pentagon:      polyShapeSVG(PENT_PTS, { fill:'#d8f8f0', hideLabel:true }),
  hexagon:       polyShapeSVG(HEX_PTS,  { fill:'#f0d8f8', hideLabel:true }),
  octagon:       polyShapeSVG(OCT_PTS,  { w:160, h:165, fill:'#d8eef8', hideLabel:true }),
};

/* Labeled versions (for answer explanations) */
const SVG_LABELED = {
  triangle:      polyShapeSVG(TRI_PTS,  { fill:'#fde8c0', label:'Triangle'      }),
  parallelogram: polyShapeSVG(PARA_PTS, { fill:'#d4e8f8', label:'Parallelogram' }),
  rectangle:     polyShapeSVG(RECT_PTS, { fill:'#d8f0d8', label:'Rectangle'     }),
  square:        polyShapeSVG(SQ_PTS,   { fill:'#e8d8f8', label:'Square'        }),
  rhombus:       polyShapeSVG(RHO_PTS,  { fill:'#f8d8d8', label:'Rhombus'       }),
  trapezoid:     polyShapeSVG(TRAP_PTS, { fill:'#feefc0', label:'Trapezoid'     }),
  pentagon:      polyShapeSVG(PENT_PTS, { fill:'#d8f8f0', label:'Pentagon'      }),
  hexagon:       polyShapeSVG(HEX_PTS,  { fill:'#f0d8f8', label:'Hexagon'       }),
  octagon:       polyShapeSVG(OCT_PTS,  { w:160, h:165, fill:'#d8eef8', label:'Octagon' }),
};

/* ================================================================
   SECTION 1 — NAME IT (show shape, pick the name)
   ================================================================ */
const MATH_POLYGON_NAME_IT = [

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.triangle, '🔺 What is the name of this polygon?'),
    options:['Triangle','Rectangle','Pentagon','Hexagon'], answer:0,
    explain:'3 sides, 3 corners = <strong>Triangle</strong>. ' + shapeWrap(SVG_LABELED.triangle) },

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.rectangle, '🔷 What is the name of this polygon?'),
    options:['Trapezoid','Rhombus','Rectangle','Parallelogram'], answer:2,
    explain:'4 sides, 4 right angles, opposite sides parallel and equal = <strong>Rectangle</strong>. ' + shapeWrap(SVG_LABELED.rectangle) },

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.square, '🟪 What is the name of this polygon?'),
    options:['Rhombus','Square','Rectangle','Parallelogram'], answer:1,
    explain:'4 equal sides AND 4 right angles = <strong>Square</strong>. ' + shapeWrap(SVG_LABELED.square) },

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.rhombus, '🔶 What is the name of this polygon?'),
    options:['Square','Rectangle','Trapezoid','Rhombus'], answer:3,
    explain:'4 equal sides but angles are NOT right angles = <strong>Rhombus</strong>. ' + shapeWrap(SVG_LABELED.rhombus) },

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.trapezoid, '🔻 What is the name of this polygon?'),
    options:['Parallelogram','Trapezoid','Rectangle','Pentagon'], answer:1,
    explain:'4 sides, exactly 1 pair of parallel sides = <strong>Trapezoid</strong>. ' + shapeWrap(SVG_LABELED.trapezoid) },

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.parallelogram, '🔹 What is the name of this polygon?'),
    options:['Rectangle','Trapezoid','Parallelogram','Rhombus'], answer:2,
    explain:'4 sides, 2 pairs of parallel sides, no right angles = <strong>Parallelogram</strong>. ' + shapeWrap(SVG_LABELED.parallelogram) },

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.pentagon, '⭐ What is the name of this polygon?'),
    options:['Hexagon','Octagon','Quadrilateral','Pentagon'], answer:3,
    explain:'5 sides, 5 corners = <strong>Pentagon</strong>. ' + shapeWrap(SVG_LABELED.pentagon) },

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.hexagon, '🔮 What is the name of this polygon?'),
    options:['Pentagon','Hexagon','Octagon','Heptagon'], answer:1,
    explain:'6 sides, 6 corners = <strong>Hexagon</strong>. ' + shapeWrap(SVG_LABELED.hexagon) },

  { _kind:'word', unit:'Unit 12',
    q: shapeWrap(SVG.octagon, '🛑 What is the name of this polygon?'),
    options:['Hexagon','Pentagon','Octagon','Decagon'], answer:2,
    explain:'8 sides, 8 corners = <strong>Octagon</strong> (like a stop sign!). ' + shapeWrap(SVG_LABELED.octagon) },

];

/* ================================================================
   SECTION 2 — DRAW IT (given the name, answer questions about it)
   In the textbook, students draw the shape in a table. Here we ask
   targeted questions about the shape's sides, corners, and properties
   — which directly test the same knowledge as drawing it.
   ================================================================ */
const MATH_POLYGON_DRAW_IT = [

  // Triangle
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Triangle.</strong><br>Before you draw it on paper, answer: how many sides does a triangle have?</div>`,
    options:['2','3','4','5'], answer:1,
    explain:'A triangle has <strong>3 sides</strong> and 3 corners. ' + shapeWrap(SVG_LABELED.triangle) },

  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Triangle.</strong><br>How many corners (angles) does it have?</div>`,
    options:['2','3','4','6'], answer:1,
    explain:'A triangle has <strong>3 corners</strong> (angles), one at each vertex. ' + shapeWrap(SVG_LABELED.triangle) },

  // Quadrilateral / Rectangle
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Quadrilateral.</strong><br>How many sides does a quadrilateral have?</div>`,
    options:['3','4','5','6'], answer:1,
    explain:'A quadrilateral has <strong>4 sides</strong> and 4 corners. Squares, rectangles, and trapezoids are all quadrilaterals. ' + shapeWrap(SVG_LABELED.rectangle) },

  // Rectangle
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Rectangle.</strong><br>Which of the following is true about a rectangle?</div>`,
    options:['It has 3 sides','It has 4 equal sides','It has 4 right angles and opposite sides are equal','It has no right angles'], answer:2,
    explain:'A rectangle has <strong>4 right angles</strong> and opposite sides that are parallel and equal. ' + shapeWrap(SVG_LABELED.rectangle) },

  // Square
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Square.</strong><br>How is a square different from a rectangle?</div>`,
    options:['A square has more sides','A square has 4 equal sides AND 4 right angles','A square has no right angles','A square has 5 sides'], answer:1,
    explain:'A square has <strong>4 equal sides AND 4 right angles</strong>. A rectangle also has 4 right angles but sides do not need to be equal. ' + shapeWrap(SVG_LABELED.square) },

  // Pentagon
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Pentagon.</strong><br>How many sides does a pentagon have?</div>`,
    options:['4','5','6','8'], answer:1,
    explain:'A pentagon has <strong>5 sides</strong> and 5 corners. ' + shapeWrap(SVG_LABELED.pentagon) },

  // Hexagon
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Hexagon.</strong><br>How many sides does a hexagon have?</div>`,
    options:['5','6','7','8'], answer:1,
    explain:'A hexagon has <strong>6 sides</strong> and 6 corners. Honeycomb cells are hexagons! ' + shapeWrap(SVG_LABELED.hexagon) },

  // Hexagon corners
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Hexagon.</strong><br>How many corners does a hexagon have?</div>`,
    options:['4','5','6','8'], answer:2,
    explain:'A hexagon has <strong>6 corners</strong> — the same as its number of sides. ' + shapeWrap(SVG_LABELED.hexagon) },

  // Trapezoid
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Trapezoid.</strong><br>What is special about a trapezoid's sides?</div>`,
    options:['It has 4 equal sides','It has no parallel sides','It has exactly 1 pair of parallel sides','It has 2 pairs of parallel sides'], answer:2,
    explain:'A trapezoid has <strong>exactly 1 pair of parallel sides</strong>. ' + shapeWrap(SVG_LABELED.trapezoid) },

  // Rhombus
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw a Rhombus.</strong><br>Which best describes a rhombus?</div>`,
    options:['4 equal sides and 4 right angles','4 equal sides but angles are NOT right angles','3 equal sides','5 sides'], answer:1,
    explain:'A rhombus has <strong>4 equal sides</strong> but its angles are NOT required to be right angles (unlike a square). ' + shapeWrap(SVG_LABELED.rhombus) },

  // Octagon
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Draw an Octagon.</strong><br>How many sides does an octagon have?</div>`,
    options:['5','6','7','8'], answer:3,
    explain:'An octagon has <strong>8 sides</strong> and 8 corners — like a stop sign! ' + shapeWrap(SVG_LABELED.octagon) },

  // Complete the table — matching (side-count based)
  { _kind:'word', unit:'Unit 12',
    q: `<div class="bg-draw">📝 <strong>Complete the table.</strong><br>Match each polygon to its number of sides:<br><br>
        Triangle → ___&nbsp;&nbsp; Pentagon → ___&nbsp;&nbsp; Hexagon → ___&nbsp;&nbsp; Quadrilateral → ___</div>`,
    options:['3, 5, 6, 4','4, 5, 6, 3','3, 6, 5, 4','5, 3, 6, 4'], answer:0,
    explain:'Triangle = <strong>3</strong>, Pentagon = <strong>5</strong>, Hexagon = <strong>6</strong>, Quadrilateral = <strong>4</strong>.' },

];

/* ================================================================
   Export combined pool (used by math-data.js quiz runners + final reviews)
   ================================================================ */
const MATH_POLYGON_QUESTIONS = [
  ...MATH_POLYGON_NAME_IT,
  ...MATH_POLYGON_DRAW_IT
];
