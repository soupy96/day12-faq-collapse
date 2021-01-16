const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(e => {
    e.addEventListener('click', (event) => {
        e.parentNode.classList.toggle('active')
    }
)});