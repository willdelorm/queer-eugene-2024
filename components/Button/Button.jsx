import React from "react";
import Link from 'next/link'
const Button = ({children, link ,color}) => {
  return (
    <Link href={`${link}`} className={`flex w-full justify-center rounded-3xl px-3 py-1.5 text-sm font-semibold leading-6 ${color} text-white shadow-md uppercase`}>
      <button type="button">
        {children}
      </button>
    </Link>
  );
};

export default Button;
