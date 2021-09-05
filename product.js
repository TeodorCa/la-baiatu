class Product {
  // un produs este creat cu o clasa cu urmtorul constructor:
  constructor(photo, name, description, rating, year, date) {

    this.photo = photo;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.year = year;
    this.date = date;
  }
  // metoda renderProduct adauga produse in interiorul listei de produse
  renderProduct() {
    const productList = document.querySelector('#product-list');
    productList.innerHTML += `
			<div class="product">
			<ul>
			<li>
        <img src = "${this.photo}">
        <p>Nume: ${this.name}</p>
        <p>Descriere: ${this.description}</p>
				<p>Rating: ${this.rating}</p>
				<p>An: ${this.year}</p>
				<p>Data: ${this.date}</p>
				</li>
				</ul>
			</div>
		`;
  }
}
