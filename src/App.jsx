import './App.css'
import { NewTaskForm } from './Components/NewTaskForm'
import { ContentSection } from './Components/ContentSection'
import { useEffect, useRef, useState } from 'react'

function App() {
  const initialTaskList = JSON.parse(localStorage.getItem('taskList')) || []

  const [taskList, setTaskList] = useState(initialTaskList)

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);


  const inputRef = useRef(null)
  const notesRef = useRef(null)

  document.addEventListener(
    'keydown', (e) => {
      if (notesRef.current === document.activeElement) return
      if (e.key === "Escape") {
        inputRef.current.blur()
      } else {
        inputRef.current.focus()
      }
    }
  )


  return (
    <div className='
    w-full bg-white xs:p-9 py-9   flex flex-col gap-7 
    border-black md:border-[3px] md:rounded-lg md:shadow-md 
    border-y-[3px]
    max-w-[1000px] mx-auto
    '
    // md:border-large border-x-white rounded-none
    >
      <NewTaskForm setTaskList={setTaskList} inputRef={inputRef} />
      <ContentSection taskList={taskList} setTaskList={setTaskList} notesRef={notesRef} />
    </div>
  )
}

export default App  