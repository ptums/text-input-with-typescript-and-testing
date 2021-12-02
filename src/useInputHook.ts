import { useState } from 'react'

export default function useInput() {
  const [input, setInput] = useState<string>('')

  return [input, setInput] as const
}