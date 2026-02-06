//using class components 
class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </>
    );
  }
}

//functional components usign hook
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

//Hooks lead to cleaner, shorter, and more readable code.
//Hooks remove the need for this, constructor, and multiple lifecycle methods.
