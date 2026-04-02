const productsData = [
    {id:1, name: "Shoes", price: 50.00, category: "Shoes", image: "https://static.ftshp.digital/img/p/1/3/1/7/6/1/0/1317610-full_product.jpg"},
    {id:2, name: "Clothing", price: 8.00, category: "Clothing", image: "https://t3.ftcdn.net/jpg/02/85/94/70/360_F_285947084_ePYjQpzCaQq6Vb2GEoYGZs8MNYkUhNqB.jpg"},
    {id:3, name: "Books", price: 5.00, category: "Books", image: "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200"},
    {id:4, name: "Lego Cars", price: 23.00, category: "Lego Cars", image: "https://www.lego.com/cdn/cs/set/assets/bltb8e18c33e2c4ca35/76898.jpg"},
    {id:5, name: "Cars", price: 15.00, category: "Cars", image: "https://cdn.webshopapp.com/shops/190718/files/428212083/ferrari-racing-143-scale-bburago-team-scuderia-sai.jpg"},
    {id:6, name: "Kindle", price: 90.00, category: "Books", image: "https://media.johnlewiscontent.com/i/JohnLewis/112684172"},
    {id:7, name: "Smartphone", price: 800.00, category: "Smartphone", image: "https://media.johnlewiscontent.com/i/JohnLewis/114323040?fmt=auto&$background-off-white$"},
    {id:8, name: "Smartwatch", price: 250.00, category: "Smartwatch", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPt9vhfI6CkaUh9uJpugWs8rr0sydj_BDaOg&s"},
];



const box = document.getElementById("products");

productsData.forEach(a => {
    box.innerHTML+=`
    <div class="product">
        <img src="${a.image}">
        <h3>${a.name}</h3>
        <p>£${a.price}</p>
        <button onclick="exploreCategory('${a.category}')">Explore</button>
    </div>
    `;
});




function exploreCategory(category) {
    window.location.href = "explore.html?category="+category;
}



function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((s, i)=> s+i.qty, 0);
    document.getElementById("cartCount").innerText = count;
}



updateCartCount();