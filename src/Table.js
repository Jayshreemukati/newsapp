import React, { useEffect, useState } from "react";
import axios from "axios";
import FormDialog from "./FormDialog";

export default function Table() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const [deletedata1, setDeletedata1] = useState({});

  const getdata = () => {
    axios.get("http://localhost:3001/getUser").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const deletedata = (value) => {
    axios
      .delete(`http://localhost:3001/deleteUser/${value._id}`)
      .then((res) => {
        setDeletedata1(res.deletedata1);
        console.log(res.deletedata1);
        getdata();
      });
  };
  

  function edit(user) {
    setOpen(true);
    setSingleUser(user);
  }

  return (
    <div>
      <table>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>EMAIL</th>
          <th>CONTACT</th>
          <th>PASSWORD</th>
        </tr>
        {data.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.fullName}</td>
              <td>{value.age}</td>
              <td>{value.email}</td>
              <td>{value.contact}</td>
              <td>{value.password}</td>
              <button onClick={() => edit(value)}>edit</button>
              <button onClick={() => deletedata(value)}>delete</button>
            </tr>
          );
        })}
      </table>
      <FormDialog
        open1={open}
        setOpen1={setOpen}
        singleUser1={singleUser}
        setSingleUser1={setSingleUser}
      />
    </div>
  );
}
