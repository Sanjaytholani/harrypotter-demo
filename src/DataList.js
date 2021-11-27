import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const DataList = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [itemContent, setItemContent] = useState({});
  const handleOpen = (item) => {
    setOpen(true);
    setItemContent(item);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="container">
            <div>
              <h1>{item.name}</h1>
              <div>
                <Button
                  onClick={() => {
                    handleOpen(item);
                  }}
                >
                  Show more information about the character
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <DialogTitle>{itemContent.name}</DialogTitle>
                </Dialog>
              </div>
            </div>
            <img className="image" src={item.image} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default DataList;
