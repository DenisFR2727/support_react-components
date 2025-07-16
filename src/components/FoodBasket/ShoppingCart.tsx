import { useState } from 'react';
import './ShoppingCart.css';

interface IProducts {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const initialProducts: IProducts[] = [
    { id: 1, name: 'Apple', price: 10, quantity: 1 },
    { id: 2, name: 'Banana', price: 5, quantity: 3 },
    { id: 3, name: 'Orange', price: 8, quantity: 2 },
];

export default function ShoppingCart() {
    const [products, setProducts] = useState<IProducts[]>(initialProducts);
    const totalSum = products.reduce(
        (acc, next) => acc + next.price * next.quantity,
        0
    );

    const decrement = (productId: number) => {
        const updateCountDecrement = products.map((product) =>
            product.id === productId && product.quantity > 1
                ? { ...product, quantity: product.quantity - 1 }
                : product
        );
        setProducts(updateCountDecrement);
    };
    const increment = (productId: number) => {
        const updatedProducts = products.map((product) =>
            product.id === productId
                ? {
                      ...product,

                      quantity: product.quantity + 1,
                  }
                : product
        );
        setProducts(updatedProducts);
    };

    return (
        <div className="list">
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="product">
                        <p className="name">
                            <span>Name</span> {product.name}
                        </p>
                        <div className="product-price">
                            <span>Price</span>
                            <span>{product.price * product.quantity}</span>
                        </div>
                        <div>
                            <span>Quantity</span>
                            <div className="quantity">
                                <button onClick={() => decrement(product.id)}>
                                    -
                                </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product.id)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
                <div>Total: {totalSum}</div>
            </ul>
        </div>
    );
}

// Завдання #7: Компонент Кошика покупок
// 🔸 Умова:

// Створи компонент ShoppingCart, який:

//     Має список продуктів з такими полями:

//         id (number)

//         name (string)

//         price (number)

//         quantity (number)

//     Виводить список продуктів у таблиці або списку:

//         Назва товару

//         Ціна за одиницю

//         Кількість

//         Загальна сума по товару (ціна × кількість)

//     Внизу виводиться загальна сума всіх товарів.

//     Користувач може змінювати кількість товару кнопками "+" і "−".

// 📌 Обмеження:

//     Не потрібно додавати або видаляти товари.

//     Не допускай кількість < 1.

//     Усе в одному компоненті.

//     Типізація — обов'язково (interface Product тощо).

//     Додатково: можна стилізувати кольором товари з кількістю більше 5.

// 📋 Приклад даних:

// Це чудове завдання на:

//     стан (useState)

//     мапінг масиву

//     обробку подій

//     обчислення total суми

//     типізацію
