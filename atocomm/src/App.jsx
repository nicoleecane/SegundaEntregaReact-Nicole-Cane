

import { ItemDetailContainer } from "./Components"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { NavBar } from "./Components/NavBar/NavBar"



function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
