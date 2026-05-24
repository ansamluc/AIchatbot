/* ================================================================
   MATHEMATICA — Bar Graph Scenarios (shared by Unit 11 + Final Reviews)
   --------------------------------------------------------------
   Each scenario provides:
     - intro    : a short setup sentence
     - svg      : inline SVG string showing the bar graph
     - svgPrint : (optional) larger SVG for the printable, often with
                  extra grid space where a missing bar should be drawn
     - questions: array of question items in the same shape used by
                  quiz_word / final-review items (with _kind, options, answer, explain)
   ================================================================ */

/* CSS for the bar-graph SVGs (loaded via index.html) */
const MATH_BG_STYLES = `
<style>
.bg-wrap{background:#fdfbf6;border:1px solid #d0c4a0;border-radius:6px;padding:8px;margin:8px auto;display:inline-block;max-width:100%;}
.bg-wrap svg{display:block;max-width:100%;height:auto;}
.bg-caption{font-family:'Cinzel',serif;font-size:0.85rem;color:#1a4e88;text-align:center;margin-top:2px;}
.bg-clue{background:#f5f0e0;border-left:3px solid #c0a060;padding:6px 10px;margin:6px 0;font-style:italic;color:#3a2a18;}
.bg-draw{background:#fffdf2;border:1px dashed #888;border-radius:6px;padding:8px;margin:6px 0;font-family:Georgia,serif;font-size:0.95rem;color:#3a2a18;}
.bg-draw strong{color:#1a4e88;}
</style>
`;

/* ----------------------------------------------------------------
   Helper: build an SVG bar graph
   bars: [{label, value, color?}, ...]
   opts: { title, yLabel, yMax, yStep, missing: ['Birds'] }
   missing bars render as a red dashed outline with a "?" inside.
   ---------------------------------------------------------------- */
