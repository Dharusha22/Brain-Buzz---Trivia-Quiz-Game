
/*Quiz Variable Declarations*/
var currentScreen = 'welcome';
var playerName = '';
var selectedCategory = '';
var selectedDifficulty = '';
var currentQuestionIndex = 0;
var score = 0;
var timer = null;
var timeLeft = 15;
var hintsUsed = 0;
var fiftyFiftyUsed = 0;
var skipsUsed = 0;
var currentQuestions = [];
var leaderboardData = [];

/*Questions database for different categories*/
var questionsDB = {
    music: {
     easy: [
    {
        q: "Who is known as the 'King of Pop'?",
        a: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
        correct: 1,
        hint: "He wore a single glove and moonwalked."
    },
    {
        q: "What instrument has six strings and is commonly used in rock music?",
        a: ["Violin", "Guitar", "Flute", "Piano"],
        correct: 1,
        hint: "Think Jimi Hendrix or Eric Clapton."
    },
    {
        q: "Which British band released the album 'Abbey Road'?",
        a: ["The Rolling Stones", "Queen", "The Beatles", "Pink Floyd"],
        correct: 2,
        hint: "They famously walked across a zebra crossing."
    },
    {
        q: "What genre of music is Taylor Swift primarily known for (in her early career)?",
        a: ["Country", "Jazz", "Classical", "Hip-hop"],
        correct: 0,
        hint: "She started her career singing about heartbreaks and small towns."
    },
    {
        q: "Which famous singer is called 'The Queen of Soul'?",
        a: ["Aretha Franklin", "Beyoncé", "Adele", "Whitney Houston"],
        correct: 0,
        hint: "She sang 'Respect.'"
    }
],

        medium: [
    {
        q: "Which composer wrote the famous symphony 'Ode to Joy'?",
        a: ["Mozart", "Beethoven", "Bach", "Tchaikovsky"],
        correct: 1,
        hint: "This is from Beethoven’s Ninth Symphony."
    },
    {
        q: "What year did The Beatles officially break up?",
        a: ["1967", "1970", "1969", "1972"],
        correct: 1,
        hint: "Same year as 'Let It Be' was released."
    },
    {
        q: "Which rapper’s real name is Shawn Carter?",
        a: ["Jay-Z", "Eminem", "Drake", "Nas"],
        correct: 0,
        hint: "He's married to Beyoncé."
    },
    {
        q: "Name the lead singer of the band Coldplay.",
        a: ["Chris Martin", "Bono", "Brandon Flowers", "Adam Levine"],
        correct: 0,
        hint: "He sings 'Yellow' and 'Fix You'."
    },
    {
        q: "What is the term for a musical composition performed by a single musician?",
        a: ["Symphony", "Concerto", "Solo", "Quartet"],
        correct: 2,
        hint: "It means 'alone' in Italian."
    }
],

       hard: [
    {
        q: "Who composed the opera 'The Magic Flute'?",
        a: ["Beethoven", "Mozart", "Verdi", "Wagner"],
        correct: 1,
        hint: "A classical-era Austrian prodigy."
    },
    {
        q: "What scale is commonly used in traditional Indian classical music?",
        a: ["Chromatic", "Blues", "Raga", "Pentatonic"],
        correct: 2,
        hint: "This scale carries emotional or spiritual significance."
    },
    {
        q: "Which band released the album 'OK Computer'?",
        a: ["Radiohead", "Nirvana", "Pearl Jam", "The Smashing Pumpkins"],
        correct: 0,
        hint: "Known for experimental and alternative rock."
    },
    {
        q: "What is the name of the Russian composer who wrote 'The Rite of Spring'?",
        a: ["Igor Stravinsky", "Pyotr Tchaikovsky", "Sergei Rachmaninoff", "Dmitri Shostakovich"],
        correct: 0,
        hint: "His ballet caused a riot at its premiere."
    },
    {
        q: "In music theory, what interval is known as a tritone?",
        a: ["Perfect fifth", "Augmented fourth", "Minor third", "Major sixth"],
        correct: 1,
        hint: "It’s also known as 'the devil’s interval.'"
    }
]

    },
    movies_tv : {
        easy: [
    {
        q: "Who played Jack Dawson in Titanic?",
        a: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"],
        correct: 0,
        hint: "He also starred in Inception and The Revenant."
    },
    {
        q: "What is the name of the wizard school in Harry Potter?",
        a: ["Durmstrang", "Ilvermorny", "Hogwarts", "Beauxbatons"],
        correct: 2,
        hint: "It has four houses and is located in Scotland."
    },
    {
        q: "Which TV show features a character named Walter White?",
        a: ["Better Call Saul", "Breaking Bad", "The Sopranos", "Dexter"],
        correct: 1,
        hint: "He was a chemistry teacher turned drug kingpin."
    },
    {
        q: "What animated movie features a clownfish named Nemo?",
        a: ["Finding Nemo", "Shark Tale", "Moana", "The Little Mermaid"],
        correct: 0,
        hint: "A father searches across the ocean for his son."
    },
    {
        q: "Who directed Jurassic Park?",
        a: ["James Cameron", "Steven Spielberg", "George Lucas", "Peter Jackson"],
        correct: 1,
        hint: "He also directed E.T. and Jaws."
    }
],
medium: [
    {
        q: "In which movie does the character Forrest Gump appear?",
        a: ["Cast Away", "Rain Man", "Forrest Gump", "Big"],
        correct: 2,
        hint: "He says, 'Life is like a box of chocolates.'"
    },
    {
        q: "What TV series is set in the fictional town of Hawkins, Indiana?",
        a: ["Riverdale", "The X-Files", "Stranger Things", "Dark"],
        correct: 2,
        hint: "Features the Upside Down and Eleven."
    },
    {
        q: "Who played the Joker in The Dark Knight (2008)?",
        a: ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Christian Bale"],
        correct: 2,
        hint: "He won a posthumous Oscar for the role."
    },
    {
        q: "What movie features the song 'My Heart Will Go On'?",
        a: ["Titanic", "Pearl Harbor", "The Notebook", "Moulin Rouge!"],
        correct: 0,
        hint: "A love story aboard a doomed ship."
    },
    {
        q: "Which director is known for films like Pulp Fiction and Kill Bill?",
        a: ["Martin Scorsese", "Quentin Tarantino", "Ridley Scott", "Guy Ritchie"],
        correct: 1,
        hint: "He’s known for nonlinear storytelling and violence."
    }
],

        hard: [
    {
        q: "What film won the first-ever Academy Award for Best Picture?",
        a: ["Wings", "The Jazz Singer", "Gone with the Wind", "All Quiet on the Western Front"],
        correct: 0,
        hint: "A silent film about WWI aviation."
    },
    {
        q: "Name the actress who played Lady Macbeth in the 2015 adaptation of Macbeth.",
        a: ["Cate Blanchett", "Marion Cotillard", "Emily Blunt", "Tilda Swinton"],
        correct: 1,
        hint: "French actress who also starred in Inception."
    },
    {
        q: "What was the original language of the film Pan’s Labyrinth?",
        a: ["French", "Italian", "Spanish", "Portuguese"],
        correct: 2,
        hint: "Set during the Spanish Civil War."
    },
    {
        q: "Who created the TV series Fargo?",
        a: ["David Lynch", "Vince Gilligan", "Noah Hawley", "Joel Coen"],
        correct: 2,
        hint: "Also worked on Legion and Marvel’s X-Men spinoffs."
    },
    {
        q: "Which movie features the character 'Anton Chigurh'?",
        a: ["No Country for Old Men", "The Counselor", "There Will Be Blood", "The Road"],
        correct: 0,
        hint: "He flips a coin to decide fate."
    }
]

    },
    sports: {
        easy: [
    {
        q: "How many players are there on a soccer team on the field?",
        a: ["9", "10", "11", "12"],
        correct: 2,
        hint: "It's the same number used in cricket for a full team."
    },
    {
        q: "In which sport is the term 'home run' used?",
        a: ["Cricket", "Baseball", "Football", "Tennis"],
        correct: 1,
        hint: "It's America's favorite pastime."
    },
    {
        q: "Who holds the record for the most goals in FIFA World Cup history?",
        a: ["Pelé", "Miroslav Klose", "Cristiano Ronaldo", "Lionel Messi"],
        correct: 1,
        hint: "A German striker who played in four World Cups."
    },
    {
        q: "What country hosted the 2016 Summer Olympics?",
        a: ["China", "Brazil", "UK", "Russia"],
        correct: 1,
        hint: "Held in Rio de Janeiro."
    },
    {
        q: "What sport uses a puck?",
        a: ["Lacrosse", "Ice Hockey", "Basketball", "Field Hockey"],
        correct: 1,
        hint: "Played on ice with skates."
    }
],

        
        medium: [
    {
        q: "Which tennis player is nicknamed 'The King of Clay'?",
        a: ["Roger Federer", "Andy Murray", "Rafael Nadal", "Novak Djokovic"],
        correct: 2,
        hint: "He’s won the French Open more than anyone else."
    },
    {
        q: "How many minutes are in a standard professional basketball game?",
        a: ["40", "48", "50", "60"],
        correct: 1,
        hint: "NBA games are split into four 12-minute quarters."
    },
    {
        q: "In what year were the first modern Olympic Games held?",
        a: ["1896", "1900", "1912", "1888"],
        correct: 0,
        hint: "It was held in Athens, Greece."
    },
    {
        q: "Which NFL team won the most Super Bowls?",
        a: ["Patriots", "Cowboys", "Steelers", "49ers"],
        correct: 2,
        hint: "They’re tied with the Patriots at 6 wins."
    },
    {
        q: "Who is the most decorated Olympian of all time?",
        a: ["Usain Bolt", "Michael Phelps", "Larisa Latynina", "Mark Spitz"],
        correct: 1,
        hint: "He’s a swimmer with 23 gold medals."
    }
],

       hard: [
    {
        q: "What is the term for a score of three under par on a single hole in golf?",
        a: ["Birdie", "Eagle", "Albatross", "Condor"],
        correct: 2,
        hint: "Named after a rare seabird."
    },
    {
        q: "Who was the first woman to win an Olympic gold medal in boxing?",
        a: ["Katie Taylor", "Nicola Adams", "Claressa Shields", "Mary Kom"],
        correct: 1,
        hint: "British boxer who won at London 2012."
    },
    {
        q: "Name the fastest man in history, holding the 100m world record.",
        a: ["Tyson Gay", "Yohan Blake", "Usain Bolt", "Carl Lewis"],
        correct: 2,
        hint: "His nickname is 'Lightning Bolt.'"
    },
    {
        q: "In which year did the Tour de France first take place?",
        a: ["1903", "1910", "1895", "1920"],
        correct: 0,
        hint: "It was created to promote a sports newspaper."
    },
    {
        q: "Who is the all-time top scorer in NBA history?",
        a: ["Kobe Bryant", "LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar"],
        correct: 1,
        hint: "He broke the record in 2023."
    }
]

    },

   history: {
       easy: [
    {
        q: "Who was the first President of the United States?",
        a: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        correct: 2,
        hint: "He appears on the U.S. one-dollar bill."
    },
    {
        q: "In which year did World War II end?",
        a: ["1940", "1943", "1945", "1950"],
        correct: 2,
        hint: "Same year the atomic bombs were dropped on Hiroshima and Nagasaki."
    },
    {
        q: "What ancient civilization built the pyramids?",
        a: ["Romans", "Mesopotamians", "Greeks", "Egyptians"],
        correct: 3,
        hint: "They lived along the Nile River."
    },
    {
        q: "Who was known as the 'Maid of Orleans'?",
        a: ["Marie Antoinette", "Joan of Arc", "Eleanor of Aquitaine", "Catherine de Medici"],
        correct: 1,
        hint: "A teenage heroine of France."
    },
    {
        q: "The Berlin Wall separated which two cities?",
        a: ["Paris and Berlin", "Berlin and Bonn", "East and West Berlin", "Munich and Frankfurt"],
        correct: 2,
        hint: "The wall divided one city in two."
    }
],

        
       medium: [
    {
        q: "What year did the French Revolution begin?",
        a: ["1776", "1789", "1804", "1799"],
        correct: 1,
        hint: "The same year the Bastille was stormed."
    },
    {
        q: "Who was the British Prime Minister during most of World War II?",
        a: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Tony Blair"],
        correct: 1,
        hint: "Known for his V for Victory sign."
    },
    {
        q: "What empire was ruled by Genghis Khan?",
        a: ["Ottoman Empire", "Mongol Empire", "Roman Empire", "Persian Empire"],
        correct: 1,
        hint: "At its height, it was the largest contiguous land empire in history."
    },
    {
        q: "The Magna Carta was signed in which year?",
        a: ["1215", "1066", "1492", "1300"],
        correct: 0,
        hint: "It was signed by King John of England."
    },
    {
        q: "Who discovered the Americas in 1492?",
        a: ["Marco Polo", "Ferdinand Magellan", "Christopher Columbus", "Amerigo Vespucci"],
        correct: 2,
        hint: "He sailed the ocean blue in 1492."
    }
],


      hard: [
    {
        q: "Name the treaty that ended the Thirty Years' War in 1648.",
        a: ["Treaty of Versailles", "Treaty of Paris", "Peace of Westphalia", "Treaty of Utrecht"],
        correct: 2,
        hint: "It laid the foundation for modern state sovereignty."
    },
    {
        q: "What was the name of the ship on which the Pilgrims traveled to America?",
        a: ["Santa Maria", "Endeavour", "Mayflower", "Beagle"],
        correct: 2,
        hint: "It shares its name with a common springtime flower."
    },
    {
        q: "Who was the last Pharaoh of Ancient Egypt?",
        a: ["Tutankhamun", "Ramses II", "Cleopatra VII", "Hatshepsut"],
        correct: 2,
        hint: "She was romantically linked to both Julius Caesar and Mark Antony."
    },
    {
        q: "What empire was known as the 'Land of the Rising Sun'?",
        a: ["Chinese Empire", "Japanese Empire", "Korean Empire", "Thai Kingdom"],
        correct: 1,
        hint: "Its name literally means 'sun origin'."
    },
    {
        q: "In which year did the Russian Revolution take place?",
        a: ["1917", "1905", "1922", "1939"],
        correct: 0,
        hint: "It happened during World War I."
    }
]

    },

    science: {
       easy: [
    {
        q: "What planet is known as the Red Planet?",
        a: ["Venus", "Jupiter", "Mars", "Mercury"],
        correct: 2,
        hint: "It’s red because of iron oxide (rust) on its surface."
    },
    {
        q: "What gas do plants absorb from the atmosphere for photosynthesis?",
        a: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
        hint: "Humans exhale it."
    },
    {
        q: "What is the boiling point of water in degrees Celsius?",
        a: ["50°C", "100°C", "150°C", "0°C"],
        correct: 1,
        hint: "It’s the standard boiling point at sea level."
    },
    {
        q: "What force keeps us on the ground?",
        a: ["Magnetism", "Gravity", "Friction", "Tension"],
        correct: 1,
        hint: "It’s what Isaac Newton famously studied."
    },
    {
        q: "What is H2O commonly known as?",
        a: ["Salt", "Water", "Hydrogen", "Oxygen"],
        correct: 1,
        hint: "It’s essential for life."
    }
],

        
      medium: [
    {
        q: "What element has the chemical symbol Fe?",
        a: ["Fluorine", "Iron", "Fermium", "Francium"],
        correct: 1,
        hint: "You find it in steel and your blood."
    },
    {
        q: "Who developed the theory of relativity?",
        a: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correct: 1,
        hint: "Famous for E = mc²."
    },
    {
        q: "What part of the cell contains genetic material?",
        a: ["Cytoplasm", "Ribosome", "Nucleus", "Mitochondria"],
        correct: 2,
        hint: "Often called the control center of the cell."
    },
    {
        q: "What is the unit of electric current?",
        a: ["Volt", "Watt", "Ohm", "Ampere"],
        correct: 3,
        hint: "It’s often shortened to 'Amp'."
    },
    {
        q: "Which organ in the human body produces insulin?",
        a: ["Liver", "Pancreas", "Kidney", "Stomach"],
        correct: 1,
        hint: "It’s key in regulating blood sugar."
    }
],

  hard: [
    {
        q: "What is the second law of thermodynamics about?",
        a: [
            "Energy cannot be created or destroyed",
            "Objects in motion stay in motion",
            "Entropy in a closed system always increases",
            "Every action has an equal and opposite reaction"
        ],
        correct: 2,
        hint: "It involves the concept of disorder (entropy)."
    },
    {
        q: "What is the name of the process by which RNA is synthesized from DNA?",
        a: ["Translation", "Transcription", "Replication", "Transduction"],
        correct: 1,
        hint: "It happens in the nucleus and precedes translation."
    },
    {
        q: "What particle mediates the strong nuclear force?",
        a: ["Photon", "Electron", "Gluon", "Neutrino"],
        correct: 2,
        hint: "Its name comes from the word 'glue'."
    },
    {
        q: "Who is considered the father of modern chemistry?",
        a: ["Dmitri Mendeleev", "Marie Curie", "Robert Boyle", "Antoine Lavoisier"],
        correct: 3,
        hint: "He named and helped define 'oxygen'."
    },
    {
        q: "What is the term for materials that have zero electrical resistance?",
        a: ["Semiconductors", "Superconductors", "Insulators", "Conductors"],
        correct: 1,
        hint: "They’re used in powerful magnets and quantum computing."
    }
]

    },
    technology: {
     easy: [
    {
        q: "Who co-founded Microsoft?",
        a: ["Steve Jobs", "Elon Musk", "Mark Zuckerberg", "Bill Gates"],
        correct: 3,
        hint: "He also founded the Bill & Melinda Gates Foundation."
    },
    {
        q: "What does 'Wi-Fi' stand for?",
        a: ["Wireless Fidelity", "Wide Frequency", "Wave Internet", "Wired Free"],
        correct: 0,
        hint: "It’s often mistaken as just a brand name."
    },
    {
        q: "What is the main function of a CPU?",
        a: ["Store files", "Power the device", "Process data", "Display images"],
        correct: 2,
        hint: "It's often called the 'brain' of the computer."
    },
    {
        q: "What device do you use to move the cursor on a computer screen?",
        a: ["Monitor", "CPU", "Keyboard", "Mouse"],
        correct: 3,
        hint: "It often has left and right buttons."
    },
    {
        q: "What company created the iPhone?",
        a: ["Google", "Samsung", "Apple", "Microsoft"],
        correct: 2,
        hint: "Founded by Steve Jobs."
    }
],
    medium: [
    {
        q: "What does 'HTTP' stand for?",
        a: [
            "HyperText Transfer Protocol",
            "High Tech Transport Protocol",
            "Hyper Tool Transmission Process",
            "Host Terminal Technology Protocol"
        ],
        correct: 0,
        hint: "It's the foundation of data communication on the web."
    },
    {
        q: "Who invented the World Wide Web?",
        a: ["Steve Jobs", "Tim Berners-Lee", "Bill Gates", "Alan Turing"],
        correct: 1,
        hint: "He’s a British computer scientist knighted for his work."
    },
    {
        q: "What programming language is primarily used for Android app development?",
        a: ["Python", "C#", "Kotlin", "Swift"],
        correct: 2,
        hint: "It's now preferred over Java for Android."
    },
    {
        q: "What does SSD stand for in computer storage?",
        a: ["Secure Storage Device", "Solid-State Drive", "System Storage Disk", "Super Speed Data"],
        correct: 1,
        hint: "It’s much faster than a traditional hard drive."
    },
    {
        q: "What year was the first iPhone released?",
        a: ["2005", "2007", "2009", "2010"],
        correct: 1,
        hint: "It was unveiled by Steve Jobs in January."
    }
],

 hard: [
    {
        q: "What is Moore's Law?",
        a: [
            "Computer memory doubles every year",
            "Computer speed is halved every 5 years",
            "Transistors on a chip double approximately every 2 years",
            "Software complexity doubles every 6 months"
        ],
        correct: 2,
        hint: "Named after a co-founder of Intel."
    },
    {
        q: "What is the difference between a stack and a queue in data structures?",
        a: [
            "Stacks are FIFO, queues are LIFO",
            "Stacks are LIFO, queues are FIFO",
            "Both are FIFO",
            "Both are LIFO"
        ],
        correct: 1,
        hint: "Think of a stack of plates vs a line at a ticket booth."
    },
    {
        q: "What algorithm is commonly used for secure hashing?",
        a: ["AES", "RSA", "SHA-256", "MD5"],
        correct: 2,
        hint: "Often used in blockchain and secure communication."
    },
    {
        q: "What does the term 'Turing complete' refer to?",
        a: [
            "A machine that passes the Turing Test",
            "A computer that can solve any computable problem",
            "A program that uses AI",
            "An encrypted network protocol"
        ],
        correct: 1,
        hint: "It's a system that can simulate any Turing machine."
    },
    {
        q: "Who developed the concept of the Turing Machine?",
        a: ["John von Neumann", "Tim Berners-Lee", "Alan Turing", "Ada Lovelace"],
        correct: 2,
        hint: "He’s also known for cracking the Enigma code."
    }
]

    }, 

art_design: {
    easy: [
    {
        q: "Who painted the Mona Lisa?",
        a: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2,
        hint: "He was also an inventor and scientist during the Renaissance."
    },
    {
        q: "What colors make up the primary colors?",
        a: ["Red, Blue, Yellow", "Green, Red, Orange", "Black, White, Red", "Purple, Yellow, Blue"],
        correct: 0,
        hint: "These colors cannot be made by mixing others."
    },
    {
        q: "What art movement is Pablo Picasso associated with?",
        a: ["Impressionism", "Cubism", "Surrealism", "Baroque"],
        correct: 1,
        hint: "This style uses geometric shapes and abstract forms."
    },
    {
        q: "What do you call a sculpture made by carving wood or stone?",
        a: ["Casting", "Modeling", "Engraving", "Carving"],
        correct: 3,
        hint: "It involves removing material to create a form."
    },
    {
        q: "What is the technique of painting with dots called?",
        a: ["Pointillism", "Cubism", "Impressionism", "Graffiti"],
        correct: 0,
        hint: "Georges Seurat is famous for this technique."
    }
],
   medium: [
    {
        q: "What is the term for art that emphasizes light and color, originating in France in the late 19th century?",
        a: ["Cubism", "Baroque", "Impressionism", "Romanticism"],
        correct: 2,
        hint: "Claude Monet was a pioneer of this style."
    },
    {
        q: "Who designed the Guggenheim Museum in New York?",
        a: ["Frank Gehry", "I.M. Pei", "Frank Lloyd Wright", "Zaha Hadid"],
        correct: 2,
        hint: "He’s known for organic architecture and the Fallingwater house."
    },
    {
        q: "What is a 'triptych' in art?",
        a: ["A painting made with three colors", "A sculpture with three faces", "A set of three panels or images", "A three-dimensional painting"],
        correct: 2,
        hint: "It's often used in religious altarpieces."
    },
    {
        q: "What style of architecture is characterized by flying buttresses and pointed arches?",
        a: ["Renaissance", "Gothic", "Romanesque", "Modernist"],
        correct: 1,
        hint: "Think of Notre-Dame Cathedral."
    },
    {
        q: "Name the famous Dutch painter known for 'The Starry Night.'",
        a: ["Rembrandt", "Vincent van Gogh", "Johannes Vermeer", "Piet Mondrian"],
        correct: 1,
        hint: "He cut off part of his own ear."
    }
],

hard: [
    {
        q: "What is the name of the technique used by Georges Seurat in his paintings?",
        a: ["Cubism", "Pointillism", "Surrealism", "Fresco"],
        correct: 1,
        hint: "He painted using tiny dots of color."
    },
    {
        q: "Who wrote the book 'The Ten Books on Architecture'?",
        a: ["Vitruvius", "Leon Battista Alberti", "Le Corbusier", "Andrea Palladio"],
        correct: 0,
        hint: "He was a Roman architect whose name inspired the term 'Vitruvian Man.'"
    },
    {
        q: "What 20th-century art movement emphasized subconscious imagery and dream-like scenes?",
        a: ["Futurism", "Dadaism", "Surrealism", "Minimalism"],
        correct: 2,
        hint: "Salvador Dalí was a major figure in this movement."
    },
    {
        q: "Which Renaissance artist sculpted 'David' and painted the Sistine Chapel ceiling?",
        a: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        correct: 1,
        hint: "He was also an architect and poet."
    },
    {
        q: "What is the term for a painting done on wet plaster?",
        a: ["Mural", "Gouache", "Fresco", "Tempera"],
        correct: 2,
        hint: "This technique helps the paint bond with the wall surface."
    }
]
    }, 

emoji_trivia: {
  easy: [
    {
      q: "Guess the movie: 🎬🐠👦  ",
      a: ["Finding Dory", "Finding Nemo", "Jaws", "Shark Tale"],
      correct: 1,
      hint: "A clownfish searching for his son."
    },
    {
      q: "Guess the phrase: ❤️👑",
      a: ["Love is King", "Queen of Hearts", "Heart of the King", "King of Love"],
      correct: 1,
      hint: "Also a famous card in a deck."
    },
    {
      q: "Guess the movie: 🕷️🧑‍🔬",
      a: ["Ant-Man", "Spider-Man", "The Fly", "Insect Man"],
      correct: 1,
      hint: "A superhero bitten by a spider."
    },
    {
      q: "Guess the singer: 🎤👩",
      a: ["Taylor Swift", "Adele", "Beyoncé", "Lady Gaga"],
      correct: 2,
      hint: "Queen Bey!"
    },
    {
      q: "Guess the phrase: 🐍🍎",
      a: ["Snake Bite", "Apple of Discord", "Garden of Eden", "Snake and Apple"],
      correct: 2,
      hint: "Biblical garden with a serpent."
    }
  ],
  medium: [
    {
      q: "Guess the movie: 🧙‍♂️⚡🏫",
      a: ["The Sorcerer's Apprentice", "Harry Potter", "Fantastic Beasts", "The Wizard of Oz"],
      correct: 1,
      hint: "A boy with a lightning scar."
    },
    {
      q: "Guess the song: 🎶👶🌞",
      a: ["Sunflower", "Here Comes the Sun", "Baby Shark", "Happy"],
      correct: 1,
      hint: "A famous Beatles classic."
    },
    {
      q: "Guess the movie: 🌍🔥💥",
      a: ["Armageddon", "The Day After Tomorrow", "Mad Max", "Twister"],
      correct: 0,
      hint: "Earth facing destruction by an asteroid."
    },
    {
      q: "Guess the phrase/TV show: 🐍⚔️👸",
      a: ["Snake in the Grass", "Queen of Swords", "Serpent’s Sword", "Princess and the Snake"],
      correct: 1,
      hint: "A TV show and phrase about a heroic female swordswoman."
    },
    {
      q: "Guess the movie: 🚀👨‍🚀🌌",
      a: ["Interstellar", "Gravity", "The Martian", "Apollo 13"],
      correct: 0,
      hint: "Space travel through wormholes."
    }
  ],
  hard: [
    {
      q: "Guess the movie: 👨‍🚀🌕📡",
      a: ["Apollo 13", "First Man", "Interstellar", "Gravity"],
      correct: 1,
      hint: "A biopic about Neil Armstrong."
    },
    {
      q: "Guess the character: 🕵️‍♂️🔍🗺️",
      a: ["Detective Story", "Sherlock Holmes", "Finders Keepers", "Map Quest"],
      correct: 1,
      hint: "Famous British detective."
    },
    {
      q: "Guess the band:🎸👨‍🎤🚀",
      a: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
      correct: 0,
      hint: "Freddie Mercury was the frontman."
    },
    {
      q: "Guess the movie: 🧙‍♂️🐉💍",
      a: ["The Hobbit", "Harry Potter", "The Lord of the Rings", "Game of Thrones"],
      correct: 2,
      hint: "Epic fantasy trilogy with a powerful ring."
    },
    {
      q: "Guess the movie: 🕵️‍♀️👗🔪 ",
      a: ["Gone Girl", "The Girl with the Dragon Tattoo", "Murder on the Orient Express", "Psycho"],
      correct: 1,
      hint: "A journalist investigating a disappearance."
    }
  ]
},

guess_logo: {
  easy: [
    {
      q: "Which brand has a logo that features a bitten apple?",
      a: ["Microsoft", "Apple", "Samsung", "Google"],
      correct: 1,
      hint: "Famous for iPhones and Macs"
    },
    {
      q: "Which brand’s logo features golden arches shaped like the letter “M”?",
      a: ["Burger King", "KFC", "Subway", "McDonald’s"],
      correct: 3,
      hint: "Known worldwide for fast food"
    },
    {
      q: "Which brand has a blue bird as its logo?",
      a: ["Instagram", "Facebook", "Snapchat", "Twitter"],
      correct: 3,
      hint: "Popular social media platform"
    },
    {
      q: "Which brand uses a credit card logo with the name starting with “V”?",
      a: ["Mastercard", "Visa", "American Express", "PayPal"],
      correct: 1,
      hint: "One of the largest credit card companies"
    },
    {
      q: "Which brand’s logo features a swoosh?",
      a: ["Adidas", "Nike", "Reebok", "Puma"],
      correct: 1,
      hint: "Just Do It"
    }
  ],
  medium: [
    {
      q: "Which brand’s logo has a hidden arrow between the letters “E” and “x”?",
      a: ["UPS", "FedEx", "DHL", "Amazon"],
      correct: 1,
      hint: "Known for fast package delivery"
    },
    {
      q: "Which brand’s logo features red, white, and blue colors and is known for soda?",
      a: ["Coca-Cola", "Pepsi", "Fanta", "Sprite"],
      correct: 1,
      hint: "Blue background with a swirling circle"
    },
    {
      q: "Which car company uses a blue oval with white letters as its logo?",
      a: ["Chevrolet", "Ford", "Toyota", "Harley Davidson"],
      correct: 1,
      hint: "American automaker"
    },
    {
      q: "Which movie studio’s logo features a roaring lion?",
      a: ["Universal", "DreamWorks", "MGM", "Paramount"],
      correct: 2,
      hint: "Famous for its classic roaring lion"
    },
    {
      q: "Which brand’s logo features a red bull?",
      a: ["Red Bull", "Monster Energy", "Pepsi", "Coca-Cola"],
      correct: 0,
      hint: "Energy drink company"
    }
  ],
  hard: [
    {
      q: "Which pizza chain has a red roof as its logo?",
      a: ["Domino’s", "Pizza Hut", "Papa John’s", "Little Caesars"],
      correct: 1,
      hint: "Red rooftop design"
    },
    {
      q: "Which headphone brand’s logo is a lowercase “b” inside a circle?",
      a: ["Bose", "Sony", "Beats by Dre", "Sennheiser"],
      correct: 2,
      hint: "Popular among music artists"
    },
    {
      q: "Which sports brand’s logo is known for the slogan “Just Do It”?",
      a: ["Adidas", "Wilson", "Nike", "Spalding"],
      correct: 2,
      hint: "Famous swoosh logo"
    },
    {
      q: "Which bike brand has a stylized “C” in its logo?",
      a: ["Trek", "Giant", "Cannondale", "Specialized"],
      correct: 2,
      hint: "Known for high-performance bikes"
    },
    {
      q: "Which tech company uses a four-colored window as its logo?",
      a: ["Google", "Microsoft", "Apple", "IBM"],
      correct: 1,
      hint: "Creator of Windows OS"
    }
  ]
},

riddles_brain_teaser: {
  easy: [
    {
      q: "What has keys but can’t open locks?",
      a: ["A map", "A piano", "A clock", "A car"],
      correct: 1,
      hint: "It's a musical instrument"
    },
    {
      q: "What has hands but can’t clap?",
      a: ["A clock", "A monkey", "A tree", "A robot"],
      correct: 0,
      hint: "It tells time"
    },
    {
      q: "What has to be broken before you can use it?",
      a: ["An egg", "A glass", "A phone", "A seal"],
      correct: 0,
      hint: "Often eaten at breakfast"
    },
    {
      q: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      a: ["The letter M", "A second", "A minute hand", "Time"],
      correct: 0,
      hint: "Look at the spelling carefully"
    },
    {
      q: "What has a neck but no head?",
      a: ["A bottle", "A shirt", "A guitar", "A river"],
      correct: 0,
      hint: "Often holds liquids"
    }
  ],
  medium: [
    {
      q: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
      a: ["An echo", "A shadow", "A cloud", "A whisper"],
      correct: 0,
      hint: "You hear it but don’t see it"
    },
    {
      q: "The more of this there is, the less you see. What is it?",
      a: ["Darkness", "Fog", "Light", "Smoke"],
      correct: 0,
      hint: "It’s the absence of light"
    },
    {
      q: "What can travel around the world while staying in the same spot?",
      a: ["A satellite", "A stamp", "A plane", "A compass"],
      correct: 1,
      hint: "You stick it on letters"
    },
    {
      q: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
      a: ["A tree", "A candle", "A person", "A mountain"],
      correct: 1,
      hint: "Used for light"
    },
    {
      q: "What has one eye but can’t see?",
      a: ["A needle", "A storm", "A button", "A cyclone"],
      correct: 0,
      hint: "Used for sewing"
    }
  ],
  hard: [
    {
      q: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
      a: ["A painting", "A map", "A book", "A puzzle"],
      correct: 1,
      hint: "You use it for navigation"
    },
    {
      q: "What is always in front of you but can’t be seen?",
      a: ["The future", "The air", "Your shadow", "Time"],
      correct: 0,
      hint: "It hasn't happened yet"
    },
    {
      q: "What begins with T, ends with T, and has T in it?",
      a: ["A teapot", "A tent", "A ticket", "A test"],
      correct: 0,
      hint: "Used for brewing"
    },
    {
      q: "I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?",
      a: ["Fire", "A cloud", "Smoke", "A shadow"],
      correct: 0,
      hint: "Common in campfires"
    },
    {
      q: "The more you take, the more you leave behind. What am I?",
      a: ["Footsteps", "Memories", "Time", "Shadows"],
      correct: 0,
      hint: "You leave them while walking"
    }
  ]
}
};

