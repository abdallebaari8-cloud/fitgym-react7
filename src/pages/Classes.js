import React from 'react';
import './Classes.css';

const Classes = () => {
  const schedule = [
    { time: "05:00 AM - 10:00 AM", group: "MEN ONLY"},
    { time: "10:00 AM - 04:00 PM", group: "WOMEN ONLY" },
    { time: "04:00 PM - 11:00 PM", group: "MEN ONLY" },
  ];

  return (
    <div className="classes-container">
      <div className="classes-header">
        <h1>GYM <span className="text-red">SCHEDULE</span></h1>
        <p>Halkan ka eeg xilliyada ay furan yihiin qaybaha Ragga iyo Dumarka.</p>
      </div>

      <div className="table-responsive">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Category</th>
              
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, index) => (
              <tr key={index} className={row.group === "WOMEN ONLY" ? "women-row" : "men-row"}>
                <td className="time-col">{row.time}</td>
                <td className="group-col">{row.group}</td>
                <td>{row.session}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;