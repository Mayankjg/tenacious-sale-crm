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
  const fullDaysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const timeSlots = [
    '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
    '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
  ];

  const leadsData = {
    '2025-11-8': 0,
    '2025-11-13': 0
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

  const getWeekDays = (date) => {
    const current = new Date(date);
    const first = current.getDate() - current.getDay();
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(current);
      day.setDate(first + i);
      weekDays.push(day);
    }

    return weekDays;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction * 7));
    setCurrentDate(newDate);
  };

  const getLeadsForDate = (date) => {
    const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return leadsData[dateStr];
  };

  const isToday = (date) => {
    const today = new Date(2025, 10, 13);
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = getWeekDays(currentDate);

  return (
    <div className="min-h-[500px] bg-[#eef1f4] p-4 md:p-6 lg:p-8">
      <div className="max-w-[1000px] mx-auto bg-[white] rounded shadow-md border border-gray-200 p-6">
        <div className="bg-[#ffffff] mb-[20px] rounded p-4">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300">
            <div className="flex items-center gap-4">
              <h1 className="text-[25px] ml-[20px] font-normal text-[#4D4D4D]">
                Calendar : <span className="text-[red] font-normal">
                  {monthNames[currentDate.getMonth()]}-{currentDate.getFullYear()}
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-slate-700 rounded-sm"></span>
              <span className="text-[20px] text-gray-800 mr-[20px] font-normal">No. Of Leads</span>
            </div>
          </div>

          <div className="flex justify-between mt-[20px] ml-[20px] items-center mb-6">
            <div className="flex gap-0 bg-sky-500 rounded mb-8 overflow-hidden">
              <button
                onClick={() => viewMode === 'month' ? navigateMonth(-1) : navigateWeek(-1)}
                className="bg-[#61b3ff] hover:bg-sky-600 text-white p-3 transition-colors border-r border-white/20"
              >
                <ArrowBigLeft size={24} />
              </button>
              <button
                onClick={() => viewMode === 'month' ? navigateMonth(1) : navigateWeek(1)}
                className="bg-[#61b3ff] hover:bg-sky-600 text-white p-3 transition-colors"
              >
                <ArrowBigRight size={24} />
              </button>
            </div>

            <div className="flex rounded-md h-[30px] mr-[20px] overflow-hidden shadow-sm">
              <button
                onClick={() => setViewMode('month')}
                className={`px-8 py-2.5 font-normal bg-[#0aa699] text-base transition-colors ${viewMode === 'month'
                  ? 'bg-teal-500 text-white'
                  : 'bg-[#0aa699] text-gray-700 hover:bg-gray-50'
                  }`}
              >
                month
              </button>
              <button
                onClick={() => setViewMode('week')}
                className={`px-8 py-2.5 font-normal bg-[#0aa699] text-base transition-colors ${viewMode === 'week'
                  ? 'bg-teal-500 text-white'
                  : 'bg-[#0aa699] text-gray-700 hover:bg-gray-50'
                  }`}
              >
                week
              </button>
            </div>
          </div>

          {viewMode === 'month' && (
            <div className="bg-[white] text-[15px] rounded-[5px] ml-[30px] mr-[30px] mt-[20px] shadow-sm overflow-hidden border border-[gray]">
              <div className="grid grid-cols-7 bg-[#e7ebed]">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center py-4 text-[17px] font-semibold text-[#8C8C8C] bg-gray-200 border-r border-b border-[#8C8C8C] last:border-r-0"
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
                      className={`min-h-[150px] border-b border-[#8C8C8C] p-4 ${!isLastColumn ? 'border-r border-gray-300' : ''
                        } ${!dayInfo.isCurrentMonth ? 'bg-gray-100' : 'bg-white'
                        } hover:bg-[#f4f2f2] transition-colors`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex justify-center mt-[50px] items-start mb-2">
                          {today ? (
                            <span className="text-white bg-[red] rounded-full w-[30] h-[20] flex items-center justify-center text-base font-medium">
                              {dayInfo.day}
                            </span>
                          ) : (
                            <span
                              className={`text-base font-normal ${!dayInfo.isCurrentMonth
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
          )}

         {viewMode === 'week' && (
            <div className="bg-white rounded-[5px] ml-[20px] mr-[20px] mx-2 sm:mx-4 lg:mx-[30px] mt-[20px] shadow-sm overflow-hidden border border-gray-300">
              <div className="overflow-x-auto">
                <div className="min-w-[370px] lg:min-w-[900px]">
                  {/* Week Header - Days */}
                  <div className="grid grid-cols-8 bg-[#e5e9ec] border-b border-[#8C8C8C]">
                    <div className="bg-[#e5e9ec] border-r border-[#8C8C8C]"></div>
                    {weekDays.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="text-center min-h-[50px] sm:min-h-[60px] p-1 sm:p-2 border-r border-[#8C8C8C] last:border-r-0 bg-white hover:bg-gray-50 transition-colors flex flex-col items-center justify-center"
                      >
                        <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">
                          {fullDaysOfWeek[day.getDay()]} {day.getMonth() + 1}/{day.getDate()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* All-day Row */}
                  <div className="grid grid-cols-8 border-b border-[#8C8C8C]">
                    <div className="bg-[#e5e9ec] text-center py-2 sm:py-3 px-2 text-xs sm:text-sm font-normal text-gray-600 border-r border-[#8C8C8C]">
                      All-day
                    </div>
                    {weekDays.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="min-h-[40px] sm:min-h-[50px] p-1 sm:p-2 border-r border-[#8C8C8C] last:border-r-0 bg-white hover:bg-gray-50 transition-colors"
                      >
                      </div>
                    ))}
                  </div>

                  {/* Time Slots - Scrollable */}
                  <div className="overflow-y-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]">
                    {timeSlots.map((time, timeIndex) => (
                      <div key={timeIndex} className="grid grid-cols-8 border-b border-gray-200 hover:bg-gray-50">
                        <div className="bg-[#e5e9ec] text-center py-3 sm:py-4 px-2 sm:px-3 text-xs sm:text-sm text-gray-600 border-r border-gray-300 font-medium">
                          {time}
                        </div>
                        {weekDays.map((day, dayIndex) => (
                          <div
                            key={dayIndex}
                            className="min-h-[50px] sm:min-h-[60px] p-1 sm:p-2 border-r border-gray-300 last:border-r-0 bg-white hover:bg-blue-50 transition-colors cursor-pointer relative group"
                          >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xs">
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadsCalendar;