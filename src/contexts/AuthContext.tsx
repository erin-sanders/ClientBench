import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { UserInfo, AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      // Check if we're in development mode with mocked auth
      const isDevelopment = import.meta.env.VITE_MOCK_AUTH === 'true' || import.meta.env.DEV;
      
      if (isDevelopment) {
        // Mock user for local development
        const mockUser: UserInfo = {
          identityProvider: 'aad',
          userId: 'local-dev-user',
          userDetails: 'Local Dev User',
          userRoles: ['authenticated'],
          claims: {
            name: 'Local Dev User',
            email: 'dev@neudesic.com'
          }
        };
        setUser(mockUser);
        setLoading(false);
        return;
      }

      const response = await fetch('/.auth/me');
      if (response.ok) {
        const data = await response.json();
        if (data.clientPrincipal) {
          setUser(data.clientPrincipal);
        }
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
      
      // If we're in development and there's an error, still provide mock user
      const isDevelopment = import.meta.env.VITE_MOCK_AUTH === 'true' || import.meta.env.DEV;
      if (isDevelopment) {
        const mockUser: UserInfo = {
          identityProvider: 'aad',
          userId: 'local-dev-user',
          userDetails: 'Local Dev User',
          userRoles: ['authenticated'],
          claims: {
            name: 'Local Dev User',
            email: 'dev@neudesic.com'
          }
        };
        setUser(mockUser);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = () => {
    // Check if we're in development mode with mocked auth
    const isDevelopment = import.meta.env.VITE_MOCK_AUTH === 'true' || import.meta.env.DEV;
    
    if (isDevelopment) {
      console.log('Local development: Authentication is mocked');
      // Refresh to trigger the mock user setup
      window.location.reload();
      return;
    }
    
    window.location.href = '/.auth/login/aad';
  };

  const logout = () => {
    // Check if we're in development mode with mocked auth
    const isDevelopment = import.meta.env.VITE_MOCK_AUTH === 'true' || import.meta.env.DEV;
    
    if (isDevelopment) {
      console.log('Local development: Logged out (mocked)');
      setUser(null);
      return;
    }
    
    window.location.href = '/.auth/logout';
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
