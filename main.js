const contItems = document.getElementById('contitems');
const contItemsInner = document.getElementById("items");

let products = [{
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F4a459cca-cbb9-45e7-92dd-e637f88d336e_Thumb.jpeg&w=384&q=50',
        title: 'სულსწრაფი ფასი',
        name: 'Samsung Galaxy S24 S921B 5G 8/128GB Onyx Black',
        oldPrice: 2099,
        price: 1999
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F39596d5f-c29c-4184-98e1-fd43a3a70cf5_Thumb.jpeg&w=384&q=50',
        title: 'სულსწრაფი ფასი',
        name: 'OnePlus 12R 5G16/256GB Iron Gray',
        oldPrice: 1899,
        price: 1749
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0177562_google-pixel-7-pro-5g-12128gb-obsidian_550.jpeg&w=384&q=50',
        title: 'სულსწრაფი ფასი',
        name: 'Google Pixel 7 Pro 5G 12/128GB Obsidian',
        oldPrice: 1499,
        price: 1699
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1c3d6f15-6548-4a73-912b-c1869e1f92a8_Thumb.jpeg&w=384&q=50',
        title: 'სულსწრაფი ფასი',
        name: 'Samsung Galaxy S24 S921B 5G 8/128GB Onyx Black',
        oldPrice: 1399,
        price: 1549
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fbd891805-8572-4d14-9d04-4b0da87cc9ee_Thumb.jpeg&w=384&q=50',
        title: 'სულსწრაფი ფასი',
        name: 'Marshall Major IV Bluetooth Black',
        oldPrice: 329,
        price: 389
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fad69cbea-f84b-4228-8afb-8cd93819cb1d_Thumb.jpeg&w=384&q=50',
        title: 'სულსწრაფი ფასი',
        name: 'Xiaomi Smart Air Fryer 6.5L Black',
        oldPrice: 289,
        price: 339
    },
]

products.forEach(product => {
    contItemsInner.innerHTML += `
    <div class= "cards">
        <img src="${product.image} alt="">
        <p> ${product.title}</p>
        <div class="price">
        <h1>${product.price}₾<h1>
        <h1 style="text-decoration: line-through; color: brown; font-size: 16px;">${product.oldPrice}₾</ჰ>
        </div>
        <h2>${product.name}</h2>
        <button class="first-btn"><i class="bi bi-bag-fill"></i><button>
        <button class="two-btn">დამატება<button>
    </div>`
})