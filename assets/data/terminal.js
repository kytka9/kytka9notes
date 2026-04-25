const terminalData = [
    // Špeciálne macOS príkazy
    {
        command: "",
        comment: 'Špeciálne macOS príkazy',
        vars: [],
        icon: "fa-brands fa-apple",
        color: "",
        category: "terminal",
        tags: "špeciálne macOS príkazy"
    },
    {
        command: "open .",
        comment: "// Otvorí aktuálny priečinok vo Finderi",
        vars: [],
        category: "terminal",
        tags: "špeciálne macOS príkazy"
    },
    {
        command: "open -a",
        comment: "// Otvorí súbor v konkrétnej aplikácii",
        vars: ['"App Name"'],
        category: "terminal",
        tags: "špeciálne macOS príkazy"
    },
    {
        command: "pbcopy <",
        comment: "// Skopíruje obsah súboru do systémovej schránky (Clipboard)",
        vars: ["súbor"],
        category: "terminal",
        tags: "špeciálne macOS príkazy"
    },
    {
        command: "pbpaste >",
        comment: "// Vloží obsah schránky do nového súboru",
        vars: ["súbor"],
        category: "terminal",
        tags: "špeciálne macOS príkazy"
    },
    {
        command: "drutil eject",
        comment: "// Vysunie disk/mechaniku",
        vars: [],
        category: "terminal",
        tags: "špeciálne macOS príkazy"
    },

    // Vyhľadávanie a informácie
    {
        command: "",
        comment: "Vyhľadávanie a informácie",
        vars: [],
        icon: "fa-brands fa-apple",
        color: "",
        category: "terminal",
        tags: "vyhľadávanie informácie"
    },
    {
        command: "find . -name",
        comment: "// Nájde všetky .txt súbory v aktuálnom priečinku",
        vars: ['"*.txt"'],
        category: "terminal",
        tags: "vyhľadávanie informácie"
    },
    {
        command: "find . -type d",
        comment: "// Nájde iba priečinky",
        vars: [],
        category: "terminal",
        tags: "vyhľadávanie informácie"
    },
    {
        command: "find . -type f",
        comment: "// Nájde iba súbory",
        vars: [],
        category: "terminal",
        tags: "vyhľadávanie informácie"
    },
    {
        command: "du -sh *",
        comment: "// Ukáže veľkosť každého súboru/priečinka v MB/GB",
        vars: [],
        category: "terminal",
        tags: "vyhľadávanie informácie"
    },
    {
        command: "df -h",
        comment: "// Ukáže voľné miesto na celom disku",
        vars: [],
        category: "terminal",
        tags: "vyhľadávanie informácie"
    },
    {
        command: "mdfind",
        comment: "// macOS špeciál: Spotlight hľadanie cez terminál",
        vars: ['"text"'],
        category: "terminal",
        tags: "vyhľadávanie informácie"
    },
    // Navigácia a výpis
    {
        command: "",
        comment: "Navigácia a výpis",
        vars: [],
        icon: "fa-brands fa-apple",
        color: "",
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "pwd",
        comment: "// Ukáže celú cestu k aktuálnemu priečinku",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "cd ..",
        comment: "// O úroveň vyššie",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "cd ../..",
        comment: "// O dve úrovne vyššie",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "cd /",
        comment: "// Skočí do koreňového adresára (root)",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "cd",
        comment: "// Skočí do domovského priečinka užívateľa",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "ls",
        comment: "// Základný výpis súborov",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "ls -l",
        comment: "// Long format - výpis práv, veľkosti a dátumu úpravy",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "ls -a",
        comment: "// All - ukáže aj skryté súbory (začínajú bodkou)",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "ls -lh",
        comment: "// Human readable - veľkosti súborov zobrazí v KB/MB/GB",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "ls -R",
        comment: "// Recursive - vypíše súbory aj vo všetkých podpriečinkoch",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "ls -t",
        comment: "// Zoradenie podľa času poslednej zmeny",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    {
        command: "ls -S",
        comment: "// Zoradenie podľa veľkosti súboru",
        vars: [],
        category: "terminal",
        tags: "navigácia výpis"
    },
    // Vytváranie a úprava
    {
        command: "",
        comment: "Vytváranie a úprava",
        vars: [],
        icon: "fa-brands fa-apple",
        color: "",
        category: "terminal",
        tags: "vytváranie úprava"
    },
    {
        command: "mkdir",
        comment: "// Vytvorí priečinok",
        vars: ["nový_priečinok"],
        category: "terminal",
        tags: "vytváranie úprava"
    },
    {
        command: "mkdir -p",
        comment: "// Parents - vytvorí celú stromovú štruktúru naraz",
        vars: ["a/b/c"],
        category: "terminal",
        tags: "vytváranie úprava"
    },
    {
        command: "mkdir -v",
        comment: "// Vypíše potvrdenie o vytvorení",
        vars: ["nový_priečinok"],
        category: "terminal",
        tags: "vytváranie úprava"
    },
    {
        command: "touch",
        comment: "// Vytvorí prázdny súbor alebo aktualizuje čas existujúceho",
        vars: ["nový_súbor"],
        category: "terminal",
        tags: "vytváranie úprava"
    },
    // Vymazanie
    {
        command: "",
        comment: "Vymazanie",
        vars: [],
        icon: "fa-brands fa-apple",
        color: "",
        category: "terminal",
        tags: "vymazanie delete"
    },
    {
        command: "rm",
        comment: "// Zmaže konkrétny súbor",
        vars: ["súbor"],
        category: "terminal",
        tags: "vymazanie delete"
    },
    {
        command: "rm -i",
        comment: "// Interactive - pred vymazaním si vypýta potvrdenie (bezpečné!)",
        vars: ["súbor"],
        category: "terminal",
        tags: "vymazanie delete"
    },
    {
        command: "rm -f",
        comment: "// Force - vymaže súbor bez pýtania, aj keď je chránený",
        vars: ["súbor"],
        category: "terminal",
        tags: "vymazanie delete"
    },
    {
        command: "rm -r",
        comment: "// Recursive - vymaže priečinok s celým jeho obsahom",
        vars: ["priečinok"],
        category: "terminal",
        tags: "vymazanie delete"
    },
    {
        command: "rm -ri",
        comment: "// Recursive interactive - vymaže priečinok (musíš potvrdiť)",
        vars: ["priečinok"],
        category: "terminal",
        tags: "vymazanie delete"
    },
    {
        command: "rm -rf",
        comment: "// Najsilnejší príkaz ! - zmaže všetko rekurzívne a bez pýtania",
        vars: ["priečinok"],
        category: "terminal",
        tags: "vymazanie delete"
    },
    {
        command: "rm -v",
        comment: "// Verbose - vypíše meno každého súboru, ktorý práve maže",
        vars: ["súbor"],
        category: "terminal",
        tags: "vymazanie delete"
    },
    {
        command: "rmdir",
        comment: "// Zmaže priečinok, ale iba ak je úplne PRÁZDNY",
        vars: ["priečinok"],
        category: "terminal",
        tags: "vymazanie delete"
    },
    // Kopírovanie, presun, premenovanie
    {
        command: "",
        comment: "Kopírovanie, presun a premenovanie",
        vars: [],
        icon: "fa-brands fa-apple",
        color: "",
        category: "terminal",
        tags: "kopírovanie presun premenovanie"
    },
    {
        command: "cp",
        comment: "// Skopíruje súbor na nové miesto",
        vars: ["súbor cieľ"],
        category: "terminal",
        tags: "kopírovanie presun"
    },
    {
        command: "cp -i",
        comment: "// Upozorní, ak by mal prepísať existujúci súbor",
        vars: ["súbor cieľ"],
        category: "terminal",
        tags: "kopírovanie presun"
    },
    {
        command: "cp -R",
        comment: "// Rekurzívne kopírovanie celého priečinka",
        vars: ["súbor cieľ"],
        category: "terminal",
        tags: "kopírovanie presun"
    },
    {
        command: "cp -p",
        comment: "// Zachová pôvodné atribúty (dátum vytvorenia, práva)",
        vars: ["súbor cieľ"],
        category: "terminal",
        tags: "kopírovanie presun"
    },
    {
        command: "cp -v",
        comment: "// Ukazuje priebeh kopírovania",
        vars: ["súbor cieľ"],
        category: "terminal",
        tags: "kopírovanie presun"
    },
    {
        command: "mv",
        comment: "// Presunie súbor alebo priečinok ",
        vars: ["súbor/priečinok cieľ"],
        category: "terminal",
        tags: "kopírovanie presun premenovanie"
    },
    {
        command: "mv",
        comment: "// Premenuje súbor alebo priečinok",
        vars: ["starý_názov nový_názov"],
        category: "terminal",
        tags: "kopírovanie presun premenovanie"
    },
    {
        command: "mv -i",
        comment: "// Potvrdenie pred prepísaním existujúceho súboru",
        vars: ["súbor cieľ"],
        category: "terminal",
        tags: "kopírovanie presun premenovanie"
    },
    {
        command: "mv -n",
        comment: "// No-clobber - nikdy neprepíše už existujúci súbor",
        vars: ["súbor cieľ"],
        category: "terminal",
        tags: "kopírovanie presun premenovanie"
    },
];