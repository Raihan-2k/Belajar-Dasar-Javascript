//add = menambahkan kelas baru
// const p2 = document.querySelector('.p2')

// if (p2.classList.item(2) === true) {
//     console.log(p2)
// } else {
//     console.log('tidak di temukan')
// }

// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru')
    // simpan tulisan ke dalam paragram
pBaru.appendChild(teksPBaru)
    // simpan pBaru di akhir section

const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

//membuat lis baru, diantara lis (insert before)
const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('item baru')
liBaru.appendChild(teksLiBaru)
    // menggabungkan
const ul = document.querySelector('section#b ul')
    //cara pertama
    // const li2 = document.querySelector('section#b ul li:nth-child(2)')
    //cara ke 2 lebih mudah
const li2 = ul.querySelector('li:nth-child(2)')
    //li nth child untuk mencari anak dari perent

//simpan elemen lis
ul.insertBefore(liBaru, li2)

//menghapus child remove child
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link);

//replace child = mengganti node p dengan h2
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('judul baru')

h2Baru.appendChild(teksH2Baru)
    //node baru mereplace node lama
sectionB.replaceChild(h2Baru, p4)

pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'