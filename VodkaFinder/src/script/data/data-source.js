// class DataSource{
//   constructor(onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
//   }

 
//   searchClub(keyword){

// //DataSource.prototype.searchClub = function (keyword) {
//   /* sebelum di rubah ke arrow function
//   const filteredClubs = clubs.filter(function (club) {
//     return club.name.toUpperCase().includes(keyword.toUpperCase());
//   });*/
//    const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
 
//    if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//    } else {
//     this.onFailed(`$(keyword) is not found`);
//    }
 
//    }
// }

//di ubah menggunakan API
// class DataSource {
//   static searchClub(keyword) {
//     return new Promise((resolve, reject) => {
//       const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
      
//       if (filteredClubs.length) {
//         resolve(filteredClubs);
//       } else {
//         reject(`${keyword} is not found`);
//       }
//     });
//   }
// }
class DataSource {
  static searchClub(keyword) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.drinks) {
        return Promise.resolve(responseJson.drinks);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
}
}

export default DataSource;