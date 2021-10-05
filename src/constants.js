import { Link } from "react-router-dom";

export const employees = [
  {
    key: "1",
    image:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2019/08/4756235_maxresdefault.jpg",
    name: "Mike",
    employeeID: 123456,
    position: "FullStack",
    department: "Head Office ",
    email: "abc@gmail.com",
  },
  {
    key: "2",
    image:
      "https://marvelvietnam.com/wp-content/uploads/2020/03/spiderman-nguoi-nhen-peter-parker.jpg",
    name: "John",
    employeeID: 654213,
    position: "Front-end",
    department: "Head Office ",
    email: "xyz@gmail.com",
  },
  {
    key: "3",
    image:
      "https://hiepsibaotap.com/wp-content/uploads/2020/07/every-spider-man-ps4-mission-as-a-comic-book-cover_3mrg.jpg",
    name: "Anna",
    employeeID: 95912,
    position: "Back-end",
    department: "Head Office ",
    email: "abcxyz@gmail.com",
  },
];

export const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (imageUrl) => <img className="avatar" src={imageUrl} />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, user) => <Link to={`/users/${user.id}`}>{text}</Link>,
  },
  {
    title: "EmployeeID",
    dataIndex: "employeeID",
    key: "employeeID",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

// export { employees, columns };
