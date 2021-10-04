import { Table } from "antd";

function Employees(props) {
  const { employees, columns } = props;

  return <Table dataSource={employees} columns={columns} className="table" />;
}

export default Employees;
