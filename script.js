function setLanguage(lang) {
    // activer / désactiver les blocs de langue
    document.querySelectorAll('.lang').forEach(function (el) {
        el.classList.remove('active');
    });
    const activeBlock = document.querySelector('.lang-' + lang);
    if (activeBlock) activeBlock.classList.add('active');

    // mettre l'attribut lang sur <html>
    document.documentElement.lang = lang;

    // mettre à jour l'état visuel des boutons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.classList.remove('active');
    });

    // pour chaque header de langue, activer le bon bouton
    document.querySelectorAll('.lang-switch').forEach(function (switchEl) {
        switchEl.querySelectorAll('.lang-btn').forEach(function (btn) {
            if (btn.textContent.trim().toLowerCase() === lang) {
                btn.classList.add('active');
            }
        });
    });
}

// année courante sur tous les footers
document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
});
