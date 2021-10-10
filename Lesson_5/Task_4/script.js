let products = [
    {
        category_id: 1,
        name: 'Обувь',
        category_products: [
            {
                product_id: 10,
                p_name: 'Сапоги',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 }],
                colors: ['красный', 'синий', 'зеленый', 'чёрный', 'белый'],
                price: 3000
            },
            {
                product_id: 11,
                p_name: 'Туфли',
                sizes: [
                    { s_name: 34, s_amount: 8 },
                    { s_name: 36, s_amount: 12 },
                    { s_name: 40, s_amount: 9 }],
                colors: ['красный', 'синий', 'фиолетовый', 'чёрный', 'белый'],
                price: 4500
            },
            {
                product_id: 12,
                p_name: 'Кросовки',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 },
                    { s_name: 42, s_amount: 3 }],
                colors: ['красный', 'розовый', 'оранжевый', 'чёрный', 'белый'],
                price: 2647
            }]
    },
    {
        category_id: 2,
        name: 'Костюмы',
        category_products: [
            {
                product_id: 20,
                p_name: 'Пиджак',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 }],
                colors: ['красный', 'коричневый', 'чёрный', 'белый'],
                price: 4568
            },
            {
                product_id: 21,
                p_name: 'Кардиган',
                sizes: [
                    { s_name: 34, s_amount: 8 },
                    { s_name: 36, s_amount: 12 },
                    { s_name: 40, s_amount: 9 }],
                colors: ['красный', 'синий', 'фиолетовый', 'чёрный', 'белый'],
                price: 3235
            }]
    },
    {
        category_id: 3,
        name: 'Брюки',
        category_products: [
            {
                product_id: 30,
                p_name: 'Брюки',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 }],
                colors: ['красный', 'синий', 'зеленый', 'чёрный', 'белый'],
                price: 1547
            },
            {
                product_id: 31,
                p_name: 'Бриджи',
                sizes: [
                    { s_name: 34, s_amount: 8 },
                    { s_name: 36, s_amount: 12 },
                    { s_name: 40, s_amount: 9 }],
                colors: ['красный', 'синий', 'фиолетовый', 'чёрный', 'белый'],
                price: 6547
            },
            {
                product_id: 32,
                p_name: 'Легинсы',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 },
                    { s_name: 42, s_amount: 3 }],
                colors: ['красный', 'розовый', 'оранжевый', 'чёрный', 'белый'],
                price: 3254
            }]
    },
    {
        category_id: 4,
        name: 'Футболки',
        category_products: [
            {
                product_id: 40,
                p_name: 'Поло',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 }],
                colors: ['красный', 'синий', 'зеленый', 'чёрный', 'белый'],
                price: 1546
            },
            {
                product_id: 41,
                p_name: 'Укороченый топ',
                sizes: [
                    { s_name: 34, s_amount: 8 },
                    { s_name: 36, s_amount: 12 },
                    { s_name: 40, s_amount: 9 }],
                colors: ['красный', 'синий', 'фиолетовый', 'чёрный', 'белый'],
                price: 654
            },
            {
                product_id: 43,
                p_name: 'Боди',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 },
                    { s_name: 42, s_amount: 3 }],
                colors: ['красный', 'розовый', 'оранжевый', 'чёрный', 'белый'],
                price: 544
            }]
    },
    {
        category_id: 5,
        name: 'Головные уборы',
        category_products: [
            {
                product_id: 50,
                p_name: 'Шляпа',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 }],
                colors: ['красный', 'синий', 'зеленый', 'чёрный', 'белый'],
                price: 1547
            },
            {
                product_id: 51,
                p_name: 'Шапка',
                sizes: [
                    { s_name: 34, s_amount: 8 },
                    { s_name: 36, s_amount: 12 },
                    { s_name: 40, s_amount: 9 }],
                colors: ['красный', 'синий', 'фиолетовый', 'чёрный', 'белый'],
                price: 1567
            },
            {
                product_id: 52,
                p_name: 'Бейсболка',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 },
                    { s_name: 42, s_amount: 3 }],
                colors: ['красный', 'розовый', 'оранжевый', 'чёрный', 'белый'],
                price: 3254
            },
            {
                product_id: 43,
                p_name: 'Берет',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 },
                    { s_name: 42, s_amount: 3 }],
                colors: ['красный', 'розовый', 'оранжевый', 'чёрный', 'белый'],
                price: 3245
            }]
    },
    {
        category_id: 6,
        name: 'Платья',
        category_products: [
            {
                product_id: 60,
                p_name: 'Вечернее платье',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 }],
                colors: ['красный', 'синий', 'зеленый', 'чёрный', 'белый'],
                price: 1547
            },
            {
                product_id: 61,
                p_name: 'Мини юбка',
                sizes: [
                    { s_name: 34, s_amount: 8 },
                    { s_name: 36, s_amount: 12 },
                    { s_name: 40, s_amount: 9 }],
                colors: ['красный', 'синий', 'фиолетовый', 'чёрный', 'белый'],
                price: 6547
            },
            {
                product_id: 62,
                p_name: 'Юбка',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 },
                    { s_name: 42, s_amount: 3 }],
                colors: ['красный', 'розовый', 'оранжевый', 'чёрный', 'белый'],
                price: 3254
            }]
    },
    {
        category_id: 7,
        name: 'Верхняя одежда',
        category_products: [
            {
                product_id: 70,
                p_name: 'Куртка',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 }],
                colors: ['красный', 'синий', 'зеленый', 'чёрный', 'белый'],
                price: 15473
            },
            {
                product_id: 71,
                p_name: 'Плащ',
                sizes: [
                    { s_name: 34, s_amount: 8 },
                    { s_name: 36, s_amount: 12 },
                    { s_name: 40, s_amount: 9 }],
                colors: ['красный', 'синий', 'фиолетовый', 'чёрный', 'белый'],
                price: 65474
            },
            {
                product_id: 72,
                p_name: 'Пальто',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 },
                    { s_name: 42, s_amount: 3 }],
                colors: ['красный', 'розовый', 'оранжевый', 'чёрный', 'белый'],
                price: 32542
            }]
    },
    {
        category_id: 8,
        name: 'Нижнее бельё',
        category_products: [
            {
                product_id: 80,
                p_name: 'Трусы',
                sizes: [
                    { s_name: 36, s_amount: 10 },
                    { s_name: 38, s_amount: 23 },
                    { s_name: 40, s_amount: 14 }],
                colors: ['красный', 'синий', 'зеленый', 'чёрный', 'белый'],
                price: 1547
            },
            {
                product_id: 81,
                p_name: 'Лифчик',
                sizes: [
                    { s_name: 34, s_amount: 8 },
                    { s_name: 36, s_amount: 12 },
                    { s_name: 40, s_amount: 9 }],
                colors: ['красный', 'синий', 'фиолетовый', 'чёрный', 'белый'],
                price: 2647
            }]
    }
];

let catalog = document.getElementById('catalog');

function nameCategory(categories) {
    for (let category of categories) {
        let category_block = document.createElement('div');
        let category_block_header = document.createElement('h1');
        category_block_header.style.textAlign = 'center';
        category_block_header.innerText = category?.name;
        category_block.append(category_block_header);
        catalog.append(category_block);
        let products = category?.category_products;
        for (product of products) {
            let product_block = document.createElement('div');
            let product_block_header = document.createElement('h2');
            let size = '';
            for (let s of product?.sizes) {
                size += s?.s_name + ', ';
            };
            let color = '';
            for (let c of product?.colors) {
                color += c + ', ';
            };
            product_block_header.innerText = `Наименование: "${product?.p_name}" Размеры: ${size} Цвета: ${color} Цена: ${product?.price} рублей`;
            product_block.append(product_block_header);
            category_block.append(product_block);
        }
    }
};

nameCategory(products);