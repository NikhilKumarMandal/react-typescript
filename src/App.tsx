// import { PropsWithChildren, ReactNode, useRef, useState } from 'react'
import { useEffect, useState } from "react";
import Button from "./components/Button";
// function App() {
//   const devRef = useRef<HTMLButtonElement>(null)
//   const [first, setFirst] = useState<string>()
//   const [num,setNum] = useState<number>()
//   const [bol,setBol] = useState<boolean>()
//   return (
//     <div >
//       {first}
//       <button onClick={() => {setFirst("jhinjf")}}>
//         click Me
//       </button>

//       <button ref={devRef} onClick={() => {
//         devRef?.current?.remove()
        
//        }}>
//         clear dom
//       </button>

//       {num}
//       <button
//       onClick={() => {setNum(6)}}
//       >
//           click num
//       </button>

//        {bol}
//       <button
//       onClick={() => {setBol(true)}}
//       >
//           click num
//       </button>

//       <Child data={123}>
// <p>hwll</p>
//       </Child>

//       <Wrapper>
//         <p>Nikhil</p>
//       </Wrapper>
//     </div>

  
//   )
// }

// export default App


// interface Childprop {
//   data: number;
//   children: ReactNode
// }

// const Child:React.FC<Childprop> = ({data}) => {
//   return <div>
//     {data}
//   </div>
// }

// const Wrapper = ({ children }: PropsWithChildren) => {
//   return <div>
//     {children}
//   </div>
// }
import axios from "axios";
import { useAuth } from "./hook/useAuth";

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})


interface Todo {
  userId: number,
  id: number,
  title: string,
  complete: boolean
}

const App = () => {

  const [todos, setTodos] = useState<Todo[]>([])


  const { login } = useAuth()
  
  login({
    email: "nikh",
    name: "ndv"
  })
  useEffect(() => {
    const getData = async () => {
      const { data } = await api<Todo[]>("/todos")
      setTodos(data)
      console.log(data);
      
    }

    getData()
  },[])
  return (
    <div>
      {todos.map(item => (
        <div key={item.id}>{item.title }</div>
      ))}
    </div>
  );
};

export default App;