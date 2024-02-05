//HW optimize loadAbout() -> loadFragment(???)
// Общая функция для загрузки фрагментов
function loadFragment(fragmentName) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `${fragmentName}.html`);

    xhr.onload = function () {
        document.querySelector('.dynamic').innerHTML = xhr.responseText;
    };

    xhr.send();
}

// Загрузка фрагмента "about"
function loadAbout() {
    loadFragment("about");
}

// Загрузка фрагмента "example"
function loadExample() {
    loadFragment("example");
}

// Загрузка фрагмента "references"
function loadReferences() {
    loadFragment("references");
}
// Загрузка фрагмента "about" при загрузке страницы 
// window.onload = function () {
//     loadAbout();
// };
