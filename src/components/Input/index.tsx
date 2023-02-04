import React, { forwardRef } from "react"

import { InputContainer, StyledInput } from "./styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = forwardRef(
  ({ ...rest }, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <InputContainer>
        <StyledInput ref={ref} {...rest} />
      </InputContainer>
    )
  }
)
