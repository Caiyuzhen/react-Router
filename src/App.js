//1.引入路由渲染组件
import Home from './Home';
import About from './About'
import Login from './Login.js'
//2.引入 react-router 函数
import { HashRouter, BrowserRouter, Routes, Route, Link } from "react-router-dom"


//🔥🔥🔥核心组件 Router 的类型有两个，然后一个 React 应用只需要用一次
  //🌟哈希 Router   ————  HashRouter
      //使用 URL 的哈希值实现会，带个 #/XXX


  //🌟浏览器 Router ————  BrowserRouter（推荐）
      //使用 H5 的 history.pushState API 实现 

    

//🔥🔥🔥核心组件 Link
    //🌟用于指定导航连接，完成路由跳转，最后渲染出来是个 A 链接
        //本质就是  <a href="#/XXX"> </a>


function App() {
  return (
    
    //3.👇进行路由配置,声明当前是要用一个非 hash(哈希) 模式的路由
    <BrowserRouter>
      {/* 4.通过 to 属性来指定【元素】跟要跳转的【路由地址】 */}
     {/* 5.通过 to 属性来指定【那个 a 标签】对应哪个【路由地址】 */}
      <Link to='/'>首页</Link>
      <Link to='/about'>关于</Link>

      {/* 6.Routes 配置路由出口 */}
      <Routes>
        {/* 7.通过 Route path 来设置对应的【路由地址】，通过  element 来配置要渲染的【渲染组件】 */}
        <Route path='/'     element={<Home />} >    </Route>
        <Route path='/about'  element={<About />}>  </Route>
        <Route path='/login'  element={<Login />}>  </Route>
      </Routes>     
    </BrowserRouter>


  //🍎本质是通过 Link 绑定 a 标签跟路由地址，然后通过 path 来匹配路由地址，匹配上了就把这个 a 标签的内容渲染出来
    // <HashRouter>
    //   {/* 4.指定路由对象（谁） */}
    //   {/* 5.通过 to 属性来指定【那个 a 标签】对应哪个【路由地址】 */}
    //   <Link to='/'>首页</Link>
    //   <Link to='/about'>关于</Link>

    //   {/* 6.Routes 配置路由出口 */}
    //   <Routes>
    //     {/* 7.通过 Route path 来设置匹配的【路由地址】，通过  element 来【匹配】对应路由要渲染的【渲染组件】 */}
    //     <Route path='/'       element={<Home />} >    </Route>
    //     <Route path='/about'  element={<About />}>    </Route>
    //   </Routes>     
    // </HashRouter>

  )
}

export default App;
