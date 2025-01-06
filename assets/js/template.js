fetch('./assets/html/nav.html')
	.then(res => res.text())
	.then(data => document.getElementById('nav-template').innerHTML = data)
	.catch(console.error);

fetch('../assets/html/category.html')
.then(res => res.text())
.then(data => document.getElementById('category-template').innerHTML = data)
.catch(console.error);

fetch('../assets/html/trending.html')
	.then(res => res.text())
	.then(data => document.getElementById('trending-template').innerHTML = data)
	.catch(console.error);


fetch('../assets/html/big-section.html')
.then(res => res.text())
.then(data => document.getElementById('big-section-template').innerHTML = data)
.catch(console.error);

fetch('../assets/html/news.html')
.then(res => res.text())
.then(data => document.getElementById('news-template').innerHTML = data)
.catch(console.error);

fetch('../assets/html/article.html')
.then(res => res.text())
.then(data => document.getElementById('article-template').innerHTML = data)
.catch(console.error);

fetch('../assets/html/footer.html')
.then(res => res.text())
.then(data => document.getElementById('footer-template').innerHTML = data)
.catch(console.error);
