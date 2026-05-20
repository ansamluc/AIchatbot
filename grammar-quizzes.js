/* ================================================================
   GRAMMAR QUIZZES — Mix-Review for Unit 5 (selected topics) + Unit 6
   --------------------------------------------------------------
   Covers:
     • Unit 5: Book Titles, Commas in a Series, Commas After
       Introductory Words, Quotation Marks
     • Unit 6: ALL topics (Subject Pronouns, Object Pronouns,
       Possessive Pronouns, Using I and Me, Contractions, Negatives)

   Each quiz has:
     • title, subtitle, emoji
     • mc: array of multiple-choice review questions
            { q, options[], answer (index), explain, topic }
     • paragraph: a passage containing several mistakes the user
                  must correct, with a model corrected version and
                  notes for the answer key.
   ================================================================ */

const GRAMMAR_QUIZZES = {
  q1: {
    title: "Grammar Quiz 1",
    subtitle: "Mix Review — Unit 5 (selected) + Unit 6",
    emoji: "📝",
    mc: [
      {
        q: "Which sentence punctuates the book title correctly?",
        options: [
          "I love reading charlotte's web at night.",
          "I love reading \"Charlotte's Web\" at night.",
          "I love reading \"charlotte's web\" at night.",
          "I love reading Charlotte's web at night."
        ],
        answer: 1,
        explain: "Book titles use quotation marks (or italics/underline), and every important word in the title is capitalized: \"Charlotte's Web.\"",
        topic: "Book Titles"
      },
      {
        q: "Where do the commas belong? 'We packed sandwiches juice apples and cookies.'",
        options: [
          "sandwiches, juice apples, and cookies",
          "sandwiches juice, apples, and cookies",
          "sandwiches, juice, apples, and cookies",
          "sandwiches, juice, apples and, cookies"
        ],
        answer: 2,
        explain: "Four items in a series — put a comma after each item, including before 'and': 'sandwiches, juice, apples, and cookies.'",
        topic: "Commas in a Series"
      },
      {
        q: "Which sentence uses a comma after an introductory word correctly?",
        options: [
          "Yes I will help you clean up.",
          "Yes, I will help you clean up.",
          "Yes I, will help you clean up.",
          "Yes I will, help you clean up."
        ],
        answer: 1,
        explain: "Place a comma right after the introductory word: 'Yes, I will help you clean up.'",
        topic: "Commas After Intro Words"
      },
      {
        q: "Which sentence correctly punctuates the speaker's words?",
        options: [
          "Lily said, I love the rain.",
          "Lily said \"I love the rain\".",
          "Lily said, \"I love the rain.\"",
          "Lily said \"i love the rain.\""
        ],
        answer: 2,
        explain: "Use a comma before the quotation, capitalize the first word inside the quotes, and put the period BEFORE the closing quotation mark.",
        topic: "Quotation Marks"
      },
      {
        q: "Choose the correct subject pronoun: 'Tom and ___ rode our bikes to school.'",
        options: ["me", "I", "him", "us"],
        answer: 1,
        explain: "Remove 'Tom and' — 'I rode my bike to school' sounds right. Use the subject pronoun 'I,' and put yourself last.",
        topic: "Using I and Me"
      },
      {
        q: "Choose the correct object pronoun: 'Mom gave the cookies to Sara and ___.'",
        options: ["I", "me", "we", "she"],
        answer: 1,
        explain: "Remove 'Sara and' — 'Mom gave the cookies to me' sounds right. After 'to,' use the object pronoun 'me.'",
        topic: "Object Pronouns"
      },
      {
        q: "Which sentence uses a possessive pronoun correctly?",
        options: [
          "The dog wagged it's tail.",
          "The dog wagged its tail.",
          "The dog wagged its' tail.",
          "The dog wagged it tail."
        ],
        answer: 1,
        explain: "'Its' (no apostrophe) is the possessive. 'It's' means 'it is.'",
        topic: "Possessive Pronouns"
      },
      {
        q: "What is the contraction for 'do not'?",
        options: ["dont", "don't", "do'nt", "dont'"],
        answer: 1,
        explain: "do not → don't. The apostrophe replaces the missing 'o' in 'not.'",
        topic: "Contractions"
      },
      {
        q: "Which sentence is correct?",
        options: [
          "I don't have no homework.",
          "I don't have any homework.",
          "I don't never have homework.",
          "I have no nothing for homework."
        ],
        answer: 1,
        explain: "'Don't' already has 'not' in it. Use only ONE negative — pair it with 'any.'",
        topic: "Negatives"
      },
      {
        q: "Which pronoun replaces the underlined words? '<u>Sam and Kim</u> play soccer every Friday.'",
        options: ["He", "She", "It", "They"],
        answer: 3,
        explain: "Two people = 'they.' 'They play soccer every Friday.'",
        topic: "Subject Pronouns"
      },
      {
        q: "Where does the comma belong? 'First we washed the dishes.'",
        options: [
          "First, we washed the dishes.",
          "First we, washed the dishes.",
          "First we washed, the dishes.",
          "No comma is needed."
        ],
        answer: 0,
        explain: "'First' is an introductory order word — it needs a comma right after it.",
        topic: "Commas After Intro Words"
      },
      {
        q: "Which sentence uses the title correctly?",
        options: [
          "My favorite book is \"The Magic Tree House.\"",
          "My favorite book is \"the magic tree house.\"",
          "My favorite book is the magic tree house.",
          "My favorite book is The magic tree house."
        ],
        answer: 0,
        explain: "Capitalize first, last, and important words in a title; use quotation marks (or italics): \"The Magic Tree House.\"",
        topic: "Book Titles"
      },
      {
        q: "Choose: 'This pencil is ___.' (belonging to me)",
        options: ["my", "mine", "I", "me"],
        answer: 1,
        explain: "When the possessive pronoun stands alone (no noun after it), use 'mine': 'This pencil is mine.'",
        topic: "Possessive Pronouns"
      },
      {
        q: "What two words make up the contraction 'they're'?",
        options: ["they were", "they are", "their own", "there are"],
        answer: 1,
        explain: "they're = they are. Don't confuse with 'their' (ownership) or 'there' (a place).",
        topic: "Contractions"
      },
      {
        q: "Which sentence correctly uses a comma in a series AND quotation marks?",
        options: [
          "Mom said \"Bring your hat coat and gloves.\"",
          "Mom said, \"Bring your hat, coat, and gloves.\"",
          "Mom said, Bring your hat, coat, and gloves.",
          "Mom said \"Bring your hat, coat and gloves\""
        ],
        answer: 1,
        explain: "Use a comma before the quote, capitalize the first quoted word, place commas between the listed items, and put the period inside the closing quotation mark.",
        topic: "Mixed: Series + Quotation Marks"
      }
    ],
    paragraph: {
      intro: "Read the paragraph below. It has <strong>10 grammar and punctuation mistakes</strong> covering Unit 5 (book titles, commas in a series, commas after intro words, quotation marks) and Unit 6 (pronouns, contractions, negatives). Rewrite the paragraph with all the mistakes corrected.",
      original: "Yesterday me and my sister went to the library. First we picked out a book called charlotte's web. Then we found three more books a mystery a poetry book and a fairy tale. The librarian smiled and said dont forget to return them on time. My sister whispered to I, \"its going to be a fun weekend.\" We don't have no other plans so we will read all weekend. The books are her's and mine.",
      corrected: "Yesterday my sister and I went to the library. First, we picked out a book called \"Charlotte's Web.\" Then we found three more books: a mystery, a poetry book, and a fairy tale. The librarian smiled and said, \"Don't forget to return them on time.\" My sister whispered to me, \"It's going to be a fun weekend.\" We don't have any other plans, so we will read all weekend. The books are hers and mine.",
      notes: [
        "<b>me and my sister</b> → <b>my sister and I</b> (use subject pronoun 'I' and put yourself last)",
        "<b>First we</b> → <b>First, we</b> (comma after introductory word)",
        "<b>charlotte's web</b> → <b>\"Charlotte's Web\"</b> (capitalize important words; book titles take quotation marks)",
        "<b>three more books a mystery a poetry book and a fairy tale</b> → add commas in the series: <b>a mystery, a poetry book, and a fairy tale</b>",
        "<b>said dont forget…</b> → <b>said, \"Don't forget…\"</b> (comma before quote, quotation marks, capital first word, period inside)",
        "<b>dont</b> → <b>don't</b> (missing apostrophe in contraction)",
        "<b>whispered to I</b> → <b>whispered to me</b> (object pronoun after 'to')",
        "<b>its going to be</b> → <b>It's going to be</b> (it's = it is; also capitalize first word in the quote)",
        "<b>don't have no other plans</b> → <b>don't have any other plans</b> (avoid double negative)",
        "<b>her's</b> → <b>hers</b> (possessive pronouns never use apostrophes)"
      ]
    }
  },

  q2: {
    title: "Grammar Quiz 2",
    subtitle: "Mix Review — Unit 5 (selected) + Unit 6",
    emoji: "📝",
    mc: [
      {
        q: "Which sentence punctuates the book title correctly?",
        options: [
          "We read the boxcar children in class.",
          "We read \"The Boxcar Children\" in class.",
          "We read \"the boxcar children\" in class.",
          "We read The boxcar Children in class."
        ],
        answer: 1,
        explain: "Capitalize first, last, and important words; book titles use quotation marks (or italics).",
        topic: "Book Titles"
      },
      {
        q: "How many commas are needed? 'I see red blue green and yellow balloons.'",
        options: ["one", "two", "three", "four"],
        answer: 2,
        explain: "Four colors → three commas: 'red, blue, green, and yellow.'",
        topic: "Commas in a Series"
      },
      {
        q: "Which sentence correctly uses a comma after an introductory word?",
        options: [
          "Well, I think we should go now.",
          "Well I, think we should go now.",
          "Well I think, we should go now.",
          "Well I think we should, go now."
        ],
        answer: 0,
        explain: "'Well' is an introductory word — place the comma right after it.",
        topic: "Commas After Intro Words"
      },
      {
        q: "Which sentence punctuates the quotation correctly?",
        options: [
          "Dad asked \"Are you ready to go\"?",
          "Dad asked, are you ready to go?",
          "Dad asked, \"Are you ready to go?\"",
          "Dad asked, \"are you ready to go?\""
        ],
        answer: 2,
        explain: "Comma before the quote, capital first word inside the quotes, question mark inside the closing quotation mark.",
        topic: "Quotation Marks"
      },
      {
        q: "Choose the correct pronoun: 'My friends and ___ built a fort in the yard.'",
        options: ["me", "I", "us", "them"],
        answer: 1,
        explain: "Remove 'My friends and' — 'I built a fort' sounds right. Use the subject pronoun 'I.'",
        topic: "Using I and Me"
      },
      {
        q: "Choose: 'The teacher called on Lily and ___.'",
        options: ["I", "me", "she", "we"],
        answer: 1,
        explain: "Remove 'Lily and' — 'The teacher called on me.' Use the object pronoun 'me.'",
        topic: "Object Pronouns"
      },
      {
        q: "Which sentence uses a possessive pronoun correctly?",
        options: [
          "That red bike is her's.",
          "That red bike is hers.",
          "That red bike is hers'.",
          "That red bike is her."
        ],
        answer: 1,
        explain: "Possessive pronouns (mine, yours, his, hers, ours, theirs) NEVER use apostrophes.",
        topic: "Possessive Pronouns"
      },
      {
        q: "What is the contraction for 'will not'?",
        options: ["willn't", "won't", "wil'nt", "willnt"],
        answer: 1,
        explain: "will not → won't — a special contraction where the spelling changes.",
        topic: "Contractions"
      },
      {
        q: "Which sentence has a double negative?",
        options: [
          "I never go to bed late.",
          "I don't go anywhere late.",
          "I don't go nowhere late.",
          "I go to bed early."
        ],
        answer: 2,
        explain: "'Don't' + 'nowhere' = two negatives. Correct it to 'don't go anywhere' OR 'go nowhere.'",
        topic: "Negatives"
      },
      {
        q: "Which subject pronoun replaces the underlined words? '<u>The book</u> is on the shelf.'",
        options: ["He", "She", "It", "They"],
        answer: 2,
        explain: "A book is a thing — use 'it.' 'It is on the shelf.'",
        topic: "Subject Pronouns"
      },
      {
        q: "Where do the commas belong? 'Finally after a long walk we sat down.'",
        options: [
          "Finally after a long walk, we sat down.",
          "Finally, after a long walk we sat down.",
          "Finally, after a long walk, we sat down.",
          "Finally after, a long walk we sat down."
        ],
        answer: 2,
        explain: "Two commas: one after the order word 'Finally,' and one after the introductory phrase 'after a long walk.'",
        topic: "Commas After Intro Words"
      },
      {
        q: "Which sentence has the title written correctly?",
        options: [
          "I just finished reading \"The Lion, The Witch, and The Wardrobe.\"",
          "I just finished reading \"The Lion, the Witch, and the Wardrobe.\"",
          "I just finished reading the lion the witch and the wardrobe.",
          "I just finished reading The lion the witch and the Wardrobe."
        ],
        answer: 1,
        explain: "Capitalize the first, last, and important words. Small words like 'the' in the middle of a title stay lowercase: \"The Lion, the Witch, and the Wardrobe.\"",
        topic: "Book Titles"
      },
      {
        q: "Choose: 'Is this notebook ___ or ___?' (belonging to you / belonging to me)",
        options: [
          "your / my",
          "yours / mine",
          "your's / mine",
          "yours / my"
        ],
        answer: 1,
        explain: "When the possessive pronoun stands alone, use the 'alone' forms: 'yours' and 'mine' — and never use apostrophes.",
        topic: "Possessive Pronouns"
      },
      {
        q: "Choose the sentence with the correct contraction.",
        options: [
          "Their going to the park.",
          "There going to the park.",
          "They're going to the park.",
          "Theyre going to the park."
        ],
        answer: 2,
        explain: "'They're' = 'they are.' Test: 'They are going to the park' makes sense.",
        topic: "Contractions"
      },
      {
        q: "Which sentence correctly uses commas AND quotation marks together?",
        options: [
          "Tom shouted Look at the rainbow",
          "Tom shouted, \"Look at the rainbow!\"",
          "Tom shouted, Look at the rainbow!",
          "Tom shouted \"look at the rainbow!\""
        ],
        answer: 1,
        explain: "Comma before the quote, capital first word inside the quotation marks, and the exclamation point goes INSIDE the closing quotation mark.",
        topic: "Mixed: Commas + Quotation Marks"
      }
    ],
    paragraph: {
      intro: "Read the paragraph below. It has <strong>10 grammar and punctuation mistakes</strong> covering Unit 5 (book titles, commas in a series, commas after intro words, quotation marks) and Unit 6 (pronouns, contractions, negatives). Rewrite the paragraph with all the mistakes corrected.",
      original: "Last Saturday my brother and me went to the bookstore. First we looked at the new books. Mom said hurry up we don't have much time. I picked up a book called the magic finger and my brother grabbed a comic. The clerk asked \"are you ready to check out\". My brother whispered to I, \"its almost lunchtime.\" We didn't buy nothing else because we were hungry. The two books are him's and mine.",
      corrected: "Last Saturday my brother and I went to the bookstore. First, we looked at the new books. Mom said, \"Hurry up; we don't have much time.\" I picked up a book called \"The Magic Finger,\" and my brother grabbed a comic. The clerk asked, \"Are you ready to check out?\" My brother whispered to me, \"It's almost lunchtime.\" We didn't buy anything else because we were hungry. The two books are his and mine.",
      notes: [
        "<b>my brother and me</b> → <b>my brother and I</b> (subject pronoun; put yourself last)",
        "<b>First we</b> → <b>First, we</b> (comma after introductory word)",
        "<b>said hurry up…</b> → <b>said, \"Hurry up…\"</b> (comma before quote, opening/closing quotation marks, capitalize first word)",
        "<b>the magic finger</b> → <b>\"The Magic Finger\"</b> (book title needs quotation marks and capitals on important words)",
        "<b>asked \"are you ready to check out\".</b> → <b>asked, \"Are you ready to check out?\"</b> (comma before quote, capital first word, question mark INSIDE the closing quotation mark)",
        "<b>whispered to I</b> → <b>whispered to me</b> (object pronoun after 'to')",
        "<b>its almost lunchtime</b> → <b>It's almost lunchtime</b> (it's = it is; capitalize first word inside quotes)",
        "<b>didn't buy nothing</b> → <b>didn't buy anything</b> (avoid double negative)",
        "<b>him's</b> → <b>his</b> ('his' is already possessive — no 's or apostrophe)",
        "Missing series commas / missing intro comma corrections noted above (intro 'First,' and proper punctuation in the quoted lines)."
      ]
    }
  }
};
