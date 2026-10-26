/* Lingua: inglese di base, italiano tradotto qui. Il motore traduce i nodi di testo e alcuni attributi
   (anche quelli creati dopo, tramite MutationObserver) e torna all'originale quando si rimette EN. */
(function(){
const IT={
"Home":"Home","Cases":"Progetti","Framework":"Metodo","About":"Chi sono",
"Let's meet":"Incontriamoci","Ciao":"Ciao","☀ Light":"☀ Chiaro","☾ Dark":"☾ Scuro",
"Drag":"Trascina","Spin":"Ruota","Return to world":"Torna al mondo","View case study":"Vedi il progetto","About me":"Chi sono",
"me":"me",
"An AI configurator that lets you design a Finnish prefab home first, then meet the builder.":"Un configuratore AI per progettare prima la tua casa prefabbricata finlandese e poi incontrare il costruttore.",
"Personal project":"Progetto personale",
"The fantasy game of real life: call what friends do, vote it, and climb the live standings.":"Il fantagioco della vita reale: chiama quello che fanno gli amici, votalo e scala la classifica in diretta.",
"Sinis Marine Protected Area":"Area Marina Protetta del Sinis",
"Urban furniture that keeps tourists from carrying away the quartz sand of the Sinis Peninsula.":"Arredo urbano che evita che i turisti portino via la sabbia di quarzo della Penisola del Sinis.",
"A modular tractor HMI that lets farmers multitask safely while Level 3 autonomy keeps the row.":"Un'interfaccia modulare per trattori che permette di fare più cose in sicurezza mentre la guida autonoma di livello 3 tiene il filare.",
"An immersive exhibition on Superstudio's Quaderna series, staged in Ferrara's Verdi Theatre.":"Una mostra immersiva sulla serie Quaderna di Superstudio, allestita nel Teatro Verdi di Ferrara.",
"Museum of Marsh Herbs":"Museo delle Erbe Palustri",
"A modular overwear jacket handwoven with traditional techniques from Romagna.":"Una giacca modulare da indossare sopra gli abiti, tessuta a mano con tecniche tradizionali romagnole.",
"A redesigned water pack with an ergonomic handle and a cardboard structure.":"Una confezione d'acqua ripensata, con maniglia ergonomica e struttura in cartone.",
"Ethnographic Museum of Santarcangelo":"Museo Etnografico di Santarcangelo",
"A 3D-printed chess set that reinterprets the traditional objects of Romagna.":"Una scacchiera stampata in 3D che reinterpreta gli oggetti tradizionali della Romagna.",
"Case study coming soon":"Progetto in arrivo","Case study coming soon.":"Progetto in arrivo.",
"Chiara Alessi interview":"Intervista a Chiara Alessi",
"Social media video for the launch of Chiara Alessi's book Lo Stato Delle Cose.":"Video social per il lancio del libro di Chiara Alessi Lo Stato Delle Cose.",
"Book presentation video":"Video di presentazione del libro",
"Camera operator on the 2017 docufilm Fuocosacro.":"Operatore di ripresa nel docufilm Fuocosacro del 2017.",
"Documentary":"Documentario",
"Unofficial Audi spot":"Spot Audi non ufficiale",
"A self-initiated car spot, shot and edited as a videomaking experiment.":"Uno spot auto di iniziativa personale, girato e montato come esperimento di videomaking.",
"Videomaking experiment":"Esperimento di videomaking",
"Design concept":"Concept di design","Speculative design":"Design speculativo",
"Drag to rotate · Scroll to explore":"Trascina per ruotare · Scorri per esplorare",
"ESC to return to the sphere":"ESC per tornare alla sfera",
"I'm Tobia Seu":"Sono Tobia Seu",
"Industrial product designer, from":"Designer del prodotto industriale, dai",
"products and exhibitions":"prodotti e dagli allestimenti",
"to interfaces. I turn complex ideas into tangible experiences, with an interdisciplinary and experimental approach.":"alle interfacce. Trasformo idee complesse in esperienze tangibili, con un approccio interdisciplinare e sperimentale.",
"Know more about me":"Scopri chi sono",
"I give":"Do","tangible forms":"forme tangibili","to complex systems":"a sistemi complessi",
"And create something":"E creo qualcosa","that keeps":"che mette","people":"le persone","in the center":"al centro",
"Research":"Ricerca","Systems":"Sistemi","Interfaces":"Interfacce","3D & Motion":"3D e motion",
"Selected cases":"Progetti scelti","Selected":"Progetti","cases":"scelti",
"View case study ↗":"Vedi il progetto ↗","Archive":"Archivio",
"Every project,":"Ogni progetto,","one place.":"in un solo posto.",
"10 more projects beyond the selected cases.":"Altri 10 progetti oltre a quelli scelti.",
"See all cases":"Vedi tutti i progetti",
"Product design":"Design del prodotto","Exhibition design":"Allestimento","Textile design":"Design tessile","System design":"Design sistemico","Prototyping":"Prototipazione","UX/UI":"UX/UI",
"Systemic thinking,":"Pensiero sistemico,","tangible":"risultati","results.":"tangibili.",
"Entering the system before designing it: field work, interviews, the people inside the problem.":"Entrare nel sistema prima di progettarlo: lavoro sul campo, interviste, le persone dentro il problema.",
"Turning complexity into a shared map of actors, flows and leverage points.":"Trasformare la complessità in una mappa condivisa di attori, flussi e punti di leva.",
"Giving the map a form that can be used, tested and improved.":"Dare alla mappa una forma che si può usare, testare e migliorare.",
"See the framework":"Scopri il metodo",
"Every project in one place, newest first: product, interface, exhibition, textile and system design.":"Tutti i progetti in un solo posto, dal più recente: prodotto, interfacce, allestimenti, tessile e design sistemico.",
"All":"Tutti","Product Design":"Design del prodotto","Textile & Fashion":"Tessile e moda","Videomaking":"Videomaking","Speculative Design":"Design speculativo",
"Cards":"Schede","List":"Elenco",
"Hi, I'm":"Ciao, sono","Tobia.":"Tobia.",
"Industrial product designer with an interdisciplinary, experimental approach: from products and exhibitions to UX/UI.":"Designer del prodotto industriale con un approccio interdisciplinare e sperimentale: dai prodotti e dagli allestimenti alla UX/UI.",
"I approach design in an interdisciplinary and experimental way, embracing diverse methods to grow both creatively and professionally.":"Affronto il progetto in modo interdisciplinare e sperimentale, usando metodi diversi per crescere sia creativamente sia professionalmente.",
"I hold a degree in Industrial Product Design, with a passion for projects in all their forms, from product development to visual communication. My background includes exhibition design, prototyping and interactive design, while my most recent work has focused on UX and UI.":"Sono laureato in Design del Prodotto Industriale e mi appassionano i progetti in tutte le loro forme, dallo sviluppo del prodotto alla comunicazione visiva. Ho esperienza in allestimento, prototipazione e design interattivo, e il mio lavoro più recente si concentra su UX e UI.",
"I am ambitious, with strong interpersonal skills, and I often act as a cohesive force within teams.":"Sono ambizioso, ho buone capacità relazionali e spesso faccio da collante nei team.",
"3D & rendering":"3D e rendering","Scroll for the CV ↓":"Scorri per il CV ↓",
"01 — Experience":"01 — Esperienze","Experience":"Esperienze",
"2025 · 4 months":"2025 · 4 mesi","UX-UI Design Start-up Internship":"Tirocinio UX/UI in una start-up",
"Iprefab OY · Aalto Start-Up Centre, Espoo (Finland)":"Iprefab OY · Aalto Start-Up Centre, Espoo (Finlandia)",
"Designed the customer journey to optimize the user experience and developed a Figma prototype for the start-up's new website, working with the front-end and back-end teams and with marketing on visual and communication strategy.":"Ho progettato la customer journey per ottimizzare l'esperienza d'uso e sviluppato il prototipo Figma del nuovo sito della start-up, lavorando con i team front-end e back-end e con il marketing sulla strategia visiva e di comunicazione.",
"2024 · 2 months":"2024 · 2 mesi","Interior Design Internship":"Tirocinio di interior design",
"3D modeling with Rhinoceros for commissioned projects, and advanced rendering with Cinema 4D and Corona, working as part of the team.":"Modellazione 3D con Rhinoceros per progetti su commissione e rendering avanzato con Cinema 4D e Corona, lavorando nel team.",
"Graphic Designer (volunteer)":"Graphic designer (volontario)",
"Part of the design team in the early stages of the event's first edition, developing the visual identity concept and aligning the communication strategy with marketing.":"Nel team di design nelle prime fasi della prima edizione dell'evento, ho sviluppato il concept dell'identità visiva e allineato la strategia di comunicazione con il marketing.",
"2017 — now":"2017 — oggi","Videomaker & Photographer":"Videomaker e fotografo",
"Freelance · Sardinia & Northern Italy":"Freelance · Sardegna e Nord Italia",
"Weddings, promotional videos for local brands and music videos for emerging artists; social media production for the launch of Chiara Alessi's":"Matrimoni, video promozionali per brand locali e videoclip per artisti emergenti; contenuti social per il lancio del libro di Chiara Alessi",
"(2023); cameraman on the 2017 docufilm":"(2023); operatore di ripresa nel docufilm del 2017",
"02 — Education":"02 — Formazione","Education":"Formazione","2025 — now":"2025 — oggi",
"Master's degree":"Laurea magistrale","Second year.":"Secondo anno.",
"Bachelor's Degree in Industrial Product Design":"Laurea triennale in Design del Prodotto Industriale",
"Thesis project:":"Tesi:",
", a modular urban furniture system for the protection of the quartz beaches of Sinis.":", un sistema modulare di arredo urbano per proteggere le spiagge di quarzo del Sinis.",
"Scientific High School Diploma":"Diploma di liceo scientifico",
"Student representative (2020–2021), developing leadership, communication and team coordination skills.":"Rappresentante degli studenti (2020–2021), un'esperienza che mi ha fatto crescere in leadership, comunicazione e coordinamento del team.",
"03 — Skills":"03 — Competenze","Skills":"Competenze","& tools":"e strumenti",
"Illustration & layout":"Illustrazione e impaginazione","Photography":"Fotografia","Other tools":"Altri strumenti",
"AI workflow":"Flusso di lavoro con l'AI","Main tools · 6 months":"Strumenti principali · 6 mesi","About 2 years":"Circa 2 anni","Since 2022":"Dal 2022",
"Design":"Design","Design thinking":"Design thinking","Concept sketching":"Schizzi di concept","UX/UI wireframing":"Wireframe UX/UI","Product prototyping":"Prototipazione di prodotto","Visual identity & storytelling":"Identità visiva e storytelling",
"Languages":"Lingue","Italian — mother tongue":"Italiano — madrelingua","English — B2 (IELTS 6.5, 2025)":"Inglese — B2 (IELTS 6.5, 2025)",
"Publication":"Pubblicazione","Design Anthropology journal article, with Prof. G. Scandurra (2024)":"Articolo sulla rivista Design Anthropology, con il Prof. G. Scandurra (2024)",
"The full CV,":"Il CV completo,","in PDF.":"in PDF.","Download CV ↓":"Scarica il CV ↓",
"The":"Il","framework":"metodo",
"A systemic method to turn complex structures into tangible, people-centred interfaces.":"Un metodo sistemico per trasformare strutture complesse in interfacce tangibili e centrate sulle persone.",
"Observe":"Osservare","Entering the system before designing it: field research, interviews and data.":"Entrare nel sistema prima di progettarlo: ricerca sul campo, interviste e dati.",
"Map":"Mappare","Turning complexity into a shared map of actors, flows and tensions.":"Trasformare la complessità in una mappa condivisa di attori, flussi e tensioni.",
"Prototype":"Prototipare","Giving the map a tangible form with testable products and interfaces.":"Dare alla mappa una forma tangibile con prodotti e interfacce da testare.",
"Evolve":"Evolvere","Measuring what changes and letting the system keep growing.":"Misurare cosa cambia e lasciare che il sistema continui a crescere.",
"Let's make it":"Rendiamolo","tangible.":"tangibile.",
"Navigate":"Naviga","Elsewhere":"Altrove","Based in":"Vivo a","Turin, Italy":"Torino, Italia",
"© 2026 Tobia Seu — Systemic Design Portfolio":"© 2026 Tobia Seu — Portfolio di design sistemico",
"World":"Mondo","Me":"Io","Contact":"Contatti",
"Drag the cases, scroll for more":"Trascina i progetti, scorri per vederne altri",
"Previous card":"Scheda precedente","Next card":"Scheda successiva","Sections":"Sezioni",
"TEDx":"TEDx","Videomaking and photography":"Videomaking e fotografia",
"Share of my AI work: Claude and Claude Code 75 percent, Gemini 20 percent, ChatGPT 5 percent":"Quota del mio lavoro con l'AI: Claude e Claude Code 75 per cento, Gemini 20 per cento, ChatGPT 5 per cento",
"All cases":"Tutti i progetti","Client":"Cliente","Type":"Tipo","Role":"Ruolo","Year":"Anno",
"Summary":"In breve","Team":"Team","Duration":"Durata","Discipline":"Disciplina",
"Next project":"Prossimo progetto","Keep scrolling to open it":"Continua a scorrere per aprirlo",
"Coming soon":"In arrivo","Gallery":"Galleria","Individual":"Individuale",
"Team of 3":"Team di 3","Team of 4":"Team di 4","Team of 5":"Team di 5",
"3 months":"3 mesi","4 months":"4 mesi","6 months":"6 mesi",
"Start-up team":"Team della start-up","Start-up internship":"Tirocinio in start-up",
"University project":"Progetto universitario","Thesis project":"Progetto di tesi","Digital product":"Prodotto digitale",
"UX/UI Design":"UX/UI Design","System Design":"Design sistemico","Exhibition Design":"Allestimento","Textile Design":"Design tessile","Package Design":"Packaging","Concept Design":"Concept design",
/* Iprefab */
"Customer journey, UX/UI and Figma prototype":"Customer journey, UX/UI e prototipo Figma",
"Customer journey and mobile prototype for Iprefab, a start-up at the Aalto Start-Up Centre: describe your home, see it take shape in 3D and compare models from Finland's prefab builders.":"Customer journey e prototipo mobile per Iprefab, start-up dell'Aalto Start-Up Centre: descrivi la tua casa, guardala prendere forma in 3D e confronta i modelli dei costruttori finlandesi di prefabbricati.",
"Design first, then meet the builder":"Prima progetti, poi incontri il costruttore",
"Iprefab is an AI configurator for Finnish prefab homes. During my four-month UX/UI internship at the Aalto Start-Up Centre in Espoo, I designed the customer journey and built the Figma prototype for the start-up's new website, working with the development and marketing teams.":"Iprefab è un configuratore AI per case prefabbricate finlandesi. Durante i quattro mesi di tirocinio UX/UI all'Aalto Start-Up Centre di Espoo ho progettato la customer journey e costruito il prototipo Figma del nuovo sito della start-up, lavorando con i team di sviluppo e marketing.",
"Journey":"Percorso","Six calm phases":"Sei fasi tranquille",
"The journey takes people from the plot to the meeting with the builder in six phases, each one a single, clear decision. A progress bar keeps the path visible, and the landing screen promises exactly that: describe your dream home in your own words and Iprefab sketches it, estimates the price and compares models.":"Il percorso porta le persone dal terreno all'incontro con il costruttore in sei fasi, ognuna una sola decisione chiara. Una barra di avanzamento tiene visibile il cammino e la schermata iniziale promette proprio questo: descrivi la casa dei tuoi sogni con parole tue e Iprefab la abbozza, ne stima il prezzo e confronta i modelli.",
"Configurator":"Configuratore","A skeleton that builds as you choose":"Uno scheletro che si costruisce mentre scegli",
"A 3D wireframe of the house rebuilds as the choices change, while the estimated price moves live. People can type a sentence and let the AI turn it into a house they can see, or pick size, floors and roof with one tap.":"Un wireframe 3D della casa si ricostruisce a ogni scelta, mentre il prezzo stimato si aggiorna in diretta. Si può scrivere una frase e lasciare che l'AI la trasformi in una casa visibile, oppure scegliere dimensioni, piani e tetto con un tocco.",
"Houses":"Case","Models from Finland's prefab builders":"I modelli dei costruttori finlandesi",
"Once the design is clear, the browse screen compares real models from the builders: filters for house type, size range, price, rooms and floors, a results list with builder tags, and an Ask AI shortcut always within reach.":"Quando il progetto è chiaro, la schermata di ricerca confronta i modelli reali dei costruttori: filtri per tipo di casa, metratura, prezzo, stanze e piani, un elenco di risultati con l'etichetta del costruttore e una scorciatoia Chiedi all'AI sempre a portata di mano.",
"Handoff":"Passaggio allo sviluppo","From prototype to implementation":"Dal prototipo all'implementazione",
"The Figma prototype was the shared reference for the front-end and back-end teams, and the visual language was aligned with the marketing strategy so product and communication speak with one voice.":"Il prototipo Figma è stato il riferimento comune per i team front-end e back-end, e il linguaggio visivo è stato allineato alla strategia di marketing, così prodotto e comunicazione parlano con una sola voce.",
/* Fanta.me */
"Concept, UX/UI design and prototype":"Concept, UX/UI design e prototipo",
"A mobile game where a group of friends turns everyday moments into points, with bonus and malus cards, fantapowers and a live podium.":"Un gioco per smartphone in cui un gruppo di amici trasforma i momenti di ogni giorno in punti, con carte bonus e malus, fantapoteri e un podio in diretta.",
"The fantasy game of real life":"Il fantagioco della vita reale",
"Fanta.me turns a group of friends into a fantasy league of real life. Someone does something, the card is called, the group confirms the points and the standings move live. Rooms like Fantapasquetta bring people back with one tap.":"Fanta.me trasforma un gruppo di amici in una fantalega della vita reale. Qualcuno fa qualcosa, la carta viene chiamata, il gruppo conferma i punti e la classifica si muove in diretta. Stanze come Fantapasquetta riportano tutti in gioco con un tocco.",
"Rules":"Regole","Call it, vote it":"Chiamala, votala",
"Anyone can call a card when something happens. The rest of the group votes, and only confirmed calls count toward the standings, which keeps the game fair and the arguments fun. A live points feed shows every confirmed call as it lands.":"Chiunque può chiamare una carta quando succede qualcosa. Il resto del gruppo vota e contano in classifica solo le chiamate confermate: il gioco resta giusto e le discussioni divertenti. Un feed dei punti in diretta mostra ogni chiamata confermata appena arriva.",
"Powers":"Poteri","Turbo doubles, Moviola cancels":"Turbo raddoppia, Moviola annulla",
"Fantapowers add strategy on top of luck: Turbo doubles a call, Moviola cancels it, and each power can be used once per game, with a countdown that makes the timing matter.":"I fantapoteri aggiungono strategia alla fortuna: Turbo raddoppia una chiamata, Moviola la annulla, e ogni potere si usa una sola volta a partita, con un conto alla rovescia che rende importante il momento giusto.",
"Deck":"Mazzo","Bonus and malus as collectible cards":"Bonus e malus come carte da collezione",
"The game deck is a set of collectible cards, from +25 to -15, with a base set of 20 and room for personal cards. The deck is closed when the game starts, so everyone plays with the same rules.":"Il mazzo è un set di carte da collezione, da +25 a -15, con una base di 20 carte e spazio per quelle personali. Il mazzo si chiude all'inizio della partita, così tutti giocano con le stesse regole.",
"Standings":"Classifica","Teams on a live podium":"Squadre su un podio in diretta",
"Teams and individuals are ranked on a live podium, with a daily view and a full-game view, so the story of the game is always one tab away.":"Squadre e singoli sono in classifica su un podio in diretta, con una vista giornaliera e una dell'intera partita, così la storia del gioco è sempre a un tab di distanza.",
/* Grain Keeper */
"Research, data analysis and design":"Ricerca, analisi dei dati e progetto",
"Thesis project developed with the Sinis Marine Protected Area to counter the unintentional removal of quartz sand caused by overtourism.":"Progetto di tesi sviluppato con l'Area Marina Protetta del Sinis per contrastare l'asportazione involontaria della sabbia di quarzo causata dal sovraturismo.",
"A system to keep the sand":"Un sistema per trattenere la sabbia",
"A series of urban furniture elements designed to protect the quartz sand of the Sinis Peninsula beaches, threatened by unintentional removal caused by overtourism. Developed as my thesis, in close collaboration with the Sinis Marine Protected Area. I managed the entire process, from the initial research to the project development, handling both data analysis and design.":"Una serie di elementi di arredo urbano progettati per proteggere la sabbia di quarzo delle spiagge della Penisola del Sinis, minacciata dall'asportazione involontaria causata dal sovraturismo. È la mia tesi, sviluppata in stretta collaborazione con l'Area Marina Protetta del Sinis. Ho seguito l'intero processo, dalla ricerca iniziale allo sviluppo del progetto, occupandomi sia dell'analisi dei dati sia del design.",
"Problem":"Problema","Tourists are carrying the sand away":"I turisti portano via la sabbia",
"Overtourism is endangering the quartz sand of the Sinis Peninsula. The sand is geologically exceptional: it originates from a nearby island and formed millions of years ago, and its rarity and fragility make its preservation a priority. Dedicated showers recover the sand unintentionally removed by tourists, but their filtration clogs, so they are rarely fully operational.":"Il sovraturismo mette in pericolo la sabbia di quarzo della Penisola del Sinis. È una sabbia geologicamente eccezionale: proviene da un'isola vicina e si è formata milioni di anni fa, e la sua rarità e fragilità rendono la sua tutela una priorità. Docce dedicate recuperano la sabbia portata via involontariamente dai turisti, ma i loro filtri si intasano e quindi raramente funzionano a pieno.",
"Maintenance is the real problem":"Il vero problema è la manutenzione",
"The research phase was run jointly with the Sinis Marine Protected Area on the quartz beaches of Is Arutas, Mari Ermi, Corrigas and S'archeddu e Sa Canna. The main issue of the existing design is not collecting the sand but the frequent maintenance it requires, which is unsustainable with the limited resources available.":"La ricerca è stata svolta insieme all'Area Marina Protetta del Sinis sulle spiagge di quarzo di Is Arutas, Mari Ermi, Corrigas e S'archeddu e Sa Canna. Il problema principale del sistema esistente non è raccogliere la sabbia ma la manutenzione frequente che richiede, insostenibile con le poche risorse disponibili.",
"Output":"Risultato","Showers and a bench that filter and store":"Docce e una panca che filtrano e conservano",
"A redesigned shower with a sturdier structure, a bamboo tray and a filtration system under the user's feet: a funnel sends water and sand to two stacked filters, 1 mm for the quartz sand and 200 micron for sediment. With about 10 litres of capacity, double the previous design, it runs longer between maintenance. Alongside it, a bench offers dry sand storage and a buffer between beach and parking.":"Una doccia riprogettata con una struttura più robusta, una pedana in bambù e un sistema di filtraggio sotto i piedi: un imbuto porta acqua e sabbia a due filtri sovrapposti, da 1 mm per la sabbia di quarzo e da 200 micron per i sedimenti. Con circa 10 litri di capacità, il doppio del modello precedente, lavora più a lungo tra una manutenzione e l'altra. Accanto, una panca conserva la sabbia asciutta e fa da filtro tra spiaggia e parcheggio.",
"Solution":"Soluzione","Visitors release it, volunteers return it":"I visitatori la lasciano, i volontari la restituiscono",
"Multilingual prompts on the shower and along the path invite visitors to release the quartz sand as they leave. The sand collects in the filters or in the bench, and volunteers regularly return it to the beach. The products are modular, so the filtering areas can be configured for the size and shape of each beach.":"Messaggi in più lingue sulla doccia e lungo il percorso invitano i visitatori a lasciare la sabbia di quarzo mentre escono. La sabbia si raccoglie nei filtri o nella panca e i volontari la riportano regolarmente in spiaggia. I prodotti sono modulari, così le aree di filtraggio si adattano alla dimensione e alla forma di ogni spiaggia.",
/* Hive */
"Research, UX/UI and prototype":"Ricerca, UX/UI e prototipo",
"Cognitive Ergonomics and HMI project: a touch-and-tactile cockpit for autonomous orchard tractors, with a rotary knob, a pillar mapping screen and a two-level take-over request shared with the crew.":"Progetto di Ergonomia cognitiva e HMI: una cabina touch e tattile per trattori autonomi da frutteto, con una manopola rotativa, uno schermo di mappatura sul montante e una richiesta di ripresa del controllo su due livelli condivisa con la squadra.",
"The tractor is the body, the hive is the network":"Il trattore è il corpo, l'alveare è la rete",
"Hive is a human-machine interface for Level 3 autonomous tractors in orchards and vineyards. While the tractor keeps the row on its own, the operator, even a seasonal worker on their first day, can plan the day, tag the field and stay in control. Developed in a team of five for the Cognitive Ergonomics and HMI course.":"Hive è un'interfaccia uomo-macchina per trattori autonomi di livello 3 in frutteti e vigneti. Mentre il trattore tiene il filare da solo, l'operatore, anche uno stagionale al primo giorno, può pianificare la giornata, segnalare punti del campo e restare in controllo. Sviluppato in un team di cinque per il corso di Ergonomia cognitiva e HMI.",
"What farmers asked for":"Cosa chiedevano gli agricoltori",
"We benchmarked six Level 3 systems, from Mercedes and BMW to Monarch and John Deere, read what farmers say online and interviewed growers, contractors and technicians around Cuneo. The same issues kept coming back: error codes with no words, touchscreens that fail on bumpy ground, implement settings to re-enter every time and a weak sense of safety around people in the rows.":"Abbiamo analizzato sei sistemi di livello 3, da Mercedes e BMW a Monarch e John Deere, letto cosa dicono gli agricoltori online e intervistato coltivatori, contoterzisti e tecnici nella zona di Cuneo. Tornavano sempre gli stessi problemi: codici di errore senza parole, touchscreen che non funzionano su terreni sconnessi, impostazioni degli attrezzi da reinserire ogni volta e poca sicurezza con le persone nei filari.",
"Concept":"Concept","Touch to plan, a knob for the field":"Il touch per pianificare, una manopola per il campo",
"A detachable horizontal dashboard and a vertical mapping screen on the cab pillar split control from navigation. A rotary knob mirrors every touch gesture: push left for the menu, push right to drop a marker for weeds, disease, pests or drainage, press to adjust working depth or rotor speed.":"Un cruscotto orizzontale removibile e uno schermo verticale di mappatura sul montante della cabina separano il controllo dalla navigazione. Una manopola rotativa replica ogni gesto touch: spingi a sinistra per il menu, a destra per segnare erbe infestanti, malattie, parassiti o drenaggio, premi per regolare la profondità di lavoro o la velocità del rotore.",
"Safety":"Sicurezza","Two levels of take-over":"Due livelli di ripresa del controllo",
"When a person is within 50 metres, a Planned TOR turns the borders yellow, plays a soft chime and pulses the crew wristbands. If a collision is less than five seconds away, an Emergency TOR turns every screen red with a loud alarm, and stops tractor and implement if nobody reacts. Colour, sound and vibration say the same thing on every device.":"Quando una persona è entro 50 metri, un TOR pianificato colora di giallo i bordi, emette un suono leggero e fa vibrare i braccialetti della squadra. Se una collisione è a meno di cinque secondi, un TOR di emergenza colora di rosso ogni schermo con un allarme forte e ferma trattore e attrezzo se nessuno reagisce. Colore, suono e vibrazione dicono la stessa cosa su ogni dispositivo.",
"Outcome":"Esito","A modular kit, not a new fleet":"Un kit modulare, non una nuova flotta",
"Expert reviewers praised the clarity of the layout and a hardware-agnostic kit that moves across a mixed fleet and protects what farmers already own. Their next step for us: a quick-message channel between operators, so crews can coordinate shared tasks without reaching for a phone.":"I revisori esperti hanno apprezzato la chiarezza del layout e un kit indipendente dall'hardware che passa da un mezzo all'altro di una flotta mista e tutela ciò che gli agricoltori già possiedono. Il prossimo passo che ci hanno suggerito: un canale di messaggi rapidi tra operatori, per coordinare i lavori condivisi senza prendere il telefono.",
/* Quadernazione */
"Concept, 3D modeling and visualization":"Concept, modellazione 3D e visualizzazione",
"Exhibition concept for Zanotta that showcases the radical minds of Superstudio and their Quaderna products through an immersive journey.":"Concept di mostra per Zanotta che racconta le menti radicali di Superstudio e i loro prodotti Quaderna attraverso un percorso immersivo.",
"A journey through the radical":"Un viaggio nel radicale",
"An exhibition concept for Zanotta that showcases the radical minds of Superstudio and their Quaderna products through an immersive journey reflecting on society and the future. It is hosted in the former Verdi Theatre in Ferrara. I mainly worked on the concept, the 3D modeling and the visualization, including the renders for the exhibition.":"Un concept di mostra per Zanotta che racconta le menti radicali di Superstudio e i loro prodotti Quaderna attraverso un percorso immersivo che riflette sulla società e sul futuro. È ospitata nell'ex Teatro Verdi di Ferrara. Mi sono occupato soprattutto del concept, della modellazione 3D e della visualizzazione, compresi i render della mostra.",
"The continuous monument":"Il monumento continuo",
"The project showcases the Quaderna series, designed by the Superstudio collective and produced by Zanotta. The exhibition highlights not only the products but also the visionary and radical philosophy behind them. Central to the show is the concept of the “continuous monument”, the main theme and driving force of the whole exhibition.":"Il progetto presenta la serie Quaderna, disegnata dal collettivo Superstudio e prodotta da Zanotta. La mostra mette in luce non solo i prodotti ma anche la filosofia visionaria e radicale che li sostiene. Al centro c'è il concetto di “monumento continuo”, tema principale e motore dell'intera mostra.",
"Space":"Spazio","The stage tower of the Verdi Theatre":"La torre scenica del Teatro Verdi",
"The stage tower of the former Verdi Theatre in Ferrara was chosen for its strong visual harmony with the showcased products. Its vast, open spaces create an ideal environment for exhibition artifacts inspired by the continuous monument.":"La torre scenica dell'ex Teatro Verdi di Ferrara è stata scelta per la forte armonia visiva con i prodotti esposti. I suoi spazi ampi e aperti sono l'ambiente ideale per allestimenti ispirati al monumento continuo.",
"System":"Sistema","A modular system of environments":"Un sistema modulare di ambienti",
"The exhibition is structured around the Continuous Monument, an architectural device that divides the space into semi-open environments and integrates captions and technical equipment such as lighting and speakers. Nine environments, from the entrance and colophon to an immersive room, a video installation and storage.":"La mostra è costruita attorno al Monumento Continuo, un dispositivo architettonico che divide lo spazio in ambienti semiaperti e integra didascalie e impianti come luci e altoparlanti. Nove ambienti, dall'ingresso e dal colophon a una sala immersiva, un'installazione video e un deposito.",
"A path with no fixed route":"Un percorso senza un tragitto fisso",
"Visitors enter through a transitional space and then choose their own path; only a suggested one continues after the colophon. An immersive room hosts an open discussion about the future and a video projection shows Superstudio's Supersuperficie, for a visit of about 30 minutes. The visual identity pairs acid green with the Quaderna pattern in a bold yet minimal composition.":"I visitatori entrano da uno spazio di passaggio e poi scelgono il proprio percorso; solo uno suggerito prosegue dopo il colophon. Una sala immersiva ospita un dibattito aperto sul futuro e una proiezione mostra la Supersuperficie di Superstudio, per una visita di circa 30 minuti. L'identità visiva unisce il verde acido al motivo Quaderna in una composizione decisa ma essenziale.",
/* Buxaka */
"Textile project with the Museum of Marsh Herbs in Bagnacavallo: a modular streetwear jacket that pays tribute to handmade craftsmanship.":"Progetto tessile con il Museo delle Erbe Palustri di Bagnacavallo: una giacca streetwear modulare che rende omaggio all'artigianato fatto a mano.",
"Craft, worn every day":"Artigianato da indossare ogni giorno",
"A project developed with the University of Ferrara and the Eco Museum of Marsh Herbs in Bagnacavallo. The objective was to design an everyday object using traditional weaving techniques from the Romagna region, preserving local craftsmanship through contemporary design. I mainly worked on the concept, the 3D modeling and the visualization, including the renders for the exhibition.":"Un progetto sviluppato con l'Università di Ferrara e l'Ecomuseo delle Erbe Palustri di Bagnacavallo. L'obiettivo era progettare un oggetto di uso quotidiano con le tecniche di intreccio tradizionali della Romagna, tutelando l'artigianato locale attraverso il design contemporaneo. Mi sono occupato soprattutto del concept, della modellazione 3D e della visualizzazione, compresi i render per la mostra.",
"Streetwear meets tradition":"Lo streetwear incontra la tradizione",
"The idea was to merge everyday streetwear with practical usability. The result is a modular overwear jacket designed to carry your daily essentials with ease, and a tribute to the handmade craftsmanship that has been gradually fading from the fashion world.":"L'idea era unire lo streetwear di tutti i giorni alla praticità d'uso. Il risultato è una giacca modulare da indossare sopra gli abiti, pensata per portare con facilità gli oggetti di ogni giorno, e un omaggio all'artigianato fatto a mano che sta lentamente scomparendo dalla moda.",
"Process":"Processo","Woven by hand":"Intrecciata a mano",
"The entire project was handcrafted with traditional textile techniques: loom weaving, basket weave, plain weave and braiding, each selected to balance decorative and structural needs.":"L'intero progetto è stato realizzato a mano con tecniche tessili tradizionali: tessitura al telaio, intreccio a cesto, armatura a tela e treccia, ognuna scelta per bilanciare esigenze decorative e strutturali.",
"Hemp, raffia and braided cords":"Canapa, rafia e cordoni intrecciati",
"The main structure is woven from hemp on a custom-made loom and forms the back panel and belt, decorated with patterns inspired by Sardinian textile heritage. The suspenders are made from double-braided cords, and all other embellishments from raffia fibres.":"La struttura principale è tessuta in canapa su un telaio costruito su misura e forma il pannello posteriore e la cintura, decorati con motivi ispirati alla tradizione tessile sarda. Le bretelle sono in cordoni a doppia treccia e tutte le altre decorazioni in fibra di rafia.",
"Add-ons":"Accessori","Pockets you can change":"Tasche da cambiare",
"Modular pockets can be attached or removed to suit the user's needs. The larger one carries a diamond pattern that mirrors the design on the jacket's back, while the smaller one, with an alternating weave, is made for compact items.":"Le tasche modulari si attaccano e si staccano secondo le esigenze di chi la indossa. La più grande ha un motivo a rombi che riprende il disegno sul retro della giacca, mentre la più piccola, con un intreccio alternato, è pensata per gli oggetti piccoli.",
/* Waterpack */
"Prototype design and 3D renderings":"Progettazione del prototipo e render 3D",
"Developed in the Ergonomics and Human-Centered Design course: a rethink of the Lete water pack to improve interaction and reduce environmental impact.":"Sviluppato nel corso di Ergonomia e Human-Centered Design: un ripensamento della confezione d'acqua Lete per migliorare l'interazione e ridurre l'impatto ambientale.",
"Rethinking the water pack":"Ripensare la confezione d'acqua",
"Developed within the course of Ergonomics and Human-Centered Design: a redesign of the Lete water pack to improve how people interact with it while reducing its environmental impact. I was responsible for designing the prototype, both functional and aesthetic aspects, and for the 3D renderings.":"Sviluppato nel corso di Ergonomia e Human-Centered Design: una riprogettazione della confezione d'acqua Lete per migliorare il modo in cui le persone la usano, riducendone l'impatto ambientale. Mi sono occupato della progettazione del prototipo, negli aspetti funzionali ed estetici, e dei render 3D.",
"Plastic and an uncomfortable handle":"Plastica e una maniglia scomoda",
"The original design has two main flaws: it is made entirely of plastic and it has a non-ergonomic handle, which makes it less sustainable and uncomfortable to carry.":"Il design originale ha due difetti principali: è fatto interamente di plastica e ha una maniglia poco ergonomica, che lo rende meno sostenibile e scomodo da trasportare.",
"Less plastic, same stackability":"Meno plastica, stessa impilabilità",
"The aim was to replace plastic with a more sustainable material where possible, improve the handle, and keep good stackability at industrial level, without compromising the main function of the carrier across production, transport and consumption.":"L'obiettivo era sostituire la plastica con un materiale più sostenibile dove possibile, migliorare la maniglia e mantenere una buona impilabilità a livello industriale, senza compromettere la funzione principale della confezione tra produzione, trasporto e consumo.",
"Cardboard that carries":"Cartone che porta",
"A rigid-cardboard structure and handle, plus a packaging-cardboard hygiene package that keeps the bottle caps fully enclosed. Plastic is limited to a recycled stabilizing cable that holds the bottles in place, and the handle is removable, staying compatible with stackable packaging.":"Struttura e maniglia in cartone rigido, più un involucro igienico in cartone da imballaggio che tiene i tappi completamente chiusi. La plastica si limita a un cavo stabilizzante riciclato che tiene ferme le bottiglie, e la maniglia è removibile, così resta compatibile con gli imballaggi impilabili.",
"Built to scale":"Pensato per la scala industriale",
"The cardboard packaging is engineered so that bundles stack while the caps stay protected and reachable through strategically placed openings. The design is optimized for industrial scalability, allowing efficient mass production and distribution.":"L'imballaggio in cartone è studiato perché le confezioni si impilino mentre i tappi restano protetti e raggiungibili da aperture ben posizionate. Il progetto è ottimizzato per la produzione industriale, con una produzione e una distribuzione in serie efficienti.",
/* Zeitknot */
"Design and prototype, start to finish":"Progetto e prototipo, dall'inizio alla fine",
"Exhibition artifact developed with the Ethnographic Museum of Santarcangelo di Romagna to bridge the origins of tradition with contemporary times.":"Oggetto da esposizione sviluppato con il Museo Etnografico di Santarcangelo di Romagna per collegare le origini della tradizione con il presente.",
"Tradition, played on a board":"La tradizione, giocata su una scacchiera",
"An exhibition artifact developed through a collaboration between the University of Ferrara and the Ethnographic Museum of Santarcangelo di Romagna. I oversaw the entire process, from design to prototype development, up to the official presentation at the museum.":"Un oggetto da esposizione nato dalla collaborazione tra l'Università di Ferrara e il Museo Etnografico di Santarcangelo di Romagna. Ho seguito l'intero processo, dal progetto allo sviluppo del prototipo, fino alla presentazione ufficiale al museo.",
"Bridging past and present":"Unire passato e presente",
"The goal was to design an object that bridges past and present, reinterpreting traditional objects in a contemporary form while preserving the cultural heritage of Romagna.":"L'obiettivo era progettare un oggetto che unisse passato e presente, reinterpretando oggetti tradizionali in forma contemporanea e tutelando il patrimonio culturale della Romagna.",
"Three objects from the museum":"Tre oggetti dal museo",
"The project started from three traditional objects provided by the museum: a 19th-century wooden cartwheel, a pair of shearing shears and the Caveja, a symbol of Romagna once used to represent families and their identity.":"Il progetto è partito da tre oggetti tradizionali forniti dal museo: una ruota di carro in legno dell'Ottocento, un paio di forbici da tosatura e la Caveja, simbolo della Romagna un tempo usato per rappresentare le famiglie e la loro identità.",
"Six pieces, three traditions":"Sei pezzi, tre tradizioni",
"The pawn and bishop are inspired by the shearing shears, the rook and knight take their form from the cartwheel, while the king and queen derive from the caveja, whose distinctive shape gives identity to the whole set.":"Pedone e alfiere si ispirano alle forbici da tosatura, torre e cavallo prendono forma dalla ruota del carro, mentre re e regina derivano dalla caveja, la cui forma caratteristica dà identità all'intero set.",
"3D printed, finished by hand":"Stampato in 3D, rifinito a mano",
"The set was produced with 3D printing combined with hand finishing: after the first sketches, two matte filaments were tested. PLA for the pieces, plexiglass for the board squares and finished wood for the base. The complete set measures 65 × 65 cm.":"Il set è stato realizzato con la stampa 3D unita alla rifinitura a mano: dopo i primi schizzi sono stati testati due filamenti opachi. PLA per i pezzi, plexiglass per le caselle e legno rifinito per la base. Il set completo misura 65 × 65 cm.",
/* provvisori */
"Social media video for the launch of Chiara Alessi's book Lo Stato Delle Cose. Photos and the full story are on the way.":"Video social per il lancio del libro di Chiara Alessi Lo Stato Delle Cose. Foto e storia completa in arrivo.",
"Camera operator on the 2017 docufilm Fuocosacro. Photos and the full story are on the way.":"Operatore di ripresa nel docufilm Fuocosacro del 2017. Foto e storia completa in arrivo.",
"A self-initiated car spot, shot and edited as a videomaking experiment. Photos and the full story are on the way.":"Uno spot auto di iniziativa personale, girato e montato come esperimento di videomaking. Foto e storia completa in arrivo.",
/* card me e nuovi progetti */
"An":"Un","islander":"isolano","I'm Tobia Seu,":"Sono Tobia Seu,",
"From":"Dai","to interfaces: I turn complex ideas into tangible experiences, with an interdisciplinary and experimental approach.":"alle interfacce: trasformo idee complesse in esperienze tangibili, con un approccio interdisciplinare e sperimentale.",
"From an island,":"Da un'isola,","open":"aperto","to the world":"al mondo",
"Watch on YouTube ↗":"Guarda su YouTube ↗","Enter the Orakle website ↗":"Entra nel sito di Orakle ↗","▶ Play":"▶ Guarda",
"Innovation design":"Innovation design","Innovation Design":"Innovation design","Freelance video":"Video freelance","Video production":"Produzione video",
"Docufilm":"Docufilm","Docufilm by Valerio Matteu":"Docufilm di Valerio Matteu","2 weeks":"2 settimane","Team of 6":"Team di 6","Camera 1 operator":"Operatore camera 1",
"Crew":"Troupe","Video":"Video","World":"Mondo","Critique":"Critica","Website":"Sito",
"A video interview made for the social media launch of Lo Stato Delle Cose, the 2023 book by design critic Chiara Alessi.":"Un'intervista video realizzata per il lancio social di Lo Stato Delle Cose, il libro del 2023 della critica del design Chiara Alessi.",
"A book, in a few minutes":"Un libro, in pochi minuti",
"For the launch of Lo Stato Delle Cose I produced a video for social media: an interview with Chiara Alessi that brings the ideas of the book into a short format people can watch on their phones.":"Per il lancio di Lo Stato Delle Cose ho prodotto un video per i social: un'intervista a Chiara Alessi che porta le idee del libro in un formato breve, da guardare sul telefono.",
"A docufilm inside the feast of a small village in central Sardinia, where rituals meet the present day.":"Un docufilm dentro la festa di un piccolo paese del centro Sardegna, dove i rituali incontrano il presente.",
"An anthropological look inside a small village in central Sardinia during its most important days, when rituals and traditions mix with the society of today.":"Uno sguardo antropologico dentro un piccolo paese del centro Sardegna nei suoi giorni più importanti, quando rituali e tradizioni si mescolano con la società di oggi.",
"Inside the feast":"Dentro la festa",
"Fuocosacro follows the feast of a small village in central Sardinia during its most important days. I was camera 1 operator in many scenes, in a crew of six that followed the project for about two weeks.":"Fuocosacro segue la festa di un piccolo paese del centro Sardegna nei suoi giorni più importanti. Sono stato operatore della camera 1 in molte scene, in una troupe di sei persone che ha seguito il progetto per circa due settimane.",
"What makes a tradition hold":"Cosa tiene viva una tradizione",
"The film enters the feast to understand what lies behind a tradition that can truly bring people together and make them happy, as old rituals mix with the habits of today's society.":"Il film entra nella festa per capire cosa c'è dietro una tradizione capace di unire davvero le persone e renderle felici, mentre i rituali antichi si mescolano con le abitudini della società di oggi.",
"A crew of six":"Una troupe di sei persone",
"Directed by Valerio Matteu, with Marco Meli, Stefano Secchi, Nicola Pusceddu and Daniele Manca.":"Regia di Valerio Matteu, con Marco Meli, Stefano Secchi, Nicola Pusceddu e Daniele Manca.",
"Orakle, a fictional corporation":"Orakle, una multinazionale immaginaria","Speculative design and storytelling":"Design speculativo e storytelling","Concept, storytelling and immersive website":"Concept, storytelling e sito immersivo",
"A speculative corporate future, told through the immersive website of the company that sells it.":"Un futuro aziendale speculativo, raccontato attraverso il sito immersivo della società che lo vende.",
"Onea is set in 2041. Orakle, a corporation that predicts burnout and collapse, sells companies a programme that prepares employees for the future by numbing them to it. The story is told from inside, through Orakle's own interactive website.":"Onea è ambientato nel 2041. Orakle, una multinazionale che prevede burnout e crolli, vende alle aziende un programma che prepara i dipendenti al futuro rendendoli insensibili. La storia è raccontata dall'interno, attraverso il sito interattivo di Orakle.",
"Instead of describing a dystopia from the outside, Onea lets people walk into it. The project is an immersive, interactive website for Orakle, a fictional corporation: the visitor is greeted by name, signs an access agreement and explores the products that promise companies a stable future.":"Invece di descrivere una distopia dall'esterno, Onea permette di entrarci. Il progetto è un sito immersivo e interattivo per Orakle, una multinazionale immaginaria: il visitatore viene salutato per nome, firma un accordo di accesso ed esplora i prodotti che promettono alle aziende un futuro stabile.",
"January 2041":"Gennaio 2041",
"In the story, protests and burnout caused by relentless scheduling have pushed companies towards financial collapse. Orakle's answer is O·nea, a programme that keeps the workforce ready: a 34% gain in the Workforce Readiness Index and twelve new companies joining the ecosystem every day.":"Nella storia, proteste e burnout causati da turni incessanti hanno spinto le aziende verso il crollo finanziario. La risposta di Orakle è O·nea, un programma che tiene la forza lavoro pronta: +34% nel Workforce Readiness Index e dodici nuove aziende che entrano nell'ecosistema ogni giorno.",
"Haptix, O·neiros and O·nea":"Haptix, O·neiros e O·nea",
"Haptix, a tactile device for monitoring and gestural command, collects biometric and behavioural data. O·neiros, an algorithm named after the Greek word for dream, turns it into predictions of collective behaviour. O·nea closes the loop with an environment: a workstation with a spherical display and a voice guide for emotional regulation.":"Haptix, un dispositivo tattile di monitoraggio e comando gestuale, raccoglie dati biometrici e comportamentali. O·neiros, un algoritmo che prende il nome dalla parola greca per sogno, li trasforma in previsioni sul comportamento collettivo. O·nea chiude il cerchio con un ambiente: una postazione con un display sferico e una voce guida per la regolazione emotiva.",
"Comfort as control":"Il comfort come controllo",
"Behind the calm corporate tone, O·nea applies cognitive desensitization: it pre-exposes employees to future stressors until they stop reacting. Testimonials from fictional CEOs and a world map ranking companies by stability make the question tangible: how much would we sign away for a predictable future?":"Dietro il tono aziendale calmo, O·nea applica la desensibilizzazione cognitiva: espone in anticipo i dipendenti agli stress futuri finché smettono di reagire. Le testimonianze di CEO immaginari e una mappa del mondo che classifica le aziende per stabilità rendono concreta la domanda: quanto saremmo disposti a cedere per un futuro prevedibile?",
"A website you enter":"Un sito in cui entrare",
"The website is the exhibit. A personal greeting, a binding agreement, a snap gesture that turns the door of O·nea towards you and a particle scene to explore turn the visitor into a participant of the story.":"Il sito è la mostra. Un saluto personale, un accordo vincolante, uno schiocco di dita che ruota verso di te la porta di O·nea e una scena di particelle da esplorare trasformano il visitatore in un partecipante della storia.",
"A second cut":"Un secondo montaggio","A second video made for the same launch, also on my YouTube channel.":"Un secondo video realizzato per lo stesso lancio, anche questo sul mio canale YouTube.",
"Self-initiated":"Progetto personale","Car spot":"Spot auto","Shooting and editing":"Riprese e montaggio",
"A self-initiated spot for the Audi TT, shot and edited as a videomaking experiment.":"Uno spot non ufficiale per l'Audi TT, girato e montato come esperimento di videomaking.",
"An unofficial spot for the Audi TT: a personal experiment in shooting, rhythm and editing, made to explore how a car commercial is built.":"Uno spot non ufficiale per l'Audi TT: un esperimento personale di riprese, ritmo e montaggio, per capire come si costruisce una pubblicità d'auto.",
"A car, as a commercial":"Un'auto, come in uno spot",
"I shot and edited an unofficial spot for the Audi TT as a videomaking experiment: framing, light and rhythm used the way a real commercial would.":"Ho girato e montato uno spot non ufficiale per l'Audi TT come esperimento di videomaking: inquadrature, luce e ritmo usati come in una vera pubblicità.",
"Case study coming soon. Photos and the full story are on the way.":"Progetto in arrivo. Foto e storia completa in arrivo."
};
// frasi con un nome dentro
const PAT=[
 [/^Scroll back to open the previous project, (.+)$/,'Scorri indietro per aprire il progetto precedente, $1'],
 [/^Scroll back for (.+)$/,'Scorri indietro per $1'],
 [/^Scroll for (.+)$/,'Scorri per $1'],
 [/^Previous project: (.+)$/,'Progetto precedente: $1'],
 [/^Play the video, (.+)$/,'Guarda il video, $1'],
 [/^Open the next project, (.+)$/,'Apri il prossimo progetto, $1'],
 [/^Open (.+)$/,'Apri $1'],
 [/^(.+) case study$/,'Progetto $1'],
 [/^(.+): logo coming soon$/,'$1: logo in arrivo'],
 [/^(.+) · (.+)$/,(m,a,b)=>(tr(a)??a)+' · '+(tr(b)??b)],
 [/^(.+), (Summary|Gallery|Research|Concept|Problem|Output|Journey|Configurator|Rules|Space|System|Process|UX\/UI Design|System Design|Exhibition Design|Textile Design|Package Design|Concept Design)$/,(m,a,b)=>a+', '+tr(b)]
];
function tr(s){
  if(Object.prototype.hasOwnProperty.call(IT,s))return IT[s];
  for(const [re,r] of PAT){if(re.test(s)){const o=s.replace(re,r);if(o!==s)return o}}
  return null;
}
const ORIG=new WeakMap(),ATTR=['aria-label','alt','title'];
let lang='en',busy=false;
function doText(n){
  const v=n.nodeValue,t=v.trim();if(!t)return;
  if(lang==='it'){const o=tr(t);if(o==null||o===t)return;ORIG.set(n,v);n.nodeValue=v.replace(t,o)}
  else if(ORIG.has(n)){n.nodeValue=ORIG.get(n);ORIG.delete(n)}
}
function doEl(e){
  for(const a of ATTR){if(!e.hasAttribute(a))continue;const k='data-en-'+a;
    if(lang==='it'){const v=e.getAttribute(a),o=tr(v);if(o!=null&&o!==v){e.setAttribute(k,v);e.setAttribute(a,o)}}
    else if(e.hasAttribute(k)){e.setAttribute(a,e.getAttribute(k));e.removeAttribute(k)}}
}
function walk(root){
  if(root.nodeType===3){if(!root.parentElement||!root.parentElement.closest('script,style,svg'))doText(root);return}
  if(root.nodeType!==1||root.closest('script,style,svg,[data-noi18n]'))return;
  doEl(root);root.querySelectorAll('[aria-label],[alt],[title]').forEach(doEl);
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('script,style,svg,[data-noi18n]')?2:1});
  let n;while(n=w.nextNode())doText(n);
}
const mo=new MutationObserver(ms=>{if(lang!=='it'||busy)return;busy=true;
  for(const m of ms){if(m.type==='childList')m.addedNodes.forEach(walk);else if(m.type==='characterData')doText(m.target)}
  mo.takeRecords();busy=false});
function setLang(l){
  lang=l==='it'?'it':'en';document.documentElement.lang=lang;
  try{localStorage.setItem('lang',lang)}catch(e){}
  busy=true;walk(document.body);mo.takeRecords();busy=false;
  document.querySelectorAll('[data-l]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===lang));
  document.dispatchEvent(new CustomEvent('langchange',{detail:lang}));
}
window.setLang=setLang;window.tr=s=>lang==='it'?(tr(s)??s):s;window.getLang=()=>lang;
function init(){
  mo.observe(document.body,{childList:true,subtree:true,characterData:true});
  let l='en';try{l=localStorage.getItem('lang')||(/^it\b/i.test(navigator.language||'')?'it':'en')}catch(e){}
  setLang(l);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
