import {useState, useEffect} from "react";


function App() {
  const [counter,setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((a) => a+1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    console.log(keyword);
  }, [keyword])   //keyword 값이 바뀔때만 위의 console 코드가 실행됨.

  useEffect(() => {
    console.log(counter);
  }, [counter]) //counter 값이 바뀔때만 위의 console 코드가 실행됨.
  return (
    <div>
      <input value = {keyword} onChange = {onChange} type="text" placeholder="Search Here"/>
      <h1 >{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