/*Gaming Function Declarations*/
function init() {
    showWelcomeScreen(); // Start the game by showing the welcome/loading screen
}

function showWelcomeScreen() {
    var progress = 0; // Initialize progress at 0%
    var progressBar = document.getElementById('progressBar'); // Get the progress bar element
    var loadingText = document.getElementById('loadingText'); // Get the loading text element
    
    var interval = setInterval(function() { // Start interval to simulate loading progress
        progress += 2; // Increase progress by 2% every tick
        progressBar.style.width = progress + '%'; // Update the progress bar width
        
        if (progress >= 100) { // When progress reaches 100%
            clearInterval(interval); // Stop the interval
            loadingText.textContent = 'Ready!'; // Change loading text to 'Ready!'
            setTimeout(function() { // After 0.5 seconds delay
                showInstructionsScreen(); // Move to the instructions screen
            }, 500);
        }
    }, 50); // Runs every 50 milliseconds
}


function showInstructionsScreen() {
    switchScreen('instructionsScreen');  // Switch to the instructions screen
}


function showNameScreen() {
    switchScreen('nameScreen');                 // Switch to the name input screen
    document.getElementById('playerName').focus();  // Automatically focus the input box for convenience
}
    // Exit function that closes the entire web page
        function exitGame() {
            // Show confirmation dialog
            if (confirm("Are you sure you want to exit the game?")) {
                // Try different methods to close the window
                if (window.opener) {
                    // If window was opened by another window
                    window.close();
                } else {
                    // For most browsers, try to close
                    window.close();
                    
                    // If close doesn't work (security restrictions), redirect to blank page
                    setTimeout(() => {
                        window.location.href = "about:blank";
                    }, 100);
                }
            }
        }

        // Optional: Add keyboard shortcut (Escape key) to exit
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                exitGame();
            }
        })

