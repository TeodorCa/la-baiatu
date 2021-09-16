mainPage.innerHTML += `
  <form id="add-phone">
    <input type="url" name="moviePhoto" placeholder="Link Imagine" ><br>
    <input type="text" name="movieName" placeholder="Nume" ><br>
    <input type="text" name="movieDescription" placeholder="Descriere" ><br>
    <input type="number" name="movieRating" placeholder="Rating" ><br>
    <input type="number" name="movieYear" placeholder="An" ><br>

    <input type="submit" value="Adauga film" id="add-film"><br>
  </form>
`;

function addFormFunctionality() {
  function addProduct(photoP, nameP, descriereP, ratingP, yearP, dateP) {
    const products = APP.getProducts();
    products.push({
      photo: photoP,
      name: nameP,
      description: descriereP,
      rating: ratingP,
      year: yearP,
      date: dateP
    });
    APP.addProducts(products);

    APP.renderProductList(products);
  }

  const form = document.querySelector('#add-phone');
  form.onsubmit = function(event) {
    event.preventDefault();
    const photo = event.target.moviePhoto.value;
    const name = event.target.movieName.value;
    const description = event.target.movieDescription.value;
    const rating = Number(event.target.movieRating.value);
    const year = Number(event.target.movieYear.value);
    const date = dateNOW();
    addProduct(photo, name, description, rating, year, date);
  }
}

window.addEventListener('load', addFormFunctionality);
