const jsData = [

    // =============================================
    // --- SEKCIA: PREMENNÉ A DÁTOVÉ TYPY ---
    // =============================================
    {
        command: "",
        comment: "Premenné a dátové typy",
        vars: [],
        icon: "fa-brands fa-js",
        color: "#f7df1e",
        category: "js",
        tags: "premenné typy základy var let const"
    },
    {
        command: "var",
        comment: "// Deklarácia premennej (function-scoped, zastaraná – radšej nepoužívať)",
        vars: ["var meno = 'Ján'"],
        category: "js",
        tags: "premenná deklarácia"
    },
    {
        command: "let",
        comment: "// Premenná s blokovou platnosťou (block-scoped), hodnotu možno meniť",
        vars: ["let vek = 25", "let skore = 0"],
        category: "js",
        tags: "premenná deklarácia"
    },
    {
        command: "const",
        comment: "// Konštanta – hodnotu nemožno priradiť znovu (nie je však immutable)",
        vars: ["const PI = 3.14", "const URL = 'https://...'"],
        category: "js",
        tags: "premenná konštanta"
    },
    {
        command: "typeof",
        comment: "// Vráti dátový typ hodnoty ako reťazec",
        vars: ["typeof 42          // 'number'", "typeof 'ahoj'      // 'string'", "typeof true        // 'boolean'", "typeof undefined   // 'undefined'", "typeof null        // 'object' (historická chyba)", "typeof {}          // 'object'", "typeof []          // 'object'", "typeof function(){} // 'function'"],
        category: "js",
        tags: "typ dáta"
    },
    {
        command: "Number",
        comment: "// Číselný dátový typ (celé aj desatinné čísla, Infinity, NaN)",
        vars: ["42", "3.14", "NaN", "Infinity", "-Infinity"],
        category: "js",
        tags: "typ číslo"
    },
    {
        command: "String",
        comment: "// Reťazec znakov (úvodzovky, apostrofy, template literals)",
        vars: ["'ahoj'", "\"svet\"", "`${meno} má ${vek} rokov`"],
        category: "js",
        tags: "typ reťazec string"
    },
    {
        command: "Boolean",
        comment: "// Logická hodnota – true alebo false",
        vars: ["true", "false"],
        category: "js",
        tags: "typ logická"
    },
    {
        command: "null",
        comment: "// Prázdna hodnota – zámerné 'nič' (treba explicitne priradiť)",
        vars: ["let x = null"],
        category: "js",
        tags: "typ prázdno"
    },
    {
        command: "undefined",
        comment: "// Hodnota nie je priradená (premenná existuje, ale nemá hodnotu)",
        vars: ["let x; // x === undefined"],
        category: "js",
        tags: "typ nedefinovaný"
    },
    {
        command: "Symbol()",
        comment: "// Unikátny a nemenný identifikátor (ES6)",
        vars: ["const id = Symbol('id')", "Symbol('a') === Symbol('a') // false"],
        category: "js",
        tags: "typ symbol unikátny"
    },
    {
        command: "BigInt",
        comment: "// Celé číslo ľubovoľnej veľkosti (za číslom píšeme n)",
        vars: ["9007199254740993n", "BigInt(9007199254740993)"],
        category: "js",
        tags: "typ veľké číslo"
    },

    // =============================================
    // --- SEKCIA: OPERÁTORY ---
    // =============================================
    {
        command: "",
        comment: "Operátory",
        vars: [],
        icon: "fa-solid fa-calculator",
        color: "#e17055",
        category: "js",
        tags: "operátory matematika logika porovnanie"
    },
    {
        command: "+ - * / %",
        comment: "// Aritmetické operátory (sčítanie, odčítanie, násobenie, delenie, zvyšok)",
        vars: ["5 + 3  // 8", "10 % 3 // 1"],
        category: "js",
        tags: "operátor matematika"
    },
    {
        command: "**",
        comment: "// Umocnenie (exponent) – ES7",
        vars: ["2 ** 10 // 1024", "3 ** 2  // 9"],
        category: "js",
        tags: "operátor matematika umocnenie"
    },
    {
        command: "++ / --",
        comment: "// Inkrementácia / dekrementácia (pred alebo za premennou)",
        vars: ["i++", "++i", "i--", "--i"],
        category: "js",
        tags: "operátor inkrement dekrement"
    },
    {
        command: "= += -= *= /= %= **=",
        comment: "// Priraďovacie operátory",
        vars: ["x += 5  // x = x + 5", "x **= 2 // x = x ** 2"],
        category: "js",
        tags: "operátor priradenie"
    },
    {
        command: "== / !=",
        comment: "// Rovnosť / nerovnosť (s konverziou typov – neodporúča sa)",
        vars: ["'5' == 5  // true", "'5' != 5  // false"],
        category: "js",
        tags: "operátor porovnanie"
    },
    {
        command: "=== / !==",
        comment: "// Striktná rovnosť / nerovnosť (bez konverzie typov – odporúča sa)",
        vars: ["'5' === 5  // false", "'5' !== 5  // true"],
        category: "js",
        tags: "operátor porovnanie striktné"
    },
    {
        command: "< > <= >=",
        comment: "// Relačné operátory (menší, väčší, menší-rovný, väčší-rovný)",
        vars: ["5 > 3 // true", "5 <= 5 // true"],
        category: "js",
        tags: "operátor porovnanie"
    },
    {
        command: "&& || !",
        comment: "// Logické operátory (AND, OR, NOT)",
        vars: ["true && false // false", "true || false // true", "!true        // false"],
        category: "js",
        tags: "operátor logika"
    },
    {
        command: "??",
        comment: "// Nullish coalescing – vráti pravú stranu ak je ľavá null alebo undefined",
        vars: ["null ?? 'default'      // 'default'", "0 ?? 'default'         // 0", "undefined ?? 'záloha'  // 'záloha'"],
        category: "js",
        tags: "operátor null záloha"
    },
    {
        command: "?.",
        comment: "// Optional chaining – bezpečný prístup k vlastnostiam (nevyhodí chybu)",
        vars: ["user?.adresa?.mesto", "pole?.[0]", "obj?.metoda?.()"],
        category: "js",
        tags: "operátor optional chaining"
    },
    {
        command: "? :",
        comment: "// Ternárny operátor – skrátený if/else na jednom riadku",
        vars: ["vek >= 18 ? 'dospelý' : 'mladistvý'"],
        category: "js",
        tags: "operátor ternárny podmienka"
    },
    {
        command: "&&= ||= ??=",
        comment: "// Logické priraďovacie operátory (ES2021)",
        vars: ["a &&= b  // a = a && b", "a ||= b  // ak a je falsy, a = b", "a ??= b  // ak a je null/undefined, a = b"],
        category: "js",
        tags: "operátor priradenie logické"
    },
    {
        command: "... (spread)",
        comment: "// Spread operátor – rozbalí pole alebo objekt",
        vars: ["[...pole1, ...pole2]", "{ ...obj1, ...obj2 }", "Math.max(...cisla)"],
        category: "js",
        tags: "operátor spread rozbalenie"
    },
    {
        command: "... (rest)",
        comment: "// Rest parametre – zozbiera zvyšné argumenty do poľa",
        vars: ["function suma(...cisla) { }", "const [prvy, ...ostatne] = pole"],
        category: "js",
        tags: "operátor rest argumenty"
    },

    // =============================================
    // --- SEKCIA: PODMIENKY ---
    // =============================================
    {
        command: "",
        comment: "Podmienky a vetvenie",
        vars: [],
        icon: "fa-solid fa-code-branch",
        color: "#00b894",
        category: "js",
        tags: "podmienky if else switch vetvenie"
    },
    {
        command: "if / else if / else",
        comment: "// Základná podmienka – vykoná blok kódu ak je podmienka splnená",
        vars: ["if (x > 0) { } else if (x < 0) { } else { }"],
        category: "js",
        tags: "podmienka vetvenie"
    },
    {
        command: "switch",
        comment: "// Prepínač – porovná hodnotu s viacerými prípadmi",
        vars: ["switch(den) { case 'Po': break; default: break; }"],
        category: "js",
        tags: "podmienka switch prepínač"
    },
    {
        command: "try / catch / finally",
        comment: "// Zachytávanie chýb – try: kód, catch: obsluha chyby, finally: vždy",
        vars: ["try { } catch(error) { console.error(error) } finally { }"],
        category: "js",
        tags: "chyba error obsluha"
    },
    {
        command: "throw",
        comment: "// Manuálne vyhodenie výnimky (chyby)",
        vars: ["throw new Error('Popis chyby')", "throw new TypeError('Nesprávny typ')"],
        category: "js",
        tags: "chyba výnimka"
    },

    // =============================================
    // --- SEKCIA: CYKLY ---
    // =============================================
    {
        command: "",
        comment: "Cykly a iterácia",
        vars: [],
        icon: "fa-solid fa-rotate",
        color: "#6c5ce7",
        category: "js",
        tags: "cykly iterácia for while loop"
    },
    {
        command: "for",
        comment: "// Klasický for cyklus s počítadlom",
        vars: ["for (let i = 0; i < 10; i++) { }"],
        category: "js",
        tags: "cyklus for počítadlo"
    },
    {
        command: "for...of",
        comment: "// Iterácia cez hodnoty iterovateľného objektu (pole, string, Map, Set...)",
        vars: ["for (const item of pole) { }", "for (const char of 'ahoj') { }"],
        category: "js",
        tags: "cyklus for of hodnoty"
    },
    {
        command: "for...in",
        comment: "// Iterácia cez kľúče (vlastnosti) objektu",
        vars: ["for (const kluč in objekt) { }"],
        category: "js",
        tags: "cyklus for in kľúče objekt"
    },
    {
        command: "while",
        comment: "// Cyklus pokiaľ je podmienka pravdivá (kontrola pred telom)",
        vars: ["while (i < 10) { i++ }"],
        category: "js",
        tags: "cyklus while podmienka"
    },
    {
        command: "do...while",
        comment: "// Cyklus s kontrolou PO vykonaní (telo sa vždy vykoná aspoň raz)",
        vars: ["do { i++ } while (i < 10)"],
        category: "js",
        tags: "cyklus do while"
    },
    {
        command: "break",
        comment: "// Okamžite ukončí cyklus alebo switch",
        vars: ["break"],
        category: "js",
        tags: "cyklus prerušenie"
    },
    {
        command: "continue",
        comment: "// Preskočí aktuálnu iteráciu a pokračuje ďalšou",
        vars: ["continue"],
        category: "js",
        tags: "cyklus preskočenie"
    },

    // =============================================
    // --- SEKCIA: FUNKCIE ---
    // =============================================
    {
        command: "",
        comment: "Funkcie",
        vars: [],
        icon: "fa-solid fa-f",
        color: "#0984e3",
        category: "js",
        tags: "funkcie function arrow callback"
    },
    {
        command: "function",
        comment: "// Klasická deklarácia funkcie (hoistovaná – možno volať pred deklaráciou)",
        vars: ["function pozdrav(meno) { return 'Ahoj ' + meno }"],
        category: "js",
        tags: "funkcia deklarácia"
    },
    {
        command: "const fn = function() {}",
        comment: "// Funkčný výraz priradený do premennej (nie je hoistovaný)",
        vars: ["const sucet = function(a, b) { return a + b }"],
        category: "js",
        tags: "funkcia výraz"
    },
    {
        command: "const fn = () => {}",
        comment: "// Arrow funkcia (ES6) – kratší zápis, nemá vlastné this",
        vars: ["const dvojnasobok = x => x * 2", "const sucet = (a, b) => a + b", "const fn = () => ({ kluč: 'hodnota' })"],
        category: "js",
        tags: "funkcia arrow šípková"
    },
    {
        command: "return",
        comment: "// Vráti hodnotu z funkcie a ukončí jej vykonávanie",
        vars: ["return hodnota", "return { meno, vek }"],
        category: "js",
        tags: "funkcia návratová hodnota"
    },
    {
        command: "Predvolené parametre",
        comment: "// Predvolená hodnota parametra ak nie je predaný argument",
        vars: ["function pozdrav(meno = 'svet') { }", "const fn = (x = 0, y = 0) => x + y"],
        category: "js",
        tags: "funkcia parameter predvolený"
    },
    {
        command: "arguments",
        comment: "// Objekt so všetkými argumentmi (len v klasických funkciách, nie arrow)",
        vars: ["function fn() { console.log(arguments) }"],
        category: "js",
        tags: "funkcia argumenty"
    },
    {
        command: "IIFE",
        comment: "// Immediately Invoked Function Expression – funkcia zavolaná hneď",
        vars: ["(function() { })();", "(() => { })();"],
        category: "js",
        tags: "funkcia iife okamžité volanie"
    },
    {
        command: "Closures",
        comment: "// Funkcia si pamätá premenné z rozsahu kde bola vytvorená",
        vars: ["function counter() { let n = 0; return () => ++n }"],
        category: "js",
        tags: "funkcia closure uzáver"
    },
    {
        command: "Rekurzia",
        comment: "// Funkcia volá samu seba (musí mať ukončovaciu podmienku)",
        vars: ["function faktorial(n) { return n <= 1 ? 1 : n * faktorial(n-1) }"],
        category: "js",
        tags: "funkcia rekurzia"
    },
    {
        command: "Generator function*",
        comment: "// Funkcia ktorá môže byť pozastavená a obnovená (yield)",
        vars: ["function* gen() { yield 1; yield 2; yield 3 }", "const g = gen(); g.next() // { value: 1, done: false }"],
        category: "js",
        tags: "funkcia generátor"
    },

    // =============================================
    // --- SEKCIA: POLIA (ARRAY) ---
    // =============================================
    {
        command: "",
        comment: "Polia (Array)",
        vars: [],
        icon: "fa-solid fa-list-ol",
        color: "#00cec9",
        category: "js",
        tags: "pole array zoznam"
    },
    {
        command: "[] / new Array()",
        comment: "// Vytvorenie poľa",
        vars: ["const a = [1, 2, 3]", "const b = new Array(5)", "Array.from({ length: 5 }, (_, i) => i)"],
        category: "js",
        tags: "pole vytvorenie"
    },
    {
        command: "pole[index]",
        comment: "// Prístup k prvku poľa podľa indexu (od 0)",
        vars: ["pole[0]", "pole[pole.length - 1]", "pole.at(-1) // posledný prvok (ES2022)"],
        category: "js",
        tags: "pole prístup index"
    },
    {
        command: ".length",
        comment: "// Počet prvkov v poli",
        vars: ["pole.length"],
        category: "js",
        tags: "pole dĺžka"
    },
    {
        command: ".push()",
        comment: "// Pridá prvky na KONIEC poľa – vráti novú dĺžku",
        vars: ["pole.push(4)", "pole.push(4, 5, 6)"],
        category: "js",
        tags: "pole pridanie koniec"
    },
    {
        command: ".pop()",
        comment: "// Odoberie a vráti posledný prvok poľa",
        vars: ["const posledny = pole.pop()"],
        category: "js",
        tags: "pole odobratie koniec"
    },
    {
        command: ".unshift()",
        comment: "// Pridá prvky na ZAČIATOK poľa – vráti novú dĺžku",
        vars: ["pole.unshift(0)", "pole.unshift(-2, -1, 0)"],
        category: "js",
        tags: "pole pridanie začiatok"
    },
    {
        command: ".shift()",
        comment: "// Odoberie a vráti prvý prvok poľa",
        vars: ["const prvy = pole.shift()"],
        category: "js",
        tags: "pole odobratie začiatok"
    },
    {
        command: ".splice()",
        comment: "// Pridá, odoberie alebo nahradí prvky na danom indexe (mení originál)",
        vars: ["pole.splice(2, 1)        // odoberie 1 prvok od indexu 2", "pole.splice(1, 0, 'a')   // vloží 'a' na index 1", "pole.splice(1, 2, 'x', 'y') // nahradí 2 prvky"],
        category: "js",
        tags: "pole úprava vloženie odobratie"
    },
    {
        command: ".slice()",
        comment: "// Vráti novú kópiu časti poľa (nezmení originál)",
        vars: ["pole.slice(1, 3)  // od indexu 1 do 2", "pole.slice(-2)   // posledné 2 prvky", "pole.slice()     // kópia celého poľa"],
        category: "js",
        tags: "pole výrez kópia"
    },
    {
        command: ".concat()",
        comment: "// Spojí dve alebo viac polí do nového poľa",
        vars: ["pole1.concat(pole2)", "pole1.concat(pole2, pole3)", "[...pole1, ...pole2]"],
        category: "js",
        tags: "pole spojenie"
    },
    {
        command: ".join()",
        comment: "// Spojí prvky poľa do reťazca oddeľovačom",
        vars: ["pole.join(', ')", "pole.join(' - ')", "pole.join('')"],
        category: "js",
        tags: "pole reťazec spojenie"
    },
    {
        command: ".reverse()",
        comment: "// Obráti poradie prvkov poľa (mení originál)",
        vars: ["pole.reverse()", "[...pole].reverse() // bez zmeny originálu"],
        category: "js",
        tags: "pole otočenie"
    },
    {
        command: ".sort()",
        comment: "// Zoradí prvky poľa (mení originál – predvolene lexikograficky)",
        vars: ["pole.sort()", "pole.sort((a, b) => a - b)    // vzostupne", "pole.sort((a, b) => b - a)    // zostupne"],
        category: "js",
        tags: "pole zoradenie"
    },
    {
        command: ".flat()",
        comment: "// Splošťuje vnorené polia do jedného poľa",
        vars: ["[[1,2],[3,4]].flat()      // [1,2,3,4]", "pole.flat(2)              // 2 úrovne", "pole.flat(Infinity)       // všetky úrovne"],
        category: "js",
        tags: "pole splošťovanie vnorené"
    },
    {
        command: ".flatMap()",
        comment: "// map() + flat(1) v jednom kroku",
        vars: ["pole.flatMap(x => [x, x * 2])"],
        category: "js",
        tags: "pole map flat"
    },
    {
        command: ".fill()",
        comment: "// Naplní časť poľa hodnotou",
        vars: ["pole.fill(0)           // všetky na 0", "pole.fill(5, 1, 3)     // od indexu 1 do 2"],
        category: "js",
        tags: "pole plnenie"
    },
    {
        command: ".indexOf()",
        comment: "// Vráti prvý index hľadanej hodnoty (alebo -1)",
        vars: ["pole.indexOf('a')", "pole.indexOf('a', 2) // hľadá od indexu 2"],
        category: "js",
        tags: "pole hľadanie index"
    },
    {
        command: ".lastIndexOf()",
        comment: "// Vráti posledný index hľadanej hodnoty",
        vars: ["pole.lastIndexOf('a')"],
        category: "js",
        tags: "pole hľadanie index"
    },
    {
        command: ".includes()",
        comment: "// Vráti true ak pole obsahuje danú hodnotu",
        vars: ["pole.includes(3)", "pole.includes('a', 1)"],
        category: "js",
        tags: "pole obsahuje kontrola"
    },
    {
        command: ".find()",
        comment: "// Vráti prvý prvok spĺňajúci podmienku (alebo undefined)",
        vars: ["pole.find(x => x > 5)", "pole.find(item => item.id === 3)"],
        category: "js",
        tags: "pole hľadanie podmienka"
    },
    {
        command: ".findIndex()",
        comment: "// Vráti index prvého prvku spĺňajúceho podmienku (alebo -1)",
        vars: ["pole.findIndex(x => x > 5)"],
        category: "js",
        tags: "pole hľadanie index podmienka"
    },
    {
        command: ".findLast() / .findLastIndex()",
        comment: "// Hľadá od konca poľa (ES2023)",
        vars: ["pole.findLast(x => x % 2 === 0)", "pole.findLastIndex(x => x > 5)"],
        category: "js",
        tags: "pole hľadanie koniec"
    },
    {
        command: ".filter()",
        comment: "// Vráti nové pole obsahujúce len prvky spĺňajúce podmienku",
        vars: ["pole.filter(x => x > 0)", "pole.filter(item => item.active)"],
        category: "js",
        tags: "pole filtrovanie"
    },
    {
        command: ".map()",
        comment: "// Vráti nové pole s transformovanými prvkami",
        vars: ["pole.map(x => x * 2)", "pole.map(item => item.meno)", "pole.map((x, i) => ({ index: i, hodnota: x }))"],
        category: "js",
        tags: "pole transformácia"
    },
    {
        command: ".reduce()",
        comment: "// Redukuje pole na jednu hodnotu (akumulátor)",
        vars: ["pole.reduce((acc, x) => acc + x, 0)     // suma", "pole.reduce((acc, x) => acc * x, 1)     // súčin"],
        category: "js",
        tags: "pole redukcia akumulácia"
    },
    {
        command: ".reduceRight()",
        comment: "// Ako reduce() ale iteruje od konca poľa",
        vars: ["pole.reduceRight((acc, x) => acc + x, '')"],
        category: "js",
        tags: "pole redukcia sprava"
    },
    {
        command: ".forEach()",
        comment: "// Vykoná funkciu pre každý prvok (nič nevracia)",
        vars: ["pole.forEach(item => console.log(item))", "pole.forEach((item, index) => { })"],
        category: "js",
        tags: "pole iterácia"
    },
    {
        command: ".some()",
        comment: "// Vráti true ak aspoň JEDEN prvok spĺňa podmienku",
        vars: ["pole.some(x => x > 5)", "pole.some(item => item.active)"],
        category: "js",
        tags: "pole podmienka niektorý"
    },
    {
        command: ".every()",
        comment: "// Vráti true ak VŠETKY prvky spĺňajú podmienku",
        vars: ["pole.every(x => x > 0)", "pole.every(item => item.valid)"],
        category: "js",
        tags: "pole podmienka všetky"
    },
    {
        command: ".keys() / .values() / .entries()",
        comment: "// Iterátory cez indexy / hodnoty / páry [index, hodnota]",
        vars: ["for (const i of pole.keys()) { }", "for (const [i, v] of pole.entries()) { }"],
        category: "js",
        tags: "pole iterátor kľúče hodnoty"
    },
    {
        command: "Array.isArray()",
        comment: "// Skontroluje či je hodnota pole",
        vars: ["Array.isArray([1,2,3]) // true", "Array.isArray('ahoj') // false"],
        category: "js",
        tags: "pole kontrola typ"
    },
    {
        command: "Array.from()",
        comment: "// Vytvorí pole z iterovateľného objektu alebo Array-like",
        vars: ["Array.from('ahoj')        // ['a','h','o','j']", "Array.from({length: 5}, (_, i) => i)", "Array.from(new Set([1,2,2,3]))"],
        category: "js",
        tags: "pole vytvorenie konverzia"
    },
    {
        command: "Array.of()",
        comment: "// Vytvorí pole zo zadaných argumentov",
        vars: ["Array.of(1, 2, 3) // [1, 2, 3]"],
        category: "js",
        tags: "pole vytvorenie"
    },
    {
        command: ".toSorted() / .toReversed() / .toSpliced() / .with()",
        comment: "// Nemenné verzie sort/reverse/splice/index-zápis (ES2023, vracajú nové pole)",
        vars: ["pole.toSorted((a,b) => a - b)", "pole.toReversed()", "pole.with(1, 'x') // nahradí index 1 hodnotou 'x'"],
        category: "js",
        tags: "pole nemenné ES2023"
    },

    // =============================================
    // --- SEKCIA: OBJEKTY ---
    // =============================================
    {
        command: "",
        comment: "Objekty (Object)",
        vars: [],
        icon: "fa-solid fa-cube",
        color: "#e84393",
        category: "js",
        tags: "objekt object vlastnosti metódy"
    },
    {
        command: "{} / new Object()",
        comment: "// Vytvorenie objektu (object literal – odporúčaný spôsob)",
        vars: ["const obj = { meno: 'Ján', vek: 30 }", "const obj = new Object()"],
        category: "js",
        tags: "objekt vytvorenie"
    },
    {
        command: "obj.vlastnosť / obj['vlastnosť']",
        comment: "// Prístup k vlastnosti objektu (dot alebo bracket notácia)",
        vars: ["obj.meno", "obj['meno']", "obj[dynamickyKluc]"],
        category: "js",
        tags: "objekt prístup vlastnosť"
    },
    {
        command: "Shorthand properties",
        comment: "// Skrátený zápis keď sa názov premennej zhoduje s názvom vlastnosti",
        vars: ["const meno = 'Ján'; const obj = { meno }  // { meno: 'Ján' }"],
        category: "js",
        tags: "objekt skrátený zápis"
    },
    {
        command: "Computed property names",
        comment: "// Dynamický názov vlastnosti pomocou výrazu v hranatých zátvorkách",
        vars: ["const key = 'meno'; const obj = { [key]: 'Ján' }"],
        category: "js",
        tags: "objekt dynamický kľúč"
    },
    {
        command: "Destructuring (objekt)",
        comment: "// Rozbalenie vlastností objektu do premenných",
        vars: ["const { meno, vek } = objekt", "const { meno: n, vek: v = 0 } = objekt", "const { adresa: { mesto } } = objekt"],
        category: "js",
        tags: "objekt destructuring rozbalenie"
    },
    {
        command: "Object.keys()",
        comment: "// Pole kľúčov (vlastných vymenovaných vlastností) objektu",
        vars: ["Object.keys(obj)   // ['meno', 'vek']"],
        category: "js",
        tags: "objekt kľúče"
    },
    {
        command: "Object.values()",
        comment: "// Pole hodnôt vlastností objektu",
        vars: ["Object.values(obj)  // ['Ján', 30]"],
        category: "js",
        tags: "objekt hodnoty"
    },
    {
        command: "Object.entries()",
        comment: "// Pole párov [kľúč, hodnota]",
        vars: ["Object.entries(obj)  // [['meno','Ján'],['vek',30]]", "for (const [k, v] of Object.entries(obj)) { }"],
        category: "js",
        tags: "objekt páry kľúč hodnota"
    },
    {
        command: "Object.assign()",
        comment: "// Skopíruje vlastnosti zdrojových objektov do cieľového",
        vars: ["Object.assign({}, obj1, obj2)", "Object.assign(target, { nová: 'hodnota' })"],
        category: "js",
        tags: "objekt kopírovanie zlúčenie"
    },
    {
        command: "Object.freeze()",
        comment: "// Zmrazí objekt – nedajú sa meniť, pridávať ani mazať vlastnosti",
        vars: ["const obj = Object.freeze({ x: 1 })"],
        category: "js",
        tags: "objekt zmrazenie nemennosť"
    },
    {
        command: "Object.seal()",
        comment: "// Zapečatí objekt – nedajú sa pridávať/mazať vlastnosti, ale meniť áno",
        vars: ["Object.seal(obj)"],
        category: "js",
        tags: "objekt zapečatenie"
    },
    {
        command: "Object.create()",
        comment: "// Vytvorí nový objekt s daným prototypom",
        vars: ["const child = Object.create(parentObj)", "Object.create(null) // bez prototypu"],
        category: "js",
        tags: "objekt prototyp vytvorenie"
    },
    {
        command: "Object.fromEntries()",
        comment: "// Vytvorí objekt z poľa párov [kľúč, hodnota] alebo Map",
        vars: ["Object.fromEntries([['a', 1], ['b', 2]])", "Object.fromEntries(map)"],
        category: "js",
        tags: "objekt vytvorenie entries"
    },
    {
        command: "Object.hasOwn()",
        comment: "// Skontroluje či objekt má vlastnú vlastnosť (ES2022, nahrádza hasOwnProperty)",
        vars: ["Object.hasOwn(obj, 'meno') // true/false"],
        category: "js",
        tags: "objekt vlastnosť kontrola"
    },
    {
        command: "Object.defineProperty()",
        comment: "// Definuje vlastnosť s deskriptorom (enumerable, writable, configurable)",
        vars: ["Object.defineProperty(obj, 'id', { value: 1, writable: false, enumerable: true })"],
        category: "js",
        tags: "objekt descriptor vlastnosť"
    },
    {
        command: "Spread objekt",
        comment: "// Rozbalenie vlastností objektu (plytká kópia alebo zlúčenie)",
        vars: ["const kopia = { ...obj }", "const zluceny = { ...obj1, ...obj2 }", "const rozsireny = { ...obj, novaVlastnost: 'hodnota' }"],
        category: "js",
        tags: "objekt spread kopírovanie"
    },
    {
        command: "Getter / Setter",
        comment: "// Prístupové vlastnosti – metódy správajúce sa ako vlastnosti",
        vars: ["const obj = { get plneMeno() { return this.m + ' ' + this.p }, set vek(v) { if(v > 0) this._vek = v } }"],
        category: "js",
        tags: "objekt getter setter"
    },

    // =============================================
    // --- SEKCIA: REŤAZCE (STRING) ---
    // =============================================
    {
        command: "",
        comment: "Reťazce (String)",
        vars: [],
        icon: "fa-solid fa-quote-left",
        color: "#fdcb6e",
        category: "js",
        tags: "reťazec string text"
    },
    {
        command: "Template literals",
        comment: "// Šablónové reťazce s interpoláciou premenných a viacriadkovým textom",
        vars: ["`Ahoj, ${meno}!`", "`${a} + ${b} = ${a + b}`", "`Riadok 1\\nRiadok 2`"],
        category: "js",
        tags: "reťazec template šablóna"
    },
    {
        command: ".length",
        comment: "// Počet znakov v reťazci",
        vars: ["'ahoj'.length  // 4"],
        category: "js",
        tags: "reťazec dĺžka"
    },
    {
        command: ".toUpperCase() / .toLowerCase()",
        comment: "// Konverzia na veľké / malé písmená",
        vars: ["'ahoj'.toUpperCase() // 'AHOJ'"],
        category: "js",
        tags: "reťazec písmená konverzia"
    },
    {
        command: ".trim() / .trimStart() / .trimEnd()",
        comment: "// Odstráni biele znaky zo začiatku, konca alebo oboch strán",
        vars: ["'  ahoj  '.trim()      // 'ahoj'", "'  ahoj'.trimStart()   // 'ahoj'"],
        category: "js",
        tags: "reťazec medzery"
    },
    {
        command: ".includes()",
        comment: "// Vráti true ak reťazec obsahuje hľadaný podreťazec",
        vars: ["'ahoj svet'.includes('svet')   // true", "'ahoj'.includes('x', 1)"],
        category: "js",
        tags: "reťazec obsahuje hľadanie"
    },
    {
        command: ".startsWith() / .endsWith()",
        comment: "// Overí začiatok / koniec reťazca",
        vars: ["'ahoj'.startsWith('ah') // true", "'ahoj'.endsWith('oj')   // true"],
        category: "js",
        tags: "reťazec začiatok koniec"
    },
    {
        command: ".indexOf() / .lastIndexOf()",
        comment: "// Index prvého / posledného výskytu podreťazca",
        vars: ["'ahoj ahoj'.indexOf('ahoj')     // 0", "'ahoj ahoj'.lastIndexOf('ahoj') // 5"],
        category: "js",
        tags: "reťazec index hľadanie"
    },
    {
        command: ".slice()",
        comment: "// Vráti časť reťazca (záporný index počíta od konca)",
        vars: ["'ahoj svet'.slice(5)       // 'svet'", "'ahoj svet'.slice(0, 4)   // 'ahoj'", "'ahoj'.slice(-3)          // 'hoj'"],
        category: "js",
        tags: "reťazec výrez"
    },
    {
        command: ".substring()",
        comment: "// Vráti časť reťazca medzi dvoma indexmi",
        vars: ["'ahoj svet'.substring(5, 9) // 'svet'"],
        category: "js",
        tags: "reťazec výrez"
    },
    {
        command: ".split()",
        comment: "// Rozdelí reťazec na pole podľa oddeľovača",
        vars: ["'a,b,c'.split(',')    // ['a','b','c']", "'ahoj'.split('')      // ['a','h','o','j']", "'ahoj svet'.split(' ')"],
        category: "js",
        tags: "reťazec rozdelenie pole"
    },
    {
        command: ".replace() / .replaceAll()",
        comment: "// Nahradí prvý / všetky výskyty podreťazca alebo regexu",
        vars: ["'ahoj ahoj'.replace('ahoj', 'hi')    // 'hi ahoj'", "'ahoj ahoj'.replaceAll('ahoj', 'hi') // 'hi hi'", "str.replace(/ahoj/g, 'hi')"],
        category: "js",
        tags: "reťazec nahradenie"
    },
    {
        command: ".match() / .matchAll()",
        comment: "// Nájde zhody s regulárnym výrazom",
        vars: ["'ahoj123'.match(/\\d+/)      // ['123']", "'a1b2'.match(/\\d/g)        // ['1','2']", "[...'a1b2'.matchAll(/\\d/g)]"],
        category: "js",
        tags: "reťazec regex zhoda"
    },
    {
        command: ".search()",
        comment: "// Vráti index prvej zhody s regexom (alebo -1)",
        vars: ["'ahoj123'.search(/\\d+/)  // 4"],
        category: "js",
        tags: "reťazec regex hľadanie"
    },
    {
        command: ".padStart() / .padEnd()",
        comment: "// Doplní reťazec znakmi na požadovanú dĺžku zo začiatku / konca",
        vars: ["'5'.padStart(3, '0')  // '005'", "'hi'.padEnd(5, '.')   // 'hi...'"],
        category: "js",
        tags: "reťazec dopĺňanie"
    },
    {
        command: ".repeat()",
        comment: "// Opakuje reťazec n-krát",
        vars: ["'ab'.repeat(3)  // 'ababab'"],
        category: "js",
        tags: "reťazec opakovanie"
    },
    {
        command: ".charAt() / .charCodeAt()",
        comment: "// Znaky podľa indexu / ASCII kód znaku na danom indexe",
        vars: ["'ahoj'.charAt(0)     // 'a'", "'ahoj'.charCodeAt(0) // 97"],
        category: "js",
        tags: "reťazec znak index"
    },
    {
        command: "String.fromCharCode()",
        comment: "// Vytvorí reťazec z ASCII / Unicode kódov",
        vars: ["String.fromCharCode(65, 66) // 'AB'"],
        category: "js",
        tags: "reťazec znak kód"
    },
    {
        command: ".at()",
        comment: "// Vráti znak na indexe (záporný index počíta od konca) – ES2022",
        vars: ["'ahoj'.at(-1)  // 'j'", "'ahoj'.at(0)   // 'a'"],
        category: "js",
        tags: "reťazec index záporný"
    },
    {
        command: "Tagged template literals",
        comment: "// Spracovanie template literálu vlastnou funkciou",
        vars: ["const res = html`<div>${obsah}</div>`"],
        category: "js",
        tags: "reťazec template tag"
    },

    // =============================================
    // --- SEKCIA: ČÍSLA A MATEMATIKA ---
    // =============================================
    {
        command: "",
        comment: "Čísla a matematika (Number / Math)",
        vars: [],
        icon: "fa-solid fa-square-root-variable",
        color: "#a29bfe",
        category: "js",
        tags: "čísla matematika number math"
    },
    {
        command: "Number()",
        comment: "// Konvertuje hodnotu na číslo",
        vars: ["Number('42')    // 42", "Number('3.14')  // 3.14", "Number(true)    // 1", "Number('')      // 0", "Number('abc')   // NaN"],
        category: "js",
        tags: "číslo konverzia"
    },
    {
        command: "parseInt() / parseFloat()",
        comment: "// Parsovanie reťazca na celé číslo / desatinné číslo",
        vars: ["parseInt('42px')     // 42", "parseInt('ff', 16)  // 255 (hexadecimálne)", "parseFloat('3.14em') // 3.14"],
        category: "js",
        tags: "číslo parsovanie"
    },
    {
        command: "isNaN() / Number.isNaN()",
        comment: "// Overenie či je hodnota NaN (Number.isNaN je striktnejší)",
        vars: ["isNaN('ahoj')         // true", "Number.isNaN('ahoj')  // false", "Number.isNaN(NaN)     // true"],
        category: "js",
        tags: "číslo NaN kontrola"
    },
    {
        command: "isFinite() / Number.isFinite()",
        comment: "// Overenie či je číslo konečné",
        vars: ["Number.isFinite(42)       // true", "Number.isFinite(Infinity) // false"],
        category: "js",
        tags: "číslo nekonečno kontrola"
    },
    {
        command: "Number.isInteger()",
        comment: "// Overenie či je číslo celé",
        vars: ["Number.isInteger(42)   // true", "Number.isInteger(3.14) // false"],
        category: "js",
        tags: "číslo celé kontrola"
    },
    {
        command: ".toFixed()",
        comment: "// Formátovanie čísla na daný počet desatinných miest (vráti reťazec)",
        vars: ["(3.14159).toFixed(2)  // '3.14'", "(1.5).toFixed(0)      // '2'"],
        category: "js",
        tags: "číslo formátovanie desatinné"
    },
    {
        command: ".toPrecision()",
        comment: "// Číslo na daný počet platných číslic (vráti reťazec)",
        vars: ["(123.456).toPrecision(5)  // '123.46'"],
        category: "js",
        tags: "číslo formátovanie"
    },
    {
        command: ".toString()",
        comment: "// Konvertuje číslo na reťazec (voliteľne v danej sústave)",
        vars: ["(255).toString()    // '255'", "(255).toString(16)  // 'ff' (hex)", "(255).toString(2)   // '11111111' (binárne)"],
        category: "js",
        tags: "číslo reťazec konverzia"
    },
    {
        command: "Number.MAX_SAFE_INTEGER",
        comment: "// Maximálne bezpečné celé číslo (2^53 - 1)",
        vars: ["Number.MAX_SAFE_INTEGER   // 9007199254740991", "Number.MIN_SAFE_INTEGER   // -9007199254740991"],
        category: "js",
        tags: "číslo limity"
    },
    {
        command: "Math.round() / .ceil() / .floor()",
        comment: "// Zaokrúhlenie (na najbližšie / nahor / nadol)",
        vars: ["Math.round(4.5)  // 5", "Math.ceil(4.1)   // 5", "Math.floor(4.9)  // 4"],
        category: "js",
        tags: "matematika zaokrúhlenie"
    },
    {
        command: "Math.abs()",
        comment: "// Absolútna hodnota (vždy kladná)",
        vars: ["Math.abs(-5)  // 5"],
        category: "js",
        tags: "matematika absolútna"
    },
    {
        command: "Math.max() / Math.min()",
        comment: "// Maximálna / minimálna hodnota zo zadaných čísel",
        vars: ["Math.max(1, 5, 3)        // 5", "Math.min(...pole)         // minimum z poľa"],
        category: "js",
        tags: "matematika maximum minimum"
    },
    {
        command: "Math.pow() / Math.sqrt()",
        comment: "// Umocnenie / druhá odmocnina",
        vars: ["Math.pow(2, 10)  // 1024", "Math.sqrt(144)   // 12"],
        category: "js",
        tags: "matematika umocnenie odmocnina"
    },
    {
        command: "Math.random()",
        comment: "// Náhodné desatinné číslo od 0 (vrátane) do 1 (vylúčene)",
        vars: ["Math.random()", "Math.floor(Math.random() * 10)     // 0-9", "Math.floor(Math.random() * (max - min + 1)) + min"],
        category: "js",
        tags: "matematika náhodné"
    },
    {
        command: "Math.trunc()",
        comment: "// Odstráni desatinnú časť (neorezáva, len odreže)",
        vars: ["Math.trunc(4.9)   // 4", "Math.trunc(-4.9)  // -4"],
        category: "js",
        tags: "matematika celá časť"
    },
    {
        command: "Math.sign()",
        comment: "// Vráti znamienko čísla: 1, -1 alebo 0",
        vars: ["Math.sign(5)   //  1", "Math.sign(-5)  // -1", "Math.sign(0)   //  0"],
        category: "js",
        tags: "matematika znamienko"
    },
    {
        command: "Math.log() / Math.log2() / Math.log10()",
        comment: "// Prirodzený / dvojkový / desatinný logaritmus",
        vars: ["Math.log(Math.E)   // 1", "Math.log2(8)       // 3", "Math.log10(1000)   // 3"],
        category: "js",
        tags: "matematika logaritmus"
    },
    {
        command: "Math.PI / Math.E",
        comment: "// Matematické konštanty – Ludolfovo číslo π a Eulerovo číslo e",
        vars: ["Math.PI   // 3.141592653589793", "Math.E    // 2.718281828459045"],
        category: "js",
        tags: "matematika konštanty"
    },

    // =============================================
    // --- SEKCIA: TRIEDY (CLASS) ---
    // =============================================
    {
        command: "",
        comment: "Triedy (Class) – OOP",
        vars: [],
        icon: "fa-solid fa-diagram-project",
        color: "#e17055",
        category: "js",
        tags: "trieda class OOP dedičnosť"
    },
    {
        command: "class",
        comment: "// Deklarácia triedy (syntaktický cukor nad prototypmi)",
        vars: ["class Auto { constructor(znacka) { this.znacka = znacka } }"],
        category: "js",
        tags: "trieda deklarácia"
    },
    {
        command: "constructor()",
        comment: "// Inicializácia inštancie – volaný pri new",
        vars: ["constructor(meno, vek) { this.meno = meno; this.vek = vek }"],
        category: "js",
        tags: "trieda konštruktor"
    },
    {
        command: "new",
        comment: "// Vytvorí novú inštanciu triedy alebo konštruktor funkcie",
        vars: ["const auto = new Auto('BMW')", "const d = new Date()"],
        category: "js",
        tags: "trieda inštancia"
    },
    {
        command: "this",
        comment: "// Odkaz na aktuálny objekt / kontext volania",
        vars: ["this.meno", "this.metoda()", "this.#privatnaVlastnost"],
        category: "js",
        tags: "trieda kontext this"
    },
    {
        command: "extends",
        comment: "// Dedičnosť – trieda rozširuje inú triedu",
        vars: ["class Elektromobil extends Auto { }"],
        category: "js",
        tags: "trieda dedičnosť"
    },
    {
        command: "super()",
        comment: "// Volanie konštruktora / metódy rodičovskej triedy",
        vars: ["super(znacka)", "super.metoda()"],
        category: "js",
        tags: "trieda rodič super"
    },
    {
        command: "static",
        comment: "// Statická metóda alebo vlastnosť (prístupná cez triedu, nie inštanciu)",
        vars: ["static vytvor(data) { return new Auto(data) }", "static pocet = 0"],
        category: "js",
        tags: "trieda statická metóda"
    },
    {
        command: "get / set",
        comment: "// Accessor metódy v triede (getter a setter)",
        vars: ["get plneMeno() { return `${this.m} ${this.p}` }", "set vek(v) { if (v > 0) this._vek = v }"],
        category: "js",
        tags: "trieda getter setter"
    },
    {
        command: "#privatnaVlastnost",
        comment: "// Súkromné pole / metóda triedy (skutočne privátne – ES2022)",
        vars: ["#heslo = ''", "#overHeslo() { }", "this.#heslo"],
        category: "js",
        tags: "trieda privátne pole"
    },
    {
        command: "instanceof",
        comment: "// Overí či objekt je inštanciou danej triedy",
        vars: ["auto instanceof Auto  // true", "auto instanceof Object // true"],
        category: "js",
        tags: "trieda inštancia kontrola"
    },
    {
        command: "Mixin",
        comment: "// Vzor pre zmiešanie funkcionalít viacerých tried",
        vars: ["const Letajuci = (Base) => class extends Base { letaj() { } }"],
        category: "js",
        tags: "trieda mixin vzor"
    },

    // =============================================
    // --- SEKCIA: ASYNCHRÓNNY KÓD ---
    // =============================================
    {
        command: "",
        comment: "Asynchrónny kód",
        vars: [],
        icon: "fa-solid fa-hourglass-half",
        color: "#00b894",
        category: "js",
        tags: "async await promise callback asynchrónny"
    },
    {
        command: "setTimeout()",
        comment: "// Vykoná funkciu raz po uplynutí času (ms)",
        vars: ["setTimeout(() => { }, 1000)", "const id = setTimeout(fn, 500)", "clearTimeout(id)"],
        category: "js",
        tags: "async časovač oneskorenie"
    },
    {
        command: "setInterval()",
        comment: "// Opakuje funkciu každých X milisekúnd",
        vars: ["const id = setInterval(() => { }, 1000)", "clearInterval(id)"],
        category: "js",
        tags: "async interval opakovanie"
    },
    {
        command: "requestAnimationFrame()",
        comment: "// Spustí funkciu pred nasledujúcim prekreslením obrazovky (60fps)",
        vars: ["const id = requestAnimationFrame(fn)", "cancelAnimationFrame(id)"],
        category: "js",
        tags: "async animácia frame"
    },
    {
        command: "new Promise()",
        comment: "// Vytvorí prísľub – objekt reprezentujúci budúci výsledok",
        vars: ["new Promise((resolve, reject) => { resolve(data) })", "new Promise((res, rej) => { rej(new Error('Chyba')) })"],
        category: "js",
        tags: "async promise prísľub"
    },
    {
        command: ".then() / .catch() / .finally()",
        comment: "// Spracovanie výsledku / chyby / vždy-spustený blok Promise",
        vars: ["promise.then(data => { }).catch(err => { }).finally(() => { })"],
        category: "js",
        tags: "async promise then catch"
    },
    {
        command: "Promise.all()",
        comment: "// Čaká na VŠETKY prísľuby paralelne – jeden neúspech zrúti všetko",
        vars: ["const [a, b] = await Promise.all([fetch(url1), fetch(url2)])"],
        category: "js",
        tags: "async promise paralelné všetky"
    },
    {
        command: "Promise.allSettled()",
        comment: "// Čaká na VŠETKY prísľuby – vráti výsledok každého bez ohľadu na chybu",
        vars: ["const vysledky = await Promise.allSettled([p1, p2, p3])"],
        category: "js",
        tags: "async promise paralelné"
    },
    {
        command: "Promise.race()",
        comment: "// Vráti výsledok PRVÉHO splneného alebo odmietnutého prísľubu",
        vars: ["const prvy = await Promise.race([p1, p2, p3])"],
        category: "js",
        tags: "async promise race"
    },
    {
        command: "Promise.any()",
        comment: "// Vráti výsledok PRVÉHO úspešného prísľubu (ignoruje odmietnuté)",
        vars: ["const prvy = await Promise.any([p1, p2, p3])"],
        category: "js",
        tags: "async promise any"
    },
    {
        command: "Promise.resolve() / .reject()",
        comment: "// Vytvorí okamžite splnený / odmietnutý prísľub",
        vars: ["Promise.resolve(42)", "Promise.reject(new Error('chyba'))"],
        category: "js",
        tags: "async promise hotový"
    },
    {
        command: "async function",
        comment: "// Asynchrónna funkcia – vždy vracia Promise",
        vars: ["async function nacitajData() { }", "const fn = async () => { }"],
        category: "js",
        tags: "async funkcia"
    },
    {
        command: "await",
        comment: "// Čaká na splnenie Promise (len vo vnútri async funkcie)",
        vars: ["const data = await fetch(url)", "const text = await response.text()"],
        category: "js",
        tags: "async await čakanie"
    },
    {
        command: "async / await s try-catch",
        comment: "// Odporúčaný spôsob obsluhy chýb v async kóde",
        vars: ["async function fn() { try { const d = await fetch(url) } catch(e) { console.error(e) } }"],
        category: "js",
        tags: "async chyba error obsluha"
    },
    {
        command: "Async generators",
        comment: "// Asynchrónny generátor – kombinuje async a function*",
        vars: ["async function* stream() { yield await fetch(url1) }", "for await (const item of stream()) { }"],
        category: "js",
        tags: "async generátor"
    },

    // =============================================
    // --- SEKCIA: FETCH API ---
    // =============================================
    {
        command: "",
        comment: "Fetch API a HTTP požiadavky",
        vars: [],
        icon: "fa-solid fa-satellite-dish",
        color: "#0984e3",
        category: "js",
        tags: "fetch http api request"
    },
    {
        command: "fetch()",
        comment: "// Načíta zdroj zo siete – vracia Promise<Response>",
        vars: ["fetch('https://api.example.com/data')", "fetch(url, { method: 'POST', headers: {}, body: JSON.stringify(data) })"],
        category: "js",
        tags: "fetch http"
    },
    {
        command: "response.json()",
        comment: "// Sparsuje telo odpovede ako JSON – vracia Promise",
        vars: ["const data = await response.json()"],
        category: "js",
        tags: "fetch json odpoveď"
    },
    {
        command: "response.text()",
        comment: "// Telo odpovede ako prostý text – vracia Promise<string>",
        vars: ["const text = await response.text()"],
        category: "js",
        tags: "fetch text odpoveď"
    },
    {
        command: "response.ok / response.status",
        comment: "// Kontrola úspešnosti (ok = true pre 200-299) a HTTP kódu",
        vars: ["if (!response.ok) throw new Error(response.status)"],
        category: "js",
        tags: "fetch status kontrola"
    },
    {
        command: "Headers",
        comment: "// Objekt na prácu s HTTP hlavičkami požiadavky",
        vars: ["new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ...' })"],
        category: "js",
        tags: "fetch hlavičky headers"
    },
    {
        command: "AbortController",
        comment: "// Zrušenie prebiehajúcej fetch požiadavky",
        vars: ["const ctrl = new AbortController()", "fetch(url, { signal: ctrl.signal })", "ctrl.abort()"],
        category: "js",
        tags: "fetch zrušenie abort"
    },

    // =============================================
    // --- SEKCIA: DOM MANIPULÁCIA ---
    // =============================================
    {
        command: "",
        comment: "DOM – výber elementov",
        vars: [],
        icon: "fa-solid fa-wand-sparkles",
        color: "#e84393",
        category: "js",
        tags: "DOM výber elementov querySelector"
    },
    {
        command: "document.querySelector()",
        comment: "// Vráti PRVÝ element zodpovedajúci CSS selektoru (alebo null)",
        vars: ["document.querySelector('.trieda')", "document.querySelector('#id')", "document.querySelector('input[type=email]')"],
        category: "js",
        tags: "DOM výber selektor"
    },
    {
        command: "document.querySelectorAll()",
        comment: "// Vráti NodeList VŠETKÝCH zodpovedajúcich elementov",
        vars: ["document.querySelectorAll('li')", "document.querySelectorAll('.btn')"],
        category: "js",
        tags: "DOM výber všetky"
    },
    {
        command: "document.getElementById()",
        comment: "// Vráti element s daným ID (rýchlejší ako querySelector)",
        vars: ["document.getElementById('moje-id')"],
        category: "js",
        tags: "DOM výber id"
    },
    {
        command: "document.getElementsByClassName()",
        comment: "// Vráti živú HTMLCollection elementov s danou triedou",
        vars: ["document.getElementsByClassName('trieda')"],
        category: "js",
        tags: "DOM výber class"
    },
    {
        command: "document.getElementsByTagName()",
        comment: "// Vráti živú HTMLCollection elementov daného tagu",
        vars: ["document.getElementsByTagName('p')", "document.getElementsByTagName('*')"],
        category: "js",
        tags: "DOM výber tag"
    },
    {
        command: "element.closest()",
        comment: "// Nájde najbližšieho predka zodpovedajúceho selektoru",
        vars: ["btn.closest('.card')", "el.closest('[data-id]')"],
        category: "js",
        tags: "DOM výber predok"
    },
    {
        command: "element.matches()",
        comment: "// Vráti true ak element zodpovedá CSS selektoru",
        vars: ["el.matches('.active')", "el.matches('input[required]')"],
        category: "js",
        tags: "DOM kontrola selektor"
    },

    // =============================================
    // --- SEKCIA: DOM MODIFIKÁCIA ---
    // =============================================
    {
        command: "",
        comment: "DOM – modifikácia elementov",
        vars: [],
        icon: "fa-solid fa-pen-to-square",
        color: "#00cec9",
        category: "js",
        tags: "DOM modifikácia obsah atribúty"
    },
    {
        command: "element.textContent",
        comment: "// Textový obsah elementu (vrátane potomkov, bezpečné – bez HTML)",
        vars: ["el.textContent", "el.textContent = 'Nový text'"],
        category: "js",
        tags: "DOM text obsah"
    },
    {
        command: "element.innerHTML",
        comment: "// HTML obsah elementu (pozor na XSS pri uživateľskom vstupe!)",
        vars: ["el.innerHTML", "el.innerHTML = '<strong>Tučný</strong>'"],
        category: "js",
        tags: "DOM html obsah"
    },
    {
        command: "element.outerHTML",
        comment: "// HTML vrátane samotného elementu (čítanie alebo nahradenie)",
        vars: ["el.outerHTML"],
        category: "js",
        tags: "DOM html element"
    },
    {
        command: "element.getAttribute() / .setAttribute()",
        comment: "// Získanie / nastavenie atribútu elementu",
        vars: ["el.getAttribute('href')", "el.setAttribute('class', 'active')", "el.setAttribute('disabled', '')"],
        category: "js",
        tags: "DOM atribút"
    },
    {
        command: "element.removeAttribute()",
        comment: "// Odstránenie atribútu z elementu",
        vars: ["el.removeAttribute('disabled')", "el.removeAttribute('hidden')"],
        category: "js",
        tags: "DOM atribút odobratie"
    },
    {
        command: "element.hasAttribute()",
        comment: "// Overenie existencie atribútu",
        vars: ["el.hasAttribute('disabled')  // true/false"],
        category: "js",
        tags: "DOM atribút kontrola"
    },
    {
        command: "element.dataset",
        comment: "// Prístup k data-* atribútom (camelCase konverzia)",
        vars: ["el.dataset.userId", "el.dataset.myValue = '123'", "// data-my-value → dataset.myValue"],
        category: "js",
        tags: "DOM atribút data"
    },
    {
        command: "element.classList",
        comment: "// Správa CSS tried elementu",
        vars: ["el.classList.add('active')", "el.classList.remove('active')", "el.classList.toggle('open')", "el.classList.contains('active')", "el.classList.replace('old', 'new')"],
        category: "js",
        tags: "DOM trieda class"
    },
    {
        command: "element.style",
        comment: "// Inline štýly elementu (camelCase vlastnosti)",
        vars: ["el.style.color = 'red'", "el.style.backgroundColor = '#fff'", "el.style.setProperty('--farba', 'blue')", "el.style.removeProperty('color')"],
        category: "js",
        tags: "DOM štýl inline"
    },
    {
        command: "getComputedStyle()",
        comment: "// Vypočítané (finálne) CSS hodnoty elementu – read-only",
        vars: ["getComputedStyle(el).color", "getComputedStyle(el).getPropertyValue('--moja-premenná')"],
        category: "js",
        tags: "DOM štýl vypočítaný"
    },
    {
        command: "document.createElement()",
        comment: "// Vytvorí nový HTML element",
        vars: ["const div = document.createElement('div')", "const btn = document.createElement('button')"],
        category: "js",
        tags: "DOM vytvorenie element"
    },
    {
        command: "element.append() / .prepend()",
        comment: "// Pridá uzly alebo text na KONIEC / ZAČIATOK elementu",
        vars: ["el.append(novyDiv)", "el.append('text', novyDiv)", "el.prepend(novyDiv)"],
        category: "js",
        tags: "DOM vloženie koniec začiatok"
    },
    {
        command: "element.before() / .after()",
        comment: "// Vloží uzol PRED / ZA element (ako súrodenec)",
        vars: ["el.before(novyDiv)", "el.after('Text za elementom')"],
        category: "js",
        tags: "DOM vloženie súrodenec"
    },
    {
        command: "element.remove()",
        comment: "// Odstráni element z DOM",
        vars: ["el.remove()"],
        category: "js",
        tags: "DOM odstránenie"
    },
    {
        command: "element.replaceWith()",
        comment: "// Nahradí element novým uzlom alebo textom",
        vars: ["el.replaceWith(novyElement)", "el.replaceWith('Nový text')"],
        category: "js",
        tags: "DOM nahradenie"
    },
    {
        command: "element.cloneNode()",
        comment: "// Klonuje element (true = s potomkami, false = len element)",
        vars: ["el.cloneNode(true)", "el.cloneNode(false)"],
        category: "js",
        tags: "DOM klonovanie kópia"
    },
    {
        command: "element.insertAdjacentHTML()",
        comment: "// Vloží HTML reťazec na určenú pozíciu",
        vars: ["el.insertAdjacentHTML('beforebegin', '<p>pred</p>')", "el.insertAdjacentHTML('afterend', '<p>za</p>')", "el.insertAdjacentHTML('afterbegin', '<p>na začiatku</p>')", "el.insertAdjacentHTML('beforeend', '<p>na konci</p>')"],
        category: "js",
        tags: "DOM html vloženie pozícia"
    },
    {
        command: "document.createDocumentFragment()",
        comment: "// Odľahčený kontajner pre skupinu uzlov (výkon – jedno vloženie do DOM)",
        vars: ["const frag = document.createDocumentFragment()", "frag.append(...)", "el.append(frag)"],
        category: "js",
        tags: "DOM fragment výkon"
    },

    // =============================================
    // --- SEKCIA: UDALOSTI (EVENTS) ---
    // =============================================
    {
        command: "",
        comment: "Udalosti (Events)",
        vars: [],
        icon: "fa-solid fa-bolt",
        color: "#fdcb6e",
        category: "js",
        tags: "udalosti events listener click"
    },
    {
        command: "addEventListener()",
        comment: "// Priregistruje obsluhu udalosti na element",
        vars: ["el.addEventListener('click', handler)", "el.addEventListener('click', handler, { once: true })", "el.addEventListener('click', handler, { passive: true })"],
        category: "js",
        tags: "udalosť listener pridanie"
    },
    {
        command: "removeEventListener()",
        comment: "// Odstráni konkrétnu obsluhu udalosti",
        vars: ["el.removeEventListener('click', handler)"],
        category: "js",
        tags: "udalosť listener odstránenie"
    },
    {
        command: "event.preventDefault()",
        comment: "// Zruší predvolenú akciu prehliadača (odoslanie formulára, odkaz...)",
        vars: ["e.preventDefault()"],
        category: "js",
        tags: "udalosť predvolená akcia"
    },
    {
        command: "event.stopPropagation()",
        comment: "// Zastaví šírenie udalosti nahor (bubbling) aj nadol (capturing)",
        vars: ["e.stopPropagation()"],
        category: "js",
        tags: "udalosť bubbling propagácia"
    },
    {
        command: "event.target / event.currentTarget",
        comment: "// Element ktorý udalosť spustil / element na ktorom je listener",
        vars: ["e.target          // kliknutý element", "e.currentTarget   // element s listenerom"],
        category: "js",
        tags: "udalosť cieľ target"
    },
    {
        command: "Delegácia udalostí",
        comment: "// Jeden listener na rodiča namiesto mnohých na potomkov (výkon)",
        vars: ["ul.addEventListener('click', e => { if (e.target.tagName === 'LI') { } })"],
        category: "js",
        tags: "udalosť delegácia výkon"
    },
    {
        command: "Myšové udalosti",
        comment: "// Udalosti myši",
        vars: ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "contextmenu"],
        category: "js",
        tags: "udalosť myš"
    },
    {
        command: "Klávesnicové udalosti",
        comment: "// Udalosti klávesnice",
        vars: ["keydown", "keyup", "keypress (zastaraná)"],
        category: "js",
        tags: "udalosť klávesnica"
    },
    {
        command: "Formulárové udalosti",
        comment: "// Udalosti formulárových prvkov",
        vars: ["submit", "change", "input", "focus", "blur", "reset", "select"],
        category: "js",
        tags: "udalosť formulár"
    },
    {
        command: "Dotykové udalosti",
        comment: "// Udalosti dotykovej obrazovky",
        vars: ["touchstart", "touchend", "touchmove", "touchcancel"],
        category: "js",
        tags: "udalosť dotyk mobil"
    },
    {
        command: "Okno a dokument",
        comment: "// Udalosti okna a dokumentu",
        vars: ["load", "DOMContentLoaded", "resize", "scroll", "beforeunload", "unload", "online", "offline", "visibilitychange"],
        category: "js",
        tags: "udalosť okno dokument"
    },
    {
        command: "CustomEvent",
        comment: "// Vlastná udalosť s voliteľnými dátami",
        vars: ["const e = new CustomEvent('mojaUdalost', { detail: { id: 1 } })", "el.dispatchEvent(e)", "el.addEventListener('mojaUdalost', e => e.detail.id)"],
        category: "js",
        tags: "udalosť vlastná custom"
    },
    {
        command: "Pointer Events",
        comment: "// Unifikované udalosti pre myš aj dotyk",
        vars: ["pointerdown", "pointerup", "pointermove", "pointerenter", "pointerleave", "pointercancel"],
        category: "js",
        tags: "udalosť pointer"
    },

    // =============================================
    // --- SEKCIA: WEB STORAGE A COOKIES ---
    // =============================================
    {
        command: "",
        comment: "Web Storage, Cookies a URL",
        vars: [],
        icon: "fa-solid fa-database",
        color: "#ff7675",
        category: "js",
        tags: "storage cookies localStorage sessionStorage"
    },
    {
        command: "localStorage",
        comment: "// Trvalé úložisko v prehliadači (prežije zatvorenie okna)",
        vars: ["localStorage.setItem('kluč', 'hodnota')", "localStorage.getItem('kluč')", "localStorage.removeItem('kluč')", "localStorage.clear()", "JSON.stringify() / JSON.parse() pre objekty"],
        category: "js",
        tags: "storage lokálne trvalé"
    },
    {
        command: "sessionStorage",
        comment: "// Dočasné úložisko (vymaže sa po zatvorení záložky)",
        vars: ["sessionStorage.setItem('kluč', 'hodnota')", "sessionStorage.getItem('kluč')"],
        category: "js",
        tags: "storage relácia dočasné"
    },
    {
        command: "document.cookie",
        comment: "// Čítanie a zápis cookies (staromódne API)",
        vars: ["document.cookie = 'meno=Jan; max-age=3600; path=/'", "document.cookie // reťazec všetkých cookies"],
        category: "js",
        tags: "cookies"
    },
    {
        command: "JSON.stringify()",
        comment: "// Konvertuje JS objekt / pole na JSON reťazec",
        vars: ["JSON.stringify(obj)", "JSON.stringify(obj, null, 2)  // odsadenie 2 medzery"],
        category: "js",
        tags: "JSON serialize"
    },
    {
        command: "JSON.parse()",
        comment: "// Konvertuje JSON reťazec na JS objekt / pole",
        vars: ["JSON.parse(retazec)", "JSON.parse(localStorage.getItem('data') ?? '{}')"],
        category: "js",
        tags: "JSON deserialize"
    },
    {
        command: "URL / URLSearchParams",
        comment: "// Parsovanie a tvorba URL a query parametrov",
        vars: ["const url = new URL('https://example.com?x=1')", "url.searchParams.get('x')  // '1'", "url.searchParams.set('y', '2')", "new URLSearchParams({ a: 1, b: 2 }).toString()"],
        category: "js",
        tags: "URL query parametre"
    },
    {
        command: "history.pushState() / replaceState()",
        comment: "// Zmena URL bez načítania stránky (SPA navigácia)",
        vars: ["history.pushState({ page: 1 }, '', '/nova-cesta')", "history.replaceState(null, '', '/ina-cesta')"],
        category: "js",
        tags: "historia URL navigácia SPA"
    },
    {
        command: "location",
        comment: "// Aktuálna URL a navigácia",
        vars: ["location.href", "location.pathname", "location.search", "location.hash", "location.reload()", "location.assign('/nova-stranka')"],
        category: "js",
        tags: "URL navigácia"
    },

    // =============================================
    // --- SEKCIA: MODULY ---
    // =============================================
    {
        command: "",
        comment: "Moduly (ES Modules)",
        vars: [],
        icon: "fa-solid fa-puzzle-piece",
        color: "#74b9ff",
        category: "js",
        tags: "moduly import export ES modules"
    },
    {
        command: "export",
        comment: "// Export pomenovanej hodnoty, funkcie alebo triedy",
        vars: ["export const PI = 3.14", "export function sucet(a, b) { return a + b }", "export { sucet, PI }"],
        category: "js",
        tags: "modul export"
    },
    {
        command: "export default",
        comment: "// Predvolený export modulu (len jeden na súbor)",
        vars: ["export default class Auto { }", "export default function() { }", "export default { sucet, PI }"],
        category: "js",
        tags: "modul export predvolený"
    },
    {
        command: "import",
        comment: "// Import pomenovaných exportov z modulu",
        vars: ["import { sucet, PI } from './matematika.js'", "import { sucet as s } from './matematika.js'"],
        category: "js",
        tags: "modul import"
    },
    {
        command: "import default",
        comment: "// Import predvoleného exportu",
        vars: ["import Auto from './Auto.js'", "import Auto, { farba } from './Auto.js'"],
        category: "js",
        tags: "modul import predvolený"
    },
    {
        command: "import * as",
        comment: "// Import všetkého pod namespace (menný priestor)",
        vars: ["import * as Math from './matematika.js'", "Math.sucet(1, 2)"],
        category: "js",
        tags: "modul import namespace"
    },
    {
        command: "import()",
        comment: "// Dynamický import – načíta modul až keď je potrebný",
        vars: ["const modul = await import('./modul.js')", "import('./velkyModul.js').then(m => m.default())"],
        category: "js",
        tags: "modul dynamický import"
    },

    // =============================================
    // --- SEKCIA: DÁTUM A ČAS ---
    // =============================================
    {
        command: "",
        comment: "Dátum a čas (Date)",
        vars: [],
        icon: "fa-solid fa-calendar",
        color: "#a29bfe",
        category: "js",
        tags: "dátum čas date"
    },
    {
        command: "new Date()",
        comment: "// Vytvorenie objektu dátumu",
        vars: ["new Date()                    // teraz", "new Date('2024-12-31')", "new Date(2024, 11, 31)        // mesiac 0-indexed!", "new Date(timestamp)"],
        category: "js",
        tags: "dátum vytvorenie"
    },
    {
        command: "Date.now()",
        comment: "// Aktuálny Unix timestamp v milisekundách",
        vars: ["Date.now()  // napr. 1704067200000"],
        category: "js",
        tags: "dátum timestamp"
    },
    {
        command: ".getFullYear() / .getMonth() / .getDate()",
        comment: "// Rok / Mesiac (0–11!) / Deň mesiaca (1–31)",
        vars: ["d.getFullYear()", "d.getMonth() + 1  // opravené na 1-12", "d.getDate()"],
        category: "js",
        tags: "dátum získanie"
    },
    {
        command: ".getHours() / .getMinutes() / .getSeconds()",
        comment: "// Hodiny / Minúty / Sekundy",
        vars: ["d.getHours()", "d.getMinutes()", "d.getSeconds()"],
        category: "js",
        tags: "dátum čas získanie"
    },
    {
        command: ".getDay()",
        comment: "// Deň týždňa (0 = nedeľa, 1 = pondelok ... 6 = sobota)",
        vars: ["d.getDay()"],
        category: "js",
        tags: "dátum deň týždeň"
    },
    {
        command: ".getTime()",
        comment: "// Unix timestamp v milisekundách od 1.1.1970",
        vars: ["d.getTime()"],
        category: "js",
        tags: "dátum timestamp"
    },
    {
        command: ".toLocaleDateString()",
        comment: "// Lokalizovaný dátum ako reťazec",
        vars: ["d.toLocaleDateString('sk-SK')               // '31. 12. 2024'", "d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })"],
        category: "js",
        tags: "dátum formátovanie"
    },
    {
        command: ".toISOString()",
        comment: "// Dátum vo formáte ISO 8601 (UTC)",
        vars: ["d.toISOString()  // '2024-12-31T00:00:00.000Z'"],
        category: "js",
        tags: "dátum ISO formát"
    },
    {
        command: "Intl.DateTimeFormat()",
        comment: "// Pokročilé formátovanie dátumu a času",
        vars: ["new Intl.DateTimeFormat('sk-SK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(d)"],
        category: "js",
        tags: "dátum intl formátovanie"
    },

    // =============================================
    // --- SEKCIA: ŠPECIÁLNE ŠTRUKTÚRY ---
    // =============================================
    {
        command: "",
        comment: "Map, Set, WeakMap, WeakSet",
        vars: [],
        icon: "fa-solid fa-shapes",
        color: "#00cec9",
        category: "js",
        tags: "map set weakmap weakset kolekcie"
    },
    {
        command: "Map",
        comment: "// Kolekcia párov kľúč-hodnota (kľúč môže byť ľubovoľný typ)",
        vars: ["const m = new Map()", "m.set('kluč', 'hodnota')", "m.get('kluč')", "m.has('kluč')", "m.delete('kluč')", "m.size", "m.forEach((v, k) => { })", "for (const [k, v] of m) { }"],
        category: "js",
        tags: "map kľúč hodnota"
    },
    {
        command: "Set",
        comment: "// Kolekcia unikátnych hodnôt (každá hodnota len raz)",
        vars: ["const s = new Set([1, 2, 2, 3])  // {1, 2, 3}", "s.add(4)", "s.has(2)     // true", "s.delete(2)", "s.size       // 3", "[...s]       // na pole"],
        category: "js",
        tags: "set unikátne hodnoty"
    },
    {
        command: "WeakMap",
        comment: "// Map kde kľúče sú len objekty a sú slabo referencované (GC friendly)",
        vars: ["const wm = new WeakMap()", "wm.set(objekt, metadata)", "wm.get(objekt)"],
        category: "js",
        tags: "weakmap slabá referencia GC"
    },
    {
        command: "WeakSet",
        comment: "// Set kde hodnoty sú len objekty (slabo referencované)",
        vars: ["const ws = new WeakSet()", "ws.add(objekt)", "ws.has(objekt)"],
        category: "js",
        tags: "weakset slabá referencia"
    },
    {
        command: "WeakRef",
        comment: "// Slabá referencia na objekt (dovolí GC ho zbierať)",
        vars: ["const ref = new WeakRef(objekt)", "ref.deref()  // vráti objekt alebo undefined"],
        category: "js",
        tags: "weakref referencia GC"
    },

    // =============================================
    // --- SEKCIA: REGULÁRNE VÝRAZY ---
    // =============================================
    {
        command: "",
        comment: "Regulárne výrazy (RegExp)",
        vars: [],
        icon: "fa-solid fa-magnifying-glass",
        color: "#e17055",
        category: "js",
        tags: "regex regulárne výrazy pattern"
    },
    {
        command: "/pattern/flags",
        comment: "// Literálna syntax regulárneho výrazu",
        vars: ["/ahoj/i", "/^\\d{3}$/g", "/[a-z]+/gi"],
        category: "js",
        tags: "regex syntax"
    },
    {
        command: "new RegExp()",
        comment: "// Dynamické vytvorenie regexu z reťazca",
        vars: ["new RegExp('ahoj', 'i')", "new RegExp(`^${prefix}`, 'g')"],
        category: "js",
        tags: "regex vytvorenie dynamické"
    },
    {
        command: "Príznaky (flags)",
        comment: "// Modifikátory správania regulárneho výrazu",
        vars: ["g  – globálne (všetky zhody)", "i  – case-insensitive", "m  – multiline (^ a $ na každý riadok)", "s  – dotAll (. zodpovedá aj novému riadku)", "u  – unicode", "d  – generuje indices (indexy zhôd)"],
        category: "js",
        tags: "regex príznaky flags"
    },
    {
        command: "Znakové triedy",
        comment: "// Skupiny znakov v regexe",
        vars: ["\\d  – číslica (0-9)", "\\D  – nie číslica", "\\w  – slovný znak (a-z, A-Z, 0-9, _)", "\\W  – nie slovný znak", "\\s  – biely znak (medzera, tab, newline)", "\\S  – nie biely znak", ".   – ľubovoľný znak (okrem newline bez /s)"],
        category: "js",
        tags: "regex znaky triedy"
    },
    {
        command: "Kvantifikátory",
        comment: "// Počet opakovaní v regexe",
        vars: ["*   – 0 alebo viac", "+   – 1 alebo viac", "?   – 0 alebo 1 (voliteľné)", "{n} – presne n-krát", "{n,} – aspoň n-krát", "{n,m} – od n do m krát", "??  +? *? – non-greedy (čo najmenej)"],
        category: "js",
        tags: "regex kvantifikátory"
    },
    {
        command: "Kotvy a hranice",
        comment: "// Pozičné značky v regexe",
        vars: ["^  – začiatok reťazca / riadku", "$  – koniec reťazca / riadku", "\\b – hranica slova", "\\B – nie hranica slova"],
        category: "js",
        tags: "regex kotvy pozícia"
    },
    {
        command: "Skupiny a lookahead",
        comment: "// Zachytávanie skupín a podmienočné zhody",
        vars: ["(abc)        – zachytávacia skupina", "(?:abc)      – nezachytávacia skupina", "(?<meno>abc) – pomenovaná skupina", "(?=abc)      – pozitívny lookahead", "(?!abc)      – negatívny lookahead", "(?<=abc)     – lookbehind"],
        category: "js",
        tags: "regex skupiny lookahead"
    },
    {
        command: "regex.test()",
        comment: "// Vráti true ak regex nájde zhodu v reťazci",
        vars: ["/^\\d+$/.test('123')  // true", "/ahoj/i.test('Ahoj svet')"],
        category: "js",
        tags: "regex test zhoda"
    },
    {
        command: "regex.exec()",
        comment: "// Vráti podrobný výsledok zhody alebo null",
        vars: ["const match = /\\d+/.exec('vek: 25')", "match[0]  // '25', match.index // 5"],
        category: "js",
        tags: "regex exec výsledok"
    },

    // =============================================
    // --- SEKCIA: KONZOLA A LADENIE ---
    // =============================================
    {
        command: "",
        comment: "Konzola a ladenie (Debug)",
        vars: [],
        icon: "fa-solid fa-terminal",
        color: "#636e72",
        category: "js",
        tags: "konzola console debug ladenie"
    },
    {
        command: "console.log()",
        comment: "// Vypíše informáciu do konzoly",
        vars: ["console.log('text')", "console.log('Hodnota:', x)", "console.log('%c Štýlovaný text', 'color: red; font-size: 16px')"],
        category: "js",
        tags: "konzola výpis"
    },
    {
        command: "console.warn() / .error()",
        comment: "// Varovanie (žltá) / Chyba (červená) v konzole",
        vars: ["console.warn('Pozor!')", "console.error('Chyba:', err)"],
        category: "js",
        tags: "konzola varovanie chyba"
    },
    {
        command: "console.table()",
        comment: "// Vypíše pole objektov ako prehľadnú tabuľku",
        vars: ["console.table(poleObjektov)", "console.table(objekt, ['meno', 'vek'])"],
        category: "js",
        tags: "konzola tabuľka"
    },
    {
        command: "console.group() / .groupEnd()",
        comment: "// Zoskupí výstupy konzoly do rozbaľovacieho bloku",
        vars: ["console.group('Skupina')", "console.log('...')", "console.groupEnd()"],
        category: "js",
        tags: "konzola skupina"
    },
    {
        command: "console.time() / .timeEnd()",
        comment: "// Meranie doby vykonávania kódu",
        vars: ["console.time('operácia')", "// ... kód ...", "console.timeEnd('operácia')  // operácia: 12.3ms"],
        category: "js",
        tags: "konzola čas meranie výkon"
    },
    {
        command: "console.count() / .countReset()",
        comment: "// Počítadlo koľkokrát bol riadok zavolaný",
        vars: ["console.count('klik')"],
        category: "js",
        tags: "konzola počítadlo"
    },
    {
        command: "console.assert()",
        comment: "// Vypíše chybu ak podmienka nie je splnená",
        vars: ["console.assert(x > 0, 'x musí byť kladné!')"],
        category: "js",
        tags: "konzola kontrola podmienka"
    },
    {
        command: "console.trace()",
        comment: "// Vypíše zásobník volaní (call stack) na danom mieste",
        vars: ["console.trace('kde sme?')"],
        category: "js",
        tags: "konzola zásobník"
    },
    {
        command: "debugger",
        comment: "// Zastaví vykonávanie a otvorí DevTools debugger",
        vars: ["debugger"],
        category: "js",
        tags: "debug breakpoint"
    },

    // =============================================
    // --- SEKCIA: VÝKONNOSTNÉ API ---
    // =============================================
    {
        command: "",
        comment: "Výkon, Observer API a ďalšie Web API",
        vars: [],
        icon: "fa-solid fa-gauge-high",
        color: "#74b9ff",
        category: "js",
        tags: "výkon observer performance web API"
    },
    {
        command: "IntersectionObserver",
        comment: "// Sleduje kedy element vstúpi alebo opustí viewport (lazy loading, animácie)",
        vars: ["const obs = new IntersectionObserver(entries => { }, { threshold: 0.5 })", "obs.observe(el)", "obs.unobserve(el)"],
        category: "js",
        tags: "observer viewport lazy loading"
    },
    {
        command: "MutationObserver",
        comment: "// Sleduje zmeny v DOM (pridané/odobraté uzly, atribúty, text)",
        vars: ["const obs = new MutationObserver(mutations => { })", "obs.observe(el, { childList: true, subtree: true, attributes: true })", "obs.disconnect()"],
        category: "js",
        tags: "observer DOM zmeny"
    },
    {
        command: "ResizeObserver",
        comment: "// Sleduje zmenu rozmerov elementu",
        vars: ["const obs = new ResizeObserver(entries => { })", "obs.observe(el)", "obs.disconnect()"],
        category: "js",
        tags: "observer rozmer veľkosť"
    },
    {
        command: "performance.now()",
        comment: "// Vysoko presný časovač v milisekundách od štartu stránky",
        vars: ["const start = performance.now()", "// ... kód ...", "console.log(performance.now() - start + 'ms')"],
        category: "js",
        tags: "výkon čas meranie"
    },
    {
        command: "Worker / SharedWorker",
        comment: "// Vykonáva JS v pozadovom vlákne (neblokuje UI)",
        vars: ["const w = new Worker('worker.js')", "w.postMessage(data)", "w.onmessage = e => e.data"],
        category: "js",
        tags: "worker vlákno pozadie"
    },
    {
        command: "Clipboard API",
        comment: "// Prístup ku schránke (kopírovanie a vkladanie)",
        vars: ["await navigator.clipboard.writeText('text')", "const text = await navigator.clipboard.readText()"],
        category: "js",
        tags: "clipboard schránka kopírovanie"
    },
    {
        command: "Notification API",
        comment: "// Systémové notifikácie prehliadača",
        vars: ["const perm = await Notification.requestPermission()", "if (perm === 'granted') new Notification('Titulok', { body: 'Text' })"],
        category: "js",
        tags: "notifikácia systémová"
    },
    {
        command: "navigator.geolocation",
        comment: "// Prístup k GPS polohe zariadenia",
        vars: ["navigator.geolocation.getCurrentPosition(pos => { pos.coords.latitude })", "navigator.geolocation.watchPosition(pos => { })"],
        category: "js",
        tags: "geolokácia GPS poloha"
    },
    {
        command: "matchMedia()",
        comment: "// Detekcia CSS media query z JavaScriptu",
        vars: ["const mq = window.matchMedia('(prefers-color-scheme: dark)')", "mq.matches  // true/false", "mq.addEventListener('change', e => e.matches)"],
        category: "js",
        tags: "media query javascript"
    },
    {
        command: "Proxy",
        comment: "// Obal okolo objektu zachytávajúci operácie (get, set, delete...)",
        vars: ["const proxy = new Proxy(ciel, { get(t, k) { return k in t ? t[k] : 'N/A' }, set(t, k, v) { t[k] = v; return true } })"],
        category: "js",
        tags: "proxy obal objekt"
    },
    {
        command: "Reflect",
        comment: "// Reflexívne metódy pre operácie s objektmi (páruje sa s Proxy)",
        vars: ["Reflect.get(obj, 'kluč')", "Reflect.set(obj, 'kluč', hodnota)", "Reflect.has(obj, 'kluč')", "Reflect.ownKeys(obj)"],
        category: "js",
        tags: "reflect objekt operácie"
    },
    {
        command: "structuredClone()",
        comment: "// Hlboká kópia objektu vrátane vnorených polí a objektov (ES2022)",
        vars: ["const kopiа = structuredClone(originalObj)"],
        category: "js",
        tags: "kópia hlboká objekt"
    },
    {
        command: "queueMicrotask()",
        comment: "// Zaradí úlohu do fronty mikrotaskov (po aktuálnom skripte, pred setTimeout)",
        vars: ["queueMicrotask(() => { })"],
        category: "js",
        tags: "async mikrotask fronta"
    },
];