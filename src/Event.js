import React, { useState,useEffect } from 'react';
import { useSelector } from "react-redux";

function Event() {
  const user_info = useSelector((state) => state.user.user);
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  var eventSource = undefined;
  if (user_info){
    console.log(user_info.email)
  }

  useEffect(() => {
    if (!listening) {
      console.log('a')
      eventSource = new EventSource(`/test/subscribe/` + localStorage.getItem('email') );

      eventSource.onopen = (event) => {
        console.log("connection opened")
      }

      eventSource.onmessage = function (event) {
        console.log("result", event.data);
        setData(old => [...old, event.data])
      }


       eventSource.addEventListener('sse', e => {
         console.log(e);
       });

      eventSource.onerror = (event) => {
        console.log(event.target.readyState)
        if (event.target.readyState === EventSource.CLOSED) {
          console.log('eventsource closed (' + event.target.readyState + ')')
        }
        eventSource.close();
      }

      setListening(true);
    }

    return () => {
      eventSource.close();
      console.log("eventsource closed")
    }

  }, [])

  return (
      <div className="App">
        <header className="App-header">
          Received Data
          {data.map(d =>
              <span key={d}>{d}</span>
          )}
        </header>
      </div>
  );
}

export default Event;
