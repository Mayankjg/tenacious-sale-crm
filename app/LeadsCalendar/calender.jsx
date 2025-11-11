
'use client';

import React, { useState } from 'react';
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';

const LeadsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1)); // November 2025
  const [viewMode, setViewMode] = useState('month'); // 'month' or 'week'

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Sample leads data
  const leadsData = {
    '2025-11-8': 2,
    '2025-11-11': 0 // Current day highlighted
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
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
    const today = new Date(2025, 10, 11); // November 11, 2025
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="p-[2px] bg-[#ffffff] mt-[20px] h-[1005px] rounded-[5px] w-full max-w-[1200px] xl:w-[95%] xl:max-w-[1100px]">
        <div className="bg-[white] w-full px-4 py-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl ml-[5px] font-normal text-gray-800">
              Calendar : <span className="text-[#ef4444] font-normal">
                {monthNames[currentDate.getMonth()]}-{currentDate.getFullYear()}
              </span>
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-[#334155] rounded-sm"></span>
            <span className="text-base text-gray-800 mr-[10px] font-normal">No. Of Leads</span>
          </div>
        </div>

        {/* Navigation and View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-0 bg-[#0ea5e9] ml-[10px] rounded-[5px] mb-[30px] overflow-hidden">
            <button
              onClick={() => navigateMonth(-1)}
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white p-3 transition-colors border-r border-white/20"
            >
              <ArrowBigLeft  size={24} />
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white p-3 transition-colors"
            >
              <ArrowBigRight size={24} />
            </button>
          </div>

          <div className="flex rounded-md mr-[10px] overflow-hidden shadow-sm">
            <button
              onClick={() => setViewMode('month')}
              className={`px-8 py-2.5 font-normal w-[50px] h-[28px] text-base transition-colors ${
                viewMode === 'month'
                  ? 'bg-[#14b8a6] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              month
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-8 py-2.5 font-normal text-base transition-colors ${
                viewMode === 'week'
                  ? 'bg-[#14b8a6] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              week
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center py-4 text-sm font-semibold text-gray-600 bg-[#e5e7eb] border-r border-b border-gray-300 last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
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
                    !dayInfo.isCurrentMonth ? 'bg-[#f3f4f6]' : 'bg-white'
                  } hover:bg-gray-50 transition-colors`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-start items-start mb-2">
                      {today ? (
                        <span className="text-white bg-[#ef4444] rounded-full w-10 h-10 flex items-center justify-center text-base font-medium">
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
                        <div className="bg-[#334155] text-white text-sm font-semibold rounded px-3 py-1.5 inline-block">
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