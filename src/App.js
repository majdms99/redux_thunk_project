import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListsing from './components/ProductListsing';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListsing />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
