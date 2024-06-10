const openMenu = document.querySelector('.header_open_menu')
const closeMenu = document.querySelector('.close_menu')
const mobileMenu = document.querySelector('.mobile_menu')

openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile_menu_active')
})
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile_menu_active')
})

const sliderMoveBtns = document.querySelectorAll('.slider_move_btn');
const cardsBlockSlider = document.querySelector('.cards_block_slider');

function toggleActiveClass(event) {
    sliderMoveBtns.forEach(btn => {
        btn.classList.remove('slider_move_btn_active');
    });

    const clickedBtn = event.currentTarget;
    clickedBtn.classList.add('slider_move_btn_active');

    if (clickedBtn.classList.contains('next')) {
        cardsBlockSlider.style.transform = 'translateX(-50%)';
    } else if (clickedBtn.classList.contains('prev')) {
        cardsBlockSlider.style.transform = 'translateX(0%)';
    }
}

sliderMoveBtns.forEach(btn => {
    btn.addEventListener('click', toggleActiveClass);
});


const showInfoButtons = document.querySelectorAll('.show_info')
const closeOverflow = document.querySelectorAll('.close_overflow')

showInfoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const sliderCard = btn.closest('.slider_card'); // Получаем ближайший родительский элемент с классом slider_card
        const overflow = sliderCard.querySelector('.overflow'); // Ищем элемент с классом overflow внутри slider_card
        console.log('Button clicked', btn);
        if (overflow) {
            console.log('Overflow element found:', overflow);
            overflow.classList.toggle('overflow_active'); // Переключаем видимость
            console.log('Class list after toggle:', overflow.classList);
        } else {
            console.log('No overflow element found within this slider_card.');
        }
    });
});

closeOverflow.forEach(btn => {
    btn.addEventListener('click', () => {
        const overflow = btn.closest('.overflow'); // Получаем ближайший родительский элемент с классом overflow
        console.log('Close button clicked', btn);
        if (overflow) {
            console.log('Overflow element found:', overflow);
            overflow.classList.remove('overflow_active'); // Скрываем элемент
            console.log('Class list after removal:', overflow.classList);
        } else {
            console.log('No overflow element found to close.');
        }
    });
});
