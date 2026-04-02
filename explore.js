const productsData = [
    {id:1, name: "Adidas Samba", price: 80.00, category: "Shoes", image: "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2FzbustxV7Bm2WnQjl6UEy9mAhpodvQeTZ8HQm9tl3.png&w=3840&q=100"},
    {id:2, name: "Adidas Runfalcon", price: 60.00, category: "Shoes", image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c875974fbc3844dd9500ade947dc12f7_faec/Runfalcon_5_Running_Shoes_Black_IH7758_db01_00_standard.jpg"},
    {id:3, name: "Nike Air 270", price: 60.00, category: "Shoes", image: "https://img01.ztat.net/article/spp-media-p1/fa9ae684c846414bb63b0a4da477cf75/babb214e360446e0b49def510d4e5527.jpg?imwidth=762&filter=packshot"},
    {id:4, name: "Nike Lunar Roam", price: 60.00, category: "Shoes", image: "https://images.moresneakers.com/nike-lunar-roam-black-safety-orange-hj8999-001-17148105392992.jpg"},

    {id:5, name: "T-Shirt", price: 5.00, category: "Clothing", image: "https://images.podos.io/74tss5hmuhgkiih9zt2eziulhrtdypesz38pnqsubwzbnihf.png.png?w=1080&h=auto"},
    {id:6, name: "Trousers", price: 5.00, category: "Clothing", image: "https://www.cordings.co.uk/media/catalog/product/cache/dd4850ad4231b6306bceadf38a0bbeed/t/r/tr470_khaki-a_1.jpg"},
    {id:7, name: "Socks", price: 4.00, category: "Clothing", image: "https://m.media-amazon.com/images/I/81D8ebRHD9L._AC_UY1000_.jpg"},
    {id:8, name: "Coat", price: 10.00, category: "Clothing", image: "https://cdn.endource.com/image/1d300402f856528bbf41676216193d6d/detail/john-lewis-and-partners-kids-core-parka-coat.jpg?class=800&optimizer=image"},
    {id:9, name: "Scarf", price: 4.00, category: "Clothing", image: "https://assets.burberry.com/is/image/Burberryltd/D4ACA86D-ACA7-4259-8E47-FF9E27254522?$BBY_V3_SL_1$&wid=1501&hei=1500"},



    {id:10, name: "Kindle Paperwhite", price: 90.00, category: "Books", image: "https://media.johnlewiscontent.com/i/JohnLewis/112684172"},
    {id:11, name: "Diary of a Wimpy Kid: Book Bundle", price: 35.00, category: "Books", image: "https://books.boomerangbooks.com.au/Large/002/9789999990002.jpg"},
    {id:12, name: "Harry Potter: Book Bundle", price: 20.00, category: "Books", image: "https://image.smythstoys.com/zoom/191077_7.webp"},
    {id:13, name: "Maze Runner Series: Book Bundle", price: 15.00, category: "Books", image: "https://laburnumhouse.co.uk/wp-content/uploads/2024/12/maze-runner.jpg"},
    {id:14, name: "Sherlock Holmes: Mystery, Mischief, Mayhem", price: 15.00, category: "Books", image: "https://m.media-amazon.com/images/I/71lw6hXz00L.jpg"},
    {id:15, name: "Treehouse Series", price: 20.00, category: "Books", image: "https://m.media-amazon.com/images/I/81KgoY8lImL._AC_UF894,1000_QL80_.jpg"},





  // Lego Cars

    {id:16, name: "Lego Speed Champions F1 McLaren MCL38", price: 23.00, category: " Lego Cars", image: "https://www.hamleys.com/media/catalog/product/l/e/lego_speed_champions_mclaren_f1_team_mcl38_race_car_77251_1023885_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"},
    {id:17, name: "Lego Speed Champions F1 Ferrari SF-24", price: 23.00, category: "Lego Cars", image: "https://www.hamleys.com/media/catalog/product/l/e/lego_speed_champions_ferrari_sf-24_f1_race_car_toy_77242_1023876_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"},
    {id:18, name: "Lego Speed Champions F1 Red Bull RB20", price: 23.00, category: "Lego Cars", image: "https://totalcards.net/cdn/shop/files/77243-prod.jpg?v=1732484085&width=535"},
    {id:19, name: "Lego Speed Champions F1 Mercedes W15", price: 23.00, category: "Lego Cars", image: "https://totalcards.net/cdn/shop/files/77244-prod.jpg?v=1732484343"},
    {id:20, name: "Lego Speed Champions F1 Aston Martin AMR24", price: 23.00, category: "Lego Cars", image: "https://totalcards.net/cdn/shop/files/77245-prod.jpg?v=1732485071&width=535"},
    {id:21, name: "Lego Speed Champions F1 Alpine A524", price: 23.00, category: "Lego Cars", image: "https://www.hamleys.com/media/catalog/product/l/e/lego_speed_champions_bwt_alpine_f1_team_a524_race_car_77248_1023882_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"},
    {id:22, name: "Lego Speed Champions F1 Haas VF-24", price: 23.00, category: "Lego Cars", image: "https://totalcards.net/cdn/shop/files/77250-prod.jpg?v=1732705523&width=535"},
    {id:23, name: "Lego Speed Champions F1 RB VCARB01", price: 23.00, category: "Lego Cars", image: "https://totalcards.net/cdn/shop/files/77246-prod.jpg?v=1732485323&width=535"},
    {id:24, name: "Lego Speed Champions F1 Williams FW-46", price: 23.00, category: "Lego Cars", image: "https://totalcards.net/cdn/shop/files/77249-prod.jpg?v=1732705053&width=535"},
    {id:25, name: "Lego Speed Champions F1 Kick Sauber C44", price: 23.00, category: "Lego Cars", image: "https://totalcards.net/cdn/shop/files/77247-prod.jpg?v=1732485880&width=535"},




    {id:26, name: "Bugatti Vision GT", price: 23.00, category: "Lego Cars", image: "https://www.toytownstores.com/images/lego-77253-bugatti-vision-gt-hyper-sports-car-p7813-21430_image.jpg"},
    {id:27, name: "Mercedes AMG G63 and AMG SL63", price: 40.00, category: "Lego Cars", image: "https://bricksdirect.co.uk/130544-large_default/lego-76924-mercedes-amg-g-63--mercedes-amg-sl-63.webp"},
    {id:28, name: "Ferrari SF90 XX Stradale", price: 23.00, category: "Lego Cars", image: "https://bricksdirect.com/147603-large_default/lego-77254-ferrari-sf90-xx-stradale-sports-car.jpg"},
    {id:29, name: "Ferrari F40", price: 23.00, category: "Lego Cars", image: "https://bricksdirect.com/130961-large_default/lego-76934-ferrari-f40-supercar.webp"},
    {id:30, name: "BMW M Hybrid V8 and M4 GT3", price: 40.00, category: "Lego Cars", image: "https://bricksdirect.com/121219-large_default/lego-76922-bmw-m4-gt3--bmw-m-hybrid-v8-race-cars.webp"},
    {id:31, name: "Lamborghini Revuelto and Huracan STO", price: 40.00, category: "Lego Cars", image: "https://au.bricksdirect.com/142221-large_default/lego-77238-lamborghini-revuelto--huracan-sto.jpg"},
    {id:32, name: "Dodge Challenger SRT Hellcat", price: 23.00, category: "Lego Cars", image: "https://image.smythstoys.com/zoom/248727_6.webp"},






  // Cars

    {id:33, name: "Mercedes W15", price: 15.00, category: "Cars", image: "https://cdn.ck-modelcars.de/docs/bilder/zoom_ck/565761.jpg"},
    {id:34, name: "McLaren MCL38", price: 15.00, category: "Cars", image: "https://cdn.ck-modelcars.de/docs/bilder/zoom_ck/566079.jpg"},
    {id:35, name: "McLaren MCL38 Monaco GP", price: 15.00, category: "Cars", image: "https://cdn.ck-modelcars.de/docs/bilder/zoom_ck/566006.jpg"},
    {id:36, name: "Ferrari SF-24", price: 15.00, category: "Cars", image: "https://cdn.ck-modelcars.de/docs/bilder/zoom_ck/559179.jpg"},
    {id:37, name: "Red Bull RB20", price: 15.00, category: "Cars", image: "https://cdn.ck-modelcars.de/docs/bilder/zoom_ck/556303.jpg"},
    {id:38, name: "Alpine A524", price: 15.00, category: "Cars", image: "https://cdn.ck-modelcars.de/docs/bilder/zoom_ck/566061.jpg"},
    {id:39, name: "Andretti 99X Electric Formula E Gen3", price: 15.00, category: "Cars", image: "https://www.diecastlegends.com/Images/Product/Default/xlarge/SPK6774_1.jpg"},
    {id:40, name: "ABT Lola Yamaha T001 Formula E Gen3", price: 15.00, category: "Cars", image: "http://diecastlegends.com/Images/Product/Default/xlarge/SPK6784_1.jpg"},
    {id:41, name: "Envision Racing Gen3 Evo Formula E Gen3", price: 15.00, category: "Cars", image: "https://www.diecastlegends.com/Images/Product/Default/xlarge/SPK6778_1.jpg"},
    {id:42, name: "Jaguar TCS I-Type 7 Formula E Gen3", price: 15.00, category: "Cars", image: "https://www.diecastlegends.com/Images/Product/Default/xlarge/SPK6781_1.jpg"},
    {id:43, name: "Maserati Tipo Folgore Formula E Gen3", price: 15.00, category: "Cars", image: "https://www.diecastlegends.com/Images/Product/Default/xlarge/SPK6788_1.jpg"},
    {id:44, name: "Nio 333 - Gen2 Formula E car", price: 15.00, category: "Cars", image: "https://www.miniatures-minichamps.com/45926-large_default/nio-fe-team-8-formula-e-season-5-2019-tom-dillmann-minichamps-414180008.jpg"},
    {id:45, name: "DS Automobiles - Gen2 Formula E car", price: 15.00, category: "Cars", image: "https://www.miniatures-minichamps.com/45122-large_default/ds-techeetah-36-formula-e-season-5-2019-andre-lotterer-minichamps-414180036.jpg"},
    {id:46, name: "BMW I.Andretti - Gen2 Formula E car", price: 15.00, category: "Cars", image: "https://www.alpimodel.com/MINICHAMPS/414180027.jpg"},
    {id:47, name: "Envision Virgin - Gen2 Formula E car", price: 15.00, category: "Cars", image: "https://i.ebayimg.com/images/g/CmgAAOSw9m1i1lP7/s-l1200.jpg"},
    {id:48, name: "Mercedes EQ - Gen2 Formula E car", price: 15.00, category: "Cars", image: "https://www.alpimodel.com/MINICHAMPS/414210017.jpg"},
    {id:49, name: "Mahindra Racing - Gen2 Formula E car", price: 15.00, category: "Cars", image: "https://www.miniatures-minichamps.com/51457-thickbox_default/mahindra-racing-94-formula-e-season-5-2019-felix-rosenqvist-minichamps-414180094.jpg"},
    {id:50, name: "Geox Dragon - Gen2 Formula E car", price: 15.00, category: "Cars", image: "https://www.miniatures-minichamps.com/51451-thickbox_default/geox-dragon-6-formula-e-season-5-2019-max-guentehr-minichamps-414180006.jpg"},





  // Tech

  {id:51, name: "iPhone 17", price: 799.00, category: "Smartphone", image: "https://m.media-amazon.com/images/I/31VZYbH1o1L.jpg"},
  {id:52, name: "iPhone Air", price: 999.00, category: "Smartphone", image: "https://static.independent.co.uk/2025/11/18/11/48/iPhone-Air.png"},
  {id:53, name: "iPhone 17e", price: 599.00, category: "Smartphone", image: "https://www.t-mobile.com/dialed-in/_admin/uploads/2026/03/iPhone-17e-2.png"},
  {id:54, name: "iPhone SE", price: 329.00, category: "Smartphone", image: "https://i.ebayimg.com/images/g/Cx8AAeSw6~5ppTAb/s-l1200.png"},
  {id:55, name: "Samsung Galaxy S26 Ultra", price: 1499.00, category: "Smartphone", image: "https://images.samsung.com/uk/smartphones/galaxy-s26-ultra/buy/05_Color-Selection/Color-Selection_Sky-Blue_MO.jpg"},
  {id:56, name: "Samsung Galaxy S26", price: 1049.00, category: "Smartphone", image: "https://static0.anpoimages.com/wordpress/wp-content/uploads/2026/02/s26-plus-black.jpg?q=70&fit=contain&w=421&h=750&dpr=1"},
  {id:57, name: "Google Pixel 10", price: 799.00, category: "Smartphone", image: "https://www.dxomark.com/wp-content/uploads/medias/post-186973/Google-pixel-10-Pro-XL-1024x691.png"},
  {id:58, name: "Google Pixel 10 Pro Fold", price: 1299.00, category: "Smartphone", image: "https://m-cdn.phonearena.com/images/hub/548-wide-two_1200/Google-Pixel-10-Pro-Fold-release-date-price-and-features.jpg"},
  {id:59, name: "Google Pixel 10a", price: 499.00, category: "Smartphone", image: "https://lh3.googleusercontent.com/KEokAR8z9Ekw7hWFO93gx0bweF23QralIhDY_FcUFigfa6SGz34CMR5AoTgNUjr5g9vt8_UR1EWaov0yDjpaK3kIXQjqvYtFqA=w1604-h1200-rw-nu"},






    {id:60, name: "Apple Watch SE3", price: 219.00, category: "Smartwatch", image: "https://static.independent.co.uk/2025/09/16/11/37/Apple-Watch-SE-3.png"},
    {id:61, name: "Apple Watch Series 11", price: 369.00, category: "Smartwatch", image: "https://assets-prd.ignimgs.com/2025/09/09/applewatchseries11-blogroll-1757438561306.jpg"},
    {id:62, name: "Apple Watch Ultra 3", price: 749.00, category: "Smartwatch", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ultra-case-unselect-gallery-1-202509_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=aTVJSEliNW9jb25zalBlTm16VmMxcWpkNHRJWDMzcTg3NWRxV0pydTcvSVp4NXJDNGVkMzRBYjNGWEpDbWxSU1FpSGNzd2tweC9iNG8vcjRUd2FLNUswekI5ZWpRa0o2WWdVYzdzTUdBdFZKUWJBeENTM2lhWlROOVJJQW05cFI"},
    {id:63, name: "Apple Watch SE3 Cellular", price: 289.00, category: "Smartwatch", image: "https://www.apple.com/uk/apple-watch-se-3/images/overview/on-the-go/on_the_go_endframe__er5b5a6u0zee_large.png"},
    {id:64, name: "Apple Watch Series 11 Cellular", price: 469.00, category: "Smartwatch", image: "https://www.apple.com/uk/apple-watch-series-11/images/overview/on-the-go/go_apple_pay__fuvd8qgsuqy6_large.jpg"},
    {id:65, name: "Apple Watch Hermès Ultra 3", price: 1299.00, category: "Smartwatch", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/hermes-ultra-case-unselect-gallery-1-202603_GEO_GB_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=UUc1N2NLY3l4VDVqdGhMTHFwZlk5eWFEV3dRSFRVL1A5Vk5walFCRmM0V2R0QktBZzg5L3pHWWozOFZLT1Z4TkVLRTBBNGJBZnZSQlVqMlZZOHkrNG1mNm9FV0E5YzQwWklCMWNaZUxtdTcxcjBVRyswWG14bEI4WVZBcUIybEZXNHZFZ2h5WXRqZVgyRVJJaFNNdmFR"},
    {id:66, name: "Apple Watch Straps", price: 30.00, category: "Smartwatch", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-bands-og-image-202509?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1772492269963"},
    {id:67, name: "Samsung Galaxy Watch 8", price: 300.00, category: "Smartwatch", image: "https://images.samsung.com/is/image/samsung/p6pim/africa_en/f2507/gallery/africa-en-galaxy-watch8-l330-sm-l330nzsamea-547704319?$Q90_1248_936_F_PNG$"},
    {id:68, name: "Samsung Galaxy Watch 8 Classic", price: 340.00, category: "Smartwatch", image: "https://images.samsung.com/is/image/samsung/p6pim/uk/f2507/gallery/uk-galaxy-watch8-classic-l505-sm-l505fzkaeua-547706261?$Q90_1248_936_F_PNG$"},
    {id:69, name: "Google Pixel Watch 3", price: 240.00, category: "Smartwatch", image: "https://b2c-contenthub.com/wp-content/uploads/2024/08/Pixel-Watch-3-41mm_Active-Porcelain_Front.png?w=1200"},
    {id:70, name: "Google Pixel Watch 4", price: 350.00, category: "Smartwatch", image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/PixelWatch4_SS.png"},
];
  







  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  let params = new URLSearchParams(window.location.search);
  let category = params.get("category");
  
  document.getElementById("title").innerText =
    "More products in " + category;
  
  const box = document.getElementById("products");
  
  productsData.forEach(a=>{
    if(a.category === category){
      box.innerHTML += `
        <div class="product">
          <img src="${a.image}">
          <h3>${a.name}</h3>
          <p>£${a.price}</p>
  
          <button onclick="addToCart(${a.id})">Add to Cart</button>
          <span class="itemCount" id="count-${a.id}">0</span>
        </div>
      `;
    }
  });
  
  function addToCart(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = productsData.find(a=>a.id===id);
    const existing = cart.find(a=>a.id===id);
  
    if(existing){
      existing.qty++;
    }else{
      cart.push({id:item.id,name:item.name,price:item.price,qty:1});
    }
  
    localStorage.setItem("cart",JSON.stringify(cart));
    updateItemCount(id);
    updateCartCount();
  }
  
  function updateItemCount(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(a=>a.id===id);
    document.getElementById("count-"+id).innerText = item ? item.qty : 0;
  }
  
  function updateCartCount(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((s,i)=>s+i.qty,0);
    document.getElementById("cartCount").innerText = count;
  }
  
  productsData.forEach(p=>updateItemCount(p.id));
  updateCartCount();