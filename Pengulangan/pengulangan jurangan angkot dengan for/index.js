const jmlAngkot = 10
const angkotBeroperasi = 6
let noAngkot = 1

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No.' + noAngkot + 'angkot yang beroprasi')

    noAngkot++
}

for (let noAngkot = angkotBeroperasi; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No.' + noAngkot + ' sedang tidak berokprasi')
}