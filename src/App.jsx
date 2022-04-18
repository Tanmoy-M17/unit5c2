import './App.css';
import { AddStudent } from './components/AddStudent';
import { ShowStudents } from './components/ShowStudents';
import{useState} from"react";

function App() {

  const [ee,setdata]=useState(false);
  function change(){
    setdata((e)=>{
      return !e;
    })
  }
  return (
    <div className="App">
<button className='btn' onClick={change}>Change</button>
{ee ?<AddStudent/>:<ShowStudents/>}
    </div>
  );
}

export default App;