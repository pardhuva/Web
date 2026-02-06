import {React,useState} from 'react';

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({title,details});

    setTask(copyTask);
    console.log(task);

    setTitle('');
    setDetails('');
  };

  const deleteNote = (idx) =>{
     const copyTask = [...task];
     copyTask.splice(idx,1);

     setTask(copyTask);
  }
  
  const [title,setTitle] =  useState('');
  const [details, setDetails] = useState('');
  const [task,setTask] = useState([]);

  return (
    <div className='h-screen bg-black text-white'>
      <div className='lg:flex'>

        <form
          onSubmit={(e) => { submitHandler(e) }}
          className='flex p-10 gap-4 lg:w-1/2 flex-col items-start'
        >
          <h1 className='text-3xl font-bold mb-4'>Add Notes</h1>

          {/*first input */}
          <input
            type="text"
            placeholder="Enter Notes heading"
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e) =>{
              setTitle(e.target.value);
            }}
          />
          {/* detailed input*/}
          <textarea
            placeholder="Enter details"
            className='px-5 w-full h-32 py-2 font-medium border-2 rounded outline-none flex items-start flex-row'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />
          <button className='bg-white w-full active:bg-gray-800  font-medium outline-none text-black px-5 py-2 rounded'>
            Add Note
          </button>
        </form>

        
        <div className='lg:w-1/2 p-10 lg:border-l-2 h-screen'>
          <h1 className='text-3xl font-bold mb-4'>Recent Notes</h1>

          <div className='flex items-start justify-start flex-wrap gap-5 mt-6 h-[90%] overflow-auto'>

            {task.map((elem,idx) =>(

              <div key={idx} className=" flex justify-between flex-col h-45 w-40 rounded-2xl  relative bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black p-5 pb-3">
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                   <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
                </div>
                  <button onClick={() =>{deleteNote(idx)}} className=' cursor-pointer active:scale-95 w-full bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
