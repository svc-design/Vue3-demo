import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
	{
		path: '/index',
		component: () => import("@/components/Layout.vue"),
		meta: {
			name: 'index'
		}
	},
	{
		path: '/echart',
		component: () => import("@/pages/echart.vue"),
		meta: {
			name: 'echart'		
		}
	},
	{
		 path: '/about',
		 component: () => import("@/pages/about.vue"),
		 meta: {
			 name: 'about'
		 }
	}, 
	{
		path: '/button',
		component: () => import("@/pages/button.vue"),
		meta: {
			name: 'button'
		}
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
