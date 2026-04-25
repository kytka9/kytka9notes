const notesData = [
    ...terminalData,
    ...gitData,
    ...htmlData,
    ...cssData,
    ...jsData,
];

// Celkový počet poznámok
document.getElementById('note-count').innerText = `Celkovo ${notesData.length} príkazov, skratiek a funkcií :)`;
// Aktuálny čas
setInterval(() => {
    document.getElementById('live-clock').innerText = new Date().toLocaleTimeString();
}, 1000);
// Vyhľadávanie bez diakritiky
const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const container = document.getElementById('terminal-output');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentCategory = 'all';

// Hlavná funkcia na vykreslenie
function renderNotes(data) {
    container.innerHTML = '';
    data.forEach(item => {
        const p = document.createElement('p');
        let varsHtml = item.vars.map(v => `<span class="var">${v}</span>`).join(' ');
        let iconHtml = item.icon 
            ? `<i class="${item.icon} fa-xl" style="color: ${item.color || '#fff'}; margin-right: 12px;"></i>` 
            : '';
        p.innerHTML = `${item.command} ${varsHtml} <span class="comment">${iconHtml}${item.comment}</span>`;
        container.appendChild(p);
    });
}

function updateDisplay() {
    const term = removeDiacritics(searchInput.value.toLowerCase());
    const filteredResults = [];
    let lastHeading = null;

    notesData.forEach(item => {
        // 1. Ak je to nadpis (prázdny command), uložíme si ho a ideme ďalej
        if (!item.command || item.command.trim() === "") {
            lastHeading = item;
            return;
        }

        // 2. Príprava textov na porovnanie (bez diakritiky)
        const categoryMatch = currentCategory === 'all' || item.category === currentCategory;
        const cmd = removeDiacritics(item.command.toLowerCase());
        const comm = removeDiacritics(item.comment.toLowerCase());
        const tags = item.tags ? removeDiacritics(item.tags.toLowerCase()) : "";
        
        // Kontrola aj v poli vars
        const varsMatch = item.vars.some(v => removeDiacritics(v.toLowerCase()).includes(term));

        const textMatch = cmd.includes(term) || comm.includes(term) || tags.includes(term) || varsMatch;

        // 3. Ak máme zhodu
        if (categoryMatch && textMatch) {
            // Ak sme pod novým nadpisom, ktorý ešte nie je vo výsledkoch, pridáme ho
            if (lastHeading && !filteredResults.includes(lastHeading)) {
                filteredResults.push(lastHeading);
            }
            filteredResults.push(item);
        }
    });

    renderNotes(filteredResults);
    
    // Počítadlo (počíta len reálne príkazy, nie nadpisy)
    const realCount = filteredResults.filter(i => i.command && i.command.trim() !== "").length;
    const counterElement = document.getElementById('counter'); // Uisti sa, že máš v HTML id="counter"
    if (counterElement) counterElement.textContent = `Celkovo ${realCount} príkazov`;
}

// Eventy pre tlačidlá
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-cat');
        updateDisplay();
    });
});

// Event pre vyhľadávanie
searchInput.addEventListener('input', updateDisplay);

// Prvotné načítanie
renderNotes(notesData);