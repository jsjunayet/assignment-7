
import { useState } from 'react'
import './App.css'
import Dynamic from './component/Dynamic'
import Fetch_data from './component/Fetch_data'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [name, setname] = useState([])
  const [cradit, setcradit] = useState(0);
  const [remaining, setremaining] = useState(20)
  const evenhandle = (courseName) => {
    const isexcit = name.find(item => item.id == courseName.id);
    let count = courseName.credits
    if (isexcit) {
      return toast("You cannot add multiple times!");
    }
    else {
      name.forEach(item => {
        count = count + item.credits;
      })
      let remaining = 20 - count;
      if (count > 20) {
        return toast('your cradit finish!')
      }
      else {
        setcradit(count)
        setremaining(remaining)
        const newvalue = [...name, courseName]
        setname(newvalue)
      }

    }

  }
  console.log(cradit);
  console.log(remaining)

  return (
    <>
      <div className='flex flex-col flex-1 lg:flex-row gap-5 '>
        <div className='lg:w-[78%] w-full'>
          <Fetch_data evenhandle={evenhandle} ></Fetch_data>
        </div>
        <div className='lg:w-[22%] w-full'>
          <Dynamic name={name} cradit={cradit} remaining={remaining}></Dynamic>
        </div>
      </div>
    </>
  )
}

export default App
