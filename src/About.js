//获取 login 页面通过路由传过来的参数


//🚗 1.导入方法
import {useSearchParams} from 'react-router-dom'



function About (){

  //🚗3.解构赋值，获得来自 login 的参数，params 是一个对象，里边有一个 get 方法，可以获取对应的参数
  let [params] = useSearchParams()

  //🚗4.把【参数的名称】作为 get 方法的【实参】
  let id = params.get('id')

  return(
    <div
      style={{
        backgroundColor:'#ccc222',
        height:"2rem",
        lineHeight:"2rem"
      }}
    // 🚗5.使用参数(没成功，明天看看)
    >About:得到的参数值为{id}</div>
  )
}


export default About