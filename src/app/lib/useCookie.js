'use client'
import { useState, useEffect } from 'react';

export const useCookie = (key, initialValue) => {
  const [cookieValue, setCookieValue] = useState(() => {
    if (typeof document === 'undefined') return initialValue;
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${key}=`));
    if (value) return value.split('=')[1];
    return initialValue;
  });

  const set = (value) => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
    setCookieValue(value);
  };

  return [cookieValue, set];
};
