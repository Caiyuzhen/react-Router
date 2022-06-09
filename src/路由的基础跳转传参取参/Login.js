// 🚀 编程式路由, 要跳转到对应的路由地址


    //🌞注意，首先得在 App.js 定义好路由！



    //纯跳转
      //How?
          //纯跳转第一步：导入 useNavigate 钩子函数
          //纯跳转第二步：执行钩子函数得到【跳转函数】
          //纯跳转第三步：定义跳转函数，传入目标【路由路径】
          //纯跳转第四步：执行跳转函数完成跳转（如果在跳转的时候不想加历史记录，可以传【额外的参数】 replace 为 true）


//———————————————————————————————————————————————————————————————————————————————————————————————————————
     

    //跳转 + 传参

      //How？
        //🔥🔥方式一：searchParams 传参 (查询字符串传参)
            //🚗 1. 首先还是需要导入{useSearchParams}方法

            //传参
              //🚗2. navigate('/about?id=1001')

            //取参
              //🚗3. let [params] = useSearchParams()
              //🚗4. let id = params.get('id')

            //使用参数
              //🚗5. <div>  {id} </div>


        //🔥🔥方式二：params 传参 (路径传参)
            //🏍️ 1. 首先还是需要导入{useParams }方法

            //传参
              //🏍️2. navigate('/about/1001')

            //取参
              //🏍️3. let params = useParams()
              //🏍️4. let id = params.id

            //使用参数
              //🏍️5. <div>  {id} </div>



//纯跳转第一步：导入 useNavigate 钩子函数
import {useNavigate} from 'react-router-dom'


function Login(){

  
  //纯跳转第二步：执行钩子函数得到【跳转函数】,解构赋值
  const navigate = useNavigate()


  //纯跳转第三步：定义跳转函数，传入目标【路由路径】
  function goAbout (){

    //🔥🔥方式一：searchParams 传参 (查询字符串传参)
    //纯跳转第四步：执行跳转函数完成跳转（如果在跳转的时候不想加历史记录，可以传【额外的参数】 replace 为 true）,这样就没法通过浏览器的返回了.  如果是:navigate('/about') //这样的路由配置，还是可以通过浏览器的回退键来返回上一页
    //🚗2.路由配置 + 传参, 传参方式为 ?id=XXX  & name=XXX   ,相当于传了两个参数，/about 是路径，id=XXX  & name=XXX   &  xx=XXX  长度可以自定义拼接


    //🔥🔥方式二：params 传参 (路径传参)
    //🏍️2. navigate('/about/1001')
    navigate('/about/1001')
    
  }


  return(
    <div>
      Login
      <button onClick={goAbout}> 跳转到关于 </button>
    </div>
  )
}

export default Login