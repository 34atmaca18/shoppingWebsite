const middle = document.getElementById('middle');
const barsIcon = document.getElementById('bars');

window.onload = window.onresize = function() {
    if (window.innerWidth < 1000) {
        middle.style.display = "none";
    } else {
        middle.style.display = "block";
    }
};

barsIcon.addEventListener('click', () => {
    if (middle.style.display === "none") {
        middle.style.display = "block";
    } else {
        middle.style.display = "none";
    }
});

const start = document.getElementById('start');
const end = document.getElementById('end');
const products = document.getElementById('products');

let backForward = 0;
let counter = 0;

end.addEventListener('click', () => {
    if (counter < 5) {
        backForward -= (window.innerWidth < 700) ? 200 : 310;
        products.style.transform = `translateX(${backForward}px)`;
        counter += 1;
    }
});

start.addEventListener('click', () => {
    if ((products.style.transform !== `translateX(0px)`) && (counter !== 0)) {
        backForward += (window.innerWidth < 700) ? 200 : 310;
        products.style.transform = `translateX(${backForward}px)`;
        counter -= 1;
    }
});

const mProducts = [
    {
        name: "Sony Playstation 4",
        properties: "PS4 Slim 1TB Game Console with 2 Dualshocks",
        price: "1360$",
        img: "ps4.png"
    },
    {
        name: "Sony Playstation 5",
        properties: "PS5 Slim 1TB Game Console with 2 Dualshocks",
        price: "2000$",
        img: "ps5.png"
    },
    {
        name: "Sony Playstation 4",
        properties: "PS4 Slim 1TB Game Console with 2 Dualshocks",
        price: "1360$",
        img: "ps4.png"
    },
    {
        name: "Sony Playstation 5",
        properties: "PS5 Slim 1TB Game Console with 2 Dualshocks",
        price: "2000$",
        img: "ps5.png"
    },
    {
        name: "Sony Playstation 4",
        properties: "PS4 Slim 1TB Game Console with 2 Dualshocks",
        price: "1360$",
        img: "ps4.png"
    },
    {
        name: "Sony Playstation 5",
        properties: "PS5 Slim 1TB Game Console with 2 Dualshocks",
        price: "2000$",
        img: "ps5.png"
    }
];

const create = (m) => {
    const myListItem = document.createElement('li');
    myListItem.classList.add('product');
    myListItem.innerHTML = `
    <img src="../images/${m.img}" alt="">
    <div class="product-name">
        ${m.name}
    </div>
    <div class="product-info">
        ${m.properties}
    </div>
    <div class="price">${m.price}</div>
    <div class="price-add">
        <a href="#add-to-cart">Add to Cart!</a>
    </div>
    `;
    return myListItem;
}

const append = () => {
    mProducts.forEach(product => {
        products.appendChild(create(product));
    })
}

append();


const liItems = document.getElementsByClassName('product');
const liArray = Array.from(liItems);
const number = document.getElementsByClassName('numb')[0];

liArray.forEach(li => {
    const priceAddDiv = li.querySelector('.price-add');
    const addToCartLink = priceAddDiv.querySelector('a[href="#add-to-cart"]');
    addToCartLink.addEventListener('click',() => {
        if (addToCartLink.textContent === 'Added to Cart!') {
            return; 
        }
        addToCartLink.textContent = 'Added to Cart!';
        addToCartLink.style.fontSize = "14px";
        addToCartLink.style.backgroundColor = "rgba(80, 80, 80, 0.337)";
        addToCartLink.style.border = "none";
        addToCartLink.style.color = "rgba(0, 0, 0, 0.753)";
        addToCartLink.style.cursor = "auto";
        let numm = parseInt(number.innerHTML);
        numm += 1;
        number.innerHTML = numm;
    })
});



