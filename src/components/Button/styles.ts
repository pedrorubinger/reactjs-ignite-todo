import styled from "styled-components"

export const ButtonContainer = styled.div``

export const StyledButton = styled.button`
  background: ${({ theme }) => theme["blue-dark"]};
  border: none;

  color: ${({ theme }) => theme["gray-100"]};
  font-size: 0.875rem;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  padding: 1rem;
  gap: 0.5rem;

  transition: background-color 0.4s, color 0.4s;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme["blue"]};
    color: ${({ theme }) => theme["gray-200"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
