# kytka9notes 🚀

Jednoduchý a rýchly **osobný terminálový zápisník** pre programátorské príkazy a poznámky. Projekt je navrhnutý tak, aby fungoval ako bleskový "cheat sheet" s okamžitým vyhľadávaním a kategorizáciou.

## ✨ Funkcie
- 🔍 **Okamžité vyhľadávanie:** Hľadá v príkazoch, komentároch aj premenných.
- 🗂️ **Kategorizácia:** Filtrovanie podľa technológií (Git, Linux, JS).
- 📱 **Responzívny dizajn:** Optimalizované pre desktop aj mobilné zariadenia.
- 🌑 **Dark Mode:** Šetrný k očiam v štýle pravého terminálu.

## 🛠️ Technológie
- **HTML5** & **CSS3** (Custom properties, Flexbox)
- **JavaScript (ES6+)** – modulárne načítavanie dát bez potreby frameworkov
- **Font Awesome** – ikonky

## 📂 Štruktúra dát
Dáta sú rozdelené do samostatných súborov v priečinku `/data` pre lepšiu prehľadnosť:
- `javascript.js`
- `git.js`
- `linux.js`

## 🚀 Ako pridať novú poznámku
1. Otvor príslušný súbor v priečinku `/data`.
2. Pridaj nový objekt do poľa:
```javascript
{
    command: "tvoj_prikaz",
    comment: "// tvoj komentar",
    vars: ["premenna"],
    category: "kategoria"
}