function showCategoryScreen() {
    var nameInput = document.getElementById('playerName');      // Get the input field for player name
    if (!nameInput.value.trim()) {                              // Check if the input is empty or only spaces
        alert('Please enter your name!');                       // Alert the user to enter a name
        return;                                                 // Exit the function if no name entered
    }
    playerName = nameInput.value.trim();                        // Save the trimmed player name
    switchScreen('categoryScreen');                             // Switch to the category selection screen
    setupCategorySelection();                                   // Initialize category and difficulty button setup
}


function setupCategorySelection() {
    var categoryBtns = document.querySelectorAll('.category-btn');    // Get all category buttons
    var difficultyBtns = document.querySelectorAll('.difficulty-btn'); // Get all difficulty buttons

    for (var i = 0; i < categoryBtns.length; i++) {
        categoryBtns[i].addEventListener('click', function() {        // Add click event to each category button
            for (var j = 0; j < categoryBtns.length; j++) {
                categoryBtns[j].classList.remove('selected');          // Remove 'selected' class from all category buttons
            }
            this.classList.add('selected');                            // Add 'selected' class to the clicked button
            selectedCategory = this.getAttribute('data-category');     // Set selectedCategory variable to clicked button's category
        });
    }

    for (var i = 0; i < difficultyBtns.length; i++) {
        difficultyBtns[i].addEventListener('click', function() {       // Add click event to each difficulty button
            for (var j = 0; j < difficultyBtns.length; j++) {
                difficultyBtns[j].classList.remove('selected');         // Remove 'selected' class from all difficulty buttons
            }
            this.classList.add('selected');                            // Add 'selected' class to the clicked button
            selectedDifficulty = this.getAttribute('data-difficulty'); // Set selectedDifficulty variable to clicked button's difficulty
        });
    }
}