function mathBarGraphSVG(bars, opts) {
  opts = opts || {};
  const title = opts.title || '';
  const yLabel = opts.yLabel || 'Number';
  const yMax = opts.yMax || Math.max(...bars.map(b => b.value || 0)) + 5;
  const yStep = opts.yStep || 5;
  const missing = new Set(opts.missing || []);

  // Layout
  const W = 360, H = 240;
  const left = 50, right = 330, top = 35, bot = 200;
  const plotH = bot - top;
  const v2y = v => bot - (v / yMax) * plotH;

  // Compute bar width
  const n = bars.length;
  const slotW = (right - left) / n;
  const barW = Math.min(40, slotW - 18);

  const colorDefault = ['#3a6ea8','#6a8ec8','#8eb0d8','#b0cee8','#5078b0','#8aa8d0'];

  // Use inline attributes (NOT CSS classes) so the SVG renders identically
  // whether injected via innerHTML in the chat OR written into a printable
  // document. Inline attributes never depend on a <style> block.
  const FT = "font-family:'Georgia',serif";
  // Explicit width/height on the SVG element guarantees it gets a real
  // size even when its parent container is inline-block / zero-width.
  // The CSS rule .bg-wrap svg { max-width: 100%; height: auto } will
  // scale it down responsively on narrow screens.
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}" style="background:#fdfbf6;display:block">`;

  // Title
  svg += `<text x="${W/2}" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a4e88" style="${FT}">${title}</text>`;

  // Gridlines & y-labels
  for (let v = 0; v <= yMax; v += yStep) {
    const y = v2y(v);
    svg += `<line x1="${left}" y1="${y}" x2="${right}" y2="${y}" stroke="#cfc6b4" stroke-width="0.7" stroke-dasharray="2,2"/>`;
    svg += `<text x="${left-4}" y="${y+3}" text-anchor="end" font-size="10" fill="#5a5040" style="${FT}">${v}</text>`;
  }
  // Axes
  svg += `<line x1="${left}" y1="${top}" x2="${left}" y2="${bot}" stroke="#3a2a18" stroke-width="1.5"/>`;
  svg += `<line x1="${left}" y1="${bot}" x2="${right}" y2="${bot}" stroke="#3a2a18" stroke-width="1.5"/>`;
  // Y-axis title
  svg += `<text x="14" y="${(top+bot)/2}" text-anchor="middle" font-size="11" fill="#3a2a18" style="${FT}" transform="rotate(-90 14 ${(top+bot)/2})">${yLabel}</text>`;

  // Bars
  bars.forEach((b, i) => {
    const cx = left + slotW * (i + 0.5);
    const x = cx - barW/2;
    const yTop = v2y(b.value);
    const color = b.color || colorDefault[i % colorDefault.length];
    if (missing.has(b.label)) {
      // Dashed empty bar showing where the missing bar belongs
      svg += `<rect x="${x}" y="${top}" width="${barW}" height="${bot-top}" fill="none" stroke="#a83a3a" stroke-width="1.5" stroke-dasharray="4,3"/>`;
      svg += `<text x="${cx}" y="${(top+bot)/2}" text-anchor="middle" font-size="20" font-weight="bold" font-style="italic" fill="#a83a3a" style="${FT}">?</text>`;
    } else {
      svg += `<rect x="${x}" y="${yTop}" width="${barW}" height="${bot-yTop}" fill="${color}" stroke="#1a4e88" stroke-width="1"/>`;
    }
    svg += `<text x="${cx}" y="${bot+15}" text-anchor="middle" font-size="11" fill="#3a2a18" style="${FT}">${b.label}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

/* ----------------------------------------------------------------
   Scenario A — Favorite Sport (full graph, no missing bars)
   ---------------------------------------------------------------- */
const MATH_BG_SCENARIO_A_BARS = [
  { label: 'Soccer',     value: 25 },
  { label: 'Basketball', value: 30 },
  { label: 'Tennis',     value: 15 },
  { label: 'Swimming',   value: 20 }
];
const MATH_BG_SCENARIO_A_SVG = mathBarGraphSVG(MATH_BG_SCENARIO_A_BARS,
  { title: 'Favorite Sport', yLabel: 'Number of Students', yMax: 35, yStep: 5 });

const MATH_BG_SCENARIO_A_HEADER =
  `<div class='bg-wrap'>${MATH_BG_SCENARIO_A_SVG}</div>` +
  `<div class='bg-caption'>📊 Mrs. Lim's class voted on their favorite sport.</div>`;

const MATH_BG_SCENARIO_A_QUESTIONS = [
  { _kind: 'word', unit: 'Unit 11', _scenario: 'A',
    q: MATH_BG_SCENARIO_A_HEADER + "Using the bar graph above, <strong>how many students chose Basketball</strong>?",
    options: ["15", "20", "25", "30"], answer: 3,
    explain: "Read the top of the Basketball bar — it reaches 30 on the scale." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'A',
    q: MATH_BG_SCENARIO_A_HEADER + "Which sport was the <strong>least</strong> popular?",
    options: ["Soccer", "Basketball", "Tennis", "Swimming"], answer: 2,
    explain: "Tennis has the shortest bar (15). Shortest bar = least." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'A',
    q: MATH_BG_SCENARIO_A_HEADER + "How many <strong>more</strong> students chose Soccer than Tennis?",
    options: ["5", "10", "15", "25"], answer: 1,
    explain: "Soccer = 25, Tennis = 15. 25 − 15 = 10 more students." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'A',
    q: MATH_BG_SCENARIO_A_HEADER + "How many students were surveyed <strong>in all</strong>?",
    options: ["80", "85", "90", "95"], answer: 2,
    explain: "Add every bar: 25 + 30 + 15 + 20 = 90 students." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'A',
    q: MATH_BG_SCENARIO_A_HEADER + "Basketball had <strong>twice as many</strong> votes as which sport?",
    options: ["Soccer", "Tennis", "Swimming", "None of these"], answer: 1,
    explain: "Basketball = 30. 30 ÷ 2 = 15. Tennis = 15. So Basketball had twice as many as Tennis." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'A',
    q: MATH_BG_SCENARIO_A_HEADER + "Which sports had <strong>more than 20</strong> students?",
    options: ["Soccer and Basketball", "Basketball and Swimming", "Tennis and Swimming", "All four"], answer: 0,
    explain: "Bars taller than 20: Soccer (25) ✓, Basketball (30) ✓. Swimming = 20 (not MORE than). Tennis = 15." }
];

/* ----------------------------------------------------------------
   Scenario B — Animals seen on a Nature Walk (missing-bar)
   ---------------------------------------------------------------- */
const MATH_BG_SCENARIO_B_BARS = [
  { label: 'Squirrels', value: 8 },
  { label: 'Rabbits',   value: 6 },
  { label: 'Birds',     value: 12 },   // hidden in graphic via missing list
  { label: 'Deer',      value: 4 }
];
const MATH_BG_SCENARIO_B_SVG = mathBarGraphSVG(MATH_BG_SCENARIO_B_BARS,
  { title: 'Animals Seen on a Nature Walk', yLabel: 'Number of Animals',
    yMax: 20, yStep: 2, missing: ['Birds'] });

// For printable: same SVG but with extra hint "Draw the missing bar"
const MATH_BG_SCENARIO_B_HEADER =
  `<div class='bg-wrap'>${MATH_BG_SCENARIO_B_SVG}</div>` +
  `<div class='bg-caption'>🦌 The Birds bar is missing!</div>` +
  `<div class='bg-clue'>🔍 <strong>Clue:</strong> The number of Birds is <strong>4 more</strong> than the number of Squirrels.</div>`;

const MATH_BG_SCENARIO_B_QUESTIONS = [
  // Missing-bar core question
  { _kind: 'word', unit: 'Unit 11', _scenario: 'B', _missingBar: true,
    q: MATH_BG_SCENARIO_B_HEADER +
       "<strong>How tall should the Birds bar reach?</strong> " +
       "<em>(On the printable, draw the bar to the correct height.)</em>",
    options: ["10", "12", "14", "16"], answer: 1,
    explain: "Squirrels = 8 and Birds = Squirrels + 4 = 8 + 4 = <strong>12</strong>. The Birds bar should reach 12." },
  // Follow-up using the answer to the missing bar
  { _kind: 'word', unit: 'Unit 11', _scenario: 'B',
    q: MATH_BG_SCENARIO_B_HEADER +
       "After you figure out the missing bar, <strong>which animal was seen the most</strong>?",
    options: ["Squirrels", "Rabbits", "Birds", "Deer"], answer: 2,
    explain: "Birds = 12 (the tallest), Squirrels = 8, Rabbits = 6, Deer = 4. Birds were seen the most." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'B',
    q: MATH_BG_SCENARIO_B_HEADER +
       "How many <strong>more</strong> Birds than Deer were seen?",
    options: ["4", "6", "8", "12"], answer: 2,
    explain: "Birds = 12, Deer = 4. 12 − 4 = 8 more Birds." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'B',
    q: MATH_BG_SCENARIO_B_HEADER +
       "What is the <strong>total</strong> number of animals seen on the nature walk?",
    options: ["26", "28", "30", "32"], answer: 2,
    explain: "8 + 6 + 12 + 4 = 30 animals in all." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'B',
    q: MATH_BG_SCENARIO_B_HEADER +
       "Squirrels were seen <strong>twice as many times</strong> as which animal?",
    options: ["Rabbits", "Birds", "Deer", "No animal"], answer: 2,
    explain: "Squirrels = 8. 8 ÷ 2 = 4 → Deer. So Squirrels = 2 × Deer." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'B',
    q: MATH_BG_SCENARIO_B_HEADER +
       "Which animals were seen <strong>fewer than 8</strong> times?",
    options: ["Rabbits only", "Rabbits and Deer", "Deer only", "Birds and Deer"], answer: 1,
    explain: "Fewer than 8: Rabbits (6) ✓, Deer (4) ✓. Squirrels = 8 (not fewer). Birds = 12." }
];

/* ----------------------------------------------------------------
   Scenario C — Books Read This Week (missing-bar, used in Final Review 2)
   ---------------------------------------------------------------- */
const MATH_BG_SCENARIO_C_BARS = [
  { label: 'Mon', value: 3 },
  { label: 'Tue', value: 5 },
  { label: 'Wed', value: 7 },   // missing
  { label: 'Thu', value: 7 },
  { label: 'Fri', value: 4 }
];
const MATH_BG_SCENARIO_C_SVG = mathBarGraphSVG(MATH_BG_SCENARIO_C_BARS,
  { title: 'Books Read This Week', yLabel: 'Number of Books',
    yMax: 10, yStep: 1, missing: ['Wed'] });

const MATH_BG_SCENARIO_C_HEADER =
  `<div class='bg-wrap'>${MATH_BG_SCENARIO_C_SVG}</div>` +
  `<div class='bg-caption'>📚 Sara's reading log — Wednesday's bar is missing.</div>` +
  `<div class='bg-clue'>🔍 <strong>Clue:</strong> On Wednesday, Sara read <strong>2 more</strong> books than on Tuesday.</div>`;

const MATH_BG_SCENARIO_C_QUESTIONS = [
  { _kind: 'word', unit: 'Unit 11', _scenario: 'C', _missingBar: true,
    q: MATH_BG_SCENARIO_C_HEADER +
       "<strong>How tall should the Wednesday bar reach?</strong> " +
       "<em>(On the printable, draw the bar to the correct height.)</em>",
    options: ["5", "6", "7", "9"], answer: 2,
    explain: "Tuesday = 5 and Wednesday = Tuesday + 2 = 5 + 2 = <strong>7</strong> books." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'C',
    q: MATH_BG_SCENARIO_C_HEADER +
       "After finding Wednesday's bar, on <strong>which two days</strong> did Sara read the same number of books?",
    options: ["Mon and Fri", "Tue and Fri", "Wed and Thu", "Mon and Wed"], answer: 2,
    explain: "Wed = 7 and Thu = 7. They are equal." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'C',
    q: MATH_BG_SCENARIO_C_HEADER +
       "How many books did Sara read <strong>in all</strong> this week?",
    options: ["22", "24", "26", "28"], answer: 2,
    explain: "3 + 5 + 7 + 7 + 4 = 26 books." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'C',
    q: MATH_BG_SCENARIO_C_HEADER +
       "How many <strong>more</strong> books did Sara read on Thursday than on Monday?",
    options: ["3", "4", "5", "7"], answer: 1,
    explain: "Thu = 7, Mon = 3. 7 − 3 = 4 more books." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'C',
    q: MATH_BG_SCENARIO_C_HEADER +
       "On which day did Sara read the <strong>fewest</strong> books?",
    options: ["Mon", "Tue", "Fri", "Wed"], answer: 0,
    explain: "Mon = 3 — the shortest bar." }
];

/* ================================================================
   TALLY CHART GENERATOR
   rows: [{label, count, missing?: true}]
   Renders tally marks (groups of 5 with a slash through 4 vertical lines)
   ================================================================ */
function mathTallyChartSVG(rows, opts) {
  opts = opts || {};
  const title = opts.title || '';
  const FT = "font-family:'Georgia',serif";

  // Layout: 2 columns (Name | Tally), each row 36 tall, header 30
  const rowH = 36;
  const headerH = 30;
  const nameW = 110;
  const tallyW = 220;
  const W = nameW + tallyW + 20;
  const H = headerH + rowH * rows.length + 20;

  let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}" style="background:#fdfbf6;display:block">`;

  // Title
  svg += `<text x="${W/2}" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a4e88" style="${FT}">${title}</text>`;

  // Table outline
  const tableX = 10, tableY = headerH;
  // Header background
  svg += `<rect x="${tableX}" y="${tableY-22}" width="${nameW}" height="22" fill="#f0e8d8" stroke="#1a4e88" stroke-width="1"/>`;
  svg += `<rect x="${tableX+nameW}" y="${tableY-22}" width="${tallyW}" height="22" fill="#f0e8d8" stroke="#1a4e88" stroke-width="1"/>`;
  svg += `<text x="${tableX+nameW/2}" y="${tableY-7}" text-anchor="middle" font-size="12" font-weight="bold" fill="#1a4e88" style="${FT}">Name</text>`;
  svg += `<text x="${tableX+nameW+tallyW/2}" y="${tableY-7}" text-anchor="middle" font-size="12" font-weight="bold" fill="#1a4e88" style="${FT}">Tally</text>`;

  rows.forEach((row, i) => {
    const y = tableY + i * rowH;
    // Cells
    svg += `<rect x="${tableX}" y="${y}" width="${nameW}" height="${rowH}" fill="#ffffff" stroke="#1a4e88" stroke-width="1"/>`;
    svg += `<rect x="${tableX+nameW}" y="${y}" width="${tallyW}" height="${rowH}" fill="#ffffff" stroke="#1a4e88" stroke-width="1"/>`;
    // Name
    svg += `<text x="${tableX+nameW/2}" y="${y + rowH/2 + 4}" text-anchor="middle" font-size="12" fill="#3a2a18" style="${FT}">${row.label}</text>`;

    if (row.missing) {
      // Missing tally row: draw dashed empty area + "?"
      svg += `<rect x="${tableX+nameW+5}" y="${y+5}" width="${tallyW-10}" height="${rowH-10}" fill="none" stroke="#a83a3a" stroke-width="1.5" stroke-dasharray="4,3"/>`;
      svg += `<text x="${tableX+nameW+tallyW/2}" y="${y + rowH/2 + 6}" text-anchor="middle" font-size="18" font-weight="bold" font-style="italic" fill="#a83a3a" style="${FT}">?</text>`;
    } else {
      // Draw tally marks: groups of 5 (||||̸) then leftovers
      const count = row.count;
      const groups = Math.floor(count / 5);
      const leftover = count % 5;
      const markGap = 5;       // gap between strokes
      const groupGap = 12;     // gap between groups
      const strokeH = 22;      // tally stroke height
      let cx = tableX + nameW + 12;
      const cy = y + rowH/2;
      // Full groups of 5
      for (let g = 0; g < groups; g++) {
        // 4 vertical lines
        for (let k = 0; k < 4; k++) {
          svg += `<line x1="${cx + k*markGap}" y1="${cy - strokeH/2}" x2="${cx + k*markGap}" y2="${cy + strokeH/2}" stroke="#1a4e88" stroke-width="1.8"/>`;
        }
        // Diagonal slash across them
        svg += `<line x1="${cx - 3}" y1="${cy + strokeH/2 - 2}" x2="${cx + 3*markGap + 3}" y2="${cy - strokeH/2 + 2}" stroke="#1a4e88" stroke-width="1.8"/>`;
        cx += 3*markGap + groupGap;
      }
      // Leftover ungrouped marks
      for (let k = 0; k < leftover; k++) {
        svg += `<line x1="${cx + k*markGap}" y1="${cy - strokeH/2}" x2="${cx + k*markGap}" y2="${cy + strokeH/2}" stroke="#1a4e88" stroke-width="1.8"/>`;
      }
    }
  });

  svg += `</svg>`;
  return svg;
}

/* ----------------------------------------------------------------
   Scenario D — Favorite Pets (tally chart, full data)
   ---------------------------------------------------------------- */
const MATH_TC_SCENARIO_D_ROWS = [
  { label: 'Dogs',    count: 12 },
  { label: 'Cats',    count: 8 },
  { label: 'Rabbits', count: 5 },
  { label: 'Fish',    count: 3 }
];
const MATH_TC_SCENARIO_D_SVG = mathTallyChartSVG(MATH_TC_SCENARIO_D_ROWS, { title: 'Favorite Pets at Maple Elementary' });

const MATH_TC_SCENARIO_D_HEADER =
  `<div class='bg-wrap'>${MATH_TC_SCENARIO_D_SVG}</div>` +
  `<div class='bg-caption'>📋 Mrs. Park's class made a tally chart of favorite pets.</div>`;

const MATH_TC_SCENARIO_D_QUESTIONS = [
  { _kind: 'word', unit: 'Unit 11', _scenario: 'D',
    q: MATH_TC_SCENARIO_D_HEADER + "Using the tally chart above, <strong>how many students chose Dogs</strong>?",
    options: ["8", "10", "12", "15"], answer: 2,
    explain: "Dogs: two groups of 5 (||||̸ ||||̸) + 2 leftover = 5 + 5 + 2 = 12 students." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'D',
    q: MATH_TC_SCENARIO_D_HEADER + "Which pet was the <strong>most</strong> popular?",
    options: ["Dogs", "Cats", "Rabbits", "Fish"], answer: 0,
    explain: "Dogs has the most tally marks (12). Tallest count = most popular." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'D',
    q: MATH_TC_SCENARIO_D_HEADER + "Which pet was the <strong>least</strong> popular?",
    options: ["Dogs", "Cats", "Rabbits", "Fish"], answer: 3,
    explain: "Fish has the fewest tally marks (3). Smallest count = least popular." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'D',
    q: MATH_TC_SCENARIO_D_HEADER + "How many <strong>more</strong> students chose Dogs than Cats?",
    options: ["2", "4", "6", "8"], answer: 1,
    explain: "Dogs = 12, Cats = 8. 12 − 8 = 4 more." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'D',
    q: MATH_TC_SCENARIO_D_HEADER + "How many students were surveyed <strong>in all</strong>?",
    options: ["25", "26", "28", "30"], answer: 2,
    explain: "12 + 8 + 5 + 3 = 28 students." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'D',
    q: MATH_TC_SCENARIO_D_HEADER + "Count the tally marks for <strong>Rabbits</strong>. How many groups of 5 are there?",
    options: ["0 groups", "1 group", "2 groups", "3 groups"], answer: 1,
    explain: "Rabbits = 5: that's exactly one group of 5 (||||̸), with no leftovers." }
];

/* ----------------------------------------------------------------
   Scenario E — Lunch Choices (tally chart, missing row)
   ---------------------------------------------------------------- */
const MATH_TC_SCENARIO_E_ROWS = [
  { label: 'Pizza',    count: 14 },
  { label: 'Sandwich', count: 9 },
  { label: 'Salad',    count: 16, missing: true },  // will be rendered as missing
  { label: 'Soup',     count: 6 }
];
const MATH_TC_SCENARIO_E_SVG = mathTallyChartSVG(MATH_TC_SCENARIO_E_ROWS, { title: 'School Lunch Choices' });

const MATH_TC_SCENARIO_E_HEADER =
  `<div class='bg-wrap'>${MATH_TC_SCENARIO_E_SVG}</div>` +
  `<div class='bg-caption'>🥗 The Salad tally row is missing!</div>` +
  `<div class='bg-clue'>🔍 <strong>Clue:</strong> The number of students who chose Salad is <strong>2 more</strong> than the number who chose Pizza.</div>`;

const MATH_TC_SCENARIO_E_QUESTIONS = [
  { _kind: 'word', unit: 'Unit 11', _scenario: 'E', _missingTally: true,
    q: MATH_TC_SCENARIO_E_HEADER +
       "<strong>How many tally marks should the Salad row have?</strong> " +
       "<em>(On the printable, draw the tally marks in the empty row.)</em>",
    options: ["14", "15", "16", "18"], answer: 2,
    explain: "Pizza = 14 and Salad = Pizza + 2 = 14 + 2 = <strong>16</strong>. Draw 3 groups of 5 (||||̸ ||||̸ ||||̸) plus 1 leftover mark." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'E',
    q: MATH_TC_SCENARIO_E_HEADER +
       "After finding the missing row, which lunch was chosen the <strong>most</strong>?",
    options: ["Pizza", "Sandwich", "Salad", "Soup"], answer: 2,
    explain: "Salad = 16, Pizza = 14, Sandwich = 9, Soup = 6. Salad is the most." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'E',
    q: MATH_TC_SCENARIO_E_HEADER +
       "How many <strong>fewer</strong> students chose Soup than Sandwich?",
    options: ["3", "4", "5", "6"], answer: 0,
    explain: "Sandwich = 9, Soup = 6. 9 − 6 = 3 fewer." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'E',
    q: MATH_TC_SCENARIO_E_HEADER +
       "What is the <strong>total</strong> number of students surveyed?",
    options: ["41", "43", "45", "47"], answer: 2,
    explain: "14 + 9 + 16 + 6 = 45 students." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'E',
    q: MATH_TC_SCENARIO_E_HEADER +
       "Which lunch tally has <strong>exactly 1 group of 5 plus 4 leftover marks</strong>?",
    options: ["Pizza", "Sandwich", "Salad", "Soup"], answer: 1,
    explain: "Sandwich = 9 = 5 + 4. That's one group of 5 (||||̸) plus 4 leftover marks (||||)." }
];

/* ================================================================
   LINE PLOT GENERATOR
   data: array of values (numbers). Decimal/fractional values like 1.25 are OK.
   labels: optional array of strings for the x-axis ticks (e.g., ['1', '1¼', '1½', '1¾', '2'])
   values: array of numeric positions matching labels (e.g., [1, 1.25, 1.5, 1.75, 2])
   missing: optional value to render with a dashed empty X-spot at that position
   ================================================================ */
function mathLinePlotSVG(data, opts) {
  opts = opts || {};
  const title = opts.title || '';
  const xLabel = opts.xLabel || '';
  const labels = opts.labels;
  const values = opts.values;
  const missingValue = opts.missing;            // numeric value where an empty/missing X belongs
  const missingCount = opts.missingCount || 0;  // how many missing X's to indicate at that position
  const FT = "font-family:'Georgia',serif";

  const W = 460, H = 200;
  const left = 30, right = 430, baselineY = 150;
  const span = right - left;
  const tickCount = values.length;
  const tickGap = span / (tickCount - 1);

  // Count X's at each tick position
  const counts = values.map(v => data.filter(d => Math.abs(d - v) < 1e-6).length);
  const maxCount = Math.max(1, ...counts, missingCount);
  const xSize = 13;
  const xGap = 4;

  let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}" style="background:#fdfbf6;display:block">`;

  // Title
  svg += `<text x="${W/2}" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a4e88" style="${FT}">${title}</text>`;

  // Number line
  svg += `<line x1="${left}" y1="${baselineY}" x2="${right}" y2="${baselineY}" stroke="#1a4e88" stroke-width="2"/>`;
  // Arrowheads on both ends
  svg += `<polygon points="${left-6},${baselineY} ${left},${baselineY-5} ${left},${baselineY+5}" fill="#1a4e88"/>`;
  svg += `<polygon points="${right+6},${baselineY} ${right},${baselineY-5} ${right},${baselineY+5}" fill="#1a4e88"/>`;

  // Tick marks and labels
  values.forEach((v, i) => {
    const x = left + i * tickGap;
    svg += `<line x1="${x}" y1="${baselineY - 6}" x2="${x}" y2="${baselineY + 6}" stroke="#1a4e88" stroke-width="1.5"/>`;
    svg += `<text x="${x}" y="${baselineY + 22}" text-anchor="middle" font-size="13" fill="#3a2a18" style="${FT}">${labels[i]}</text>`;
  });

  // X marks above each tick
  values.forEach((v, i) => {
    const x = left + i * tickGap;
    const count = counts[i];
    for (let k = 0; k < count; k++) {
      const cy = baselineY - 12 - k*(xSize + xGap) - xSize/2;
      // Draw an X using two crossing lines
      svg += `<line x1="${x - xSize/2}" y1="${cy - xSize/2}" x2="${x + xSize/2}" y2="${cy + xSize/2}" stroke="#a83a3a" stroke-width="1.8" stroke-linecap="round"/>`;
      svg += `<line x1="${x - xSize/2}" y1="${cy + xSize/2}" x2="${x + xSize/2}" y2="${cy - xSize/2}" stroke="#a83a3a" stroke-width="1.8" stroke-linecap="round"/>`;
    }
    // Missing-X indicator (dashed circle outline at next stack position)
    if (missingValue !== undefined && Math.abs(v - missingValue) < 1e-6) {
      for (let k = 0; k < missingCount; k++) {
        const cy = baselineY - 12 - (count + k)*(xSize + xGap) - xSize/2;
        svg += `<circle cx="${x}" cy="${cy}" r="${xSize/2 + 2}" fill="none" stroke="#a83a3a" stroke-width="1.5" stroke-dasharray="3,2"/>`;
        svg += `<text x="${x}" y="${cy + 4}" text-anchor="middle" font-size="12" font-weight="bold" font-style="italic" fill="#a83a3a" style="${FT}">?</text>`;
      }
    }
  });

  // X-axis title
  if (xLabel) {
    svg += `<text x="${(left+right)/2}" y="${baselineY + 42}" text-anchor="middle" font-size="12" fill="#3a2a18" style="${FT}">${xLabel}</text>`;
  }

  svg += `</svg>`;
  return svg;
}

/* ----------------------------------------------------------------
   Scenario F — Pencil Lengths (line plot, full data)
   ---------------------------------------------------------------- */
const MATH_LP_F_LABELS = ['3', '3¼', '3½', '3¾', '4', '4¼', '4½'];
const MATH_LP_F_VALUES = [3, 3.25, 3.5, 3.75, 4, 4.25, 4.5];
const MATH_LP_F_DATA = [3, 3.25, 3.5, 3.5, 3.75, 3.75, 3.75, 4, 4, 4.25];  // 10 pencils
const MATH_LP_F_SVG = mathLinePlotSVG(MATH_LP_F_DATA, {
  title: 'Length of Pencils',
  xLabel: 'Length (inches)',
  labels: MATH_LP_F_LABELS,
  values: MATH_LP_F_VALUES
});

const MATH_LP_F_HEADER =
  `<div class='bg-wrap'>${MATH_LP_F_SVG}</div>` +
  `<div class='bg-caption'>✏ Mr. Tan measured 10 pencils to the nearest quarter inch.</div>`;

const MATH_LP_F_QUESTIONS = [
  { _kind: 'word', unit: 'Unit 11', _scenario: 'F',
    q: MATH_LP_F_HEADER + "Using the line plot above, <strong>how many pencils are 3¾ inches</strong> long?",
    options: ["1", "2", "3", "4"], answer: 2,
    explain: "Count the X's above 3¾ — there are 3 X's, so 3 pencils are 3¾ in. long." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'F',
    q: MATH_LP_F_HEADER + "Which length appears <strong>most often</strong>?",
    options: ["3 in.", "3½ in.", "3¾ in.", "4 in."], answer: 2,
    explain: "3¾ in. has the tallest stack of X's (3 X's). Most X's = most frequent value." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'F',
    q: MATH_LP_F_HEADER + "What is the <strong>longest</strong> pencil length on the line plot?",
    options: ["3½ in.", "3¾ in.", "4 in.", "4¼ in."], answer: 3,
    explain: "The rightmost X is above 4¼, so the longest pencil is 4¼ in." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'F',
    q: MATH_LP_F_HEADER + "<strong>How many pencils in all</strong> were measured?",
    options: ["8", "9", "10", "12"], answer: 2,
    explain: "Count every X: 1 + 1 + 2 + 3 + 2 + 1 = 10 pencils." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'F',
    q: MATH_LP_F_HEADER + "How many pencils are <strong>4 inches or longer</strong>?",
    options: ["1", "3", "5", "7"], answer: 1,
    explain: "X's at 4 in. = 2, X's at 4¼ in. = 1. Total: 2 + 1 = 3 pencils." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'F',
    q: MATH_LP_F_HEADER + "What does <strong>each X</strong> on the line plot stand for?",
    options: ["1 pencil", "2 pencils", "5 pencils", "10 pencils"], answer: 0,
    explain: "On a line plot, each X always equals 1 piece of data — here, 1 pencil." }
];

