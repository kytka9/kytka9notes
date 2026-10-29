const vimData = [
  // VIM – SPUSTENIE A SÚBORY
  {
    command: "",
    comment: 'Vim príkazy',
    vars: [],
    icon: "fa-brands fa-vim",
    color: "var(--vim-color)",
    category: "vim",
    tags: "tag vim"
  },
  {
    command: "vim",
    comment: "// Spustí Vim bez otvorenia konkrétneho súboru",
    vars: [],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim spustenie editor"
  },
  {
    command: "vim",
    comment: "// Otvorí konkrétny súbor vo Vime",
    vars: ["názov_súboru"],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim súbor otvorenie"
  },
  {
    command: "vim -R",
    comment: "// Otvorí súbor v režime iba na čítanie",
    vars: ["názov_súboru"],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim readonly čítanie súbor"
  },
  {
    command: "vim +",
    comment: "// Otvorí súbor a nastaví kurzor na posledný riadok",
    vars: ["názov_súboru"],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim súbor posledný riadok"
  },
  {
    command: ":e",
    comment: "// Otvorí iný súbor v aktuálnom okne Vimu",
    vars: ["cesta_k_súboru"],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim edit open súbor"
  },
  {
    command: ":w",
    comment: "// Uloží aktuálny súbor",
    vars: [],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim uloženie save"
  },
  {
    command: ":w",
    comment: "// Uloží súbor pod novým názvom",
    vars: ["nový_názov_súboru"],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim uloženie save názov"
  },
  {
    command: ":q",
    comment: "// Ukončí Vim, ak nie sú prítomné neuložené zmeny",
    vars: [],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim quit ukončenie"
  },
  {
    command: ":q!",
    comment: "// Ukončí Vim bez uloženia zmien v aktuálnom buffri",
    vars: [],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim quit force zahodenie zmien"
  },
  {
    command: ":wq",
    comment: "// Uloží súbor a ukončí Vim",
    vars: [],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim write quit uloženie"
  },
  {
    command: "ZZ",
    comment: "// Uloží zmeny a ukončí Vim, ak sú potrebné na uloženie",
    vars: [],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim save quit normal-mode"
  },
  {
    command: ":x",
    comment: "// Uloží zmeny a ukončí Vim",
    vars: [],
    icon: "",
    color: "",
    category: "vim",
    tags: "vim save exit"
  },
];