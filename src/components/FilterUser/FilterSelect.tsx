import { useMemo, useState } from "react";

interface ProductsProps {
  id: number;
  name: string;
  category: string;
  price: number;
}

export default function ProductFilter({
  products,
}: {
  products: ProductsProps[];
}) {
  const [categoryValue, setCategoryValue] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const categorys = ["All", "Electronics", "Furniture", "Clothing"];

  const changeValueCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setCategoryValue(e.target.value);
  };
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    switch (categoryValue) {
      case "Electronics":
      case "Furniture":
      case "Clothing":
        filtered = filtered.filter((prod) => prod.category === categoryValue);
        break;
      case "All":
      default:
        break;
    }

    if (maxPrice !== null) {
      filtered = filtered.filter((prod) => prod.price <= maxPrice);
    }

    return filtered;
  }, [maxPrice, products, categoryValue]);

  return (
    <div>
      <select
        name=""
        id=""
        value={categoryValue}
        onChange={changeValueCategory}
      >
        {categorys.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="number"
        onChange={(e) => setMaxPrice(e.target.value ? +e.target.value : null)}
      />
      <div className="products">
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} style={{ display: "flex", gap: "50px" }}>
              <p style={{ width: "100px" }}>{product.name}</p>
              <p>{product.price}$</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//  Повинно бути:

//     Випадаючий список (select) для вибору категорії:

//         Значення: All, Electronics, Furniture, Clothing

//     Інпут для введення максимальної ціни.

//     Виведення відфільтрованого списку товарів відповідно до вибраної категорії та ціни.

// 🔧 Логіка:

//     Якщо вибрано "All" → фільтруй тільки за ціною.

//     Якщо задана максимальна ціна → показуй тільки товари з ціною ≤ maxPrice.

//     Якщо поле ціни пусте → показуй усі товари (або тільки по категорії, якщо обрано не "All").

// 🧠 Поради:

//     Використай useState для збереження selectedCategory та maxPrice.

//     Можеш обчислювати filteredProducts прямо в тілі компонента або в useMemo.
