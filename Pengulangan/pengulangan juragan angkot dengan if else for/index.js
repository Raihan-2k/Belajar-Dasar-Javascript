const jmlAngkot = 10
const angkotBeroperasi = 6

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No.' + noAngkot + 'Beroperasi dengan baik')
    } else {
        console.log('Angkot no. ' + noAngkot + ' tidak beroperasi')
    }
}