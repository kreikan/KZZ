const openPopUp = document.querySelectorAll('.open_pop_up');
const popUp = document.getElementById('pop_up'); //фон 
const popUpItem = document.getElementById('popup_item');
const popUpSuccesful = document.querySelector('.second__pop_up')
const secondPopUp = document.getElementById('second__popup')
const closePopUp = document.getElementById('close_popup')

secondPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    popUpSuccesful.classList.add('open')
    popUp.classList.remove('open');
    popUpItem.classList.remove('open');
})
popUpSuccesful.addEventListener('click', (e) => {
    e.preventDefault();
    popUpSuccesful.classList.remove('open')
})
openPopUp.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popUp.classList.add('open'); // Добавляем класс 'active' для фона
        popUpItem.classList.add('open'); // И для самого окна
    })
});


closePopUp.addEventListener('click', (e) => {
    e.preventDefault();
    popUpSuccesful.classList.remove('open')
    popUp.classList.remove('open'); // Убираем активный класс с фона
    popUpItem.classList.remove('open');

})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popUp) { // Если цель клика - фот, то:
        popUp.classList.remove('open'); // Убираем активный класс с фона
        popUpItem.classList.remove('open'); // И с окна


    }
});

let sendButton = document.querySelector('.send__btn')

sendButton.addEventListener('click', (e) => {
    e.preventDefault();

})


// Scroll Nav
const missionButton = document.querySelector('.scroll__mission');
const missionSection = document.querySelector('.main__section');
const projectButton = document.querySelector('.scroll__projects')
const projectsSection = document.querySelector('.footer__description')
const kasipkerletSection = document.querySelector('.business__people')
const kasipkerButton = document.querySelector('.scroll__kasipkerler')

function scrlollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"

    });
}

missionButton.addEventListener('click', (e) => {
    e.preventDefault();
    scrlollTo(missionSection);
})
projectButton.addEventListener('click', (e) => {
    e.preventDefault();
    scrlollTo(projectsSection);
})

kasipkerButton.addEventListener('click', (e) => {
    e.preventDefault();
    scrlollTo(kasipkerletSection);
})