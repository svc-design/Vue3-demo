import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/components/Index.vue'
import About from '@/pages/about.vue'
import Button from '@/pages/button.vue'

export const routes = [
	{
		path: '/',
		name: '主页',
		component: Layout,
		meta: {
			title: '主页',
			affix: true // 加入保护
		  }
	},
	{
		path: '/dashbord',
		name: '主页',
		component: Layout,
		meta: {
			title: 'Dashbord'
		},
		children: [
			{
			path: '/about',
		    name: 'About',
		    component: About,
			meta: {
				title: 'About'
			  }
		    },
			{
				path: '/button',
				name: 'Button',
				component: Button,
				meta: {
					title: 'Button'
				  }
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