//join (merubah array menjadi string)

// let angka = [1, 2, 3, 4, 5, 6, 7, 8]
// let nama = ['sandika', 'galih', 'nofa']
//     // angka.forEach(function(e) {
//     console.log(e)
// })

//1. forEach
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) /*jika ingin memulai dari 1 maka tambah +1*/ + 'adalah : ' + e)
// })

//2.map (mengembalikan nilai array. setiap array akan di kali 2 karena dikalikan 2)
// let angka = [1, 2, 3, 5, 4, 9, 7, ]
// let angka2 = angka.map(function(e) {
//     return e * 2
// })
// console.log(angka2.join(' - '))

//3. sort (mengurutkan dari yang terkecil)

let angka = [1, 2, 3, 5, 4, 9, 7, ]
angka.sort();
console.log(angka.join(' - '))