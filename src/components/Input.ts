import React from 'react'

export type InputElementTypes = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

export interface Input {
  label: string
  handleOnChange: (e: InputElementTypes) => void
  value: string
  placeHolder: string
  type: string
}