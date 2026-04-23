const notesData = [
    ...terminalData,
    ...gitData,
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
        p.innerHTML = `${item.command} ${varsHtml} <span class="comment">${item.comment}</span>`;
        container.appendChild(p);
    });
}

function updateDisplay() {
    // 1. Očistíme hľadaný výraz od diakritiky a dáme na malé písmená
    const term = removeDiacritics(searchInput.value.toLowerCase());

    const filtered = notesData.filter(item => {
        const categoryMatch = currentCategory === 'all' || item.category === currentCategory;

        // 2. Pripravíme si texty z dát (tiež bez diakritiky)
        const cmd = removeDiacritics(item.command.toLowerCase());
        const comm = removeDiacritics(item.comment.toLowerCase());
        const tags = item.tags ? removeDiacritics(item.tags.toLowerCase()) : "";

        // Skontrolujeme aj premenné vo vars
        const varsMatch = item.vars.some(v =>
            removeDiacritics(v.toLowerCase()).includes(term)
        );

        const textMatch =
            cmd.includes(term) ||
            comm.includes(term) ||
            tags.includes(term) ||
            varsMatch;

        return categoryMatch && textMatch;
    });

    renderNotes(filtered);
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