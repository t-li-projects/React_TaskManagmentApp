/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { TaskContainer } from './TaskContainer'

export function ContentSection({ taskList, setTaskList, notesRef }) {

   const storedText = localStorage.getItem('userComment') || `today's notes:
`;

   const [userComment, setUserComment] = useState(storedText);

   useEffect(() => {
      localStorage.setItem('userComment', userComment);
   }, [userComment]);

   const handleTextareaChange = (e) => {
      setUserComment(e.target.value);
   };

   return (
      <section
         className=" bg-designGreen border-large p-5 grid lg:grid-cols-[1fr,220px] min-h-max gap-5 max-w-[100%]"
      >

         {/* Task container */}
         <TaskContainer taskList={taskList} setTaskList={setTaskList} />

         {/* notes */}
         <section
            className='flex flex-col gap-5'
         >
            <textarea
               placeholder="notes & comments"
               className="py-3 px-2 border-regular tracking-wide text-justify outline-none duration-200 focus:scale-[1.04] lg:min-h-[36dvh] min-h-[150px] focus:shadow-2xl"
               value={userComment}
               onChange={handleTextareaChange}
               ref={notesRef}
            />

            <button
               className='bg-white border-regular tracking-wide active:scale-100 hover:scale-[1.02] hover:shadow-xl'
               onClick={() => setUserComment(`today's notes:
`
               )}
            >
               clear
            </button>


         </section>

      </section >
   )
}