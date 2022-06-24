// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'promotion',
    path: '/dashboard/promotion',
    icon: getIcon('eva:percent-fill'),
  },
  {
    title: 'condition',
    path: '/dashboard/condition',
    icon: getIcon('eva:book-fill'),
  },
  {
    title: 'voucher',
    path: '/dashboard/voucher',
    icon: getIcon('bi:tag-fill'),
  },
  {
    title: 'gift',
    path: '/dashboard/gift',
    icon: getIcon('eva:gift-fill'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
