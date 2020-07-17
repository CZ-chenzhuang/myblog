import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

function RouterView(props){
  console.log(props, 'RouterView__props')
  let { routes } = props
  let redirectRoutes = routes.filter(item => item.redirect)
  let redirectCom = redirectRoutes.map((route,index) => <Redirect key={index} path={route.path} to={route.redirect}/>)
  return (
    <Switch>
      {
        routes.map((route, index) => !route.redirect && (
          <Route
            path={route.path}
            key={index}
            exact={route.exact}
            render={(props) => (
              <route.component {...props} routes={route.routes}/>
            )}/>
        )).concat(redirectCom)
      }
    </Switch>
  )
}

export default React.memo(RouterView)