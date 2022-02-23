import'./components/navBar.js'
import './App.css';

function App() {
  return <>
    <navBar />
    <nav>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>About us</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
    </nav>
  </>
}

export default App;
