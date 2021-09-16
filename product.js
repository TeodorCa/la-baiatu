class Product {
  constructor(photo, name, description, rating, year, date) {

    this.photo = photo;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.year = year;
    this.date = date;
  }
 
  renderProduct() {
    const productList = document.querySelector('#product-list');
    productList.innerHTML += `
			<div class="product font-link">
        <ul>
          <li>
            <img src = "${this.photo}">
            <p class="p-main">Nume: <p class="p-child">${this.name}</p></p>
            <p class="p-main">Descriere: <p class="p-child">${this.description}</p></p>
            <div class="product-div"><p class="p-main">Rating: <p class="p-child">${this.rating}</p></p></div>
            <div class="product-div"><p class="p-main">An: <p class="p-child">${this.year}</p></p></div>
            <div class="product-div"><p class="p-main">Data: <p class="p-child">${this.date}</p></p></div>
          </li>
        </ul>
			</div>
		`;
  }
}
