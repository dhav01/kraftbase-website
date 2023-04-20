import { UserIcon } from "@heroicons/react/24/solid";
import { ChangeEvent } from "react";
import { JsxElement } from "typescript";

export default function TextArea(props:{name:string,required:boolean,className?:string,placeholder:string,label?:boolean,onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void} ) {
    const {name,placeholder,label,onChange,required,className} = props;
    return <>
        <div className="w-full px-4 ">
            <div className="mb-12">
                {(label ==false) ? <></>: <label className="mb-3 block text-base capitalize font-medium text-deepforestlight">
                    {name}
                </label>}
                <div className="relative">
                    <textarea name={name} onChange={onChange} required={required} placeholder={placeholder} className={`w-full h-40 rounded-xl border border-form-stroke p-3 md:pl-12 pl-4 text-primary placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] ${className}`} />
                </div>
            </div>
        </div>
    </>
}
