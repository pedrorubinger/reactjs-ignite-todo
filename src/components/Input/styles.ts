import styled from "styled-components"

export const InputContainer = styled.div`
  width: 100%;
`

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme["gray-700"]};
  background: ${({ theme }) => theme["gray-500"]};
  color: ${({ theme }) => theme["gray-300"]};

  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;

  padding: 1rem;
  gap: 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme["gray-300"]};
  }
`
