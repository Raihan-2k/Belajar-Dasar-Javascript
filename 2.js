//x = 100;
//var x;
//console.log(x);

/* output: 100 */

/*var x;
x = 100;
console.log(x);*/

/* output: 100 */

/*Hoisting menjadi kontroversial karena tidak sedikit developer yang dibuat bingung akan hal ini. 
Masalah ini sudah terselesaikan jika kita menggunakan let dalam mendeklarasikan variabel. */
/*y = 100;
let y;
console.log(y);*/

/* ReferenceError: Cannot access 'y' before initialization */

/*Kemudian const digunakan untuk mendeklarasikan sebuah 
variabel yang sifatnya immutable atau tidak perlu diubah nilainya.
Jika kita menginisialisasi kembali nilai variabel yang menggunakan const, 
maka akan mendapati eror “TypeError: Assignment to constant variable.”*/

/*const z = 100;
console.log(z);

z = 200;
console.log(z)*/

/* TypeError: Assignment to constant variable. */

/*Dengan begitu sebaiknya kita gunakan let atau 
const ketika mendeklarasikan variabel daripada menggunakan var. */