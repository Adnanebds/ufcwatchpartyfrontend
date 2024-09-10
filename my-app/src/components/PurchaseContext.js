// PurchaseContext.js
import React, { createContext, useState } from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchaseData, setPurchaseData] = useState({ email: '', totalCost: 0 });

  return (
    <PurchaseContext.Provider value={{ purchaseData, setPurchaseData }}>
      {children}
    </PurchaseContext.Provider>
  );
};