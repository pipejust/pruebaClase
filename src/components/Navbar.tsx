import React from 'react';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onToggleCart: () => void;
  isCartOpen: boolean;
}

export default function Navbar({ onToggleCart, isCartOpen }: NavbarProps) {
  const { getCartItemsCount } = useCart();
  const itemsCount = getCartItemsCount();

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">CleanMart</h1>
              <p className="text-xs text-gray-500">Productos de aseo</p>
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onToggleCart}
            className="relative flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="hidden sm:inline text-gray-700 font-medium">Carrito</span>
            {itemsCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                {itemsCount > 99 ? '99+' : itemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Cart Button (Floating) */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={onToggleCart}
          className="relative flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          <ShoppingCart className="w-6 h-6" />
          {itemsCount > 0 && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full animate-bounce">
              {itemsCount > 99 ? '99+' : itemsCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}