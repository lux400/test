import { DefaultLayout } from 'app/containers/DefaultLayout';

import Images from './gallery';
import NotFound from './404';

export const DefaultRoutes = [
  {
    path: '/images',
    component: Images,
    exact: true,
    wrapper: DefaultLayout,
  },
  {
    path: '/404',
    component: NotFound,
    exact: false,
    wrapper: DefaultLayout,
  },
];
