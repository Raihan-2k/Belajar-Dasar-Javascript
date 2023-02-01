//1. Object literal

// let mahasiswa={
//   nama : 'raihan',
//   energi : 10,
//   makan: function (porsi){
//     this.energi = this.energi + porsi;
//     console.log(`Selamat Datang ${this.nama}, Selamat datang`);
//   }
// }
//cara jalaninya mahasiswa / mahasiswa.makan

//2. function declaration

// function Mahasiswa(nama,energi){
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   //method ke 1
//   mahasiswa.makan = function(porsi){
//     this.energi += porsi;     //cara singkat dari this.energi = this.energi + porsi
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   }

//   //method ke 2
//   mahasiswa.main = function(jam){
//     this.energi -= jam; 
//     console.log(`Halo ${this.nama}, Selamat Bermain`);
//   }

//   return mahasiswa;
// }

// let raihan = Mahasiswa('raihan',10);
// let doddy = Mahasiswa('doddy',20);
//untuk memanggil function mahasiswa agar muncul di console log


//cara jalaninya sama

//contructor Function

function Mahasiswa(nama,energi){
  this.nama = nama;
  this.energi = energi;

  //method ke 1
  this.makan = function(porsi){
    this.energi += porsi;     //cara singkat dari this.energi = this.energi + porsi
    console.log(`Halo ${this.nama}, Selamat Makan`);
  }

  //method ke 2
  this.main = function(jam){
    this.energi -= jam; 
    console.log(`Halo ${this.nama}, Selamat Bermain`);
  }

}

let raihan = new Mahasiswa('raihan',10);