function startQuiz() {
    if (!selectedCategory || !selectedDifficulty) {            // Check if category and difficulty are selected
        alert('Please select both category and difficulty!');  // Alert user if not selected
        return;                                                 // Stop starting quiz
    }

    if (questionsDB[selectedCategory] && questionsDB[selectedCategory][selectedDifficulty]) {
        currentQuestions = questionsDB[selectedCategory][selectedDifficulty].slice();  // Get questions for selected category and difficulty
    } else {
        currentQuestions = questionsDB.science.easy.slice();  // Default to science easy if selection invalid
    }

    // Shuffle questions randomly
    for (var i = currentQuestions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));          // Pick random index
        var temp = currentQuestions[i];                        // Swap current question with random one
        currentQuestions[i] = currentQuestions[j];
        currentQuestions[j] = temp;
    }
    
    currentQuestionIndex = 0;       // Reset question index to first question
    score = 0;                     // Reset score
    hintsUsed = 0;                 // Reset hints count
    fiftyFiftyUsed = 0;            // Reset 50:50 count
    skipsUsed = 0;                 // Reset skips count
    
    switchScreen('quizScreen');    // Show the quiz screen
    showQuestion();                // Display the first question
}


function showQuestion() {
    if (currentQuestionIndex >= 5) {                     // If all 5 questions have been shown
        showResults();                                    // Show the results screen
        return;                                           // Exit the function
    }

    var question = currentQuestions[currentQuestionIndex];           // Get the current question object
    document.getElementById('questionCounter').textContent = 'Question ' + (currentQuestionIndex + 1) + ' of 5';  // Update question count display
    document.getElementById('question').textContent = question.q;    // Display the question text
    
    var optionsContainer = document.getElementById('options');       // Get container for answer options
    optionsContainer.innerHTML = '';                                 // Clear previous options
    
    for (var i = 0; i < question.a.length; i++) {                   // Loop through all possible answers
        var optionDiv = document.createElement('div');              // Create a new div for each option
        optionDiv.className = 'option';                             // Add the CSS class 'option'
        optionDiv.textContent = question.a[i];                      // Set the option text
        optionDiv.setAttribute('data-index', i);                    // Store the option's index
        optionDiv.onclick = function() {                            // Set click handler for each option
            selectAnswer(parseInt(this.getAttribute('data-index')));  // Call selectAnswer with clicked option index
        };
        optionsContainer.appendChild(optionDiv);                    // Add option to the container
    }

    startTimer();                                                   // Start the timer for the question
}


