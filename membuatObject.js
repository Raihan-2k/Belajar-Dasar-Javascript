//object literal
// kalo mau rubah datanya harus nulis manual dari awal
var mhs = {
  nama : 'raihan',
  nrp : '12190163',
  email: 'raihan@gmail.com',
  jurusan: 'Teknik Informatika'
}
//cara panggilnya di console browser ketik mhs

// Function Declaration

function buatObjectMahasiswa(nama, nrp, email, jurusan){
  //harus buat variable dlu
  var mhs= {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  //kalau function declaration harus ada return
  return mhs;  
}

var mhs3 = buatObjectMahasiswa('Nori', '561656', 'nori@asdasd','Teknik pangan');
// kalo mau buat data baru tinggal buat variable baru lalu isi datanya tidak perlu buat dari awal

//constructor

function Mahasiswa(nama, nrp, email, jurusan) {
  //bedanya tidak perlu membuat variable dan menulis return seperti function declaration
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

//cara manggilnya harus ada new 

var mhs4= new Mahasiswa ('erik', '562656', 'nor12i@asdasd','Teknik lapangan');
