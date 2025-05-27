import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  vat: number;
}

interface CartItem extends Product {
  quantity: number;
}

export const FiscalRecorder: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    calculateTotal();
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce((sum, item) => {
      return sum + (item.price * item.quantity * (1 + item.vat / 100));
    }, 0);
    setTotal(newTotal);
  };

  const processPayment = () => {
    // Logica per elaborare il pagamento e stampare scontrino fiscale
    console.log('Elaborazione pagamento:', { cart, total });
    alert(`Pagamento processato: €${total.toFixed(2)}`);
    
    // Reset del carrello
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="fiscal-recorder">
      <h1>Registratore Fiscale</h1>
      
      <div className="product-grid">
        <h2>Prodotti</h2>
        {/* I prodotti verrebbero caricati dinamicamente */}
      </div>
      
      <div className="cart">
        <h2>Carrello</h2>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            {item.name} x {item.quantity} - €{(item.price * item.quantity).toFixed(2)}
          </div>
        ))}
        
        <div className="total">
          <strong>Totale: €{total.toFixed(2)}</strong>
        </div>
        
        <button 
          onClick={processPayment}
          disabled={cart.length === 0}
          className="payment-button"
        >
          Processa Pagamento
        </button>
      </div>
    </div>
  );
};

export default FiscalRecorder;