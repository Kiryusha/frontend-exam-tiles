import Vue from 'vue';
import Router from 'vue-router';

import List from '@/components/pages/List';
import Detail from '@/components/pages/Detail';
import NotFound from '@/components/pages/NotFound';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '*',
            component: NotFound,
        },
        {
            path: '/',
            component: List,
        },
        {
            path: ':id',
            component: Detail,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }

        return { x: 0, y: 0 };
    },
    linkActiveClass: '_active',
});

export default router;
