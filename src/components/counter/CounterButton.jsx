//import { useState } from 'react'
import { PropTypes } from 'prop-types';
import './Counter.css'

//Counter 레벨에서 상태를 관리
export default function Counter(){
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count+by);
    }
    function decrementCounterParentFunction(by){
        setCount(count-by);
    }

    function resetCounter(){
        setCount(0);
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <button className="resetButton" 
                        onClick={resetCounter}
                        >Reset
                </button>
        </>
    )
}

//여기서 by로 property받아옴
function CounterButton({by, incrementMethod, decrementMethod}) {
    
    //javascript 객체로 정의하는거임 
    // const buttonStyle = {
    //     fontSize:"16px",
    //     backgroundColor: "#00a5ab",
    //     width:"100px",
    //     margin: "10px",
    //     color: "white",
    //     padding: "15px",
    //     borderRadius: "30px"
    // };
    //이렇게 해도 되는데 가장 좋은 방법은 css 파일을 만드는거

    //const [count, setCount] = useState(0); //2개의 return 1. state값 2. state를 업데이트하는 함수(배열로 반환됨)

    // function incrementCounterFunction(){
    //     //setCount(count+by);
    //     incrementMethod(by);
    // }
    function decrementCounterFunction(){
        //setCount(count-by);
        decrementMethod(by);
    }

    return (
        <div className="Counter">
            {/* 여기서 함수에 ()를 붙이면 함수 호출 값이 할당되어있어서 결과값이 onClick 에 할당되는거임 -> 그래서 클릭해도 안변함
            원하는건 클릭했을 때 함수 그 자체를 연결하는거여서 ()가 없음 */}
            <div>
                <button className="counterButton" 
                        onClick={()=> incrementMethod(by)}  //이런식으로 onClick 리스너에 incrementCounterFunction 함수의 참조값을 넘겨주는 대신에 화살표함수로 대체 가능
                        //style={{fontSize:"100px"}}  //이런식으로 직접 css스타일 정의 가능
                        //style={buttonStyle}           //이런식으로도 가능 위에서 {} 가 두개인 이유도 이거
                        >+{by}
                </button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                        >-{by}
                </button>
            </div>
        </div>
    )
}

//프로퍼티의 타입을 설정해줌 -> 이걸 해주면 문자가 들어왔을 때 err
CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}