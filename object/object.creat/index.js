//function declaration
//versi 1
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.enegri = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain`);
//     }

//     return mahasiswa;
// }

// let sandika = Mahasiswa('shandika', 10);
// let doddy = Mahasiswa('doddy', 20);

//versi 2
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa
// }

// let sandika = Mahasiswa('shandika', 10);
// let doddy = Mahasiswa('doddy', 20);

//versi 3 object.create
const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat bermain`);
    },

    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur`)
    }

};

function Mahasiswa(nama, energi) {
    let mahasiswa = object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa
}

let sandika = Mahasiswa('shandika', 10);
let doddy = Mahasiswa('doddy', 20);