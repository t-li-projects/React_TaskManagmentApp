/* eslint-disable react/prop-types */
import { useState } from "react"

export function NewTaskForm({ setTaskList, inputRef }) {

   const [newTask, setNewTask] = useState('')

   const [isTooLong, setIsTooLong] = useState(false)



   function handleSubmit(e) {
      e.preventDefault()

      if (newTask === '') return

      setTaskList(prevList => [
         ...prevList, {
            text: newTask,
            isChecked: false,
            id: crypto.randomUUID()
         }
      ]);

      setNewTask('')
   }


   function handleInput(e) {
      const input = e.target.value
      if (input.length > 32) {
         setIsTooLong(true)
      } else {
         setIsTooLong(false)
         setNewTask(e.target.value)
      }
   }

   return (
      <section
         className="w-full bg-designYellow border-large py-3 flex justify-center"
      >

         <form
            onSubmit={handleSubmit}
            className="grid gap-4 relative md:flex grid-cols-1"
         >




            <input
               value={newTask}
               onChange={handleInput}
               type="text"
               placeholder="enter new task..."
               className="border-regular w-80 pl-3 text-md py-[2px] tracking-wider
               duration-200 focus:scale-[1.02] outline-none focus:shadow-2xl"
               ref={inputRef}
            />

            {isTooLong ?
               <p
                  className="absolute inset-0 top-12 left-12"
               >too long, enter something shorter</p>
               : ''}

            <button
               className="border-regular bg-white px-5 py-[2px] tracking-wide active:scale-100 hover:scale-[1.02] hover:shadow-xl"
            >
               New Task
            </button>

         </form>

      </section>
   )
}