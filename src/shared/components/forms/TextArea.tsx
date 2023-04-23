import { UserIcon } from '@heroicons/react/24/solid';
import { ChangeEvent } from 'react';
import { JsxElement } from 'typescript';

export default function TextArea(props:{name:string,required:boolean,className?:string,placeholder:string,label?:boolean,onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void} ) {
  const {name,placeholder,label,onChange,required,className} = props;
  return <>
    <div className="w-full md:px-4 ">
      <div className="mb-12">
        {(label ===false) ? <></>: <label className="text-deepforestlight mb-1 block text-base font-medium capitalize">
          {name}
        </label>}
        <div className="relative">
          <textarea name={name} onChange={onChange} required={required} placeholder={placeholder} className={` h-20 w-full rounded border-2 border-transparent p-3 pl-4 text-black bg-gray-200 focus:bg-transparent placeholder-[#929DA7] outline-none transition focus:border-blue-700 active:border-blue-600 disabled:cursor-default disabled:bg-[#F5F7FD]  ${className}`} />
        </div>
      </div>
    </div>
  </>;
}
