import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App(){
  return (
  <Router>
    <Routes>
    <Route path= "/movie/:id"  element = {<Detail/>}/>
    <Route path = {`${process.env.PUBLIC_URL}/`} element = {<Home/>}/>  
    </Routes>
  </Router>
  );
}


export default App;


/*
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
    console.log(keyword); //dependency 가 바뀔때 실행되는 코드를 (여기서는 console.log) effect 라고한다. 추가로 아래와같이 컴포넌트가 없어지거나 사라질때 실행되는 clean up 함수가 있다.
    return () => console.log("destroyed");  //component 가 없어질때, 특정 값이 변경되기 직전에 실행된다. 변화가 감지되면 위의 effect보다 먼저 실행된다.
  }, [keyword])   //keyword 값이 바뀔때만 위의 console 코드가 실행됨. 이때 변화의 기준이 되는것이 [] 안에오게 되는데 이를 dependency 라고함. dependency가 비어있다면, [] 상태라면 한번만 effect가 실행됨.


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
*/


/*
function App() {
  const [toDo,setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  return (
  <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange = {onChange} value = {toDo} type="text" placeholder="Write your to do"/>
      <button>Add To Do</button>
    </form>
    <hr />
    <ul>
      {toDos.map((item, index) => <li key = {index}>{item}</li>)}
    </ul>
  </div>);
}*/

/*import {useState, useEffect} from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [userInput, setinput] = useState(0);
  useEffect(() => {
  fetch("https://api.coinpaprika.com/v1/tickers").then(response => response.json()).then((json) => {setCoins(json); setLoading(false)});
  }, [])
  const onChange = (event) => {
    setinput(event.target.value);
  };
  return ( 
  <div>
    <h1>The Coins</h1>
    {loading ? <strong>Loading...</strong>:null}
    <input value = {userInput} type = "number" onChange = {onChange} placeholder = "USD 값을 입력하세요"/>


    <ul>
      {coins.map((coin) => (
       <><h1>
          {userInput / coin.quotes.USD.price} {coin.name}
        </h1>
        <li>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </li></>
      ))}
    </ul>
  </div>
  );
}
*/