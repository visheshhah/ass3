import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';

function App() {
  const [theme, setTheme] = useState("light");
  const [showCartPage, setshowCartPage] = useState<boolean>(false);

  function handleCartClick(){
    setshowCartPage(showCartPage ? false : true);
  }
  
      useEffect(() => {
          const savedTheme = localStorage.getItem("theme");
          if (savedTheme) {
          setTheme(savedTheme);
      }
      }, [])
  
      function handleClick(){
          const newTheme = theme === "light" ? "dark" : "light";
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme)
      }
  
  return (
    <>
{/*     <ThemeContext value={theme}>
    <CartProvider>

    </CartProvider>
    </ThemeContext> */}

    
    </>
  )
}

export default App
