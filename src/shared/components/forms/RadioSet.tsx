import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export default function RadioSet(props:{radios: string[],name:string,onChange:(e:ChangeEvent<HTMLInputElement>)=>void}) {
  const {radios,name,onChange} = props;
  return <>
    <div className="flex w-full flex-wrap gap-4">
      {
        radios.map((radio,index) => {
          return <div key={index} className="my-2 w-fit">
            <input onChange={onChange} className="peer invisible w-0" type="radio" id={`${name}${index}`} name={name} value={radio} />
            <label className="peer-checked:bg-secondary w-fit cursor-pointer rounded-full border border-primary bg-slate-50 px-4 py-2 text-primary peer-checked:border-0 peer-checked:text-white" htmlFor={`${name}${index}`}>{radio}</label>
          </div>;
        })
      }

    </div>
  </>;
}