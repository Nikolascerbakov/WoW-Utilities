import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value:T) => void] {
  const [value, setValue] = useState(() => {
    // getting data from localStorage
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue));
  });

  useEffect(() => {
    // setting data in localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}