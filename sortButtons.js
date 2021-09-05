// aduagam in pagina HTML elementul de sortare
mainPage.innerHTML += `
<div id="buttons">
  <button id="sortByName">Sorteaza dupa nume</button>
  <button id="sortByRating">Sorteaza dupa rating</button>
  <button id="sortByYear">Sorteaza dupa an</button>
  <button id="sortByDate">Sorteaza dupa data</button>
  <button id="clearAll">Vine garda</button>
</div>
`;


// functia de sortare
function sortPhones(sortType) {
  switch (sortType) {
    // in cazul in care e apasat butonul de sortare dupa pret
    case "sortByRating":
      // sortam dupa pret, modificand vectorul de produse
      // mai intai trebuie sa luam produsele din baza de date
      const sortedArray = APP.getProducts().sort((elem1, elem2) => {
        // daca primul element e mai mic, se returneaza un numar negativ
        // ceea ce insemana ca elementele nu vor fi schimbate
        if (elem1.rating < elem2.rating) {
          return -1;
          // elementele sunt schimbate
        } else if (elem1.rating > elem2.rating) {
          return 1;
          // elementele raman pe loc
        } else {
          return 0;
        }
        // return elem1.price - elem2.price;
      });
      // we put products in our database
      APP.addProducts(sortedArray);
      // then we render the sorted list
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

// cand se face click pe butonul de sortare dupa pret, se apeleaza functia de sortare
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



// Sterg toata lista cand vin sticletii peste noi
const clearAll = document.querySelector("#clearAll");
clearAll.addEventListener('click', function() {
  window.localStorage.clear();
  const clearProductList = document.querySelector('#product-list');
  clearProductList.innerHTML = '';
})
