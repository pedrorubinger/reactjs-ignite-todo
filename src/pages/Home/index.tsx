import { useContext } from "react"
import { PlusCircle } from "phosphor-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Zod from "zod"

import { HomeContainer, Form, AddTaskContainer, HomeContent } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Tasks } from "./components/Tasks"
import { TasksContext } from "../../contexts/TasksContext"

const newTaskSchema = Zod.object({
  title: Zod.string().min(1, "Informe a tarefa!"),
})

type NewTaskFormData = Zod.infer<typeof newTaskSchema>

export const Home = () => {
  const { onAddNewTask } = useContext(TasksContext)
  const { register, reset, handleSubmit, watch } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskSchema),
    defaultValues: {
      title: "",
    },
  })

  const addTaskButtonIsDisabled = !watch("title")

  const onSubmit = ({ title }: NewTaskFormData) => {
    onAddNewTask(title)
    reset()
  }

  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        <Form action="" onSubmit={handleSubmit(onSubmit)}>
          <AddTaskContainer>
            <Input
              id="title"
              placeholder="Adicione uma nova tarefa"
              {...register("title")}
            />

            <Button type="submit" disabled={addTaskButtonIsDisabled}>
              Criar
              <PlusCircle size={16} />
            </Button>
          </AddTaskContainer>
        </Form>

        <Tasks />
      </HomeContent>
    </HomeContainer>
  )
}
