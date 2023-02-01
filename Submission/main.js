document.addEventListener("DOMContentLoaded", () => {
    const fromKirim = document.getElementById("masukin-buku");

    fromKirim.addEventListener("submit", (e) => {
        e.preventDefault();
        tambahBuku();
    })

    if (penyimpanan()) {
        muatKePenyimpanan();
    }

    const cariKirim = document.getElementById("cariBuku");

    cariKirim.addEventListener("submit", (e) => {
        e.preventDefault();
        mencariBuku();
    })
})

document.addEventListener("ondatasaved", () => {
    console.log("Data Berhasil Disimpan.");
});

document.addEventListener("ondataloaded", () => {
    segarkanHalaman();
});