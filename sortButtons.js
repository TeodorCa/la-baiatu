mainPage.innerHTML += `
<div id="buttons">
  <button id="sortByName">Sorteaza dupa nume</button>
  <button id="sortByRating">Sorteaza dupa rating</button>
  <button id="sortByYear">Sorteaza dupa an</button>
  <button id="sortByDate">Sorteaza dupa data</button>
  <button id="clearAll">Vine garda</button>
</div>
`;


function sortPhones(sortType) {
  switch (sortType) {
    case "sortByRating":
      const sortedArray = APP.getProducts().sort((elem1, elem2) => {
        if (elem1.rating < elem2.rating) {
          return -1;
        } else if (elem1.rating > elem2.rating) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addProducts(sortedArray);
      APP.renderProductList(sortedArray);
      break;

    case "sortByYear":
      const sortedYearArray = APP.getProducts().sort((elem1, elem2) => {
        if (elem1.year < elem2.year) {
          return -1;
        } else if (elem1.year > elem2.year) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addProducts(sortedYearArray);
      APP.renderProductList(sortedYearArray);
      break;

    case "sortByDate":
      const sortedDateArray = APP.getProducts().sort((elem1, elem2) => {
        if (elem1.date < elem2.date) {
          return -1;
        } else if (elem1.date > elem2.date) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addProducts(sortedDateArray);
      APP.renderProductList(sortedDateArray);
      break;

      case "sortByName":
        const sortedNameArray = APP.getProducts().sort((elem1, elem2) => {
          if (elem1.name < elem2.name) {
            return -1;
          } else if (elem1.name > elem2.name) {
            return 1;
          } else {
            return 0;
          }
        });
        APP.addProducts(sortedNameArray);
        APP.renderProductList(sortedNameArray);
        break;
  }
}

const sortByRating = document.querySelector('#sortByRating');
sortByRating.addEventListener('click', function() {
  sortPhones('sortByRating');
})

const sortByYear = document.querySelector('#sortByYear')
sortByYear.addEventListener('click', function() {
  sortPhones('sortByYear');
})

const sortByDate = document.querySelector('#sortByDate')
sortByDate.addEventListener('click', function() {
  sortPhones('sortByDate');
})

const sortByName = document.querySelector('#sortByName')
sortByName.addEventListener('click', function() {
  sortPhones('sortByName');
})

const clearAll = document.querySelector("#clearAll");
clearAll.addEventListener('click', function() {
  window.localStorage.clear();
  const clearProductList = document.querySelector('#product-list');
  clearProductList.innerHTML = '';
})