function startTimer() {
    timeLeft = 15;                                          // Set timer to 15 seconds
    document.getElementById('timer').textContent = timeLeft;  // Display initial time
    
    timer = setInterval(function() {                        // Start countdown every 1 second
        timeLeft--;                                         // Decrement time left
        document.getElementById('timer').textContent = timeLeft;  // Update timer display
        
        if (timeLeft <= 0) {                                // When time runs out
            clearInterval(timer);                            // Stop the timer
            selectAnswer(-1);                                // Automatically mark as no answer selected
        }
    }, 1000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);                                   // Stop the question timer
    
    var question = currentQuestions[currentQuestionIndex];  // Get current question object
    var options = document.querySelectorAll('.option');     // Get all answer option elements
    
    for (var i = 0; i < options.length; i++) {              // Loop through all options
        if (i === question.correct) {                        // If this option is correct answer
            options[i].classList.add('correct');             // Add 'correct' class (highlight green)
        } else if (i === selectedIndex) {                    // If this option is the one user selected but wrong
            options[i].classList.add('incorrect');           // Add 'incorrect' class (highlight red)
        }
    }

    if (selectedIndex === question.correct) {               // If user selected the correct answer
        score++;                                             // Increase score
        playSound('correct');                                // Play correct answer sound
    } else {
        playSound('wrong');                                  // Play wrong answer sound
    }

    setTimeout(function() {                                  // Wait 2 seconds before next question
        currentQuestionIndex++;                              // Move to next question
        showQuestion();                                      // Display next question
    }, 2000);
}


