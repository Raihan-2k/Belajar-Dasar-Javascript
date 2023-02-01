getPilihanComputer = () => {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

getHasil = (comp, player) => {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}

loading = () => {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
    }, 100)
}

//cara simple
const bertanding = document.querySelectorAll(' li img');
bertanding.forEach((b) => {
    b.addEventListener('click', () => {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = b.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        // console.log('comp : ' + pilihanComputer);
        // console.log('player : ' + pilihanPlayer);
        // console.log('hasil : ' + hasil);
        loading();
        setTimeout(() => {
            const imgComputer = document.querySelector(' .img-komputer ');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            info = document.querySelector('.info')
            info.innerHTML = hasil;
        }, 1000);


    })
})

//cara ribet
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', () => {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('comp : ' + pilihanComputer);
//     // console.log('player : ' + pilihanPlayer);
//     // console.log('hasil : ' + hasil);

//     const imgComputer = document.querySelector(' .img-komputer ');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     info = document.querySelector('.info')
//     info.innerHTML = hasil;

// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', () => {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('comp : ' + pilihanComputer);
//     // console.log('player : ' + pilihanPlayer);
//     // console.log('hasil : ' + hasil);

//     const imgComputer = document.querySelector(' .img-komputer ');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     info = document.querySelector('.info')
//     info.innerHTML = hasil;

// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', () => {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('comp : ' + pilihanComputer);
//     // console.log('player : ' + pilihanPlayer);
//     // console.log('hasil : ' + hasil);

//     const imgComputer = document.querySelector(' .img-komputer ');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     info = document.querySelector('.info')
//     info.innerHTML = hasil;

// })