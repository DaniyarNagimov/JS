/* Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
    Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
    Пустая корзина должна выводить строку «Корзина пуста»;
    Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */


let basket = document.getElementById('basket');

let basketPrice = [
    { prodcut_id: 1, name: 'Туфли', amount: 2, price: 3000 },
    { prodcut_id: 2, name: 'Пиджак', amount: 1, price: 5000 },
    { prodcut_id: 3, name: 'Брюки', amount: 1, price: 1999 },
    { prodcut_id: 4, name: 'Футболка', amount: 3, price: 567 },
    { prodcut_id: 5, name: 'Шляпа', amount: 1, price: 1237 }
];

if (basketPrice.count == 0) {
    let emptyBasket = document.createElement('h1');
    emptyBasket.innerText('Корзина пуста!');
} else {
    generationBasket(basketPrice);
    countBasket(basketPrice);
}

function countBasket(bask) {
    let retText = document.createElement('div');
    let sumBasket = 0;
    let count = 0;
    for (let position of bask) {
        count += position?.amount
        sumBasket += position?.amount * position?.price;
    }
    retText.insertAdjacentHTML('beforeend',
        `<h3>В корзине ${count} товаров на сумму ${sumBasket} рублей</h3>`);
    return basket.append(retText);
}

function generationBasket(mass) {
    let items = document.createElement('div');
    for (let position of mass) {
        let item = document.createElement('div');
        item.innerText = `Наименование: "${position?.name}" Цена: ${position?.price} рублей Количество: ${position?.amount}`;
        items.append(item);
    }
    return basket.append(items);
}
