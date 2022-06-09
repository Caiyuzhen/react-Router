//🌞注意，首先得在 App.js 定义好路由！



//获取 login 页面通过路由传过来的参数




//🚗 1.导入方法
import {useSearchParams,useParams} from 'react-router-dom'




function About (){
  //🔥🔥方式一：searchParams 传参 (查询字符串传参)
  // //🚗3.解构赋值，获得来自 login 的参数，params 是一个对象，里边有一个 get 方法，可以获取对应的参数
  // let [params] = useSearchParams()

  // //🚗4.把【参数的名称】作为 get 方法的【实参】,用 params.get() 方法来获取对应的对象的参数，id 就是那个对象
  // let id = params.get('id')//因为要传入参数名称在 login 那边叫做 id
  // let name = params.get('name')
  // //let school = params.('school')
  // //...可以获取很多参数


  
  
  //🔥🔥方式二：params 传参 (路径传参)
  let  params = useParams() //params 直接就是一个对象！

  //🏍️4. let id = params.id
  let id =params.id


  return(
    <div
      style={{
        backgroundColor:'#ccc222',
        height:"2rem",
        lineHeight:"2rem"
      }}
    // 🚗5.使用参数
    // >About:得到的参数值为{id}+{name}</div>

    //🏍️5.使用参数
    >About:得到的参数值为{id}</div>
  )
}


export default About