import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
      <article className="py-[1rem] px-[1.5rem] mb-[1rem] rounded-md border-2 border-solid border-[#e2e8f0] shadow-lg">
        <header className="flex justify-between items-center gap-4">
            <h5 className="font-semibold leading-[1.5] text-[#334155] text-[1.25rem]">{title}</h5>
        </header>
        <p className="mt-4 leading-[2] text-[#64748b]">{info}</p>
      </article>
    )
  }
  
  export default SingleQuestion;