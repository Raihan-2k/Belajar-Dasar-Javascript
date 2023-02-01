const DAFTAR_BUKU_BELUM_SELESAI = "rakBukuBelumSelesai";
const DAFTAR_BUKU_SELESAI = "rakBukuSelesai";
const ID_BARANGBUKU = "itemId";

const buatBuku = (judul_buku, penulis, tahun_terbit, halaman, buku_sudah_selesai) => {
    const judul = document.createElement("h3");
    judul.innerText = judul_buku;

    const penulis_buku = document.createElement("p");
    penulis_buku.innerText = "Penulis: " + penulis;

    const detail_tahun = document.createElement("p");
    detail_tahun.innerText = "Tahun: " + tahun_terbit;

    const halaman_buku = document.createElement("p");
    halaman_buku.innerText = "Halaman: " + halaman;



    const penampung_teks = document.createElement("ARTICLE");
    penampung_teks.classList.add("barang-buku");
    penampung_teks.append(judul, penulis_buku, detail_tahun, halaman_buku);

    const tombol_penampung = document.createElement("div");
    tombol_penampung.classList.add("aksi");

    if (buku_sudah_selesai) {
        tombol_penampung.append(buatTombolBelumSudahSelesai("Belum Selesai Dibaca", ), buatTombolMerah("Hapus Buku"));
    } else {
        tombol_penampung.append(buatTombolSudahSelesai("Selesai Dibaca"), buatTombolMerah("Hapus Buku"));
    }

    penampung_teks.append(tombol_penampung);

    return penampung_teks;
}

const tambahBuku = () => {
    const rak_buku_belum_selesai = document.getElementById(DAFTAR_BUKU_BELUM_SELESAI);
    const rak_buku_selesai = document.getElementById(DAFTAR_BUKU_SELESAI);

    const judul_buku_sesukamu = document.getElementById("masukinJudulBuku").value;
    const pengarang = document.getElementById("masukinPenulis").value;
    const tahun_terbit_dari_penerbit = document.getElementById("masukinTahun").value;
    const halaman_baru = document.getElementById("masukinHalaman").value;
    const centang_nilai = document.querySelector('#masukinBukuSelesai').checked;

    const buku_telah_dibuat = buatBuku(judul_buku_sesukamu, pengarang, tahun_terbit_dari_penerbit, halaman_baru, centang_nilai);
    const objekBuku = komposisiObjekBuku(judul_buku_sesukamu, pengarang, tahun_terbit_dari_penerbit, halaman_baru, centang_nilai);
    buku_telah_dibuat[ID_BARANGBUKU] = objekBuku.id;
    banyak_buku.push(objekBuku);


    if (centang_nilai) {
        rak_buku_selesai.append(buku_telah_dibuat);
        perbaruiBukuKePenyimpanan();
    } else {
        rak_buku_belum_selesai.append(buku_telah_dibuat);
        perbaruiBukuKePenyimpanan();
    }
}

const tambahBukuSudahSelesai = (book) => {
    const title = book.querySelector('.barang-buku > h3').innerText;
    const author = book.querySelectorAll('.barang-buku > p')[0].innerText.slice(8);
    const year = book.querySelectorAll('.barang-buku > p')[1].innerText.slice(7);
    const page = book.querySelectorAll('.barang-buku > p')[2].innerText.slice(8);


    const buku_baru = buatBuku(title, author, year, page, true);
    const buku_ditemukan = cari_buku(book[ID_BARANGBUKU]);
    buku_ditemukan.isBookComplete = true;
    buku_baru[ID_BARANGBUKU] = buku_ditemukan.id;

    const rak_buku_selesai = document.getElementById(DAFTAR_BUKU_SELESAI);
    rak_buku_selesai.append(buku_baru);
    book.remove();

    perbaruiBukuKePenyimpanan();
}

const tambahBukuBelumSelesai = (book) => {
    const title = book.querySelector('.barang-buku > h3').innerText;
    const author = book.querySelectorAll('.barang-buku > p')[0].innerText.slice(8);
    const year = book.querySelectorAll('.barang-buku > p')[1].innerText.slice(7);
    const page = book.querySelectorAll('.barang-buku > p')[2].innerText.slice(8);


    const buku_baru = buatBuku(title, author, year, page, false);
    const buku_ditemukan = cari_buku(book[ID_BARANGBUKU]);
    buku_ditemukan.isBookComplete = false;
    buku_baru[ID_BARANGBUKU] = buku_ditemukan.id;

    const rak_buku_belum_selesai = document.getElementById(DAFTAR_BUKU_BELUM_SELESAI);
    rak_buku_belum_selesai.append(buku_baru);
    book.remove();
    perbaruiBukuKePenyimpanan();
}

const hapusBuku = (book) => {
    const bookPosition = index_cari_buku(book[ID_BARANGBUKU]);
    banyak_buku.splice(bookPosition, 1);
    book.remove();
    perbaruiBukuKePenyimpanan();
}

const buatTombol = (buttonTypeClass, eventListener, text) => {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add(buttonTypeClass);

    button.addEventListener("click", (e) => {
        eventListener(e);
    });

    return button;
}

const buatTombolBelumSudahSelesai = (text) => {
    return buatTombol("hijau", (e) => {
        tambahBukuBelumSelesai(e.target.parentElement.parentElement);
    }, text)
}

const buatTombolSudahSelesai = (text) => {
    return buatTombol("hijau", (e) => {
        tambahBukuSudahSelesai(e.target.parentElement.parentElement);
    }, text)
}

const buatTombolMerah = (text) => {
    return buatTombol("merah", (e) => {
        const message = confirm("Apakah Anda Yakin Ingin Hapus Buku Bacaan Anda?");
        if (message) {
            hapusBuku(e.target.parentElement.parentElement);
        }
    }, text)
}

const mencariBuku = () => {
    const searchValue = document.getElementById("cariJudulBuku").value;
    const rak_buku_belum_selesai = document.getElementById(DAFTAR_BUKU_BELUM_SELESAI);
    const rak_buku_selesai = document.getElementById(DAFTAR_BUKU_SELESAI);
    const previousBooks = document.querySelectorAll(".barang-buku")

    if (searchValue) {
        for (previousBook of previousBooks) {
            previousBook.remove();
        }

        const filter_buku = banyak_buku.filter((book) => book.title.toLowerCase().includes(searchValue.toLowerCase()));

        for (book of filter_buku) {
            const buku_baru = buatBuku(book.title, book.author, book.year, book.page, book.isBookComplete);
            buku_baru[ID_BARANGBUKU] = book.id;

            if (book.isBookComplete) {
                rak_buku_selesai.append(buku_baru);
            } else {
                rak_buku_belum_selesai.append(buku_baru);
            }
        }
    } else {
        for (previousBook of previousBooks) {
            previousBook.remove();
        }
        muatKePenyimpanan();
    }

    return banyak_buku;
}