import { UserIcon } from '@heroicons/react/24/solid';

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label?: boolean;
  type: string;
  Icon: any;
  required: boolean;
}

export default function InputField(props: InputFieldProps) {
  const { name, type, Icon, label, placeholder, onChange, required } = props;
  return (
    <>
      <div className="w-full px-4 ">
        <div className="mb-4 md:mb-8">
          {label === false ? (<></>) : (
            <label className="text-deepforestlight mb-3 block text-base font-medium capitalize">
              {name.split('-').join(' ')}
              <span className="text-red-500">{required ? '*' : ''}</span>
            </label>
          )}
          <div className="relative">
            <input
              required={required}
              placeholder={placeholder}
              type={type}
              onChange={onChange}
              name={name}
              className={'border-form-stroke w-full rounded-xl border p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-blue-700 active:border-blue-700 disabled:cursor-default disabled:bg-[#F5F7FD]'}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icon className="h-6 w-6 text-gray-300"></Icon>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
