const reviews = [
    {
        id: 1,
        name: 'Blueberry cake',
        img: './cake-1.jpg',
        text:
            'An exquisite dessert dish crafted using fresh blueberries, delicate pastry, and a luscious filling. Melting in your mouth, it combines the sweetness of ripe berries with the crispy texture of the crust, creating a perfect balance of flavors and textures. This refined treat is a wonderful way to indulge in the natural sweetness of blueberries in the most elegant and appetizing form.',
    },
    {
        id: 2,
        name: 'Berry Ice Cream',
        img: './cake-2.jpg',
        text:
            'a refreshing delight that combines velvety ice cream with a vibrant and juicy medley of fresh berries. Each spoonful of this dessert offers sweet indulgence with hints of tartness, creating a perfect blend of smoothness and texture. This refreshing treat delivers the unparalleled taste of summer in every serving.'
    },
    {
        id: 3,
        name: 'Chocolate Sponge Cake',
        img: './cake-3.jpg',
        text: 'An exquisite dessert pie with a tender texture and rich chocolate flavor. Its airy structure and deep aroma seem to melt in the mouth, leaving an indescribable feeling of satisfaction. This classic dessert entices with its chocolate intensity and becomes a true indulgence for sweet enthusiasts.an exquisite dessert pie with a tender texture and rich chocolate flavor. Its airy structure and deep aroma seem to melt in the mouth, leaving an indescribable feeling of satisfaction. This classic dessert entices with its chocolate intensity and becomes a true indulgence for sweet enthusiasts.'
    },
    {
        id: 4,
        name: 'Pie with Ice Cream and Caramel',
        img: './cake-4.jpg',
        text: 'Is an incredibly delicious combination of crispy layered pastry, chilled ice cream, and delicate caramel drizzle. Each bite of this dessert is a celebration for your taste buds, where cold and hot, sweet and salty create a captivating symphony of flavors and textures. This pie delivers true delight and becomes a highlight of any gastronomic experience.'
    }

];

const img = document.getElementById('cake-img');
const nameCake = document.getElementById('name-cake');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showCake();
});

const showCake = (cake) => {
    const item = reviews[currentItem];
    img.src = item.img;
    nameCake.textContent = item.name;
    info.textContent = item.text;
}

// show next cake

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showCake();
});

// show prev cake

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showCake();
});

// show random
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showCake();
})