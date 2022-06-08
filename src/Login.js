// 🚀 编程式路由, 要跳转到对应的路由地址


    //纯跳转
      //How?
          //1.导入 useNavigate 钩子函数
          //2.执行钩子函数得到【跳转函数】
          //3.定义跳转函数，传入目标【路由路径】
          //4.执行跳转函数完成跳转（如果在跳转的时候不想加历史记录，可以传【额外的参数】 replace 为 true）


//———————————————————————————————————————————————————————————————————————————————————————————————————————
     

    //跳转 + 传参

      //How？
        //🔥🔥方式一：searchParams 传参 (查询字符串传参)
            //🚗 1. 首先还是需要导入{useSearchParams, params }方法

            //传参
              //🚗2. navigage('/about?id='1001')

            //取参
              //🚗3. let [params] = useSearchParams()
              //🚗4. let id = params.get('id')

            //使用参数
              //🚗5. <div>  {id} </div>


        //🔥🔥方式二：params 传参 (路径传参)
            //🏍️ 1. 首先还是需要导入{useSearchParams, params }方法

            //传参
              //🏍️2. navigage('/about/1001')

            //取参
              //🏍️3. let params = useParams()
              //🏍️4. let id = params.id

            //使用参数
              //🏍️5. <div>  {id} </div>



//1.导入 useNavigate 钩子函数
import {useNavigate} from 'react-router-dom'


function Login(){

  
  //2.执行钩子函数得到【跳转函数】,解构赋值
  const navigate = useNavigate()


  //3.定义跳转函数，传入目标【路由路径】
  function goAbout (){
    //navigate('/about') //这样的路由配置，还是可以通过浏览器的回退键来返回上一页
    //🚗2. 👇路由配置 + 传参
    navigate('/about?id=1001', {replace: true}) //这样就没法通过浏览器的返回了
    
  }


  return(
    <div>
      Login
      <button onClick={goAbout}> 跳转到关于 </button>
    </div>
  )
}

export default Login