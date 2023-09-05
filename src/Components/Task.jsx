/* eslint-disable react/prop-types */

export function Task({ text, setTaskList, taskList, id, isChecked }) {

   function handleEdit() {

      const newText = prompt('enter new name')
      setTaskList(prevData => {

         return prevData.map(item => {
            if (item.id === id) {
               return {
                  ...item,
                  text: newText
               }
            }
            return item
         })
      })
   }

   function handleMoveUp() {
      const taskIndex = taskList.findIndex(task => task.id === id);
      if (taskIndex > 0) {
         const updatedTasks = [...taskList];
         const movedTask = updatedTasks.splice(taskIndex, 1)[0];
         updatedTasks.splice(taskIndex - 1, 0, movedTask);
         setTaskList(updatedTasks);
      }
   }

   function handleMoveDown() {
      const taskIndex = taskList.findIndex(task => task.id === id);

      if (taskIndex < taskList.length - 1) {
         const updatedTasks = [...taskList];
         const movedTask = updatedTasks.splice(taskIndex, 1)[0];
         updatedTasks.splice(taskIndex + 1, 0, movedTask);
         setTaskList(updatedTasks);
      }
   }

   function handleDelete() {
      setTaskList(prevData => {
         return prevData.filter(item => item.id !== id)
      })
   }

   function handleCheckboxClick(e) {
      setTaskList(prevData => {
         return prevData.map(item => {
            if (item.id === id) {
               return {
                  ...item,
                  isChecked: e.target.checked
               }
            }
            return item
         })
      })
   }

   return <div
      className="bg-white border-small px-3 py-1s sm:flex sm:justify-between 
      task hover:shadow-xl group"
   >
      {/* task info */}
      <div
         className=""
      >
         <input
            id={id}
            checked={isChecked}
            onChange={handleCheckboxClick}
            type="checkbox"
            className="css-checkbox"
         />
         <label
            className={` overflow-hidden whitespace-nowrap select-none text-lg ${isChecked ? 'checked' : ''} `}
            htmlFor={id}
         >
            {text}
         </label>

      </div>

      {/* task options */}
      <div className="w-[220px] hidden gap-1 group-hover:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out justify-end py-1 sm:py-0">
         <button onClick={() => handleEdit()} >
            <span className="material-symbols-outlined text-[21px] relative top-1">
               edit
            </span>
         </button>

         <button onClick={handleMoveUp} >
            <span className="material-symbols-outlined  text-[20px] relative top-1 scale-110">
               keyboard_arrow_up
            </span>
         </button>

         <button onClick={handleMoveDown}>
            <span className="material-symbols-outlined  text-[20px] relative top-1 scale-110">
               keyboard_arrow_down
            </span>
         </button>

         <button onClick={handleDelete} >
            <span className="material-symbols-outlined text-[21px] relative top-1">
               delete
            </span>
         </button>

      </div>

   </div>
}