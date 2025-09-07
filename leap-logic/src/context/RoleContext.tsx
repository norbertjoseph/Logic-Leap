import React, { createContext, useState, useContext, type ReactNode } from 'react';

// Define the shape of the context data
interface RoleContextType {
  currentRole: 'CEO' | 'Plant Manager';
  setCurrentRole: (role: 'CEO' | 'Plant Manager') => void;
}

// Create the context with a default value
const RoleContext = createContext<RoleContextType | undefined>(undefined);

// Create a provider component that will wrap our app
export const RoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<'CEO' | 'Plant Manager'>('CEO');

  const value = { currentRole, setCurrentRole };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

// Create a custom hook for easy access to the context
export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};