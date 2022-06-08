//编程式路由,要跳转到对应的路由地址
    //How?
        //1.导入 useNavigate 钩子函数
        //2.执行钩子函数得到【跳转函数】
        //3.定义跳转函数，传入目标【路由路径】
        //4.执行跳转函数完成跳转（如果在跳转的时候不想加历史记录，可以传【额外的参数】 replace 为 true）


//1.导入 useNavigate 钩子函数
import {useNavigate} from 'react-router-dom'


function Login(){

  
  //2.执行钩子函数得到【跳转函数】,解构赋值
  const navigate = useNavigate()


  //3.定义跳转函数，传入目标【路由路径】
  function goAbout (){
    // navigate('/about')
    navigate('/about', {replace: true}) //这样就没法通过浏览器的返回了
  }


  return(
    <div>
      Login
      <button onClick={goAbout}> 跳转到关于 </button>
    </div>
  )
}

export default Login