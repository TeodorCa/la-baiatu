// aduagam in HTML formularul de adaugare produs
mainPage.innerHTML += `
  <form id="addPhone">
    <input type="url" name="moviePhoto" placeholder="Link Imagine" ><br>
    <input type="text" name="movieName" placeholder="Nume" ><br>
    <input type="text" name="movieDescription" placeholder="Descriere" ><br>
    <input type="number" name="movieRating" placeholder="Rating" ><br>
    <input type="number" name="movieYear" placeholder="An" ><br>

    <input type="submit" value="Adauga film"><br>
  </form>
`;

function addFormFunctionality() {
  // adaugarea produsului
  function addProduct(photoP, nameP, descriereP, ratingP, yearP, dateP) {
    // preluam produsele din localStorage
    const products = APP.getProducts();
    // modificarea vectorului de produse
    products.push({
      photo: photoP,
      name: nameP,
      description: descriereP,
      rating: ratingP,
      year: yearP,
      date: dateP
    });
    // adaugam vectorul in localStorage
    APP.addProducts(products);

    // reafisam produsele
    APP.renderProductList(products);
  }

  const form = document.querySelector('#addPhone');
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii
    event.preventDefault();
    // luam numele si pretul introduse de utilizator
    // const picture = event.target.phonePicture.value;
    const photo = event.target.moviePhoto.value;
    const name = event.target.movieName.value;
    const description = event.target.movieDescription.value;
    const rating = Number(event.target.movieRating.value);
    const year = Number(event.target.movieYear.value);
    const date = dateNOW();
    // apelam functia de adaugare a produsului
    addProduct(photo, name, description, rating, year, date);
  }
}

// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);
