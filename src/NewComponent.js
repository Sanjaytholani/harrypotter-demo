import { useState } from "react";
import DataList from "./DataList";
import "./NewComponent.css";
const NewComponent = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  fetch("http://hp-api.herokuapp.com/api/characters/")
    .then((response) => {
      response.json().then((data) => {
        setData(data);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  const onHandleButtonClick = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };

  return (
    <div>
      <h1>Data</h1>
      <button onClick={onHandleButtonClick}>
        Click to show More characters
      </button>
      {show ? (
        <button
          style={{
            marginLeft: "10px",
          }}
          onClick={onClose}
        >
          {" "}
          Close
        </button>
      ) : null}
      {show ? <DataList data={data} /> : null}
    </div>
  );
};

export default NewComponent;
