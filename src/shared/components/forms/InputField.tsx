import { UserIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label?: boolean;
  type: string;
  Icon?: any;
  required: boolean;
}

export default function InputField(props: InputFieldProps) {
  const { name, type, Icon, label, placeholder, onChange, required } = props;
  return (
    <>
      <div className="w-full md:px-4 ">
        <div className="mb-2 md:mb-4">
          {label === false ? (<></>) : (
            <label className="text-deepforestlight mb-1 block text-base font-medium capitalize">
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
              className={clsx('border-form-stroke w-full rounded border-2 border-transparent bg-gray-200 p-3 text-black placeholder-[#929DA7]  outline-none transition-all focus:border-blue-700 focus:bg-transparent active:border-blue-700 disabled:cursor-default disabled:bg-[#F5F7FD]',Icon?'pl-12':'pl-4')}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              {Icon ? <Icon className="h-6 w-6 text-gray-300"></Icon> : ''}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
