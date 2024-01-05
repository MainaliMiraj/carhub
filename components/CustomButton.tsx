"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
      // btntype={btnType ||'button'}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
