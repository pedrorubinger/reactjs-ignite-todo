import { createContext, useState } from "react"

export enum TaskStatus {
  DONE = "done",
  OPENED = "opened",
}

export interface Task {
  id: string
  status: TaskStatus
  title: string
}

interface TasksContextProviderProps {
  children: React.ReactNode
}

interface TaskContextProps {
  tasks: Task[]
  onDeleteTask: (id: string) => void
  onChangeTaskStatus: (id: string) => void
  onAddNewTask: (title: string) => void
}

export const TasksContext = createContext({} as TaskContextProps)

export const TasksContextProvider = ({
  children,
}: TasksContextProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const onDeleteTask = (id: string): void => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const onChangeTaskStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        const updatedTask = { ...task }

        if (task.id === id) {
          updatedTask.status =
            task.status === TaskStatus.OPENED
              ? TaskStatus.DONE
              : TaskStatus.OPENED
        }

        return updatedTask
      })
    )
  }

  const onAddNewTask = (title: string) => {
    const newTask: Task = {
      id: String(new Date().getTime()),
      status: TaskStatus.OPENED,
      title,
    }

    setTasks((prev) => [...prev, newTask])
  }

  return (
    <TasksContext.Provider
      value={{ tasks, onAddNewTask, onChangeTaskStatus, onDeleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}