function useHint() {
    if (hintsUsed >= 3) {
        alert('No more hints available!');
        return;
    }
    
    var question = currentQuestions[currentQuestionIndex];
    alert('Hint: ' + question.hint);
    hintsUsed++;
}

function use5050() {
    if (fiftyFiftyUsed >= 3) {                      // Check if 50:50 lifeline used 3 times already
        alert('No more 50:50 available!');          // Show alert if no uses left
        return;                                     // Exit function early
    }
    
    var question = currentQuestions[currentQuestionIndex];   // Get current question object
    var options = document.querySelectorAll('.option');      // Get all answer options
    var wrongOptions = [];                                    // Array to hold indexes of wrong answers
    
    for (var i = 0; i < options.length; i++) {               // Loop through options
        if (i !== question.correct) {                         // If option is NOT correct answer
            wrongOptions.push(i);                             // Add index to wrongOptions array
        }
    }
    
    // Shuffle the wrongOptions array to randomize which are removed
    for (var i = wrongOptions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = wrongOptions[i];
        wrongOptions[i] = wrongOptions[j];
        wrongOptions[j] = temp;
    }
    
    var toRemove = wrongOptions.slice(0, 2);                  // Take first 2 wrong options from shuffled list
    
    for (var i = 0; i < toRemove.length; i++) {               // For each option to remove
        options[toRemove[i]].style.opacity = '0.3';           // Make option semi-transparent (dim it)
        options[toRemove[i]].style.pointerEvents = 'none';    // Disable clicking on it
    }
    
    fiftyFiftyUsed++;                                         // Increase count of 50:50 lifeline used
}

