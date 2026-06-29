import { createContext } from "react"
import ComponentA from "./components/ComponentA"
import CopyInput from "./components/CopyInput"
import Counter from "./components/Counter"
import TodoList from "./components/TodoList"
import UserProfile from "./components/UserProfile"
import UserProvider from "./UserContext"

export const dataContext = createContext()

const App = ()=>{
  const users = [
    {id: 1, name: "John", age: 30, profession: "Doctor"},
    {id: 2, name: "Jane", age: 28, profession: "Engineer"},
    {id: 3, name: "Bob", age: 35, profession: "Lawyer"},
    {id: 4, name: "Alice", age: 32, profession: "Doctor"},
    {id: 5, name: "Charlie", age: 31, profession: "Engineer"},
  ]
  return <>
    <section>
      {/* <Counter/> */}
      {/* <TodoList/> */}
      {/* <CopyInput/> */}
      {/* <dataContext.Provider value={users}>
      <ComponentA/>
      </dataContext.Provider> */}

      <UserProvider>
        <UserProfile/>
      </UserProvider>
    </section>
  </>
}

export default App