/* ----------------------------------------------------------------
   Scenario G — Ribbon Lengths (line plot, missing X — student must add)
   ---------------------------------------------------------------- */
const MATH_LP_G_LABELS = ['1', '1¼', '1½', '1¾', '2'];
const MATH_LP_G_VALUES = [1, 1.25, 1.5, 1.75, 2];
// Data shown on plot: P=1¾, Q=1, R=1¼, S=1½, T=1¼. Sixth ribbon (U=1¾) is MISSING from plot.
const MATH_LP_G_DATA = [1, 1.25, 1.25, 1.5, 1.75];  // 5 X's shown
const MATH_LP_G_SVG = mathLinePlotSVG(MATH_LP_G_DATA, {
  title: 'Ribbon Lengths',
  xLabel: 'Length (inches)',
  labels: MATH_LP_G_LABELS,
  values: MATH_LP_G_VALUES,
  missing: 1.75,
  missingCount: 1
});

const MATH_LP_G_HEADER =
  `<div class='bg-wrap'>${MATH_LP_G_SVG}</div>` +
  `<div class='bg-caption'>🎀 Lily measured 6 ribbons — only 5 X's are on the plot!</div>` +
  `<div class='bg-clue'>🔍 <strong>Clue:</strong> The missing ribbon is the <strong>same length</strong> as the longest one already shown.</div>`;

