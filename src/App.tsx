import './App.css'
import ProductGrid from './features/ProductDashboard/components/ProductGrid'
import { useProducts } from './features/ProductDashboard/hooks/useProduct';

function App() {
  const { products } = useProducts();

  return (
    <>
     <ProductGrid products={products} />  
    </>
  )
}

export default App
