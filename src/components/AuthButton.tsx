import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';

export const AuthButton: React.FC = () => {
  const { user, loading, login, logout } = useAuth();

  if (loading) {
    return <div className="text-sm text-gray-500">Loading...</div>;
  }

  if (!user) {
    return (
      <Button onClick={login} variant="outline" size="sm">
        Sign in
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700">
        Welcome, {user.userDetails}
      </span>
      <Button onClick={logout} variant="outline" size="sm">
        Sign out
      </Button>
    </div>
  );
};
