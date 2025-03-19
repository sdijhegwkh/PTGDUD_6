import react, { useReducer, useRef, useState } from "react";

const click = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function counterReducer(state, action) {
  switch (action.type) {
    case click.INCREMENT:
      return { count: state.count + 1 };
    case click.DECREMENT:
      return { count: state.count - 1 };
    // case click.MULTIPLY:
    //   return { count: state.count * state.count };
    // case click.DIVIDE:
    //   return { count: state.count / state.count };
    default:
      return state;
  }
}

function InputEx() {
  const inputRef = useRef();
  const handleClick = () => {
    alert("Input value: " + inputRef.current.value);
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập gì đó..." />
      <button onClick={handleClick}>Lấy giá trị</button>
    </div>
  );
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: click.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: click.DECREMENT })}>-</button>
    </div>
  );
}
function TodoApp(){
  const [todos,setTodos]=useState([]);
  const inputRef=useRef();
  const addTodo=()=>{
    const giatri=inputRef.current.value;
    setTodos([...todos,giatri])
    inputRef.current.value="";
  }
  return(
    <div>
      <h1>To do list</h1>
      <div>
        <input type="text" placeholder="Nhap cong viec can lam" ref={inputRef} />
        <button onClick={addTodo}>Them</button>
      </div>
      <ul>
        {todos.map((todo,index) =>(
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
function Example() {
     const [count, setCount] = useState(1);
      return (
        <div>
          <p>Bạn đã click {count} lần</p>
        <button onClick={() => setCount(count+1)}>
         Click vào tôi
       </button>
       </div>
    );
      }

function Bai1_2() {
  return (
    <div>
      <Counter />
      <InputEx />
      <TodoApp/>
      <Example/>
    </div>
  );
}

export default Bai1_2;
