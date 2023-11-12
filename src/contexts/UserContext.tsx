/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  fullName?: string;
  email?: string;
}

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity?: number;
  url?: string;
}

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({children}:UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const logout = () => {
    setUser(null);
  };

  const addToCart = (newItem: CartItem) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === newItem.id);

      if (itemExists) {
        return prevItems.map(item =>
          item.id === newItem.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === itemId);

      if (itemExists && itemExists.quantity! > 1) {
        return prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity! - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.id !== itemId);
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
