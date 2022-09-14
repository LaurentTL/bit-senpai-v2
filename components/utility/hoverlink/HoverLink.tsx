import Link from 'next/link';

export interface IHoverLink {
  route: string | '/';
  title: string | 'Hello hover!';
  hoverColor: string;
}

const HoverLink: React.FC<IHoverLink> = ({ route, title, hoverColor }) => {
  return (
    <Link href={route}>
      <a className={`text-white font-light hover:text-${hoverColor}-300`}>
        {title}
      </a>
    </Link>
  );
};

export default HoverLink;
