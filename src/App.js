import React, {useState} from 'react';

const App = () => {

  const [text, setText] = useState("11");
  const [edit, setEdit] = useState(false);

  let content = <div>
    {text}<button onClick={()=> setEdit(true)}>edit</button>
  </div>

  if(edit) {
    content = <div>
    <input type="text"
      value={text}
      onChange={(e) => {
        console.log(e.target.value);
        setText(e.target.value);
      }} 
    />
  <button onClick={()=>setEdit(false)}>edit</button>
  </div>    
  }

  return (
    <>
      {content}
    </>
  );
}

  
export default App;
