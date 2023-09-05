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
            <img src="./src/assets/images/edit-task.svg" alt="edit" className="scale-[0.8]" />
         </button>

         <button onClick={handleMoveUp} >
            <img src="./src/assets/images/move-up.svg" alt="move up" />
         </button>

         <button onClick={handleMoveDown}>
            <img src="./src/assets/images/move-down.svg" alt="move down" />
         </button>

         <button onClick={handleDelete} >
            <img src="./src/assets/images/delete-task.svg" alt="delete" className="scale-[0.85]" />
         </button>

      </div>

   </div>
}