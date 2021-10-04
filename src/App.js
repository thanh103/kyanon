import {
  MenuOutlined,
  CaretDownOutlined,
  DownOutlined,
  MoreOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Menu, Dropdown, Input, Form } from "antd";
import "./App.css";

import Employees from "./Employees";
import { columns } from "./constants";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/employees");
    const employees = await response.json();
    setEmployees(employees);
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">Select Columns</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">Download Employees</a>
      </Menu.Item>
      {/* <Menu.Divider /> */}
      <Menu.Item key="3">Import Employees</Menu.Item>
      <Menu.Item key="3">Delete Employees</Menu.Item>
    </Menu>
  );
  return (
    <div className="App">
      <div className="header">
        <div className="left-header">
          <MenuOutlined className="menu-icon" />
          <div className="left-title">PENSKE</div>
        </div>
        <div className="center-header">
          <div className="center-title">NORTH STAR MOTORS</div>
          <CaretDownOutlined className="drop-icon" />
        </div>
        <div className="right-header">
          <div className="circle"></div>
          <div className="right-title">Jean Valjean</div>
          <DownOutlined className="drop-icon1" />
        </div>
      </div>
      <div className="table-header">
        <div className="left-table-header">
          <div className="employee"> Employees</div>
          <div className="employee-num">{employees.length} employees</div>
        </div>
        <div className="right-table-header">
          <FilterOutlined
            onClick={() => setShow(!show)}
            className="filter-icon"
          />
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <MoreOutlined className="threedot" />
            </a>
          </Dropdown>
        </div>
      </div>
      {show ? (
        <div className="columnTrue">
          <div className="filterColumn">
            <div className="word-filter">Filter</div>
            <div className="filter-form">
              <Form layout={"vertical"}>
                <Form.Item label="Field A">
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field B">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Form>
            </div>
          </div>
          <Employees employees={employees} columns={columns} />
        </div>
      ) : (
        <Employees employees={employees} columns={columns} />
      )}
    </div>
  );
}

export default App;
