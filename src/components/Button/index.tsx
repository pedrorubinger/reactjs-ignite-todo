import { ButtonContainer, StyledButton } from "./styles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonContainer>
      <StyledButton {...rest}>{children}</StyledButton>
    </ButtonContainer>
  )
}
