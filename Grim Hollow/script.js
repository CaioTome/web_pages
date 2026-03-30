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

function showLineage(id) {
    const details = document.querySelectorAll('.lineage-detail');
    const buttons = document.querySelectorAll('.lineage-link');
    
    details.forEach(detail => {
        detail.classList.add('hidden');
        detail.classList.remove('section-enter');
    });
    buttons.forEach(btn => btn.classList.remove('active', 'border-red-600', 'bg-red-900/20'));

    const target = document.getElementById('lineage-' + id);
    if (target) { target.classList.remove('hidden'); target.classList.add('section-enter'); }
    const activeBtn = document.getElementById('btn-' + id);
    if (activeBtn) activeBtn.classList.add('active', 'border-red-600', 'bg-red-900/20');
}

function toggleFzegForm(form) {
    const imgBase = document.getElementById('fzeg-img-base');
    const imgAlfa = document.getElementById('fzeg-img-alfa');
    const btnBase = document.getElementById('btn-fzeg-base');
    const btnAlfa = document.getElementById('btn-fzeg-alfa');
    
    // Classes para o efeito de brilho e destaque
    const activeClasses = ['bg-red-900/40', 'border-red-600', 'shadow-[0_0_15px_rgba(220,38,38,0.5)]'];

    // Resetar estados
    imgBase.classList.add('hidden');
    imgAlfa.classList.add('hidden');
    btnBase.classList.remove(...activeClasses);
    btnAlfa.classList.remove(...activeClasses);

    if (form === 'base') {
        imgBase.classList.remove('hidden');
        btnBase.classList.add(...activeClasses);
    } else {
        imgAlfa.classList.remove('hidden');
        btnAlfa.classList.add(...activeClasses);
    }
}