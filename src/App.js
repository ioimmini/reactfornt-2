import React, {useState} from 'react';
import './App.css';


const RecordForm = ({numList, setNumList}) => {

  const [num, setNum] = useState(0);

  return (

    <><div>

      NUMBER : {num} </div><button onClick={() => setNum(num + 1)}>
        increase
      </button><button onClick={() => setNum(num - 1)}>
        decrease
      </button><button onClick={() => setNum(0)}>reset
      </button>
      <hr/>
      <button onClick={()=> setNumList([...numList, num])}>list</button>
      <button onClick={()=>setNumList([])}>reset</button></>
  )

}

const ReocordList = ({numList}) => {
  return (
  <div>
    <h2>list number</h2>
    {numList.length > 0 ?<div>no record</div> :

    <div>record</div>}
    </div>
  )
}


const App = () => {

  const [numList, setNumList] = useState([]);
  return(
    <div style={{margin: "40px auto",
                  width: "400px",
                  textAlign: "center",
                }}>
        <RecordForm numList={numList} setNumList={setNumList}/>
        <ReocordList numList={numList}/>
    </div>

  )
}

  
export default App;
