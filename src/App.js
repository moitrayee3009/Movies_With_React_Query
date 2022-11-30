import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const List = React.lazy(() => import('./components/List/List'))
const Details = React.lazy(() => import('./components/Details/Details'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/List' componentt={List} />
            <Route exact path='/Details' component={Details} />
            <Route exact path='/' component={List} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App

// import './App.css'

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'></header>
//     </div>
//   )
// }

// export default App
