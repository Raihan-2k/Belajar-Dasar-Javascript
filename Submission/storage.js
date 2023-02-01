const KUNCI_PENYIMPANAN = "BOOKSHELF APPLICATION"
banyak_buku = [];

const penyimpanan = () => {
    if (typeof(Storage) === undefined) {
        alert("Your Browser Isn't Support");
        return false
    }
    return true;
}

const komposisiObjekBuku = (title, author, year, page, isBookComplete) => {
    return {
        id: +new Date(),
        title,
        author,
        year,
        page,
        isBookComplete
    };
}

const cari_buku = (bookId) => {
    for (book of banyak_buku) {
        if (book.id === bookId)
            return book;
    }
    return null;
}

function index_cari_buku(bookId) {
    let index = 0
    for (book of banyak_buku) {
        if (book.id === bookId)
            return index;
        index++;
    }

    return -1;
}

const simpanBuku = () => {
    const parsed = JSON.stringify(banyak_buku);
    localStorage.setItem(KUNCI_PENYIMPANAN, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
}

const muatKePenyimpanan = () => {
    const dapatkan_buku = localStorage.getItem(KUNCI_PENYIMPANAN);

    let data = JSON.parse(dapatkan_buku);

    if (data !== null) {
        banyak_buku = data;
    }

    document.dispatchEvent(new Event("ondataloaded"));
}

const perbaruiBukuKePenyimpanan = () => {
    if (penyimpanan()) {
        simpanBuku();
    };
}

const segarkanHalaman = () => {
    const rak_buku_belum_selesai = document.getElementById(DAFTAR_BUKU_BELUM_SELESAI);
    const rak_buku_selesai = document.getElementById(DAFTAR_BUKU_SELESAI);

    for (book of banyak_buku) {
        const buku_baru = buatBuku(book.title, book.author, book.year, book.page, book.isBookComplete);
        buku_baru[ID_BARANGBUKU] = book.id;

        if (book.isBookComplete) {
            rak_buku_selesai.append(buku_baru);
        } else {
            rak_buku_belum_selesai.append(buku_baru);
        }
    }
}