function skipQuestion() {
    if (skipsUsed >= 2) {                // Check if player has used all allowed skips (max 2)
        alert('No more skips available!');  // Inform player no skips left
        return;                           // Exit function early
    }
    
    clearInterval(timer);                 // Stop the question timer
    skipsUsed++;                         // Increase skip count
    currentQuestionIndex++;              // Move to next question
    showQuestion();                     // Display the next question
}

function showResults() {
    switchScreen('resultsScreen');  // Show the results screen
    
    // Display the final score out of 5
    document.getElementById('finalScore').textContent = score + '/5';
    
    var comment = '';  // Initialize comment variable
    
    // Set different comments based on the player's score
    if (score === 5) {
        comment = 'Perfect! You\'re a genius! 🧠✨';
        showConfetti();  // Celebrate with confetti for a perfect score
    } else if (score === 4) {
        comment = 'Excellent work! Almost perfect! 👏';
    } else if (score === 3) {
        comment = 'Good job! Keep practicing! 👍';
    } else if (score === 2) {
        comment = 'Not bad, but there\'s room for improvement! 📚';
    } else {
        comment = 'Don\'t give up! Practice makes perfect! 💪';
    }
    
    // Display the comment on the results screen
    document.getElementById('scoreComment').textContent = comment;
    
    saveToLeaderboard();  // Save the current result to the leaderboard
}


function saveToLeaderboard() {
    // Create a new leaderboard entry with player info and current date
    var entry = {
        name: playerName,  // Player's name
        score: score, // Player's score
        category: selectedCategory, // Chosen quiz category
        difficulty: selectedDifficulty,  // Chosen difficulty level
        date: new Date().toLocaleDateString()  // Date of the score submission
    };
    
    leaderboardData.push(entry); // Add new entry to leaderboard data
    
    // Sort leaderboard so highest scores come first
    leaderboardData.sort(function(a, b) {
        return b.score - a.score;
    });
    
    // Keep only top 10 scores to limit leaderboard size
    if (leaderboardData.length > 10) {
        leaderboardData = leaderboardData.slice(0, 10);
    }
}

/*Function Declaration (Leaderboard display) - displays leaderboard in desired layout*/
function showLeaderboard() {
    switchScreen('leaderboardScreen'); // Changes the visible screen to the leaderboard screen
    updateLeaderboardDisplay(); // Refreshes the leaderboard data shown on that screen
}

/*Function Declaration (Leaderboard update) - updates leaderboard in desired layout*/
function updateLeaderboardDisplay() {
    var tbody = document.getElementById('leaderboardBody'); // Get leaderboard table body
    tbody.innerHTML = ''; // Clear existing rows
    
    for (var i = 0; i < leaderboardData.length; i++) {  // Loop through leaderboard entries
        var entry = leaderboardData[i];  // Current leaderboard entry
        var row = document.createElement('tr'); // Create a new table row
        row.innerHTML = '<td>' + (i + 1) + '</td>' +      // Rank number
                       '<td>' + entry.name + '</td>' +  // Player name
                       '<td>' + entry.score + '/5</td>' + // Score out of 5
                       '<td>' + entry.category + '</td>' + // Category name
                       '<td>' + entry.difficulty + '</td>';  // Difficulty level
        tbody.appendChild(row); // Add row to leaderboard table
    }
    
    if (leaderboardData.length === 0) {  // If no leaderboard data
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">No scores yet!</td></tr>'; // Show no scores message
    }
}

