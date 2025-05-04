import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeToArabic } from "../redux/slices/languageSlice";

function Language() {
  const { language } = useSelector((state) => state.language);
  //dispatch hiyya mkina special tnajem t5adem les actions mta3 slice !!
  const dispatch = useDispatch();
  return (
    <div>
      {language == "francais"
        ? "bonjour"
        : language == "english"
        ? "hello"
        : "اهلا بلاشباب"}{" "}
      {language}
      <button
        onClick={() => {
          dispatch(changeToArabic());
        }}
      >
        arabic
      </button>
    </div>
  );
}

export default Language;
