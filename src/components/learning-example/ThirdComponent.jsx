import { Component } from "react"; //class 컴포넌트때문에 있어서 Thirdcomponent.jsx에도 import 해줘야함

//class 컴포넌트 
export default class ThirdComponent extends Component {
    //class 컴포넌트에서는 render 메소드를 이용해서 보여주고 싶은 텍스트를 반환함
    render(){
      return(
        <div className="ThirdComponent">Third Component</div>
      );
    }
  }