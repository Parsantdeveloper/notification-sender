import { useState,useEffect } from 'react';
import './App.css';
import logo from "./assets/logo.webp"
function App() {
  const [title, setTitle] = useState("");
  const [notification, setNotification] = useState("");
  
  function handleSubmit() {
    Notification.requestPermission().then(permission => {
      if (permission === "granted" && title && notification) {
        new Notification(title, {
          body: notification,
          icon:logo
        });
      }
    });
  }
  useEffect(()=>{
  Notification.requestPermission();
  },[])

  return (
    <>
      <div className='bg-slate-900 w-screen h-screen flex justify-center items-center text-white font-bold font-sans'>
        <div className='flex flex-col gap-9'>
          <h1 className='text-center text-5xl font-bold text-slate-400'>Send Notification</h1>
          <form action="">
            <div className="mb-4 flex flex-col gap-10">
              <input
                onChange={(e) => { setTitle(e.target.value) }}
                type="text"
                className="mt-1 block w-96 h-12 rounded-3xl bg-slate-700 text-white border p-4 border-slate-600 outline-none"
                placeholder="Notification Title" />
              <textarea
                onChange={(e) => { setNotification(e.target.value) }}
                id="notification"
                name="notification"
                className="mt-1 block w-96 h-40 rounded-3xl bg-slate-700 text-white border p-4 border-slate-600 outline-none"
                placeholder="Type Message..."/>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-slate-300 hover:bg-slate-400 text-slate-800 text-3xl w-96 font-bold py-2 px-4 rounded-full"
                onClick={(e) => { e.preventDefault(); handleSubmit(); }}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
