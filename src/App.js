import logo from './logo.svg';
import './App.css';
import { Component } from 'react'; //class 컴포넌트때문에 있어서 Thirdcomponent.jsx에도 import 해줘야함
import FirstComponent from './components/learning-example/FirstComponent';
import SecondComponent from './components/learning-example/SecondComponent';
import ThirdComponent from './components/learning-example/ThirdComponent';
//다른곳에서 import 하면 ( {} 없이 ) default 컴포넌트를 써줌 -> 이걸 써주려면 {} 를 해줘야함
import {FifthComponent} from './components/learning-example/FirstComponent'; 
import LearningJavaScript from './components/learning-example/LearningJavaScript';
import Counter from './components/counter/CounterButton';


function App() {
  return (
    // <div className="App">
    //   My Todo Application Updated
    //   <FirstComponent></FirstComponent>
    //   <SecondComponent></SecondComponent>
    //   <ThirdComponent></ThirdComponent> 
    //   <FifthComponent></FifthComponent>
    //   <LearningJavaScript></LearningJavaScript>
    // </div>

    <div className="App">
      {/* <PlayingWithProps property1="value1" property2="value2"/> */}
      {/* 이렇게 하면 함수형 컴포넌트 안에서 이 값에 접근할 수 있음
      값에 접근하는 방법은 함수에 매개변수를 추가하는거임 */}
      {/* <Counter by="1"/> 이렇게 하면 숫자를 보낼 수 없음 숫자를 보내려면 {} 안에 넣어서 */}
      {/* <Counter/>  */}
      {/* defaultProps로 디폴트 값 1로 지정해줌 */}
      {/* 여기까지 counter로 이제 CounterButton
      <Counter by={1}/>
      <Counter by={2}/>
      <Counter by={5}/>*/}

      <Counter />

    </div>
  );
}

//{property1: 'value1', property2: 'value2'} 이런식으로 나옴
// function PlayingWithProps(properties){
//   console.log(properties)
//   console.log(properties.property1)
//   return(
//     <div>
//       Props
//     </div>
//   )
// }
//이런식으로 구조분해가 일어남
function PlayingWithProps({property1, property2}){
  console.log(property1)
  console.log(property2)
  return(
    <div>
      Props
    </div>
  )
}






//Component 를 만들 때는 무조건 시작을 대문자로 해줘야됨 (안하면 오류 나옴 warning)

//Babel을 이용해서 jsx 를 js 로 바꿔줌

//함수 컴포넌트 (예전에는 state가 안되서 class를 많이썼는데 이제는 hook으로 되서 함수컴포넌트에 집중해서 쓸거임)

//컴포넌트를 표시하려면 앱 컴포넌트의 계층구조에 포함해야함

/*
function FirstComponent(){
  //return () 안에 넣는건 jsx임 각 컴포넌트에서 반환하는건 뷰 정보이며 jsx임
  // //jsx는 하나의 부모요소가 있어야함
  // return(
  //   <div className="FirstComponent">First Component</div>
  //   <div className="FirstComponent">First Component</div>
  // ); 이런건 불가능
  return(
    <>
      <div className="FirstComponent">First Component</div>
      <div className="FirstComponent">First Component</div>
    </>
  );
}

*/

/*
function SecondComponent(){
  return(
    <div className="SecondComponent">Second Component</div>
  );
}
*/

/*
//class 컴포넌트 
class ThirdComponent extends Component {
  //class 컴포넌트에서는 render 메소드를 이용해서 보여주고 싶은 텍스트를 반환함
  render(){
    return(
      <div className="ThirdComponent">Third Component</div>
    );
  }
}
*/
export default App;
