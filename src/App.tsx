import { PropsWithChildren, ReactNode, useRef, useState } from 'react'

function App() {
  const devRef = useRef<HTMLButtonElement>(null)
  const [first, setFirst] = useState<string>()
  const [num,setNum] = useState<number>()
  const [bol,setBol] = useState<boolean>()
  return (
    <div >
      {first}
      <button onClick={() => {setFirst("jhinjf")}}>
        click Me
      </button>

      <button ref={devRef} onClick={() => {
        devRef?.current?.remove()
        
       }}>
        clear dom
      </button>

      {num}
      <button
      onClick={() => {setNum(6)}}
      >
          click num
      </button>

       {bol}
      <button
      onClick={() => {setBol(true)}}
      >
          click num
      </button>

      <Child data={123}>
<p>hwll</p>
      </Child>

      <Wrapper>
        <p>Nikhil</p>
      </Wrapper>
    </div>

  
  )
}

export default App


interface Childprop {
  data: number;
  children: ReactNode
}

const Child:React.FC<Childprop> = ({data}) => {
  return <div>
    {data}
  </div>
}

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div>
    {children}
  </div>
}