const MATH_LP_G_QUESTIONS = [
  { _kind: 'word', unit: 'Unit 11', _scenario: 'G', _missingX: true,
    q: MATH_LP_G_HEADER +
       "<strong>Above which length should the missing X be drawn?</strong> " +
       "<em>(On the printable, draw the X above the correct number.)</em>",
    options: ["1¼ in.", "1½ in.", "1¾ in.", "2 in."], answer: 2,
    explain: "The longest ribbon already shown is at 1¾ (one X is there). The missing ribbon matches it, so the new X goes above <strong>1¾ in.</strong>" },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'G',
    q: MATH_LP_G_HEADER +
       "After adding the missing X, <strong>which length will appear most often</strong>?",
    options: ["1 in.", "1¼ in.", "1¾ in.", "Two lengths tie"], answer: 3,
    explain: "After adding the X at 1¾, both 1¼ (2 X's) and 1¾ (2 X's) will tie for the most." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'G',
    q: MATH_LP_G_HEADER +
       "How many ribbons were measured in <strong>all</strong>?",
    options: ["5", "6", "7", "10"], answer: 1,
    explain: "5 X's shown + 1 missing = 6 ribbons total." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'G',
    q: MATH_LP_G_HEADER +
       "What is the <strong>shortest</strong> ribbon length?",
    options: ["1 in.", "1¼ in.", "1½ in.", "1¾ in."], answer: 0,
    explain: "The leftmost X is above 1 in., so the shortest ribbon is 1 in." },
  { _kind: 'word', unit: 'Unit 11', _scenario: 'G',
    q: MATH_LP_G_HEADER +
       "How many ribbons are <strong>shorter than 1½ inches</strong>?",
    options: ["1", "2", "3", "5"], answer: 2,
    explain: "Shorter than 1½: X's at 1 (1) and at 1¼ (2). Total = 1 + 2 = 3 ribbons." }
];

