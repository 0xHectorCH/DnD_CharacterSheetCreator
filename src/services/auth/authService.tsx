export interface User {
  name: string;
  email: string;
  password: string; 
}

const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return regex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const register = (name: string, email: string, password: string) => {
  const users = getUsers();

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    throw new Error('Email already registered');
  }

  const newUser: User = { name, email, password };
  saveUsers([...users, newUser]);

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
};

export const login = (email: string, password: string) => {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error('Invalid credentials');
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = (): boolean => {
  return !!getCurrentUser();
};