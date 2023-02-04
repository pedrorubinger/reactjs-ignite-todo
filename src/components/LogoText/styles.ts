import styled from "styled-components"

export const LogoTextContainer = styled.div`
  span {
    font-style: normal;
    font-weight: 900;
    font-size: 2.5rem;
    color: ${({ theme }) => theme["purple-dark"]};
  }

  span:first-child {
    margin-left: 0.7rem;
    color: ${({ theme }) => theme["blue"]};
  }
`

export const StyledText = styled.span``
