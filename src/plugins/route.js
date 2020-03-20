
import router from '@/router'

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({
      name: from.name
    }) : next('/error')
  } else {
    next()
  }
})
