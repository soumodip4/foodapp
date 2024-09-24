import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";

function SweetAlertComponent({ confirm, cancel, title, subtitle, type }) {
  return (
    <SweetAlert
      style={{ zIndex: "1" }}
      title={title}
      onConfirm={confirm}
      type={type !== undefined ? type : "danger"}
      showCancel={true}
      confirmBtnStyle={{ backgroundColor: "blue",color: "#fff",textDecoration:"none", border: "none", padding: "10px 20px", borderRadius: "5px" }}
      cancelBtnStyle={{ backgroundColor: "#f44336", color: "#fff", textDecoration:"none", border: "none", padding: "10px 20px", borderRadius: "5px" }}
      onCancel={cancel}
    >
      <h5>{subtitle}</h5>
    </SweetAlert>
  );
}

export default SweetAlertComponent;
