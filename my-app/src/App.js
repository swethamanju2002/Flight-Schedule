import React, { useState } from 'react';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

const formatDateFull = (date) => date.toLocaleDateString(undefined, {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const formatMonth = (date) => date.toLocaleDateString(undefined, {
  year: 'numeric',
  month: 'long',
});

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
            Flight Schedule
          </BpkText>
        </div>
      </header>
      <main className={getClassName('App__main')}>
        <BpkText tagName="h2" textStyle="lg" className={getClassName('App__text')}>
          Choose a travel date
        </BpkText>
        <div className={getClassName('App__calendar')}>
          <BpkCalendar
            id="flight-schedule-calendar"
            daysOfWeek={daysOfWeek}
            formatDateFull={formatDateFull}
            formatMonth={formatMonth}
            fixedWidth={false}
            weekStartsOn={0}
            nextMonthLabel="Go to next month"
            previousMonthLabel="Go to previous month"
            changeMonthLabel="Change month"
            selectionConfiguration={{
              type: CALENDAR_SELECTION_TYPE.single,
              date: selectedDate,
            }}
            onDateSelect={setSelectedDate}
          />
        </div>
        <BpkText tagName="p" className={getClassName('App__text')} aria-live="polite">
          {selectedDate ? `Selected date: ${formatDateFull(selectedDate)}` : 'Select a date'}
        </BpkText>
      </main>
    </div>
  );
};

export default App;
