import { UserIcon } from '@heroicons/react/24/solid';
import { ChangeEvent } from 'react';
import { JsxElement } from 'typescript';

export default function TextArea(props:{name:string,required:boolean,className?:string,placeholder:string,label?:boolean,onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void} ) {
  const {name,placeholder,label,onChange,required,className} = props;
  return <>
    <div className="w-full px-4 ">
      <div className="mb-12">
        {(label ==false) ? <></>: <label className="text-deepforestlight mb-3 block text-base font-medium capitalize">
          {name}
        </label>}
        <div className="relative">
          <textarea name={name} onChange={onChange} required={required} placeholder={placeholder} className={`border-form-stroke h-40 w-full rounded-xl border p-3 pl-4 text-primary placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] md:pl-12 ${className}`} />
        </div>
      </div>
    </div>
  </>;
}
