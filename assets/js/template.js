fetch('./assets/html/nav.html')
	.then(res => res.text())
	.then(data => document.getElementById('nav-template').innerHTML = data)
	.catch(console.error);
	
// fetch('../html/home.html')
// .then(res => res.text())
// .then(data => document.getElementById('home-template').innerHTML = data)
// .catch(console.error);

// fetch('../assets/html/category.html')
// .then(res => res.text())
// .then(data => document.getElementById('category-template').innerHTML = data)
// .catch(console.error);

fetch('../assets/html/trending.html')
	.then(res => res.text())
	.then(data => document.getElementById('trending-template').innerHTML = data)
	.catch(console.error);