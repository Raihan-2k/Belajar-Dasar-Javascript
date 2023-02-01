// const p3

// const p2 = document.querySelector('.p2')
// p2.onclick = ubahWarnal

const p3 = document.querySelector('.p3')

// p3.addEventListener('click', function() {
//     p3.style.backgroundColor = 'lightblue';
// });
// p3.addEventListener('mouseenter', function() {
//     p3.style.backgroundColor = 'blue ';
// });
// p3.addEventListener('mouseleave', function() {
//     p3.style.backgroundColor = 'red ';
// });
p3.addEventListener('click', () => {
    if (p3.style.backgroundColor === 'black') {
        p3.style.backgroundColor = 'red';

    } else if (p3.style.backgroundColor === 'green') {
        p3.style.backgroundColor = 'black'
    } else {
        p3.style.backgroundColor = 'green'
    }
})