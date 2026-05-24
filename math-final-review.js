/* ================================================================
   MATHEMATICA — FINAL REVIEW QUIZZES (Units 10 + 11 + 12)
   --------------------------------------------------------------
   Two final-review quizzes drawing from all three Math units:
     • Unit 10 — Time
     • Unit 11 — Graphs and Line Plots
     • Unit 12 — Angles, Lines & 2-D Figures

   Each quiz mixes the four trial types together (shuffled at runtime):
     - mc   : Multiple Choice
     - tf   : True / False
     - fill : Fill-in-the-Blank
     - word : Word Problem

   Item shape:
     mc/fill/word:  { _kind, q, options[], answer (index), explain, unit }
     tf:            { _kind:'tf', q, answer (true|false), explain, unit }
   ================================================================ */

const MATH_FINAL_REVIEWS = {

  /* ============================================================
     FINAL REVIEW 1
     ============================================================ */
  q1: {
    title: "Math Final Review 1",
    subtitle: "Units 10 + 11 + 12 — Mix Review",
    emoji: "🧮",

    questions: [
      // ---------- Unit 10 — Time (MC) ----------
      { _kind: 'mc', unit: 'Unit 10', q: "What is another way to read <strong>6:15</strong>?", options: ["15 minutes to 6", "15 minutes past 6", "6 minutes past 15", "quarter to 6"], answer: 1, explain: "6:15 = 15 minutes PAST 6." },
      { _kind: 'mc', unit: 'Unit 10', q: "Convert <strong>2 h 40 min</strong> to minutes.", options: ["140 min", "150 min", "160 min", "240 min"], answer: 2, explain: "2 × 60 = 120 min; 120 + 40 = 160 min." },
      { _kind: 'mc', unit: 'Unit 10', q: "Add: <strong>1 h 40 min + 1 h 27 min</strong>.", options: ["2 h 7 min", "2 h 67 min", "3 h 7 min", "3 h 17 min"], answer: 2, explain: "1+1 = 2 h, 40+27 = 67 min = 1 h 7 min. Total = 3 h 7 min." },
      { _kind: 'mc', unit: 'Unit 10', q: "Subtract: <strong>2 h 13 min – 1 h 38 min</strong>.", options: ["35 min", "1 h 25 min", "25 min", "45 min"], answer: 0, explain: "Borrow 1 h: 1 h 73 min – 1 h 38 min = 35 min." },
      { _kind: 'mc', unit: 'Unit 10', q: "Convert <strong>98 min</strong> to hours and minutes.", options: ["1 h 38 min", "1 h 28 min", "9 h 8 min", "1 h 8 min"], answer: 0, explain: "98 ÷ 60 = 1 with remainder 38." },

      // ---------- Unit 10 — Time (T/F) ----------
      { _kind: 'tf', unit: 'Unit 10', q: "<strong>1 hour = 60 minutes.</strong>", answer: true, explain: "True! There are 60 minutes in 1 hour." },
      { _kind: 'tf', unit: 'Unit 10', q: "<strong>3:00 A.M.</strong> means 3 o'clock in the afternoon.", answer: false, explain: "False! A.M. = morning. Afternoon would be P.M." },
      { _kind: 'tf', unit: 'Unit 10', q: "<strong>120 minutes</strong> is the same as <strong>2 hours</strong>.", answer: true, explain: "True! 120 ÷ 60 = 2." },

      // ---------- Unit 10 — Time (Fill) ----------
      { _kind: 'mc', unit: 'Unit 10', q: "FILL: 60 minutes = ___ hour.", options: ["1", "2", "10", "60"], answer: 0, explain: "60 minutes = 1 hour." },
      { _kind: 'mc', unit: 'Unit 10', q: "FILL: 150 min = ___.", options: ["1 h 50 min", "2 h 30 min", "1 h 30 min", "2 h 50 min"], answer: 1, explain: "150 ÷ 60 = 2 remainder 30 → 2 h 30 min." },
      { _kind: 'mc', unit: 'Unit 10', q: "FILL: 12:00 P.M. is also called ___.", options: ["midnight", "noon", "morning", "evening"], answer: 1, explain: "12:00 P.M. = noon." },

      // ---------- Unit 10 — Time (Word) ----------
      { _kind: 'word', unit: 'Unit 10', q: "A class begins at <strong>8:30 A.M.</strong> and ends at <strong>10:05 A.M.</strong> How long is the class?", options: ["1 h 35 min", "1 h 25 min", "2 h 35 min", "1 h 45 min"], answer: 0, explain: "8:30 → 10:00 = 1 h 30 min. 10:00 → 10:05 = 5 min. Total = 1 h 35 min." },
      { _kind: 'word', unit: 'Unit 10', q: "Lily started her homework at <strong>4:50 P.M.</strong> She worked for <strong>1 h 20 min</strong>. What time did she finish?", options: ["5:10 P.M.", "6:10 P.M.", "5:20 P.M.", "6:20 P.M."], answer: 1, explain: "4:50 + 10 min = 5:00, + 1 h = 6:00, + 10 min = 6:10 P.M." },
      { _kind: 'word', unit: 'Unit 10', q: "A movie starts at <strong>7:15 P.M.</strong> and lasts <strong>2 h 45 min</strong>. What time does it end?", options: ["10:00 P.M.", "9:00 P.M.", "10:15 P.M.", "9:30 P.M."], answer: 0, explain: "7:15 + 45 min = 8:00, + 2 h = 10:00 P.M." },

      // ---------- Unit 11 — Graphs (MC) ----------
      { _kind: 'mc', unit: 'Unit 11', q: "What does the <strong>key</strong> on a picture graph tell you?", options: ["The title of the graph", "How many each picture stands for", "The number of pictures", "The name of the data"], answer: 1, explain: "The key tells how many each picture represents." },
      { _kind: 'mc', unit: 'Unit 11', q: "If <strong>Each 🍞 = 2</strong> and the row for Bun shows <strong>5 pictures</strong>, how many buns are there?", options: ["5", "7", "10", "12"], answer: 2, explain: "5 × 2 = 10 buns." },
      { _kind: 'mc', unit: 'Unit 11', q: "Which graph uses <strong>X marks</strong> above a number line?", options: ["bar graph", "line plot", "picture graph", "tally chart"], answer: 1, explain: "A line plot uses X's stacked above each value on a number line." },
      { _kind: 'mc', unit: 'Unit 11', q: "On a bar graph, the <strong>tallest bar</strong> shows the…", options: ["least", "middle value", "greatest", "average"], answer: 2, explain: "Tallest bar = greatest number." },

      // ---------- Unit 11 — Graphs (T/F) ----------
      { _kind: 'tf', unit: 'Unit 11', q: "On a picture graph, the <strong>key</strong> tells how many each picture stands for.", answer: true, explain: "True! The key gives the value of each picture." },
      { _kind: 'tf', unit: 'Unit 11', q: "On a bar graph, the <strong>shortest bar</strong> shows the greatest amount.", answer: false, explain: "False! The TALLEST bar shows the greatest amount." },
      { _kind: 'tf', unit: 'Unit 11', q: "Each <strong>X</strong> on a line plot stands for 5 pieces of data.", answer: false, explain: "False! Each X stands for ONE piece of data." },
      { _kind: 'tf', unit: 'Unit 11', q: "On a bar graph, you can find the total by ADDING all the bar values together.", answer: true, explain: "True! Add every bar to find the total." },

      // ---------- Unit 11 — Graphs (Fill) ----------
      { _kind: 'mc', unit: 'Unit 11', q: "FILL: A graph that uses bars of different lengths is a ___ graph.", options: ["bar", "picture", "tally", "line"], answer: 0, explain: "It's a bar graph." },
      { _kind: 'mc', unit: 'Unit 11', q: "FILL: A chart that uses marks like ||||̸ to count is a ___ chart.", options: ["bar", "tally", "picture", "data"], answer: 1, explain: "It's a tally chart." },
      { _kind: 'mc', unit: 'Unit 11', q: "FILL: On a line plot, each X = ___ piece(s) of data.", options: ["1", "2", "5", "10"], answer: 0, explain: "1 X = 1 piece of data." },

      // NOTE: Unit 11 word problems come from math-bargraphs.js at runtime
      // (scenarios A, B, D, G have full bar-graph/tally/line-plot SVGs).

      // ---------- Unit 12 — 2-D Figures (MC) ----------
      { _kind: 'mc', unit: 'Unit 12', q: "Which has <strong>two endpoints</strong>?", options: ["line", "line segment", "ray", "angle"], answer: 1, explain: "A line segment has 2 endpoints." },
      { _kind: 'mc', unit: 'Unit 12', q: "An angle that looks exactly like the <strong>corner of a book</strong> is a…", options: ["less than a right angle", "right angle", "greater than a right angle", "straight angle"], answer: 1, explain: "Right angle = square corner (90°)." },
      { _kind: 'mc', unit: 'Unit 12', q: "Two lines that <strong>never meet</strong> and stay the same distance apart are…", options: ["perpendicular", "parallel", "intersecting", "right"], answer: 1, explain: "Parallel lines never meet." },
      { _kind: 'mc', unit: 'Unit 12', q: "How many sides does a <strong>hexagon</strong> have?", options: ["4", "5", "6", "8"], answer: 2, explain: "Hexagon = 6 sides." },
      { _kind: 'mc', unit: 'Unit 12', q: "Which is a <strong>quadrilateral with 4 equal sides AND 4 right angles</strong>?", options: ["rhombus", "rectangle", "square", "trapezoid"], answer: 2, explain: "A square has 4 equal sides AND 4 right angles." },
      { _kind: 'mc', unit: 'Unit 12', q: "Which has <strong>only 1 pair of parallel sides</strong>?", options: ["rectangle", "trapezoid", "square", "rhombus"], answer: 1, explain: "A trapezoid has exactly 1 pair of parallel sides." },

      // ---------- Unit 12 — 2-D Figures (T/F) ----------
      { _kind: 'tf', unit: 'Unit 12', q: "A <strong>ray</strong> has two endpoints.", answer: false, explain: "False! A ray has only 1 endpoint." },
      { _kind: 'tf', unit: 'Unit 12', q: "<strong>Perpendicular lines</strong> meet to form a right angle.", answer: true, explain: "True! Perpendicular = forms a right angle." },
      { _kind: 'tf', unit: 'Unit 12', q: "Every <strong>square</strong> is a <strong>rectangle</strong>.", answer: true, explain: "True! A square has 4 right angles and 2 pairs of parallel sides." },
      { _kind: 'tf', unit: 'Unit 12', q: "A polygon can have <strong>curved sides</strong>.", answer: false, explain: "False! Polygons must have STRAIGHT sides." },

      // ---------- Unit 12 — 2-D Figures (Fill) ----------
      { _kind: 'mc', unit: 'Unit 12', q: "FILL: A polygon with 3 sides is a ___.", options: ["triangle", "square", "pentagon", "hexagon"], answer: 0, explain: "3 sides = triangle." },
      { _kind: 'mc', unit: 'Unit 12', q: "FILL: Lines that meet to form a right angle are ___ lines.", options: ["parallel", "perpendicular", "open", "curved"], answer: 1, explain: "Perpendicular." },
      { _kind: 'mc', unit: 'Unit 12', q: "FILL: A quadrilateral with exactly 1 pair of parallel sides is a ___.", options: ["square", "rectangle", "trapezoid", "rhombus"], answer: 2, explain: "Trapezoid." },

      // ---------- Unit 12 — 2-D Figures (Word) ----------
      { _kind: 'word', unit: 'Unit 12', q: "A shape has <strong>4 sides, 4 right angles, and 4 equal sides</strong>. What is its most specific name?", options: ["quadrilateral", "rectangle", "rhombus", "square"], answer: 3, explain: "All four traits → square (the most specific name)." },
      { _kind: 'word', unit: 'Unit 12', q: "Two railroad tracks <strong>never meet</strong> — they stay the same distance apart forever. The tracks are…", options: ["perpendicular", "parallel", "intersecting", "right"], answer: 1, explain: "Never meet, same distance apart = parallel." },
      { _kind: 'word', unit: 'Unit 12', q: "A stop-sign window has <strong>6 sides</strong>. The window is shaped like a…", options: ["pentagon", "hexagon", "rectangle", "trapezoid"], answer: 1, explain: "6 sides = hexagon." }
    ]
  },

  /* ============================================================
     FINAL REVIEW 2
     ============================================================ */
  q2: {
    title: "Math Final Review 2",
    subtitle: "Units 10 + 11 + 12 — Mix Review",
    emoji: "🧮",

    questions: [
      // ---------- Unit 10 — Time (MC) ----------
      { _kind: 'mc', unit: 'Unit 10', q: "What is another way to read <strong>8:50</strong>?", options: ["8 minutes to 50", "50 minutes past 8", "10 minutes to 9", "10 minutes past 8"], answer: 2, explain: "8:50 is 10 minutes BEFORE 9." },
      { _kind: 'mc', unit: 'Unit 10', q: "Which time means '5 minutes to 4'?", options: ["3:55", "4:05", "4:55", "5:55"], answer: 0, explain: "5 minutes BEFORE 4 = 3:55." },
      { _kind: 'mc', unit: 'Unit 10', q: "Convert <strong>207 min</strong> to hours and minutes.", options: ["2 h 7 min", "3 h 27 min", "2 h 47 min", "3 h 47 min"], answer: 1, explain: "207 ÷ 60 = 3 remainder 27." },
      { _kind: 'mc', unit: 'Unit 10', q: "Add: <strong>2 h 35 min + 1 h 50 min</strong>.", options: ["3 h 85 min", "4 h 25 min", "4 h 15 min", "3 h 25 min"], answer: 1, explain: "35+50 = 85 min = 1 h 25 min. Total = 4 h 25 min." },
      { _kind: 'mc', unit: 'Unit 10', q: "Subtract: <strong>3 h 10 min – 1 h 45 min</strong>.", options: ["2 h 35 min", "1 h 25 min", "1 h 35 min", "1 h 65 min"], answer: 1, explain: "Borrow 1 h: 2 h 70 min – 1 h 45 min = 1 h 25 min." },

      // ---------- Unit 10 — Time (T/F) ----------
      { _kind: 'tf', unit: 'Unit 10', q: "<strong>6:45</strong> can be read as '15 minutes to 7'.", answer: true, explain: "True! 6:45 is 15 minutes BEFORE 7." },
      { _kind: 'tf', unit: 'Unit 10', q: "<strong>'5 minutes to 9'</strong> means 9:05.", answer: false, explain: "False! '5 minutes to 9' means 8:55." },
      { _kind: 'tf', unit: 'Unit 10', q: "<strong>P.M.</strong> covers the time from noon to just before midnight.", answer: true, explain: "True! P.M. = noon to just before midnight." },
      { _kind: 'tf', unit: 'Unit 10', q: "<strong>90 minutes = 9 hours.</strong>", answer: false, explain: "False! 90 min = 1 h 30 min." },

      // ---------- Unit 10 — Time (Fill) ----------
      { _kind: 'mc', unit: 'Unit 10', q: "FILL: 1 hour 15 min = ___ minutes.", options: ["75", "115", "65", "85"], answer: 0, explain: "60 + 15 = 75 minutes." },
      { _kind: 'mc', unit: 'Unit 10', q: "FILL: 180 minutes = ___ hours.", options: ["1", "2", "3", "18"], answer: 2, explain: "180 ÷ 60 = 3 hours." },
      { _kind: 'mc', unit: 'Unit 10', q: "FILL: 12:00 A.M. is also called ___.", options: ["midnight", "noon", "morning", "evening"], answer: 0, explain: "12:00 A.M. = midnight." },

      // ---------- Unit 10 — Time (Word) ----------
      { _kind: 'word', unit: 'Unit 10', q: "Sam's bus ride took <strong>1 h 10 min</strong>. He arrived at school at <strong>8:05 A.M.</strong> What time did the bus ride start?", options: ["6:55 A.M.", "9:15 A.M.", "7:55 A.M.", "7:05 A.M."], answer: 0, explain: "Work backward from 8:05 A.M.: – 5 min = 8:00, – 1 h = 7:00, – 5 min = 6:55 A.M." },
      { _kind: 'word', unit: 'Unit 10', q: "<strong>Jackson</strong> boarded a train at <strong>11:43 A.M.</strong> He got off <strong>35 minutes later</strong>. What time did he get off?", options: ["12:08 P.M.", "12:18 P.M.", "11:18 A.M.", "12:28 P.M."], answer: 1, explain: "11:43 + 17 min = 12:00, + 18 min = 12:18 P.M." },
      { _kind: 'word', unit: 'Unit 10', q: "<strong>Maya</strong> started her piano practice at <strong>4:35 P.M.</strong> and practiced for <strong>1 h 25 min</strong>. What time did she finish?", options: ["5:25 P.M.", "6:00 P.M.", "5:60 P.M.", "6:25 P.M."], answer: 1, explain: "4:35 + 25 min = 5:00, + 1 h = 6:00 P.M." },

      // ---------- Unit 11 — Graphs (MC) ----------
      { _kind: 'mc', unit: 'Unit 11', q: "On a tally chart, <strong>||||̸ ||</strong> equals…", options: ["5", "6", "7", "9"], answer: 2, explain: "Crossed group = 5, plus 2 more = 7." },
      { _kind: 'mc', unit: 'Unit 11', q: "If <strong>Each ⭐ = 5</strong> and a row shows <strong>4 stars</strong>, the value is…", options: ["9", "20", "25", "45"], answer: 1, explain: "4 × 5 = 20." },
      { _kind: 'mc', unit: 'Unit 11', q: "On a line plot, the value with the <strong>tallest column of X's</strong> is the value that appears…", options: ["least often", "most often", "in the middle", "exactly twice"], answer: 1, explain: "Tallest column = value that appears most often." },
      { _kind: 'mc', unit: 'Unit 11', q: "On a ruler, what is the mark exactly halfway between 2 and 3?", options: ["2¼", "2½", "2¾", "3¼"], answer: 1, explain: "Halfway between 2 and 3 is 2½ in." },
      { _kind: 'mc', unit: 'Unit 11', q: "If 15 children chose buns and 45 chose pancakes, the number of pancakes is how many <strong>times</strong> the number of buns?", options: ["2 times", "3 times", "30 times", "60 times"], answer: 1, explain: "45 ÷ 15 = 3, so pancakes is 3 times buns." },

      // ---------- Unit 11 — Graphs (T/F) ----------
      { _kind: 'tf', unit: 'Unit 11', q: "On a tally chart, every group of <strong>5 marks</strong> has 4 vertical lines and 1 line crossing through them.", answer: true, explain: "True! ||||̸ = 5." },
      { _kind: 'tf', unit: 'Unit 11', q: "A <strong>line plot</strong> uses bars to show data.", answer: false, explain: "False! A line plot uses X marks above a number line." },
      { _kind: 'tf', unit: 'Unit 11', q: "On a ruler, <strong>2½ in.</strong> is exactly halfway between 2 and 3.", answer: true, explain: "True! 2½ is halfway between 2 and 3." },
      { _kind: 'tf', unit: 'Unit 11', q: "To find <strong>'how many more'</strong>, you should ADD the two amounts.", answer: false, explain: "False! 'How many more' means SUBTRACT." },

      // ---------- Unit 11 — Graphs (Fill) ----------
      { _kind: 'mc', unit: 'Unit 11', q: "FILL: A graph that uses pictures to show data is a ___ graph.", options: ["bar", "picture", "tally", "line"], answer: 1, explain: "It's a picture graph." },
      { _kind: 'mc', unit: 'Unit 11', q: "FILL: On a picture graph, the ___ tells what each picture stands for.", options: ["title", "label", "key", "scale"], answer: 2, explain: "The key shows the value of each picture." },
      { _kind: 'mc', unit: 'Unit 11', q: "FILL: On a bar graph, the numbers on the side are called the ___.", options: ["title", "scale", "key", "tally"], answer: 1, explain: "The scale shows the values on a bar graph." },

      // NOTE: Unit 11 word problems come from math-bargraphs.js at runtime
      // (scenarios C, E, F have full bar-graph/tally/line-plot SVGs).

      // ---------- Unit 12 — 2-D Figures (MC) ----------
      { _kind: 'mc', unit: 'Unit 12', q: "Which has <strong>one endpoint</strong> and goes on forever in one direction?", options: ["line", "line segment", "ray", "angle"], answer: 2, explain: "A ray has one endpoint and continues forever in one direction." },
      { _kind: 'mc', unit: 'Unit 12', q: "An angle that is <strong>bigger</strong> than a right angle is…", options: ["less than a right angle", "right angle", "greater than a right angle", "perpendicular"], answer: 2, explain: "Bigger than a square corner = greater than a right angle." },
      { _kind: 'mc', unit: 'Unit 12', q: "A polygon must be a…", options: ["closed figure with curved sides", "closed figure with straight sides", "open figure with straight sides", "open figure with curved sides"], answer: 1, explain: "A polygon is CLOSED and made of STRAIGHT line segments." },
      { _kind: 'mc', unit: 'Unit 12', q: "How many sides does a <strong>pentagon</strong> have?", options: ["3", "4", "5", "6"], answer: 2, explain: "Pentagon = 5 sides." },
      { _kind: 'mc', unit: 'Unit 12', q: "Which is a <strong>quadrilateral with 2 pairs of parallel sides AND 4 right angles</strong>?", options: ["trapezoid", "parallelogram", "rectangle", "triangle"], answer: 2, explain: "A rectangle has 2 pairs of parallel sides AND 4 right angles." },
      { _kind: 'mc', unit: 'Unit 12', q: "Which of these is <strong>NOT a polygon</strong>?", options: ["triangle", "rectangle", "circle", "hexagon"], answer: 2, explain: "A circle has a curved side, so it is NOT a polygon." },

      // ---------- Unit 12 — 2-D Figures (T/F) ----------
      { _kind: 'tf', unit: 'Unit 12', q: "A <strong>line segment</strong> has two endpoints.", answer: true, explain: "True! Line segments have 2 endpoints." },
      { _kind: 'tf', unit: 'Unit 12', q: "<strong>Parallel lines</strong> meet at one point.", answer: false, explain: "False! Parallel lines NEVER meet." },
      { _kind: 'tf', unit: 'Unit 12', q: "Every <strong>rectangle</strong> is a <strong>square</strong>.", answer: false, explain: "False! A rectangle is only a square if all 4 sides are equal." },
      { _kind: 'tf', unit: 'Unit 12', q: "A <strong>trapezoid</strong> has 2 pairs of parallel sides.", answer: false, explain: "False! A trapezoid has exactly 1 pair of parallel sides." },

      // ---------- Unit 12 — 2-D Figures (Fill) ----------
      { _kind: 'mc', unit: 'Unit 12', q: "FILL: A polygon with 6 sides is a ___.", options: ["pentagon", "hexagon", "octagon", "trapezoid"], answer: 1, explain: "6 sides = hexagon." },
      { _kind: 'mc', unit: 'Unit 12', q: "FILL: Lines that never meet and stay the same distance apart are ___ lines.", options: ["perpendicular", "parallel", "right", "open"], answer: 1, explain: "Parallel." },
      { _kind: 'mc', unit: 'Unit 12', q: "FILL: A parallelogram with 4 equal sides (but not necessarily right angles) is a ___.", options: ["rhombus", "rectangle", "square", "triangle"], answer: 0, explain: "Rhombus." },

      // ---------- Unit 12 — 2-D Figures (Word) ----------
      { _kind: 'word', unit: 'Unit 12', q: "I am a polygon with <strong>two pairs of parallel sides</strong>, <strong>four right angles</strong>, and <strong>opposite sides of equal length</strong>. What shape am I?", options: ["square", "rhombus", "trapezoid", "rectangle"], answer: 3, explain: "Rectangle — opposite sides equal but not necessarily all 4 sides equal." },
      { _kind: 'word', unit: 'Unit 12', q: "Two streets meet to form a <strong>right angle</strong> at the intersection. The streets are…", options: ["parallel", "perpendicular", "open", "curved"], answer: 1, explain: "Right angle = perpendicular." },
      { _kind: 'word', unit: 'Unit 12', q: "A shape has <strong>exactly 1 pair of parallel sides</strong>. What is its name?", options: ["parallelogram", "trapezoid", "rectangle", "rhombus"], answer: 1, explain: "Exactly 1 pair of parallel sides = trapezoid." }
    ]
  }
};
