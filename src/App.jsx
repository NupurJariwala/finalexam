import "./App.css";
import EmployeesTable from "./Components/EmployeesTable";

function App() {
  return (
    <div className="App">
      <h2>Employees Database</h2>
      {/* Import EmployessTable.jsx */}
      <EmployeesTable />
    </div>
  );
}

export default App;
