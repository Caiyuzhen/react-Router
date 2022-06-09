import Layout from "./Layout"
import Login from "./Login"
import Board from "./Board"
import Article from "./Article"
import NotFind from "./404"

import { BrowserRouter,Routes, Route, Link } from "react-router-dom"

function App(){
  return(

    //🌞定义路由关系
    <BrowserRouter>
      <Routes>
          <Route path='/'    element={<Layout/>}>
              {/* 定义二级嵌套路由 */}
              {/* 添加 index 属性来定义默认的二级路由默认页, 然后干掉 path */}
              <Route index    element={<Board/>}></Route>
              {/* <Route path="board"  element={<Board/>}></Route> */}

              <Route path="article"  element={<Article/>}></Route>

          </Route>
          <Route path='/login'   element={<Login/>}></Route>

          {/* 兜底 404 页面 */}
          <Route path="*"    element={<NotFind/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App