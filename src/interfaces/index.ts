import { HomeIcon } from '@heroicons/react/24/solid';
export interface PropsWithClassName {
  className?: string;
}

export interface PropsWithIcon {
  Icon?: any;
}

export type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;
