import {useEffect, useState} from "react";

export function useDebounce(value: string, delay = 300): string {
  const [inputText, setInputText] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setInputText(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return inputText
}
