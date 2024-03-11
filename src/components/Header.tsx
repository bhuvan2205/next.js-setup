import HeaderComponent from '@/core/molecules/Header';

const links = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'About',
    href: '/about',
  },
  {
    id: 3,
    name: 'Products',
    href: '/products',
  },
  {
    id: 4,
    name: 'Contact',
    href: '/contact',
  },
];

const Header = () => <HeaderComponent links={links} />;

export default Header;
