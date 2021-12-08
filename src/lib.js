import { useState } from 'react'

export function useFromStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function
        ? value(storedValue) : value
      setStoredValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {}
  }

  return [storedValue, setValue]
}

export function randomTitle() {
  return (Math.random() + 1)
    .toString(36)
    .substring(7)
}