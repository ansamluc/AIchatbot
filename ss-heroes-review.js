/* ================================================================
   SOCIAL STUDIES — HEROES FINAL REVIEW
   ----------------------------------------------------------------
   All 16 heroes from Lesson 3 (L3) and Lesson 4 (L4):
     L3: Susan B. Anthony, Elizabeth Cady Stanton, Thurgood Marshall,
         Eleanor Roosevelt, Reverend Oliver Brown
     L4: Thomas Jefferson, George Washington, James Madison,
         Anne Hutchinson, Abraham Lincoln, Clara Barton,
         Frederick Douglass, Harriet Tubman, Dr. Martin Luther King Jr.,
         Jane Addams, Ellen Gates Starr

   Two question directions, interleaved throughout each review:
     → "accomplishment → who?" (given the deed, pick the hero)
     → "who → accomplishment?" (given the hero name, pick the deed)

   Answer positions are deliberately varied — correct answer rotates
   through A / B / C / D to prevent pattern-guessing.
   ================================================================ */

const SS_HEROES_REVIEWS = {

  /* ============================================================
     HEROES REVIEW 1
     ============================================================ */
  q1: {
    title: "Heroes Final Review 1",
    subtitle: "All Heroes — Lessons 3 & 4",
    emoji: "🦅",

    questions: [

      // ── L3 heroes ─────────────────────────────────────────────

      // correct = A (0)
      { _kind:'mc', unit:'L3',
        q:"<em>Who did this?</em><br>\"She fought for women's right to vote (suffrage) and was arrested in 1872 for voting.\"",
        options:["Susan B. Anthony","Eleanor Roosevelt","Elizabeth Cady Stanton","Harriet Tubman"],
        answer:0, explain:"Susan B. Anthony led the suffrage movement, helped form the National American Woman Suffrage Association, and was arrested in 1872 for voting." },

      // correct = B (1)
      { _kind:'mc', unit:'L3',
        q:"What did <strong>Elizabeth Cady Stanton</strong> do?",
        options:["She led the U.N. group that wrote the Universal Declaration of Human Rights.","She organized the 1848 Seneca Falls Convention — the first women's rights convention in the U.S.","She was the first woman to vote legally in a U.S. election.","She argued Brown v. Board of Education before the Supreme Court."],
        answer:1, explain:"Elizabeth Cady Stanton organized the 1848 Seneca Falls Convention with Lucretia Mott — the launching point of the suffrage movement." },

      // correct = C (2)
      { _kind:'mc', unit:'L3',
        q:"<em>Who did this?</em><br>\"He argued Brown v. Board of Education before the Supreme Court and later became the first African American Supreme Court justice.\"",
        options:["Reverend Oliver Brown","Abraham Lincoln","Thurgood Marshall","Frederick Douglass"],
        answer:2, explain:"Thurgood Marshall argued Brown v. Board of Education (1954), ending school segregation, and in 1967 became the first African American Supreme Court justice." },

      // correct = D (3)
      { _kind:'mc', unit:'L3',
        q:"What did <strong>Eleanor Roosevelt</strong> do?",
        options:["She organized the 1848 Seneca Falls Convention.","She voted illegally in 1872 to protest the lack of women's suffrage.","She argued the Brown case and ended school segregation.","She led the U.N. group that created the Universal Declaration of Human Rights."],
        answer:3, explain:"Eleanor Roosevelt was First Lady and U.S. delegate to the U.N. She led the committee that wrote the Universal Declaration of Human Rights." },

      // correct = B (1)
      { _kind:'mc', unit:'L3',
        q:"<em>Who did this?</em><br>\"He brought his daughter's school case to the Supreme Court, leading to the end of school segregation in 1954.\"",
        options:["Thurgood Marshall","Reverend Oliver Brown","Abraham Lincoln","James Madison"],
        answer:1, explain:"Reverend Oliver Brown wanted his daughter Linda to attend a closer school. His case — Brown v. Board of Education — went to the Supreme Court and ended segregation." },

      // correct = A (0)
      { _kind:'mc', unit:'L3',
        q:"What did <strong>Thurgood Marshall</strong> do?",
        options:["He argued Brown v. Board of Education and ended school segregation, then became the first African American Supreme Court justice.","He organized the Seneca Falls Convention.","He led the Underground Railroad.","He wrote the Emancipation Proclamation."],
        answer:0, explain:"Thurgood Marshall was a lawyer who argued Brown v. Board of Education in 1954 and became the first African American Supreme Court justice in 1967." },

      // correct = C (2)
      { _kind:'mc', unit:'L3',
        q:"<em>Who did this?</em><br>\"She helped write the Universal Declaration of Human Rights as the U.S. delegate to the United Nations.\"",
        options:["Susan B. Anthony","Elizabeth Cady Stanton","Eleanor Roosevelt","Jane Addams"],
        answer:2, explain:"Eleanor Roosevelt became the U.S. delegate to the U.N. in 1945 and led the creation of the Universal Declaration of Human Rights." },

      // correct = D (3)
      { _kind:'mc', unit:'L3',
        q:"What did <strong>Susan B. Anthony</strong> do?",
        options:["She led the U.N. human rights group.","She wrote the 'Declaration of Sentiments' at Seneca Falls.","She argued Brown v. Board of Education.","She fought for women's right to vote and was arrested in 1872 for voting."],
        answer:3, explain:"Susan B. Anthony was the face of the suffrage movement. She spoke across America, helped form the National American Woman Suffrage Association, and was arrested in 1872." },

      // ── L4 heroes — Founding Fathers ──────────────────────────

      // correct = B (1)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"He helped write the Declaration of Independence in 1776, taking a great risk.\"",
        options:["George Washington","Thomas Jefferson","James Madison","Abraham Lincoln"],
        answer:1, explain:"Thomas Jefferson was chosen by the Continental Congress to help write the Declaration of Independence — America's formal statement of freedom from Britain." },

      // correct = A (0)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>George Washington</strong> do?",
        options:["He led the American army during the Revolutionary War and became the first U.S. President.","He wrote the Constitution and the Bill of Rights.","He helped write the Declaration of Independence.","He gave the 'I Have a Dream' speech."],
        answer:0, explain:"George Washington commanded the Continental Army during the Revolutionary War and was later elected the first President of the United States." },

      // correct = D (3)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"He helped plan the Constitution and the Bill of Rights and is called the 'Father of the Constitution.'\"",
        options:["Thomas Jefferson","George Washington","Abraham Lincoln","James Madison"],
        answer:3, explain:"James Madison was the key architect of the Constitution and the Bill of Rights, earning the title 'Father of the Constitution.'" },

      // correct = C (2)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Thomas Jefferson</strong> do?",
        options:["He led the army in the Revolutionary War.","He helped plan the Constitution and the Bill of Rights.","He helped write the Declaration of Independence in 1776.","He freed enslaved people with the Emancipation Proclamation."],
        answer:2, explain:"Thomas Jefferson helped write the Declaration of Independence — the formal statement of America's freedom from British rule." },

      // ── L4 heroes — Anne Hutchinson & Lincoln ─────────────────

      // correct = A (0)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She stood up for freedom of religion in the 1600s, was put on trial, and moved to what became Rhode Island.\"",
        options:["Anne Hutchinson","Harriet Tubman","Clara Barton","Jane Addams"],
        answer:0, explain:"Anne Hutchinson challenged the Massachusetts Bay Colony's religious leaders and was forced to leave, becoming a symbol of religious freedom." },

      // correct = B (1)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Abraham Lincoln</strong> do?",
        options:["He led peaceful civil rights marches in the 1960s.","He was the 16th president and wrote the Emancipation Proclamation to free enslaved African Americans.","He argued Brown v. Board of Education.","He founded the Red Cross."],
        answer:1, explain:"Abraham Lincoln was the 16th U.S. President. He led the country during the Civil War and wrote the Emancipation Proclamation in 1863 to free enslaved people." },

      // correct = D (3)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"He wrote the Emancipation Proclamation in 1863 to free enslaved African Americans in the southern states.\"",
        options:["George Washington","James Madison","Frederick Douglass","Abraham Lincoln"],
        answer:3, explain:"Abraham Lincoln wrote the Emancipation Proclamation in 1863, declaring enslaved people in rebel states forever free." },

      // ── L4 heroes — Clara Barton & Frederick Douglass ─────────

      // correct = C (2)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Clara Barton</strong> do?",
        options:["She led enslaved people to freedom on the Underground Railroad.","She founded Hull House to help immigrants.","She was a Civil War nurse known as the 'Angel of the Battlefield' and founded the Red Cross.","She organized peaceful civil rights marches."],
        answer:2, explain:"Clara Barton nursed wounded soldiers during the Civil War and later founded the American Red Cross, providing aid after disasters." },

      // correct = A (0)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She was a Civil War nurse known as the 'Angel of the Battlefield' and founded the Red Cross.\"",
        options:["Clara Barton","Anne Hutchinson","Harriet Tubman","Jane Addams"],
        answer:0, explain:"Clara Barton earned the nickname 'Angel of the Battlefield' for her work nursing soldiers, and later founded the Red Cross." },

      // correct = B (1)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Frederick Douglass</strong> do?",
        options:["He founded Hull House in Chicago.","He escaped slavery and became an abolitionist who wrote and spoke out against slavery.","He led the American army in the Revolutionary War.","He argued in the Supreme Court to end school segregation."],
        answer:1, explain:"Frederick Douglass escaped slavery in Maryland and became a famous writer, speaker, and abolitionist. He published the North Star newspaper." },

      // correct = D (3)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"He escaped slavery, wrote the North Star newspaper, and spoke out across America to end slavery.\"",
        options:["Abraham Lincoln","Thurgood Marshall","James Madison","Frederick Douglass"],
        answer:3, explain:"Frederick Douglass escaped slavery, published the North Star newspaper, and became the most prominent African American abolitionist speaker." },

      // ── L4 heroes — Harriet Tubman & MLK ─────────────────────

      // correct = A (0)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Harriet Tubman</strong> do?",
        options:["She led many enslaved people to freedom using the Underground Railroad.","She wrote the Emancipation Proclamation.","She gave the 'I Have a Dream' speech.","She founded the Red Cross."],
        answer:0, explain:"Harriet Tubman escaped slavery in Maryland and risked her life many times to lead other enslaved people to freedom through the Underground Railroad." },

      // correct = C (2)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She escaped slavery and helped many others escape through the Underground Railroad.\"",
        options:["Eleanor Roosevelt","Clara Barton","Harriet Tubman","Jane Addams"],
        answer:2, explain:"Harriet Tubman was born into slavery, escaped to Pennsylvania, and then returned many times to lead others to freedom via the Underground Railroad." },

      // correct = B (1)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Dr. Martin Luther King, Jr.</strong> do?",
        options:["He founded Hull House to help immigrants in Chicago.","He organized peaceful civil rights protests and gave the 'I Have a Dream' speech in 1963.","He argued Brown v. Board of Education before the Supreme Court.","He wrote the Emancipation Proclamation."],
        answer:1, explain:"Dr. King organized peaceful protests, marches, and speeches — including the famous 'I Have a Dream' speech — that led to major civil rights laws in 1964 and 1965." },

      // correct = D (3)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"He organized peaceful civil rights protests and gave the famous 'I Have a Dream' speech in 1963.\"",
        options:["Frederick Douglass","Abraham Lincoln","George Washington","Dr. Martin Luther King, Jr."],
        answer:3, explain:"Dr. Martin Luther King, Jr. was the face of the peaceful civil rights movement. His 1963 speech inspired millions, leading to landmark civil rights laws." },

      // ── L4 heroes — Jane Addams & Ellen Gates Starr ───────────

      // correct = A (0)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Jane Addams</strong> do?",
        options:["She co-founded Hull House in Chicago to help the poor and immigrants, and won the Nobel Peace Prize in 1931.","She organized the Seneca Falls Convention.","She was a Civil War nurse who founded the Red Cross.","She escaped slavery and led others to freedom."],
        answer:0, explain:"Jane Addams co-founded Hull House in 1881, provided food, childcare, and English classes for the poor, and received the Nobel Peace Prize in 1931." },

      // correct = C (2)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She co-founded Hull House in Chicago with Jane Addams to support poor families and immigrants.\"",
        options:["Harriet Tubman","Anne Hutchinson","Ellen Gates Starr","Clara Barton"],
        answer:2, explain:"Ellen Gates Starr co-founded Hull House with Jane Addams in Chicago in 1881." },

      // correct = B (1)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Ellen Gates Starr</strong> do?",
        options:["She fought for women's right to vote.","She co-founded Hull House in Chicago with Jane Addams.","She wrote the Bill of Rights.","She led peaceful civil rights protests."],
        answer:1, explain:"Ellen Gates Starr co-founded Hull House in 1881 with Jane Addams, helping Chicago's poor and immigrant communities." },

      // correct = D (3)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She co-founded Hull House in Chicago in 1881 and won the Nobel Peace Prize in 1931 for her work helping the poor and advocating for peace.\"",
        options:["Eleanor Roosevelt","Harriet Tubman","Clara Barton","Jane Addams"],
        answer:3, explain:"Jane Addams co-founded Hull House in 1881 and spent decades fighting for the rights of the poor, women, and children. She won the Nobel Peace Prize in 1931." },

      // ── Mixed rapid-fire matching ──────────────────────────────

      // correct = C (2)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who did this?</em><br>\"He was a lawyer who fought segregation in court AND later became the first African American on the Supreme Court.\"",
        options:["Reverend Oliver Brown","Abraham Lincoln","Thurgood Marshall","Frederick Douglass"],
        answer:2, explain:"Thurgood Marshall argued Brown v. Board of Education (1954) and became the first African American Supreme Court justice in 1967." },

      // correct = A (0)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who did this?</em><br>\"She stood up for freedom of religion in colonial America, was put on trial, and had to leave Massachusetts.\"",
        options:["Anne Hutchinson","Jane Addams","Eleanor Roosevelt","Clara Barton"],
        answer:0, explain:"Anne Hutchinson challenged the Massachusetts Bay Colony's religious leaders and moved to what became Rhode Island — a symbol of religious freedom." },

      // correct = D (3)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who did this?</em><br>\"He helped plan the U.S. Constitution and the Bill of Rights, earning the title 'Father of the Constitution.'\"",
        options:["George Washington","Thomas Jefferson","Abraham Lincoln","James Madison"],
        answer:3, explain:"James Madison is called the 'Father of the Constitution' because he was the main architect of both the Constitution and the Bill of Rights." },

      // correct = B (1)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who did this?</em><br>\"She organized the first women's rights convention in the United States in 1848.\"",
        options:["Susan B. Anthony","Elizabeth Cady Stanton","Eleanor Roosevelt","Jane Addams"],
        answer:1, explain:"Elizabeth Cady Stanton organized the Seneca Falls Convention in 1848 with Lucretia Mott — the first women's rights convention in the U.S." },

    ]
  },

  /* ============================================================
     HEROES REVIEW 2
     ============================================================ */
  q2: {
    title: "Heroes Final Review 2",
    subtitle: "All Heroes — Lessons 3 & 4",
    emoji: "🦅",

    questions: [

      // ── Fast pairs: all 16 heroes, alternate direction ─────────

      // correct = B (1)
      { _kind:'mc', unit:'L3',
        q:"What did <strong>Susan B. Anthony</strong> do?",
        options:["She led the U.N. group that wrote the Universal Declaration of Human Rights.","She fought for women's suffrage and was arrested for voting in 1872.","She organized the 1848 Seneca Falls Convention.","She wrote the Declaration of Sentiments."],
        answer:1, explain:"Susan B. Anthony led the fight for women's right to vote (suffrage) and was arrested and fined $100 for voting in 1872." },

      // correct = D (3)
      { _kind:'mc', unit:'L3',
        q:"<em>Who did this?</em><br>\"She wrote the 'Declaration of Sentiments' at the 1848 Seneca Falls Convention.\"",
        options:["Susan B. Anthony","Eleanor Roosevelt","Clara Barton","Elizabeth Cady Stanton"],
        answer:3, explain:"Elizabeth Cady Stanton wrote the Declaration of Sentiments at the Seneca Falls Convention, modeled on the Declaration of Independence." },

      // correct = A (0)
      { _kind:'mc', unit:'L3',
        q:"What did <strong>Thurgood Marshall</strong> do?",
        options:["He argued Brown v. Board of Education, ending school segregation, and became the first African American Supreme Court justice.","He brought his daughter's case about school segregation to the Supreme Court.","He organized peaceful civil rights protests.","He wrote the Universal Declaration of Human Rights."],
        answer:0, explain:"Thurgood Marshall was the lawyer who argued Brown v. Board of Education (1954) and later became the first African American Supreme Court justice in 1967." },

      // correct = C (2)
      { _kind:'mc', unit:'L3',
        q:"<em>Who did this?</em><br>\"He brought the Brown v. Board of Education case to the Supreme Court because he wanted his daughter to attend a closer school.\"",
        options:["Thurgood Marshall","Abraham Lincoln","Reverend Oliver Brown","James Madison"],
        answer:2, explain:"Reverend Oliver Brown's case — Brown v. Board of Education — led to the Supreme Court ruling that ended school segregation in 1954." },

      // correct = B (1)
      { _kind:'mc', unit:'L3',
        q:"What did <strong>Eleanor Roosevelt</strong> do?",
        options:["She organized the Seneca Falls Convention.","She led the U.N. committee that created the Universal Declaration of Human Rights.","She argued Brown v. Board of Education.","She voted illegally in 1872 for women's suffrage."],
        answer:1, explain:"Eleanor Roosevelt was the U.S. delegate to the U.N. and led the creation of the Universal Declaration of Human Rights." },

      // correct = D (3)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"He led the Continental Army during the Revolutionary War and became the first President of the United States.\"",
        options:["Thomas Jefferson","James Madison","Abraham Lincoln","George Washington"],
        answer:3, explain:"George Washington commanded the Continental Army in the Revolutionary War and was elected the first U.S. President." },

      // correct = A (0)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>James Madison</strong> do?",
        options:["He helped plan the Constitution and the Bill of Rights and is called the 'Father of the Constitution.'","He led the army during the Revolutionary War.","He wrote the Declaration of Independence.","He freed enslaved people with the Emancipation Proclamation."],
        answer:0, explain:"James Madison is called the 'Father of the Constitution' for his central role in drafting the Constitution and the Bill of Rights." },

      // correct = C (2)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She stood up for freedom of religion in colonial America and was forced to leave Massachusetts Bay Colony.\"",
        options:["Clara Barton","Jane Addams","Anne Hutchinson","Harriet Tubman"],
        answer:2, explain:"Anne Hutchinson challenged the Massachusetts Bay Colony's religious leaders. She was put on trial and moved to what became Rhode Island." },

      // correct = B (1)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Abraham Lincoln</strong> do?",
        options:["He wrote the Declaration of Independence.","He was the 16th President and wrote the Emancipation Proclamation to free enslaved African Americans.","He argued Brown v. Board of Education before the Supreme Court.","He organized peaceful civil rights marches in the 1960s."],
        answer:1, explain:"Abraham Lincoln was the 16th U.S. President. He led the Union during the Civil War and issued the Emancipation Proclamation in 1863." },

      // correct = D (3)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She cared for wounded soldiers during the Civil War and earned the nickname 'Angel of the Battlefield.'\"",
        options:["Jane Addams","Harriet Tubman","Anne Hutchinson","Clara Barton"],
        answer:3, explain:"Clara Barton nursed wounded soldiers on Civil War battlefields and later founded the American Red Cross." },

      // correct = A (0)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Frederick Douglass</strong> do?",
        options:["He escaped slavery and became an abolitionist who wrote the North Star newspaper and spoke against slavery.","He founded Hull House in Chicago.","He led the Continental Army in the Revolutionary War.","He argued Brown v. Board of Education."],
        answer:0, explain:"Frederick Douglass escaped slavery, became a powerful speaker and writer, and published the North Star newspaper to fight against slavery." },

      // correct = C (2)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She escaped slavery in Maryland and helped lead many others to freedom using the Underground Railroad.\"",
        options:["Clara Barton","Anne Hutchinson","Harriet Tubman","Jane Addams"],
        answer:2, explain:"Harriet Tubman escaped slavery and made many dangerous return trips to lead other enslaved people to freedom through the Underground Railroad." },

      // correct = B (1)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Dr. Martin Luther King, Jr.</strong> do?",
        options:["He founded the Red Cross.","He led peaceful civil rights protests and gave the 'I Have a Dream' speech in 1963.","He escaped slavery and spoke out against it.","He was the 16th President and ended slavery."],
        answer:1, explain:"Dr. King organized peaceful marches and gave the 'I Have a Dream' speech (1963). His work led to major civil rights laws in 1964 and 1965." },

      // correct = D (3)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"She co-founded Hull House in Chicago to help poor families and immigrants, and won the Nobel Peace Prize in 1931.\"",
        options:["Harriet Tubman","Eleanor Roosevelt","Clara Barton","Jane Addams"],
        answer:3, explain:"Jane Addams co-founded Hull House (1881), provided food, childcare, and English classes, and won the Nobel Peace Prize in 1931." },

      // correct = A (0)
      { _kind:'mc', unit:'L4',
        q:"What did <strong>Ellen Gates Starr</strong> do?",
        options:["She co-founded Hull House in Chicago with Jane Addams.","She organized peaceful civil rights marches.","She fought for women's right to vote.","She wrote the Constitution."],
        answer:0, explain:"Ellen Gates Starr co-founded Hull House in 1881 with Jane Addams to serve Chicago's poor and immigrant communities." },

      // correct = C (2)
      { _kind:'mc', unit:'L4',
        q:"<em>Who did this?</em><br>\"He helped write the Declaration of Independence in 1776, taking a great risk against British rule.\"",
        options:["James Madison","George Washington","Thomas Jefferson","Abraham Lincoln"],
        answer:2, explain:"Thomas Jefferson was chosen to help write the Declaration of Independence — America's formal break from British rule in 1776." },

      // ── Trickier cross-lesson pairs ────────────────────────────

      // correct = B (1)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who did this?</em><br>\"He was an abolitionist born into slavery who escaped and used his pen and voice to fight for freedom.\"",
        options:["Abraham Lincoln","Frederick Douglass","Reverend Oliver Brown","Thurgood Marshall"],
        answer:1, explain:"Frederick Douglass escaped slavery and became a famous abolitionist writer and speaker, publishing the North Star newspaper." },

      // correct = D (3)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who did this?</em><br>\"She fought so women could vote, and she was arrested for casting a ballot in 1872.\"",
        options:["Eleanor Roosevelt","Jane Addams","Elizabeth Cady Stanton","Susan B. Anthony"],
        answer:3, explain:"Susan B. Anthony was arrested and fined $100 for voting in the 1872 presidential election because women were not yet allowed to vote." },

      // correct = A (0)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who did this?</em><br>\"She organized peaceful protests for civil rights and gave the famous 'I Have a Dream' speech.\"",
        options:["Dr. Martin Luther King, Jr.","Harriet Tubman","Frederick Douglass","Abraham Lincoln"],
        answer:0, explain:"Dr. Martin Luther King, Jr. gave the 'I Have a Dream' speech in 1963 during the March on Washington, inspiring millions to support civil rights." },

      // correct = C (2)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who did this?</em><br>\"She led the creation of the Universal Declaration of Human Rights as the U.S. delegate to the United Nations.\"",
        options:["Susan B. Anthony","Elizabeth Cady Stanton","Eleanor Roosevelt","Jane Addams"],
        answer:2, explain:"Eleanor Roosevelt became U.S. delegate to the U.N. in 1945 and chaired the committee that wrote the Universal Declaration of Human Rights." },

      // correct = B (1)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who is the hero described?</em><br>\"She was a nurse on Civil War battlefields AND created an organization that still helps disaster victims today.\"",
        options:["Jane Addams","Clara Barton","Harriet Tubman","Anne Hutchinson"],
        answer:1, explain:"Clara Barton nursed soldiers on Civil War battlefields and founded the Red Cross — which still provides food, medicine, and comfort after disasters today." },

      // correct = D (3)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who is the hero described?</em><br>\"He was a lawyer who went to the Supreme Court to fight for equality AND later sat on the Supreme Court himself.\"",
        options:["Reverend Oliver Brown","Abraham Lincoln","George Washington","Thurgood Marshall"],
        answer:3, explain:"Thurgood Marshall argued Brown v. Board of Education (1954) as a lawyer, then became the first African American Supreme Court justice in 1967." },

      // correct = A (0)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who is the hero described?</em><br>\"He was president during the Civil War and issued a proclamation to free enslaved people.\"",
        options:["Abraham Lincoln","George Washington","James Madison","Thomas Jefferson"],
        answer:0, explain:"Abraham Lincoln was the 16th President, led the Union during the Civil War, and issued the Emancipation Proclamation in 1863." },

      // correct = C (2)
      { _kind:'mc', unit:'L3+L4',
        q:"<em>Who is the hero described?</em><br>\"She co-founded a community center in a poor Chicago neighborhood in 1881 and won the Nobel Peace Prize fifty years later.\"",
        options:["Clara Barton","Harriet Tubman","Jane Addams","Eleanor Roosevelt"],
        answer:2, explain:"Jane Addams co-founded Hull House in Chicago in 1881 and won the Nobel Peace Prize in 1931 for her advocacy for peace and the poor." },

    ]
  }
};
