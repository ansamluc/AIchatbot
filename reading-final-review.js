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
  },

  /* ================================================================
     READING FINAL REVIEW 2
     Vocabulary: recycle, project, complicated, pollution, hardly,
       fossils, clues, prove, evident, fierce, pollen, clumps,
       passages, throughout, spines, scolding, hesitation, burden,
       console, drowsy
     Section A : same 9 text-feature labelling items
     Section B : 5 MC (vocab / text features)
     Reading 2 : The Science Fair Project  (4 blanks + 12 Q)
     Reading 3 : The Cactus Garden         (6 Q + Inference Map)
     Reading 4 : The Old Library           (8 blanks + 13 Q)
     Answer spread: A×9  B×9  C×9  D×9  (36 MC total)
     ================================================================ */
  rd_final_2: {
    title: 'Reading Final Review 2',
    subtitle: 'Vocabulary · The Science Fair Project · The Cactus Garden · The Old Library',

    /* ── Section A: 9 labelling items — Desert Animals theme ─────────
       New order:  1=Fact Box  2=Heading  3=Caption  4=Glossary
                   5=Title  6=Sidebar  7=Label  8=Table of Contents
                   9=Keywords / Key Words
       Arrows also re-mixed vs Review 1.                              */
    sectionA: [
      {
        /* 1 — Fact Box (◄ arrow, box on LEFT) */
        num: 1,
        arrow: '◄',
        display: `<div style="display:inline-block;border:2px solid #c07000;background:#fff8e1;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:220px;">
  <div style="font-weight:bold;font-size:0.95rem;color:#8a4800;">Amazing Desert Facts!</div>
  <div style="margin-top:5px;">• The Sahara Desert is the largest hot desert on Earth.</div>
  <div>• Some deserts receive less than 25 mm of rain per year.</div>
  <div>• A camel can go up to 7 days without drinking water.</div>
</div>`,
        answer: 'Fact Box'
      },
      {
        /* 2 — Heading (► arrow, box on RIGHT) */
        num: 2,
        arrow: '►',
        display: `<div style="display:inline-block;border:1px solid #8b5e3c;background:#fdf5ec;padding:8px 14px;font-family:serif;font-size:0.85rem;min-width:220px;">
  <div style="color:#8b3a00;font-weight:bold;font-size:1.05rem;border-bottom:1px solid #c09060;padding-bottom:4px;margin-bottom:6px;">How Desert Animals Survive</div>
  <div style="font-size:0.8rem;">Desert animals have special features that help them live in extreme heat. Many are active only at night, when temperatures drop significantly.</div>
</div>`,
        answer: 'Heading'
      },
      {
        /* 3 — Caption (◄ arrow, box on LEFT) */
        num: 3,
        arrow: '◄',
        display: `<div style="display:inline-block;border:1px solid #999;background:#f5f5f5;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:220px;text-align:center;">
  <div style="background:#ffe0b2;border:1px solid #bbb;width:130px;height:75px;margin:0 auto;display:flex;align-items:center;justify-content:center;font-size:0.75rem;color:#555;">[Photo: scorpion<br>raising its tail]</div>
  <div style="margin-top:6px;font-style:italic;font-size:0.78rem;text-align:left;">A scorpion raises its curved tail as a warning to predators in the desert sand.</div>
</div>`,
        answer: 'Caption'
      },
      {
        /* 4 — Glossary (► arrow, box on RIGHT) */
        num: 4,
        arrow: '►',
        display: `<div style="display:inline-block;border:1px solid #777;background:#f0ede4;padding:8px 14px;font-family:serif;font-size:0.8rem;min-width:240px;">
  <div style="font-style:italic;color:#666;margin-bottom:4px;">Desert Animals &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 52</div>
  <div style="font-weight:bold;margin-bottom:4px;">A – D – N – P – S</div>
  <div><strong>arid</strong> &nbsp; very dry, with little or no rain</div>
  <div><strong>dormant</strong> &nbsp; in a deep sleep-like state to survive harsh conditions</div>
  <div><strong>nocturnal</strong> &nbsp; active at night rather than during the day</div>
  <div><strong>predator</strong> &nbsp; an animal that hunts other animals for food</div>
  <div><strong>savanna</strong> &nbsp; a flat grassland found in hot, dry regions</div>
</div>`,
        answer: 'Glossary'
      },
      {
        /* 5 — Title (◄ arrow, box on LEFT) */
        num: 5,
        arrow: '◄',
        display: `<div style="display:inline-block;border:2px solid #8b3a00;background:#fdebd0;padding:10px 16px;font-family:serif;text-align:center;min-width:170px;">
  <div style="color:#8b3a00;font-weight:bold;font-size:0.9rem;letter-spacing:1px;">DK EYEWITNESS</div>
  <div style="color:#5a2400;font-weight:bold;font-size:1.3rem;letter-spacing:2px;margin:4px 0;">DESERT<br>ANIMALS</div>
  <div style="font-size:0.8rem;color:#444;">By Dr. Anna Fields</div>
</div>`,
        answer: 'Title'
      },
      {
        /* 6 — Sidebar (► arrow, box on RIGHT) */
        num: 6,
        arrow: '►',
        display: `<div style="display:inline-block;border:2px solid #888;background:#fffde8;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:220px;">
  <div style="font-weight:bold;border-bottom:1px solid #bbb;padding-bottom:3px;margin-bottom:6px;">The Fennec Fox</div>
  <div>The fennec fox has enormous ears that help it release body heat and hear underground prey. It is the smallest wild dog in the world.</div>
  <div style="margin-top:6px;font-weight:bold;">Fennec Fox Facts</div>
  <div>• Weight: 0.8 – 1.9 kg</div>
  <div>• Lives in: Sahara Desert</div>
  <div>• Diet: insects, small rodents, eggs</div>
</div>`,
        answer: 'Sidebar'
      },
      {
        /* 7 — Label (◄ arrow, box on LEFT) */
        num: 7,
        arrow: '◄',
        display: `<div style="display:inline-block;border:1px solid #777;background:#fafaf5;padding:8px 14px;font-family:'Courier New',monospace;font-size:0.75rem;min-width:220px;line-height:1.6;">
  <div style="font-weight:bold;margin-bottom:4px;font-family:serif;">Parts of a Scorpion</div>
  <div>  ┌─────────────────────────┐</div>
  <div>  │  pincer ◄── pincer      │</div>
  <div>  │  ~~~~~~~~~~~~~~~~~~~~~~ │</div>
  <div>  │     body ◄── body       │</div>
  <div>  │  ~~~~~~~~~~~~~~~~~~~~~~ │</div>
  <div>  │     legs ◄── legs       │</div>
  <div>  │        ╲               │</div>
  <div>  │   tail ◄── tail         │</div>
  <div>  │          ●              │</div>
  <div>  │  stinger ◄── stinger    │</div>
  <div>  └─────────────────────────┘</div>
</div>`,
        answer: 'Label'
      },
      {
        /* 8 — Table of Contents (► arrow, box on RIGHT) */
        num: 8,
        arrow: '►',
        display: `<div style="display:inline-block;border:1px solid #8b3a00;background:#fdebd0;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:210px;">
  <div>What Is a Desert? ............ 4</div>
  <div>Desert Plants ............ 8</div>
  <div>Desert Animals ............ 14</div>
  <div>Surviving the Heat ............ 20</div>
  <div>People and Deserts ............ 26</div>
  <div>Glossary ............ 30</div>
</div>`,
        answer: 'Table of Contents'
      },
      {
        /* 9 — Keywords / Key Words (◄ arrow, box on LEFT) */
        num: 9,
        arrow: '◄',
        display: `<div style="display:inline-block;border:1px solid #777;background:#f8f6ee;padding:8px 14px;font-family:serif;font-size:0.82rem;min-width:230px;">
  <div>Deserts are <u><strong>arid</strong></u> regions that receive very little rain. Animals that are <u><strong>nocturnal</strong></u> sleep during the day and hunt at night. The <u><strong>predators</strong></u> of the desert include hawks, snakes, and foxes. Many small animals become <u><strong>dormant</strong></u> during the hottest months to survive.</div>
</div>`,
        answer: 'Keywords / Key Words'
      }
    ],

    /* ── Reading 2 passage: The Science Fair Project ─────────────── */
    /* blanks: __1__=project  __2__=complicated  __3__=clues  __4__=evident */
    passage:
      `<div style="font-style:italic;font-size:0.82rem;color:#555;margin-bottom:6px;">Reading 2: The Science Fair Project — By Leo Park</div>` +
      `<p>Last spring, Mrs. Rivera asked her class to complete a science <strong>__1__</strong> about how pollution affects plants. The task seemed <strong>__2__</strong> at first, but the students decided to work as a team. They gathered <strong>__3__</strong> from the school garden, counting how many leaves had turned yellow near the road.</p>` +
      `<p>After a week of careful observations, it became <strong>__4__</strong> that plants near heavy traffic were struggling to survive. The students presented their findings and earned first place at the science fair. Their teacher said their hard work proved that even young scientists can make a difference.</p>`,

    questions: [
      /* ── Section B: Text & Graphic Features MC (Q1–5) ─────────── */
      /* Answers: C, A, D, B, C  → spread across all 4 options */
      {
        num: 1,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q1</strong><br><br>What text feature gives the meaning of bold words found within the main text?',
        options: ['A) Caption', 'B) Table of Contents', 'C) Keywords / Key Words', 'D) Sidebar'],
        answer: 2,
        explain: 'Keywords / Key Words are bold vocabulary words with meanings shown in or near the text.'
      },
      {
        num: 2,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q2</strong><br><br>A reader wants to know on which page "Rain Forest Animals" begins. Which feature helps most?',
        options: ['A) Table of Contents', 'B) Heading', 'C) Glossary', 'D) Fact Box'],
        answer: 0,
        explain: 'A Table of Contents lists sections and their page numbers.'
      },
      {
        num: 3,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q3</strong><br><br>A small box beside the main text contains extra interesting facts. What is this feature called?',
        options: ['A) Caption', 'B) Glossary', 'C) Label', 'D) Sidebar'],
        answer: 3,
        explain: 'A Sidebar is a small box beside the main text containing related extra information.'
      },
      {
        num: 4,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q4</strong><br><br>Words printed next to parts of a diagram that name each part are called ___.',
        options: ['A) Captions', 'B) Labels', 'C) Headings', 'D) Keywords'],
        answer: 1,
        explain: 'Labels are words placed beside parts of a diagram to name them.'
      },
      {
        num: 5,
        section: 'Section B — Text & Graphic Features',
        q: '<strong>Section B — Q5</strong><br><br>A sentence printed below a photograph that explains what the photo shows is called a ___.',
        options: ['A) Heading', 'B) Label', 'C) Caption', 'D) Fact Box'],
        answer: 2,
        explain: 'A Caption is a sentence below or beside a photo that explains what it shows.'
      },

      /* ── Reading 2: The Science Fair Project (Q6–17) ────────────── */
      /* vocab used: project, complicated, clues, evident + pollution, recycle, prove, hardly */
      /* Answers: D, A, C, B, D, A, C, B, A, D, C, B */
      {
        num: 6,
        section: 'Reading 2 — The Science Fair Project',
        showPassage: true,
        q: '<strong>Reading 2 — Q1</strong><br><br>What is the correct spelling of blank <strong>__1__</strong>?<br><em>...complete a science __1__ about how pollution affects plants.</em>',
        options: ['A) proyect', 'B) projict', 'C) proget', 'D) project'],
        answer: 3,
        explain: '"Project" is the correct spelling.'
      },
      {
        num: 7,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q2</strong><br><br>What is the definition of blank <strong>__2__</strong>?<br><em>The task seemed __2__ at first...</em>',
        options: ['A) Difficult and not simple', 'B) Very exciting', 'C) Easy to finish', 'D) Completely new'],
        answer: 0,
        explain: '"Complicated" means difficult and not simple.'
      },
      {
        num: 8,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q3</strong><br><br>What is a synonym for blank <strong>__3__</strong>?<br><em>They gathered __3__ from the school garden...</em>',
        options: ['A) questions', 'B) answers', 'C) hints', 'D) tools'],
        answer: 2,
        explain: '"Clues" — a synonym is hints.'
      },
      {
        num: 9,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q4</strong><br><br>What is the definition of blank <strong>__4__</strong>?<br><em>...it became __4__ that plants near heavy traffic were struggling.</em>',
        options: ['A) surprising', 'B) clear and obvious', 'C) confusing', 'D) hidden'],
        answer: 1,
        explain: '"Evident" means clear and obvious.'
      },
      {
        num: 10,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q5</strong><br><br>What is the definition of the word <em>pollution</em>?',
        options: ['A) A type of plant', 'B) A helpful weather event', 'C) Clean drinking water', 'D) Harmful substances that damage the environment'],
        answer: 3,
        explain: 'Pollution means harmful substances that damage the environment.'
      },
      {
        num: 11,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q6</strong><br><br>What is a synonym for the word <em>recycle</em>?',
        options: ['A) reuse', 'B) destroy', 'C) ignore', 'D) bury'],
        answer: 0,
        explain: '"Recycle" — a synonym is reuse.'
      },
      {
        num: 12,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q7</strong><br><br>What does it mean to <em>prove</em> something?',
        options: ['A) To guess', 'B) To forget', 'C) To show that something is true with evidence', 'D) To copy'],
        answer: 2,
        explain: 'To prove means to show that something is true using evidence.'
      },
      {
        num: 13,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q8</strong><br><br>What is an antonym for the word <em>hardly</em>?',
        options: ['A) never', 'B) easily', 'C) quietly', 'D) slowly'],
        answer: 1,
        explain: '"Hardly" means almost not at all — its antonym is easily.'
      },
      {
        num: 14,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q9</strong><br><br>Why did the students count yellow leaves near the road?',
        options: ['A) To gather clues about how pollution affects plants', 'B) To decorate their classroom', 'C) To find the oldest tree', 'D) Because their teacher told them to pick up rubbish'],
        answer: 0,
        explain: 'They counted yellow leaves as clues about how pollution affects plants.'
      },
      {
        num: 15,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q10</strong><br><br>Which best describes the structure of the passage?',
        options: ['A) Compare and Contrast', 'B) Description', 'C) Cause and Effect', 'D) Problem and Solution'],
        answer: 3,
        explain: 'The passage shows a problem (pollution harming plants) and a solution (the students\'s research).'
      },
      {
        num: 16,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q11</strong><br><br>What was the main problem in the story?',
        options: ['A) The students forgot their homework', 'B) The teacher was absent', 'C) Pollution was harming plants near the road', 'D) The science fair was cancelled'],
        answer: 2,
        explain: 'The main problem was that pollution from traffic was harming nearby plants.'
      },
      {
        num: 17,
        section: 'Reading 2 — The Science Fair Project',
        q: '<strong>Reading 2 — Q12</strong><br><br>What is the theme of "The Science Fair Project"?',
        options: ['A) Science fairs are only for older students', 'B) Even young scientists can make a difference through hard work', 'C) Pollution is impossible to stop', 'D) Plants do not need sunlight to grow'],
        answer: 1,
        explain: 'The theme is that even young scientists can make a difference through hard work.'
      },

      /* ── Reading 3: The Cactus Garden (Q18–23) ──────────────────── */
      /* vocab: pollen, spines, clumps, throughout, fierce, fossils */
      /* Answers: D, A, C, B, D, A */
      {
        num: 18,
        section: 'Reading 3 — The Cactus Garden',
        showPassage: true,
        passageKey: 'passage2',
        q: '<strong>Reading 3 — Q1</strong><br><br>What is the definition of the word <em>pollen</em>?',
        options: ['A) A type of rock', 'B) A sharp thorn on a plant', 'C) A small insect', 'D) A fine powder made by flowers that helps plants reproduce'],
        answer: 3,
        explain: 'Pollen is a fine powder made by flowers that helps plants reproduce.'
      },
      {
        num: 19,
        section: 'Reading 3 — The Cactus Garden',
        q: '<strong>Reading 3 — Q2</strong><br><br>What is a synonym for <em>spines</em>?',
        options: ['A) thorns', 'B) leaves', 'C) roots', 'D) flowers'],
        answer: 0,
        explain: '"Spines" are sharp pointed growths — a synonym is thorns.'
      },
      {
        num: 20,
        section: 'Reading 3 — The Cactus Garden',
        q: '<strong>Reading 3 — Q3</strong><br><br>What is the definition of <em>clumps</em>?',
        options: ['A) individual scattered items', 'B) smooth flat surfaces', 'C) groups of things growing close together', 'D) underground tunnels'],
        answer: 2,
        explain: '"Clumps" means groups of things growing or gathered closely together.'
      },
      {
        num: 21,
        section: 'Reading 3 — The Cactus Garden',
        q: '<strong>Reading 3 — Q4</strong><br><br>What does <em>throughout</em> mean?',
        options: ['A) Only at the beginning', 'B) In every part or from start to finish', 'C) At the very end', 'D) Once in a while'],
        answer: 1,
        explain: '"Throughout" means in every part, or from start to finish.'
      },
      {
        num: 22,
        section: 'Reading 3 — The Cactus Garden',
        q: '<strong>Reading 3 — Q5</strong><br><br>What is an antonym for the word <em>fierce</em>?',
        options: ['A) wild', 'B) violent', 'C) angry', 'D) gentle'],
        answer: 3,
        explain: '"Fierce" means very strong or violent — its antonym is gentle.'
      },
      {
        num: 23,
        section: 'Reading 3 — The Cactus Garden',
        q: '<strong>Reading 3 — Q6</strong><br><br>What are <em>fossils</em>?',
        options: ['A) Remains of ancient plants or animals preserved in rock', 'B) Types of desert flowers', 'C) Underground water sources', 'D) Sharp rocks found in gardens'],
        answer: 0,
        explain: 'Fossils are the preserved remains of ancient plants or animals found in rock.'
      },

      /* ── Reading 4: The Old Library (Q24–36) ───────────────────── */
      /* blanks: (1)=passages (2)=burden (3)=hesitation (4)=scolding
                 (5)=drowsy  (6)=console (7)=passages [diff context - reuse not ideal]
         Use: passages, burden, hesitation, scolding, drowsy, console, throughout, hardly */
      /* Answers: C, D, A, B, C, D, A, C, B, D, A, C, B */
      {
        num: 24,
        section: 'Reading 4 — The Old Library',
        showPassage: true,
        passageKey: 'passage3',
        q: '<strong>Reading 4 — Q1</strong><br><br>What is the correct spelling of blank <strong>(1)</strong>?<br><em>...she read long (1) __________ aloud to the younger children.</em>',
        options: ['A) passiges', 'B) passajes', 'C) passages', 'D) passaiges'],
        answer: 2,
        explain: '"Passages" is the correct spelling.'
      },
      {
        num: 25,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q2</strong><br><br>What is the definition of blank <strong>(2)</strong>?<br><em>Carrying so many books felt like a (2) __________ on her tired arms.</em>',
        options: ['A) gift', 'B) reward', 'C) hobby', 'D) heavy load or responsibility'],
        answer: 3,
        explain: '"Burden" means a heavy load or responsibility.'
      },
      {
        num: 26,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q3</strong><br><br>What is an antonym for blank <strong>(3)</strong>?<br><em>Without (3) __________, she stepped forward to help.</em>',
        options: ['A) confidence', 'B) fear', 'C) doubt', 'D) silence'],
        answer: 0,
        explain: '"Hesitation" means pause or uncertainty — its antonym is confidence.'
      },
      {
        num: 27,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q4</strong><br><br>What is a synonym for blank <strong>(4)</strong>?<br><em>The librarian\'s (4) __________ made the boy feel ashamed.</em>',
        options: ['A) praise', 'B) scolding', 'C) greeting', 'D) question'],
        answer: 1,
        explain: '"Scolding" — a synonym is telling off or reprimanding.'
      },
      {
        num: 28,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q5</strong><br><br>What is the definition of blank <strong>(5)</strong>?<br><em>After reading for hours, she felt (5) __________ and could hardly keep her eyes open.</em>',
        options: ['A) energetic', 'B) angry', 'C) sleepy and tired', 'D) excited'],
        answer: 2,
        explain: '"Drowsy" means feeling sleepy and tired.'
      },
      {
        num: 29,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q6</strong><br><br>What is the definition of blank <strong>(6)</strong>?<br><em>She sat beside her friend to (6) __________ him after he dropped all his books.</em>',
        options: ['A) tease', 'B) ignore', 'C) leave', 'D) comfort and make feel better'],
        answer: 3,
        explain: '"Console" means to comfort someone who is upset.'
      },
      {
        num: 30,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q7</strong><br><br>What is the definition of blank <strong>(7)</strong>?<br><em>The smell of old books filled every corner (7) __________ the library.</em>',
        options: ['A) in every part of', 'B) only at the entrance of', 'C) outside of', 'D) hidden beneath'],
        answer: 0,
        explain: '"Throughout" means in every part of.'
      },
      {
        num: 31,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q8</strong><br><br>What is a synonym for blank <strong>(8)</strong>?<br><em>She could (8) __________ hear the whispered conversation across the quiet room.</em>',
        options: ['A) loudly', 'B) barely', 'C) easily', 'D) quickly'],
        answer: 1,
        explain: '"Hardly" means almost not at all — a synonym is barely.'
      },
      {
        num: 32,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q9</strong><br><br>Why did the girl sit next to her friend after he dropped his books?',
        options: ['A) To take his books away', 'B) To console him and make him feel better', 'C) To laugh at him', 'D) To ask the librarian for help'],
        answer: 1,
        explain: 'She wanted to console her friend — to comfort him after he was embarrassed.'
      },
      {
        num: 33,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q10</strong><br><br>Which best describes the structure of the passage?',
        options: ['A) Compare and Contrast', 'B) Cause and Effect', 'C) Description', 'D) Problem and Solution'],
        answer: 3,
        explain: 'The story follows a Problem and Solution structure — the problem is the boy\'s embarrassment, solved by the girl\'s kindness.'
      },
      {
        num: 34,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q11</strong><br><br>What was the main problem in the story?',
        options: ['A) The boy dropped his books and felt ashamed', 'B) The library was closing early', 'C) The girl forgot her library card', 'D) There were no books left to borrow'],
        answer: 0,
        explain: 'The main problem was that the boy dropped his books and felt ashamed after being scolded.'
      },
      {
        num: 35,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q12</strong><br><br>How was the problem solved?',
        options: ['A) The librarian apologised', 'B) The boy left the library', 'C) The girl sat beside him and consoled him', 'D) Another student returned the books'],
        answer: 2,
        explain: 'The girl consoled her friend by sitting beside him and making him feel better.'
      },
      {
        num: 36,
        section: 'Reading 4 — The Old Library',
        q: '<strong>Reading 4 — Q13</strong><br><br>What is the theme of "The Old Library"?',
        options: ['A) Libraries are boring places', 'B) A small act of kindness can comfort someone who is upset', 'C) Reading too many books makes you tired', 'D) Friends should always share their books'],
        answer: 1,
        explain: 'The theme is that a small act of kindness can comfort someone who is upset.'
      }
    ],

    /* ── The Cactus Garden passage (Reading 3) ───────────────────── */
    passage2:
      `<div style="font-style:italic;font-size:0.82rem;color:#555;margin-bottom:6px;">Reading 3: The Cactus Garden</div>` +
      `<p>At the edge of the school yard stood a small cactus garden. The plants grew in <strong>clumps</strong> near the sunny wall, their long <strong>spines</strong> pointing outward like tiny needles. Throughout the spring, bees visited the garden every morning, collecting <strong>pollen</strong> from the bright yellow flowers.</p>` +
      `<p>One afternoon, a <strong>fierce</strong> wind rattled the windows and knocked several pots off the wall. The science teacher, Mr. Yuen, showed the children some ancient <strong>fossils</strong> he had found near the garden — the stony remains of plants that had lived millions of years ago. The children were amazed that living things could be preserved for so long.</p>`,

    /* ── The Old Library passage (Reading 4) ─────────────────────── */
    passage3:
      `<div style="font-style:italic;font-size:0.82rem;color:#555;margin-bottom:6px;">Reading 4: The Old Library</div>` +
      `<p><em>Directions: Read the passage and answer the questions below.</em></p>` +
      `<p>Every Saturday, Mei visited the old library at the end of her street. She loved the way the smell of old books filled every corner <strong>(7) __________</strong> the building. Her favourite thing was to find a quiet corner and read long <strong>(1) __________</strong> aloud to the younger children who gathered around her.</p>` +
      `<p>One afternoon, carrying so many books felt like a <strong>(2) __________</strong> on her tired arms. Without <strong>(3) __________</strong>, she set them down gently and smiled at a boy named Tom who sat nearby. Tom had just received a <strong>(4) __________</strong> from the librarian for running inside, and his cheeks were red with shame.</p>` +
      `<p>After reading for an hour, Mei felt <strong>(5) __________</strong> and could <strong>(8) __________</strong> keep her eyes open. But when she saw how upset Tom still was, she moved closer to <strong>(6) __________</strong> him. She told him quietly that everyone makes mistakes. By the time they left the library, Tom was smiling again.</p>`,

    /* ── Inference Map (Reading 3 – The Cactus Garden) ──────────── */
    inferenceMap: {
      title: 'Inference Map',
      instruction: 'Use evidence from "The Cactus Garden" to fill in the inference map.',
      fields: [
        'Detail 1: ________________________________________________________________',
        'Detail 2: ________________________________________________________________',
        'Detail 3: ________________________________________________________________',
        'Conclusion: What does the cactus garden teach the children about? ________________________________________________________________'
      ],
      sampleAnswers: [
        'Detail 1: Bees collected pollen from the cactus flowers throughout spring.',
        'Detail 2: A fierce wind knocked several pots off the wall.',
        'Detail 3: Mr. Yuen showed the children fossils of ancient plants.',
        'Conclusion: The cactus garden teaches the children about nature, survival, and how living things can be preserved for millions of years.'
      ]
    }
  }
};
