/* ================================================================
   SCIENCE — FINAL REVIEW QUIZZES (All Units)
   --------------------------------------------------------------
   Two final-review quizzes drawing from all Science units:
     • Ch 6  — Adaptation & Animal Superpowers
     • L 7.1 — Fossils
     • L 7.2 — Fossils as a Record
     • L 7.3 — Living Things & Climate Change

   Each quiz mixes question types (mc, tf, fill, word) and ends
   with a short-answer section.

   Item shapes:
     mc/fill/word: { _kind, unit, q, options[], answer (index), explain }
     tf:           { _kind:'tf', unit, q, answer (true|false), explain }
     short:        { _kind:'short', unit, q, answer (string), keywords[], explain }
   ================================================================ */

const SCI_FINAL_REVIEWS = {

  /* ============================================================
     SCIENCE FINAL REVIEW 1
     ============================================================ */
  q1: {
    title: "Science Final Review 1",
    subtitle: "Ch 6 · L 7.1 · L 7.2 · L 7.3 — Mix Review",
    emoji: "🔬",

    questions: [

      // ── Ch 6 Adaptation — MC ─────────────────────────────────
      { _kind:'mc', unit:'Ch 6', q:"What is an <strong>adaptation</strong>?", options:["an animal that hunts others","a body part or trait that helps an animal survive","a group of animals living together","a seasonal journey to a warmer place"], answer:1, explain:"An adaptation is a body part or trait that helps an animal survive in its environment." },
      { _kind:'mc', unit:'Ch 6', q:"In the mouse game, why did <strong>dark mice</strong> survive while white mice were eaten?", options:["Dark mice were faster runners","Dark mice blended into dark rocks — better camouflage","White mice chose to stay in dangerous places","Foxes only eat white animals"], answer:1, explain:"Dark mice had better camouflage against dark soil and rocks. The white mice were easy targets for the fox." },
      { _kind:'mc', unit:'Ch 6', q:"A bird with a <strong>big, thick beak</strong> is best suited for…", options:["probing for insects in bark","crushing hard seeds","scooping fish from water","drinking nectar from flowers"], answer:1, explain:"A big, thick beak is a competitive advantage for crushing hard seeds — exactly matching the tool to the job." },
      { _kind:'mc', unit:'Ch 6', q:"How do <strong>elephants</strong> use teamwork to protect their babies from lions?", options:["They run away very fast as a herd","They form a giant circle around their babies to block predators","They use their trunks to throw dirt at lions","They send one large elephant alone to fight the lion"], answer:1, explain:"Adult elephants circle around their young, facing outward — a team protection strategy." },
      { _kind:'mc', unit:'Ch 6', q:"Why do geese fly in a <strong>V-shape</strong>?", options:["To look more impressive to predators","To keep babies safe in the middle","To save energy so they can fly farther","To signal other geese where food is"], answer:2, explain:"V-formation reduces wind drag for birds flying behind the leader — each bird benefits from the one ahead." },

      // ── Ch 6 Adaptation — T/F ────────────────────────────────
      { _kind:'tf', unit:'Ch 6', q:"<strong>Evolution</strong> means that good traits survive and spread while bad traits disappear over generations.", answer:true, explain:"True — natural selection means animals with useful traits survive and reproduce; unhelpful traits gradually disappear." },
      { _kind:'tf', unit:'Ch 6', q:"Zebra stripes help predators easily pick out one zebra to chase.", answer:false, explain:"False — stripes CONFUSE predators when zebras stand together, making it very hard to focus on a single animal." },
      { _kind:'tf', unit:'Ch 6', q:"<strong>Meerkats</strong> take turns on guard duty while the rest of the group eats safely.", answer:true, explain:"True — meerkats rotate lookout duty so the group can forage without being ambushed." },

      // ── Ch 6 Adaptation — Fill ───────────────────────────────
      { _kind:'mc', unit:'Ch 6', q:"FILL: A body part or trait that helps an animal survive is called a(n) ___.", options:["predator","adaptation","migration","camouflage"], answer:1, explain:"Adaptation — the core vocabulary term for Chapter 6." },
      { _kind:'mc', unit:'Ch 6', q:"FILL: Moving to a different place when seasons change is called ___.", options:["adaptation","evolution","camouflage","migration"], answer:3, explain:"Migration — geese, caribou, and monarch butterflies are famous migrants." },
      { _kind:'mc', unit:'Ch 6', q:"FILL: <strong>Blubber</strong> is a thick layer of ___ that keeps animals warm in cold water.", options:["muscle","bone","fat","feathers"], answer:2, explain:"Blubber is insulating fat — it keeps seals, whales, and walruses warm in freezing oceans." },

      // ── Ch 6 Adaptation — Word Problem ───────────────────────
      { _kind:'word', unit:'Ch 6', q:"A seal lives in icy cold water. Which adaptation helps it stay warm?", options:["Long thin beak","Blubber (thick fat layer)","Stripes on its body","Very large eyes"], answer:1, explain:"Blubber is the seal's insulating fat layer — a body adaptation perfectly matched to cold ocean survival." },
      { _kind:'word', unit:'Ch 6', q:"A wolf cannot catch a large moose alone. It joins its pack and they surround the moose together. Which team power is this?", options:["Staying Warm","Protection from lions","Hunting Together","Migration"], answer:2, explain:"Team Power #3 — Hunting Together. A pack can take down prey much larger than any single wolf could handle." },

      // ── L 7.1 Fossils — MC ───────────────────────────────────
      { _kind:'mc', unit:'L 7.1', q:"What is a <strong>fossil</strong>?", options:["a kind of dinosaur","the remains or trace of a living thing that lived very long ago","a rock with shiny minerals","a kind of tree resin"], answer:1, explain:"A fossil is the remains or trace of a living thing that lived very long ago." },
      { _kind:'mc', unit:'L 7.1', q:"Which of these is a <strong>trace fossil</strong>?", options:["a dinosaur tooth","a fish skeleton","a footprint in rock","a piece of amber"], answer:2, explain:"Trace fossils are signs an animal made — footprints, burrows, eggshells, nests, or dung." },
      { _kind:'mc', unit:'L 7.1', q:"<strong>Amber</strong> fossils form when…", options:["minerals fill an empty mold","tree resin traps an insect and hardens","ice freezes a mammoth","tar pits trap large animals"], answer:1, explain:"Amber is hardened tree resin that can preserve insects for over 100 million years." },
      { _kind:'mc', unit:'L 7.1', q:"Most fossils form from the <strong>___</strong> of living things.", options:["soft skin and muscles","blood and feathers","hard parts like bones, shells, and teeth","leaves and flowers"], answer:2, explain:"Hard parts — bones, shells, teeth — fossilize most easily because soft parts decay first." },

      // ── L 7.1 Fossils — T/F ──────────────────────────────────
      { _kind:'tf', unit:'L 7.1', q:"Most living things become fossils after they die.", answer:false, explain:"False — most organisms decay or are eaten. Fossils only form in special conditions." },
      { _kind:'tf', unit:'L 7.1', q:"<strong>Amber</strong> is hardened tree resin that can trap and preserve insects.", answer:true, explain:"True — and amber fossils can be more than 100 million years old." },
      { _kind:'tf', unit:'L 7.1', q:"Dinosaurs are <strong>extinct</strong> — they no longer live on Earth.", answer:true, explain:"True — dinosaurs no longer exist, but their fossilized bones remain." },

      // ── L 7.1 Fossils — Fill ─────────────────────────────────
      { _kind:'mc', unit:'L 7.1', q:"FILL: An animal that no longer lives on Earth is ___.", options:["endangered","ancient","extinct","frozen"], answer:2, explain:"Extinct = no longer living anywhere on Earth." },
      { _kind:'mc', unit:'L 7.1', q:"FILL: A scientist who digs up and studies fossils is called a ___.", options:["biologist","geologist","paleontologist","zoologist"], answer:2, explain:"Paleontologist — the fossil expert!" },
      { _kind:'mc', unit:'L 7.1', q:"FILL: Mud, sand, or tiny pieces of rock that bury organisms and help form fossils are called ___.", options:["amber","sediment","tar","cast"], answer:1, explain:"Sediment is the material that quickly buries a body — key to the fossilization process." },

      // ── L 7.2 Fossils as a Record — MC ───────────────────────
      { _kind:'mc', unit:'L 7.2', q:"What is the <strong>fossil record</strong>?", options:["a museum that displays dinosaur bones","the total of all fossils ever found, organized by time","a list of extinct animals","the layers of rock where fossils are found"], answer:1, explain:"The fossil record is the total collection of all fossils found, organized in units of time — humanity's best evidence of past life." },
      { _kind:'mc', unit:'L 7.2', q:"In rock layers, which layer contains the <strong>oldest</strong> fossils?", options:["The top layer","The middle layer","The bottom layer","All layers are the same age"], answer:2, explain:"Sediment builds up over time — deeper layers = older fossils. This is the law of superposition." },
      { _kind:'mc', unit:'L 7.2', q:"An <strong>index fossil</strong> is useful for dating rock layers because…", options:["it is always found in the deepest rock","it lived for a short, known time and is found in many places","it is the largest fossil ever found","it glows in the dark"], answer:1, explain:"Index fossils come from organisms that lived during a specific, known time period — scientists use them as a timestamp for rock layers." },

      // ── L 7.2 — T/F ──────────────────────────────────────────
      { _kind:'tf', unit:'L 7.2', q:"Deeper rock layers usually contain <strong>older</strong> fossils than layers closer to the surface.", answer:true, explain:"True — sediment piles up over time, leaving newer layers on top of older ones (law of superposition)." },
      { _kind:'tf', unit:'L 7.2', q:"The fossil record shows that <strong>all species</strong> that ever lived on Earth are still alive today.", answer:false, explain:"False — the fossil record shows that most species that ever lived are now extinct." },

      // ── L 7.2 — Fill ─────────────────────────────────────────
      { _kind:'mc', unit:'L 7.2', q:"FILL: The total of all fossils ever found, organized by time, is called the fossil ___.", options:["record","layer","history","museum"], answer:0, explain:"Fossil record — our best evidence of life on Earth through time." },
      { _kind:'mc', unit:'L 7.2', q:"FILL: An ___ fossil comes from an organism that lived for a short, known time and is used to date rock layers.", options:["amber","index","cast","trace"], answer:1, explain:"Index fossil — used as a timestamp for the rock layer it is found in." },

      // ── L 7.3 Climate Change — MC ────────────────────────────
      { _kind:'mc', unit:'L 7.3', q:"What is <strong>climate</strong>?", options:["the weather happening right now","the usual weather pattern of a place over a long time","the temperature of the ocean","how much rain falls in one day"], answer:1, explain:"Climate is the usual long-term weather pattern of a place — different from today's weather (which is just 'weather')." },
      { _kind:'mc', unit:'L 7.3', q:"Which gas — released by burning fossil fuels — is most responsible for warming Earth's climate?", options:["Oxygen","Nitrogen","Carbon dioxide (CO₂)","Hydrogen"], answer:2, explain:"Burning coal, oil, and gas releases CO₂, which traps heat in the atmosphere and warms the planet." },
      { _kind:'mc', unit:'L 7.3', q:"Fossils of tropical plants found in <strong>Antarctica</strong> tell us that…", options:["plants can grow in any climate","Antarctica was once much warmer","those fossils were carried there by animals","scientists planted them there"], answer:1, explain:"Tropical fossils in Antarctica show that the continent was once in a warmer climate — fossils are evidence of past environments." },
      { _kind:'mc', unit:'L 7.3', q:"When the climate changes faster than a species can adapt, what happens?", options:["The species evolves immediately","The species migrates to a better climate","The species may go extinct","The species grows bigger"], answer:2, explain:"If a species cannot adapt fast enough to climate change, it may go extinct — as happened to many species throughout Earth's history." },

      // ── L 7.3 — T/F ──────────────────────────────────────────
      { _kind:'tf', unit:'L 7.3', q:"<strong>Climate change</strong> can cause some species to go extinct.", answer:true, explain:"True — when environments change faster than animals can adapt, populations shrink and may disappear." },
      { _kind:'tf', unit:'L 7.3', q:"The ocean is not affected by climate change.", answer:false, explain:"False — oceans absorb heat, causing sea levels to rise and harming marine ecosystems like coral reefs." },

      // ── L 7.3 — Fill ─────────────────────────────────────────
      { _kind:'mc', unit:'L 7.3', q:"FILL: The usual weather pattern of a place over a long time is called ___.", options:["weather","climate","forecast","temperature"], answer:1, explain:"Climate — long-term pattern. Weather is what happens day to day." },
      { _kind:'mc', unit:'L 7.3', q:"FILL: Burning coal, oil, and gas releases ___ into the atmosphere, trapping heat.", options:["oxygen","nitrogen","carbon dioxide","water vapor"], answer:2, explain:"CO₂ (carbon dioxide) is the main greenhouse gas released by burning fossil fuels." },

    ],

    // Short-answer section (3 questions)
    short: [
      { _kind:'short', unit:'Ch 6',
        q:"Explain in your own words what an <strong>adaptation</strong> is. Give ONE example of an animal adaptation and explain how it helps the animal survive.",
        answer:"An adaptation is a body part or trait that helps an animal survive. Example: a penguin's flippers help it swim fast to catch fish. / Blubber keeps seals warm in cold water. / A bird's thick beak helps it crush hard seeds.",
        keywords:["adaptation","survive","body","part","trait","helps"],
        explain:"Key idea: adaptations are specific body features that improve survival. Any clear example with an explanation of HOW it helps earns full credit." },
      { _kind:'short', unit:'L 7.1 / L 7.2',
        q:"Why are fossils important to scientists? What can fossils tell us about the past?",
        answer:"Fossils are the remains or traces of living things from long ago. Scientists study them to learn what ancient plants and animals looked like, how they lived, and how life on Earth has changed over time. The fossil record also shows that many species are now extinct.",
        keywords:["fossils","ancient","past","extinct","record","scientists","learn"],
        explain:"Key idea: fossils are evidence. They show ancient life forms, past environments, and how species changed — or disappeared — over time." },
      { _kind:'short', unit:'L 7.3',
        q:"How can fossils be used as <strong>evidence of climate change</strong>? Give one example.",
        answer:"Fossils show what environments were like in the past. For example, fossils of tropical plants found in Antarctica show that Antarctica was once much warmer. By comparing ancient fossils to today's species and environments, scientists can see how the climate has changed over millions of years.",
        keywords:["fossils","evidence","climate","change","past","environment","Antarctica"],
        explain:"Key idea: fossils preserve evidence of past climates. Organisms found in places where they cannot survive today show that conditions have dramatically changed." }
    ]
  },

  /* ============================================================
     SCIENCE FINAL REVIEW 2
     ============================================================ */
  q2: {
    title: "Science Final Review 2",
    subtitle: "Ch 6 · L 7.1 · L 7.2 · L 7.3 — Mix Review",
    emoji: "🔬",

    questions: [

      // ── Ch 6 Adaptation — MC ─────────────────────────────────
      { _kind:'mc', unit:'Ch 6', q:"What does <strong>evolve</strong> / <strong>evolution</strong> mean in science?", options:["Animals choose to change their bodies on purpose","Over many generations, helpful traits spread and harmful ones disappear","Animals grow bigger as they get older","Animals learn new skills from their parents"], answer:1, explain:"Evolution is the process where useful traits survive and spread through a population over many generations." },
      { _kind:'mc', unit:'Ch 6', q:"Dolphins push fish into a tight ball when hunting. Which <strong>team power</strong> is this?", options:["Staying Warm","Protection","Hunting Together","Sharing the Work"], answer:2, explain:"Team Power #3 — Hunting Together. Dolphins cooperate to herd fish into a ball so every dolphin gets food." },
      { _kind:'mc', unit:'Ch 6', q:"Which animals use <strong>Team Power: Staying Warm</strong> by huddling together?", options:["Dolphins and Wolves","Penguins, Wolves, Bison, Geese","Elephants and Zebras","Meerkats and Lions"], answer:1, explain:"Penguins, Wolves, Bison, and Geese all huddle to share body heat and survive cold conditions." },
      { _kind:'mc', unit:'Ch 6', q:"Lions in a pride share the job of protecting and raising their cubs. Which team power is this?", options:["Staying Warm","Protection from predators","Hunting Together","Sharing the Work"], answer:3, explain:"Team Power #4 — Sharing the Work. Lions share parenting duties: protecting, feeding, and teaching young cubs together." },
      { _kind:'mc', unit:'Ch 6', q:"What are the TWO secrets to survival described in the Animal Superpowers lesson?", options:["Speed and size","Super Bodies (adaptations) and Super Teams (groups)","Hiding and running away","Sharp teeth and thick skin"], answer:1, explain:"Animals survive with Super Bodies (adaptations) AND Super Teams (living in groups for shared advantage)." },

      // ── Ch 6 — T/F ───────────────────────────────────────────
      { _kind:'tf', unit:'Ch 6', q:"A bird's <strong>beak shape</strong> is an example of an adaptation.", answer:true, explain:"True — beak shape evolved to match the bird's food source: thick beaks for seeds, thin beaks for insects." },
      { _kind:'tf', unit:'Ch 6', q:"Hyenas and wolves can hunt animals <strong>much bigger</strong> than themselves by working as a team.", answer:true, explain:"True — a coordinated pack surrounds, tires, and takes down prey far larger than any single hunter." },
      { _kind:'tf', unit:'Ch 6', q:"Caribou travel <strong>alone</strong> during migration to move faster.", answer:false, explain:"False — caribou travel in HUGE herds to protect each other from predators and find food together." },

      // ── Ch 6 — Fill ──────────────────────────────────────────
      { _kind:'mc', unit:'Ch 6', q:"FILL: Coloring or patterns that help an animal blend into its surroundings is called ___.", options:["blubber","migration","camouflage","evolution"], answer:2, explain:"Camouflage — dark mice, stick insects, and Arctic foxes all use camouflage to hide from predators." },
      { _kind:'mc', unit:'Ch 6', q:"FILL: Having the right body part or skill to get food or survive better than rivals is a ___ advantage.", options:["team","predator","competitive","migration"], answer:2, explain:"Competitive advantage — the right beak, blubber, speed, or group strategy that helps you outcompete others." },
      { _kind:'mc', unit:'Ch 6', q:"FILL: Animals that hunt and eat other animals are called ___.", options:["prey","predators","migrants","herds"], answer:1, explain:"Predators are hunters. The animals they eat are called prey." },

      // ── Ch 6 — Word ──────────────────────────────────────────
      { _kind:'word', unit:'Ch 6', q:"In a dark forest, moths with brown wings that match tree bark survive much better than bright-yellow moths. <strong>Why?</strong>", options:["Brown moths are faster fliers","Brown moths have better camouflage — predators can't spot them as easily","Yellow moths attract more predators on purpose","Brown moths eat more food and grow stronger"], answer:1, explain:"Brown-winged moths have camouflage — a body adaptation. Predators spot the yellow moths more easily, so yellow moths get eaten and their numbers decrease over time." },
      { _kind:'word', unit:'Ch 6', q:"Caribou travel in massive herds during winter migration. What are the TWO main benefits?", options:["They stay warm AND hunt larger animals together","They protect each other from predators AND find new food sources together","They fly farther in V-formation AND share body heat","They confuse predators with stripes AND build shared nests"], answer:1, explain:"Large numbers protect individuals (predators can't easily pick off one from a huge herd) and the herd covers wide areas to find food." },

      // ── L 7.1 Fossils — MC ───────────────────────────────────
      { _kind:'mc', unit:'L 7.1', q:"Which is most likely to become a fossil?", options:["A worm's soft body on dry land","A fish quickly buried in mud at a lake bottom","A leaf blowing in the wind","An animal eaten by other animals"], answer:1, explain:"Fossils form best when organisms are quickly buried — like a fish sinking to a lake bottom and being covered by sediment." },
      { _kind:'mc', unit:'L 7.1', q:"When minerals fill in a fossil mold and harden, the result is called a…", options:["amber fossil","trace fossil","cast fossil","frozen fossil"], answer:2, explain:"A cast fossil forms when minerals enter the empty mold left by a decayed body and harden over many years." },
      { _kind:'mc', unit:'L 7.1', q:"What is a <strong>paleontologist</strong>?", options:["a scientist who studies weather","a scientist who makes fossils","a scientist who digs up and studies fossils","a scientist who studies living animals"], answer:2, explain:"Paleontologists dig up fossils and study them to learn about ancient life on Earth." },
      { _kind:'mc', unit:'L 7.1', q:"Why are <strong>frozen mammoths</strong> especially useful to scientists?", options:["They are made entirely of minerals","Their soft body parts are still preserved","They are the oldest fossils ever found","They formed in tar pits"], answer:1, explain:"Frozen mammoths still have soft parts — hair, skin, stomach contents — telling scientists how they looked, moved, and what they ate." },

      // ── L 7.1 — T/F ──────────────────────────────────────────
      { _kind:'tf', unit:'L 7.1', q:"A fossil <strong>mold</strong> forms when minerals fill an empty space left by a decayed body.", answer:false, explain:"False — that describes a CAST. A MOLD is the empty print itself. The cast forms when minerals fill the mold." },
      { _kind:'tf', unit:'L 7.1', q:"Fossils most often form at the bottom of rivers, swamps, lakes, or oceans.", answer:true, explain:"True — bodies are buried quickly there by sediment before they can fully decay." },

      // ── L 7.1 — Fill ─────────────────────────────────────────
      { _kind:'mc', unit:'L 7.1', q:"FILL: The empty print left in rock when a body decays is called a ___.", options:["cast","mold","amber","sediment"], answer:1, explain:"Mold — the hollow impression. When minerals fill it, it becomes a cast." },
      { _kind:'mc', unit:'L 7.1', q:"FILL: A T-Rex fossil is about ___ million years old.", options:["10","400","65","1"], answer:2, explain:"T-Rex lived about 65 million years ago, at the end of the Mesozoic Era." },

      // ── L 7.2 Fossils as a Record — MC ───────────────────────
      { _kind:'mc', unit:'L 7.2', q:"What does the <strong>fossil record</strong> tell scientists?", options:["Exactly how old the Earth is","How life on Earth has changed over time","Which animals are alive today","How deep the ocean is"], answer:1, explain:"The fossil record is our evidence of life through time — it shows how species appeared, changed, and went extinct." },
      { _kind:'mc', unit:'L 7.2', q:"Why are <strong>index fossils</strong> useful?", options:["They are the most beautiful fossils","They help scientists date the rock layers they are found in","They are always found on the surface","They only form in amber"], answer:1, explain:"Index fossils come from organisms that lived during a known, short time period — they act as timestamps for the rock layer." },
      { _kind:'mc', unit:'L 7.2', q:"The fossil record shows that the number of species on Earth has generally…", options:["stayed exactly the same throughout time","increased over time as new species appeared","decreased steadily as species went extinct","only changed once — during the age of dinosaurs"], answer:1, explain:"Although mass extinctions have wiped out many species, new species have appeared over time — biodiversity has generally grown." },

      // ── L 7.2 — T/F ──────────────────────────────────────────
      { _kind:'tf', unit:'L 7.2', q:"Index fossils are useful because they lived for a <strong>very long time</strong> across many rock layers.", answer:false, explain:"False — index fossils are useful because they lived for a SHORT, KNOWN time. That short time period is what makes them useful as timestamps." },
      { _kind:'tf', unit:'L 7.2', q:"Scientists can use rock layers to estimate how old a fossil is.", answer:true, explain:"True — the law of superposition tells us deeper layers are older, helping scientists estimate a fossil's age." },

      // ── L 7.2 — Fill ─────────────────────────────────────────
      { _kind:'mc', unit:'L 7.2', q:"FILL: In rock layers, the ___ layer contains the oldest fossils.", options:["top","middle","bottom","thickest"], answer:2, explain:"Bottom layer — sediment builds up over time; deeper = older (law of superposition)." },

      // ── L 7.3 Climate Change — MC ────────────────────────────
      { _kind:'mc', unit:'L 7.3', q:"What is the <strong>greenhouse effect</strong>?", options:["Plants growing inside greenhouses produce too much oxygen","Heat-trapping gases in the atmosphere warm the Earth","Cold air trapped underground cools the planet","Rain clouds blocking sunlight and cooling Earth"], answer:1, explain:"Greenhouse gases (like CO₂) trap heat from the sun in the atmosphere, warming the planet — like the glass of a greenhouse." },
      { _kind:'mc', unit:'L 7.3', q:"How can people help slow down climate change?", options:["Use more fossil fuels to create more energy","Cut down more trees to make space for clean energy","Use renewable energy sources like wind and solar power","Travel more by airplane to spread awareness"], answer:2, explain:"Renewable energy (wind, solar, water) produces electricity without releasing CO₂ — reducing the greenhouse effect." },
      { _kind:'mc', unit:'L 7.3', q:"What is one effect of climate change on <strong>animals</strong>?", options:["Animals evolve completely within one year","Some animals go extinct because they cannot adapt fast enough","All animals move to colder regions","Animals grow larger to survive heat"], answer:1, explain:"When climate changes faster than animals can adapt, populations shrink and species may go extinct — as the fossil record has shown many times." },

      // ── L 7.3 — T/F ──────────────────────────────────────────
      { _kind:'tf', unit:'L 7.3', q:"The fossil record can be used as evidence that Earth's climate has changed in the past.", answer:true, explain:"True — fossils of tropical plants in cold regions show that those areas were once warm. Fossils are a climate time machine." },
      { _kind:'tf', unit:'L 7.3', q:"Renewable energy sources like solar and wind power release large amounts of CO₂.", answer:false, explain:"False — renewable energy sources produce electricity without burning fossil fuels, so they release little or no CO₂." },

      // ── L 7.3 — Fill ─────────────────────────────────────────
      { _kind:'mc', unit:'L 7.3', q:"FILL: Energy from the sun and wind are examples of ___ energy.", options:["fossil fuel","nuclear","renewable","extinct"], answer:2, explain:"Renewable energy — solar, wind, and water power are inexhaustible and produce no CO₂ emissions." },
      { _kind:'mc', unit:'L 7.3', q:"FILL: Fossils of tropical plants found in Antarctica show that the climate there was once much ___.", options:["colder","drier","warmer","wetter"], answer:2, explain:"Warmer — tropical plants cannot survive in today's Antarctica. Their fossils prove the climate was once very different." },

    ],

    // Short-answer section (3 questions)
    short: [
      { _kind:'short', unit:'Ch 6',
        q:"What is the difference between surviving with a <strong>Super Body</strong> (adaptation) and surviving with a <strong>Super Team</strong> (group)? Give one example of each.",
        answer:"A Super Body is a body part or trait that helps an individual animal survive — like blubber keeping a seal warm. A Super Team is when animals work together in a group — like wolves hunting in a pack to catch large prey they couldn't catch alone.",
        keywords:["adaptation","body","group","team","example","survive","together"],
        explain:"Key idea: adaptations are individual physical traits; group living is behavioral cooperation. Both are survival strategies — but they work differently." },
      { _kind:'short', unit:'L 7.1 / L 7.2',
        q:"Explain how a fossil forms. Describe at least <strong>TWO steps</strong> in the process.",
        answer:"When an animal dies in water, it sinks to the bottom. Sediment (mud and sand) covers the body quickly. Over millions of years, minerals replace the remains and harden into rock. The result is a fossil. A paleontologist may eventually dig it up.",
        keywords:["die","sediment","buried","minerals","rock","time","million","harden"],
        explain:"Key idea: fossilization requires quick burial by sediment, time, and mineral replacement. All conditions must be just right — which is why fossils are rare." },
      { _kind:'short', unit:'L 7.3',
        q:"How does climate change affect animals and plants? What can people do to help slow it down?",
        answer:"Climate change causes habitats to warm, making it harder for some animals and plants to survive. If they cannot adapt fast enough, they may go extinct. People can help by using renewable energy like solar and wind power, planting trees, reducing waste, and using less fossil fuel.",
        keywords:["climate","change","extinct","adapt","renewable","energy","help","fossil fuel"],
        explain:"Key idea: climate change threatens biodiversity, but human choices — especially switching to renewable energy — can slow it down." }
    ]
  }
};
