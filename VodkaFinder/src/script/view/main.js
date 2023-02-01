import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main =  () => { //sebelum di rubah ke arrow function= const main = function () {
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('club-list');

  //sebelum di ubah ke method searchclub menjadi static
  // const onButtonSearchClicked = () => { //sebelum di rubah ke arrow function= const onButtonSearchClicked = function () {
  //   const dataSource = new DataSource(renderResult, fallbackResult);
  //   dataSource.searchClub(searchElement.value);
  // };


  //sesudah di ubah ke static
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => { //sebelum di rubah ke arrow function= const renderResult = function (results) {
    clubListElement.clubs = results;
    //di hapus
    // results.forEach(club => { //sebelum di rubah ke arrow function= results.forEach(function (club) {
    //   const {name, fanArt, description} = club;
    //   const clubElement = document.createElement('div');
    //   clubElement.setAttribute('class', 'club');

      //di pindahkan ke club-item
      // //clubElement.innerHTML = `
      //   <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
      //   <div class="club-info">
      //     <h2>${name}</h2>
      //     <p>${description}</p>
      //   </div>
      // `;

      //di hapus
      //clubListElement.appendChild(clubElement);
    //};
  };

  const fallbackResult = message => { //sebelum di rubah ke arrow function= const fallbackResult = function (message) {
    clubListElement.renderError(message);
    // clubListElement.innerHTML = ''; //di pindahkan ke club-list
    // clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;