const notesData = [
    ...jsData,
    ...gitData
];

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

// Funkcia, ktorá filtruje podľa kategórie AJ podľa textu
function updateDisplay() {
    const term = searchInput.value.toLowerCase();
    const filtered = notesData.filter(item => {
        const categoryMatch = currentCategory === 'all' || item.category === currentCategory;
        const textMatch = item.command.toLowerCase().includes(term) ||
            item.comment.toLowerCase().includes(term) ||
            item.vars.some(v => v.toLowerCase().includes(term));
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