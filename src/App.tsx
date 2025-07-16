import EditUserInput from './components/EditSaveInput/EditUserInput';
import TodoList from './components/Todo/Todo';

import './App.css';
import ShoppingCart from './components/FoodBasket/ShoppingCart';
function App() {
    return (
        <div className="App">
            <EditUserInput />
            <TodoList />
            <ShoppingCart />
        </div>
    );
}

export default App;
