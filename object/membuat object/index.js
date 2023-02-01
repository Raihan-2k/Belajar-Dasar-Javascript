//object literal

const mhs = {
    nama: 'raihan',
    nrp: '2832125813',
    email: 'raihan@gmail.com',
    jurusan: 'Infomatika'
}

const mhs2 = {
    nama: 'doddy',
    nrp: '25826525695',
    email: 'doddy@gmail.com',
    jurusan: 'sistem infomasi'
}

//function declaration

function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = []
    mhs.nama = nama
    mhs.nrp = nrp
    mhs.email = email
    mhs.jurusan = jurusan
    return mhs
}

const mhs3 = buatObjectMahasiswa('nofi', '53656556526', 'nofi@gmail.com', 'teknik sipil')

//constructor (bedanya dengan function declaration tidak perlu menambahkan variable lagi dan juga tidak ada retrun tetapi menggunakan this dan menggunakan new untuk megisi datanya )

function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama
    this.nrp = nrp
    this.email = email
    this.jurusan = jurusan
}

const mhs4 = new Mahasiswa('erik', '391385656251', 'erik@cloud.com', 'teknik mesin')