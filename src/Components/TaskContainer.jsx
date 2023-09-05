/* eslint-disable react/prop-types */
import { Task } from './Task'

export function TaskContainer({ taskList, setTaskList }) {


   function handleDeleteAllButtonClick() {
      setTaskList([])
   }

   function handleDeleteCompletedButtonClick() {
      const filteredTasks = taskList.filter(task => task.isChecked === false)

      setTaskList(filteredTasks)
   }


   return (
      <section
         className="flex flex-col gap-4 "
      >
         {taskList.length === 0 ?
            <p
               className='text-center mt-4'
            >
               Add tasks above
            </p>
            : <></>
         }

         {taskList.map(item => {
            return (
               <Task
                  key={item.id}
                  text={item.text}
                  id={item.id}
                  setTaskList={setTaskList}
                  taskList={taskList}
                  isChecked={item.isChecked}
               />
            )
         })}

         <div
            className='flex gap-3 justify-center'
         >
            {taskList.length >= 5 ?

               <button
                  onClick={handleDeleteAllButtonClick}
                  className='underline active:scale-95 mt-auto hover:text-red-500 w-max'
               >
                  Delete All Tasks
               </button>
               : <></>
            }
            {taskList.filter(task => task.isChecked).length >= 1 ?
               <button
                  onClick={handleDeleteCompletedButtonClick}
                  className='underline active:scale-95 mt-auto hover:text-blue-500 w-max'
               >
                  Delete Completed
               </button>
               : <></>
            }
         </div>






      </section>
   )
}