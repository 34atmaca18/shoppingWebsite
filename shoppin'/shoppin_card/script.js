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
    }
];

const shoppingList = document.getElementById('shopping-products');

createNewProducts = (product) => {
    const myListItem = document.createElement('li');
    myListItem.classList.add('shopping-item');
    myListItem.innerHTML = `
            <img src="../images/${product.img}" alt="${product.name}">
            <div class="items-info">
                <h1 class="name">${product.name}</h1>
                <p class="properties">${product.properties}</p>
                <div class="item-prices">${product.price}</div>
                <div class="increase">
                    <i class="fa-solid fa-trash azalt"></i>
                    <span class="counter">1</span>
                    <i class="fa-solid fa-plus arttir"></i>
                </div>
            </div>
            <i class="fa-solid fa-xmark crossmark"></i>`;
    return myListItem;
}

addtoList = () => {
    mProducts.forEach(product => {
        const myLi = createNewProducts(product);
        shoppingList.appendChild(myLi);
    })
}

addtoList();
addtoList();
addtoList();




document.addEventListener('DOMContentLoaded', function() {
    const secenekler = document.getElementById('secenekler');
    const right = document.getElementById('right');

    window.onload = window.onresize = function() {
        if (window.innerWidth < 1000) {
            right.style.opacity = "0";
        } else {
            right.style.opacity = "1";
        }
    };
    
    secenekler.addEventListener('click', () => {
        if (right.style.opacity === '0') {
            right.style.opacity = '1';
            right.style.transform = 'translateX(0)';
            secenekler.style.color = 'white';
    
        } else {
            right.style.opacity = '0';
            right.style.transform = 'translateX(-100%)';
            secenekler.style.color = 'gray';
        }
    });
});


const decreaseButtons = document.querySelectorAll('.container .shopping-container .shopping-left .shopping-products .shopping-item .items-info .increase .azalt');
const counter = document.querySelectorAll('.container .shopping-container .shopping-left .shopping-products .shopping-item .items-info .increase .counter');
const increaseButtons = document.querySelectorAll('.container .shopping-container .shopping-left .shopping-products .shopping-item .items-info .increase .arttir');
const items = document.querySelectorAll('.container .shopping-container .shopping-left .shopping-products .shopping-item');
const prices = document.querySelectorAll('.container .shopping-container .shopping-left .shopping-products .shopping-item .items-info .item-prices');
const empty = document.getElementById('empty');
const total1 = document.getElementById('price');
const total2 = document.getElementById('last-price');
const crossmark = document.querySelectorAll('.container .shopping-container .shopping-left .shopping-products .shopping-item .crossmark');
const fast = document.getElementById('fast');
const standart = document.getElementById('standart');


let t1,t2;

myVariables = () => {
    t1 = parseFloat(total1.innerText.replace('$','').trim());
    t2 = parseFloat(total2.innerText.replace('$','').trim());
}

decreaseButtons.forEach((minus, index) => {
    minus.addEventListener('click', () => {
        let count = parseInt(counter[index].innerText);
        if (count > 0) {
            count--;
            counter[index].innerText = count;
        }

        if (count === 0) {
            items[index].remove();
        }
        priceCalculate();
    });
});

increaseButtons.forEach((plus, index) => {
    plus.addEventListener('click', () => {
        let count = parseInt(counter[index].innerText);
        count++;
        counter[index].innerText = count;
        priceCalculate();
    });
});

let constPrice = []; 
for(let i = 0; i < items.length; i++) {
    constPrice[i] = parseFloat(prices[i].innerText.replace('$','').trim());
}

totalCalculate = () => {
    var totalTemp = parseFloat(0);
    for(let i = 0; i < items.length; i++) {
        totalTemp += parseFloat(prices[i].innerText.replace('$','').trim());
        total1.innerText = totalTemp.toFixed(2) + '$';
        total2.innerText = totalTemp.toFixed(2) + '$';
    }
}
totalCalculate();

priceCalculate = () => {
    prices.forEach((price, index) => {
        let count = parseInt(counter[index].innerText);
        let totalPrice = count * constPrice[index];
        price.innerText = totalPrice.toFixed(2) + '$';
        totalCalculate();
    }
    );
}
priceCalculate();

empty.addEventListener('click', () => {
    items.forEach(item => {
        item.remove();
    });
    total1.innerText = (parseFloat(0)).toFixed(2) + '$';
    total2.innerText = (parseFloat(0)).toFixed(2) + '$';
    t1 = 0;
    t2 = 0;
});

crossmark.forEach((cross,index) => {
    cross.addEventListener('click', () => {
        items[index].remove();
        let thrash = parseFloat(prices[index].innerText.replace('$','').trim());
        myVariables();
        total1.innerText = (t1 - thrash).toFixed(2) + '$';
        total2.innerText = (t2 - thrash).toFixed(2) + '$';
    })
})

document.addEventListener('DOMContentLoaded', () => {
    myVariables();
    fast.addEventListener('change',() => {
        if (fast.checked) {
            t1 += 13.99;
            standart.disabled = true;
        }
        else {
            t1 -= 13.99;
            standart.disabled = false;
        }
        total1.innerText = t1.toFixed(2) + '$';
        total2.innerText = t1.toFixed(2) + '$';
    })

    standart.addEventListener('change',() => {
        if (standart.checked) {
            fast.disabled = true;
        }
        else{
            fast.disabled = false;
        }
    })
})

setInterval (() => {
    if (total1.innerText === '0.00$') {
        fast.disabled = true;
        standart.disabled = true;
    }
    else {
        fast.disabled = false;
        standart.disabled = false;
    }   
},1000)







