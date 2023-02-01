// const close = document.querySelector('.close')
// const card = document.querySelector('.card')
// close.addEventListener('click', () => {
//     card.remove()
// })

const close = document.querySelectorAll('.close');

//menggunakan for
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', (e) => {
//         // close[i].parentElement.remove();
//         e.target.parentElement.remove()
//     })
// }

//menggunakan foreach
close.forEach((del) => {
    del.addEventListener('click', (e) => {
        e.target.parentElement.remove()
        e.preventDefault(); //method untuk memberhentikan default dari a
        e.stopPropagation(); //method supaya bisa menjalankan function cards agar alertnya muncul 
    });
});

const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
    card.addEventListener('click', () => {
        alert('ok')
    })
})

// const nama = document.querySelector('.nama');

//method
// parentElement
// parentNode
// nextSibling
// nextElementSibling
// previousElementSibling