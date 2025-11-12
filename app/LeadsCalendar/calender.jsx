'use client';

import React, { useState } from 'react';
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';

const LeadsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1));
  const [viewMode, setViewMode] = useState('month');

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const leadsData = {
    '2025-11-8': 2,
    '2025-11-11': 0
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const getLeadsForDate = (date) => {
    const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return leadsData[dateStr];
  };

  const isToday = (date) => {
    const today = new Date(2025, 10, 11);
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="p-1.5 bg-white mt-5 rounded min-h-screen w-full">
      <div className="bg-white w-full px-4 py-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-normal text-gray-800">
              Calendar : <span className="text-red-500 font-normal">
                {monthNames[currentDate.getMonth()]}-{currentDate.getFullYear()}
              </span>
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-slate-700 rounded-sm"></span>
            <span className="text-base text-gray-800 font-normal">No. Of Leads</span>
          </div>
        </div>

        <div className="flex justify-between mb-[10px] items-center mb-6">
          <div className="flex gap-0 bg-sky-500 rounded mb-8 overflow-hidden">
            <button
              onClick={() => navigateMonth(-1)}
              className="bg-[#61b3ff] hover:bg-sky-600 text-white p-3 transition-colors border-r border-white/20"
            >
              <ArrowBigLeft size={24} />
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="bg-[#61b3ff] hover:bg-sky-600 text-white p-3 transition-colors"
            >
              <ArrowBigRight size={24} />
            </button>
          </div>

          <div className="flex rounded-md h-[30px] overflow-hidden shadow-sm">
            <button
              onClick={() => setViewMode('month')}
              className={`px-8 py-2.5 font-normal text-base transition-colors ${
                viewMode === 'month'
                  ? 'bg-teal-500 text-white'
                  : 'bg-[#0aa699] text-gray-700 hover:bg-gray-50'
              }`}
            >
              month
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-8 py-2.5 font-normal text-base transition-colors ${
                viewMode === 'week'
                  ? 'bg-teal-500 text-white'
                  : 'bg-[#0aa699] text-gray-700 hover:bg-gray-50'
              }`}
            >
              week
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="grid grid-cols-7">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center py-4 text-sm font-semibold text-gray-600 bg-gray-200 border-r border-b border-gray-300 last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {days.map((dayInfo, index) => {
              const leads = getLeadsForDate(dayInfo.date);
              const today = isToday(dayInfo.date);
              const isLastColumn = (index + 1) % 7 === 0;

              return (
                <div
                  key={index}
                  className={`min-h-[140px] border-b border-gray-300 p-4 ${
                    !isLastColumn ? 'border-r border-gray-300' : ''
                  } ${
                    !dayInfo.isCurrentMonth ? 'bg-gray-100' : 'bg-white'
                  } hover:bg-gray-50 transition-colors`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-start items-start mb-2">
                      {today ? (
                        <span className="text-white bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-base font-medium">
                          {dayInfo.day}
                        </span>
                      ) : (
                        <span
                          className={`text-base font-normal ${
                            !dayInfo.isCurrentMonth
                              ? 'text-gray-400'
                              : 'text-gray-700'
                          }`}
                        >
                          {dayInfo.day}
                        </span>
                      )}
                    </div>
                    
                    {dayInfo.isCurrentMonth && leads !== undefined && leads > 0 && (
                      <div className="mt-auto">
                        <div className="bg-slate-700 text-white text-sm font-semibold rounded px-3 py-1.5 inline-block">
                          {leads}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsCalendar;
































// 'use client';

// import React, { useState } from 'react';
// import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';

// const LeadsCalendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1));
//   const [viewMode, setViewMode] = useState('month');

//   const monthNames = [
//     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//   ];

//   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

//   const leadsData = {
//     '2025-11-8': 2,
//     '2025-11-11': 0
//   };

//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDayOfWeek = firstDay.getDay();

//     const days = [];
    
//     const prevMonthLastDay = new Date(year, month, 0).getDate();
//     for (let i = startingDayOfWeek - 1; i >= 0; i--) {
//       days.push({
//         day: prevMonthLastDay - i,
//         isCurrentMonth: false,
//         date: new Date(year, month - 1, prevMonthLastDay - i)
//       });
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push({
//         day: i,
//         isCurrentMonth: true,
//         date: new Date(year, month, i)
//       });
//     }

//     const remainingDays = 42 - days.length;
//     for (let i = 1; i <= remainingDays; i++) {
//       days.push({
//         day: i,
//         isCurrentMonth: false,
//         date: new Date(year, month + 1, i)
//       });
//     }

//     return days;
//   };

//   const navigateMonth = (direction) => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
//   };

//   const getLeadsForDate = (date) => {
//     const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
//     return leadsData[dateStr];
//   };

//   const isToday = (date) => {
//     const today = new Date(2025, 10, 11);
//     return date.getDate() === today.getDate() &&
//            date.getMonth() === today.getMonth() &&
//            date.getFullYear() === today.getFullYear();
//   };

//   const days = getDaysInMonth(currentDate);

//   return (
//     <div className="p-6 bg-white min-h-screen w-full">
//       <div className="w-full">
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center gap-4">
//             <h1 className="text-3xl font-bold text-black">
//               Calendar : <span className="font-bold">
//                 {monthNames[currentDate.getMonth()]}-{currentDate.getFullYear()}
//               </span>
//             </h1>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <span className="text-lg text-black font-normal">No. Of Leads</span>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mb-6">
//           <div className="flex gap-0 border-2 border-black rounded overflow-hidden">
//             <button
//               onClick={() => navigateMonth(-1)}
//               className="bg-white hover:bg-gray-100 text-black p-2 transition-colors border-r-2 border-black"
//             >
//               <ArrowBigLeft size={24} />
//             </button>
//             <button
//               onClick={() => navigateMonth(1)}
//               className="bg-white hover:bg-gray-100 text-black p-2 transition-colors"
//             >
//               <ArrowBigRight size={24} />
//             </button>
//           </div>

//           <div className="flex border-2 border-black rounded overflow-hidden">
//             <button
//               onClick={() => setViewMode('month')}
//               className={`px-6 py-2 font-normal text-base transition-colors border-r-2 border-black ${
//                 viewMode === 'month'
//                   ? 'bg-black text-white'
//                   : 'bg-white text-black hover:bg-gray-100'
//               }`}
//             >
//               month
//             </button>
//             <button
//               onClick={() => setViewMode('week')}
//               className={`px-6 py-2 font-normal text-base transition-colors ${
//                 viewMode === 'week'
//                   ? 'bg-black text-white'
//                   : 'bg-white text-black hover:bg-gray-100'
//               }`}
//             >
//               week
//             </button>
//           </div>
//         </div>

//         <div className="bg-white rounded overflow-hidden border-2 border-black">
//           <div className="grid grid-cols-7">
//             {daysOfWeek.map((day) => (
//               <div
//                 key={day}
//                 className="text-center py-3 text-sm font-bold text-black bg-white border-r-2 border-b-2 border-black last:border-r-0"
//               >
//                 {day}
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-7">
//             {days.map((dayInfo, index) => {
//               const leads = getLeadsForDate(dayInfo.date);
//               const today = isToday(dayInfo.date);
//               const isLastColumn = (index + 1) % 7 === 0;

//               return (
//                 <div
//                   key={index}
//                   className={`min-h-[120px] border-b-2 border-black p-3 ${
//                     !isLastColumn ? 'border-r-2 border-black' : ''
//                   } ${
//                     !dayInfo.isCurrentMonth ? 'bg-white' : 'bg-white'
//                   } hover:bg-gray-50 transition-colors`}
//                 >
//                   <div className="flex flex-col h-full">
//                     <div className="flex justify-start items-start mb-2">
//                       {today ? (
//                         <span className="text-white bg-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
//                           {dayInfo.day}
//                         </span>
//                       ) : (
//                         <span
//                           className={`text-base font-normal ${
//                             !dayInfo.isCurrentMonth
//                               ? 'text-gray-400'
//                               : 'text-black'
//                           }`}
//                         >
//                           {dayInfo.day}
//                         </span>
//                       )}
//                     </div>
                    
//                     {dayInfo.isCurrentMonth && leads !== undefined && leads > 0 && (
//                       <div className="mt-auto">
//                         <div className="bg-black text-white text-sm font-bold rounded px-2 py-1 inline-block">
//                           {leads}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeadsCalendar;