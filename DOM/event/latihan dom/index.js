// const r = Math.round(Math.random() * 255 + 1);
// const g = Math.round(Math.random() * 255 + 1);
// const b = Math.round(Math.random() * 255 + 1);

// merubah warna menggunakan if else
const button = document.querySelector('#button')
button.addEventListener('click', () => {
    if (button.style.backgroundColor === 'lightblue') {
        button.style.backgroundColor = 'white '
    } else {
        button.style.backgroundColor = 'lightblue'
    }
});

//MERUBAH WARNA background
// button.addEventListener('click', () => {
//     if (document.body.style.backgroundColor === 'lightblue') {
//         document.body.style.backgroundColor = 'white'
//     } else {
//         document.body.style.backgroundColor = 'lightblue'
//     }
// })

// merubah warna menggunakan toggle dengan css
const buttonB = document.querySelector('#buttonB')
buttonB.addEventListener('click', () => {
    document.body.classList.toggle('biru-muda')
})

// const buttonB = document.querySelector('#buttonB')
// buttonB.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')' //togle adalah jika ada kelasnya maka di hilangkan jika tidak ada maka tambahkan
// })


// //membuat tombol baru dengan js
const tBaru = document.createElement('button')
const tTombol = document.createTextNode('acak warna')
tBaru.appendChild(tTombol); //menggabungkan tBaru dan tTombol (teks)


tBaru.setAttribute('type', 'button '); // mmebuat atribut baru dengan tipe button
// const tombolA = document.getElementById('button')
// tombolA.after(tBaru)
buttonB.after(tBaru);

// tBaru.addEventListener('mouseenter', () => [
//     tBaru.style.backgroundColor = 'red'
// ])
// tBaru.addEventListener('mouseleave', () => {
//     tBaru.style.backgroundColor = 'blue'
// })

tBaru.addEventListener('click', () => {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')'
})

//membuat slider yang bisa merubah warna background
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('change', () => { //change untuk merubah warna bacground tapi akan muncul setelah di lepas kliknya
//     const r = sMerah.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + 100 + ', ' + 100 + ')'
// })

sMerah.addEventListener('input', () => { //input sama seperti change tetapi lebih keren karna bisa merubah walaupun masih di klik slidernya
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')'
})

sHijau.addEventListener('input', () => { //input sama seperti change tetapi lebih keren karna bisa merubah walaupun masih di klik slidernya
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')'
})

sBiru.addEventListener('input', () => { //input sama seperti change tetapi lebih keren karna bisa merubah walaupun masih di klik slidernya
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')'
})

//merubah warna background ketika mouse berpindah dari sumbu x ke sumbu y
document.body.addEventListener('mousemove', (event) => { //event sebagai parameter dan mouse mousemove sebagai metod mouse berpindah dari x ke y

    const xPos = Math.round((event.clientX / window.innerWidth) * 255); //round untuk membulatkan bilangan //clientX sebagai sumbu x //window.innerWidth sebagai tinggi dari window

    const yPos = Math.round((event.clientY / window.innerHeight) * 255); //clientY sebagai sumbu y //windows.innerHeihgt sebagai lebar window

    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)'
})