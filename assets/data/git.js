const gitData = [
  // GIT CONFIG
  {
    command: "",
    comment: "Git config",
    vars: [],
    icon: "fa-brands fa-git-alt",
    color: "var(--git-color)",
    category: "git",
    tags: "git"
  },
  {
    command: "git config --global user.name",
    comment: "// Nastaví meno pre všetky Git repa v počítači",
    vars: ["Tvoje Meno"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git config --global user.email",
    comment: "// Nastaví e-mail pre všetky Git repa v počítači",
    vars: ["tvoj@email.com"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git config --list",
    comment: "// Zobrazí zoznam všetkých aktuálne aktívnych nastavení Gitu",
    vars: [],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "cat ~/.gitconfig",
    comment: "// Vytlačí obsah globálneho konfiguračného súboru Gitu priamo do terminálu",
    vars: [],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },

  // GIT INFO
  {
    command: "",
    comment: "Git info",
    vars: [],
    icon: "fa-brands fa-git-alt",
    color: "var(--git-color)",
    category: "git",
    tags: "git"
  },
  {
    command: "git status",
    comment: "// Zobrazí stav pracovného adresára (ktoré súbory sú zmenené, pripravené na commit alebo nesledované)",
    vars: [],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git log",
    comment: "// Zobrazí históriu všetkých vytvorených commitov v aktuálnom projekte",
    vars: [],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git log --oneline",
    comment: "// Zobrazí históriu všetkých vytvorených commitov v aktuálnom projekte do jedného riadku",
    vars: [],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git show",
    comment: "// Zobrazí podrobné detaily a presné zmeny (diff) pre posledný commit (alebo konkrétny commit, ak pridáš jeho hash)",
    vars: [],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  // GIT COMMIT A ÚPRAVA
  {
    command: "",
    comment: "Git commit",
    vars: [],
    icon: "fa-brands fa-git-alt",
    color: "var(--git-color)",
    category: "git",
    tags: "git"
  },
  {
    command: "git add",
    comment: "// Pridá súbor do stage area",
    vars: ["názov_súboru"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git add",
    comment: "// Pridá všetky súbory a priečinky do stage area",
    vars: ["."],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git commit -m",
    comment: "// Vytvorí commit a okomentuje ho",
    vars: ['"text commitu"'],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git commit --amend",
    comment: "// Úprava správy/komentu posledného commitu",
    vars: [],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git checkout",
    comment: "// Prepne do požadovaného commitu (id: aj v skrátenom tvare 7znakov)",
    vars: ["id_commitu"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  // GIT PRÁCA S VETVAMI
  {
    command: "",
    comment: "Git práca s vetvami",
    vars: [],
    icon: "fa-brands fa-git-alt",
    color: "var(--git-color)",
    category: "git",
    tags: "git"
  },
  {
    command: "git branch",
    comment: "// Vypíše zoznam existujúcich vetiev",
    vars: [],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git branch",
    comment: "// Vytvorí novú vetvu",
    vars: ["názov_vetvy"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git switch -c",
    comment: "// Vytvorí novú vetvu a vojde do nej",
    vars: ["názov_vetvy"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git switch/checkout",
    comment: "// Prepne na vetvu",
    vars: ["názov_vetvy"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git branch -d",
    comment: "// Vymaže vetvu (ak je zlúčená do inej)",
    vars: ["názov_vetvy"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git branch -D",
    comment: "// Vymaže vetvu (natvrdo! aj keď nieje zlúčená do inej)",
    vars: ["názov_vetvy"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git branch -m",
    comment: "// Premenuje aktuálnu vetvu",
    vars: ["nový_názov"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
  {
    command: "git merge",
    comment: "// Zlúči vetvu do vytvy, v ktorej sa nachádzame",
    vars: ["názov_vetvy"],
    icon: "",
    color: "",
    category: "git",
    tags: "git"
  },
]