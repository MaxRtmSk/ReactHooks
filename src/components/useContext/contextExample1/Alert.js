import React from "react";
import { useContext } from "react";
import { AlertContext } from "./ContextExample1";

export default function Alert() {
  const alert = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div>
      <p>Алерт</p>
    </div>
  );
}
