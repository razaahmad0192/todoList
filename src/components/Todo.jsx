import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";
import Navbar from './Navbar'
import Footer from './Footer'
import { MdDeleteSweep } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

function Todo() {

 
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  // 1) Load todos on first render
  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    }
  }, []);

  // 2) Save todos whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.removeItem("todos");
    }
  }, [todos]);

  const saveToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)

    saveToLs();
  }
  const handleDelete = (id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLs();

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLs()

  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLs();

  }
  const toggleFinished = () => {
     setshowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
 
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
        
      >
      <div className="md:container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2 w-[90vw] ">

        <h1 className='font-bold md:text-4xl text-center text-2xl'>iTask - Manage your Todos at one place</h1>
        <div className="addTodo my-5 w-full">
          <h2 className="text-lg font-bold">Your Todos</h2>
          <div className='flex justify-between items-center'>

          <input onChange={handleChange} value={todo} type="text" className='bg-white px-3 w-full' />
          <button disabled={todo.length<3} onClick={handleAdd} className='bg-violet-800 font-bold hover:bg-violet-950 md:p-3 md:py-1 p-1 px-2 disabled:bg-violet-800 cursor-pointer text-white rounded-md md:mx-6 ml-2 text-xs '>Save</button>
          </div>
        </div>
        <div className="flex gap-2">
        <input type="checkbox" className='cursor-pointer' checked={showFinished} onChange={toggleFinished} />
        <label  className='cursor-pointer'>Show Finished</label>
        </div>
        <div className='w-[90%] h-[2px] bg-black opacity-15 mx-auto my-2'></div>
        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to Display</div>}
          {todos.map((item) => {
            
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex items-center justify-between   w-full mb-3">
              <div className='flex gap-5 text-sm md:text-md'>

                <input type="checkbox" className='cursor-pointer' onChange={handleCheckbox} checked={item.isCompleted} name={item.id} id='' />
                <div className="flex-1 min-w-0">

                <div className={`whitespace-normal break-all ${item.isCompleted ? "line-through" : ""}`}>{item.todo}</div>
                </div>
              </div>
              <div className="buttons flex h-full ">
                <button onClick={() => handleEdit(item.id)} className='bg-violet-800 font-bold hover:bg-violet-950 md:p-3 md:py-1 p-1  cursor-pointer text-white rounded-md mx-1 '><TbEdit />

</button>
                <button onClick={() => { handleDelete(item.id) }} className='bg-violet-800 font-bold hover:bg-violet-950 md:p-3 md:py-1 p-1 cursor-pointer text-white rounded-md mx-1 '><MdDeleteSweep />
</button>
              </div>
            </div>
          })}
        </div>
      </div>
          </motion.div>
          <Footer/>
    </>
  )
}

export default Todo
