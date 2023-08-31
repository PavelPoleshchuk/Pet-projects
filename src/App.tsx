import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { decrement, increment, incrementByAmount } from "./store/btnSlice";
import { addInputValue } from "./store/inputSlice";

function App() {
  // const [state, setState] = useState(0);
  const count = useSelector((state: RootState) => state.count.value);
  const inputCount = useSelector((state: RootState) => state.input.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>
        {count}----
        {inputCount}
      </h1>
      <button
        style={{ marginRight: 10 }}
        onClick={() => {
          dispatch(increment());
        }}
      >
        dispatch(increment())
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        dispatch(decrement())
      </button>

      <input
        type="text"
        value={inputCount}
        onChange={(e) => {
          dispatch(addInputValue(+e.currentTarget.value));
        }}
      />
      <button onClick={()=>dispatch(incrementByAmount(inputCount))}>`dispatch(incrementByAmount({inputCount}))`</button>
      

    </>
  );
}

export default App;
