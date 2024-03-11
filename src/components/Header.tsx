import HeaderComponent from '@/core/molecules/Header';

const links = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 1,
    name: 'About',
    href: '/about',
  },
  {
    id: 1,
    name: 'Products',
    href: '/products',
  },
  {
    id: 1,
    name: 'Contact',
    href: '/contact',
  },
];

const Header = () => <HeaderComponent links={links} />;

export default Header;
