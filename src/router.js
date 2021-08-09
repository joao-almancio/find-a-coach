import { createRouter, createWebHistory } from 'vue-router';

import { 
    NotFound,
    Coaches,
    CoachesInfo,
    CoachesInfoContact,
    Register,
    Requests
 } from './pages'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: Coaches },
        { path: '/coaches:id', component: CoachesInfo, children: [
            {path: 'contact', component: CoachesInfoContact }
        ]},
        { path: '/register', component: Register },
        { path: '/requests', component: Requests },
        { path: ':notFound(.*)', component: NotFound }
    ]
})