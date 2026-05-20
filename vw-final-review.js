/* ================================================================
   VOCABULARY WORKSHOP — FINAL REVIEW QUIZZES
   --------------------------------------------------------------
   Two final-review quizzes drawing from VW Units 14–18 (50 words).
   Each quiz contains four sections:
     1. Fill-in-the-Blank Sentences  (~10 items)
     2. Synonyms                     (~10 items)
     3. Antonyms                     (~10 items)
     4. Cloze Paragraph              (one passage with ~10 blanks)

   Item shape:
     { q, options[], answer (index of correct option), explain, word }

   Paragraph shape:
     { intro, text (with [[n]] placeholders), blanks: [ { word, options[], answer } ] }
   ================================================================ */

const VW_FINAL_REVIEWS = {

  /* ============================================================
     FINAL REVIEW 1
     ============================================================ */
  q1: {
    title: "VW Final Review 1",
    subtitle: "Mix Review — Units 14 to 18",
    emoji: "📚",

    fill: [
      {
        q: "Helping the lost puppy find its home was an ___ thing to do.",
        options: ["dreary", "admirable", "distant", "automatic"],
        answer: 1,
        explain: "'Admirable' means deserving of praise — exactly fits a kind action.",
        word: "admirable"
      },
      {
        q: "The bear will ___ in its cave all winter long.",
        options: ["inquire", "kindle", "slumber", "boast"],
        answer: 2,
        explain: "'Slumber' means to sleep — perfect for a hibernating bear.",
        word: "slumber"
      },
      {
        q: "Dark clouds in the sky often ___ that a storm is coming.",
        options: ["imply", "purify", "revoke", "boast"],
        answer: 0,
        explain: "'Imply' means to hint or suggest without saying directly.",
        word: "imply"
      },
      {
        q: "A sponge can ___ a lot of water very quickly.",
        options: ["suspend", "absorb", "locate", "stunt"],
        answer: 1,
        explain: "'Absorb' means to soak up — exactly what a sponge does.",
        word: "absorb"
      },
      {
        q: "The ___ lake was as smooth as a mirror in the early morning.",
        options: ["fearsome", "wretched", "tranquil", "tiresome"],
        answer: 2,
        explain: "'Tranquil' means calm and peaceful — fits a smooth, quiet lake.",
        word: "tranquil"
      },
      {
        q: "It is rude to ___ about being better than your classmates.",
        options: ["inquire", "negotiate", "predict", "boast"],
        answer: 3,
        explain: "'Boast' means to brag — and bragging is rude.",
        word: "boast"
      },
      {
        q: "We packed ___ snacks to last the entire field trip.",
        options: ["sufficient", "wretched", "lame", "defiant"],
        answer: 0,
        explain: "'Sufficient' means enough — the snacks were enough for the trip.",
        word: "sufficient"
      },
      {
        q: "The dewdrops on the grass ___ in the morning sun.",
        options: ["slumber", "glisten", "exhaust", "stunt"],
        answer: 1,
        explain: "'Glisten' means to sparkle with light — fits dewdrops in sunlight.",
        word: "glisten"
      },
      {
        q: "After a good harvest, the farmers had an ___ supply of corn.",
        options: ["abundant", "distant", "formal", "lame"],
        answer: 0,
        explain: "'Abundant' means plenty — fits a successful harvest.",
        word: "abundant"
      },
      {
        q: "The two friends had to ___ to decide which game to play first.",
        options: ["negotiate", "penalize", "suspend", "purify"],
        answer: 0,
        explain: "'Negotiate' means to talk things out to reach an agreement.",
        word: "negotiate"
      }
    ],

    syn: [
      {
        q: "<em>her grandmother's quiet <b>devotion</b> to the family</em><br>Which word means about the SAME as <b>devotion</b>?",
        options: ["disloyalty", "dedication", "uproar", "barrier"],
        answer: 1,
        explain: "'Devotion' = strong loyalty or dedication.",
        word: "devotion"
      },
      {
        q: "<em>scientists who <b>predict</b> tomorrow's weather</em><br>Which word means about the SAME as <b>predict</b>?",
        options: ["forecast", "extinguish", "ignore", "penalize"],
        answer: 0,
        explain: "'Predict' and 'forecast' both mean to say what will happen.",
        word: "predict"
      },
      {
        q: "<em>a <b>picturesque</b> view of the harbor at sunset</em><br>Which word means about the SAME as <b>picturesque</b>?",
        options: ["scenic", "drab", "dreary", "lame"],
        answer: 0,
        explain: "'Picturesque' = beautiful, scenic — like a postcard view.",
        word: "picturesque"
      },
      {
        q: "<em>the dragon's <b>fearsome</b> roar shook the cave</em><br>Which word means about the SAME as <b>fearsome</b>?",
        options: ["reassuring", "tranquil", "terrifying", "elegant"],
        answer: 2,
        explain: "'Fearsome' = causing fear; 'terrifying' is a close match.",
        word: "fearsome"
      },
      {
        q: "<em>asked the mechanic to <b>inspect</b> the engine</em><br>Which word means about the SAME as <b>inspect</b>?",
        options: ["examine", "ignore", "discharge", "boast"],
        answer: 0,
        explain: "'Inspect' = to look carefully; 'examine' is a synonym.",
        word: "inspect"
      },
      {
        q: "<em>a <b>tranquil</b> afternoon by the river</em><br>Which word means about the SAME as <b>tranquil</b>?",
        options: ["noisy", "calm", "tiresome", "wretched"],
        answer: 1,
        explain: "'Tranquil' = peaceful, calm.",
        word: "tranquil"
      },
      {
        q: "<em>an <b>eloquent</b> speech at the school assembly</em><br>Which word means about the SAME as <b>eloquent</b>?",
        options: ["tongue-tied", "awkward", "well-spoken", "infectious"],
        answer: 2,
        explain: "'Eloquent' = able to speak clearly and persuasively.",
        word: "eloquent"
      },
      {
        q: "<em>her lifelong <b>ambition</b> to fly an airplane</em><br>Which word means about the SAME as <b>ambition</b>?",
        options: ["aspiration", "barrier", "uproar", "drawback"],
        answer: 0,
        explain: "'Ambition' = a strong goal or aspiration.",
        word: "ambition"
      },
      {
        q: "<em>a sudden <b>uproar</b> in the cafeteria</em><br>Which word means about the SAME as <b>uproar</b>?",
        options: ["serenity", "commotion", "calmness", "merit"],
        answer: 1,
        explain: "'Uproar' = a loud disturbance or commotion.",
        word: "uproar"
      },
      {
        q: "<em>a stone <b>barrier</b> across the road</em><br>Which word means about the SAME as <b>barrier</b>?",
        options: ["entrance", "passageway", "obstacle", "advantage"],
        answer: 2,
        explain: "'Barrier' = something that blocks the way, like an obstacle.",
        word: "barrier"
      }
    ],

    ant: [
      {
        q: "<em>a <b>distant</b> ship on the horizon</em><br>Which word means the OPPOSITE of <b>distant</b>?",
        options: ["remote", "close", "cold", "separated"],
        answer: 1,
        explain: "'Distant' = far away; the opposite is 'close.'",
        word: "distant"
      },
      {
        q: "<em>a cold and <b>dreary</b> November morning</em><br>Which word means the OPPOSITE of <b>dreary</b>?",
        options: ["bleak", "depressing", "cheery", "wretched"],
        answer: 2,
        explain: "'Dreary' = gloomy; 'cheery' is the opposite.",
        word: "dreary"
      },
      {
        q: "<em>an <b>abundant</b> supply of fresh apples</em><br>Which word means the OPPOSITE of <b>abundant</b>?",
        options: ["plentiful", "scarce", "bountiful", "sufficient"],
        answer: 1,
        explain: "'Abundant' = plenty; 'scarce' = not enough.",
        word: "abundant"
      },
      {
        q: "<em>an <b>amateur</b> photographer on her first hike</em><br>Which word means the OPPOSITE of <b>amateur</b>?",
        options: ["beginner", "expert", "layman", "nonprofessional"],
        answer: 1,
        explain: "'Amateur' = beginner; 'expert' is the opposite.",
        word: "amateur"
      },
      {
        q: "<em>a <b>defiant</b> look on the puppy's face</em><br>Which word means the OPPOSITE of <b>defiant</b>?",
        options: ["rebellious", "uncooperative", "obedient", "disobedient"],
        answer: 2,
        explain: "'Defiant' = refusing to obey; 'obedient' is the opposite.",
        word: "defiant"
      },
      {
        q: "<em>an <b>elegant</b> silk gown at the dinner party</em><br>Which word means the OPPOSITE of <b>elegant</b>?",
        options: ["graceful", "refined", "crude", "stylish"],
        answer: 2,
        explain: "'Elegant' = refined and graceful; 'crude' is the opposite.",
        word: "elegant"
      },
      {
        q: "<em>a <b>tiresome</b> wait at the doctor's office</em><br>Which word means the OPPOSITE of <b>tiresome</b>?",
        options: ["boring", "interesting", "annoying", "irritating"],
        answer: 1,
        explain: "'Tiresome' = boring; 'interesting' is the opposite.",
        word: "tiresome"
      },
      {
        q: "<em>packed <b>sufficient</b> water for the long hike</em><br>Which word means the OPPOSITE of <b>sufficient</b>?",
        options: ["plenty", "ample", "inadequate", "adequate"],
        answer: 2,
        explain: "'Sufficient' = enough; 'inadequate' = not enough.",
        word: "sufficient"
      },
      {
        q: "<em>filters that <b>purify</b> the drinking water</em><br>Which word means the OPPOSITE of <b>purify</b>?",
        options: ["cleanse", "filter", "pollute", "refine"],
        answer: 2,
        explain: "'Purify' = to clean; 'pollute' = to make dirty.",
        word: "purify"
      },
      {
        q: "<em>a <b>wretched</b> kitten shivering in the rain</em><br>Which word means the OPPOSITE of <b>wretched</b>?",
        options: ["dreadful", "depressed", "happy", "dejected"],
        answer: 2,
        explain: "'Wretched' = very unhappy; 'happy' is the opposite.",
        word: "wretched"
      }
    ],

    paragraph: {
      intro: "Read the paragraph and choose the BEST vocabulary word for each blank. Each blank has four choices.",
      text:
        "Last Saturday our class went on a field trip to a [[1]] little village by a calm, [[2]] lake. " +
        "Our teacher said it was a [[3]] for us to visit such a beautiful place. " +
        "Before we left, the bus driver had to [[4]] the tires carefully to make sure they were safe. " +
        "On the trip, dark clouds began to [[5]] that a storm might come, so we sang loudly to [[6]] our spirits. " +
        "When we finally arrived, the sunlight made the lake [[7]] like a sheet of glass. " +
        "We had [[8]] snacks for everyone, and no one had to share. " +
        "On the way home, a funny story by our classmate caused [[9]] laughter that spread to the whole bus. " +
        "By the time we got back to school, the long, fun day had begun to [[10]] us, and several students fell asleep.",
      blanks: [
        { word: "picturesque", options: ["picturesque", "dreary", "wretched", "lame"], answer: 0, explain: "'Picturesque' fits 'beautiful little village.'" },
        { word: "tranquil", options: ["fearsome", "tranquil", "infectious", "defiant"], answer: 1, explain: "'Tranquil' = calm, peaceful — fits a calm lake." },
        { word: "privilege", options: ["barrier", "stunt", "privilege", "uproar"], answer: 2, explain: "'Privilege' = a special honor or opportunity." },
        { word: "inspect", options: ["absorb", "inspect", "boast", "kindle"], answer: 1, explain: "'Inspect' = to check carefully." },
        { word: "imply", options: ["imply", "negotiate", "purify", "predict"], answer: 0, explain: "Clouds 'imply' (hint) that a storm is coming." },
        { word: "kindle", options: ["exhaust", "stunt", "kindle", "suspend"], answer: 2, explain: "'Kindle' here = to stir up or awaken (spirits)." },
        { word: "glisten", options: ["glisten", "ripple", "slumber", "boast"], answer: 0, explain: "'Glisten' = to sparkle in the light." },
        { word: "abundant", options: ["lame", "wretched", "tiresome", "abundant"], answer: 3, explain: "'Abundant' = plenty — so no one had to share." },
        { word: "infectious", options: ["dreary", "infectious", "formal", "distant"], answer: 1, explain: "'Infectious' laughter spreads to others." },
        { word: "exhaust", options: ["exhaust", "purify", "inquire", "locate"], answer: 0, explain: "'Exhaust' = to tire out — long fun day tires students." }
      ]
    }
  },

  /* ============================================================
     FINAL REVIEW 2
     ============================================================ */
  q2: {
    title: "VW Final Review 2",
    subtitle: "Mix Review — Units 14 to 18",
    emoji: "📖",

    fill: [
      {
        q: "Blinking when something flies near your eye is an ___ reaction.",
        options: ["admirable", "deliberate", "automatic", "wretched"],
        answer: 2,
        explain: "'Automatic' means happening without thinking — like a reflex.",
        word: "automatic"
      },
      {
        q: "Running up ten flights of stairs will ___ even a strong athlete.",
        options: ["kindle", "exhaust", "predict", "absorb"],
        answer: 1,
        explain: "'Exhaust' means to tire out completely.",
        word: "exhaust"
      },
      {
        q: "She wore a ___ dress to the wedding.",
        options: ["formal", "casual", "lame", "tiresome"],
        answer: 0,
        explain: "'Formal' = proper, official — fits a wedding.",
        word: "formal"
      },
      {
        q: "I called the store to ___ about the price of the book.",
        options: ["boast", "imply", "inquire", "stunt"],
        answer: 2,
        explain: "'Inquire' means to ask a question.",
        word: "inquire"
      },
      {
        q: "If you break the rules, the coach may ___ your spot on the team.",
        options: ["revoke", "kindle", "absorb", "ripple"],
        answer: 0,
        explain: "'Revoke' means to take back or cancel.",
        word: "revoke"
      },
      {
        q: "The ballerina danced across the stage with great ___.",
        options: ["uproar", "grace", "barrier", "ambition"],
        answer: 1,
        explain: "'Grace' = elegance and beauty of movement.",
        word: "grace"
      },
      {
        q: "We had to ___ the game when it began to rain heavily.",
        options: ["resume", "kindle", "suspend", "purify"],
        answer: 2,
        explain: "'Suspend' here means to pause or halt.",
        word: "suspend"
      },
      {
        q: "We used a map to ___ the hidden treasure in the park.",
        options: ["locate", "boast", "stunt", "revoke"],
        answer: 0,
        explain: "'Locate' means to find the position of something.",
        word: "locate"
      },
      {
        q: "When I tossed a pebble into the pond, it made a small ___ on the water.",
        options: ["uproar", "barrier", "ripple", "channel"],
        answer: 2,
        explain: "'Ripple' = a small wave that spreads outward.",
        word: "ripple"
      },
      {
        q: "It is hard to ___ of a world without computers.",
        options: ["penalize", "conceive", "negotiate", "kindle"],
        answer: 1,
        explain: "'Conceive' here means to imagine or form an idea.",
        word: "conceive"
      }
    ],

    syn: [
      {
        q: "<em>used dry leaves to <b>kindle</b> the campfire</em><br>Which word means about the SAME as <b>kindle</b>?",
        options: ["extinguish", "ignite", "smother", "dampen"],
        answer: 1,
        explain: "'Kindle' = to start a fire — 'ignite' is a synonym.",
        word: "kindle"
      },
      {
        q: "<em>the painful <b>separation</b> of two close friends</em><br>Which word means about the SAME as <b>separation</b>?",
        options: ["division", "connection", "unification", "attachment"],
        answer: 0,
        explain: "'Separation' = a split or division.",
        word: "separation"
      },
      {
        q: "<em>the <b>privilege</b> of meeting a famous author</em><br>Which word means about the SAME as <b>privilege</b>?",
        options: ["barrier", "burden", "honor", "drawback"],
        answer: 2,
        explain: "'Privilege' = an honor or special advantage.",
        word: "privilege"
      },
      {
        q: "<em>her height gave her an <b>advantage</b> on the court</em><br>Which word means about the SAME as <b>advantage</b>?",
        options: ["disadvantage", "drawback", "benefit", "uproar"],
        answer: 2,
        explain: "'Advantage' = a benefit that helps you.",
        word: "advantage"
      },
      {
        q: "<em>a project of true scientific <b>merit</b></em><br>Which word means about the SAME as <b>merit</b>?",
        options: ["fault", "inferiority", "worth", "barrier"],
        answer: 2,
        explain: "'Merit' = value or worth.",
        word: "merit"
      },
      {
        q: "<em>boil the water to <b>purify</b> it before drinking</em><br>Which word means about the SAME as <b>purify</b>?",
        options: ["pollute", "cleanse", "dirty", "muddy"],
        answer: 1,
        explain: "'Purify' = to clean or filter.",
        word: "purify"
      },
      {
        q: "<em>the bear began to <b>slumber</b> for the winter</em><br>Which word means about the SAME as <b>slumber</b>?",
        options: ["arouse", "awake", "stir", "doze"],
        answer: 3,
        explain: "'Slumber' = to sleep; 'doze' is a synonym.",
        word: "slumber"
      },
      {
        q: "<em>an <b>ideal</b> day for a picnic in the park</em><br>Which word means about the SAME as <b>ideal</b>?",
        options: ["practical", "real", "perfect", "ordinary"],
        answer: 2,
        explain: "'Ideal' = exactly right or flawless — like 'perfect.'",
        word: "ideal"
      },
      {
        q: "<em>dewdrops that <b>glisten</b> on the morning grass</em><br>Which word means about the SAME as <b>glisten</b>?",
        options: ["sparkle", "dampen", "muddy", "extinguish"],
        answer: 0,
        explain: "'Glisten' and 'sparkle' both mean to shine.",
        word: "glisten"
      },
      {
        q: "<em>her <b>infectious</b> laughter spread through the class</em><br>Which word means about the SAME as <b>infectious</b>?",
        options: ["awkward", "tongue-tied", "contagious", "dreary"],
        answer: 2,
        explain: "'Infectious' = spreading easily; 'contagious' is a synonym.",
        word: "infectious"
      }
    ],

    ant: [
      {
        q: "<em>an <b>automatic</b> blink when dust flies near her eye</em><br>Which word means the OPPOSITE of <b>automatic</b>?",
        options: ["involuntary", "instinctive", "deliberate", "mechanical"],
        answer: 2,
        explain: "'Automatic' = without thinking; 'deliberate' = with thinking.",
        word: "automatic"
      },
      {
        q: "<em>a single match to <b>kindle</b> the bonfire</em><br>Which word means the OPPOSITE of <b>kindle</b>?",
        options: ["ignite", "extinguish", "awaken", "excite"],
        answer: 1,
        explain: "'Kindle' = to start a fire; 'extinguish' = to put out a fire.",
        word: "kindle"
      },
      {
        q: "<em>a <b>formal</b> dress for the wedding ceremony</em><br>Which word means the OPPOSITE of <b>formal</b>?",
        options: ["proper", "official", "casual", "fancy"],
        answer: 2,
        explain: "'Formal' = proper/fancy; 'casual' is the opposite.",
        word: "formal"
      },
      {
        q: "<em>the referee will <b>penalize</b> any rough play</em><br>Which word means the OPPOSITE of <b>penalize</b>?",
        options: ["chasten", "discipline", "punish", "reward"],
        answer: 3,
        explain: "'Penalize' = to punish; the opposite is 'reward.'",
        word: "penalize"
      },
      {
        q: "<em>a tall fence built as a <b>barrier</b> around the yard</em><br>Which word means the OPPOSITE of <b>barrier</b>?",
        options: ["wall", "obstacle", "passageway", "obstruction"],
        answer: 2,
        explain: "'Barrier' blocks the way; a 'passageway' allows passage.",
        word: "barrier"
      },
      {
        q: "<em>the dragon's <b>fearsome</b> shadow on the wall</em><br>Which word means the OPPOSITE of <b>fearsome</b>?",
        options: ["terrifying", "scary", "horrifying", "reassuring"],
        answer: 3,
        explain: "'Fearsome' = causing fear; 'reassuring' = calming.",
        word: "fearsome"
      },
      {
        q: "<em>the coach may <b>revoke</b> her spot on the team</em><br>Which word means the OPPOSITE of <b>revoke</b>?",
        options: ["remove", "repeal", "give", "rescind"],
        answer: 2,
        explain: "'Revoke' = to take back; 'give' = the opposite.",
        word: "revoke"
      },
      {
        q: "<em>had to <b>suspend</b> the game during the storm</em><br>Which word means the OPPOSITE of <b>suspend</b>?",
        options: ["postpone", "halt", "continue", "delay"],
        answer: 2,
        explain: "'Suspend' = to stop or pause; 'continue' = the opposite.",
        word: "suspend"
      },
      {
        q: "<em>a sudden <b>uproar</b> in the school cafeteria</em><br>Which word means the OPPOSITE of <b>uproar</b>?",
        options: ["commotion", "disturbance", "calmness", "disorder"],
        answer: 2,
        explain: "'Uproar' = loud disorder; 'calmness' is the opposite.",
        word: "uproar"
      },
      {
        q: "<em>a wolf is a <b>predator</b> of the forest</em><br>Which word means the OPPOSITE of <b>predator</b>?",
        options: ["bandit", "thief", "prey", "hunter"],
        answer: 2,
        explain: "A 'predator' hunts; 'prey' is what gets hunted.",
        word: "predator"
      }
    ],

    paragraph: {
      intro: "Read the paragraph and choose the BEST vocabulary word for each blank. Each blank has four choices.",
      text:
        "Long ago in a [[1]] mountain village, a young girl named Mei had one big [[2]]: to become a famous scientist. " +
        "Every morning before school, she would [[3]] her notebook for any small clue she had missed the day before. " +
        "One quiet evening, a [[4]] storm rolled in, and lightning began to [[5]] across the dark sky. " +
        "Mei did not let the bad weather act as a [[6]] to her plans. " +
        "Instead, she chose to [[7]] her free hours in reading more science books. " +
        "Her family was very [[8]] of her hard work and gave her a special award. " +
        "Mei did not [[9]] about her award; she humbly thanked her parents and teachers. " +
        "That night, with [[10]] food in her belly and pride in her heart, Mei went to sleep dreaming of new discoveries.",
      blanks: [
        { word: "distant", options: ["distant", "formal", "lame", "tiresome"], answer: 0, explain: "'Distant' = far away — fits a remote mountain village." },
        { word: "ambition", options: ["barrier", "ambition", "uproar", "ripple"], answer: 1, explain: "'Ambition' = a strong goal." },
        { word: "inspect", options: ["boast", "purify", "inspect", "revoke"], answer: 2, explain: "'Inspect' = to check carefully." },
        { word: "fearsome", options: ["tranquil", "fearsome", "elegant", "abundant"], answer: 1, explain: "'Fearsome' = scary — fits a storm." },
        { word: "ripple", options: ["slumber", "stunt", "ripple", "kindle"], answer: 2, explain: "Lightning can 'ripple' (spread in waves) across the sky." },
        { word: "barrier", options: ["barrier", "advantage", "merit", "privilege"], answer: 0, explain: "'Barrier' = something that blocks plans." },
        { word: "invest", options: ["exhaust", "invest", "suspend", "revoke"], answer: 1, explain: "'Invest' time = to spend time on something useful." },
        { word: "admirable", options: ["dreary", "wretched", "admirable", "lame"], answer: 2, explain: "Pride in her hard work — 'admirable' fits." },
        { word: "boast", options: ["boast", "inquire", "predict", "absorb"], answer: 0, explain: "She did not 'boast' (brag) about the award." },
        { word: "sufficient", options: ["insufficient", "sufficient", "scarce", "inadequate"], answer: 1, explain: "'Sufficient' food = enough food in her belly." }
      ]
    }
  }
};
