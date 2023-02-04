import { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/Default"
import { GlobalStyles } from "./styles/themes/global"

import { Home } from "./pages/Home"

import { TasksContextProvider } from "./contexts/TasksContext"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <TasksContextProvider>
        <Home />
      </TasksContextProvider>
    </ThemeProvider>
  )
}
