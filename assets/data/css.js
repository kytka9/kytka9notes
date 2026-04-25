const cssData = [

    // =============================================
    // --- SEKCIA: SELEKTORY ---
    // =============================================
    {
        command: "",
        comment: "Selektory",
        vars: [],
        icon: "fa-solid fa-crosshairs",
        color: "#E34F26",
        category: "css",
        tags: "selektory základy cielenie"
    },
    {
        command: "*",
        comment: "// Univerzálny selektor – vyberie VŠETKY elementy",
        vars: [],
        category: "css",
        tags: "selektor univerzálny"
    },
    {
        command: "element",
        comment: "// Typový selektor – vyberie všetky elementy daného typu",
        vars: ["p", "h1", "div", "span"],
        category: "css",
        tags: "selektor typ element"
    },
    {
        command: ".trieda",
        comment: "// Triedový selektor – vyberie elementy s danou class",
        vars: [".card", ".btn", ".container"],
        category: "css",
        tags: "selektor class trieda"
    },
    {
        command: "#id",
        comment: "// ID selektor – vyberie jeden jedinečný element",
        vars: ["#header", "#main", "#logo"],
        category: "css",
        tags: "selektor id"
    },
    {
        command: "A, B",
        comment: "// Skupinový selektor – vyberie oba elementy A aj B",
        vars: ["h1, h2, h3"],
        category: "css",
        tags: "selektor skupina"
    },
    {
        command: "A B",
        comment: "// Potomok – vyberie B kdekoľvek vnútri A (ľubovoľná hĺbka)",
        vars: ["div p", "nav a"],
        category: "css",
        tags: "selektor potomok"
    },
    {
        command: "A > B",
        comment: "// Priamy potomok – vyberie B len ako priame dieťa A",
        vars: ["ul > li", "div > p"],
        category: "css",
        tags: "selektor dieťa"
    },
    {
        command: "A + B",
        comment: "// Priamy súrodenec – vyberie B hneď za A",
        vars: ["h1 + p", "input + label"],
        category: "css",
        tags: "selektor súrodenec"
    },
    {
        command: "A ~ B",
        comment: "// Všeobecný súrodenec – vyberie všetky B za A",
        vars: ["h1 ~ p"],
        category: "css",
        tags: "selektor súrodenec"
    },
    {
        command: "[atribut]",
        comment: "// Atribútový selektor – element s daným atribútom",
        vars: ["[href]", "[required]", "[type]"],
        category: "css",
        tags: "selektor atribút"
    },
    {
        command: "[atribut='hodnota']",
        comment: "// Presná zhoda hodnoty atribútu",
        vars: ["[type='text']", "[lang='sk']"],
        category: "css",
        tags: "selektor atribút"
    },
    {
        command: "[atribut^='hodnota']",
        comment: "// Atribút začínajúci danou hodnotou",
        vars: ["[href^='https']"],
        category: "css",
        tags: "selektor atribút"
    },
    {
        command: "[atribut$='hodnota']",
        comment: "// Atribút končiaci danou hodnotou",
        vars: ["[href$='.pdf']"],
        category: "css",
        tags: "selektor atribút"
    },
    {
        command: "[atribut*='hodnota']",
        comment: "// Atribút obsahujúci danú hodnotu (kdekoľvek)",
        vars: ["[class*='btn']"],
        category: "css",
        tags: "selektor atribút"
    },

    // =============================================
    // --- SEKCIA: PSEUDOTRIEDY ---
    // =============================================
    {
        command: "",
        comment: "Pseudotriedy",
        vars: [],
        icon: "fa-solid fa-wand-magic-sparkles",
        color: "#a29bfe",
        category: "css",
        tags: "pseudotriedy stavy interakcia"
    },
    {
        command: ":hover",
        comment: "// Štýl keď je myš nad elementom",
        vars: [],
        category: "css",
        tags: "pseudotrieda myš interakcia"
    },
    {
        command: ":focus",
        comment: "// Štýl keď má element fokus (klávesnica, kliknutie)",
        vars: [],
        category: "css",
        tags: "pseudotrieda fokus interakcia"
    },
    {
        command: ":focus-visible",
        comment: "// Fokus zobrazený len pri navigácii klávesnicou",
        vars: [],
        category: "css",
        tags: "pseudotrieda fokus prístupnosť"
    },
    {
        command: ":active",
        comment: "// Štýl v momente kliknutia na element",
        vars: [],
        category: "css",
        tags: "pseudotrieda kliknutie"
    },
    {
        command: ":visited",
        comment: "// Navštívený odkaz (len pre &lt;a&gt;)",
        vars: [],
        category: "css",
        tags: "pseudotrieda odkaz"
    },
    {
        command: ":link",
        comment: "// Nenavštívený odkaz (len pre &lt;a&gt;)",
        vars: [],
        category: "css",
        tags: "pseudotrieda odkaz"
    },
    {
        command: ":checked",
        comment: "// Zaškrtnutý checkbox, radio alebo option",
        vars: [],
        category: "css",
        tags: "pseudotrieda formulár"
    },
    {
        command: ":disabled",
        comment: "// Deaktivovaný formulárový prvok",
        vars: [],
        category: "css",
        tags: "pseudotrieda formulár"
    },
    {
        command: ":enabled",
        comment: "// Aktívny (povolený) formulárový prvok",
        vars: [],
        category: "css",
        tags: "pseudotrieda formulár"
    },
    {
        command: ":required",
        comment: "// Povinné formulárové pole",
        vars: [],
        category: "css",
        tags: "pseudotrieda formulár validácia"
    },
    {
        command: ":optional",
        comment: "// Nepovinné formulárové pole",
        vars: [],
        category: "css",
        tags: "pseudotrieda formulár"
    },
    {
        command: ":valid",
        comment: "// Formulárové pole s platnou hodnotou",
        vars: [],
        category: "css",
        tags: "pseudotrieda formulár validácia"
    },
    {
        command: ":invalid",
        comment: "// Formulárové pole s neplatnou hodnotou",
        vars: [],
        category: "css",
        tags: "pseudotrieda formulár validácia"
    },
    {
        command: ":placeholder-shown",
        comment: "// Vstupné pole kým je viditeľný placeholder",
        vars: [],
        category: "css",
        tags: "pseudotrieda formulár"
    },
    {
        command: ":empty",
        comment: "// Element bez obsahu ani potomkov",
        vars: [],
        category: "css",
        tags: "pseudotrieda obsah"
    },
    {
        command: ":not(selektor)",
        comment: "// Elementy ktoré NEodpovedajú selektoru",
        vars: [":not(.active)", ":not(p)"],
        category: "css",
        tags: "pseudotrieda negácia"
    },
    {
        command: ":is(selektor)",
        comment: "// Zjednodušenie skupiny selektor (znižuje opakovanosť)",
        vars: [":is(h1, h2, h3)"],
        category: "css",
        tags: "pseudotrieda skupina"
    },
    {
        command: ":where(selektor)",
        comment: "// Ako :is() ale s nulovou špecificitou",
        vars: [":where(header, footer) a"],
        category: "css",
        tags: "pseudotrieda skupina špecificita"
    },
    {
        command: ":has(selektor)",
        comment: "// Rodičovský selektor – element obsahujúci potomka",
        vars: ["div:has(img)", "label:has(+ input:required)"],
        category: "css",
        tags: "pseudotrieda rodič potomok"
    },
    {
        command: ":first-child",
        comment: "// Prvý potomok svojho rodiča",
        vars: [],
        category: "css",
        tags: "pseudotrieda poradie"
    },
    {
        command: ":last-child",
        comment: "// Posledný potomok svojho rodiča",
        vars: [],
        category: "css",
        tags: "pseudotrieda poradie"
    },
    {
        command: ":nth-child(n)",
        comment: "// N-tý potomok (môže byť vzorec: 2n, 2n+1, odd, even)",
        vars: [":nth-child(2)", ":nth-child(odd)", ":nth-child(3n+1)"],
        category: "css",
        tags: "pseudotrieda poradie vzorec"
    },
    {
        command: ":nth-last-child(n)",
        comment: "// N-tý potomok počítaný od konca",
        vars: [":nth-last-child(2)"],
        category: "css",
        tags: "pseudotrieda poradie"
    },
    {
        command: ":only-child",
        comment: "// Element ktorý je jediným potomkom rodiča",
        vars: [],
        category: "css",
        tags: "pseudotrieda poradie"
    },
    {
        command: ":first-of-type",
        comment: "// Prvý element daného typu u rodiča",
        vars: [],
        category: "css",
        tags: "pseudotrieda typ poradie"
    },
    {
        command: ":last-of-type",
        comment: "// Posledný element daného typu u rodiča",
        vars: [],
        category: "css",
        tags: "pseudotrieda typ poradie"
    },
    {
        command: ":nth-of-type(n)",
        comment: "// N-tý element daného typu",
        vars: [":nth-of-type(2n)"],
        category: "css",
        tags: "pseudotrieda typ poradie"
    },
    {
        command: ":only-of-type",
        comment: "// Jediný element daného typu u rodiča",
        vars: [],
        category: "css",
        tags: "pseudotrieda typ"
    },
    {
        command: ":root",
        comment: "// Koreňový element dokumentu (&lt;html&gt;) – ideálny pre CSS premenné",
        vars: [],
        category: "css",
        tags: "pseudotrieda root premenné"
    },
    {
        command: ":target",
        comment: "// Element na ktorý smeruje URL hash (#id)",
        vars: [],
        category: "css",
        tags: "pseudotrieda url hash"
    },
    {
        command: ":lang(jazyk)",
        comment: "// Element s daným jazykovým atribútom",
        vars: [":lang(sk)", ":lang(en)"],
        category: "css",
        tags: "pseudotrieda jazyk"
    },

    // =============================================
    // --- SEKCIA: PSEUDOELEMENTY ---
    // =============================================
    {
        command: "",
        comment: "Pseudoelementy",
        vars: [],
        icon: "fa-solid fa-magic",
        color: "#fd79a8",
        category: "css",
        tags: "pseudoelementy generovaný obsah"
    },
    {
        command: "::before",
        comment: "// Vloží generovaný obsah PRED element (content: povinný)",
        vars: ["content: ''", "content: '→'"],
        category: "css",
        tags: "pseudoelement pred obsah"
    },
    {
        command: "::after",
        comment: "// Vloží generovaný obsah ZA element (content: povinný)",
        vars: ["content: ''", "content: '✓'"],
        category: "css",
        tags: "pseudoelement za obsah"
    },
    {
        command: "::placeholder",
        comment: "// Štýl placeholder textu vo vstupných poliach",
        vars: [],
        category: "css",
        tags: "pseudoelement formulár placeholder"
    },
    {
        command: "::selection",
        comment: "// Štýl označeného (označeného) textu používateľom",
        vars: [],
        category: "css",
        tags: "pseudoelement výber text"
    },
    {
        command: "::first-line",
        comment: "// Štýl prvého riadku blokového textu",
        vars: [],
        category: "css",
        tags: "pseudoelement text riadok"
    },
    {
        command: "::first-letter",
        comment: "// Štýl prvého písmena blokového textu (drop cap efekt)",
        vars: [],
        category: "css",
        tags: "pseudoelement text písmeno"
    },
    {
        command: "::marker",
        comment: "// Štýl odrážky alebo čísla v zozname (&lt;li&gt;)",
        vars: [],
        category: "css",
        tags: "pseudoelement zoznam odrážka"
    },
    {
        command: "::backdrop",
        comment: "// Pozadie za modálom alebo fullscreen elementom",
        vars: [],
        category: "css",
        tags: "pseudoelement modal pozadie"
    },
    {
        command: "::file-selector-button",
        comment: "// Tlačidlo input[type=file] pre výber súboru",
        vars: [],
        category: "css",
        tags: "pseudoelement formulár súbor"
    },
    {
        command: "::scrollbar",
        comment: "// Štýl scrollbaru (webkit prehliadače)",
        vars: ["::webkit-scrollbar", "::webkit-scrollbar-thumb", "::webkit-scrollbar-track"],
        category: "css",
        tags: "pseudoelement scrollbar posuvník"
    },

    // =============================================
    // --- SEKCIA: FARBY A POZADIE ---
    // =============================================
    {
        command: "",
        comment: "Farby a pozadie",
        vars: [],
        icon: "fa-solid fa-palette",
        color: "#e17055",
        category: "css",
        tags: "farby pozadie background"
    },
    {
        command: "color",
        comment: "// Farba textu",
        vars: ["red", "#ff0000", "rgb(255,0,0)", "hsl(0,100%,50%)", "oklch(0.6 0.2 30)"],
        category: "css",
        tags: "farba text"
    },
    {
        command: "background-color",
        comment: "// Farba pozadia elementu",
        vars: ["transparent", "#fff", "rgba(0,0,0,0.5)"],
        category: "css",
        tags: "pozadie farba"
    },
    {
        command: "background-image",
        comment: "// Obrázok alebo gradient na pozadie",
        vars: ["url('obr.jpg')", "linear-gradient(to right, #f00, #00f)", "radial-gradient(circle, red, blue)"],
        category: "css",
        tags: "pozadie obrázok gradient"
    },
    {
        command: "background-repeat",
        comment: "// Opakovanie pozadia",
        vars: ["no-repeat", "repeat", "repeat-x", "repeat-y", "space", "round"],
        category: "css",
        tags: "pozadie opakovanie"
    },
    {
        command: "background-position",
        comment: "// Pozícia pozadia",
        vars: ["center", "top left", "50% 50%", "right bottom"],
        category: "css",
        tags: "pozadie pozícia"
    },
    {
        command: "background-size",
        comment: "// Veľkosť pozadia",
        vars: ["cover", "contain", "100% auto", "50px 50px"],
        category: "css",
        tags: "pozadie veľkosť"
    },
    {
        command: "background-attachment",
        comment: "// Správanie pozadia pri scrollovaní",
        vars: ["scroll", "fixed", "local"],
        category: "css",
        tags: "pozadie scroll"
    },
    {
        command: "background-clip",
        comment: "// Orezanie pozadia na oblasť elementu",
        vars: ["border-box", "padding-box", "content-box", "text"],
        category: "css",
        tags: "pozadie orezanie"
    },
    {
        command: "background-origin",
        comment: "// Počiatočný bod pozadia",
        vars: ["padding-box", "border-box", "content-box"],
        category: "css",
        tags: "pozadie počiatok"
    },
    {
        command: "background",
        comment: "// Skratka pre všetky background vlastnosti naraz",
        vars: ["#fff url('bg.jpg') no-repeat center / cover"],
        category: "css",
        tags: "pozadie skratka"
    },
    {
        command: "opacity",
        comment: "// Priehľadnosť celého elementu (0 = neviditeľný, 1 = plný)",
        vars: ["0", "0.5", "1"],
        category: "css",
        tags: "farba priehľadnosť"
    },
    {
        command: "mix-blend-mode",
        comment: "// Spôsob miešania farby elementu s pozadím",
        vars: ["multiply", "screen", "overlay", "darken", "lighten", "difference"],
        category: "css",
        tags: "farba blend efekt"
    },
    {
        command: "filter",
        comment: "// Grafické filtre aplikované na element",
        vars: ["blur(5px)", "brightness(0.8)", "contrast(1.2)", "grayscale(100%)", "sepia(50%)", "drop-shadow(2px 2px 4px black)"],
        category: "css",
        tags: "efekt filter"
    },
    {
        command: "backdrop-filter",
        comment: "// Filter aplikovaný na obsah ZA elementom (blur pozadia)",
        vars: ["blur(10px)", "brightness(0.7)"],
        category: "css",
        tags: "efekt filter pozadie"
    },

    // =============================================
    // --- SEKCIA: BOX MODEL ---
    // =============================================
    {
        command: "",
        comment: "Box model (rozmer a medzery)",
        vars: [],
        icon: "fa-solid fa-box",
        color: "#0984e3",
        category: "css",
        tags: "box model rozmer margin padding border"
    },
    {
        command: "width",
        comment: "// Šírka elementu",
        vars: ["100px", "50%", "auto", "100vw", "fit-content", "min-content", "max-content"],
        category: "css",
        tags: "rozmer šírka"
    },
    {
        command: "height",
        comment: "// Výška elementu",
        vars: ["100px", "50%", "auto", "100vh"],
        category: "css",
        tags: "rozmer výška"
    },
    {
        command: "min-width",
        comment: "// Minimálna šírka (element nebude užší)",
        vars: ["200px", "50%"],
        category: "css",
        tags: "rozmer šírka minimum"
    },
    {
        command: "max-width",
        comment: "// Maximálna šírka (element nebude širší)",
        vars: ["1200px", "100%", "none"],
        category: "css",
        tags: "rozmer šírka maximum"
    },
    {
        command: "min-height",
        comment: "// Minimálna výška elementu",
        vars: ["100px", "100vh"],
        category: "css",
        tags: "rozmer výška minimum"
    },
    {
        command: "max-height",
        comment: "// Maximálna výška elementu",
        vars: ["500px", "100vh", "none"],
        category: "css",
        tags: "rozmer výška maximum"
    },
    {
        command: "padding",
        comment: "// Vnútorná medzera (4 strany: hore, vpravo, dole, vľavo)",
        vars: ["10px", "10px 20px", "10px 20px 15px", "10px 20px 15px 5px"],
        category: "css",
        tags: "box model vnútorná medzera"
    },
    {
        command: "padding-top / right / bottom / left",
        comment: "// Vnútorná medzera pre konkrétnu stranu",
        vars: ["padding-top: 10px", "padding-inline: 20px", "padding-block: 15px"],
        category: "css",
        tags: "box model medzera strana"
    },
    {
        command: "margin",
        comment: "// Vonkajšia medzera (4 strany rovnako ako padding)",
        vars: ["0 auto", "10px", "10px 20px", "auto"],
        category: "css",
        tags: "box model vonkajšia medzera"
    },
    {
        command: "margin-top / right / bottom / left",
        comment: "// Vonkajšia medzera pre konkrétnu stranu",
        vars: ["margin-top: 20px", "margin-inline: auto", "margin-block: 10px"],
        category: "css",
        tags: "box model medzera strana"
    },
    {
        command: "border",
        comment: "// Skratka pre orámovanie (hrúbka, štýl, farba)",
        vars: ["1px solid #ccc", "2px dashed red", "none"],
        category: "css",
        tags: "border orámovanie"
    },
    {
        command: "border-width",
        comment: "// Hrúbka orámovania",
        vars: ["1px", "2px 4px", "thin", "medium", "thick"],
        category: "css",
        tags: "border hrúbka"
    },
    {
        command: "border-style",
        comment: "// Štýl orámovania",
        vars: ["solid", "dashed", "dotted", "double", "groove", "ridge", "inset", "outset", "none"],
        category: "css",
        tags: "border štýl"
    },
    {
        command: "border-color",
        comment: "// Farba orámovania",
        vars: ["#ccc", "transparent", "currentColor"],
        category: "css",
        tags: "border farba"
    },
    {
        command: "border-radius",
        comment: "// Zaoblenie rohov (1–4 hodnoty alebo %)",
        vars: ["8px", "50%", "10px 20px", "10px / 20px"],
        category: "css",
        tags: "border zaoblenie"
    },
    {
        command: "border-top / right / bottom / left",
        comment: "// Orámovanie konkrétnej strany (skratka)",
        vars: ["border-top: 2px solid red", "border-bottom: none"],
        category: "css",
        tags: "border strana"
    },
    {
        command: "border-image",
        comment: "// Obrázok ako orámovanie elementu",
        vars: ["url('border.png') 30 round", "linear-gradient(red, blue) 1"],
        category: "css",
        tags: "border obrázok"
    },
    {
        command: "outline",
        comment: "// Obrys MIMO box model (neovplyvňuje rozloženie)",
        vars: ["2px solid blue", "none", "3px dashed red"],
        category: "css",
        tags: "outline obrys"
    },
    {
        command: "outline-offset",
        comment: "// Medzera medzi elementom a obrysom",
        vars: ["4px", "-2px"],
        category: "css",
        tags: "outline obrys medzera"
    },
    {
        command: "box-sizing",
        comment: "// Určuje čo zahŕňa width/height (content alebo celý box)",
        vars: ["border-box", "content-box"],
        category: "css",
        tags: "box model veľkosť"
    },
    {
        command: "box-shadow",
        comment: "// Tieň elementu (môže byť viac tieňov oddelených čiarkou)",
        vars: ["2px 4px 8px rgba(0,0,0,0.2)", "inset 0 2px 4px #000", "0 0 20px rgba(255,0,0,0.5)"],
        category: "css",
        tags: "box model tieň efekt"
    },
    {
        command: "overflow",
        comment: "// Správanie obsahu ktorý preteká cez element",
        vars: ["visible", "hidden", "scroll", "auto", "clip"],
        category: "css",
        tags: "box model pretok obsah"
    },
    {
        command: "overflow-x / overflow-y",
        comment: "// Pretok len v horizontálnom alebo vertikálnom smere",
        vars: ["overflow-x: auto", "overflow-y: hidden"],
        category: "css",
        tags: "box model pretok smer"
    },

    // =============================================
    // --- SEKCIA: TYPOGRAFIA ---
    // =============================================
    {
        command: "",
        comment: "Typografia a text",
        vars: [],
        icon: "fa-solid fa-font",
        color: "#264de4",
        category: "css",
        tags: "typografia font text písmo"
    },
    {
        command: "font-family",
        comment: "// Písmo (vždy konči generickým – serif, sans-serif, monospace)",
        vars: ["'Roboto', sans-serif", "'Georgia', serif", "monospace"],
        category: "css",
        tags: "font písmo rodina"
    },
    {
        command: "font-size",
        comment: "// Veľkosť písma",
        vars: ["16px", "1rem", "1.2em", "clamp(1rem, 2vw, 2rem)"],
        category: "css",
        tags: "font veľkosť"
    },
    {
        command: "font-weight",
        comment: "// Hrúbka písma (100–900 alebo kľúčové slová)",
        vars: ["400", "700", "bold", "normal", "lighter", "bolder"],
        category: "css",
        tags: "font hrúbka tučné"
    },
    {
        command: "font-style",
        comment: "// Sklon písma",
        vars: ["normal", "italic", "oblique"],
        category: "css",
        tags: "font štýl kurzíva"
    },
    {
        command: "font-variant",
        comment: "// Varianty písma (malé veľké písmená a pod.)",
        vars: ["normal", "small-caps", "all-small-caps"],
        category: "css",
        tags: "font variant"
    },
    {
        command: "font-stretch",
        comment: "// Šírka písma (condensed, expanded...)",
        vars: ["normal", "condensed", "expanded", "75%"],
        category: "css",
        tags: "font šírka"
    },
    {
        command: "font",
        comment: "// Skratka: style variant weight size/line-height family",
        vars: ["bold 16px/1.5 'Roboto', sans-serif", "italic small-caps 700 1.2rem serif"],
        category: "css",
        tags: "font skratka"
    },
    {
        command: "@font-face",
        comment: "// Načítanie vlastného fontu zo súboru",
        vars: ["font-family: 'MojFont'", "src: url('font.woff2') format('woff2')"],
        category: "css",
        tags: "font vlastný načítanie"
    },
    {
        command: "line-height",
        comment: "// Výška riadku (odporúča sa bez jednotky: 1.5)",
        vars: ["1.5", "24px", "normal", "150%"],
        category: "css",
        tags: "text riadok výška"
    },
    {
        command: "letter-spacing",
        comment: "// Medzera medzi písmenami (tracking)",
        vars: ["0.05em", "2px", "normal"],
        category: "css",
        tags: "text medzera písmená"
    },
    {
        command: "word-spacing",
        comment: "// Medzera medzi slovami",
        vars: ["0.1em", "4px", "normal"],
        category: "css",
        tags: "text medzera slová"
    },
    {
        command: "text-align",
        comment: "// Horizontálne zarovnanie textu",
        vars: ["left", "right", "center", "justify", "start", "end"],
        category: "css",
        tags: "text zarovnanie"
    },
    {
        command: "text-align-last",
        comment: "// Zarovnanie posledného riadku bloku textu",
        vars: ["left", "center", "justify"],
        category: "css",
        tags: "text zarovnanie posledný riadok"
    },
    {
        command: "vertical-align",
        comment: "// Vertikálne zarovnanie inline / table-cell elementu",
        vars: ["baseline", "top", "middle", "bottom", "super", "sub"],
        category: "css",
        tags: "text zarovnanie vertikálne"
    },
    {
        command: "text-decoration",
        comment: "// Dekorácia textu (podčiarknutie, prečiarknutie...)",
        vars: ["underline", "line-through", "none", "overline", "underline dotted red"],
        category: "css",
        tags: "text dekorácia"
    },
    {
        command: "text-decoration-color",
        comment: "// Farba dekorácie textu",
        vars: ["red", "currentColor", "transparent"],
        category: "css",
        tags: "text dekorácia farba"
    },
    {
        command: "text-decoration-style",
        comment: "// Štýl dekorácie textu",
        vars: ["solid", "dashed", "dotted", "double", "wavy"],
        category: "css",
        tags: "text dekorácia štýl"
    },
    {
        command: "text-transform",
        comment: "// Transformácia veľkosti písmen",
        vars: ["uppercase", "lowercase", "capitalize", "none"],
        category: "css",
        tags: "text transformácia veľkosť"
    },
    {
        command: "text-indent",
        comment: "// Odsadenie prvého riadku textu",
        vars: ["2em", "20px"],
        category: "css",
        tags: "text odsadenie"
    },
    {
        command: "text-shadow",
        comment: "// Tieň textu (x y blur farba)",
        vars: ["2px 2px 4px rgba(0,0,0,0.3)", "0 0 10px cyan"],
        category: "css",
        tags: "text tieň efekt"
    },
    {
        command: "text-overflow",
        comment: "// Správanie textu ktorý preteká (s overflow: hidden)",
        vars: ["ellipsis", "clip", "'...'"],
        category: "css",
        tags: "text pretok skrátenie"
    },
    {
        command: "white-space",
        comment: "// Spracovanie bielych znakov a zalamovanie riadkov",
        vars: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
        category: "css",
        tags: "text medzery zalamovanie"
    },
    {
        command: "word-break",
        comment: "// Zalamovanie dlhých slov",
        vars: ["normal", "break-all", "keep-all", "break-word"],
        category: "css",
        tags: "text slová zalamovanie"
    },
    {
        command: "overflow-wrap",
        comment: "// Zalomenie slova keď preteká (jemnejšie ako word-break)",
        vars: ["normal", "break-word", "anywhere"],
        category: "css",
        tags: "text zalamovanie pretok"
    },
    {
        command: "hyphens",
        comment: "// Automatické delenie slov pomlčkou",
        vars: ["auto", "manual", "none"],
        category: "css",
        tags: "text delenie pomlčka"
    },
    {
        command: "writing-mode",
        comment: "// Smer toku textu (horizontálny, vertikálny)",
        vars: ["horizontal-tb", "vertical-rl", "vertical-lr"],
        category: "css",
        tags: "text smer toku"
    },
    {
        command: "direction",
        comment: "// Smer textu (ltr = zľava doprava, rtl = sprava doľava)",
        vars: ["ltr", "rtl"],
        category: "css",
        tags: "text smer"
    },
    {
        command: "text-rendering",
        comment: "// Optimalizácia vykresľovania textu",
        vars: ["auto", "optimizeSpeed", "optimizeLegibility", "geometricPrecision"],
        category: "css",
        tags: "text vykresľovanie"
    },
    {
        command: "-webkit-font-smoothing",
        comment: "// Vyhladzovanie fontov (len WebKit/Blink)",
        vars: ["antialiased", "subpixel-antialiased", "none"],
        category: "css",
        tags: "font vyhladzovanie"
    },

    // =============================================
    // --- SEKCIA: DISPLAY A POZICIOVANIE ---
    // =============================================
    {
        command: "",
        comment: "Display a poziciovanie",
        vars: [],
        icon: "fa-solid fa-layer-group",
        color: "#00b894",
        category: "css",
        tags: "display pozícia layout"
    },
    {
        command: "display",
        comment: "// Typ zobrazenia elementu",
        vars: ["block", "inline", "inline-block", "flex", "grid", "inline-flex", "inline-grid", "none", "contents", "table"],
        category: "css",
        tags: "display zobrazenie"
    },
    {
        command: "position",
        comment: "// Typ poziciovania elementu",
        vars: ["static", "relative", "absolute", "fixed", "sticky"],
        category: "css",
        tags: "pozícia"
    },
    {
        command: "top / right / bottom / left",
        comment: "// Odsadenie od okraja (len pre position != static)",
        vars: ["0", "10px", "50%", "auto"],
        category: "css",
        tags: "pozícia odsadenie"
    },
    {
        command: "inset",
        comment: "// Skratka pre top, right, bottom, left naraz",
        vars: ["0", "10px 20px", "0 auto"],
        category: "css",
        tags: "pozícia odsadenie skratka"
    },
    {
        command: "z-index",
        comment: "// Vrstva elementu (vyššie číslo = vpredu, len pre positioned elementy)",
        vars: ["1", "10", "100", "-1", "auto"],
        category: "css",
        tags: "pozícia vrstva"
    },
    {
        command: "float",
        comment: "// Obtékanie elementu textom (staršia technika layoutu)",
        vars: ["left", "right", "none"],
        category: "css",
        tags: "float obtékanie"
    },
    {
        command: "clear",
        comment: "// Zastaví obtékanie float elementov",
        vars: ["both", "left", "right", "none"],
        category: "css",
        tags: "float clear"
    },
    {
        command: "visibility",
        comment: "// Viditeľnosť elementu (hidden zachová miesto na stránke)",
        vars: ["visible", "hidden", "collapse"],
        category: "css",
        tags: "zobrazenie viditeľnosť"
    },

    // =============================================
    // --- SEKCIA: FLEXBOX ---
    // =============================================
    {
        command: "",
        comment: "Flexbox",
        vars: [],
        icon: "fa-solid fa-arrows-left-right",
        color: "#6c5ce7",
        category: "css",
        tags: "flexbox flex layout zarovnanie"
    },
    {
        command: "display: flex",
        comment: "// Aktivuje flexbox na rodičovskom kontajneri",
        vars: [],
        category: "css",
        tags: "flex aktivácia"
    },
    {
        command: "flex-direction",
        comment: "// Smer hlavnej osi flex kontajnera",
        vars: ["row", "row-reverse", "column", "column-reverse"],
        category: "css",
        tags: "flex smer os"
    },
    {
        command: "flex-wrap",
        comment: "// Zalamovanie flex položiek na nový riadok",
        vars: ["nowrap", "wrap", "wrap-reverse"],
        category: "css",
        tags: "flex zalamovanie"
    },
    {
        command: "flex-flow",
        comment: "// Skratka pre flex-direction a flex-wrap",
        vars: ["row wrap", "column nowrap"],
        category: "css",
        tags: "flex skratka"
    },
    {
        command: "justify-content",
        comment: "// Zarovnanie položiek pozdĺž HLAVNEJ osi",
        vars: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
        category: "css",
        tags: "flex zarovnanie hlavná os"
    },
    {
        command: "align-items",
        comment: "// Zarovnanie položiek pozdĺž PRIEČNEJ osi (jeden riadok)",
        vars: ["flex-start", "flex-end", "center", "stretch", "baseline"],
        category: "css",
        tags: "flex zarovnanie priečna os"
    },
    {
        command: "align-content",
        comment: "// Zarovnanie viacerých riadkov flex položiek",
        vars: ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
        category: "css",
        tags: "flex zarovnanie viac riadkov"
    },
    {
        command: "gap",
        comment: "// Medzera medzi flex (aj grid) položkami",
        vars: ["10px", "1rem 2rem", "20px"],
        category: "css",
        tags: "flex grid medzera"
    },
    {
        command: "flex-grow",
        comment: "// Ako rástol má flex item (0 = neroste, 1 = roste rovnomerne)",
        vars: ["0", "1", "2"],
        category: "css",
        tags: "flex item rast"
    },
    {
        command: "flex-shrink",
        comment: "// Ako sa má flex item zmenšovať (0 = nezmenšuje)",
        vars: ["0", "1", "2"],
        category: "css",
        tags: "flex item zmenšenie"
    },
    {
        command: "flex-basis",
        comment: "// Základná veľkosť flex itemu pred rozdelením priestoru",
        vars: ["auto", "200px", "30%", "0"],
        category: "css",
        tags: "flex item veľkosť"
    },
    {
        command: "flex",
        comment: "// Skratka: flex-grow flex-shrink flex-basis",
        vars: ["1", "0 1 auto", "1 0 200px", "none"],
        category: "css",
        tags: "flex item skratka"
    },
    {
        command: "align-self",
        comment: "// Zarovnanie konkrétnej flex položky (prepíše align-items)",
        vars: ["auto", "flex-start", "flex-end", "center", "stretch", "baseline"],
        category: "css",
        tags: "flex item zarovnanie"
    },
    {
        command: "order",
        comment: "// Poradie flex itemu (nižšie číslo = skôr, predvolene 0)",
        vars: ["0", "-1", "1", "2"],
        category: "css",
        tags: "flex item poradie"
    },

    // =============================================
    // --- SEKCIA: CSS GRID ---
    // =============================================
    {
        command: "",
        comment: "CSS Grid",
        vars: [],
        icon: "fa-solid fa-table-cells",
        color: "#00cec9",
        category: "css",
        tags: "grid layout mriežka"
    },
    {
        command: "display: grid",
        comment: "// Aktivuje grid layout na rodičovskom kontajneri",
        vars: [],
        category: "css",
        tags: "grid aktivácia"
    },
    {
        command: "grid-template-columns",
        comment: "// Definícia stĺpcov gridu",
        vars: ["1fr 1fr 1fr", "repeat(3, 1fr)", "200px auto 1fr", "repeat(auto-fit, minmax(200px, 1fr))"],
        category: "css",
        tags: "grid stĺpce šablóna"
    },
    {
        command: "grid-template-rows",
        comment: "// Definícia riadkov gridu",
        vars: ["auto", "100px auto 200px", "repeat(3, 1fr)"],
        category: "css",
        tags: "grid riadky šablóna"
    },
    {
        command: "grid-template-areas",
        comment: "// Pomenovanie oblastí gridu pre vizuálnu šablónu",
        vars: ["'header header' 'sidebar main' 'footer footer'"],
        category: "css",
        tags: "grid oblasti šablóna"
    },
    {
        command: "grid-template",
        comment: "// Skratka pre grid-template-rows / columns / areas",
        vars: ["'header' 80px / 1fr"],
        category: "css",
        tags: "grid skratka šablóna"
    },
    {
        command: "grid-area",
        comment: "// Priradenie itemu do pomenovanej oblasti gridu",
        vars: ["header", "sidebar", "main"],
        category: "css",
        tags: "grid item oblasť"
    },
    {
        command: "grid-column",
        comment: "// Umiestnenie itemu cez stĺpce (skratka start / end)",
        vars: ["1 / 3", "1 / -1", "span 2"],
        category: "css",
        tags: "grid item stĺpec"
    },
    {
        command: "grid-row",
        comment: "// Umiestnenie itemu cez riadky (skratka start / end)",
        vars: ["1 / 3", "2 / span 3"],
        category: "css",
        tags: "grid item riadok"
    },
    {
        command: "grid-column-start / end",
        comment: "// Presné začiatočné/koncové čiary stĺpca",
        vars: ["1", "3", "-1", "span 2"],
        category: "css",
        tags: "grid item stĺpec čiara"
    },
    {
        command: "grid-row-start / end",
        comment: "// Presné začiatočné/koncové čiary riadku",
        vars: ["1", "3", "span 2"],
        category: "css",
        tags: "grid item riadok čiara"
    },
    {
        command: "grid-auto-flow",
        comment: "// Smer automatického umiestňovania grid itemov",
        vars: ["row", "column", "dense", "row dense"],
        category: "css",
        tags: "grid automatický tok"
    },
    {
        command: "grid-auto-columns",
        comment: "// Veľkosť implicitne vytvorených stĺpcov",
        vars: ["1fr", "200px", "minmax(100px, auto)"],
        category: "css",
        tags: "grid automatické stĺpce"
    },
    {
        command: "grid-auto-rows",
        comment: "// Veľkosť implicitne vytvorených riadkov",
        vars: ["auto", "100px", "minmax(50px, auto)"],
        category: "css",
        tags: "grid automatické riadky"
    },
    {
        command: "column-gap",
        comment: "// Medzera medzi stĺpcami gridu",
        vars: ["20px", "1rem"],
        category: "css",
        tags: "grid medzera stĺpce"
    },
    {
        command: "row-gap",
        comment: "// Medzera medzi riadkami gridu",
        vars: ["20px", "1rem"],
        category: "css",
        tags: "grid medzera riadky"
    },
    {
        command: "justify-items",
        comment: "// Zarovnanie obsahu grid itemov pozdĺž riadkovej osi",
        vars: ["start", "end", "center", "stretch"],
        category: "css",
        tags: "grid zarovnanie horizontálne"
    },
    {
        command: "align-items",
        comment: "// Zarovnanie obsahu grid itemov pozdĺž stĺpcovej osi",
        vars: ["start", "end", "center", "stretch"],
        category: "css",
        tags: "grid zarovnanie vertikálne"
    },
    {
        command: "justify-content",
        comment: "// Zarovnanie celého gridu v kontajneri (horizontálne)",
        vars: ["start", "end", "center", "space-between", "space-around", "space-evenly"],
        category: "css",
        tags: "grid zarovnanie kontajner"
    },
    {
        command: "place-items",
        comment: "// Skratka pre align-items a justify-items naraz",
        vars: ["center", "start end", "stretch"],
        category: "css",
        tags: "grid zarovnanie skratka"
    },
    {
        command: "place-content",
        comment: "// Skratka pre align-content a justify-content naraz",
        vars: ["center", "space-between start"],
        category: "css",
        tags: "grid zarovnanie skratka"
    },
    {
        command: "minmax(min, max)",
        comment: "// Funkcia: minimálna a maximálna veľkosť stĺpca/riadku",
        vars: ["minmax(100px, 1fr)", "minmax(200px, auto)"],
        category: "css",
        tags: "grid funkcia veľkosť"
    },
    {
        command: "repeat(n, hodnota)",
        comment: "// Opakovanie definície stĺpcov/riadkov",
        vars: ["repeat(3, 1fr)", "repeat(auto-fit, minmax(200px, 1fr))", "repeat(auto-fill, 100px)"],
        category: "css",
        tags: "grid funkcia opakovanie"
    },

    // =============================================
    // --- SEKCIA: TRANSFORMÁCIE ---
    // =============================================
    {
        command: "",
        comment: "Transformácie",
        vars: [],
        icon: "fa-solid fa-arrows-rotate",
        color: "#fdcb6e",
        category: "css",
        tags: "transform transformácie posun rotácia"
    },
    {
        command: "transform",
        comment: "// Aplikuje transformácie na element (môže byť viac naraz)",
        vars: ["translateX(50px)", "rotate(45deg)", "scale(1.5)", "skewX(20deg)"],
        category: "css",
        tags: "transform"
    },
    {
        command: "translate(x, y)",
        comment: "// Posun elementu po osi X a Y",
        vars: ["translateX(100px)", "translateY(-50%)", "translate(50%, 50%)", "translateZ(100px)"],
        category: "css",
        tags: "transform posun"
    },
    {
        command: "rotate(uhol)",
        comment: "// Rotácia elementu",
        vars: ["rotate(45deg)", "rotate(-90deg)", "rotateX(45deg)", "rotateY(60deg)", "rotate3d(1,1,0,45deg)"],
        category: "css",
        tags: "transform rotácia"
    },
    {
        command: "scale(x, y)",
        comment: "// Zmena veľkosti elementu",
        vars: ["scale(1.5)", "scale(2, 0.5)", "scaleX(2)", "scaleY(0.5)"],
        category: "css",
        tags: "transform veľkosť"
    },
    {
        command: "skew(x, y)",
        comment: "// Skosenie elementu",
        vars: ["skewX(20deg)", "skewY(10deg)", "skew(20deg, 10deg)"],
        category: "css",
        tags: "transform skosenie"
    },
    {
        command: "matrix()",
        comment: "// Kombinácia všetkých 2D transformácií v jednej matici",
        vars: ["matrix(1, 0.5, -0.5, 1, 30, 20)"],
        category: "css",
        tags: "transform matica 2D"
    },
    {
        command: "perspective()",
        comment: "// Perspektíva pre 3D transformácie",
        vars: ["perspective(500px)", "perspective(1000px)"],
        category: "css",
        tags: "transform perspektíva 3D"
    },
    {
        command: "transform-origin",
        comment: "// Bod otáčania/transformácie",
        vars: ["center", "top left", "50% 50%", "0 0"],
        category: "css",
        tags: "transform počiatok"
    },
    {
        command: "transform-style",
        comment: "// Ako sa rendrujú potomkovia v 3D priestore",
        vars: ["flat", "preserve-3d"],
        category: "css",
        tags: "transform 3D štýl"
    },
    {
        command: "backface-visibility",
        comment: "// Viditeľnosť zadnej strany otočeného 3D elementu",
        vars: ["visible", "hidden"],
        category: "css",
        tags: "transform 3D zadná strana"
    },

    // =============================================
    // --- SEKCIA: ANIMÁCIE A PRECHODY ---
    // =============================================
    {
        command: "",
        comment: "Animácie a prechody",
        vars: [],
        icon: "fa-solid fa-film",
        color: "#e84393",
        category: "css",
        tags: "animácia prechod transition animation"
    },
    {
        command: "transition",
        comment: "// Plynulý prechod pri zmene vlastnosti (skratka)",
        vars: ["all 0.3s ease", "color 0.2s linear", "transform 0.5s ease-in-out, opacity 0.3s"],
        category: "css",
        tags: "prechod animácia"
    },
    {
        command: "transition-property",
        comment: "// Vlastnosť na ktorú sa aplikuje prechod",
        vars: ["all", "color", "transform", "opacity", "none"],
        category: "css",
        tags: "prechod vlastnosť"
    },
    {
        command: "transition-duration",
        comment: "// Trvanie prechodu",
        vars: ["0.3s", "300ms", "1s"],
        category: "css",
        tags: "prechod trvanie"
    },
    {
        command: "transition-timing-function",
        comment: "// Krivka rýchlosti prechodu",
        vars: ["ease", "linear", "ease-in", "ease-out", "ease-in-out", "cubic-bezier(0.4, 0, 0.2, 1)", "steps(5)"],
        category: "css",
        tags: "prechod rýchlosť krivka"
    },
    {
        command: "transition-delay",
        comment: "// Oneskorenie pred spustením prechodu",
        vars: ["0s", "0.5s", "200ms"],
        category: "css",
        tags: "prechod oneskorenie"
    },
    {
        command: "@keyframes",
        comment: "// Definícia animačných kľúčových snímok",
        vars: ["from { } to { }", "0% { } 50% { } 100% { }"],
        category: "css",
        tags: "animácia kľúčové snímky"
    },
    {
        command: "animation",
        comment: "// Skratka pre všetky animation vlastnosti",
        vars: ["fadeIn 1s ease forwards", "spin 2s linear infinite"],
        category: "css",
        tags: "animácia skratka"
    },
    {
        command: "animation-name",
        comment: "// Názov @keyframes animácie",
        vars: ["fadeIn", "slideUp", "bounce"],
        category: "css",
        tags: "animácia názov"
    },
    {
        command: "animation-duration",
        comment: "// Trvanie jedného cyklu animácie",
        vars: ["1s", "500ms", "2s"],
        category: "css",
        tags: "animácia trvanie"
    },
    {
        command: "animation-timing-function",
        comment: "// Krivka rýchlosti animácie",
        vars: ["ease", "linear", "ease-in-out", "cubic-bezier(0.4, 0, 0.2, 1)", "steps(8)"],
        category: "css",
        tags: "animácia rýchlosť krivka"
    },
    {
        command: "animation-delay",
        comment: "// Oneskorenie pred štartom animácie",
        vars: ["0s", "0.5s", "-1s"],
        category: "css",
        tags: "animácia oneskorenie"
    },
    {
        command: "animation-iteration-count",
        comment: "// Počet opakovaní animácie",
        vars: ["1", "3", "infinite"],
        category: "css",
        tags: "animácia opakovanie"
    },
    {
        command: "animation-direction",
        comment: "// Smer priebehu animácie",
        vars: ["normal", "reverse", "alternate", "alternate-reverse"],
        category: "css",
        tags: "animácia smer"
    },
    {
        command: "animation-fill-mode",
        comment: "// Štýl elementu pred/po animácii",
        vars: ["none", "forwards", "backwards", "both"],
        category: "css",
        tags: "animácia stav"
    },
    {
        command: "animation-play-state",
        comment: "// Spustenie alebo pozastavenie animácie",
        vars: ["running", "paused"],
        category: "css",
        tags: "animácia stav"
    },

    // =============================================
    // --- SEKCIA: PREMENNÉ A FUNKCIE ---
    // =============================================
    {
        command: "",
        comment: "CSS premenné a funkcie",
        vars: [],
        icon: "fa-solid fa-code",
        color: "#00b894",
        category: "css",
        tags: "premenné funkcie custom properties"
    },
    {
        command: "--nazov-premennej",
        comment: "// Definícia CSS vlastnej premennej (Custom Property)",
        vars: ["--primary-color: #3498db", "--spacing: 1rem", "--font-size: 16px"],
        category: "css",
        tags: "premenná custom property"
    },
    {
        command: "var(--nazov)",
        comment: "// Použitie CSS premennej",
        vars: ["color: var(--primary-color)", "var(--spacing, 1rem)"],
        category: "css",
        tags: "premenná použitie"
    },
    {
        command: "calc(výraz)",
        comment: "// Výpočet hodnoty z rôznych jednotiek",
        vars: ["calc(100% - 20px)", "calc(1rem + 2vw)", "calc(50% - 100px / 2)"],
        category: "css",
        tags: "funkcia výpočet"
    },
    {
        command: "clamp(min, ideál, max)",
        comment: "// Hodnota ohraničená minimom a maximom (responzívna typografia)",
        vars: ["clamp(1rem, 2.5vw, 2rem)", "clamp(300px, 50%, 900px)"],
        category: "css",
        tags: "funkcia rozsah responzívny"
    },
    {
        command: "min(a, b)",
        comment: "// Vráti menšiu z dvoch hodnôt",
        vars: ["min(50%, 300px)", "min(100vw, 1200px)"],
        category: "css",
        tags: "funkcia minimum"
    },
    {
        command: "max(a, b)",
        comment: "// Vráti väčšiu z dvoch hodnôt",
        vars: ["max(50%, 300px)", "max(10vw, 100px)"],
        category: "css",
        tags: "funkcia maximum"
    },
    {
        command: "rgb() / rgba()",
        comment: "// Farba v RGB formáte (red, green, blue, [alpha])",
        vars: ["rgb(255, 0, 0)", "rgba(0, 0, 0, 0.5)"],
        category: "css",
        tags: "funkcia farba rgb"
    },
    {
        command: "hsl() / hsla()",
        comment: "// Farba v HSL formáte (hue, saturation, lightness, [alpha])",
        vars: ["hsl(220, 90%, 56%)", "hsla(0, 100%, 50%, 0.5)"],
        category: "css",
        tags: "funkcia farba hsl"
    },
    {
        command: "oklch()",
        comment: "// Moderný farebný priestor (lightness, chroma, hue) – širší gamut",
        vars: ["oklch(0.7 0.15 230)", "oklch(0.5 0.2 30 / 50%)"],
        category: "css",
        tags: "funkcia farba moderná"
    },
    {
        command: "linear-gradient()",
        comment: "// Lineárny farebný prechod",
        vars: ["linear-gradient(to right, #f00, #00f)", "linear-gradient(135deg, red 0%, blue 100%)"],
        category: "css",
        tags: "funkcia gradient"
    },
    {
        command: "radial-gradient()",
        comment: "// Radiálny farebný prechod (kruh alebo elipsa)",
        vars: ["radial-gradient(circle, red, blue)", "radial-gradient(ellipse at top, #fff, #000)"],
        category: "css",
        tags: "funkcia gradient"
    },
    {
        command: "conic-gradient()",
        comment: "// Kónický farebný prechod (pie chart efekt)",
        vars: ["conic-gradient(red 0deg, blue 180deg)", "conic-gradient(from 90deg, red, yellow, green)"],
        category: "css",
        tags: "funkcia gradient"
    },
    {
        command: "url()",
        comment: "// Odkaz na externý zdroj (obrázok, font...)",
        vars: ["url('obr.jpg')", "url('font.woff2')"],
        category: "css",
        tags: "funkcia odkaz zdroj"
    },
    {
        command: "counter()",
        comment: "// Hodnota CSS počítadla (pre automatické číslovanie)",
        vars: ["counter(sekcia)", "counter(sekcia, upper-roman)"],
        category: "css",
        tags: "funkcia počítadlo číslovanie"
    },
    {
        command: "attr()",
        comment: "// Hodnota HTML atribútu použitá v CSS (len v content)",
        vars: ["content: attr(data-tooltip)", "content: attr(href)"],
        category: "css",
        tags: "funkcia atribút"
    },
    {
        command: "env()",
        comment: "// Premenná prostredia (napr. safe area pre iPhone notch)",
        vars: ["env(safe-area-inset-top)", "env(safe-area-inset-bottom)"],
        category: "css",
        tags: "funkcia prostredie mobil"
    },

    // =============================================
    // --- SEKCIA: MEDIA QUERIES ---
    // =============================================
    {
        command: "",
        comment: "Media Queries a responzívny dizajn",
        vars: [],
        icon: "fa-solid fa-mobile-screen",
        color: "#ff7675",
        category: "css",
        tags: "media query responzívny breakpoint"
    },
    {
        command: "@media screen",
        comment: "// Pravidlá platia len pre obrazovky",
        vars: ["screen", "print", "all"],
        category: "css",
        tags: "media typ"
    },
    {
        command: "@media (min-width: X)",
        comment: "// Mobile-first breakpoint – platí od šírky X nahor",
        vars: ["(min-width: 576px)", "(min-width: 768px)", "(min-width: 1024px)", "(min-width: 1280px)"],
        category: "css",
        tags: "media breakpoint šírka"
    },
    {
        command: "@media (max-width: X)",
        comment: "// Desktop-first breakpoint – platí do šírky X",
        vars: ["(max-width: 575px)", "(max-width: 767px)", "(max-width: 1023px)"],
        category: "css",
        tags: "media breakpoint šírka"
    },
    {
        command: "@media (min-height: X)",
        comment: "// Breakpoint podľa výšky viewportu",
        vars: ["(min-height: 600px)"],
        category: "css",
        tags: "media výška"
    },
    {
        command: "@media (orientation: X)",
        comment: "// Orientácia zariadenia (na šírku alebo na výšku)",
        vars: ["(orientation: landscape)", "(orientation: portrait)"],
        category: "css",
        tags: "media orientácia"
    },
    {
        command: "@media (prefers-color-scheme: X)",
        comment: "// Detekcia svetlého alebo tmavého režimu systému",
        vars: ["(prefers-color-scheme: dark)", "(prefers-color-scheme: light)"],
        category: "css",
        tags: "media tmavý svetlý režim"
    },
    {
        command: "@media (prefers-reduced-motion: reduce)",
        comment: "// Redukcia animácií pre citlivých používateľov",
        vars: ["(prefers-reduced-motion: reduce)", "(prefers-reduced-motion: no-preference)"],
        category: "css",
        tags: "media animácia prístupnosť"
    },
    {
        command: "@media (hover: hover)",
        comment: "// Detekcia hover schopnosti zariadenia (myš vs dotyk)",
        vars: ["(hover: hover)", "(hover: none)", "(pointer: fine)", "(pointer: coarse)"],
        category: "css",
        tags: "media hover dotyk myš"
    },
    {
        command: "@media (display-mode: X)",
        comment: "// Detekcia spôsobu zobrazenia (PWA, fullscreen)",
        vars: ["(display-mode: standalone)", "(display-mode: fullscreen)"],
        category: "css",
        tags: "media PWA zobrazenie"
    },
    {
        command: "@media (min-resolution: X)",
        comment: "// Detekcia rozlíšenia displeja (pre Retina/HiDPI)",
        vars: ["(min-resolution: 2dppx)", "(min-resolution: 192dpi)"],
        category: "css",
        tags: "media rozlíšenie retina"
    },
    {
        command: "@container (min-width: X)",
        comment: "// Container Query – breakpoint podľa rodičovského kontajnera",
        vars: ["(min-width: 400px)", "(max-width: 600px)"],
        category: "css",
        tags: "media container query"
    },

    // =============================================
    // --- SEKCIA: AT-RULES ---
    // =============================================
    {
        command: "",
        comment: "CSS At-Rules (direktívy)",
        vars: [],
        icon: "fa-solid fa-at",
        color: "#74b9ff",
        category: "css",
        tags: "at-rules direktívy import"
    },
    {
        command: "@import",
        comment: "// Importuje externý CSS súbor (umiestniť na začiatok)",
        vars: ["url('style.css')", "'reset.css'", "url('fonts.css') screen"],
        category: "css",
        tags: "import súbor"
    },
    {
        command: "@charset",
        comment: "// Kódovanie CSS súboru (musí byť úplne prvé)",
        vars: ["'UTF-8'"],
        category: "css",
        tags: "kódovanie"
    },
    {
        command: "@font-face",
        comment: "// Vlastný font – definícia názvu a zdroja súboru",
        vars: ["font-family: 'MojFont'", "src: url('font.woff2') format('woff2')", "font-display: swap"],
        category: "css",
        tags: "font vlastný"
    },
    {
        command: "@keyframes",
        comment: "// Definícia animačných snímok (kľúčové body animácie)",
        vars: ["from { opacity: 0 } to { opacity: 1 }", "0% { } 100% { }"],
        category: "css",
        tags: "animácia keyframes"
    },
    {
        command: "@media",
        comment: "// Podmienkové pravidlá podľa vlastností zariadenia",
        vars: ["screen and (min-width: 768px)", "(prefers-color-scheme: dark)"],
        category: "css",
        tags: "media query"
    },
    {
        command: "@supports",
        comment: "// Podmienečné pravidlá podľa podpory CSS vlastností",
        vars: ["(display: grid)", "(not (display: grid))", "(gap: 1rem) and (display: flex)"],
        category: "css",
        tags: "supports podmienka detekcia"
    },
    {
        command: "@layer",
        comment: "// Definícia kaskádovej vrstvy (CSS Cascade Layers)",
        vars: ["base", "components", "utilities"],
        category: "css",
        tags: "layer vrstva kaskáda"
    },
    {
        command: "@container",
        comment: "// Container Query pravidlá podľa rozmeru rodiča",
        vars: ["(min-width: 400px)", "sidebar (max-width: 300px)"],
        category: "css",
        tags: "container query"
    },
    {
        command: "@property",
        comment: "// Registrácia vlastnej CSS premennej s typom a animovateľnosťou",
        vars: ["syntax: '<color>'", "inherits: false", "initial-value: #000"],
        category: "css",
        tags: "property premenná typ animácia"
    },
    {
        command: "@page",
        comment: "// Štýly pre tlač (veľkosť strany, okraje)",
        vars: ["size: A4 landscape", "margin: 2cm"],
        category: "css",
        tags: "tlač strana"
    },
    {
        command: "@scroll-timeline",
        comment: "// Animácia naviazaná na scrollovanie (experimentálne)",
        vars: [],
        category: "css",
        tags: "scroll animácia experimentálne"
    },

    // =============================================
    // --- SEKCIA: CURSOR A INTERAKCIA ---
    // =============================================
    {
        command: "",
        comment: "Kurzor, výber a interakcia",
        vars: [],
        icon: "fa-solid fa-arrow-pointer",
        color: "#fdcb6e",
        category: "css",
        tags: "kurzor interakcia pointer"
    },
    {
        command: "cursor",
        comment: "// Tvar kurzora myši nad elementom",
        vars: ["pointer", "default", "none", "text", "move", "grab", "grabbing", "not-allowed", "crosshair", "zoom-in", "url('cursor.png'), auto"],
        category: "css",
        tags: "kurzor myš"
    },
    {
        command: "pointer-events",
        comment: "// Ovládanie reakcie na udalosti myši/dotyku",
        vars: ["none", "auto", "all"],
        category: "css",
        tags: "pointer interakcia udalosti"
    },
    {
        command: "user-select",
        comment: "// Možnosť označovania textu používateľom",
        vars: ["none", "auto", "text", "all"],
        category: "css",
        tags: "výber text"
    },
    {
        command: "touch-action",
        comment: "// Ovládanie dotykových gest na elemente",
        vars: ["auto", "none", "pan-x", "pan-y", "pinch-zoom", "manipulation"],
        category: "css",
        tags: "dotyk gesto mobil"
    },
    {
        command: "resize",
        comment: "// Umožní používateľovi zmeniť veľkosť elementu",
        vars: ["none", "both", "horizontal", "vertical"],
        category: "css",
        tags: "veľkosť manuálne"
    },
    {
        command: "scroll-behavior",
        comment: "// Plynulé scrollovanie na stránke",
        vars: ["smooth", "auto"],
        category: "css",
        tags: "scroll plynulý"
    },
    {
        command: "scroll-snap-type",
        comment: "// Ukotvenie scrollovania na konkrétne pozície",
        vars: ["x mandatory", "y proximity", "both mandatory"],
        category: "css",
        tags: "scroll snap ukotvenie"
    },
    {
        command: "scroll-snap-align",
        comment: "// Zarovnanie itemu pri scroll snap",
        vars: ["start", "center", "end", "none"],
        category: "css",
        tags: "scroll snap zarovnanie"
    },
    {
        command: "overscroll-behavior",
        comment: "// Správanie pri scrollovaní cez okraj elementu",
        vars: ["auto", "contain", "none"],
        category: "css",
        tags: "scroll okraj správanie"
    },
    {
        command: "will-change",
        comment: "// Napovie prehliadaču čo sa bude meniť (optimalizácia animácií)",
        vars: ["transform", "opacity", "scroll-position", "auto"],
        category: "css",
        tags: "optimalizácia výkon animácia"
    },

    // =============================================
    // --- SEKCIA: STĹPCOVÉ ROZLOŽENIE ---
    // =============================================
    {
        command: "",
        comment: "Stĺpcové rozloženie (Multi-column)",
        vars: [],
        icon: "fa-solid fa-newspaper",
        color: "#a29bfe",
        category: "css",
        tags: "stĺpce column rozloženie text"
    },
    {
        command: "column-count",
        comment: "// Počet textových stĺpcov",
        vars: ["2", "3", "auto"],
        category: "css",
        tags: "stĺpce počet"
    },
    {
        command: "column-width",
        comment: "// Ideálna šírka každého stĺpca",
        vars: ["200px", "auto"],
        category: "css",
        tags: "stĺpce šírka"
    },
    {
        command: "columns",
        comment: "// Skratka pre column-count a column-width",
        vars: ["3 200px", "auto auto"],
        category: "css",
        tags: "stĺpce skratka"
    },
    {
        command: "column-gap",
        comment: "// Medzera medzi stĺpcami",
        vars: ["20px", "2em"],
        category: "css",
        tags: "stĺpce medzera"
    },
    {
        command: "column-rule",
        comment: "// Čiara medzi stĺpcami (hrúbka štýl farba)",
        vars: ["1px solid #ccc", "2px dashed #000"],
        category: "css",
        tags: "stĺpce čiara"
    },
    {
        command: "column-span",
        comment: "// Roztiahnutie elementu cez všetky stĺpce",
        vars: ["none", "all"],
        category: "css",
        tags: "stĺpce roztiahnuť"
    },
    {
        command: "break-inside",
        comment: "// Zakazuje zalamovanie elementu medzi stĺpce alebo strany",
        vars: ["avoid", "auto", "avoid-page"],
        category: "css",
        tags: "stĺpce zalamovanie"
    },

    // =============================================
    // --- SEKCIA: OSTATNÉ VLASTNOSTI ---
    // =============================================
    {
        command: "",
        comment: "Ostatné dôležité vlastnosti",
        vars: [],
        icon: "fa-solid fa-gear",
        color: "#636e72",
        category: "css",
        tags: "ostatné rôzne"
    },
    {
        command: "content",
        comment: "// Generovaný obsah pre ::before a ::after",
        vars: ["''", "'text'", "url('icon.svg')", "none", "open-quote", "counter(polozka)"],
        category: "css",
        tags: "obsah generovaný pseudoelement"
    },
    {
        command: "list-style",
        comment: "// Skratka pre štýl zoznamu",
        vars: ["none", "disc", "decimal inside", "url('bullet.svg')"],
        category: "css",
        tags: "zoznam štýl"
    },
    {
        command: "list-style-type",
        comment: "// Typ odrážky alebo číslovania",
        vars: ["disc", "circle", "square", "decimal", "lower-alpha", "upper-roman", "none"],
        category: "css",
        tags: "zoznam odrážka číslovanie"
    },
    {
        command: "list-style-position",
        comment: "// Umiestnenie odrážky (mimo alebo vnútri textu)",
        vars: ["outside", "inside"],
        category: "css",
        tags: "zoznam pozícia"
    },
    {
        command: "appearance",
        comment: "// Odstránenie natívneho štýlu prehliadača z formulárových prvkov",
        vars: ["none", "auto"],
        category: "css",
        tags: "formulár natívny štýl"
    },
    {
        command: "object-fit",
        comment: "// Prispôsobenie obsahu (obrázok, video) v kontajneri",
        vars: ["cover", "contain", "fill", "none", "scale-down"],
        category: "css",
        tags: "obrázok video prispôsobenie"
    },
    {
        command: "object-position",
        comment: "// Pozícia obsahu pri object-fit",
        vars: ["center", "top left", "50% 30%"],
        category: "css",
        tags: "obrázok video pozícia"
    },
    {
        command: "aspect-ratio",
        comment: "// Pomer strán elementu",
        vars: ["16 / 9", "1 / 1", "4 / 3", "auto"],
        category: "css",
        tags: "pomer strán rozmer"
    },
    {
        command: "clip-path",
        comment: "// Orezanie elementu do tvaru",
        vars: ["circle(50%)", "ellipse(50% 40% at 50% 50%)", "polygon(0 0, 100% 0, 100% 80%, 0 100%)", "inset(10px round 5px)"],
        category: "css",
        tags: "tvar orezanie efekt"
    },
    {
        command: "shape-outside",
        comment: "// Tvar okolo ktorého obtéka text (pre float elementy)",
        vars: ["circle(50%)", "polygon()", "ellipse()"],
        category: "css",
        tags: "tvar obtékanie float"
    },
    {
        command: "isolation",
        comment: "// Izoluje blend-mode efekt od zvyšku stránky",
        vars: ["isolate", "auto"],
        category: "css",
        tags: "blend izolácia efekt"
    },
    {
        command: "counter-reset",
        comment: "// Inicializuje alebo resetuje CSS počítadlo",
        vars: ["sekcia", "polozka 0"],
        category: "css",
        tags: "počítadlo reset číslovanie"
    },
    {
        command: "counter-increment",
        comment: "// Zvýši hodnotu CSS počítadla",
        vars: ["sekcia", "polozka 2"],
        category: "css",
        tags: "počítadlo zvýšenie číslovanie"
    },
    {
        command: "quotes",
        comment: "// Definícia úvodzoviek pre &lt;q&gt; element",
        vars: ["'„' '\"'", "'«' '»'"],
        category: "css",
        tags: "úvodzovky citácia"
    },
    {
        command: "caret-color",
        comment: "// Farba textového kurzora (blikajúca čiarka) vo vstupe",
        vars: ["red", "#3498db", "auto", "transparent"],
        category: "css",
        tags: "formulár kurzor farba"
    },
    {
        command: "accent-color",
        comment: "// Farba natívnych formulárových prvkov (checkbox, radio, range...)",
        vars: ["#3498db", "auto"],
        category: "css",
        tags: "formulár farba natívna"
    },
    {
        command: "color-scheme",
        comment: "// Preferovaná farebná schéma elementu/stránky",
        vars: ["light", "dark", "light dark", "normal"],
        category: "css",
        tags: "farba schéma tmavý svetlý"
    },
    {
        command: "forced-colors",
        comment: "// Prispôsobenie pre Windows vysoký kontrast (Forced Colors Mode)",
        vars: [],
        category: "css",
        tags: "prístupnosť kontrast"
    },
    {
        command: "print-color-adjust",
        comment: "// Zachovanie farieb a pozadia pri tlači",
        vars: ["exact", "economy"],
        category: "css",
        tags: "tlač farby"
    },
    {
        command: "contain",
        comment: "// Izolácia renderovania elementu (optimalizácia výkonu)",
        vars: ["none", "strict", "content", "size layout paint"],
        category: "css",
        tags: "výkon optimalizácia izolácia"
    },
];