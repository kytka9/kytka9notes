const htmlData = [

    // =============================================
    // --- SEKCIA: HTML ENTITY ---
    // =============================================
    {
        command: "",
        comment: "HTML entity (špeciálne znaky)",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "entity špeciálne znaky symboly"
    },
    {
        command: "&amp;nbsp;",
        comment: "// Nezlomiteľná medzera (Non-Breaking Space)",
        vars: [],
        category: "html",
        tags: "entity medzera"
    },
    {
        command: "&amp;lt;",
        comment: "// Znak menší ako ( < )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },
    {
        command: "&amp;gt;",
        comment: "// Znak väčší ako ( > )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },
    {
        command: "&amp;lcub;",
        comment: "// Zložená zátvorka zľava ( { )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },
    {
        command: "&amp;rcub;",
        comment: "// Zložená zátvorka zprava ( } )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },


    {
        command: "&amp;amp;",
        comment: "// Znak ampersand ( & )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },
    {
        command: "&amp;quot;",
        comment: "// Úvodzovka ( \" )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },
    {
        command: "&amp;apos;",
        comment: "// Apostrof ( ' )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },
    {
        command: "&amp;copy;",
        comment: "// Symbol autorských práv ( © )",
        vars: [],
        category: "html",
        tags: "entity symbol copyright"
    },
    {
        command: "&amp;reg;",
        comment: "// Symbol registrovanej ochrannej známky ( ® )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },
    {
        command: "&amp;trade;",
        comment: "// Symbol ochrannej známky ( ™ )",
        vars: [],
        category: "html",
        tags: "entity symbol"
    },
    {
        command: "&amp;euro;",
        comment: "// Symbol eura ( € )",
        vars: [],
        category: "html",
        tags: "entity mena"
    },
    {
        command: "&amp;mdash;",
        comment: "// Dlhá pomlčka ( — )",
        vars: [],
        category: "html",
        tags: "entity pomlčka"
    },
    {
        command: "&amp;ndash;",
        comment: "// Krátka pomlčka ( – )",
        vars: [],
        category: "html",
        tags: "entity pomlčka"
    },
    {
        command: "&amp;#10;",
        comment: "// Nový riadok (novinka) v číselnej entite",
        vars: [],
        category: "html",
        tags: "entity číslo"
    },

    // =============================================
    // --- SEKCIA: ZÁKLADNÁ ŠTRUKTÚRA ---
    // =============================================
    {
        command: "",
        comment: "Základná štruktúra dokumentu",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "html štruktúra základy"
    },
    {
        command: "&lt;!DOCTYPE html&gt;",
        comment: "// Deklarácia typu dokumentu (HTML5)",
        vars: [],
        category: "html",
        tags: "štruktúra"
    },
    {
        command: "&lt;html&gt;",
        comment: "// Koreňový element celej stránky",
        vars: ["lang='sk'"],
        category: "html",
        tags: "štruktúra"
    },
    {
        command: "&lt;head&gt;",
        comment: "// Obsahuje metadáta, title a linky na CSS",
        vars: [],
        category: "html",
        tags: "štruktúra"
    },
    {
        command: "&lt;body&gt;",
        comment: "// Viditeľný obsah webovej stránky",
        vars: [],
        category: "html",
        tags: "štruktúra"
    },

    // =============================================
    // --- SEKCIA: HEAD A METADÁTA ---
    // =============================================
    {
        command: "",
        comment: "Head a metadáta",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "meta head metadáta"
    },
    {
        command: "&lt;title&gt;",
        comment: "// Názov záložky prehliadača a SEO titulok",
        vars: [],
        category: "html",
        tags: "meta head"
    },
    {
        command: "&lt;meta /&gt;",
        comment: "// Metadáta stránky (charset, viewport, description...)",
        vars: ["charset='UTF-8'"],
        category: "html",
        tags: "meta"
    },
    {
        command: "&lt;meta /&gt;",
        comment: "// Nastavenie viewportu pre responzívny dizajn",
        vars: ["name='viewport'", "content='width=device-width, initial-scale=1.0'"],
        category: "html",
        tags: "meta responzívny"
    },
    {
        command: "&lt;meta /&gt;",
        comment: "// Popis stránky pre vyhľadávače (SEO)",
        vars: ["name='description'", "content='Popis stránky'"],
        category: "html",
        tags: "meta SEO"
    },
    {
        command: "&lt;meta /&gt;",
        comment: "// Kľúčové slová pre vyhľadávače (SEO)",
        vars: ["name='keywords'", "content='html, web, kľúčové slová'"],
        category: "html",
        tags: "meta SEO"
    },
    {
        command: "&lt;meta /&gt;",
        comment: "// Autor stránky",
        vars: ["name='author'", "content='Meno Autora'"],
        category: "html",
        tags: "meta"
    },
    {
        command: "&lt;meta /&gt;",
        comment: "// Open Graph – náhľad pri zdieľaní na sociálnych sieťach",
        vars: ["property='og:title'", "content='Názov'"],
        category: "html",
        tags: "meta og sociálne siete"
    },
    {
        command: "&lt;link /&gt;",
        comment: "// Pripojenie externého CSS súboru",
        vars: ["rel='stylesheet'", "href='style.css'"],
        category: "html",
        tags: "meta css link"
    },
    {
        command: "&lt;link /&gt;",
        comment: "// Favicon – ikona v záložke prehliadača",
        vars: ["rel='icon'", "href='favicon.ico'", "type='image/x-icon'"],
        category: "html",
        tags: "meta favicon"
    },
    {
        command: "&lt;link /&gt;",
        comment: "// Prepojenie na kanonickú URL (SEO)",
        vars: ["rel='canonical'", "href='https://example.com'"],
        category: "html",
        tags: "meta SEO"
    },
    {
        command: "&lt;base /&gt;",
        comment: "// Základná URL pre všetky relatívne odkazy na stránke",
        vars: ["href='https://example.com/'", "target='_blank'"],
        category: "html",
        tags: "meta odkaz"
    },
    {
        command: "&lt;style&gt;",
        comment: "// Interné CSS štýly priamo v HTML dokumente",
        vars: [],
        category: "html",
        tags: "meta css"
    },

    // =============================================
    // --- SEKCIA: SÉMANTICKÉ ELEMENTY ---
    // =============================================
    {
        command: "",
        comment: "Sémantické elementy (HTML5)",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "sémantika layout sekcia HTML5"
    },
    {
        command: "&lt;header&gt;",
        comment: "// Hlavička stránky alebo sekcie",
        vars: [],
        category: "html",
        tags: "sémantika layout"
    },
    {
        command: "&lt;nav&gt;",
        comment: "// Navigačné menu (Navigation)",
        vars: [],
        category: "html",
        tags: "sémantika navigácia"
    },
    {
        command: "&lt;main&gt;",
        comment: "// Hlavný obsah stránky (len raz na stránke)",
        vars: [],
        category: "html",
        tags: "sémantika layout"
    },
    {
        command: "&lt;section&gt;",
        comment: "// Tematická sekcia obsahu",
        vars: [],
        category: "html",
        tags: "sémantika sekcia"
    },
    {
        command: "&lt;article&gt;",
        comment: "// Samostatný článok alebo obsah (blogpost, novinka)",
        vars: [],
        category: "html",
        tags: "sémantika článok"
    },
    {
        command: "&lt;aside&gt;",
        comment: "// Bočný panel, doplnkový obsah (sidebar)",
        vars: [],
        category: "html",
        tags: "sémantika sidebar"
    },
    {
        command: "&lt;footer&gt;",
        comment: "// Päta stránky alebo sekcie",
        vars: [],
        category: "html",
        tags: "sémantika layout"
    },
    {
        command: "&lt;figure&gt;",
        comment: "// Obrázok/médiá s voliteľným popisom",
        vars: [],
        category: "html",
        tags: "sémantika obrázok médiá"
    },
    {
        command: "&lt;figcaption&gt;",
        comment: "// Popis k elementu &lt;figure&gt;",
        vars: [],
        category: "html",
        tags: "sémantika popis"
    },
    {
        command: "&lt;address&gt;",
        comment: "// Kontaktné informácie autora alebo organizácie",
        vars: [],
        category: "html",
        tags: "sémantika kontakt"
    },
    {
        command: "&lt;time&gt;",
        comment: "// Dátum alebo čas (strojovo čitateľný)",
        vars: ["datetime='2024-01-01'"],
        category: "html",
        tags: "sémantika čas dátum"
    },
    {
        command: "&lt;mark&gt;",
        comment: "// Zvýraznený text (ako fixka/highlighter)",
        vars: [],
        category: "html",
        tags: "sémantika text"
    },
    {
        command: "&lt;summary&gt;",
        comment: "// Viditeľný nadpis pre element &lt;details&gt;",
        vars: [],
        category: "html",
        tags: "sémantika interakcia"
    },
    {
        command: "&lt;details&gt;",
        comment: "// Rozbaľovací/skladateľný blok obsahu",
        vars: ["open"],
        category: "html",
        tags: "sémantika interakcia accordion"
    },

    // =============================================
    // --- SEKCIA: KONTAJNERY A ROZLOŽENIE ---
    // =============================================
    {
        command: "",
        comment: "Kontajnery a rozloženie",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "div span kontajner layout"
    },
    {
        command: "&lt;div&gt;",
        comment: "// Blokový kontajner bez sémantického významu",
        vars: ["class='container'", "id='wrapper'"],
        category: "html",
        tags: "kontajner blok"
    },
    {
        command: "&lt;span&gt;",
        comment: "// Inline kontajner bez sémantického významu",
        vars: ["class='highlight'"],
        category: "html",
        tags: "kontajner inline"
    },

    // =============================================
    // --- SEKCIA: TEXTOVÉ ELEMENTY ---
    // =============================================
    {
        command: "",
        comment: "Text a formátovanie",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "text nadpisy formátovanie"
    },
    {
        command: "&lt;h1&gt; až &lt;h6&gt;",
        comment: "// Nadpisy (H1 je najdôležitejší, H6 najmenší)",
        vars: ["text"],
        category: "html",
        tags: "text nadpisy"
    },
    {
        command: "&lt;p&gt;",
        comment: "// Odsek textu (Paragraph)",
        vars: [],
        category: "html",
        tags: "text odsek"
    },
    {
        command: "&lt;br /&gt;",
        comment: "// Zalomí riadok (Single line break)",
        vars: [],
        category: "html",
        tags: "text úprava"
    },
    {
        command: "&lt;hr /&gt;",
        comment: "// Horizontálna oddeľovacia čiara",
        vars: [],
        category: "html",
        tags: "text oddeľovač"
    },
    {
        command: "&lt;strong&gt;",
        comment: "// Tučné písmo (so sémantickým dôrazom)",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;em&gt;",
        comment: "// Kurzíva (emphasis – zdôraznenie)",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;b&gt;",
        comment: "// Tučné písmo (len vizuálne, bez sémantiky)",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;i&gt;",
        comment: "// Kurzíva (len vizuálne, bez sémantiky)",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;u&gt;",
        comment: "// Podčiarknutý text",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;s&gt;",
        comment: "// Prečiarknutý text (neaktuálny obsah)",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;del&gt;",
        comment: "// Vymazaný text (so sémantickým významom zmeny)",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;ins&gt;",
        comment: "// Vložený/pridaný text (zvyčajne podčiarknutý)",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;small&gt;",
        comment: "// Menší text (poznámky, autorské práva)",
        vars: [],
        category: "html",
        tags: "text formát"
    },
    {
        command: "&lt;sup&gt;",
        comment: "// Horný index (napr. x²)",
        vars: [],
        category: "html",
        tags: "text matematika"
    },
    {
        command: "&lt;sub&gt;",
        comment: "// Dolný index (napr. H₂O)",
        vars: [],
        category: "html",
        tags: "text matematika"
    },
    {
        command: "&lt;abbr&gt;",
        comment: "// Skratka s plným opisom pri hover",
        vars: ["title='HyperText Markup Language'"],
        category: "html",
        tags: "text skratka"
    },
    {
        command: "&lt;cite&gt;",
        comment: "// Citácia názvu diela (kniha, film, článok)",
        vars: [],
        category: "html",
        tags: "text citácia"
    },
    {
        command: "&lt;q&gt;",
        comment: "// Krátky inline citát (automaticky pridáva úvodzovky)",
        vars: ["cite='https://zdroj.sk'"],
        category: "html",
        tags: "text citácia"
    },
    {
        command: "&lt;blockquote&gt;",
        comment: "// Dlhší blokový citát",
        vars: ["cite='https://zdroj.sk'"],
        category: "html",
        tags: "text citácia"
    },
    {
        command: "&lt;pre&gt;",
        comment: "// Predformátovaný text (zachováva medzery a riadky)",
        vars: [],
        category: "html",
        tags: "text kód"
    },
    {
        command: "&lt;code&gt;",
        comment: "// Inline kód (monospace písmo)",
        vars: [],
        category: "html",
        tags: "text kód programovanie"
    },
    {
        command: "&lt;kbd&gt;",
        comment: "// Klávesová skratka alebo vstup z klávesnice",
        vars: [],
        category: "html",
        tags: "text klávesnica"
    },
    {
        command: "&lt;samp&gt;",
        comment: "// Výstup programu alebo počítača",
        vars: [],
        category: "html",
        tags: "text kód"
    },
    {
        command: "&lt;var&gt;",
        comment: "// Premenná v matematickom alebo programovacom výraze",
        vars: [],
        category: "html",
        tags: "text matematika kód"
    },
    {
        command: "&lt;wbr /&gt;",
        comment: "// Odporúčané miesto na zalomenie dlhého slova",
        vars: [],
        category: "html",
        tags: "text úprava"
    },
    {
        command: "&lt;bdi&gt;",
        comment: "// Izoluje smer textu (pre RTL jazyky ako arabčina)",
        vars: [],
        category: "html",
        tags: "text smer RTL"
    },
    {
        command: "&lt;bdo&gt;",
        comment: "// Presné nastavenie smeru textu",
        vars: ["dir='rtl'"],
        category: "html",
        tags: "text smer RTL"
    },
    {
        command: "&lt;ruby&gt;",
        comment: "// Anotácia textu (japonské furigana a pod.)",
        vars: [],
        category: "html",
        tags: "text anotácia"
    },

    // =============================================
    // --- SEKCIA: ODKAZY A MÉDIÁ ---
    // =============================================
    {
        command: "",
        comment: "Odkazy a médiá",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "odkazy obrázky média"
    },
    {
        command: "&lt;a&gt;",
        comment: "// Hyperlink – odkaz na inú stránku alebo sekciu",
        vars: ["href='url'", "target='_blank'", "rel='noopener'"],
        category: "html",
        tags: "odkaz link"
    },
    {
        command: "&lt;img /&gt;",
        comment: "// Vloží obrázok (samozatvárací tag)",
        vars: ["src='cesta'", "alt='popis'", "width='300'", "height='200'"],
        category: "html",
        tags: "obrázok médiá"
    },
    {
        command: "&lt;picture&gt;",
        comment: "// Responzívny obrázok s viacerými zdrojmi",
        vars: [],
        category: "html",
        tags: "obrázok médiá responzívny"
    },
    {
        command: "&lt;source /&gt;",
        comment: "// Alternatívny zdroj pre &lt;picture&gt;, &lt;video&gt; alebo &lt;audio&gt;",
        vars: ["srcset='obr.webp'", "media='(min-width: 600px)'"],
        category: "html",
        tags: "médiá zdroj"
    },
    {
        command: "&lt;video&gt;",
        comment: "// Vloží prehrávač videa",
        vars: ["src='video.mp4'", "controls", "autoplay", "muted", "loop", "poster='nahlad.jpg'"],
        category: "html",
        tags: "video médiá"
    },
    {
        command: "&lt;audio&gt;",
        comment: "// Vloží prehrávač audia",
        vars: ["src='hudba.mp3'", "controls", "autoplay", "loop"],
        category: "html",
        tags: "audio médiá"
    },
    {
        command: "&lt;track /&gt;",
        comment: "// Titulky alebo kapitoly pre video/audio",
        vars: ["kind='subtitles'", "src='titulky.vtt'", "srclang='sk'", "label='Slovenčina'"],
        category: "html",
        tags: "video titulky médiá"
    },
    {
        command: "&lt;iframe&gt;",
        comment: "// Vloží externú stránku alebo embed (YouTube, mapa...)",
        vars: ["src='https://...'", "width='600'", "height='400'", "allowfullscreen"],
        category: "html",
        tags: "embed iframe médiá"
    },
    {
        command: "&lt;embed /&gt;",
        comment: "// Vloží externý obsah (PDF, plugin)",
        vars: ["src='subor.pdf'", "type='application/pdf'"],
        category: "html",
        tags: "embed médiá"
    },
    {
        command: "&lt;object&gt;",
        comment: "// Vloží externý zdroj (PDF, SVG, Flash)",
        vars: ["data='subor.pdf'", "type='application/pdf'"],
        category: "html",
        tags: "embed médiá"
    },
    {
        command: "&lt;svg&gt;",
        comment: "// Vektorová grafika priamo v HTML (Scalable Vector Graphics)",
        vars: ["width='100'", "height='100'", "viewBox='0 0 100 100'"],
        category: "html",
        tags: "grafika SVG vektorová"
    },
    {
        command: "&lt;canvas&gt;",
        comment: "// Plátno pre 2D/3D grafiku kreslením cez JavaScript",
        vars: ["width='800'", "height='600'"],
        category: "html",
        tags: "grafika canvas JavaScript"
    },
    {
        command: "&lt;map&gt;",
        comment: "// Definuje klikateľnú mapu obrázka",
        vars: ["name='mapa'"],
        category: "html",
        tags: "obrázok mapa"
    },
    {
        command: "&lt;area /&gt;",
        comment: "// Klikateľná oblasť v mape obrázka (&lt;map&gt;)",
        vars: ["shape='rect'", "coords='0,0,100,100'", "href='stranka.html'", "alt='Popis'"],
        category: "html",
        tags: "obrázok mapa odkaz"
    },

    // =============================================
    // --- SEKCIA: ZOZNAMY ---
    // =============================================
    {
        command: "",
        comment: "Zoznamy",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "zoznamy list"
    },
    {
        command: "&lt;ul&gt;",
        comment: "// Neusporiadaný zoznam (odrážky)",
        vars: [],
        category: "html",
        tags: "zoznam list"
    },
    {
        command: "&lt;ol&gt;",
        comment: "// Usporiadaný zoznam (číslovanie)",
        vars: ["type='1'", "start='1'", "reversed"],
        category: "html",
        tags: "zoznam list"
    },
    {
        command: "&lt;li&gt;",
        comment: "// Položka zoznamu (pre &lt;ul&gt; aj &lt;ol&gt;)",
        vars: ["value='3'"],
        category: "html",
        tags: "zoznam list"
    },
    {
        command: "&lt;dl&gt;",
        comment: "// Definičný zoznam (pojmy a ich definície)",
        vars: [],
        category: "html",
        tags: "zoznam definícia"
    },
    {
        command: "&lt;dt&gt;",
        comment: "// Pojem/termín v definičnom zozname",
        vars: [],
        category: "html",
        tags: "zoznam definícia"
    },
    {
        command: "&lt;dd&gt;",
        comment: "// Definícia pojmu v definičnom zozname",
        vars: [],
        category: "html",
        tags: "zoznam definícia"
    },

    // =============================================
    // --- SEKCIA: TABUĽKY ---
    // =============================================
    {
        command: "",
        comment: "Tabuľky",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "tabuľka table dáta"
    },
    {
        command: "&lt;table&gt;",
        comment: "// Obal celej tabuľky",
        vars: ["border='1'"],
        category: "html",
        tags: "tabuľka"
    },
    {
        command: "&lt;caption&gt;",
        comment: "// Nadpis/popis tabuľky",
        vars: [],
        category: "html",
        tags: "tabuľka popis"
    },
    {
        command: "&lt;thead&gt;",
        comment: "// Hlavička tabuľky (záhlavie stĺpcov)",
        vars: [],
        category: "html",
        tags: "tabuľka"
    },
    {
        command: "&lt;tbody&gt;",
        comment: "// Telo tabuľky s dátami",
        vars: [],
        category: "html",
        tags: "tabuľka"
    },
    {
        command: "&lt;tfoot&gt;",
        comment: "// Päta tabuľky (súčty, poznámky)",
        vars: [],
        category: "html",
        tags: "tabuľka"
    },
    {
        command: "&lt;tr&gt;",
        comment: "// Riadok tabuľky (Table Row)",
        vars: [],
        category: "html",
        tags: "tabuľka riadok"
    },
    {
        command: "&lt;th&gt;",
        comment: "// Hlavičková bunka (tučná, zarovnaná na stred)",
        vars: ["scope='col'", "colspan='2'"],
        category: "html",
        tags: "tabuľka hlavička"
    },
    {
        command: "&lt;td&gt;",
        comment: "// Dátová bunka tabuľky (Table Data)",
        vars: ["colspan='2'", "rowspan='3'"],
        category: "html",
        tags: "tabuľka bunka"
    },
    {
        command: "&lt;col /&gt;",
        comment: "// Definuje vlastnosti stĺpca (šírka, farba)",
        vars: ["span='2'", "style='width: 50%'"],
        category: "html",
        tags: "tabuľka stĺpec"
    },
    {
        command: "&lt;colgroup&gt;",
        comment: "// Zoskupuje &lt;col&gt; elementy pre spoločné štýlovanie",
        vars: [],
        category: "html",
        tags: "tabuľka stĺpec"
    },

    // =============================================
    // --- SEKCIA: FORMULÁRE A VSTUPY ---
    // =============================================
    {
        command: "",
        comment: "Formuláre a vstupy",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "formulár input button"
    },
    {
        command: "&lt;form&gt;",
        comment: "// Obal pre formulárové prvky",
        vars: ["action='url'", "method='POST'", "enctype='multipart/form-data'"],
        category: "html",
        tags: "form formulár"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Textový vstup (jedno riadkové pole)",
        vars: ["type='text'", "placeholder='...'", "required", "name='meno'"],
        category: "html",
        tags: "input text"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Emailový vstup (s automatickou validáciou)",
        vars: ["type='email'", "placeholder='email@domena.sk'"],
        category: "html",
        tags: "input email"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Vstup pre heslo (skryté znaky)",
        vars: ["type='password'", "minlength='8'"],
        category: "html",
        tags: "input heslo"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Číselný vstup s min/max hodnotou",
        vars: ["type='number'", "min='0'", "max='100'", "step='1'"],
        category: "html",
        tags: "input číslo"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Posuvník (rozsah hodnôt – slider)",
        vars: ["type='range'", "min='0'", "max='100'", "value='50'"],
        category: "html",
        tags: "input slider rozsah"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Výber dátumu",
        vars: ["type='date'", "min='2024-01-01'", "max='2030-12-31'"],
        category: "html",
        tags: "input dátum"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Výber času",
        vars: ["type='time'"],
        category: "html",
        tags: "input čas"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Výber dátumu a času",
        vars: ["type='datetime-local'"],
        category: "html",
        tags: "input dátum čas"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Farebný výber (color picker)",
        vars: ["type='color'", "value='#ff0000'"],
        category: "html",
        tags: "input farba"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Zaškrtávacie pole (checkbox)",
        vars: ["type='checkbox'", "checked"],
        category: "html",
        tags: "input checkbox"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Prepínač (radio button) – výber jednej možnosti",
        vars: ["type='radio'", "name='skupina'", "value='moznost1'"],
        category: "html",
        tags: "input radio"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Nahrávanie súborov",
        vars: ["type='file'", "accept='.pdf,.jpg'", "multiple"],
        category: "html",
        tags: "input súbor upload"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Skryté pole (prenáša dáta bez zobrazenia)",
        vars: ["type='hidden'", "name='token'", "value='abc123'"],
        category: "html",
        tags: "input hidden skryté"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Tlačidlo na odoslanie formulára",
        vars: ["type='submit'", "value='Odoslať'"],
        category: "html",
        tags: "input submit odoslanie"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Tlačidlo na vymazanie formulára",
        vars: ["type='reset'", "value='Vymazať'"],
        category: "html",
        tags: "input reset"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Vyhľadávacie pole",
        vars: ["type='search'", "placeholder='Hľadaj...'"],
        category: "html",
        tags: "input hľadanie"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Vstup pre URL adresu",
        vars: ["type='url'", "placeholder='https://example.com'"],
        category: "html",
        tags: "input url odkaz"
    },
    {
        command: "&lt;input /&gt;",
        comment: "// Vstup pre telefónne číslo",
        vars: ["type='tel'", "pattern='[0-9]{10}'"],
        category: "html",
        tags: "input telefón"
    },
    {
        command: "&lt;textarea&gt;",
        comment: "// Viacriadkové textové pole",
        vars: ["rows='5'", "cols='30'", "placeholder='Napíšte správu...'"],
        category: "html",
        tags: "input textarea text"
    },
    {
        command: "&lt;select&gt;",
        comment: "// Rozbaľovací zoznam (dropdown)",
        vars: ["name='krajina'", "multiple", "size='3'"],
        category: "html",
        tags: "input select dropdown"
    },
    {
        command: "&lt;option&gt;",
        comment: "// Položka v &lt;select&gt; alebo &lt;datalist&gt;",
        vars: ["value='sk'", "selected", "disabled"],
        category: "html",
        tags: "input select option"
    },
    {
        command: "&lt;optgroup&gt;",
        comment: "// Skupina možností v &lt;select&gt;",
        vars: ["label='Európa'"],
        category: "html",
        tags: "input select skupiny"
    },
    {
        command: "&lt;datalist&gt;",
        comment: "// Návrhy pre textový vstup (autocomplete zoznam)",
        vars: ["id='moznosti'"],
        category: "html",
        tags: "input autocomplete návrhy"
    },
    {
        command: "&lt;button&gt;",
        comment: "// Klikateľné tlačidlo (flexibilnejšie ako &lt;input type='button'&gt;)",
        vars: ["type='submit'", "type='reset'", "type='button'", "disabled"],
        category: "html",
        tags: "tlačidlo button"
    },
    {
        command: "&lt;label&gt;",
        comment: "// Popis k vstupnému polu (kliknutie aktivuje pole)",
        vars: ["for='input-id'"],
        category: "html",
        tags: "form label popis"
    },
    {
        command: "&lt;fieldset&gt;",
        comment: "// Zoskupenie príbuzných polí formulára",
        vars: ["disabled"],
        category: "html",
        tags: "form skupiny"
    },
    {
        command: "&lt;legend&gt;",
        comment: "// Nadpis skupiny polí vo &lt;fieldset&gt;",
        vars: [],
        category: "html",
        tags: "form skupiny nadpis"
    },
    {
        command: "&lt;output&gt;",
        comment: "// Zobrazuje výsledok výpočtu alebo akcie",
        vars: ["for='input-id'", "name='vysledok'"],
        category: "html",
        tags: "form výstup výsledok"
    },
    {
        command: "&lt;progress&gt;",
        comment: "// Ukazovateľ postupu (progress bar)",
        vars: ["value='70'", "max='100'"],
        category: "html",
        tags: "form progress priebeh"
    },
    {
        command: "&lt;meter&gt;",
        comment: "// Merač hodnoty v rozsahu (napr. využitie disku)",
        vars: ["value='0.7'", "min='0'", "max='1'", "low='0.3'", "high='0.8'", "optimum='0.5'"],
        category: "html",
        tags: "form merač hodnota"
    },

    // =============================================
    // --- SEKCIA: SKRIPTOVANIE A INTERAKCIA ---
    // =============================================
    {
        command: "",
        comment: "Skriptovanie a interaktivita",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "javascript skript interakcia"
    },
    {
        command: "&lt;script&gt;",
        comment: "// Vloží alebo načíta JavaScript kód",
        vars: ["src='script.js'", "defer", "async", "type='module'"],
        category: "html",
        tags: "javascript skript"
    },
    {
        command: "&lt;noscript&gt;",
        comment: "// Obsah zobrazený keď je JavaScript vypnutý",
        vars: [],
        category: "html",
        tags: "javascript záloha"
    },
    {
        command: "&lt;template&gt;",
        comment: "// Skrytý HTML šablóna klonovaná cez JavaScript",
        vars: ["id='sablona'"],
        category: "html",
        tags: "javascript šablóna template"
    },
    {
        command: "&lt;slot&gt;",
        comment: "// Zástupné miesto pre obsah vo Web Components",
        vars: ["name='nazov'"],
        category: "html",
        tags: "javascript web components slot"
    },
    {
        command: "&lt;dialog&gt;",
        comment: "// Natívne modálne okno (dialog/popup)",
        vars: ["open"],
        category: "html",
        tags: "interakcia modal dialog"
    },

    // =============================================
    // --- SEKCIA: GLOBÁLNE ATRIBÚTY ---
    // =============================================
    {
        command: "",
        comment: "Globálne atribúty (použiteľné na každom elemente)",
        vars: [],
        icon: "fa-brands fa-html5",
        color: "#E34F26",
        category: "html",
        tags: "atribúty globálne"
    },
    {
        command: "id",
        comment: "// Jedinečný identifikátor elementu na stránke",
        vars: ["id='uniqueId'"],
        category: "html",
        tags: "atribút id"
    },
    {
        command: "class",
        comment: "// CSS trieda (môže byť viac tried oddelených medzerou)",
        vars: ["class='trieda1 trieda2'"],
        category: "html",
        tags: "atribút class css"
    },
    {
        command: "style",
        comment: "// Inline CSS štýl priamo na elemente",
        vars: ["style='color: red; font-size: 16px;'"],
        category: "html",
        tags: "atribút style css"
    },
    {
        command: "title",
        comment: "// Tooltip text zobrazený pri hover nad elementom",
        vars: ["title='Popisný text'"],
        category: "html",
        tags: "atribút tooltip"
    },
    {
        command: "lang",
        comment: "// Jazyk obsahu elementu",
        vars: ["lang='sk'", "lang='en'"],
        category: "html",
        tags: "atribút jazyk"
    },
    {
        command: "dir",
        comment: "// Smer textu (ltr = zľava, rtl = sprava)",
        vars: ["dir='ltr'", "dir='rtl'", "dir='auto'"],
        category: "html",
        tags: "atribút smer text"
    },
    {
        command: "tabindex",
        comment: "// Poradie pri navigácii klávesou Tab",
        vars: ["tabindex='0'", "tabindex='-1'"],
        category: "html",
        tags: "atribút tab prístupnosť"
    },
    {
        command: "hidden",
        comment: "// Skryje element (ekvivalent display: none)",
        vars: ["hidden"],
        category: "html",
        tags: "atribút skryť"
    },
    {
        command: "contenteditable",
        comment: "// Umožní používateľovi editovať obsah elementu",
        vars: ["contenteditable='true'"],
        category: "html",
        tags: "atribút editovanie"
    },
    {
        command: "draggable",
        comment: "// Umožní ťahanie elementu (drag & drop)",
        vars: ["draggable='true'"],
        category: "html",
        tags: "atribút drag drop"
    },
    {
        command: "spellcheck",
        comment: "// Zapne/vypne kontrolu pravopisu",
        vars: ["spellcheck='true'", "spellcheck='false'"],
        category: "html",
        tags: "atribút pravopis"
    },
    {
        command: "data-*",
        comment: "// Vlastný dátový atribút pre JavaScript",
        vars: ["data-id='123'", "data-meno='Jan'"],
        category: "html",
        tags: "atribút dáta javascript"
    },
    {
        command: "aria-label",
        comment: "// Prístupnostný popis pre čítačky obrazovky",
        vars: ["aria-label='Popis elementu'"],
        category: "html",
        tags: "atribút prístupnosť aria"
    },
    {
        command: "aria-hidden",
        comment: "// Skryje element pred čítačkami obrazovky",
        vars: ["aria-hidden='true'"],
        category: "html",
        tags: "atribút prístupnosť aria"
    },
    {
        command: "role",
        comment: "// Definuje rolu elementu pre prístupnosť (ARIA role)",
        vars: ["role='button'", "role='navigation'", "role='alert'"],
        category: "html",
        tags: "atribút prístupnosť aria role"
    },
];