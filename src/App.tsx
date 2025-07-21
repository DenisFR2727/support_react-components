import EditUserInput from "./components/EditSaveInput/EditUserInput";
import TodoList from "./components/Todo/Todo";
import ShoppingCart from "./components/FoodBasket/ShoppingCart";

import "./App.css";
import FilterUser from "./components/FilterUser/FilterUser";

const users = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Oleh", age: 17 },
  { id: 3, name: "Marta", age: 30 },
  { id: 4, name: "Taras", age: 18 },
];

function App() {
  return (
    <div className="App">
      <EditUserInput />
      <TodoList />
      <ShoppingCart />
      <FilterUser users={users} />
    </div>
  );
}

export default App;
