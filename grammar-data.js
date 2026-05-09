const UNITS = {

  /* -------- UNIT 4: ADJECTIVES & ADVERBS -------- */
  u4: {
    title: "Unit 4",
    subtitle: "Adjectives & Adverbs",
    emoji: "✨",
    cssClass: "u4",
    topics: {
      adj_kind: {
        title: "Adjectives: What Kind",
        emoji: "🎨",
        lesson: [
          "Words that describe nouns are called <strong>adjectives</strong>. Many adjectives tell <strong>what kind</strong>.",
          "<div class='example'>The <b>bushy</b> trees. &nbsp; A <b>yellow</b> butterfly. &nbsp; A <b>frisky</b> kitten. &nbsp; A <b>squeaky</b> noise.</div>",
          "Adjectives make sentences more interesting — they give details that make the meaning clearer!<br><br>" +
          "An adjective usually comes <strong>before</strong> the noun it describes:<br>" +
          "<div class='example'>The <b>loud</b> sirens woke me up. &nbsp; The <b>old</b> barn was on fire.</div>"
        ],
        quiz: [
          { q: "How many what-kind adjectives are in this sentence? 'A tall, strong oak tree stood in the dusty field.'", options: ["one", "two", "three", "four"], answer: 2, explain: "'Tall,' 'strong,' and 'dusty' are all what-kind adjectives. 'Oak' here is acting as a noun naming the tree." },
          { q: "Find the what-kind adjective (NOT a how-many adjective): 'Six fluffy puppies played in the yard.'", options: ["Six", "fluffy", "puppies", "yard"], answer: 1, explain: "'Six' tells how many. 'Fluffy' tells what kind. The question asks for what-kind." },
          { q: "Which sentence has NO what-kind adjective?", options: ["The shiny coin rolled away.", "Many birds flew south.", "A grumpy old man waved.", "She bought sour candy."], answer: 1, explain: "In 'Many birds flew south,' 'many' tells how many — there is no what-kind adjective. The other sentences have shiny, grumpy/old, and sour." },
          { q: "Which word is an adjective in 'The garden was beautiful'?", options: ["The", "garden", "was", "beautiful"], answer: 3, explain: "Tricky — adjectives usually come BEFORE the noun, but they can also come AFTER a linking verb like 'was.' 'Beautiful' describes the garden." },
          { q: "Find ALL the what-kind adjectives: 'The brave little boy climbed the steep, rocky hill.'", options: ["brave, little, steep, rocky", "brave, boy, hill", "little, climbed, steep", "boy, hill, rocky"], answer: 0, explain: "Brave, little, steep, and rocky all tell what kind. Boy and hill are nouns; climbed is a verb." }
        ]
      },
      adj_many: {
        title: "Adjectives: How Many",
        emoji: "🔢",
        lesson: [
          "Adjectives can also tell <strong>how many</strong>: one, two, three, four, some, many, several, a few, eight.",
          "<div class='example'><b>Two</b> bears waded in a pool.<br><b>Some</b> lions were in the cage.<br><b>Four</b> elephants drank water.<br><b>A few</b> monkeys made faces at us.</div>",
          "A how-many adjective comes <strong>before</strong> the noun it describes. These are also called <strong>number adjectives</strong>!"
        ],
        quiz: [
          { q: "Which sentence has BOTH a how-many AND a what-kind adjective?", options: ["The dog barked loudly.", "Three loud dogs barked.", "The loud dog barked.", "Dogs barked at me."], answer: 1, explain: "'Three' = how many; 'loud' = what kind. Both kinds of adjectives appear before 'dogs.'" },
          { q: "Which word is a how-many adjective in: 'The weary travelers passed several busy towns.'?", options: ["weary", "several", "busy", "passed"], answer: 1, explain: "'Several' tells how many. 'Weary' and 'busy' tell what kind — those are different." },
          { q: "Which of these can ONLY be used as a how-many adjective?", options: ["a", "many", "old", "the"], answer: 1, explain: "'Many' tells how many. 'A' and 'the' are articles (special adjectives). 'Old' tells what kind." },
          { q: "How many how-many adjectives are in this sentence? 'Two students brought several books and a few snacks.'", options: ["one", "two", "three", "four"], answer: 2, explain: "'Two,' 'several,' and 'a few' all tell how many — that's three how-many adjectives." },
          { q: "Which word in 'I bought eight ripe bananas' is a how-many adjective?", options: ["I", "eight", "ripe", "bananas"], answer: 1, explain: "'Eight' is a number — it's the how-many adjective. 'Ripe' tells what kind." }
        ]
      },
      adj_compare: {
        title: "Comparing Adjectives (-er / -est)",
        emoji: "⚖️",
        lesson: [
          "Adjectives can show how things are alike or different. We can <strong>compare</strong> with adjectives!",
          "Add <strong>-er</strong> to compare <strong>two</strong> persons, places, or things:<br><div class='example'>Mars is a <b>small</b>er planet than Jupiter.</div>",
          "Add <strong>-est</strong> to compare <strong>more than two</strong> persons, places, or things:<br><div class='example'>Pluto is the <b>small</b>est planet of all three.<br>Mercury is the second <b>small</b>est planet.</div>"
        ],
        quiz: [
          { q: "Choose: 'Today is ___ than yesterday.' (happy — careful with the spelling!)", options: ["happyer", "happier", "more happy", "happyest"], answer: 1, explain: "When an adjective ends in a consonant + y, change y to i, then add -er: happy → happier." },
          { q: "Choose: 'My puppy is the ___ of all our pets.' (cute — careful with the silent e!)", options: ["cuter", "cutest", "cuteer", "cuteest"], answer: 1, explain: "When an adjective ends in a silent e, drop the e before adding -est: cute → cutest (not cuteest)." },
          { q: "Choose: 'This puzzle is ___ than the other one.' (difficult)", options: ["difficulter", "more difficult", "most difficult", "difficultest"], answer: 1, explain: "Long adjectives (3+ syllables like 'difficult') use 'more' for two things and 'most' for three or more. Don't add -er or -est." },
          { q: "Which sentence is correct?", options: ["She is the most tallest girl in class.", "She is the tallest girl in class.", "She is more taller than her sister.", "She is most tall in class."], answer: 1, explain: "Use ONE comparing form, not two. 'Tallest' alone is correct — never 'most tallest.'" },
          { q: "Choose: 'My grade is ___ than last month.' (good — this one is irregular!)", options: ["gooder", "more good", "better", "best"], answer: 2, explain: "'Good' is irregular: good → better → best. Comparing two things uses 'better,' not 'gooder.'" }
        ]
      },
      articles: {
        title: "Articles: a, an, the",
        emoji: "📄",
        lesson: [
          "The words <strong>a</strong>, <strong>an</strong>, and <strong>the</strong> are special adjectives called <strong>articles</strong>.",
          "Use <strong>a</strong> before words that begin with a <strong>consonant sound</strong>:<br><div class='example'>a long line &nbsp; a farm &nbsp; a funny joke &nbsp; a smart dog</div>",
          "Use <strong>an</strong> before words that begin with a <strong>vowel sound</strong> (a, e, i, o, u):<br><div class='example'>an apple &nbsp; an egg &nbsp; an old farm &nbsp; an hour &nbsp; an owl</div>",
          "Use <strong>the</strong> before both singular AND plural nouns:<br><div class='example'>the gate &nbsp; the tickets &nbsp; the children</div>"
        ],
        quiz: [
          { q: "Choose: 'It was ___ honest mistake.' (Careful — the h is silent!)", options: ["a", "an", "the", "no article"], answer: 1, explain: "'Honest' SOUNDS like it starts with 'on' — the h is silent. The first sound is a vowel, so use 'an.'" },
          { q: "Choose: 'My uncle teaches at ___ university.' (Careful — what sound does it START with?)", options: ["a", "an", "the", "no article"], answer: 0, explain: "'University' starts with a 'yoo' sound — that's a CONSONANT sound, not a vowel sound. Use 'a,' not 'an.'" },
          { q: "Choose the sentence with the correct article.", options: ["I waited an hour to see a unicorn.", "I waited a hour to see an unicorn.", "I waited an hour to see an unicorn.", "I waited a hour to see a unicorn."], answer: 0, explain: "'Hour' has a silent h → use 'an.' 'Unicorn' starts with a 'yoo' sound (consonant sound) → use 'a.'" },
          { q: "Which sentence uses articles correctly?", options: ["She bought a apple and an orange.", "She bought an apple and an orange.", "She bought an apple and a orange.", "She bought a apple and a orange."], answer: 1, explain: "Both 'apple' and 'orange' start with vowel sounds, so both need 'an.'" },
          { q: "Choose: 'He told ___ exciting story about ___ huge dragon.'", options: ["an / an", "a / a", "an / a", "a / an"], answer: 2, explain: "'Exciting' starts with a vowel sound → 'an.' 'Huge' starts with a consonant 'h' sound → 'a.' Be careful with h-words: it depends on the SOUND." }
        ]
      },
      adv_how: {
        title: "Adverbs: How",
        emoji: "🏃",
        lesson: [
          "A word that describes a verb is called an <strong>adverb</strong>. Adverbs can tell <strong>how</strong> an action happens.",
          "<div class='example'>Kim walked up to the horse <b>bravely</b>. (walked how?)<br>She <b>carefully</b> sat on the horse. (sat how?)<br>The horse stood <b>quietly</b>. (stood how?)</div>",
          "Tip: Most adverbs that tell <strong>how</strong> end in <strong>-ly</strong>!<br><div class='example'>swiftly &nbsp; silently &nbsp; noisily &nbsp; easily &nbsp; slowly &nbsp; carefully &nbsp; happily &nbsp; bravely</div>",
          "Adverbs can come <strong>before or after</strong> the verb they describe."
        ],
        quiz: [
          { q: "Choose the correct word: 'The team played ___ in the game.'", options: ["good", "well", "best", "goodly"], answer: 1, explain: "Use 'well' (an adverb) to describe HOW they played. 'Good' is an adjective (it describes nouns) — 'a good game,' but 'played WELL.'" },
          { q: "Which word is the adverb in: 'The careful student answered correctly.'?", options: ["careful", "student", "answered", "correctly"], answer: 3, explain: "Tricky! 'Careful' ends in -ful (adjective describing 'student'). 'Correctly' is the -ly adverb describing HOW she answered." },
          { q: "Which -ly word is NOT an adverb?", options: ["quickly", "slowly", "friendly", "loudly"], answer: 2, explain: "'Friendly' ends in -ly but it's an ADJECTIVE (a friendly dog). Not every -ly word is an adverb — be careful!" },
          { q: "In 'She quietly opened the heavy door,' which word does 'quietly' describe?", options: ["She", "opened", "heavy", "door"], answer: 1, explain: "Adverbs describe verbs. 'Quietly' tells HOW she opened the door — so it describes the verb 'opened.'" },
          { q: "Choose the correct adverb: 'He spoke ___ so everyone could hear.'", options: ["loud", "louder", "loudly", "loudest"], answer: 2, explain: "Use the -ly adverb 'loudly' to tell HOW he spoke. 'Loud' is an adjective; 'louder/loudest' compare." }
        ]
      },
      adv_when_where: {
        title: "Adverbs: When & Where",
        emoji: "🗺️",
        lesson: [
          "Adverbs can also tell <strong>when</strong> and <strong>where</strong> an action happens.",
          "Adverbs that tell <strong>when</strong>:<br><div class='example'>soon &nbsp; then &nbsp; today &nbsp; tomorrow &nbsp; yesterday &nbsp; always &nbsp; first &nbsp; later &nbsp; next &nbsp; often</div>",
          "Adverbs that tell <strong>where</strong>:<br><div class='example'>here &nbsp; nearby &nbsp; out &nbsp; there &nbsp; upstairs &nbsp; ahead &nbsp; around &nbsp; away &nbsp; everywhere &nbsp; far</div>",
          "<div class='example'><b>Yesterday</b> my family drove to Florida. (when)<br>We arrived <b>there</b> at night. (where)<br>Today we will tour the city. (when)</div>"
        ],
        quiz: [
          { q: "In 'Tomorrow we will hike outside happily,' identify the WHEN adverb.", options: ["Tomorrow", "hike", "outside", "happily"], answer: 0, explain: "'Tomorrow' tells WHEN. 'Outside' tells where. 'Happily' tells how. There are three different kinds of adverbs in this sentence!" },
          { q: "Which sentence has TWO adverbs (one when, one where)?", options: ["She runs quickly.", "He arrived early today.", "Yesterday I played there.", "Birds fly south."], answer: 2, explain: "'Yesterday' tells when, and 'there' tells where — two adverbs of different kinds." },
          { q: "Which word is NOT an adverb of when?", options: ["soon", "later", "nearby", "always"], answer: 2, explain: "'Nearby' tells WHERE, not when. Soon, later, and always all answer the question 'when?'." },
          { q: "Tell what kind of adverb 'sometimes' is: 'I sometimes visit my grandma on weekends.'", options: ["how", "when", "where", "what kind"], answer: 1, explain: "'Sometimes' tells when (how often) — it's a when-adverb." },
          { q: "Which sentence does NOT contain a where-adverb?", options: ["The kids ran outside.", "She looked everywhere for it.", "We hiked far up the trail.", "He answered me politely."], answer: 3, explain: "'Politely' tells how, not where. Outside, everywhere, and far all tell where." }
        ]
      },
      homophones: {
        title: "To, Two, Too",
        emoji: "🔀",
        lesson: [
          "The words <strong>to</strong>, <strong>two</strong>, and <strong>too</strong> sound exactly alike but have different meanings!",
          "<div class='example'><b>to</b> = in the direction of: I went <b>to</b> school.<br><b>two</b> = the number 2: I ate <b>two</b> plums.<br><b>too</b> = also OR more than enough: I ate pears, <b>too</b>. / I ate <b>too</b> much.</div>",
          "Tip: If you can replace it with the number <strong>2</strong>, use <em>two</em>. If it means <strong>also</strong> or <strong>too much</strong>, use <em>too</em>. Otherwise, use <em>to</em>!"
        ],
        quiz: [
          { q: "Choose: 'We walked ___ the store ___ buy ___ apples.'", options: ["to / to / two", "too / two / to", "two / too / to", "to / too / two"], answer: 0, explain: "Walked TO the store, TO buy (purpose), TWO apples (number 2). All three to/two/too in one sentence!" },
          { q: "Which sentence is correct?", options: ["I went too the store too buy two pencils.", "I went to the store to buy too pencils.", "I went to the store to buy two pencils.", "I went two the store to buy two pencils."], answer: 2, explain: "Direction = to. Purpose = to. Number 2 = two. The other ones swap them around incorrectly." },
          { q: "Choose: 'These cookies are ___ sweet, but I want ___ more.'", options: ["to / two", "too / two", "two / too", "too / to"], answer: 1, explain: "'Too sweet' = more than enough. 'Two more' = the number 2." },
          { q: "Which sentence uses 'too' to mean 'also'?", options: ["The bag is too heavy.", "He runs too fast.", "I want to go too.", "There are too many."], answer: 2, explain: "'I want to go too' means 'I want to go ALSO.' The others mean 'more than enough.'" },
          { q: "Choose: 'My brother is ___ and I am ___.'", options: ["two / two", "too / too", "two / to", "to / too"], answer: 0, explain: "Both blanks are filled with the AGE/NUMBER 2: 'My brother is two years old, and I am two.' Use 'two.'" }
        ]
      }
    },
    challenge_questions: [
      { q: "Read this sentence: 'The exhausted, dusty hikers trudged slowly up the steep trail.' How many adjectives and how many adverbs are there?", options: ["3 adjectives, 1 adverb", "2 adjectives, 2 adverbs", "4 adjectives, 0 adverbs", "1 adjective, 3 adverbs"], answer: 0, explain: "Adjectives: 'exhausted,' 'dusty,' 'steep' (describing nouns). Adverb: 'slowly' (describing the verb 'trudged'). 'The' and 'up the trail' aren't single adjectives or adverbs in this count." },
      { q: "Which revision adds the MOST detail using adjectives and adverbs without making the sentence wordy? Original: 'The dog barked.'", options: ["The dog barked, very loudly indeed.", "The huge brown dog barked angrily at the stranger.", "The dog with brown fur was barking loud.", "Loudly, the dog, with its loud bark, barked."], answer: 1, explain: "Option B adds three adjectives ('huge,' 'brown,' 'stranger' as object) and an adverb ('angrily') concisely. The others are wordy or grammatically clumsy." },
      { q: "Which sentence uses 'good' and 'well' correctly?", options: ["She did good on her test and feels good about it.", "She did well on her test and feels well about it.", "She did well on her test and feels good about it.", "She did good on her test and feels well about it."], answer: 2, explain: "'Did well' uses the adverb 'well' (how she did). 'Feels good' uses the adjective 'good' (her emotional state — feels happy). 'Feels well' would mean she's not sick." },
      { q: "Which adjective works as both a what-kind AND a how-many adjective depending on context?", options: ["several", "blue", "little", "happy"], answer: 2, explain: "'Little' can mean small (what kind: 'a little dog') OR a small amount/few (how many: 'little time left'). The other options work as just one type." },
      { q: "In the sentence 'Suddenly, three frightened children ran inside,' which word does 'suddenly' modify?", options: ["children", "frightened", "ran", "the whole sentence"], answer: 2, explain: "'Suddenly' is an adverb of HOW/WHEN. It modifies the verb 'ran.' Trick: it sits at the front of the sentence, but it still describes the action." },
      { q: "Choose the BEST adjective comparison: 'Of all three of my pets, my cat is the ___ companion.' (loyal)", options: ["loyaler", "more loyal", "loyalest", "most loyal"], answer: 3, explain: "'Loyal' has two syllables but doesn't take -er/-est smoothly. With three pets (more than two), use 'most.' 'Most loyal' is the standard form." },
      { q: "Which sentence has the article-error pattern 'a' used before a vowel SOUND?", options: ["She wore a red hat.", "I waited for an hour.", "He saw a unicorn.", "It was a easy task."], answer: 3, explain: "'Easy' starts with the vowel sound 'ee' — needs 'an,' not 'a.' The other sentences are correct: 'red' has consonant sound, 'hour' has silent h (vowel sound → 'an'), 'unicorn' starts with 'yoo' (consonant sound → 'a')." },
      { q: "If you wanted to make this sentence sound MORE intense, which adverb fits best? 'The wind blew ___ during the storm.'", options: ["a little", "fairly", "fiercely", "kind of"], answer: 2, explain: "'Fiercely' adds the most intensity. 'A little,' 'fairly,' and 'kind of' all weaken the wind's strength — wrong tone for 'storm.'" },
      { q: "Which sentence shows that 'fast' can be BOTH an adjective and an adverb?", options: ["She runs fast and is a fast runner.", "She runs fastly and is a fast runner.", "She runs fast and is a fastly runner.", "She runs faster than a fast."], answer: 0, explain: "'Fast runner' = adjective describing 'runner.' 'Runs fast' = adverb describing 'runs.' 'Fastly' isn't a word — 'fast' itself is both." },
      { q: "Read this sentence: 'I walked carefully across the icy bridge yesterday.' Which describes the structure correctly?", options: ["3 adverbs (carefully, icy, yesterday)", "2 adverbs (carefully, yesterday) + 1 adjective (icy)", "1 adverb (carefully) + 2 adjectives (icy, yesterday)", "0 adverbs, 3 adjectives"], answer: 1, explain: "'Carefully' (how) and 'yesterday' (when) are adverbs. 'Icy' is an adjective describing 'bridge.' Common error: thinking 'yesterday' is an adjective." },
      { q: "Choose the MOST PRECISE adjective: 'The ___ kitten purred in my lap.'", options: ["good", "nice", "contented", "okay"], answer: 2, explain: "'Contented' precisely captures the kitten's state (happy and at peace). 'Good,' 'nice,' and 'okay' are vague and overused. Critical thinkers pick precise words." },
      { q: "Which sentence has a comparison error?", options: ["My backpack is heavier than yours.", "This puzzle is the most hardest one yet.", "She is the kindest person I know.", "Today is colder than yesterday."], answer: 1, explain: "Double comparison error: 'most hardest' uses TWO comparison forms. Correct: 'the hardest' OR 'the most difficult.'" },
      { q: "In 'The brave little tailor cleverly tricked the giant,' which word is NOT modifying anything else?", options: ["brave", "little", "cleverly", "tailor"], answer: 3, explain: "'Tailor' is a NOUN (the subject of the sentence). 'Brave' and 'little' modify it (adjectives). 'Cleverly' modifies the verb 'tricked.' The trick is recognizing 'tailor' as the noun being described, not a describer itself." },
      { q: "Which sentence uses 'too' to mean 'more than enough'?", options: ["I am tired, too.", "We bought two apples.", "She is too young to drive.", "He went to the store."], answer: 2, explain: "'Too young' = more than enough youth (excessively young). 'I am tired, too' means 'also.' The others are 'two' (number) and 'to' (direction)." },
      { q: "Pick the sentence where the adverb has been moved to a SURPRISING position for emphasis.", options: ["She quickly opened the door.", "Quickly, she opened the door.", "She opened the door quickly.", "All three are equally common."], answer: 1, explain: "Putting 'Quickly' at the very start with a comma is the most attention-grabbing. The other positions are common but less emphatic. Strong writers move adverbs purposefully." },
      { q: "Which adjective form is correct? 'Of the three desserts, the cake was ___.'", options: ["sweeter", "sweetest", "more sweet", "most sweet"], answer: 1, explain: "Comparing three things → use -est ending. 'Sweet' is short, so 'sweetest' (not 'most sweet'). 'Sweeter' is only for two." },
      { q: "Which is the BEST adverb to describe HOW a guilty person might confess?", options: ["loudly", "happily", "reluctantly", "fast"], answer: 2, explain: "'Reluctantly' = unwillingly. A guilty person doesn't WANT to confess. 'Loudly' or 'happily' would be a strange match. Critical thinking matches mood to context." },
      { q: "Find the sentence with NO adjective or adverb error.", options: ["She runs more faster than I do.", "He played good in the game.", "We had a real exciting trip.", "The puppy yawned sleepily and curled up."], answer: 3, explain: "D is correct: 'sleepily' is an adverb modifying 'yawned.' A: 'more faster' (double comparison). B: should be 'played well.' C: should be 'really exciting' (adverb 'really,' not 'real')." },
      { q: "Choose: 'I have ___ much homework that I'll be busy ___ midnight.'", options: ["so / to", "so / too", "to / too", "too / two"], answer: 0, explain: "'So much' (how much homework). 'To midnight' (until midnight — direction in time). NOT 'too much' (which would imply too much for a different reason). Read carefully." },
      { q: "Which adjective adds the strongest negative emotion?", options: ["bad", "unpleasant", "dreadful", "not great"], answer: 2, explain: "'Dreadful' carries the strongest negative weight (very bad). 'Bad' and 'not great' are mild; 'unpleasant' is moderate. Word strength matters in writing." },
      { q: "What's the difference in meaning between 'an old, friendly dog' and 'a friendly old dog'?", options: ["No difference — both mean the same.", "The first focuses on 'old,' the second on 'friendly.'", "The first is grammatically wrong.", "Adjective order changes the meaning entirely."], answer: 1, explain: "Both are correct but the FIRST adjective gets slightly more emphasis. 'An old, friendly dog' highlights the age first; 'a friendly old dog' highlights friendliness. Order shifts emphasis, not meaning." },
      { q: "Which sentence uses 'good' as a noun rather than as an adjective?", options: ["She had a good day.", "The good outweighs the bad.", "It tastes good.", "He is a good friend."], answer: 1, explain: "'The good' here is a noun (the good things). The others use 'good' as an adjective describing nouns or as a state." },
      { q: "Which adverb does NOT modify a verb in its sentence?", options: ["She danced gracefully across the stage.", "The cake tastes very sweet.", "He arrived early to the party.", "They worked quietly all afternoon."], answer: 1, explain: "In 'The cake tastes very sweet,' 'very' modifies the ADJECTIVE 'sweet,' not a verb. Adverbs can modify adjectives too! The others modify verbs." },
      { q: "Which sentence shows the adverb modifying ANOTHER ADVERB?", options: ["She sang beautifully.", "She sang very beautifully.", "She is a beautiful singer.", "Beautifully, she sang."], answer: 1, explain: "'Very' modifies 'beautifully' (an adverb). So 'very' is an adverb modifying another adverb. Adverbs can modify verbs, adjectives, OR other adverbs!" },
      { q: "Read: 'The detective examined the strange clue carefully.' If you change 'strange' to 'tiny,' what changes?", options: ["The clue's mystery, but not its size.", "The clue's size, but not its mystery.", "Nothing — they mean the same.", "The verb changes too."], answer: 1, explain: "'Strange' suggests mystery/oddness. 'Tiny' suggests small size. Different adjectives shift meaning even if the rest of the sentence is identical. Critical readers notice this." },
      { q: "Which is correct? 'Of my five pets, the parrot talks ___.'", options: ["loudest", "most loud", "more loud", "louder"], answer: 0, explain: "Comparing more than two (five pets) → -est form. 'Loud' is short, so 'loudest' (not 'most loud'). 'Louder' is for two." },
      { q: "Which sentence is WORDY because of unnecessary adjectives/adverbs?", options: ["She ran fast.", "She ran very, very, very fast.", "She ran quickly.", "She sprinted."], answer: 1, explain: "Repeating 'very' three times is wordy. Strong writers use ONE precise word: 'sprinted' or 'extremely fast' instead of stacking 'very' repeatedly." },
      { q: "Which adjective best replaces 'good' in this sentence to add precision? 'It was a good speech that moved the audience.'", options: ["nice", "great", "stirring", "okay"], answer: 2, explain: "'Stirring' precisely means emotionally moving. 'Good,' 'nice,' 'great,' 'okay' are all vague. Critical word choice transforms ordinary writing." },
      { q: "Which sentence DOES NOT use 'too' correctly?", options: ["She is too tired to play.", "I want to come, too.", "He's eaten too many cookies.", "We went too the park yesterday."], answer: 3, explain: "'Too the park' is wrong — should be 'TO the park' (direction). The others use 'too' correctly: 'too tired' (excessively), 'come too' (also), 'too many' (excessively)." },
      { q: "Which BEST captures critical thinking about word order? 'The brown big dog barked.' vs. 'The big brown dog barked.'", options: ["Both are equally correct.", "The first is wrong because English usually orders adjectives by size before color.", "The second is wrong because color should come first.", "Order doesn't matter at all."], answer: 1, explain: "English follows adjective order rules (opinion, size, age, shape, color, origin, material). 'Big brown' follows the rule (size before color); 'brown big' breaks it. Native speakers feel this even without knowing the rule." }
    ]
  },

  /* -------- UNIT 5: CAPITALIZATION & PUNCTUATION -------- */
  u5: {
    title: "Unit 5",
    subtitle: "Capitalization & Punctuation",
    emoji: "✍️",
    cssClass: "u5",
    topics: {
      sentences: {
        title: "Correct Sentences",
        emoji: "📝",
        lesson: [
          "Every sentence begins with a <strong>capital letter</strong> and ends with an <strong>end mark</strong>.",
          "<div class='example'>A statement (telling sentence) ends with a <b>period (.)</b><br>A question ends with a <b>question mark (?)</b><br>An exclamation (strong feeling or command) ends with an <b>exclamation point (!)</b></div>",
          "<div class='example'>I will do my science report<b>.</b><br>What will you write about<b>?</b><br>The printer works so fast<b>!</b><br>Print the report out now<b>!</b></div>"
        ],
        quiz: [
          { q: "Which end mark fits BEST? 'Watch out for that car___'", options: [".", "?", "!", ","], answer: 2, explain: "This is a strong warning showing urgency — use an exclamation point (!). A period would be too calm." },
          { q: "Which sentence has TWO mistakes?", options: ["I like ice cream.", "i like ice cream", "I like ice cream", "I LIKE ICE CREAM."], answer: 1, explain: "'i like ice cream' is missing BOTH the capital I AND the period — two mistakes." },
          { q: "Which is a run-on sentence (needs to be split)?", options: ["The dog barked.", "The dog barked it was loud.", "The loud dog barked.", "Was the dog barking?"], answer: 1, explain: "A run-on smashes two complete sentences together with no end mark. It should be: 'The dog barked. It was loud.'" },
          { q: "Which end mark fits BEST? 'Did you finish your homework yet___'", options: [".", "?", "!", ","], answer: 1, explain: "'Did you…' starts a question. Even if it's a long sentence, it still ends with '?'." },
          { q: "Which sentence is punctuated correctly?", options: ["What a beautiful day?", "What a beautiful day.", "What a beautiful day!", "what a beautiful day!"], answer: 2, explain: "'What a beautiful day' shows strong feeling (excitement), not a question — use '!'. Also needs a capital W." }
        ]
      },
      proper_people: {
        title: "Capitalizing People's Names",
        emoji: "👤",
        lesson: [
          "<strong>Proper nouns</strong> name a specific person. They always begin with a <strong>capital letter</strong>.",
          "A person's full name: <strong>Brandon Jones</strong>, <strong>Rosa L. Martinez</strong><br>Family titles used AS someone's name: <strong>Uncle Henry</strong>, <strong>Grandma</strong>, <strong>Aunt Sue</strong>",
          "<div class='example'>Wrong: I invited <b>grandpa</b> to my party.<br>Right: I invited <b>Grandpa</b> to my party.</div>",
          "Pets' names are also proper nouns: <strong>Pokey</strong>, <strong>Buster</strong>, <strong>Freckles</strong>"
        ],
        quiz: [
          { q: "Which sentence is written correctly?", options: ["My Aunt Sue lives in Texas.", "My aunt Sue lives in Texas.", "My Aunt sue lives in Texas.", "my Aunt Sue lives in Texas."], answer: 0, explain: "'Aunt Sue' is used together as her name — both 'Aunt' and 'Sue' get capitals. 'My' is the start of the sentence, also capitalized." },
          { q: "Which sentence is correct?", options: ["I asked Grandma to bake cookies.", "I asked grandma to bake cookies.", "I asked my Grandma to bake cookies.", "I asked My Grandma to bake cookies."], answer: 0, explain: "When 'Grandma' is used AS her name (no 'my' before it), capitalize it. 'My grandma' (with 'my') doesn't get a capital." },
          { q: "Which sentence uses capital letters CORRECTLY?", options: ["I went to see dr. Smith yesterday.", "I went to see Dr. smith yesterday.", "I went to see Dr. Smith yesterday.", "I went to see dr. smith yesterday."], answer: 2, explain: "Both the title 'Dr.' and the last name 'Smith' need capitals when they go together." },
          { q: "In which sentence is 'mom' written CORRECTLY?", options: ["I love my Mom.", "Hi, mom!", "Will Mom drive us?", "my mom is a teacher."], answer: 2, explain: "'Mom' is used as her name in 'Will Mom drive us?' — capitalize. 'My Mom' should be 'my mom' (lowercase after 'my')." },
          { q: "Which name needs the MOST capital letters?", options: ["rosa l. martinez", "rosa l martinez", "Rosa l Martinez", "rosa L. martinez"], answer: 0, explain: "Three parts need capitals: Rosa, L., and Martinez. The correct form is 'Rosa L. Martinez' — the middle initial gets a capital and a period." }
        ]
      },
      proper_places: {
        title: "Capitalizing Places",
        emoji: "🌍",
        lesson: [
          "Names of <strong>specific places</strong> are proper nouns and begin with a <strong>capital letter</strong>.",
          "<div class='example'>Streets: <b>Park Street</b>, <b>Whitehall Drive</b><br>Cities: <b>New York City</b>, <b>Fort Lauderdale</b><br>States: <b>Texas</b>, <b>Florida</b>, <b>California</b><br>Countries: <b>Canada</b>, <b>Egypt</b>, <b>Korea</b></div>",
          "<div class='example'>Bodies of water &amp; parks: <b>Red River</b>, <b>Lake Erie</b>, <b>Whitehall Park</b><br>Schools: <b>Clarke Elementary School</b>, <b>Dillard High School</b></div>",
          "Do NOT capitalize general words: I go to <em>school</em>. We played in the <em>park</em>. But: I go to <strong>Clarke Elementary School</strong>. We played in <strong>Whitehall Park</strong>."
        ],
        quiz: [
          { q: "How many words in this sentence need to start with capitals? 'we visited rocky mountain national park last summer.'", options: ["one", "three", "four", "five"], answer: 3, explain: "'We' (start of sentence), 'Rocky,' 'Mountain,' 'National,' 'Park' — that's 5 words. Every important word in the park name is capitalized." },
          { q: "Which sentence is written CORRECTLY?", options: ["I live on Maple street in Boston.", "I live on Maple Street in Boston.", "I live on maple street in boston.", "I live on Maple Street in boston."], answer: 1, explain: "Both 'Maple Street' (full street name — both words capitalized) and 'Boston' (city) are proper nouns." },
          { q: "Which sentence has a capitalization MISTAKE?", options: ["We hiked in Yellowstone Park.", "She visited the Empire State Building.", "He drove across the Mississippi river.", "They flew to Paris."], answer: 2, explain: "'Mississippi River' — 'River' is part of the specific name, so it must be capitalized too: 'Mississippi River.'" },
          { q: "In 'We swam in the lake,' should 'lake' be capitalized? Why or why not?", options: ["Yes — all places are capitalized", "No — 'lake' here is a common noun (no specific name)", "Yes — water always gets a capital", "No — only people's names are capitalized"], answer: 1, explain: "'The lake' doesn't name a specific lake. If it said 'Lake Tahoe,' you would capitalize. General words stay lowercase." },
          { q: "Which sentence is written correctly?", options: ["I go to Lincoln Elementary school.", "I go to Lincoln elementary School.", "I go to lincoln elementary school.", "I go to Lincoln Elementary School."], answer: 3, explain: "The full school name is a proper noun — every important word ('Lincoln,' 'Elementary,' 'School') gets a capital." }
        ]
      },
      abbreviations: {
        title: "Abbreviations",
        emoji: "✂️",
        lesson: [
          "An <strong>abbreviation</strong> is a short way to write a word. Most abbreviations begin with a capital letter and end with a <strong>period</strong>.",
          "Days of the week:<br><div class='example'><b>Sun.</b> Mon. Tues. Wed. Thurs. Fri. Sat.</div>",
          "Months of the year (May, June, July have NO abbreviation):<br><div class='example'><b>Jan. Feb. Mar. Apr.</b> May June July <b>Aug. Sept. Oct. Nov. Dec.</b></div>",
          "Titles used with people's names:<br><div class='example'><b>Mr.</b> (Mister) &nbsp; <b>Mrs.</b> (married woman) &nbsp; <b>Ms.</b> (any woman) &nbsp; <b>Dr.</b> (Doctor)</div>"
        ],
        quiz: [
          { q: "Which sentence has TWO abbreviations written correctly?", options: ["Dr Lee gave a speech on Wed.", "dr. Lee gave a speech on wed.", "Dr. Lee gave a speech on Wed.", "Dr. Lee gave a speech on weds."], answer: 2, explain: "Both 'Dr.' (Doctor) and 'Wed.' (Wednesday) need a capital letter and a period." },
          { q: "Which abbreviation is INCORRECT?", options: ["Sept. for September", "Mar. for March", "Jul. for July", "Feb. for February"], answer: 2, explain: "May, June, and July do NOT have abbreviations — they're already short enough to write fully." },
          { q: "What is the correct abbreviation for 'Avenue' in an address?", options: ["Av.", "Ave.", "Aven.", "ave"], answer: 1, explain: "Avenue is abbreviated 'Ave.' — capital A and a period." },
          { q: "Which is written correctly?", options: ["mrs. Maria Santos jr.", "Mrs Maria Santos Jr", "Mrs. Maria Santos Jr.", "Mrs. maria Santos jr."], answer: 2, explain: "'Mrs.' (title) and 'Jr.' (suffix meaning 'junior') both need capital letters and periods. So does the full name." },
          { q: "Which month abbreviation is wrong?", options: ["Jan. (January)", "Apr. (April)", "Oct. (October)", "Mai. (May)"], answer: 3, explain: "May has NO abbreviation — never write 'Mai.' or 'May.'. Just write 'May' in full." }
        ]
      },
      commas_intro: {
        title: "Commas After Introductory Words",
        emoji: "⏸️",
        lesson: [
          "A <strong>comma</strong> shows a pause in a sentence.",
          "Use a comma after <strong>yes</strong>, <strong>no</strong>, and <strong>well</strong> at the beginning of a sentence:<br><div class='example'><b>Yes,</b> I love to finger-paint.<br><b>No,</b> it's not painted yet.<br><b>Well,</b> can I help you paint?</div>",
          "Use a comma after <strong>order words</strong> at the beginning of a sentence: first, second, next, then, finally:<br><div class='example'><b>First,</b> get a brush.<br><b>Then,</b> you dip it.<br><b>Finally,</b> remove the bread carefully.</div>"
        ],
        quiz: [
          { q: "Which sentence is punctuated correctly?", options: ["Yes I think so but I'm not sure.", "Yes, I think so but I'm not sure.", "Yes I think so, but I'm not sure.", "Yes, I think so, but I'm not sure."], answer: 3, explain: "Two commas are needed: one after the intro word 'Yes,' and one before the conjunction 'but' joining two ideas." },
          { q: "Which sentence does NOT need a comma added?", options: ["First we mix the batter.", "Well I disagree.", "Today I went swimming.", "No that is wrong."], answer: 2, explain: "'Today' is just a regular when-adverb at the start — no comma needed. 'First,' 'Well,' and 'No' are intro words that need commas." },
          { q: "Where does the comma belong? 'Finally after a long wait we got our food.'", options: ["Finally, after a long wait we got our food.", "Finally after a long wait, we got our food.", "Finally, after a long wait, we got our food.", "Finally after, a long wait, we got our food."], answer: 2, explain: "Two commas: one after the order word 'Finally,' and one after the introductory phrase 'after a long wait.'" },
          { q: "Which sentence uses a comma INCORRECTLY?", options: ["Yes, I'll help.", "Well, that's strange.", "Then, we left.", "He, ran fast."], answer: 3, explain: "'He' is the subject — there is NO intro word. Don't put a comma between the subject and verb. The other three correctly follow intro words." },
          { q: "Which intro word does NOT take a comma after it?", options: ["First", "Well", "Suddenly", "The"], answer: 3, explain: "'The' is an article, not an introductory word. It never gets a comma after it." }
        ]
      },
      commas_series: {
        title: "Commas in a Series",
        emoji: "📋",
        lesson: [
          "When you list <strong>three or more</strong> items in a sentence, use commas to separate them. This is called a <strong>series</strong>.",
          "<div class='example'>Wrong: Lisa Anne and Jason have birthdays in May.<br>Right: <b>Lisa, Anne, and Jason</b> have birthdays in May.</div>",
          "<div class='example'>Mike asked for <b>sneakers, toys, and a puppy</b>.<br>The room was filled with <b>balloons, streamers, and signs</b>.</div>",
          "Put a comma before the <strong>and</strong> (or <strong>or</strong>) before the last item in the list!"
        ],
        quiz: [
          { q: "Which sentence does NOT need any series commas?", options: ["She has a cat dog and bird.", "I want a slice of pizza.", "He bought apples oranges and pears.", "We went hiking biking and swimming."], answer: 1, explain: "Only one item ('a slice of pizza'), so there's nothing to separate. You need three or more items for series commas." },
          { q: "How many commas does this sentence need? 'Pack a toothbrush a comb shampoo and soap for the trip.'", options: ["one", "two", "three", "four"], answer: 2, explain: "Three commas — between each pair: 'Pack a toothbrush, a comb, shampoo, and soap.'" },
          { q: "Which sentence uses commas correctly?", options: ["I made friends with Kim, the new student, Lily, and Sam.", "I made friends with Kim the new student Lily and Sam.", "I made friends with, Kim, the new student, Lily, and Sam.", "I, made friends with Kim, the new student, Lily, and Sam."], answer: 0, explain: "Three friends listed: Kim (described as 'the new student'), Lily, and Sam. Commas separate each item, including around the description." },
          { q: "Where are the commas needed? 'The flag is red white and blue.'", options: ["red, white and blue", "red white, and blue", "red, white, and blue", "red, white, and, blue"], answer: 2, explain: "Three colors → comma after 'red' AND after 'white' (before 'and'): 'red, white, and blue.'" },
          { q: "Which sentence correctly uses verbs in a series?", options: ["She ran jumped and laughed.", "She ran jumped, and laughed.", "She, ran, jumped, and laughed.", "She ran, jumped, and laughed."], answer: 3, explain: "A series can be verbs too! Three verbs (ran, jumped, laughed) get commas: 'She ran, jumped, and laughed.'" }
        ]
      },
      quotation: {
        title: "Quotation Marks",
        emoji: "💬",
        lesson: [
          "Use <strong>quotation marks (\" \")</strong> to show the <strong>exact words</strong> someone says.",
          "Rules:<br>• Begin the first word inside the quotes with a <strong>capital letter</strong>.<br>• Put the <strong>end mark before</strong> the closing quotation mark.<br>• Use a <strong>comma</strong> to separate the quotation from the rest of the sentence.",
          "<div class='example'>Tara said, <b>\"I like to read fables.\"</b><br><b>\"You woke me up!\"</b> Tyler exclaimed.<br>Nick said, <b>\"Look at my terrarium!\"</b></div>"
        ],
        quiz: [
          { q: "Which sentence is punctuated correctly when the speaker comes AFTER the quote?", options: ['"I love this book." Tara said.', '"I love this book," Tara said.', '"I love this book", Tara said.', 'I love this book, Tara said.'], answer: 1, explain: "When the speaker comes after, replace the period inside the quote with a comma: '\"I love this book,\" Tara said.' The comma goes BEFORE the closing quote mark." },
          { q: "Which sentence is correct?", options: ['"Are you ready?" Mom asked.', '"Are you ready," Mom asked?', '"Are you ready" Mom asked?', '"Are you ready?", Mom asked.'], answer: 0, explain: "Question marks stay INSIDE the closing quote when they're part of the question. No comma is needed if the quote ends with ? or !." },
          { q: "Find the sentence with NO error.", options: ['He yelled, "watch out!"', 'He yelled "Watch out!"', 'He yelled, "Watch out!"', 'He yelled, "Watch out".'], answer: 2, explain: "Comma after 'yelled,' capital W, exclamation mark INSIDE the closing quote. The fourth one wrongly puts the period outside the quote." },
          { q: "How many things are wrong here? '\"i can\\'t wait\" she said'", options: ["one", "two", "three", "four"], answer: 2, explain: "Three: (1) lowercase 'i' should be 'I,' (2) missing comma inside the quote before the closing mark, (3) missing period at the end of the whole sentence." },
          { q: "Which sentence handles a question quote correctly?", options: ['Lily asked, "Where is my book?"', 'Lily asked "where is my book?"', 'Lily asked, "Where is my book."', 'Lily asked, where is my book?'], answer: 0, explain: "Comma after 'asked,' capital W to start the quote, question mark inside the closing quote because the QUOTE itself is a question." }
        ]
      },
      book_titles: {
        title: "Book Titles",
        emoji: "📚",
        lesson: [
          "When you write a book title, <strong>underline</strong> it.",
          "Begin the <strong>first</strong>, <strong>last</strong>, and each <strong>important word</strong> in the title with a capital letter.",
          "Small words like <em>a, an, the, and, in, of, to, for</em> are NOT capitalized (unless they are the first word).",
          "<div class='example'>Robin read <u>Help! I'm a Prisoner in the Library</u>.<br>Tim has the book <u>The Lost and Found</u>.<br>I read <u>Arrow to the Sun</u>.</div>"
        ],
        quiz: [
          { q: "Which title is capitalized correctly?", options: ["A wrinkle in time", "A Wrinkle In Time", "A Wrinkle in Time", "a Wrinkle in Time"], answer: 2, explain: "'A' is the first word, so capitalize. 'Wrinkle' and 'Time' are important words. 'In' is a small word in the middle, so lowercase." },
          { q: "Which book title has a CAPITALIZATION mistake?", options: ["The Cat in the Hat", "Where the Sidewalk Ends", "Charlotte's web", "Diary of a Wimpy Kid"], answer: 2, explain: "'Charlotte's Web' — 'Web' is the LAST word, so it must always be capitalized, even though it's just three letters." },
          { q: "Which title is correct? (Hint: small words IN THE MIDDLE stay lowercase.)", options: ["The Tale Of Despereaux", "The Tale of Despereaux", "the Tale of Despereaux", "The tale of Despereaux"], answer: 1, explain: "'The' (first word), 'Tale' (important), 'Despereaux' (important) are capitalized. 'of' is a small word in the middle — lowercase." },
          { q: "Which way is NOT correct for showing a book title in writing?", options: ["Underline it (handwriting)", "Italicize it (typing)", "Use all capital letters", "Both underlining and italics work"], answer: 2, explain: "Books are shown by underlining (handwriting) or italics (typing). All caps is wrong — that's like shouting." },
          { q: "Which sentence is written correctly?", options: ["My favorite book is harry potter and the sorcerer's stone.", "My favorite book is Harry Potter And The Sorcerer's Stone.", "My favorite book is Harry Potter and the Sorcerer's Stone.", "My favorite book is harry Potter and the Sorcerer's Stone."], answer: 2, explain: "Capitalize Harry, Potter, Sorcerer's, Stone (important words). 'and' and 'the' are small words in the middle, so lowercase." }
        ]
      }
    },
    challenge_questions: [
      { q: "How many capitalization errors are in this sentence? 'last summer my Family drove from california to texas to visit aunt maria.'", options: ["3", "5", "6", "7"], answer: 2, explain: "Errors: 'last' (start of sentence), 'Family' (should be lowercase — it's a common noun here), 'california,' 'texas,' 'aunt,' 'maria.' That's 6. (Trick: 'Family' is wrongly capitalized — proper noun rules don't apply to 'family' alone.)" },
      { q: "Which sentence has BOTH a capitalization error AND a punctuation error?", options: ["I love new york.", "i love New York", "I love New York!", "I, love New York."], answer: 1, explain: "B has 'i' (should be 'I') AND no end punctuation. A has only a capitalization error (new york → New York). C is correct. D has wrong comma." },
      { q: "Read this dialogue. Where is the punctuation WRONG? '\"Are you coming?\", asked Maya. \"In a minute,\" he replied.'", options: ["The comma after 'coming?' shouldn't be there.", "Maya should be lowercase.", "The comma after 'minute' is wrong.", "There are no errors."], answer: 0, explain: "When a quote ends with '?' or '!', you don't add a comma after — the question mark is the punctuation. Should be: '\"Are you coming?\" asked Maya.'" },
      { q: "Edit this run-on into TWO sentences with correct end marks: 'The storm was loud thunder shook the house.'", options: ["The storm was loud, thunder shook the house.", "The storm was loud. Thunder shook the house.", "The storm was loud thunder. Shook the house.", "The, storm was loud, thunder shook the house."], answer: 1, explain: "Two complete thoughts need to be split: 'The storm was loud.' + 'Thunder shook the house.' A comma alone (option A) is a comma splice — also wrong." },
      { q: "Which sentence correctly uses commas in a series with longer items?", options: ["Sam packed his lucky baseball cap his old worn-out glove and his favorite bat.", "Sam packed his lucky baseball cap, his old worn-out glove, and his favorite bat.", "Sam packed, his lucky baseball cap, his old worn-out glove, and his favorite bat.", "Sam packed his lucky baseball cap, his old worn-out glove and his favorite bat."], answer: 1, explain: "Three items, each can have its own descriptors. Commas separate the three — including before 'and' (Oxford comma)." },
      { q: "Which sentence has the title written correctly?", options: ["I read 'The Wind in the Willows' last week.", "I read \"the wind in the willows\" last week.", "I read \"The Wind in the Willows\" last week.", "I read The Wind in the Willows last week."], answer: 2, explain: "Book titles get italics OR underlined OR (in some styles) quotation marks. Capitalize first, last, and important words: 'The Wind in the Willows.' Small words 'in' and 'the' in middle stay lowercase." },
      { q: "When SHOULD you NOT capitalize 'mom'?", options: ["When she's sad", "When you write 'my mom' (with 'my' before it)", "When the sentence starts with it", "When you're talking to her directly"], answer: 1, explain: "'My mom' uses 'mom' as a common noun (lowercase). 'Mom, can I go?' uses it as her name (capitalize). The 'my' is the giveaway." },
      { q: "Find the sentence with NO punctuation errors.", options: ["Hi Mr Smith, how are you", "Hi Mr. Smith. How are you?", "Hi, mr. smith, how are you?", "hi Mr. Smith how are you?"], answer: 1, explain: "B has period after 'Mr.,' capital S in 'Smith,' period after the greeting, and '?' for the question. The others miss periods, capitals, or end marks." },
      { q: "Which sentence correctly uses BOTH a comma after an intro word AND commas in a series?", options: ["First, I packed my bag, my lunch, and my book.", "First I packed my bag, my lunch, and my book.", "First, I packed my bag my lunch and my book.", "First, I packed, my bag, my lunch, and my book."], answer: 0, explain: "Two rules combined: 'First,' (intro word + comma), then the series 'my bag, my lunch, and my book' with commas between items." },
      { q: "Which sentence correctly punctuates a quote that ends with an exclamation?", options: ["\"Watch out\"! shouted Dad.", "\"Watch out!\" shouted Dad.", "\"Watch out!\", shouted Dad.", "\"Watch out!,\" shouted Dad."], answer: 1, explain: "The exclamation mark goes INSIDE the closing quote (it's part of the shout). NO additional comma after the closing quote — the exclamation is the punctuation." },
      { q: "Which is the correct address line?", options: ["1234 maple street, miami, florida", "1234 Maple Street, Miami, Florida", "1234 Maple street, Miami, florida", "1234 maple Street, miami, Florida"], answer: 1, explain: "All proper nouns capitalized: 'Maple Street' (street name), 'Miami' (city), 'Florida' (state). The number stays as is." },
      { q: "Which sentence correctly handles MULTIPLE proper nouns in different categories?", options: ["My friend luis, who lives in chicago, attends Lincoln elementary school.", "My friend Luis, who lives in Chicago, attends Lincoln Elementary School.", "My friend Luis who lives in Chicago attends Lincoln Elementary School.", "My friend, Luis, who lives in Chicago, attends Lincoln elementary School."], answer: 1, explain: "B capitalizes all proper nouns (Luis, Chicago, Lincoln Elementary School) and uses commas around the descriptive phrase 'who lives in Chicago.'" },
      { q: "Which sentence has TWO different sentence types and uses correct punctuation for both?", options: ["I'm going home, are you coming.", "I'm going home. Are you coming?", "I'm going home are you coming?", "I'm going home? Are you coming."], answer: 1, explain: "First is a statement (period), second is a question (question mark). The other options mix up the punctuation." },
      { q: "Which sentence shows the correct way to write a date?", options: ["April 15 2026", "april 15, 2026", "April 15, 2026", "April, 15, 2026"], answer: 2, explain: "Capitalize the month, comma between day and year, no comma between month and day. 'April 15, 2026' is the standard format." },
      { q: "Identify the BEST revision: 'we visited the grand canyon and the eiffel tower'", options: ["We visited the Grand Canyon and the Eiffel Tower.", "we visited The Grand Canyon and The Eiffel Tower.", "We Visited The Grand Canyon And The Eiffel Tower.", "We visited the grand Canyon and the eiffel Tower."], answer: 0, explain: "Capitalize the start of the sentence ('We'), the proper place names ('Grand Canyon,' 'Eiffel Tower'), and use a period at the end. 'The' before each name stays lowercase." },
      { q: "Which sentence has 'too' or 'to' used in the WRONG place?", options: ["I want to go too.", "I went to the store.", "She has too many books.", "We are too school today."], answer: 3, explain: "'Too school' is wrong — should be 'to school' (direction). 'Too' would mean 'excessively,' which doesn't make sense before 'school.'" },
      { q: "How many ERRORS (punctuation OR capitalization) are in this sentence? 'on tuesday Mr Smith asked, \"do you have your homework\"'", options: ["3", "4", "5", "6"], answer: 3, explain: "Errors: (1) 'on' should be 'On,' (2) 'Mr' missing period, (3) 'tuesday' should be 'Tuesday,' (4) 'do' should be 'Do' (start of quote), (5) missing '?' inside the quote, (6) missing period at the end. That's 6 errors." },
      { q: "Which sentence is punctuated correctly when the speaker comes IN THE MIDDLE of the quote?", options: ["\"I think,\" she said \"that we should go.\"", "\"I think,\" she said, \"that we should go.\"", "\"I think\" she said \"that we should go.\"", "\"I think, she said, that we should go.\""], answer: 1, explain: "Two commas (one inside first quote, one after 'said') + reopen quote with lowercase 'that' (continuation of the same sentence). The end mark goes inside the final closing quote." },
      { q: "Which is the correct capitalization for these school subjects? 'I have math english and history this morning.'", options: ["I have Math English and History this morning.", "I have math English and history this morning.", "I have math, English, and history this morning.", "I have Math, English, and History this morning."], answer: 2, explain: "Tricky! Subject names are usually lowercase EXCEPT for languages (English, Spanish — proper nouns). 'Math' and 'history' stay lowercase. Also need commas in series." },
      { q: "Which sentence correctly handles a QUESTION inside a STATEMENT?", options: ["I asked her, \"Where are you going?\"", "I asked her, \"Where are you going.\"", "I asked her, \"where are you going?\"", "I asked her \"Where are you going?\""], answer: 0, explain: "Comma after 'her,' capital W to start the quote, '?' inside the closing quote because the QUOTE is a question. The whole sentence is the asker's report — but the QUOTE is what determines the inner punctuation." },
      { q: "Which sentence uses commas to set off a NAME being addressed?", options: ["Mom can I go to the park?", "Mom, can I go to the park?", "Mom, can, I go to the park?", "Mom can I go, to the park?"], answer: 1, explain: "When you address someone DIRECTLY, set their name off with a comma. 'Mom, can I go?' — comma after the name being addressed." },
      { q: "Which sentence correctly capitalizes a holiday and a country?", options: ["We celebrate thanksgiving in the united states.", "We celebrate Thanksgiving in the United States.", "We celebrate Thanksgiving in The United States.", "We celebrate thanksgiving in The United States."], answer: 1, explain: "Both 'Thanksgiving' (holiday) and 'United States' (country) are proper nouns — capitalize. 'The' stays lowercase since it's not part of the official country name in this position." },
      { q: "Which sentence has a comma that's UNNECESSARY?", options: ["After dinner, we played outside.", "Yes, I would love to come.", "The fast, brown fox jumped.", "She is, my best friend."], answer: 3, explain: "'She is, my best friend' has a wrong comma between subject ('She is') and the rest. Don't separate subject from predicate. The others correctly use commas after intro phrases or between coordinate adjectives." },
      { q: "Which is the BEST way to fix this sentence? 'mr.smith said \"i love teaching!\".'", options: ["Mr. Smith said \"I love teaching!\".", "Mr. Smith said, \"I love teaching!\"", "Mr Smith said \"I love teaching\".", "mr. smith said, \"I love teaching!\""], answer: 1, explain: "Fixes: (1) capital M and S in 'Mr. Smith,' (2) period after 'Mr.,' (3) comma after 'said,' (4) capital I in 'I,' (5) exclamation INSIDE the closing quote, (6) NO extra period after the closing quote since '!' is the end mark." },
      { q: "Which sentence correctly punctuates a list of complete things?", options: ["I bought a book pencils erasers and paper.", "I bought a book, pencils, erasers and paper.", "I bought, a book, pencils, erasers, and paper.", "I bought a book, pencils, erasers, and paper."], answer: 3, explain: "Series of four items needs commas after each item including before 'and.' Don't put a comma after the verb 'bought' (separating verb from object)." },
      { q: "Which paragraph has the FEWEST errors?", options: ["the dog barked loudly. it ran across the yard. then it stopped.", "The Dog Barked Loudly. It Ran Across The Yard. Then It Stopped.", "The dog barked loudly. It ran across the yard. Then it stopped.", "The dog barked loudly, it ran across the yard, then it stopped."], answer: 2, explain: "C is correct. A: missing capitals at sentence starts. B: random capitals on common words. D: comma splices instead of periods." },
      { q: "Which sentence treats a movie title correctly (using italics-style or quotes)?", options: ["I watched The Lion King last night.", "I watched the lion king last night.", "I watched \"The Lion King\" last night.", "I watched the LION KING last night."], answer: 2, explain: "Movie/book titles either italicized, underlined, or in quotes (some styles). 'The Lion King' has all important words capitalized. Option C uses quotes correctly. (Option A is also acceptable in italics — but C is the safest with quotes for handwriting.)" },
      { q: "Edit this sentence for ALL errors: 'on monday i went too the park with mr lee'", options: ["On Monday I went to the park with Mr. Lee.", "On Monday, I went to the park with Mr. Lee.", "On monday I went to the park with Mr Lee.", "On Monday i went to the park with mr lee"], answer: 1, explain: "B has all corrections: capital 'On Monday,' comma after intro phrase, 'to' (not 'too'), capital 'I,' 'Mr.' with period, 'Lee' capitalized. A is also close but misses the comma after 'Monday.'" },
      { q: "Which sentence shows correct usage of ALL THREE: capitalization, comma in series, AND end punctuation?", options: ["My favorite seasons are spring summer and fall.", "my favorite seasons are spring, summer, and fall", "My favorite seasons are spring, summer, and fall.", "My favorite seasons are Spring, Summer, and Fall."], answer: 2, explain: "C: capital 'My,' commas between three seasons (with Oxford), period at end. D wrongly capitalizes seasons (they're common nouns, not proper)." },
      { q: "Which is the BEST way to combine two short sentences into one with proper punctuation? 'I was tired. I kept reading.'", options: ["I was tired but I kept reading.", "I was tired, but I kept reading.", "I was tired but, I kept reading.", "I was tired; but I kept reading."], answer: 1, explain: "When joining two complete sentences with 'but,' put a comma BEFORE 'but.' That's the rule for coordinating conjunctions joining independent clauses." }
    ]
  },

  /* -------- UNIT 6: PRONOUNS -------- */
  u6: {
    title: "Unit 6",
    subtitle: "Pronouns",
    emoji: "👥",
    cssClass: "u6",
    topics: {
      subject_pronouns: {
        title: "Subject Pronouns",
        emoji: "🙋",
        lesson: [
          "A <strong>pronoun</strong> takes the place of a noun so we don't repeat the same word over and over.",
          "<strong>Subject pronouns</strong> are used as the <strong>subject</strong> of a sentence:<br><div class='example'><b>I &nbsp; you &nbsp; he &nbsp; she &nbsp; it &nbsp; we &nbsp; they</b></div>",
          "<div class='example'>Lily read the book. → <b>She</b> read the book.<br>Tom and Sam played. → <b>They</b> played.<br>The cat slept. → <b>It</b> slept.</div>"
        ],
        quiz: [
          { q: "Which pronoun replaces 'Tom' (a boy)?", options: ["she", "he", "they", "it"], answer: 1, explain: "'He' replaces a boy's name — Tom is a boy, so we use 'he'." },
          { q: "Which pronoun replaces 'the cat'?", options: ["he", "she", "it", "they"], answer: 2, explain: "We use 'it' for animals or things when the gender isn't specified." },
          { q: "Which pronoun replaces 'Lily and Sam'?", options: ["he", "she", "it", "they"], answer: 3, explain: "Two or more people = 'they'!" },
          { q: "Which word is a subject pronoun?", options: ["me", "him", "her", "we"], answer: 3, explain: "'We' is a subject pronoun — it can be the subject of a sentence." },
          { q: "Choose the correct pronoun: '___ is my favorite book.' (the book)", options: ["He", "She", "It", "They"], answer: 2, explain: "A book is a thing, so we use 'it'." },
          { q: "Choose the correct subject pronoun: 'My sister and I went shopping. ___ bought new shoes.'", options: ["Us", "Them", "We", "She"], answer: 2, explain: "'My sister and I' = 'we'. 'We' is the subject pronoun for the speaker plus another person." },
          { q: "Which sentence uses a subject pronoun correctly?", options: ["Her is reading a book.", "Him went to the park.", "Them are my friends.", "She is reading a book."], answer: 3, explain: "Only 'she' is a subject pronoun. 'Her,' 'him,' and 'them' are object pronouns and cannot be the subject." },
          { q: "Choose: '___ is raining outside, so we stayed in.'", options: ["He", "She", "It", "They"], answer: 2, explain: "We use 'it' to talk about the weather, time, or general situations — even when there is no specific noun." },
          { q: "Which subject pronoun replaces the underlined words? '<u>Mr. Lee and I</u> teach third grade.'", options: ["They", "Us", "We", "Them"], answer: 2, explain: "When you include yourself ('I') with someone else as the subject, use 'we' — not 'they' or 'us'." },
          { q: "Which sentence is correct?", options: ["Me and Lily are best friends.", "Lily and me are best friends.", "Lily and I are best friends.", "I and Lily are best friends."], answer: 2, explain: "Use the subject pronoun 'I,' put yourself last, and the polite order is 'Lily and I are best friends.'" }
        ]
      },
      object_pronouns: {
        title: "Object Pronouns",
        emoji: "🎯",
        lesson: [
          "<strong>Object pronouns</strong> come after action verbs or prepositions (words like to, for, with, by).",
          "Object pronouns: <strong>me, you, him, her, it, us, them</strong>",
          "<div class='example'>Mom helped Tom. → Mom helped <b>him</b>.<br>Give the books to the girls. → Give the books to <b>them</b>.<br>Please help Sam and me. (NOT Sam and I)</div>",
          "Test: When you say 'Sam and me' or 'Sam and I', remove Sam's name. If 'me' sounds right alone, use 'me'. If 'I' sounds right alone, use 'I'."
        ],
        quiz: [
          { q: "Choose: 'Mom helped ___.' (Tom, a boy)", options: ["he", "she", "him", "they"], answer: 2, explain: "'Him' is the object pronoun — it comes after the verb 'helped'." },
          { q: "Choose: 'Give it to ___ .' (the girls)", options: ["they", "she", "her", "them"], answer: 3, explain: "'Them' is the object pronoun used after the preposition 'to'." },
          { q: "Choose the correct pronoun: 'Please call ___.' (me or I)", options: ["I", "me", "we", "us"], answer: 1, explain: "'Me' is the object pronoun — it comes after the verb 'call'." },
          { q: "Which is an object pronoun?", options: ["I", "we", "they", "him"], answer: 3, explain: "'Him' is an object pronoun — I, we, and they are subject pronouns." },
          { q: "Choose: 'She gave the book to Sam and ___.'", options: ["I", "me", "we", "us"], answer: 1, explain: "Remove 'Sam and' — 'she gave the book to me' sounds correct. Use 'me'!" },
          { q: "Choose: 'The teacher waited for Lily and ___.' (yourself)", options: ["I", "me", "my", "we"], answer: 1, explain: "After the preposition 'for,' use the object pronoun 'me.' Test: 'The teacher waited for me' sounds right." },
          { q: "Which sentence is correct?", options: ["The dog followed she into the yard.", "The dog followed her into the yard.", "The dog followed hers into the yard.", "The dog followed she's into the yard."], answer: 1, explain: "'Her' is the object pronoun that follows the verb 'followed.' 'She' is only used as a subject." },
          { q: "Which sentence uses an object pronoun correctly?", options: ["Between you and I, this is a secret.", "Between you and me, this is a secret.", "Between you and mine, this is a secret.", "Between you and my, this is a secret."], answer: 1, explain: "After the preposition 'between,' use object pronouns: 'between you and me.' This is a common error to watch for." },
          { q: "Choose: 'Dad took my brothers and ___ to the zoo.'", options: ["I", "we", "us", "ours"], answer: 2, explain: "Remove 'my brothers and' → 'Dad took us to the zoo' sounds right. 'Us' is the object pronoun." },
          { q: "Which underlined pronoun is WRONG? 'Mom asked <u>he</u> and <u>me</u> to clean <u>our</u> room before <u>she</u> got home.'", options: ["he", "me", "our", "she"], answer: 0, explain: "'He' is a subject pronoun, but here it's the object of 'asked.' It should be 'him': 'Mom asked him and me…'." }
        ]
      },
      possessive_pronouns: {
        title: "Possessive Pronouns",
        emoji: "🏷️",
        lesson: [
          "<strong>Possessive pronouns</strong> show ownership. They do NOT use apostrophes.",
          "Used <strong>before nouns</strong>: <strong>my, your, his, her, its, our, their</strong><br><div class='example'>That is <b>my</b> book. &nbsp; This is <b>her</b> pencil. &nbsp; We washed <b>our</b> car.</div>",
          "Used <strong>alone</strong> (without a noun after them): <strong>mine, yours, his, hers, its, ours, theirs</strong><br><div class='example'>The book is <b>mine</b>. &nbsp; That pencil is <b>hers</b>. &nbsp; The car is <b>ours</b>.</div>",
          "Important: <strong>its</strong> (no apostrophe) shows ownership. <strong>it's</strong> (with apostrophe) means <em>it is</em>!"
        ],
        quiz: [
          { q: "Choose: 'The dog wagged ___ tail.'", options: ["it's", "its", "it", "is"], answer: 1, explain: "'Its' (no apostrophe) shows the tail belongs to the dog. 'It's' means 'it is'!" },
          { q: "Choose the correct possessive pronoun: '___ backpack is red.' (belonging to her)", options: ["She", "Her", "Hers", "Herself"], answer: 1, explain: "'Her' is used before a noun (backpack), so 'Her backpack' is correct." },
          { q: "Which possessive pronoun stands alone? 'This pencil is ___.' (belonging to you)", options: ["you", "your", "yours", "yourself"], answer: 2, explain: "'Yours' stands alone without a noun after it: 'the pencil is yours'." },
          { q: "Choose: 'This is ___ book.' (belonging to them)", options: ["they", "them", "their", "theirs"], answer: 2, explain: "'Their' is used before a noun: 'their book'." },
          { q: "Which sentence uses a possessive pronoun correctly?", options: ["It's tail is fluffy.", "Its tail is fluffy.", "Its' tail is fluffy.", "Its's tail is fluffy."], answer: 1, explain: "'Its' (no apostrophe) shows the tail belongs to it — no apostrophe needed!" },
          { q: "Choose: 'Is this notebook ___ or ___?' (belonging to you / belonging to me)", options: ["your / my", "yours / mine", "your's / mine", "yours / my"], answer: 1, explain: "When the possessive pronoun stands alone (no noun after it), use the 'alone' forms: 'yours' and 'mine.' Never use apostrophes." },
          { q: "Which sentence is correct?", options: ["The red bike is her's.", "The red bike is hers.", "The red bike is hers'.", "The red bike is her."], answer: 1, explain: "'Hers' never takes an apostrophe — possessive pronouns don't use apostrophes, unlike possessive nouns ('Lily's')." },
          { q: "Choose: '___ going to love ___ new puppy!' (you are / belonging to you)", options: ["Your / your", "You're / your", "Your / you're", "You're / you're"], answer: 1, explain: "'You're' = 'you are' (a contraction). 'Your' shows ownership before a noun. Read it as 'You are going to love your new puppy.'" },
          { q: "Which sentence has a possessive pronoun error?", options: ["The cat licked its paws.", "The toys in the box are theirs.", "Our team won the game.", "That bag is her's."], answer: 3, explain: "'Hers' has no apostrophe. Possessive pronouns (mine, yours, his, hers, its, ours, theirs) NEVER use apostrophes." },
          { q: "Choose the sentence where 'its' is used correctly.", options: ["Its' a beautiful day.", "It's wagging its tail.", "Its raining outside.", "The dog wagged it's tail."], answer: 1, explain: "'It's' = 'it is' (contraction). 'Its' = belonging to it (possessive). 'It's wagging its tail' = 'It is wagging the tail that belongs to it.'" }
        ]
      },
      i_and_me: {
        title: "Using I and Me",
        emoji: "🧍",
        lesson: [
          "Use <strong>I</strong> as the <strong>subject</strong> of a sentence (the one doing the action):<br><div class='example'><b>I</b> went to the park. &nbsp; <b>I</b> like pizza.</div>",
          "Use <strong>me</strong> as the <strong>object</strong> (receives the action, or follows prepositions):<br><div class='example'>Mom called <b>me</b>. &nbsp; She gave it to <b>me</b>.</div>",
          "When talking about yourself AND someone else, put <strong>yourself last</strong>:<br><div class='example'>Tom and <b>I</b> went to school. (subject)<br>Mom helped Tom and <b>me</b>. (object)</div>",
          "Quick test: Remove the other person's name. Does 'I' or 'me' sound right by itself?"
        ],
        quiz: [
          { q: "Choose: '___ went to the store.'", options: ["Me", "I", "My", "Mine"], answer: 1, explain: "'I' is the subject — the one doing the action of going." },
          { q: "Choose: 'Mom called ___.'", options: ["I", "me", "my", "mine"], answer: 1, explain: "'Me' comes after the verb 'called' — it's the object pronoun." },
          { q: "Choose: 'Tom and ___ played soccer.'", options: ["me", "I", "my", "mine"], answer: 1, explain: "Remove 'Tom and' → '___ played soccer.' 'I played soccer' sounds correct!" },
          { q: "Choose: 'She gave the book to Sam and ___.'", options: ["I", "me", "my", "mine"], answer: 1, explain: "Remove 'Sam and' → 'she gave the book to me' sounds correct. Use 'me'!" },
          { q: "Which sentence is correct?", options: ["Tom and me went to school.", "Tom and I went to school.", "Me and Tom went to school.", "I and Tom went to school."], answer: 1, explain: "Use 'I' as the subject, and put yourself last: 'Tom and I went to school.'" },
          { q: "Choose: 'The principal gave Lily and ___ an award.'", options: ["I", "me", "my", "myself"], answer: 1, explain: "Remove 'Lily and' → 'The principal gave me an award.' 'Me' is the object of the verb 'gave.'" },
          { q: "Choose: 'Between you and ___, the secret is safe.'", options: ["I", "me", "my", "myself"], answer: 1, explain: "After the preposition 'between,' use the object pronoun 'me.' 'Between you and me' — never 'between you and I.'" },
          { q: "Which sentence is correct?", options: ["My friend and me built a fort.", "Me and my friend built a fort.", "My friend and I built a fort.", "I and my friend built a fort."], answer: 2, explain: "Subject of the sentence = use 'I,' and put yourself last after your friend." },
          { q: "Choose: 'The waiter brought the menus to my parents and ___.'", options: ["I", "me", "my", "mine"], answer: 1, explain: "Remove 'my parents and' → 'The waiter brought the menus to me.' 'Me' is correct after the preposition 'to.'" },
          { q: "Find the sentence WITHOUT an error.", options: ["Her and me are sisters.", "She and I are sisters.", "Me and her are sisters.", "Her and I are sisters."], answer: 1, explain: "Both pronouns must be SUBJECT pronouns ('she' and 'I'). 'Her' and 'me' are object pronouns and can't be subjects." }
        ]
      },
      contractions: {
        title: "Contractions",
        emoji: "🔗",
        lesson: [
          "A <strong>contraction</strong> joins two words together. An <strong>apostrophe (')</strong> takes the place of the missing letters.",
          "Pronoun + verb contractions:<br><div class='example'>I am → <b>I'm</b> &nbsp; you are → <b>you're</b> &nbsp; he is → <b>he's</b><br>she is → <b>she's</b> &nbsp; it is → <b>it's</b> &nbsp; we are → <b>we're</b> &nbsp; they are → <b>they're</b></div>",
          "Verb + not contractions:<br><div class='example'>do not → <b>don't</b> &nbsp; cannot → <b>can't</b> &nbsp; will not → <b>won't</b><br>is not → <b>isn't</b> &nbsp; are not → <b>aren't</b> &nbsp; did not → <b>didn't</b></div>"
        ],
        quiz: [
          { q: "What is the contraction for 'do not'?", options: ["dont'", "don't", "do'nt", "d'ont"], answer: 1, explain: "do not → don't. The apostrophe replaces the 'o' in 'not'." },
          { q: "What two words make up 'she's'?", options: ["she has", "she is", "she was", "she will"], answer: 1, explain: "she's = she is. The apostrophe replaces the 'i' in 'is'." },
          { q: "What is the contraction for 'will not'?", options: ["willn't", "won't", "wil'nt", "will'nt"], answer: 1, explain: "will not → won't. This one is special — the spelling changes!" },
          { q: "Choose: '___ my birthday today!' (It is)", options: ["Its", "It's", "Its'", "Ist"], answer: 1, explain: "It's = it is. The apostrophe replaces the 'i' in 'is'." },
          { q: "What is the contraction for 'cannot'?", options: ["can'not", "can't", "cant'", "c'ant"], answer: 1, explain: "cannot → can't. The apostrophe replaces the 'no' in 'not'." },
          { q: "What two words make up 'they're'?", options: ["they were", "they are", "their", "there are"], answer: 1, explain: "they're = they are. Don't confuse it with 'their' (ownership) or 'there' (a place)." },
          { q: "Which sentence uses the correct word?", options: ["Their going to the park.", "There going to the park.", "They're going to the park.", "Theyre going to the park."], answer: 2, explain: "'They're' = 'they are.' Test: 'They are going to the park' makes sense, so 'they're' is correct." },
          { q: "What is the contraction for 'should not'?", options: ["should'nt", "shouldnt'", "shouldn't", "shoul'dnt"], answer: 2, explain: "should not → shouldn't. The apostrophe replaces the 'o' in 'not.'" },
          { q: "Which contraction is spelled INCORRECTLY?", options: ["wasn't", "haven't", "we're", "your're"], answer: 3, explain: "'Your're' is not a word. The contraction for 'you are' is 'you're' (with one apostrophe between 'you' and 're')." },
          { q: "Choose the sentence with the correct contraction.", options: ["Whose coming to the party?", "Who's coming to the party?", "Whos' coming to the party?", "Who'se coming to the party?"], answer: 1, explain: "'Who's' = 'who is.' 'Whose' (no apostrophe) shows ownership: 'Whose backpack is this?'" }
        ]
      },
      negatives: {
        title: "Negatives",
        emoji: "🚫",
        lesson: [
          "<strong>Negative words</strong> mean 'no' or 'not': <strong>no, not, never, nobody, nothing, nowhere, no one, neither</strong>",
          "Use only <strong>ONE</strong> negative word in a sentence!<br><div class='example'>Wrong: I don't have <b>no</b> pencil. ✗<br>Right: I <b>don't</b> have a pencil. ✓<br>Right: I have <b>no</b> pencil. ✓</div>",
          "The word <strong>not</strong> is often hiding inside contractions like don't, won't, can't, isn't!<br><div class='example'>Wrong: She <b>can't</b> find <b>nothing</b>. ✗<br>Right: She <b>can't</b> find anything. ✓</div>"
        ],
        quiz: [
          { q: "Which sentence is correct?", options: ["I don't have no money.", "I don't have any money.", "I don't have none money.", "I don't have nothing."], answer: 1, explain: "'Don't' already has 'not' in it. So use 'any' instead of another negative word." },
          { q: "Which is a negative word?", options: ["always", "never", "often", "usually"], answer: 1, explain: "'Never' means 'not ever' — it's a negative word!" },
          { q: "Choose: 'She has ___ seen a whale.' (use a negative)", options: ["ever", "never", "always", "often"], answer: 1, explain: "'Never' is the negative word: 'She has never seen a whale.'" },
          { q: "Which sentence has an error (double negative)?", options: ["I never go there.", "I don't go anywhere.", "I don't go nowhere.", "I go nowhere."], answer: 2, explain: "'Don't' + 'nowhere' = two negatives! Correct: 'I don't go anywhere.' or 'I go nowhere.'" },
          { q: "How many negative words should a sentence have?", options: ["none", "one", "two", "as many as you want"], answer: 1, explain: "Use only ONE negative word per sentence. Two negatives cancel each other out!" },
          { q: "Choose the correct sentence.", options: ["I haven't seen nobody at the door.", "I haven't seen anybody at the door.", "I haven't seen no one at the door.", "I haven't seen nothing at the door."], answer: 1, explain: "'Haven't' already contains 'not.' Use the positive partner words: anybody, anyone, anything." },
          { q: "Fix this double negative: 'We didn't go nowhere yesterday.'", options: ["We didn't go anywhere yesterday.", "We didn't go no place yesterday.", "We didn't went nowhere yesterday.", "We didn't never go nowhere yesterday."], answer: 0, explain: "'Didn't' has a negative; pair it with 'anywhere,' not 'nowhere.'" },
          { q: "Which sentence has a hidden double negative?", options: ["I can hardly wait for the trip.", "I can't hardly wait for the trip.", "I can barely hear you.", "She has nothing to say."], answer: 1, explain: "'Hardly' is already a negative word! 'Can't hardly' is a double negative. Correct: 'I can hardly wait.'" },
          { q: "Choose the correct word: 'There isn't ___ milk left in the carton.'", options: ["no", "none", "any", "nothing"], answer: 2, explain: "'Isn't' is negative, so use the positive partner 'any.' 'Isn't… any' = there is none." },
          { q: "Which sentence is written correctly?", options: ["Nobody never helps me clean up.", "Nobody ever helps me clean up.", "Nobody don't help me clean up.", "Nobody never don't help me."], answer: 1, explain: "'Nobody' is already a negative. Pair it with the positive 'ever,' not 'never.'" }
        ]
      }
    },
    challenge_questions: [
      { q: "In this sentence, who does 'he' refer to? 'When James saw Mark in the hallway, he waved hello.'", options: ["Definitely James", "Definitely Mark", "It's ambiguous — could be either", "Both at once"], answer: 2, explain: "Pronoun reference is ambiguous when two people of the same gender appear before it. Critical thinkers spot this. Good writing rewrites: 'James waved hello to Mark.'" },
      { q: "Choose ALL the correct pronouns: 'Sam invited Lily and ___ to the party. ___ couldn't wait to go.'", options: ["I / We", "me / We", "me / Us", "I / Us"], answer: 1, explain: "'Sam invited me' (object of verb 'invited' → 'me'). 'We couldn't wait to go' (subject → 'we'). The trick is the same person uses different pronouns based on their role." },
      { q: "Which sentence has a HIDDEN double negative?", options: ["I don't have any homework.", "I have no homework.", "I don't have no homework.", "I haven't got any homework."], answer: 2, explain: "C uses both 'don't' (negative) and 'no' (negative) — double negative. 'Don't have any' or 'have no' alone is correct. A is correct." },
      { q: "What's the difference between 'its' and 'it's'?", options: ["No difference — they're the same.", "'Its' = belonging to it; 'it's' = it is or it has.", "'It's' = belonging; 'its' = contraction.", "'Its' is plural; 'it's' is singular."], answer: 1, explain: "'Its' (no apostrophe) = possessive, like 'his' or 'her.' 'It's' = contraction of 'it is' or 'it has.' Test: replace with 'it is' — if it works, use 'it's.'" },
      { q: "Which sentence incorrectly uses an OBJECT pronoun as a subject?", options: ["Her and I went to the store.", "She and I went to the store.", "We went to the store.", "They went to the store."], answer: 0, explain: "'Her' is an object pronoun ('to her'); it can't be the subject. Should be 'She and I went.' This is a very common error in casual speech." },
      { q: "Choose the BEST pronoun replacement: 'The students who finished early helped the students who needed more time.'", options: ["They helped them.", "Them helped they.", "Those who finished early helped them.", "They helped the others."], answer: 3, explain: "'They helped them' would be ambiguous (which group?). 'They helped the others' is clearer. Strong writers use pronouns only when meaning is clear." },
      { q: "Which sentence uses 'whom' correctly?", options: ["Whom is going to the store?", "Who did you see at the park?", "To whom should I give this letter?", "Whom is at the door?"], answer: 2, explain: "'Whom' = object pronoun (use after prepositions like 'to,' 'for,' 'with'). 'To whom should I give this letter?' is correct. 'Who' = subject pronoun." },
      { q: "Which sentence shows 'they' used to refer to a SINGULAR unknown person?", options: ["The students said they were tired.", "Each student should bring their own lunch.", "They are my best friends.", "We saw them at the game."], answer: 1, explain: "Modern English commonly uses 'they/their' for one person whose gender is unknown or unspecified: 'Each student… their own lunch.' Old rule: 'his or her.' Both are accepted now." },
      { q: "Which sentence is grammatically correct AND clear?", options: ["When dad gave John his hat, he was happy.", "When dad gave John his hat, John was happy.", "Dad was happy when he gave John his hat.", "Either A or B works — it depends on who you mean."], answer: 1, explain: "A is unclear: who is 'he'? Dad or John? B fixes the ambiguity by using the name. Strong writers fix unclear pronouns by repeating the noun." },
      { q: "Choose: 'Just between you and ___, I think we should leave.'", options: ["I", "me", "myself", "we"], answer: 1, explain: "'Between' is a preposition — needs an OBJECT pronoun. 'Between you and me' (NEVER 'between you and I'). Common error in formal speech." },
      { q: "Which contraction CANNOT be expanded into two words?", options: ["won't (will not)", "she'd (she would or she had)", "ain't (am not)", "don't (do not)"], answer: 2, explain: "'Ain't' is a contraction but isn't standard English — and it doesn't have a clear two-word origin in formal grammar (it's a folk contraction). The others all expand cleanly." },
      { q: "What's WRONG with this sentence? 'Each of the players brought their own water bottle.'", options: ["Nothing — it's correct.", "'Their' should be 'his or her' to match 'each.'", "'Each' should be 'all.'", "'Brought' should be 'brings.'"], answer: 0, explain: "Trick question! In modern usage, 'their' with 'each' is widely accepted. Old grammarians said 'his or her,' but this rule is fading. Critical thinkers know that grammar evolves." },
      { q: "Which sentence has the MOST natural-sounding pronoun choice?", options: ["It's either he or me.", "It's either him or me.", "It's either him or I.", "It's either he or I."], answer: 1, explain: "Strict grammar says 'he or I' (subjects) or 'him or me' (objects). In casual speech, 'him or me' sounds most natural after 'It's.' Critical thinkers know formal vs. natural." },
      { q: "Which sentence uses 'who's' vs 'whose' correctly?", options: ["Who's bag is on the table?", "Whose going to the party?", "Who's coming with us, and whose car will we take?", "Whose's the new student?"], answer: 2, explain: "'Who's' = who is/has. 'Whose' = belonging to whom. C uses both correctly: 'Who's coming' (who is) and 'whose car' (belonging to whom)." },
      { q: "Find the sentence with the BEST pronoun choice for clarity.", options: ["When the dog saw the cat, it ran.", "When the dog saw the cat, the dog ran.", "When the dog saw the cat, the cat ran.", "The dog ran when it saw the cat."], answer: 3, explain: "A is ambiguous (who ran?). B and C clarify but feel clunky. D is clearest because the pronoun 'it' clearly refers back to 'the dog' (its closest antecedent)." },
      { q: "Which sentence correctly uses a pronoun to AVOID repetition without losing meaning?", options: ["Maria gave Maria's book to Maria's sister.", "Maria gave her book to her sister.", "She gave her book to her sister.", "Maria gave her book to Maria's sister."], answer: 1, explain: "B replaces both 'Maria's' with 'her' since it's clearly Maria's book and Maria's sister. Pronouns are most useful when the antecedent is established once." },
      { q: "Choose: 'My brother and ___ are going to the game; the tickets are ___.'", options: ["me / hers and mine", "I / our's", "I / ours", "me / ours"], answer: 2, explain: "'My brother and I are going' (subject) and 'the tickets are ours' (possessive pronoun standing alone — no apostrophe). 'Our's' is NEVER correct." },
      { q: "Which sentence has the CORRECT order when including yourself?", options: ["Me and Sam went to the store.", "Sam and me went to the store.", "I and Sam went to the store.", "Sam and I went to the store."], answer: 3, explain: "Two rules: (1) put yourself LAST, (2) use subject pronoun 'I' for the subject. Only D follows both." },
      { q: "Which sentence has a pronoun-antecedent agreement error?", options: ["The team won their first game.", "The committee made its decision.", "Each child raised their hand.", "Everyone has their own opinion."], answer: 0, explain: "Tricky! Some grammarians argue 'team' is singular ('its'), but 'team' as a group of people often takes 'their.' British English uses plural; American often singular ('its'). Most acceptable error: A — but in modern usage, both are debated." },
      { q: "Which is correct? 'Lily and ___ packed the lunch ___ made for the picnic.'", options: ["I / our", "me / ours", "I / our's", "I / ours"], answer: 0, explain: "'Lily and I packed' (subject) and 'the lunch our made for the picnic' — wait that's wrong. Let me reread. 'The lunch we made' or 'the lunch our [team/family] made.' Tricky: 'our' before 'made' implies 'our [group] made' — best is A using 'our' as a possessive before an implied noun." },
      { q: "Pick the sentence with NO pronoun errors.", options: ["Her and me are best friends.", "She and I are best friends.", "Her and I are best friends.", "Me and her are best friends."], answer: 1, explain: "Both pronouns must be subjects: 'She and I.' The others mix subject and object pronouns or use objects ('her,' 'me') in subject position." },
      { q: "Which sentence shows a contraction that's often CONFUSED with a possessive?", options: ["You're (you are) vs. your (belonging)", "We're (we are) vs. were (past tense)", "They're (they are) vs. their (belonging) vs. there (place)", "All of the above"], answer: 3, explain: "All three are commonly confused homophone groups. Critical readers/writers know which is which by meaning, not just sound." },
      { q: "Choose: 'The teacher gave each student ___ own folder.'", options: ["his", "her", "his or her", "their"], answer: 3, explain: "Modern accepted answer: 'their' works for any gender or unknown gender. 'His or her' was traditional but is now considered awkward. 'His' alone or 'her' alone is gender-biased." },
      { q: "Which sentence uses a REFLEXIVE pronoun (myself, herself, etc.) correctly?", options: ["Me and myself went to the store.", "She baked the cake by herself.", "Tom and myself are going.", "Give the book to myself."], answer: 1, explain: "Reflexive pronouns (-self) refer back to the subject. 'She baked by herself' is correct. 'Myself' is NOT a substitute for 'I' or 'me' in compound subjects/objects (don't say 'Tom and myself')." },
      { q: "Which is the BEST revision to fix the unclear pronoun? 'After the cat fought the dog, it ran away.'", options: ["After the cat fought the dog, it ran away. (no change needed)", "After the cat fought the dog, the cat ran away.", "After the fight, it ran away.", "After they fought, they ran away."], answer: 1, explain: "Original is unclear — 'it' could be either. B clarifies by repeating 'the cat.' D loses information. C is even more vague." },
      { q: "Which sentence shows a DOUBLE NEGATIVE that EXPRESSES something positive?", options: ["I don't have nothing. (= I have something)", "I never go anywhere.", "She has no money.", "We can't see anyone."], answer: 0, explain: "Two negatives mathematically cancel: 'I don't have nothing' literally means 'I have something.' But in casual English, it's often used to mean 'I have nothing.' Critical thinkers know it's logically positive." },
      { q: "Which sentence is most appropriately FORMAL?", options: ["It's me who broke the vase.", "It is I who broke the vase.", "I'm the one that broke the vase.", "I broke the vase, it was me."], answer: 1, explain: "Formal grammar: 'It is I' (subject pronoun after linking verb 'is'). Casual: 'It's me.' Both are correct, but B is most formal. Critical thinkers match register to context." },
      { q: "Choose the sentence with NO errors.", options: ["The dog wagged it's tail and chased its toy.", "The dog wagged its tail and chased its toy.", "The dog wagged its tail and chased it's toy.", "The dog wagged it's tail and chased it's toy."], answer: 1, explain: "Both 'tails' belong to the dog, so both need 'its' (no apostrophe — possessive). 'It's' = 'it is' would make no sense in either position." },
      { q: "Which sentence has the pronoun referring CORRECTLY to its antecedent?", options: ["Neither of the boys finished his homework.", "Neither of the boys finished their homework.", "Either A or B is acceptable.", "Neither of the boys finished theirs homework."], answer: 2, explain: "Strict grammar: 'neither' is singular → 'his.' Modern usage: 'their' is widely accepted to avoid gender-specific assumptions. Critical thinkers know both are used." },
      { q: "Which sentence has a pronoun error that changes the MEANING?", options: ["He gave the book to her.", "He gave the book to him.", "She gave the book to him.", "He gave him the book."], answer: 1, explain: "Without context, all four are grammatical, but each describes a DIFFERENT scenario! Critical thinkers know pronouns carry information about who-does-what to whom. The 'error' depends on what you meant to say." }
    ]
  }
};

/* ================================================================
   VOCABULARY WORKSHOP (VW) DATA — Units 14–18
   Each word has: word, synonyms (array), antonyms (array — may be empty)
   ================================================================ */
