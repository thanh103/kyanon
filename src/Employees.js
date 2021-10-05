import { Table } from "antd";
import { employees } from "./constants";

function Employees(props) {
  const { employees, columns } = props;
  //object destructuring
  return <Table dataSource={employees} columns={columns} className="table" />;
}

export default Employees;
