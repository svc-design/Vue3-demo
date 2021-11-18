import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/components/Index.vue'
import About from '@/pages/about.vue'
import Button from '@/pages/button.vue'

export const routes = [
	{
		path: '/',
		name: '主页',
		component: Layout
	},
	{
		path: '/dashbord',
		name: '主页',
		component: Layout,
		children: [
			{
			path: '/about',
		    name: 'About',
		    component: About
		    },
			{
				path: '/button',
				name: 'Button',
				component: Button
			}
	   ]
	},
	{
		path: '/echart',
		name: 'Echart',
		component: () => import("@/pages/echart.vue")
	},
	{
		path: '/tabs',
		name: 'Tabs',
		component: () => import("@/pages/atabs.vue")
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router