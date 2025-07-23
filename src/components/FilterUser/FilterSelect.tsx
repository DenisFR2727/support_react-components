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
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categorys = ["All", "Electronics", "Furniture", "Clothing"];

  const changeValueCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setCategoryValue(e.target.value);
  };
  const filteredProducts = useMemo(() => {
    let filtered = [...products]; // якщо в майбутньому хочемо мутувати масив ( краще зробити копію)

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
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [maxPrice, products, categoryValue, searchTerm]);

  const groupProducts = useMemo(() => {
    return filteredProducts.reduce<Record<string, ProductsProps[]>>(
      (acc, next) => {
        const groupCategory = next.category;
        (acc[groupCategory] ||= []).push(next);
        return acc;
      },
      {}
    );
  }, [filteredProducts]);

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
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="products">
        {Object.entries(groupProducts).map(([categoryValue, products]) => (
          <section key={categoryValue}>
            <h3>{categoryValue}</h3>
            <ul>
              {products.map((product) => (
                <li key={product.id} style={{ display: "flex", gap: "50px" }}>
                  <p style={{ width: "100px" }}>{product.name}</p>
                  <p>{product.price}$</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
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
