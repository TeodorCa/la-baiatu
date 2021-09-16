mainPage.innerHTML += `
	<h2>Lista filme</h2>
	<div id="product-list">
	</div>
`;

APP.renderProductList = (productArray) => {
	const productList = document.querySelector('#product-list');
	productList.innerHTML = '';
	productArray.forEach( (elem) => {
		product = new Product(elem.photo, elem.name, elem.description, elem.rating, elem.year, elem.date);
		product.renderProduct();
	});
}
