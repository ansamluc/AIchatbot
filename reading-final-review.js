/* ================================================================
   READING FINAL REVIEW — Combined Quiz
   Part 1: Text & Graphic Features (Section A: 9 label + Section B: 5 MC)
   Part 2: The Mystery Project (passage + 12 MC)
   Total: 26 questions
   ================================================================ */

var READING_FINAL_REVIEWS = {
  rd_final_1: {
    title: 'Reading Final Review',
    subtitle: 'Text & Graphic Features · The Mystery Project',

    /* ── Section A: 9 labelling items (Text & Graphic Features) ───── */
    sectionA: [
      {
        num: 1,
        arrow: '►',
        display: `<div style="display:inline-block;border:2px solid #1F5C1F;background:#D6E8D6;padding:8px 14px;font-family:serif;text-align:center;min-width:160px;">
  <div style="color:#CC0000;font-weight:bold;font-size:0.95rem;letter-spacing:1px;">NATIONAL GEOGRAPHIC</div>
  <div style="color:#CC0000;font-weight:bold;font-size:1.3rem;letter-spacing:2px;">RAIN<br>FORESTS</div>
  <div style="font-size:0.8rem;margin-top:4px;">Sarah Green</div>
</div>`,
        answer: 'Title'
      },
      {
        num: 2,
        arrow: '►',
        display: `<div style="display:inline-block;border:1px solid #000;background:#EAF4EA;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:200px;">
  <div>Twinkle, Twinkle ............ 3</div>
  <div>What Is a Rain Forest? ............ 4</div>
  <div>Forest Layers ............ 8</div>
  <div>Rain Forest Plants ............ 12</div>
  <div>Rain Forest Animals ............ 16</div>
  <div>People and Rain Forests ............ 20</div>
</div>`,
        answer: 'Table of Contents'
      },
      {
        num: 3,
        arrow: '◄',
        display: `<div style="display:inline-block;border:1px solid #000;background:#EAF4EA;padding:8px 14px;font-family:serif;font-size:0.85rem;min-width:220px;">
  <div style="color:#1F5C1F;font-weight:bold;font-size:1rem;">Forest Layers</div>
  <div style="margin-top:4px;font-size:0.8rem;">The rain forest has four main layers. Each layer gets a different amount of sunlight and rain. Many different plants and animals live in each layer.</div>
  <div style="margin-top:4px;font-size:0.8rem;">The top layer is called the emergent layer. Tall trees poke through the canopy and reach for the sun.</div>
</div>`,
        answer: 'Heading'
      },
      {
        num: 4,
        arrow: '►',
        display: `<div style="display:inline-block;border:1px solid #555;background:#f8f8f0;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:230px;">
  <div>The rain forest has four layers. The <u><strong>canopy</strong></u> is the thick roof of treetops. Below it is the <u><strong>understory</strong></u>, where plants grow in the shade. The forest floor is dark and damp. Many animals depend on their <u><strong>habitat</strong></u> to survive.</div>
  <div style="margin-top:6px;">Scientists who study the forest are called <u><strong>ecologists</strong></u>. They work to protect <u><strong>biodiversity</strong></u>, which means the variety of life on Earth.</div>
</div>`,
        answer: 'Keywords / Key Words'
      },
      {
        num: 5,
        arrow: '◄',
        display: `<div style="display:inline-block;border:1px solid #555;background:#f8f8f0;padding:8px 14px;font-family:'Courier New',monospace;font-size:0.75rem;min-width:220px;line-height:1.5;">
  <div style="font-weight:bold;margin-bottom:4px;font-family:serif;">Parts of a Rain Forest Tree</div>
  <div>╔══════╗</div>
  <div>║ leaf &nbsp;║ ◄─── leaf</div>
  <div>╔═══╩══════╩═══╗</div>
  <div>║ &nbsp;branches &nbsp; ║ ◄─── branch</div>
  <div>╚═══════════════╝</div>
  <div>│</div>
  <div>│ trunk ◄─── trunk</div>
  <div>│</div>
  <div>══════╧══════</div>
  <div>roots ◄─── root</div>
</div>`,
        answer: 'Label'
      },
      {
        num: 6,
        arrow: '◄',
        display: `<div style="display:inline-block;border:1px solid #555;background:#f4f4f4;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:220px;text-align:center;">
  <div style="background:#c8e6c9;border:1px solid #aaa;width:120px;height:70px;margin:0 auto;display:flex;align-items:center;justify-content:center;font-size:0.75rem;color:#555;">[Photo: bright red<br>poison dart frog]</div>
  <div style="margin-top:6px;font-style:italic;font-size:0.78rem;text-align:left;">Poison dart frogs live on the rain forest floor and use bright colors to warn predators.</div>
</div>`,
        answer: 'Caption'
      },
      {
        num: 7,
        arrow: '►',
        display: `<div style="display:inline-block;border:1px solid #555;background:#EAF4EA;padding:8px 14px;font-family:serif;font-size:0.8rem;min-width:240px;">
  <div style="font-style:italic;color:#555;">Rain Forests &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 38</div>
  <div style="font-weight:bold;margin:4px 0;">C – D – H – P – U</div>
  <div><strong>canopy</strong> &nbsp; the thick layer of treetops that covers the forest like a roof</div>
  <div><strong>deforestation</strong> &nbsp; the cutting down of large numbers of trees</div>
  <div><strong>habitat</strong> &nbsp; the place where a plant or animal naturally lives</div>
  <div><strong>photosynthesis</strong> &nbsp; the process plants use to make food from sunlight</div>
  <div><strong>understory</strong> &nbsp; the shaded layer beneath the canopy</div>
</div>`,
        answer: 'Glossary'
      },
      {
        num: 8,
        arrow: '◄',
        display: `<div style="display:inline-block;border:2px solid #555;background:#fffde8;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:220px;">
  <div style="font-weight:bold;">Rain Forest Animals</div>
  <div style="margin-top:4px;">Millions of animal species live in the rain forest. From tiny insects to jaguars, each animal has a special role in the ecosystem.</div>
  <div style="margin-top:4px;">The canopy is home to monkeys, parrots, and tree frogs. On the forest floor, ants and beetles recycle dead leaves.</div>
  <div style="margin-top:6px;font-weight:bold;">Rainforest by the Numbers</div>
  <div>• 50% of all species on Earth live here</div>
  <div>• 2.5 million insect species</div>
  <div>• 1,300+ bird species in the Amazon</div>
</div>`,
        answer: 'Sidebar'
      },
      {
        num: 9,
        arrow: '◄',
        display: `<div style="display:inline-block;border:2px solid #f0a000;background:#fffbe6;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:220px;">
  <div style="font-weight:bold;font-size:0.95rem;">Did You Know?</div>
  <div style="margin-top:4px;">Rain forests cover only 6% of Earth's surface, but they are home to more than half of the world's plant and animal species!</div>
  <div style="margin-top:4px;">About 121 prescription drugs come from rain forest plants.</div>
</div>`,
        answer: 'Fact Box'
      }
    ],

    /* ── The Mystery Project passage (shown before Part 2 questions) ── */
    passage:
      `<div style="font-style:italic;font-size:0.82rem;color:#555;margin-bottom:6px;">Reading 2: The Mystery Project — By Emma Carter</div>` +
      `<p>Last month, Mrs. Chen gave her class a science <strong>__1__</strong>. The students had to work together to solve a complicated mystery. One morning, they found strange footprints in the school garden. The footprints led to a tree that gave <strong>__2__</strong> during the hot afternoon.</p>` +
      `<p>The students searched for clues around the garden. They discovered a torn piece of paper and some muddy <strong>__3__</strong> near the tree. As they looked more carefully, they found more evidence that someone had been there the day before.</p>` +
      `<p>Some students were <strong>__4__</strong> at their notes while others searched the area. One student was eating snacks greedily and almost missed an important clue! Finally, the class learned that the footprints belonged to a worker who had come to store gardening tools in a shed near the garden.</p>` +
      `<p>The students presented their findings to Mrs. Chen. Even though the mystery seemed difficult at first, they solved it by working together and paying attention to the evidence.</p>`,

    /* ── All MC questions: Section B (5) + Mystery Project (12) ────── */
    questions: [
      /* Section B — Text & Graphic Features MC (Q1–5) */
      {
        num: 1,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q1</strong><br><br>Where would you find a Table of Contents in a nonfiction book?',
        options: ['A) At the end of the book', 'B) At the beginning of the book', 'C) In the middle of the book', 'D) On the back cover'],
        answer: 1,
        explain: 'A Table of Contents is found at the beginning of the book.'
      },
      {
        num: 2,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q2</strong><br><br>What is the purpose of a heading in a nonfiction text?',
        options: ['A) To list the page numbers of each chapter', 'B) To tell what a section of text is mainly about', 'C) To give the definition of a key word', 'D) To describe a photograph or illustration'],
        answer: 1,
        explain: 'A heading tells what a section of text is mainly about.'
      },
      {
        num: 3,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q3</strong><br><br>A student sees bold words with their definitions at the back of a book. What text feature is this?',
        options: ['A) Caption', 'B) Sidebar', 'C) Glossary', 'D) Index'],
        answer: 2,
        explain: 'A glossary is a list of key words and their definitions, usually at the back of a book.'
      },
      {
        num: 4,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q4</strong><br><br>Which text feature would BEST help a reader find out what a word means without using a dictionary?',
        options: ['A) Table of Contents', 'B) Heading', 'C) Label', 'D) Keywords / Key Words'],
        answer: 3,
        explain: 'Keywords / Key Words are important vocabulary words highlighted in the text, often with their meanings nearby.'
      },
      {
        num: 5,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q5</strong><br><br>Read the following passage:<br><blockquote style="background:#f0f4f0;border-left:3px solid #2a7a6a;padding:6px 10px;margin:8px 0;font-size:0.88rem;">"The emergent layer is the top layer of the rain forest. Only the tallest trees reach this layer. Eagles and butterflies live here."</blockquote>The bolded words <em>emergent layer</em> and <em>canopy</em> appear in a list at the back of the book with their meanings. What text feature is this list?',
        options: ['A) Index', 'B) Table of Contents', 'C) Glossary', 'D) Caption'],
        answer: 2,
        explain: 'A list of bolded words with their meanings at the back of a book is a Glossary.'
      },

      /* Reading 2: The Mystery Project (Q6–17) — passage shown before Q6 */
      {
        num: 6,
        section: 'Reading 2 — The Mystery Project',
        showPassage: true,
        q: '<strong>Reading 2 — Q1</strong><br><br>What is the correct spelling of the missing word? (blank <strong>__1__</strong>)<br><em>Mrs. Chen gave her class a science __1__.</em>',
        options: ['A) project', 'B) proyect', 'C) proget', 'D) projict'],
        answer: 0,
        explain: '"Project" is the correct spelling.'
      },
      {
        num: 7,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q2</strong><br><br>Fill in blank <strong>__2__</strong>:<br><em>The footprints led to a tree that gave __2__ during the hot afternoon.</em>',
        options: ['A) greed', 'B) clues', 'C) shade', 'D) evidence'],
        answer: 2,
        explain: 'A tree gives shade on a hot afternoon.'
      },
      {
        num: 8,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q3</strong><br><br>What is the definition of <em>coverings</em> (blank <strong>__3__</strong>)?<br><em>...some muddy __3__ near the tree.</em>',
        options: ['A) Things used to cover or protect something', 'B) A group of students', 'C) A type of garden tool', 'D) Small footprints'],
        answer: 0,
        explain: 'Coverings are things used to cover or protect something.'
      },
      {
        num: 9,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q4</strong><br><br>Fill in blank <strong>__4__</strong>:<br><em>Some students were __4__ at their notes while others searched the area.</em>',
        options: ['A) storing', 'B) glancing', 'C) shading', 'D) covering'],
        answer: 1,
        explain: '"Glancing" means looking briefly at something.'
      },
      {
        num: 10,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q5</strong><br><br>What is the definition of <em>complicated</em>?',
        options: ['A) Easy to understand', 'B) Difficult and not simple', 'C) Very exciting', 'D) Finished already'],
        answer: 1,
        explain: 'Complicated means difficult and not simple.'
      },
      {
        num: 11,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q6</strong><br><br>What are <em>clues</em>?',
        options: ['A) Facts or hints that help solve a problem', 'B) Snacks for students', 'C) Tools used for gardening', 'D) A kind of tree'],
        answer: 0,
        explain: 'Clues are facts or hints that help solve a problem.'
      },
      {
        num: 12,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q7</strong><br><br>Which of the following could also be considered <em>evidence</em>?',
        options: ['A) A guess without facts', 'B) A random opinion', 'C) A photograph showing what happened', 'D) A dream'],
        answer: 2,
        explain: 'A photograph showing what happened is factual evidence.'
      },
      {
        num: 13,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q8</strong><br><br>Why did the students solve the mystery successfully?',
        options: ['A) They ignored the clues', 'B) They worked together and examined the evidence', 'C) They waited for someone else', 'D) They left the garden'],
        answer: 1,
        explain: 'They worked together and carefully examined the evidence.'
      },
      {
        num: 14,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q9</strong><br><br>What is the author\'s purpose in the sentence:<br><em>"The students presented their findings to Mrs. Chen."</em>',
        options: ['A) To inform', 'B) To persuade', 'C) To entertain', 'D) To describe'],
        answer: 0,
        explain: 'The author\'s purpose is to inform — sharing what the students discovered.'
      },
      {
        num: 15,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q10</strong><br><br>If this story were based on a real classroom event, what genre would it be?',
        options: ['A) Folktale', 'B) Fantasy', 'C) Biography', 'D) Informational text'],
        answer: 3,
        explain: 'A real classroom event reported as fact would be informational text.'
      },
      {
        num: 16,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q11</strong><br><br>Which best describes the structure of the passage?',
        options: ['A) Problem and Solution', 'B) Cause and Effect', 'C) Compare and Contrast', 'D) Description'],
        answer: 0,
        explain: 'The mystery is the problem; the students solving it is the solution.'
      },
      {
        num: 17,
        section: 'Reading 2 — The Mystery Project',
        q: '<strong>Reading 2 — Q12</strong><br><br>What is the theme of "The Mystery Project"?',
        options: ['A) Mysteries should always be solved alone', 'B) Working together and paying attention can help solve problems', 'C) Gardening is the most important subject', 'D) Snacks help students think better'],
        answer: 1,
        explain: 'The theme is that working together and paying attention helps solve problems.'
      },

      /* Reading 3: The School Garden — 6 MC (Q18–23) */
      {
        num: 18,
        section: 'Reading 3 — The School Garden',
        showPassage: true,
        passageKey: 'passage2',
        q: '<strong>Reading 3 — Q1</strong><br><br>What is the definition for the word <em>location</em> in the story?',
        options: ['A) A type of plant', 'B) The place where something is found', 'C) A container for recycling', 'D) A tool used for digging'],
        answer: 1,
        explain: 'Location means the place where something is found.'
      },
      {
        num: 19,
        section: 'Reading 3 — The School Garden',
        q: '<strong>Reading 3 — Q2</strong><br><br>What is an antonym for the word <em>buried</em>?',
        options: ['A) covered', 'B) hidden', 'C) exposed', 'D) planted'],
        answer: 2,
        explain: 'Buried means covered underground; its antonym is exposed (uncovered).'
      },
      {
        num: 20,
        section: 'Reading 3 — The School Garden',
        q: '<strong>Reading 3 — Q3</strong><br><br>What is the setting of the story?',
        options: ['A) In a classroom during a lesson', 'B) At a park in the evening', 'C) In a school garden during the day', 'D) At a grocery store in the morning'],
        answer: 2,
        explain: 'The story takes place in a school garden during the day.'
      },
      {
        num: 21,
        section: 'Reading 3 — The School Garden',
        q: '<strong>Reading 3 — Q4</strong><br><br>What do you think Lily will do next?',
        options: ['A) Leave trash on the ground', 'B) Continue helping take care of the garden', 'C) Go home and watch television all day', 'D) Dig up all the plants'],
        answer: 1,
        explain: 'Based on her actions throughout the story, Lily will continue caring for the garden.'
      },
      {
        num: 22,
        section: 'Reading 3 — The School Garden',
        q: '<strong>Reading 3 — Q5</strong><br><br>What is the definition for the word <em>absorb</em>?',
        options: ['A) To take in or soak up', 'B) To throw away', 'C) To move quickly', 'D) To cover with soil'],
        answer: 0,
        explain: 'Absorb means to take in or soak up.'
      },
      {
        num: 23,
        section: 'Reading 3 — The School Garden',
        q: '<strong>Reading 3 — Q6</strong><br><br>What is a synonym for the word <em>global</em>?',
        options: ['A) local', 'B) worldwide', 'C) small', 'D) personal'],
        answer: 1,
        explain: 'Global means worldwide.'
      },

      /* Reading 4: The Rainforest Rescue — 13 MC (Q24–36) */
      {
        num: 24,
        section: 'Reading 4 — The Rainforest Rescue',
        showPassage: true,
        passageKey: 'passage3',
        q: '<strong>Reading 4 — Q1</strong><br><br>What is the correct spelling of the missing word in blank <strong>(1)</strong>?<br><em>...visited a (1) __________ rainforest...</em>',
        options: ['A) tropicle', 'B) tropical', 'C) tropicel', 'D) tropikal'],
        answer: 1,
        explain: '"Tropical" is the correct spelling.'
      },
      {
        num: 25,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q2</strong><br><br>What is the definition of the word in blank <strong>(2)</strong>?<br><em>...water was (2) __________ from the leaves and branches.</em>',
        options: ['A) Falling in small drops', 'B) Growing quickly', 'C) Shining brightly', 'D) Moving sideways'],
        answer: 0,
        explain: '"Dripping" means falling in small drops.'
      },
      {
        num: 26,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q3</strong><br><br>What is a synonym for the word in blank <strong>(3)</strong>?<br><em>...a wet milk (3) __________...</em>',
        options: ['A) container', 'B) animal', 'C) machine', 'D) blanket'],
        answer: 0,
        explain: '"Carton" — a synonym is container.'
      },
      {
        num: 27,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q4</strong><br><br>What is the definition of the word in blank <strong>(4)</strong>?<br><em>...pieces of (4) __________ scattered on the ground.</em>',
        options: ['A) Treasure', 'B) Trash', 'C) Food', 'D) Plants'],
        answer: 1,
        explain: '"Rubbish" means trash or waste.'
      },
      {
        num: 28,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q5</strong><br><br>What is an antonym for the word in blank <strong>(5)</strong>?<br><em>...the trash was a (5) __________ to the animals...</em>',
        options: ['A) problem', 'B) difficulty', 'C) help', 'D) obstacle'],
        answer: 2,
        explain: '"Burden" means difficulty — its antonym is "help".'
      },
      {
        num: 29,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q6</strong><br><br>What is the definition of the word in blank <strong>(6)</strong>?<br><em>...the footprints were the (6) __________ of mud left behind...</em>',
        options: ['A) Something completely new', 'B) Parts left after something is gone', 'C) A type of animal', 'D) A secret message'],
        answer: 1,
        explain: '"Remains" — parts left after something is gone.'
      },
      {
        num: 30,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q7</strong><br><br>What is the meaning of the word in blank <strong>(7)</strong>?<br><em>...spent the afternoon (7) __________ clues...</em>',
        options: ['A) Hiding', 'B) Losing', 'C) Finding or discovering', 'D) Destroying'],
        answer: 2,
        explain: '"Uncovering" means finding or discovering.'
      },
      {
        num: 31,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q8</strong><br><br>What is a synonym for the word in blank <strong>(8)</strong>?<br><em>...praised for their (8) __________ actions.</em>',
        options: ['A) brave', 'B) careless', 'C) quiet', 'D) ordinary'],
        answer: 0,
        explain: '"Heroic" — a synonym is brave.'
      },
      {
        num: 32,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q9</strong><br><br>Why did Maya and Ben begin looking for clues?',
        options: ['A) They wanted to find buried treasure', 'B) They saw strange footprints near a fallen tree', 'C) They lost their backpacks', 'D) They were looking for food'],
        answer: 1,
        explain: 'They noticed strange footprints near a fallen tree and followed them.'
      },
      {
        num: 33,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q10</strong><br><br>Which best describes the structure of the passage?',
        options: ['A) Compare and Contrast', 'B) Cause and Effect', 'C) Problem and Solution', 'D) Description'],
        answer: 2,
        explain: 'The story follows a Problem and Solution structure.'
      },
      {
        num: 34,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q11</strong><br><br>What was the main problem in the story?',
        options: ['A) The students got lost in the rainforest', 'B) The guide could not find the trail', 'C) A baby monkey was trapped and needed help', 'D) The rainforest had no animals'],
        answer: 2,
        explain: 'A baby monkey was trapped beneath fallen branches.'
      },
      {
        num: 35,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q12</strong><br><br>How was the problem solved?',
        options: ['A) The students ignored the footprints', 'B) The monkey escaped by itself', 'C) Maya and Ben freed the monkey and got help', 'D) The guide left the rainforest'],
        answer: 2,
        explain: 'Maya and Ben carefully freed the monkey and called the guide for help.'
      },
      {
        num: 36,
        section: 'Reading 4 — The Rainforest Rescue',
        q: '<strong>Reading 4 — Q13</strong><br><br>What is the theme of "The Rainforest Rescue"?',
        options: ['A) Rainforests are dangerous places', 'B) Teamwork and helping others can make a difference', 'C) Animals should stay away from people', 'D) Trash is easy to clean up'],
        answer: 1,
        explain: 'The theme is that teamwork and helping others can make a difference.'
      }
    ],

    /* ── The School Garden passage ──────────────────────────────── */
    passage2:
      `<div style="font-style:italic;font-size:0.82rem;color:#555;margin-bottom:6px;">Reading 3: The School Garden</div>` +
      `<p>Lily put her backpack beside the garden shed and walked to her favorite spot near the vegetables. She looked at a map that showed the <strong>location</strong> of each garden bed. First, she picked up some empty bottles and placed them in a bin to recycle them. Then she carefully watered the plants. The soil around some seeds was still slightly <strong>buried</strong> after yesterday's rain.</p>` +
      `<p>As she worked, Lily remembered learning that plants can <strong>absorb</strong> water and sunlight to grow strong. Her teacher had also explained that caring for the Earth is a <strong>global</strong> effort because people all around the world can help. A few students walked by and threw wrappers on the ground, but Lily did not ignore the mess. Instead, she picked it up and added it to the trash bag. After a while, she stood up and looked proudly at the garden. The strong base of the plant stems swayed gently in the wind.</p>`,

    /* ── The Rainforest Rescue passage ─────────────────────────── */
    passage3:
      `<div style="font-style:italic;font-size:0.82rem;color:#555;margin-bottom:6px;">Reading 4: The Rainforest Rescue</div>` +
      `<p><em>Directions: Read the passage and answer the questions below.</em></p>` +
      `<p>Last weekend, Maya and Ben visited a <strong>(1) __________</strong> rainforest with their science club. After a heavy rainstorm, water was <strong>(2) __________</strong> from the leaves and branches. As they walked along a muddy trail, they noticed a wet milk <strong>(3) __________</strong> and other pieces of <strong>(4) __________</strong> scattered on the ground.</p>` +
      `<p>Their guide explained that the trash was a <strong>(5) __________</strong> to the animals because it could pollute their habitat. Maya and Ben decided to help clean the area. While picking up the trash, they discovered some strange footprints near a fallen tree. The footprints were the <strong>(6) __________</strong> of mud left behind by a lost baby monkey.</p>` +
      `<p>The group spent the afternoon <strong>(7) __________</strong> clues about where the monkey had gone. Finally, they heard soft cries coming from a nearby bush. The baby monkey was trapped beneath some branches. Maya and Ben carefully freed it and called the guide for help.</p>` +
      `<p>Everyone praised the two students for their <strong>(8) __________</strong> actions. Because of their teamwork and determination, the monkey was safely returned to its family.</p>`,

    /* ── Inference Map (shown after Q6, write-on activity) ──────── */
    inferenceMap: {
      title: 'Inference Map',
      instruction: 'Use evidence from the story to fill in the inference map.',
      fields: [
        'Detail 1: ________________________________________________________________',
        'Detail 2: ________________________________________________________________',
        'Detail 3: ________________________________________________________________',
        'Conclusion: What is Lily doing? ________________________________________________________________'
      ],
      sampleAnswers: [
        'Detail 1: Lily recycled empty bottles.',
        'Detail 2: Lily watered the plants.',
        'Detail 3: Lily picked up litter instead of ignoring it.',
        'Conclusion: Lily is helping care for the school garden and protecting the environment.'
      ]
    }
  }
};
