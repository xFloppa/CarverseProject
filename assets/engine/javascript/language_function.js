function changeLanguage() {
    var currentLang = document.getElementById('current-lang').innerText;
    if (currentLang === 'ITA') {
        window.location.href = './index-en.html';
    } else {
        window.location.href = './index-it.html';
    }
}