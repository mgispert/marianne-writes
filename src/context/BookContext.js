// BookContext.js
"use client";

import React, { createContext, useContext, useState } from "react";

// Create a new context
const BookContext = createContext();

// Custom hook to consume the context
export const useBookContext = () => useContext(BookContext);

// Provider component to wrap your app with
export const BookProvider = ({ children }) => {
  // State to hold the selected book
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <BookContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </BookContext.Provider>
  );
};
