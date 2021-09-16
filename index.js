window.APP = {};
window.mainPage = document.querySelector('#root');
APP.products = [
	{
		photo: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
		name: 'Avengers: End Game',
		description:'Avengers: End Game este un film american cu supereroi lansat in 2019, bazat pe echipa Razbunatorii din benzile desenate Marvel Comics, produs de Marvel Studios si distribuit de Walt Disney Studios Motion Pictures',
		rating: 8.4,
		year: 2019,
		date: dateNOW()
	},
	{
		photo: 'https://images-na.ssl-images-amazon.com/images/I/81o02XGB7CL._SY445_.jpg',
		name: 'Avengers: Infinity War',
		description:'Este o continuare a filmului din 2012 Razbunatorii si a filmului din 2015 Razbunatorii: Sub semnul lui Ultron, fiind al nouasprezecelea film din Marvel Cinematic Universe (MCU)',
		rating: 9,
		year: 2018,
		date: dateNOW()
	},
	{
		photo: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
		name: 'Avengers: Infinity War - extended version',
		description:'Este o continuare a filmului din 2012 Razbunatorii si a filmului din 2015 Razbunatorii: Sub semnul lui Ultron, fiind al nouasprezecelea film din Marvel Cinematic Universe (MCU)',
		rating: 9,
		year: 2018,
		date: dateNOW()
	}
];

APP.addProducts = (products) => {
	localStorage.setItem("products", JSON.stringify(products));
}
APP.getProducts = () => {
	const products = localStorage.getItem("products");
	return JSON.parse(products);
};

if (APP.getProducts() === null){
	APP.addProducts(APP.products);
}


function startRendering() {
	APP.renderProductList(APP.getProducts());
}


function dateNOW() {
    var date = new Date();
    var yyyy = date.getFullYear();
    var dd = date.getDate();
    var mm = (date.getMonth() + 1);

    if (dd < 10)
        dd = "0" + dd;

    if (mm < 10)
        mm = "0" + mm;

    var cur_day = yyyy + "-" + mm + "-" + dd;

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();

    if (hours < 10)
        hours = "0" + hours;

    if (minutes < 10)
        minutes = "0" + minutes;

    if (seconds < 10)
        seconds = "0" + seconds;

    return cur_day + " " + hours + ":" + minutes + ":" + seconds;

}

window.addEventListener('load', startRendering);
window.addEventListener('load', dateNOW);
