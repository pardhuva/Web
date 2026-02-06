import Card from './Card'
import './App.css'
import i1 from './assets/1.png';
import i2 from './assets/2.png';
import Button from './Button_function';
import UseStateHook from './UseStateHook';
import Form from './Form';
import Reason from './Reason'
import LocalStorage from './LocalStorage';

function App() {
  return (
    <>
      <Card name="pardhuva" age={18} image={i1} />
      <Card name="madhuri" age={19} image={i2} />
      <Button />
      <UseStateHook />
      <Form />
      <LocalStorage />
      <Reason />
      <div>ksdgjdsg</div>
    </>
  );
}

export default App;

