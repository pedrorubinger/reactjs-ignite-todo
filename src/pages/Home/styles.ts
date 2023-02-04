import styled from "styled-components"

export const HomeContainer = styled.main`
  height: 100%;
  width: 100%;
`

export const Form = styled.form``

export const AddTaskContainer = styled.div`
  margin: -1.75rem auto 0;
  width: 100%;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
    flex-wrap: wrap;
  }
`

export const HomeContent = styled.section`
  width: 80%;
  max-width: 750px;
  margin: auto;
`
