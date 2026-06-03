const finderData = [
    // macOS finder klávesové skratky
    {
        command: "",
        comment: 'Finder macOS shortcuts',
        vars: [],
        icon: "fa-regular fa-face-grin-beam",
        color: "#38ff53",
        category: "finder",
        tags: "finder shortcut"
    },
    {
        command: "⌘ + shift + G",
        comment: "// Vyhľadať priečinok",
        vars: ["~/Library/Application Support/priečinok"],
        category: "finder",
        tags: "finder shortcut"
    },
    {
        command: "⌃ + ⌘ + F",
        comment: "// Zobraziť okno na celej obrazovke",
        vars: [],
        category: "finder",
        tags: "finder shortcut"
    },
    // ==========================================
    // KATEGÓRIA: ZÁKLADNÉ OVLÁDANIE (Zatvorenie a minimalizácia)
    // ==========================================
    {
        command: "",
        comment: "Základné ovládanie (zatvorenie, minimalizácia)",
        vars: [],
        icon: "fa-regular fa-face-grin-beam",
        color: "#38ff53",
        category: "finder",
        tags: "zatvorenie minimalizácia"
    },
    {
        command: "⌘ + W",
        comment: '// Zatvoriť aktuálne aktívne okno aplikácie',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "zatvorenie minimalizácia"
    },
    {
        command: "⌥ + ⌘ + W",
        comment: '// Zatvoriť všetky otvorené okná aktuálnej aplikácie',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "zatvorenie minimalizácia"
    },
    {
        command: "⌘ + Q",
        comment: '// Úplne ukončiť aplikáciu (Quit)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "zatvorenie minimalizácia"
    },
    {
        command: "⌘ + M",
        comment: '// Minimalizovať aktuálne okno do Docku',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "zatvorenie minimalizácia"
    },
    {
        command: "⌥ + ⌘ + M",
        comment: '// Minimalizovať všetky okná aktuálnej aplikácie',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "zatvorenie minimalizácia"
    },
    {
        command: "⌘ + H",
        comment: '// Skryť celú aplikáciu a všetky jej okná (Hide)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "zatvorenie minimalizácia"
    },
    {
        command: "⌥ + ⌘ + H",
        comment: '// Skryť všetky ostatné aplikácie okrem aktívnej',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "zatvorenie minimalizácia"
    },

    // ==========================================
    // KATEGÓRIA: PREPÍNANIE A POHYB
    // ==========================================
    {
        command: "",
        comment: "// Prepínanie a pohyb",
        vars: [],
        icon: "fa-regular fa-face-grin-beam",
        color: "#38ff53",
        category: "finder",
        tags: "prepínanie pohyb"
    },
    {
        command: "⌃ + ↑",
        comment: '// Spustiť Mission Control (Prehľad všetkých okien)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "prepínanie pohyb"
    },
    {
        command: "⌃ + ↓",
        comment: '// Spustiť App Exposé (Prehľad okien aktívnej aplikácie)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "prepínanie pohyb"
    },

    // ==========================================
    // KATEGÓRIA: FULLSCREEN A ZAROVNANIE (Režim okien)
    // ==========================================
    {
        command: "",
        comment: "// Fullscreen a zarovnanie - režim okna",
        vars: [],
        icon: "fa-regular fa-face-grin-beam",
        color: "#38ff53",
        category: "finder",
        tags: "fullscreen maximize"
    },
    {
        command: "fn + ⌃ + F",
        comment: '// Prepnuť okno do režimu celej obrazovky (Fullscreen)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "fullscreen maximize"
    },
    {
        command: "fn + ⌃ + ←",
        comment: '// Zarovnať okno na ľavú polovicu obrazovky (macOS Sequoia+)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "snap left split-view"
    },
    {
        command: "fn + ⌃ + →",
        comment: '// Zarovnať okno na pravú polovicu obrazovky (macOS Sequoia+)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "snap right split-view"
    },
    {
        command: "fn + ⌃ + ↑",
        comment: '// Maximalizovať okno na celú plochu plochy (macOS Sequoia+)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "maximize desktop fit"
    },
    {
        command: "fn + ⌃ + C",
        comment: '// Zarovnať okno presne na stred obrazovky (macOS Sequoia+)',
        vars: [],
        icon: "",
        color: "",
        category: "finder",
        tags: "center middle"
    }
];