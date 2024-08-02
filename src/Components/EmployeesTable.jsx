import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";

const EmployeesTable = () => {
  const [data, setdata] = useState([]);
  const [totalPages, settotalPages] = useState(1);
  const [page, setpage] = useState(1);
  const [selectdep, setselectdep] = useState([]);
  console.log(totalPages);
  const getdata = async () => {
    try {
      let res = await axios.get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees",
        {
          params: {
            page: page,
            limit: 10,
            filterBy: "department",
            filterValue: selectdep,
          },
        }
      );
      console.log(res);
      setdata(res.data.data);
      settotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageChange = (value) => {
    setpage(value);
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectdep, page]);
  return (
    <div>
      <div>
        <div>
          {/* implement Department dropdown here */}
          <select
            name=""
            id=""
            className="department_list"
            onChange={(e) => setselectdep(e.target.value)}
          >
            <option value="Select Department" hidden>
              -Select Department--
            </option>
            <option value="hr">hr</option>
            <option value="finance">finance</option>
            <option value="marketing">marketing</option>
            <option value="engineering">engineering</option>
            <option value="operations">operations</option>
          </select>
        </div>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* map the  rows here */}
            {data.length > 0 &&
              data.map((el) => (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td className="name">{el.name}</td>
                  <td className="gender">{el.gender}</td>
                  <td className="department">{el.department}</td>
                  <td className="Salary">{el.salary}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* import Pagination component here */}
      <Pagination
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        currentPage={page}
      />
    </div>
  );
};
export default EmployeesTable;
