import clsx from 'clsx';
import { HTMLAttributes,PropsWithChildren, useState} from 'react';

const Button = (props: PropsWithChildren & HTMLAttributes<HTMLButtonElement>) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button {...props} className={clsx('btn-primary')}>
      {props.children}
    </button>
  );
};

export default Button;