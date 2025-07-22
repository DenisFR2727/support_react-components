import EditUserInput from "./components/EditSaveInput/EditUserInput";
import TodoList from "./components/Todo/Todo";
import ShoppingCart from "./components/FoodBasket/ShoppingCart";

import "./App.css";
import FilterUser from "./components/FilterUser/FilterUser";
import ProductFilter from "./components/FilterUser/FilterSelect";

const users = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Oleh", age: 17 },
  { id: 3, name: "Marta", age: 30 },
  { id: 4, name: "Taras", age: 18 },
];

const products = [
  { id: 1, name: "iPhone 13", category: "Electronics", price: 1000 },
  { id: 2, name: "MacBook Pro", category: "Electronics", price: 2500 },
  { id: 3, name: "Sofa", category: "Furniture", price: 700 },
  { id: 4, name: "Table", category: "Furniture", price: 350 },
  { id: 5, name: "T-Shirt", category: "Clothing", price: 50 },
];
function App() {
  return (
    <div className="App">
      <EditUserInput />
      <TodoList />
      <ShoppingCart />
      <FilterUser users={users} />
      <ProductFilter products={products} />
    </div>
  );
}

export default App;
