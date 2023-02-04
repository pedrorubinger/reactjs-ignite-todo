import styled from "styled-components"
import * as Checkbox from "@radix-ui/react-checkbox"

export const TasksContainer = styled.div`
  margin: 4rem auto;
`

export const TasksHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 1rem;
`

interface TaskInfoTextProps {
  variant: "done" | "created"
}

export const TaskInfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: nowrap;
`

export const TaskInfoText = styled.span<TaskInfoTextProps>`
  color: ${({ theme, variant }) =>
    variant === "done" ? theme.purple : theme.blue};
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
`

export const TaskInfoCounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.125rem 0.5rem;
  gap: 0.625rem;
  border-radius: 999px;

  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;

  color: ${({ theme }) => theme["gray-200"]};
  background: ${({ theme }) => theme["gray-400"]};
`

export const TasksBody = styled.div`
  margin-top: 1.5rem;
`

export const TasksContent = styled.div``

export const EmptyTasksContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme["gray-400"]};
  border-radius: 8px;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

interface EmptyTasksMessageProps {
  /** @default false */
  strong?: boolean
}

export const EmptyTasksMessage = styled.p<EmptyTasksMessageProps>`
  font-style: normal;
  font-weight: ${({ strong = false }) => (strong ? 700 : 400)};
  font-size: 1rem;
  line-height: 1.5;

  text-align: center;

  color: ${({ theme }) => theme["gray-300"]};
`

export const TaskCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 2px 8px 0px #0000000f;
  background-color: ${({ theme }) => theme["gray-500"]};
  border: 1px solid ${({ theme }) => theme["gray-400"]};
  border-radius: 8px;

  padding: 1rem;
  margin-bottom: 0.75rem;
`

export const TaskCheckbox = styled(Checkbox.Root)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme["blue"]};
  border-radius: 50%;

  padding: 0.45rem;
  cursor: pointer;

  &[data-state="checked"] {
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme["purple-dark"]};
  }
`

interface TaskTitleProps {
  variant: "done" | "opened"
}

export const TaskTitle = styled.span<TaskTitleProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  text-decoration: ${({ variant }) =>
    variant === "done" ? "line-through" : "none"};

  color: ${({ theme, variant }) =>
    variant === "done" ? theme["gray-300"] : theme["gray-100"]};
`

export const EmptyTasksHeader = styled.div``

export const EmptyTasksBody = styled.div``

export const TaskCardFirstColumn = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

export const DeleteTaskButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 1rem;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["gray-300"]};
    transition: color 0.4s;
  }

  svg:hover {
    color: ${({ theme }) => theme["gray-100"]};
  }
`
