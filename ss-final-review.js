/* ================================================================
   SOCIAL STUDIES — FINAL REVIEW QUIZZES (Lessons 3 + 4)
   --------------------------------------------------------------
   Two final-review quizzes drawing from SS Lessons 3 and 4.
   Each quiz contains up to 40 mixed-type questions (mc, tf, fill,
   match) plus 3 short-answer questions.

   Item shape examples:
     mc/fill/match-forward/match-reverse:
       { _kind: 'mc', q, options[], answer, explain }
     tf:
       { _kind: 'tf', q, answer (true|false), explain }
     short:
       { _kind: 'short', q, answer (string), keywords[], explain }
   ================================================================ */

const SS_FINAL_REVIEWS = {

  /* ============================================================
     FINAL REVIEW 1
     ============================================================ */
  q1: {
    title: "SS Final Review 1",
    subtitle: "Lessons 3 & 4 — Mix Review",
    emoji: "📜",

    // 40 mixed-type questions
    questions: [
      // ---------- Lesson 3 — Multiple Choice ----------
      { _kind: 'mc', q: "What does 'suffrage' mean?", options: ["the right to own land", "the right to vote", "the right to speak", "the right to read"], answer: 1, explain: "Suffrage means the right to vote — that's what Susan B. Anthony fought for!" },
      { _kind: 'mc', q: "Where was the first women's rights convention held in 1848?", options: ["Washington, D.C.", "Baltimore, Maryland", "Seneca Falls, New York", "Chicago, Illinois"], answer: 2, explain: "The Seneca Falls Convention in New York started the suffrage movement." },
      { _kind: 'mc', q: "Which amendment gave women the right to vote?", options: ["Fifteenth Amendment", "Nineteenth Amendment", "First Amendment", "Bill of Rights"], answer: 1, explain: "The Nineteenth Amendment, passed in 1920, gave women the right to vote." },
      { _kind: 'mc', q: "What did Susan B. Anthony do in 1872?", options: ["She wrote the Constitution", "She voted in the presidential election", "She became president", "She joined the Supreme Court"], answer: 1, explain: "Anthony voted in 1872 — it was against the law, and she was arrested and fined $100." },
      { _kind: 'mc', q: "Who argued the case Brown v. Board of Education?", options: ["Oliver Brown", "Eleanor Roosevelt", "Thurgood Marshall", "Susan B. Anthony"], answer: 2, explain: "Thurgood Marshall, a lawyer, argued the case before the Supreme Court." },
      { _kind: 'mc', q: "What did the Supreme Court decide in Brown v. Board of Education (1954)?", options: ["Women could vote", "School segregation must end", "Slavery was illegal", "All children must attend school"], answer: 1, explain: "All nine justices voted to end school segregation." },
      { _kind: 'mc', q: "Who was the first African American Supreme Court justice?", options: ["Oliver Brown", "Thurgood Marshall", "George E. C. Hayes", "James Nabrit Jr."], answer: 1, explain: "In 1967, Thurgood Marshall became the first African American Supreme Court justice." },
      { _kind: 'mc', q: "Eleanor Roosevelt helped create what important document?", options: ["The Constitution", "The Bill of Rights", "The Universal Declaration of Human Rights", "The Nineteenth Amendment"], answer: 2, explain: "She led a U.N. group that created the Universal Declaration of Human Rights." },
      { _kind: 'mc', q: "Who wrote the 'Declaration of Sentiments'?", options: ["Susan B. Anthony", "Elizabeth Cady Stanton", "Eleanor Roosevelt", "Thurgood Marshall"], answer: 1, explain: "Elizabeth Cady Stanton wrote the 'Declaration of Sentiments' at the 1848 Seneca Falls Convention." },
      { _kind: 'mc', q: "Which amendment's Equal Protection Clause did the Supreme Court use in Brown v. Board of Education?", options: ["13th Amendment", "14th Amendment", "15th Amendment", "19th Amendment"], answer: 1, explain: "The 14th Amendment's Equal Protection Clause says the law must treat all people equally." },

      // ---------- Lesson 3 — True/False ----------
      { _kind: 'tf', q: "Susan B. Anthony fought for women's right to vote.", answer: true, explain: "True! Anthony was a leader of the suffrage movement." },
      { _kind: 'tf', q: "The Nineteenth Amendment gave African American men the right to vote.", answer: false, explain: "False! The Fifteenth Amendment (1870) gave African American men the right to vote. The Nineteenth (1920) gave women the right." },
      { _kind: 'tf', q: "Eleanor Roosevelt was the President of the United States.", answer: false, explain: "False! She was the First Lady — her husband, Franklin D. Roosevelt, was president." },
      { _kind: 'tf', q: "The Supreme Court ruled that 'separate but equal' was unconstitutional in Brown v. Board of Education.", answer: true, explain: "True! The Court unanimously said 'separate but equal' was unconstitutional in 1954." },
      { _kind: 'tf', q: "Susan B. Anthony was arrested for voting in 1872.", answer: true, explain: "True! She was arrested and fined $100 for voting because women weren't allowed to vote then." },

      // ---------- Lesson 3 — Fill ----------
      { _kind: 'mc', q: "FILL: The right to vote is called ___.", options: ["suffrage", "delegate", "convention", "segregation"], answer: 0, explain: "Suffrage means the right to vote." },
      { _kind: 'mc', q: "FILL: A large meeting where people discuss something important is a ___.", options: ["delegate", "convention", "court", "rally"], answer: 1, explain: "A convention is a large meeting." },
      { _kind: 'mc', q: "FILL: The case ___ v. Board of Education ended school segregation.", options: ["Brown", "Anthony", "Roosevelt", "Marshall"], answer: 0, explain: "Brown v. Board of Education (1954)." },
      { _kind: 'mc', q: "FILL: Eleanor Roosevelt helped create the Universal Declaration of ___ Rights.", options: ["Civil", "Voting", "Human", "Citizen"], answer: 2, explain: "The Universal Declaration of Human Rights." },

      // ---------- Lesson 3 — Hero Matching (forward & reverse) ----------
      { _kind: 'mc', q: "<em>Which hero did this?</em><br>&ldquo;She fought for women's right to vote (suffrage).&rdquo;", options: ["Eleanor Roosevelt", "Susan B. Anthony", "Elizabeth Cady Stanton", "Reverend Oliver Brown"], answer: 1, explain: "Susan B. Anthony was a leader of the suffrage movement." },
      { _kind: 'mc', q: "What did <strong>Thurgood Marshall</strong> do?", options: ["He was the First Lady who led the U.N. human rights group.", "He wrote the Emancipation Proclamation.", "He argued Brown v. Board of Education to end school segregation.", "He led the Underground Railroad."], answer: 2, explain: "Thurgood Marshall was a lawyer who argued Brown v. Board of Education in 1954, ending school segregation." },

      // ---------- Lesson 4 — Multiple Choice ----------
      { _kind: 'mc', q: "What is a hero?", options: ["someone who is famous for being rich", "someone who has done special deeds and is a role model for others", "a person who fights in war", "a person who plays sports"], answer: 1, explain: "A hero has done special deeds and is a role model for others." },
      { _kind: 'mc', q: "Who helped write the Declaration of Independence?", options: ["George Washington", "James Madison", "Thomas Jefferson", "Abraham Lincoln"], answer: 2, explain: "Thomas Jefferson helped write the Declaration of Independence in 1776." },
      { _kind: 'mc', q: "Who is known as the 'Father of the Constitution'?", options: ["George Washington", "James Madison", "Thomas Jefferson", "Frederick Douglass"], answer: 1, explain: "James Madison helped plan the Constitution and Bill of Rights." },
      { _kind: 'mc', q: "What was the Emancipation Proclamation?", options: ["a law that started the war", "a document that aimed to free enslaved African Americans in the southern states", "a speech by Martin Luther King, Jr.", "a peace treaty with Britain"], answer: 1, explain: "Lincoln wrote it to free all enslaved African Americans in the southern states." },
      { _kind: 'mc', q: "What organization did Clara Barton start?", options: ["the Underground Railroad", "the Red Cross", "Hull House", "the Continental Congress"], answer: 1, explain: "Clara Barton started the Red Cross to help soldiers, families, and disaster victims." },
      { _kind: 'mc', q: "When was the Civil War fought?", options: ["1776 to 1783", "1812 to 1815", "1861 to 1865", "1914 to 1918"], answer: 2, explain: "The Civil War was fought from 1861 to 1865." },
      { _kind: 'mc', q: "What was the North called during the Civil War?", options: ["the Confederacy", "the Union", "the Allies", "the Continental Army"], answer: 1, explain: "The North was called the Union and wanted to keep the country together." },
      { _kind: 'mc', q: "Which president was Abraham Lincoln?", options: ["1st", "10th", "16th", "20th"], answer: 2, explain: "Abraham Lincoln was the 16th president of the United States." },
      { _kind: 'mc', q: "What nickname was Clara Barton known by?", options: ["Mother of Medicine", "Angel of the Battlefield", "Lady with the Lamp", "Hero of the North"], answer: 1, explain: "Clara Barton was known as the 'Angel of the Battlefield' for caring for wounded soldiers." },

      // ---------- Lesson 4 — True/False ----------
      { _kind: 'tf', q: "Thomas Jefferson helped write the Declaration of Independence.", answer: true, explain: "True! Jefferson helped write the Declaration of Independence in 1776." },
      { _kind: 'tf', q: "Anne Hutchinson moved to America so she could practice her religion freely.", answer: true, explain: "True! She was not allowed to practice her religion in England." },
      { _kind: 'tf', q: "Clara Barton started the Underground Railroad.", answer: false, explain: "False! Clara Barton started the Red Cross. Harriet Tubman worked on the Underground Railroad." },
      { _kind: 'tf', q: "Harriet Tubman was born into slavery in Maryland.", answer: true, explain: "True! She escaped to Pennsylvania and helped many others escape too." },
      { _kind: 'tf', q: "Martin Luther King, Jr. used violence to fight for civil rights.", answer: false, explain: "False! He organized PEACEFUL protests and gave speeches." },
      { _kind: 'tf', q: "The Civil War was fought from 1861 to 1865.", answer: true, explain: "True! The Civil War lasted from 1861 to 1865." },

      // ---------- Lesson 4 — Fill ----------
      { _kind: 'mc', q: "FILL: The practice of buying, selling, and owning people is called ___.", options: ["slavery", "trade", "service", "freedom"], answer: 0, explain: "Slavery was the practice of owning people." },
      { _kind: 'mc', q: "FILL: Harriet Tubman helped people escape slavery using the ___ Railroad.", options: ["Freedom", "Underground", "Northern", "Liberty"], answer: 1, explain: "The Underground Railroad was a secret system that helped people escape." },
      { _kind: 'mc', q: "FILL: Jane Addams co-founded ___ House in Chicago.", options: ["Hull", "Liberty", "Peace", "Freedom"], answer: 0, explain: "She co-founded Hull House in 1881." },
      { _kind: 'mc', q: "FILL: Frederick Douglass wrote an antislavery newspaper called the ___ Star.", options: ["South", "Morning", "North", "Bright"], answer: 2, explain: "His newspaper was called the North Star." },

      // ---------- Lesson 4 — Hero Matching ----------
      { _kind: 'mc', q: "What did <strong>Harriet Tubman</strong> do?", options: ["She wrote the Bill of Rights.", "She gave the 'I Have a Dream' speech.", "She helped enslaved people escape to freedom on the Underground Railroad.", "She founded the Red Cross."], answer: 2, explain: "Harriet Tubman helped enslaved African Americans reach freedom through the Underground Railroad." },
      { _kind: 'mc', q: "<em>Which hero did this?</em><br>&ldquo;He was an abolitionist who wrote and spoke out against slavery.&rdquo;", options: ["George Washington", "Frederick Douglass", "Abraham Lincoln", "James Madison"], answer: 1, explain: "Frederick Douglass was an abolitionist who wrote and spoke out against slavery." }
    ],

    // 3 short-answer questions
    short: [
      {
        q: "Name <strong>two</strong> American heroes from Lesson 3 or 4 and briefly say what each is known for.",
        answer: "Examples: Susan B. Anthony — fought for women's suffrage. Harriet Tubman — led enslaved people to freedom on the Underground Railroad.",
        keywords: ["Anthony", "suffrage", "vote", "Tubman", "Underground Railroad", "Lincoln", "slavery", "Douglass", "abolitionist", "King", "civil rights", "Addams", "Hull House", "Roosevelt", "human rights", "Marshall", "Supreme Court", "Hutchinson", "religion", "Barton", "Red Cross", "Washington", "Jefferson", "Madison"],
        explain: "Any two heroes count — e.g., Susan B. Anthony fought for women's suffrage, and Harriet Tubman led people to freedom on the Underground Railroad."
      },
      {
        q: "Explain in 1–2 sentences why the <strong>Civil War</strong> was fought.",
        answer: "The Civil War (1861–1865) was fought between the North (Union) and the South (Confederacy), mainly over disagreements about slavery and states' rights. The Union won, slavery ended, and the country stayed together.",
        keywords: ["slavery", "states' rights", "states rights", "Union", "Confederacy", "North", "South", "1861", "1865", "free"],
        explain: "Strong answers mention slavery and/or states' rights, and the North (Union) vs. South (Confederacy)."
      },
      {
        q: "What was the <strong>Underground Railroad</strong>, and who is one famous hero connected to it?",
        answer: "The Underground Railroad was a secret network (not a real railroad) of safe houses and paths that helped enslaved people escape to freedom. Harriet Tubman is the most famous conductor — she led many people from slavery to freedom.",
        keywords: ["secret", "network", "safe", "escape", "slavery", "freedom", "Tubman", "Harriet"],
        explain: "It was a secret system of safe houses and routes used to help enslaved people escape to free states. Harriet Tubman is the most famous figure tied to it."
      }
    ]
  },

  /* ============================================================
     FINAL REVIEW 2
     ============================================================ */
  q2: {
    title: "SS Final Review 2",
    subtitle: "Lessons 3 & 4 — Mix Review",
    emoji: "📜",

    questions: [
      // ---------- Lesson 3 — Multiple Choice ----------
      { _kind: 'mc', q: "What does 'segregate' mean?", options: ["to vote", "to separate", "to fight", "to teach"], answer: 1, explain: "Segregate means to separate people, often by race." },
      { _kind: 'mc', q: "What does 'civil rights' mean?", options: ["rights only for adults", "rights to be treated equally under the law", "rights to own a business", "rights to travel"], answer: 1, explain: "Civil rights are the rights of all citizens to be treated equally under the law." },
      { _kind: 'mc', q: "What does 'delegate' mean?", options: ["a kind of judge", "a person chosen to act for others", "a school leader", "a famous lawyer"], answer: 1, explain: "A delegate is a person chosen to act for others. Eleanor Roosevelt was the U.S. delegate to the U.N." },
      { _kind: 'mc', q: "What does 'convince' mean?", options: ["to forget", "to cause someone to believe something", "to argue loudly", "to vote"], answer: 1, explain: "Convince means to cause someone (with evidence) to believe or do something." },
      { _kind: 'mc', q: "What did the Supreme Court declare 'unconstitutional' in Brown v. Board of Education?", options: ["voting by women", "'separate but equal'", "the 14th Amendment", "public schools"], answer: 1, explain: "The Court unanimously declared that 'separate but equal' was unconstitutional." },
      { _kind: 'mc', q: "What is a 'landmark decision'?", options: ["a decision about land or property", "an important court ruling that changes the law for many years", "a vote in Congress", "a presidential order"], answer: 1, explain: "A landmark decision is an important court ruling that changes the law and affects many people for years to come." },
      { _kind: 'mc', q: "What did the 'Declaration of Sentiments' ask for?", options: ["the end of slavery", "equal rights for women", "free public schools", "the right to own property"], answer: 1, explain: "The Declaration of Sentiments asked for equal rights for women." },
      { _kind: 'mc', q: "Eleanor Roosevelt became known as a 'champion' of what?", options: ["sports and games", "human rights, equality, and peace", "the U.S. military", "voting rights only"], answer: 1, explain: "Eleanor Roosevelt became known as a champion of human rights, equality, and peace." },
      { _kind: 'mc', q: "When did Eleanor Roosevelt serve as American delegate to the U.N.?", options: ["before World War I", "during World War II", "after World War II", "during the Civil War"], answer: 2, explain: "After World War II, in 1945, she was chosen to be the American delegate to the U.N." },
      { _kind: 'mc', q: "What does 'unconstitutional' mean?", options: ["very popular", "not allowed by the U.S. Constitution", "old-fashioned", "voted on by the people"], answer: 1, explain: "Unconstitutional means against the rules of the U.S. Constitution." },

      // ---------- Lesson 3 — True/False ----------
      { _kind: 'tf', q: "Thurgood Marshall was a lawyer who argued for civil rights.", answer: true, explain: "True! He argued in court to change unfair laws." },
      { _kind: 'tf', q: "The Brown v. Board of Education case was decided in 1954.", answer: true, explain: "True! All nine justices voted to end school segregation in 1954." },
      { _kind: 'tf', q: "Eleanor Roosevelt was the American delegate to the United Nations.", answer: true, explain: "True! In 1945, she was chosen as the U.S. delegate to the U.N." },
      { _kind: 'tf', q: "Civil rights are only for adults, not children.", answer: false, explain: "False! Civil rights are for ALL citizens, including children." },
      { _kind: 'tf', q: "Brown v. Board of Education was a landmark decision.", answer: true, explain: "True! It was a landmark decision — an important ruling that changed the law for many years." },

      // ---------- Lesson 3 — Fill ----------
      { _kind: 'mc', q: "FILL: To separate people, often by race, is to ___ them.", options: ["convince", "delegate", "segregate", "elect"], answer: 2, explain: "Segregate means to separate." },
      { _kind: 'mc', q: "FILL: A person chosen to act for others is a ___.", options: ["lawyer", "delegate", "president", "justice"], answer: 1, explain: "A delegate represents and acts for others." },
      { _kind: 'mc', q: "FILL: The Supreme Court said 'separate but equal' was ___.", options: ["important", "unconstitutional", "fair", "popular"], answer: 1, explain: "Unconstitutional — against the rules of the Constitution." },
      { _kind: 'mc', q: "FILL: An important court ruling that changes the law for many years is called a ___ decision.", options: ["small", "landmark", "private", "weekly"], answer: 1, explain: "A landmark decision is an important ruling that changes the law." },

      // ---------- Lesson 3 — Hero Matching ----------
      { _kind: 'mc', q: "What did <strong>Eleanor Roosevelt</strong> do?", options: ["She led the U.N. group that created the Universal Declaration of Human Rights.", "She voted illegally in 1872 to fight for suffrage.", "She founded Hull House in Chicago.", "She argued in court to end school segregation."], answer: 0, explain: "Eleanor Roosevelt led the U.N. group that created the Universal Declaration of Human Rights." },
      { _kind: 'mc', q: "<em>Which hero did this?</em><br>&ldquo;She organized the 1848 Seneca Falls Convention.&rdquo;", options: ["Susan B. Anthony", "Eleanor Roosevelt", "Elizabeth Cady Stanton", "Reverend Oliver Brown"], answer: 2, explain: "Elizabeth Cady Stanton organized the Seneca Falls Convention." },

      // ---------- Lesson 4 — Multiple Choice ----------
      { _kind: 'mc', q: "What is a 'risk'?", options: ["a safe choice", "a dangerous chance", "a kind of war", "a type of leader"], answer: 1, explain: "A risk is a dangerous chance." },
      { _kind: 'mc', q: "Why did Anne Hutchinson move to Massachusetts?", options: ["to find gold", "to practice her religion freely", "to fight in a war", "to start a school"], answer: 1, explain: "She was not allowed to practice her religion in England, so she moved to America." },
      { _kind: 'mc', q: "What is a civil war?", options: ["a war between two countries", "a war between groups in the same country", "a peaceful protest", "a war over land"], answer: 1, explain: "A civil war is fought between groups of people who live in the same country." },
      { _kind: 'mc', q: "What is an abolitionist?", options: ["someone who worked to get rid of slavery", "a soldier", "a president", "a settler"], answer: 0, explain: "An abolitionist worked to abolish, or get rid of, slavery." },
      { _kind: 'mc', q: "Who led many enslaved people to freedom on the Underground Railroad?", options: ["Clara Barton", "Jane Addams", "Harriet Tubman", "Anne Hutchinson"], answer: 2, explain: "Harriet Tubman worked with other abolitionists on the Underground Railroad." },
      { _kind: 'mc', q: "What famous speech did Dr. Martin Luther King, Jr. give in 1963?", options: ["The Gettysburg Address", "I Have a Dream", "Four Score Speech", "The Freedom Speech"], answer: 1, explain: "King gave the 'I Have a Dream' speech in 1963." },
      { _kind: 'mc', q: "Who founded Hull House?", options: ["Clara Barton", "Anne Hutchinson", "Jane Addams and Ellen Gates Starr", "Harriet Tubman"], answer: 2, explain: "Jane Addams and Ellen Gates Starr founded Hull House in 1881." },
      { _kind: 'mc', q: "What was the South called during the Civil War?", options: ["the Union", "the Allies", "the Confederacy", "the Colonies"], answer: 2, explain: "The South was called the Confederacy and wanted to form its own nation." },
      { _kind: 'mc', q: "What is religion?", options: ["a kind of school subject", "a system of beliefs about God, gods, or spiritual ideas", "a type of government", "a kind of holiday"], answer: 1, explain: "Religion is a system of beliefs about God, gods, or spiritual ideas." },
      { _kind: 'mc', q: "Anne Hutchinson challenged the leaders of which colony?", options: ["Virginia Colony", "Plymouth Colony", "Massachusetts Bay Colony", "Rhode Island Colony"], answer: 2, explain: "Anne Hutchinson challenged the leaders of the Massachusetts Bay Colony and was forced to leave." },

      // ---------- Lesson 4 — True/False ----------
      { _kind: 'tf', q: "George Washington was the first president of the United States and a military leader.", answer: true, explain: "True! He led the army in the Revolutionary War and later became president." },
      { _kind: 'tf', q: "A civil war is fought between two different countries.", answer: false, explain: "False! A civil war is fought between groups of people who live in the SAME country." },
      { _kind: 'tf', q: "The Underground Railroad was a real underground train.", answer: false, explain: "False! It was a secret system of people and safe places — not a real railroad." },
      { _kind: 'tf', q: "Jane Addams won the Nobel Peace Prize in 1931.", answer: true, explain: "True! She was honored for her work as an advocate for peace." },
      { _kind: 'tf', q: "The North was called the Confederacy during the Civil War.", answer: false, explain: "False! The NORTH was called the Union. The SOUTH was called the Confederacy." },
      { _kind: 'tf', q: "Clara Barton was known as the 'Angel of the Battlefield.'", answer: true, explain: "True! She earned this nickname for caring for wounded soldiers during the Civil War." },

      // ---------- Lesson 4 — Fill ----------
      { _kind: 'mc', q: "FILL: Someone who has done special deeds and is a role model is a ___.", options: ["hero", "soldier", "leader", "teacher"], answer: 0, explain: "A hero has done special deeds and is a role model for others." },
      { _kind: 'mc', q: "FILL: Lincoln wrote the ___ Proclamation to free enslaved African Americans.", options: ["Liberty", "Freedom", "Emancipation", "Civil"], answer: 2, explain: "The Emancipation Proclamation aimed to free enslaved people in the southern states." },
      { _kind: 'mc', q: "FILL: Clara Barton started the ___ to care for soldiers and disaster victims.", options: ["Hull House", "Red Cross", "Continental Congress", "Bill of Rights"], answer: 1, explain: "Clara Barton founded the Red Cross." },
      { _kind: 'mc', q: "FILL: In his 'I Have a Dream' speech, Dr. King wanted people to be judged by their ___, not their skin color.", options: ["money", "family", "character", "clothing"], answer: 2, explain: "He hoped people would be judged by their character." },

      // ---------- Lesson 4 — Hero Matching ----------
      { _kind: 'mc', q: "What did <strong>Anne Hutchinson</strong> do?", options: ["She founded the Red Cross.", "She wrote an antislavery newspaper called the North Star.", "She stood up for freedom of religion.", "She organized the Seneca Falls Convention."], answer: 2, explain: "Anne Hutchinson stood up for freedom of religion." },
      { _kind: 'mc', q: "<em>Which hero did this?</em><br>&ldquo;He wrote the Emancipation Proclamation to free enslaved African Americans.&rdquo;", options: ["George Washington", "Frederick Douglass", "Abraham Lincoln", "Martin Luther King, Jr."], answer: 2, explain: "Abraham Lincoln wrote the Emancipation Proclamation in 1863." }
    ],

    short: [
      {
        q: "What did <strong>Martin Luther King, Jr.</strong> believe in, and what is the main idea of his <em>'I Have a Dream'</em> speech?",
        answer: "Dr. King believed in equal civil rights for all people. He used peaceful protests, not violence. In his 'I Have a Dream' speech (1963), he shared his hope that people would be judged by their character, not by their skin color.",
        keywords: ["civil rights", "equal", "peaceful", "protest", "character", "skin color", "dream", "fairness", "equality", "racial"],
        explain: "Strong answers mention peaceful protest for civil rights and the wish for people to be judged by their character, not their skin color."
      },
      {
        q: "Pick <strong>one</strong> hero from Lesson 3 (Susan B. Anthony, Thurgood Marshall, or Eleanor Roosevelt) and explain in 1–2 sentences what they accomplished.",
        answer: "Examples: Susan B. Anthony fought for women's suffrage — the right to vote. Thurgood Marshall was the first Black Supreme Court Justice and argued Brown v. Board of Education to end school segregation. Eleanor Roosevelt led the U.N. group that wrote the Universal Declaration of Human Rights.",
        keywords: ["Anthony", "suffrage", "vote", "Marshall", "Supreme Court", "Brown", "segregation", "Roosevelt", "U.N.", "United Nations", "human rights", "delegate", "First Lady"],
        explain: "Each of these three heroes worked for fair treatment of others — voting rights for women, equal schools, or universal human rights."
      },
      {
        q: "Why is <strong>Anne Hutchinson</strong> remembered as an American hero?",
        answer: "Anne Hutchinson is remembered because she stood up for what she believed in. She challenged the leaders of the Massachusetts Bay Colony, spoke openly about her religious ideas, and became an important symbol of religious freedom — the right to speak one's own beliefs.",
        keywords: ["religion", "religious", "freedom", "beliefs", "Massachusetts", "challenged", "stood up", "trial", "Rhode Island", "speak"],
        explain: "She became a symbol of religious freedom and standing up for one's beliefs, even when it was risky."
      }
    ]
  }
};
