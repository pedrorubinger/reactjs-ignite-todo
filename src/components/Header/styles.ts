import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12.5rem;
  background: ${({ theme }) => theme["gray-700"]};

  display: flex;
  align-items: center;
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const LogoContainer = styled.div`
  display: flex;
`

export const LogoImg = styled.img``