/*Function Declaration (Shows confetti animation) - creates colorful falling dots on the screen*/
function showConfetti() {
    // Array of colors for the confetti pieces
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    // Loop to create 100 confetti pieces
    for (var i = 0; i < 100; i++) {
        // Create a new div element for each confetti piece
        var confetti = document.createElement('div');
        confetti.style.position = 'fixed'; // Position confetti fixed on screen
        confetti.style.left = Math.random() * 100 + '%'; // Random horizontal start position (0% to 100% across the screen)
        confetti.style.top = '-10px'; // Start just above the visible area
        confetti.style.width = '10px';// Set size of each confetti piece
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color from the array
        confetti.style.borderRadius = '50%';  // Make confetti circular
        confetti.style.zIndex = '1000'; // Make sure confetti is on top of other elements
        confetti.style.pointerEvents = 'none'; // Let clicks pass through confetti so it doesn't block UI
        
        // Add the confetti div to the body of the page
        document.body.appendChild(confetti);
        
        // Random fall duration between 2 and 5 seconds
        var fallDuration = Math.random() * 3 + 2;
        // Apply CSS animation called 'fall' with calculated duration
        confetti.style.animation = 'fall ' + fallDuration + 's linear forwards';
        
        // After animation finishes, remove the confetti from the DOM to clean up
        setTimeout(function(element) {
            return function() {
                if (document.body.contains(element)) {
                    document.body.removeChild(element);
                }
            };
        }(confetti), fallDuration * 1000);
    }
}

/*Function Declaration (Play sound) - this plays a sound when the answer is correct or wrong*/
/*LINKS TO VIDEOS ON YOUTUBE: https://www.youtube.com/watch?v=WGN_BDYjncY || https://www.youtube.com/watch?v=sencBb49-1s || https://www.youtube.com/watch?v=GbE-8JALkps*/
function playSound(type) {
    try {
         // create audio context (used to generate and control sounds)
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (type === 'correct') {
            var oscillator = audioContext.createOscillator(); // Create an oscillator (produces sound waves)
            var gainNode = audioContext.createGain();  // Create a gain node (controls volume)
            
            oscillator.connect(gainNode); // Connect oscillator to gain, then to speakers
            gainNode.connect(audioContext.destination);
            
              // Set different frequencies to create a rising sound (C5 → E5 → G5)
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
            
             // Set starting volume and fade it out over 0.5 seconds
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime); // start at volume 0.3
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5); // fade out
            
             // Start and stop the sound
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5); // stops after 0.5 seconds
        } else if (type === 'wrong') {
            // Create another oscillator for wrong answer sound
            var oscillator = audioContext.createOscillator();
            var gainNode = audioContext.createGain();
            
            // Connect oscillator to gain, then to speakers
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
             // Set frequency for a low, rough sound (buzzer-like)
            oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
            oscillator.type = 'sawtooth'; // makes a buzzy, rough sound
            
            // Set volume and fade out quickly
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            // Start and stop the sound
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }
    } catch (e) {
         // If the browser doesn't support Web Audio API, show error in console
        console.log('Audio not supported');
    }
}
/*Function Declaration (Switch screen) - this hides all screens and shows only the one we want*/
function switchScreen(screenId) {
    var screens = document.querySelectorAll('.screen'); // get all screen elements
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active'); // hide all screens
    }
    document.getElementById(screenId).classList.add('active'); // show the selected screen
    currentScreen = screenId; // update the current screen ID
}

/*Function Declaration (Play again) - this resets everything so the user can restart the quiz*/
function playAgain() {
    currentQuestionIndex = 0; // start from the first question
    score = 0; // reset score
    hintsUsed = 0; // reset hints
    fiftyFiftyUsed = 0; // reset 50/50 usage
    skipsUsed = 0; // reset skips
    
    // Get questions based on selected category and difficulty
    if (questionsDB[selectedCategory] && questionsDB[selectedCategory][selectedDifficulty]) {
        currentQuestions = questionsDB[selectedCategory][selectedDifficulty].slice();
    } else {
        // fallback to science easy if something is missing
        currentQuestions = questionsDB.science.easy.slice();
    }
    
    // Shuffle questions again
    for (var i = currentQuestions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = currentQuestions[i];
        currentQuestions[i] = currentQuestions[j];
        currentQuestions[j] = temp;
    }
    
    switchScreen('quizScreen'); // go to quiz screen
    showQuestion(); // show the first question
}

/*Function Declaration (Choose different category) - this resets the category and difficulty so the user can pick again*/
function chooseDifferentCategory() {
    selectedCategory = ''; // clear the selected category
    selectedDifficulty = ''; // clear the selected difficulty
    
     // remove the 'selected' style from all category buttons
    var categoryBtns = document.querySelectorAll('.category-btn');
    for (var i = 0; i < categoryBtns.length; i++) {
        categoryBtns[i].classList.remove('selected');
    }
     // remove the 'selected' style from all difficulty buttons
    var difficultyBtns = document.querySelectorAll('.difficulty-btn');
    for (var i = 0; i < difficultyBtns.length; i++) {
        difficultyBtns[i].classList.remove('selected');
    }
    
    switchScreen('categoryScreen'); // goes back to the category selection screen
}

/*Function Declaration - goes back to name page*/
function goBack() {
    switchScreen('nameScreen');
}
/*Function Declaration - goes back to name page*/
function goBackToName() {
    switchScreen('nameScreen');
}

/*Adding CSS Animation for confetti*/
var style = document.createElement('style');
style.textContent = '@keyframes fall { 0% { transform: translateY(-100vh) rotate(0deg); } 100% { transform: translateY(100vh) rotate(360deg); } }';
document.head.appendChild(style); // add the animation style to the page

/*Starting the game as soon as page loads - this runs the game setup as soon as the page finishes loading*/
window.addEventListener('DOMContentLoaded', function() {
    init(); // call the init() function to start the game
});

/*Handle enter key - this allows the user to press Enter after typing their name to move to the next screen instead of clicking a button*/
document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById('playerName'); // get the name input field
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                showCategoryScreen(); // move to category screen when Enter is pressed
            }
        });
    }
});

/*Adding keyboard shortcuts- this allows for the user to press a certain key on the keyboard so it does a certain task instead of pressing a button on the form*/
document.addEventListener('keydown', function(e) {
    if (currentScreen === 'quizScreen') {
        if (e.key >= '1' && e.key <= '4') {
            var optionIndex = parseInt(e.key) - 1;
            var options = document.querySelectorAll('.option');
            if (options[optionIndex] && !options[optionIndex].classList.contains('disabled')) {
                selectAnswer(optionIndex);
            }
        } else if (e.key.toLowerCase() === 'h') { // using "h" for hint
            useHint();
        } else if (e.key.toLowerCase() === 'f') { // using "f" for 50/50
            use5050();
        } else if (e.key.toLowerCase() === 's') { // using "s" to skip a question
            skipQuestion();
        }
    }
});

console.log('Simple Quiz game loaded successfully!');