import "./App.css";
import groceryCartImg from "./assets/grocery-cart.png"

function App() {
  return (
    <main className="App">
      <div>
        <div>
          <h4 className="success">You are DONE!!</h4>
          <div className="header">
            <h1>Shopping List</h1>
            <img src={groceryCartImg} alt="animated grocery cart" />
            <input type="text" placeholder="Insert an item" />
          </div>
        </div>

        <ul >
          <li>
            <div className="container">
              <input type="checkbox" />
              <p>Carrot</p>
            </div>
            <div>
              <button className="remove-button">x</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;