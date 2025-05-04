import React from "react";
import { changeColor } from "../redux/slices/buttonColorsSlice";
import { useDispatch, useSelector } from "react-redux";

function Buttons() {
  let dispatch = useDispatch();
  const { color } = useSelector((state) => state.buttonColor);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(changeColor());
        }}
      >
        changer le couleur{" "}
      </button>
      <div>
        <button style={{ backgroundColor: `${color}` }}>hichem</button>
        <button style={{ backgroundColor: `${color}` }}>maroua</button>
      </div>
    </div>
  );
}

export default Buttons;
