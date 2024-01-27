"use client";

import { useState } from "react";
import Image from "next/image";
import Status from "./Status";
import Questions from "./Questions";
import Confirmation from "./Confirmation";
import Button from "../../Button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Logo from "@/public/svgs/FormLogo.svg";
const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses,
  bypass = false,
  packet = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1
  );

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center bg-design-white font-workSans font-semibold">
      <div className="w-full flex flex-row justify-end mr-[10%]">
        <Button
          text="Sign Out"
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          loading={loading}
          color="green"
        />
      </div>
      <div className="text-black font-extrabold text-2xl md:text-4xl mt-5">
        <Link href="/">
          <Image className="w-auto h-auto py-4 px-3" src={Logo} />
        </Link>
        <div className="flex justify-center">DESIGN VERSE</div>
        <div className="flex justify-center text-xl md:text-2xl ">2024</div>
      </div>
      <div className="w-10/12 md:w-1/2 xl:w-1/3 my-4">
        <p className="text-xl bg-design-green-200 text-white font-semibold px-4 py-2 rounded-t-xl m-0">
          {header}
        </p>
        <div className="rounded-b-xl bg-white p-3">
          <div className="grid grid-cols-1 gap-3">
            {state === 0 ? (
              <Status object={object} statuses={statuses} setState={setState} />
            ) : state === 1 ? (
              <Questions
                loading={loading}
                setLoading={setLoading}
                object={object}
                setObject={setObject}
                fields={fields}
                onSubmit={onSubmit}
                setState={setState}
                packet={packet}
              />
            ) : (
              <Confirmation />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
