import React from "react";
import { useContext } from "react";
import { useAlert } from "./AlertContext";

export default function Alert() {
  const alert = useAlert();

  if (!alert.visibility) return null;

  return (
    <div onClick={alert.hide}>
      <p>{alert.text}</p>
    </div>
  );
}
