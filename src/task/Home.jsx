import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'
import Page10 from './pages/Page10'
import Page11 from './pages/Page11'
import Page12 from './pages/Page12'
import Page13 from './pages/Page13'
import Page14 from './pages/Page14'
import Page15 from './pages/Page15'
import Page16 from './pages/Page16'
import Page17 from './pages/Page17'
import Page18 from './pages/Page18'
import Page19 from './pages/Page19'
import Page20 from './pages/Page20'

const Home = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element:<Page1/>
        },
        {
            path:"/page2",
            element:<Page2/>
        },
        {
            path:"/page3",
            element:<Page3/>
        },
        {
            path:"/page4",
            element:<Page4/>
        },
        {
            path:"/page5",
            element:<Page5/>
        },
        {
            path:"/page6",
            element:<Page6/>
        },
        {
            path:"/page7",
            element:<Page7/>
        },
        {
            path:"/page8",
            element:<Page8/>
        },
        {
            path:"/page9",
            element:<Page9/>
        },
        {
            path:"/page10",
            element:<Page10/>
        },
        {
            path:"/page11",
            element:<Page11/>
        },
        {
            path:"/page12",
            element:<Page12/>
        },
        {
            path:"/page13",
            element:<Page13/>
        },
        {
            path:"/page14",
            element:<Page14/>
        },
        {
            path:"/page15",
            element:<Page15/>
        },
        {
            path:"/page16",
            element:<Page16/>
        },
        {
            path:"/page17",
            element:<Page17/>
        },
        {
            path:"/page18",
            element:<Page18/>
        },
        {
            path:"/page19",
            element:<Page19/>
        },
        {
            path:"/page20",
            element:<Page20/>
        }
    ])
  return <RouterProvider router={routes}/>
}

export default Home