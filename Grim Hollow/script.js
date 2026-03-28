function showSection(id) {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-link');
    sections.forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('section-enter');
    });
    navLinks.forEach(link => link.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('section-enter');
    }
    const activeNav = document.getElementById('nav-' + id);
    if (activeNav) activeNav.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterFactions() {
    const input = document.getElementById('faction-search');
    const filter = input.value.toLowerCase();
    const items = document.getElementsByClassName('faction-item');
    Array.from(items).forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
    });
}