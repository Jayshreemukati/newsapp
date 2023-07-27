import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";

export default function FormDialog(props) {
  // const [open, setOpen] = React.useState(false);
  const [updatedata, setupdateData] = useState([]);

  const handleClickOpen = () => {
    // setOpen(true);
    props.setOpen1(true);
  };

  const handleClose = async () => {
    // setOpen(false);
    props.setOpen1(false);

    await axios
      .patch(`http://localhost:3001/updatteUser`, props.singleUser1)
      .then((res) => {
        console.log(res.updatedata);
        setupdateData(res.updatedata);
        console.log(props.getdata);
        props.getdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Dialog open={props.open1} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <TextField
            type="text"
            value={props.singleUser1.fullName}
            onChange={(e) => {
              props.setSingleUser1({
                ...props.singleUser1,
                fullName: e.target.value,
              });
            }}
          />
          <br />
          <TextField
            type="contact"
            value={props.singleUser1.contact}
            onChange={(e) => {
              props.setSingleUser1({
                ...props.singleUser1,
                contact: e.target.value,
              });
            }}
          />
          <br />
          <TextField
            type="email"
            value={props.singleUser1.email}
            onChange={(e) => {
              props.setSingleUser1({
                ...props.singleUser1,
                email: e.target.value,
              });
            }}
          />
          <br />

          <TextField
            type="age"
            value={props.singleUser1.age}
            onChange={(e) => {
              props.setSingleUser1({
                ...props.singleUser1,
                age: e.target.value,
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Cancel </Button>
          <Button onClick={handleClose}> update </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
