import React from 'react';
import {useState} from 'react';

function App(props) {
  const [myinfo, updatemyinfo] = useState([]);
  const processstep = [
    {step : "워크플로워의 오차가 없는지 피그마로 회의진행 후 검수완료"},
    {step : "피그마에서 소스출력 / UI 및  스타일가이드제작"},
    {step : "레이아웃 파일제작 상단-> 하단 -> 사이드제작"},
    {step : "제작이슈 & 사용성개선 제안을 위한 중간보고"},
    {step : "개별제작"},
    {step : "디버그처리와 사용성테스트/ 디지털사후관리 메뉴얼제작 / 보고"}
  ] 

  return (
    <div>
      {
        processstep.length > myinfo.length ?

        <button onClick={ ()=>{
          if(myinfo.length < 6){
            updatemyinfo( [...myinfo, processstep[ myinfo.length ] ]);
          }else{

          }
        }}>뭘 배웠나?</button>
        :
        <p>어렵다</p>
      }

      <ul>
        {
          myinfo.map((item,index)=>{
            return(
              <li key={('study'+index)}>{index+1}단계 : {item.step}을 공부하고 있습니다</li>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;