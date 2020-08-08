import route from '../routes'

const initRoutes = (routes: []) => {
  const routesArr:Array<object> = []
  const init = (routes) => {
    routes.forEach((route: {routes: []}) => {
      if (!route.routes) {
        routesArr.push(route)
      } else {
        init(route.routes)
      }
    });
  }
  init(routes)
  return routesArr
}

export default initRoutes