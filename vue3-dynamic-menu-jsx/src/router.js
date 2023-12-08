import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
	{
		path: '/index',
		component: () => import("@/components/Layout.vue")
	},
	{
		path: '/echart',
		component: () => import("@/pages/echart.vue")
	},
	{
		 path: '/about',
		 component: () => import("@/pages/about.vue")
	}, 
	{
		path: '/button',
		component: () => import("@/pages/button.vue")
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
