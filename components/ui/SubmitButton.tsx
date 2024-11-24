import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex w-[8rem] bg-blue-800 text-white px-7 py-3 items-center gap-2 rounded-full outline-none hover:bg-blue-500 transition disabled:bg-opacity-75"
      disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit <FaPaperPlane />
        </>
      )}
    </button>
  );
}