/* ================================================================
   UNIT 10 — TIMELINE-DRAWING WORD PROBLEMS for the final reviews
   ----------------------------------------------------------------
   Each problem asks the student to draw a timeline on their paper
   (printable) or just pick the answer (online). The explanation
   shows the correct answer-key timeline using the existing .tl-model
   CSS so the chat view renders identically to the unit's existing
   timeline problems.

   Scenario tags T1, T2, ... so the scenario-aware shuffle keeps the
   "elapsed time" theme grouped instead of splitting one timeline
   question between unrelated graph problems.
   ================================================================ */
function _mathTimelineModel(jumps, labels, caption) {
  // jumps and labels are arrays of strings; ticks count = labels.length
  return "<div class='tl-model'>" +
    "<div class='tl-caption'>✓ " + (caption || 'Answer-key timeline:') + "</div>" +
    "<div class='tl-jumps'>" + jumps.map(j => "<span class='tl-jump'>" + j + "</span>").join('') + "</div>" +
    "<div class='tl-line'></div>" +
    "<div class='tl-ticks'>" + labels.map(_ => "<span class='tl-tick'></span>").join('') + "</div>" +
    "<div class='tl-labels'>" + labels.map(l => "<span class='tl-label'>" + l + "</span>").join('') + "</div>" +
    "</div>";
}

// Shared instruction shown above every timeline word problem
const MATH_TL_PROMPT = "<div class='tl-instruction'>📝 Draw a timeline on your paper to help solve it.</div>";

