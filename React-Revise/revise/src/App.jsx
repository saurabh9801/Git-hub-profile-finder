import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import One from './One'
import Two from './Two'
import DateThree from './DateThree'
import CssStyle from './CssStyle'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <One />  
      <Two/> 
      <DateThree />
      <CssStyle />   
      
    </>
  )
}

export default App
