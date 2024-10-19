const AppointmentList = ({ appointments }) => {
    return (
      <div className="p-6 bg-gray-100 rounded shadow mb-4">
        <h2 className="text-2xl font-semibold mb-4">Scheduled Appointments</h2>
        {appointments.length === 0 ? (
          <p>No appointments scheduled.</p>
        ) : (
          <ul className="list-disc pl-5">
            {appointments.map((appointment, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{appointment.name}</span> - {appointment.date} at {appointment.time}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default AppointmentList;
  