// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
// tot in APP cream un vector de obiecte, numit products
APP.products = [
	{
		// un film are descriere, imagine, an, rating, data adaugarii
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
		description:'ste o continuare a filmului din 2012 Razbunatorii si a filmului din 2015 Razbunatorii: Sub semnul lui Ultron, fiind al nouasprezecelea film din Marvel Cinematic Universe (MCU)',
		rating: 9,
		year: 2018,
		date: dateNOW()
	}
];
// pentru stocare persistenta(sa nu se mai piarda datele la refresh), folosim localStorage
// avand in vedere ca vom face de mai multe ori operatiile de introducere a datelor in localStorage
// si de extragere a datelor din localStorage, vom face doua functii

// pentru a adauga vectorul de produse in local storage, trebuie mai intai sa il facem string
// pentru cheia "products", vom avea valoarea corespunzatoare, dar facuta string
APP.addProducts = (products) => {
	localStorage.setItem("products", JSON.stringify(products));
}
// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam
APP.getProducts = () => {
	const products = localStorage.getItem("products");
	return JSON.parse(products);
};
// daca nu avem nimic in baza de date
// introducem vectorul de produse in localStorage
if (APP.getProducts() === null){
	APP.addProducts(APP.products);
}


function startRendering() {
	// "randam" lista de produse, trimitand ca parametru APP.products (incarcat mai sus)
	APP.renderProductList(APP.getProducts());
}


function dateNOW() {
	// functie pentru a face data sa fie de forma YYYY-MM-DD HH:MM:SS

    var date = new Date();
    var yyyy = date.getFullYear();
    var dd = date.getDate();
		// NU INTELEG DE CE +1
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



// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);
window.addEventListener('load', dateNOW);
