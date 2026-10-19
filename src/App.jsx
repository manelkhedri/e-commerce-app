import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="store-header">
        <img
         src="/logo.jpg"
         alt="THREADS CROCHET LOGO"
         className='store-logo'
         />
        <div className='header-text'>
          <h1>GOLDEN HANDS</h1>
          <p>Handemade with love, crafted stitch by stitch.</p>
        </div>
      
      </header>

      <main>
        <CartSummary/>
        <ProductList />
      </main>
    </div>
  );
}

export default App;