const MATH_TL_PROBLEMS_R1 = [
  // ---- Final Review 1: 6 timeline-drawing problems ----
  { _kind: 'word', unit: 'Unit 10', _scenario: 'T1', _drawTimeline: true,
    q: "<strong>Goel</strong> started jogging at <strong>5:57 A.M.</strong> and stopped at <strong>6:14 A.M.</strong> How long did he jog for?<br>" + MATH_TL_PROMPT,
    options: ["57 minutes", "53 minutes", "27 minutes", "17 minutes"], answer: 3,
    explain: "From 5:57 to 6:14: 5:57 → 6:00 is 3 min, then 6:00 → 6:14 is 14 min. Total = 3 + 14 = <strong>17 min</strong>." +
      _mathTimelineModel(['3 min','14 min'], ['5:57 A.M.','6:00 A.M.','6:14 A.M.']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T2', _drawTimeline: true,
    q: "A class begins at <strong>8:30 A.M.</strong> and ends at <strong>10:05 A.M.</strong> How long is the class?<br>" + MATH_TL_PROMPT,
    options: ["1 h 35 min", "1 h 25 min", "2 h 35 min", "1 h 45 min"], answer: 0,
    explain: "8:30 → 10:00 = 1 h 30 min. 10:00 → 10:05 = 5 min. Total = <strong>1 h 35 min</strong>." +
      _mathTimelineModel(['1 h 30 min','5 min'], ['8:30 A.M.','10:00 A.M.','10:05 A.M.']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T3', _drawTimeline: true,
    q: "<strong>Jackson</strong> boarded a train at <strong>11:43 A.M.</strong> He got off the train <strong>35 minutes later</strong>. What time did he get off?<br>" + MATH_TL_PROMPT,
    options: ["12:08 P.M.", "12:18 P.M.", "11:18 A.M.", "12:28 P.M."], answer: 1,
    explain: "Break 35 min into 17 + 18 so you cross noon cleanly. 11:43 + 17 min = 12:00 P.M. 12:00 + 18 min = <strong>12:18 P.M.</strong>" +
      _mathTimelineModel(['17 min','18 min'], ['11:43 A.M.','12:00 P.M.','12:18 P.M.']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T4', _drawTimeline: true,
    q: "A movie starts at <strong>7:15 P.M.</strong> and lasts <strong>2 h 45 min</strong>. What time does it end?<br>" + MATH_TL_PROMPT,
    options: ["10:00 P.M.", "9:00 P.M.", "10:15 P.M.", "9:30 P.M."], answer: 0,
    explain: "Break 2 h 45 min into 45 min + 2 h. 7:15 + 45 min = 8:00, + 2 h = <strong>10:00 P.M.</strong>" +
      _mathTimelineModel(['45 min','2 h'], ['7:15 P.M.','8:00 P.M.','10:00 P.M.']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T5', _drawTimeline: true,
    q: "Sam's bus ride took <strong>1 h 10 min</strong>. He arrived at school at <strong>8:05 A.M.</strong> What time did the bus ride start?<br>" + MATH_TL_PROMPT,
    options: ["6:55 A.M.", "9:15 A.M.", "7:55 A.M.", "7:05 A.M."], answer: 0,
    explain: "Work backward from 8:05 A.M.: – 5 min = 8:00, – 1 h = 7:00, – 5 min = <strong>6:55 A.M.</strong>" +
      _mathTimelineModel(['5 min','1 h','5 min'], ['6:55 A.M. (start)','7:00 A.M.','8:00 A.M.','8:05 A.M. (arrive)']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T6', _drawTimeline: true,
    q: "A train left Station A and traveled toward Stations B and C. It passed Station B <strong>54 minutes later</strong>. The train then took <strong>47 minutes</strong> from Station B to Station C. It arrived at Station C at <strong>5:08 P.M.</strong> At what time did the train leave Station A?<br>" + MATH_TL_PROMPT,
    options: ["3:27 P.M.", "3:17 P.M.", "4:21 P.M.", "3:37 P.M."], answer: 0,
    explain: "Total trip = 54 + 47 = 101 min = 1 h 41 min. Work backward from 5:08 P.M.: – 47 min = 4:21 P.M. (Station B). – 54 min = <strong>3:27 P.M.</strong> (Station A)." +
      _mathTimelineModel(['54 min','47 min'], ['3:27 P.M. (A)','4:21 P.M. (B)','5:08 P.M. (C)']) }
];

const MATH_TL_PROBLEMS_R2 = [
  // ---- Final Review 2: 6 different timeline-drawing problems ----
  { _kind: 'word', unit: 'Unit 10', _scenario: 'T7', _drawTimeline: true,
    q: "Lily started her homework at <strong>4:50 P.M.</strong> She worked for <strong>1 h 20 min</strong>. What time did she finish?<br>" + MATH_TL_PROMPT,
    options: ["5:10 P.M.", "6:10 P.M.", "5:20 P.M.", "6:20 P.M."], answer: 1,
    explain: "Break 1 h 20 min into 10 min + 1 h + 10 min. 4:50 + 10 min = 5:00, + 1 h = 6:00, + 10 min = <strong>6:10 P.M.</strong>" +
      _mathTimelineModel(['10 min','1 h','10 min'], ['4:50 P.M.','5:00 P.M.','6:00 P.M.','6:10 P.M.']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T8', _drawTimeline: true,
    q: "<strong>Madelyn</strong> left her house at <strong>10:27 A.M.</strong>, passed the library 45 minutes later, and reached the mall at noon. How long did she take to travel from the library to the mall?<br>" + MATH_TL_PROMPT,
    options: ["48 min", "1 h 12 min", "47 min", "45 min"], answer: 0,
    explain: "Library time = 10:27 + 45 min = 11:12 A.M. From library to noon: 11:12 → 12:00 = <strong>48 min</strong>." +
      _mathTimelineModel(['45 min','48 min'], ['10:27 A.M. (house)','11:12 A.M. (library)','12:00 P.M. (mall)']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T9', _drawTimeline: true,
    q: "<strong>Maya</strong> started her piano practice at <strong>4:35 P.M.</strong> and practiced for <strong>1 h 25 min</strong>. What time did she finish?<br>" + MATH_TL_PROMPT,
    options: ["5:25 P.M.", "6:00 P.M.", "5:60 P.M.", "6:25 P.M."], answer: 1,
    explain: "Break 1 h 25 min into 25 min + 1 h. 4:35 + 25 min = 5:00, + 1 h = <strong>6:00 P.M.</strong>" +
      _mathTimelineModel(['25 min','1 h'], ['4:35 P.M.','5:00 P.M.','6:00 P.M.']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T10', _drawTimeline: true,
    q: "<strong>Ben's soccer game</strong> started at <strong>3:15 P.M.</strong> The first half was <strong>30 min</strong>, then a <strong>15 min</strong> half-time break, then the second half was <strong>30 min</strong>. What time did the game end?<br>" + MATH_TL_PROMPT,
    options: ["4:15 P.M.", "4:30 P.M.", "4:45 P.M.", "5:00 P.M."], answer: 1,
    explain: "3:15 + 30 min = 3:45 (first half ends). 3:45 + 15 min = 4:00 (break ends). 4:00 + 30 min = <strong>4:30 P.M.</strong>" +
      _mathTimelineModel(['30 min','15 min','30 min'], ['3:15 P.M.','3:45 P.M.','4:00 P.M.','4:30 P.M.']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T11', _drawTimeline: true,
    q: "<strong>Anna's birthday party</strong> ended at <strong>5:10 P.M.</strong> It lasted <strong>2 h 25 min</strong>. What time did the party <em>START</em>?<br>" + MATH_TL_PROMPT,
    options: ["2:45 P.M.", "3:45 P.M.", "2:30 P.M.", "7:35 P.M."], answer: 0,
    explain: "Work backward: 5:10 – 10 min = 5:00. 5:00 – 2 h = 3:00. 3:00 – 15 min = <strong>2:45 P.M.</strong>" +
      _mathTimelineModel(['15 min','2 h','10 min'], ['2:45 P.M.','3:00 P.M.','5:00 P.M.','5:10 P.M.']) },

  { _kind: 'word', unit: 'Unit 10', _scenario: 'T12', _drawTimeline: true,
    q: "<strong>Carlos</strong> arrived at the airport at <strong>11:20 A.M.</strong> He waited <strong>45 min</strong> to board, then his flight took <strong>1 h 50 min</strong>. What time did he land?<br>" + MATH_TL_PROMPT,
    options: ["1:55 P.M.", "2:55 P.M.", "1:05 P.M.", "1:55 A.M."], answer: 0,
    explain: "11:20 + 45 min = 12:05 P.M. 12:05 + 1 h 50 min: + 1 h = 1:05, + 50 min = <strong>1:55 P.M.</strong>" +
      _mathTimelineModel(['45 min','1 h 50 min'], ['11:20 A.M.','12:05 P.M.','1:55 P.M.']) }
];

/* ----------------------------------------------------------------
   INJECT into MATH_UNITS (Unit 11) and MATH_FINAL_REVIEWS
   This block runs at script load time; both objects must already exist
   (script tags are ordered after math-data.js and math-final-review.js).
   ---------------------------------------------------------------- */
(function injectMathBarGraphQuestions() {
  // Unit 11: append all scenarios' questions to quiz_word so they
  // show up in the Word Problem Trial. Strip the unit/scenario tags that
  // are only meaningful in the final review.
  if (typeof MATH_UNITS !== 'undefined' && MATH_UNITS.m11 && Array.isArray(MATH_UNITS.m11.quiz_word)) {
    const stripFR = (q) => {
      // Keep _scenario tag so the in-unit shuffle (in math-data.js) can
      // group questions from the same scenario together in order.
      const { unit, ...rest } = q;
      // For the in-unit version, strip the print-only hints
      rest.q = rest.q
        .replace(/\s*<em>\(On the printable, draw the bar to the correct height\.\)<\/em>/, '')
        .replace(/\s*<em>\(On the printable, draw the tally marks in the empty row\.\)<\/em>/, '')
        .replace(/\s*<em>\(On the printable, draw the X above the correct number\.\)<\/em>/, '');
      return rest;
    };
    MATH_UNITS.m11.quiz_word.push(
      ...MATH_BG_SCENARIO_A_QUESTIONS.map(stripFR),
      ...MATH_BG_SCENARIO_B_QUESTIONS.map(stripFR),
      ...MATH_BG_SCENARIO_C_QUESTIONS.map(stripFR),
      ...MATH_TC_SCENARIO_D_QUESTIONS.map(stripFR),
      ...MATH_TC_SCENARIO_E_QUESTIONS.map(stripFR),
      ...MATH_LP_F_QUESTIONS.map(stripFR),
      ...MATH_LP_G_QUESTIONS.map(stripFR)
    );
  }

  // Final Reviews:
  //   Review 1 → A (bar full) + B (bar missing) + D (tally full) + G (line plot missing) + 6 timeline-drawing problems
  //   Review 2 → C (bar missing) + E (tally missing) + F (line plot full) + 6 timeline-drawing problems
  if (typeof MATH_FINAL_REVIEWS !== 'undefined') {
    if (MATH_FINAL_REVIEWS.q1 && Array.isArray(MATH_FINAL_REVIEWS.q1.questions)) {
      MATH_FINAL_REVIEWS.q1.questions.push(
        ...MATH_BG_SCENARIO_A_QUESTIONS,
        ...MATH_BG_SCENARIO_B_QUESTIONS,
        ...MATH_TC_SCENARIO_D_QUESTIONS,
        ...MATH_LP_G_QUESTIONS,
        ...MATH_TL_PROBLEMS_R1
      );
    }
    if (MATH_FINAL_REVIEWS.q2 && Array.isArray(MATH_FINAL_REVIEWS.q2.questions)) {
      MATH_FINAL_REVIEWS.q2.questions.push(
        ...MATH_BG_SCENARIO_C_QUESTIONS,
        ...MATH_TC_SCENARIO_E_QUESTIONS,
        ...MATH_LP_F_QUESTIONS,
        ...MATH_TL_PROBLEMS_R2
      );
    }
  }
})();

