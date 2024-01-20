export default function FirstComponent(){
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


  //모듈당 하나의 default export 만 가능함
  //그래서 default를 없애주는데 여기서 이 파일을 다른곳에서 import 하면 ( {} 없이 ) default 컴포넌트를 써줌 -> 이걸 써주려면 {} 를 해줘야함
  export function FifthComponent(){
    return(
      <>
        <div className="FirstComponent">Fifth Component</div>
      </>
    );
  }


  