"use client";

import React, { useState, useEffect } from 'react';
import { QuoteContext } from './QuoteContext';

export const QuoteProvider = ({ children }) => {
  const [quoteItems, setQuoteItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('aa_quote_items');
    if (saved) {
      try {
        setQuoteItems(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing quote items:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('aa_quote_items', JSON.stringify(quoteItems));
    }
  }, [quoteItems, isLoaded]);

  const addToQuote = (product) => {
    setQuoteItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Automatically open cart when adding an item to improve UX
    setIsCartOpen(true);
  };

  const removeFromQuote = (productId) => {
    setQuoteItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromQuote(productId);
      return;
    }
    setQuoteItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  const totalItemsCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{
        quoteItems,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        clearQuote,
        isCartOpen,
        setIsCartOpen,
        totalItemsCount,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
