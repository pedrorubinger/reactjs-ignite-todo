import { useContext } from "react"
import { Clipboard, Trash } from "phosphor-react"

import { formatNum } from "../../../../utils"
import { TasksContext, TaskStatus } from "../../../../contexts/TasksContext"
import {
  DeleteTaskButton,
  EmptyTasksBody,
  EmptyTasksContainer,
  EmptyTasksHeader,
  EmptyTasksMessage,
  TaskCard,
  TaskCardFirstColumn,
  TaskCheckbox,
  TaskInfoContainer,
  TaskInfoCounter,
  TaskInfoText,
  TasksBody,
  TasksContainer,
  TasksContent,
  TasksHeader,
  TaskTitle,
} from "./styles"

export const Tasks = () => {
  const { tasks, onChangeTaskStatus, onDeleteTask } = useContext(TasksContext)

  const tasksAmount = formatNum(tasks?.length)
  const finishedTasksAmount = tasks?.filter(
    (task) => task.status === TaskStatus.DONE
  )?.length

  return (
    <TasksContainer>
      <TasksHeader>
        <TaskInfoContainer>
          <TaskInfoText variant="created">Tarefas criadas</TaskInfoText>
          <TaskInfoCounter>{tasksAmount}</TaskInfoCounter>
        </TaskInfoContainer>

        <TaskInfoContainer>
          <TaskInfoText variant="done">Concluídas</TaskInfoText>
          <TaskInfoCounter>
            {formatNum(finishedTasksAmount)} de {tasksAmount}
          </TaskInfoCounter>
        </TaskInfoContainer>
      </TasksHeader>

      <TasksBody>
        {tasks?.length ? (
          <TasksContent>
            {tasks.map((task) => (
              <TaskCard key={task.id}>
                <TaskCardFirstColumn>
                  <TaskCheckbox
                    value={task.status}
                    onCheckedChange={() => onChangeTaskStatus(task.id)}
                    checked={task.status === TaskStatus.DONE}
                  />
                  <TaskTitle variant={task.status}>{task.title}</TaskTitle>
                </TaskCardFirstColumn>

                <DeleteTaskButton
                  type="button"
                  onClick={() => onDeleteTask(task.id)}>
                  <Trash size={20} />
                </DeleteTaskButton>
              </TaskCard>
            ))}
          </TasksContent>
        ) : (
          <EmptyTasksContainer>
            <EmptyTasksHeader>
              <Clipboard size={56} />
            </EmptyTasksHeader>

            <EmptyTasksBody>
              <EmptyTasksMessage strong>
                Você ainda não tem tarefas cadastradas.
              </EmptyTasksMessage>

              <EmptyTasksMessage>
                Crie tarefas e organize seus itens a fazer.
              </EmptyTasksMessage>
            </EmptyTasksBody>
          </EmptyTasksContainer>
        )}
      </TasksBody>
    </TasksContainer>
  )
}
