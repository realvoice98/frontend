import React, { useState,useEffect } from 'react';
import { useSelector } from "react-redux";

function Event() {
  const user_info = useSelector((state) => state.user.user);
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  let eventSource = undefined;
  if (user_info){
    console.log(user_info.email)
  }

  useEffect(() => {
    if (!listening) {
      console.log('a')
      // { withCredentials: true }
      eventSource = new EventSource(`/test/subscribe`);
      
       //eventSource.onmessage = (event) => {
         //console.log("result", event.data);
         //setData(old => [...old, event.data])
       //}

      eventSource.addEventListener("sse", (event) => {
        const result = JSON.parse(event.data);
        console.log("received:", result);
        setData(result)
      });

      eventSource.addEventListener("complete", function(event) {
	console.log('in');
        eventSource.close();
      });

      eventSource.onerror = (event) => {
        console.log(event.target.readyState)
        if (event.target.readyState === EventSource.CLOSED) {
          console.log('SSE closed (' + event.target.readyState + ')')
        }
        eventSource.close();
      };

      eventSource.onopen = (event) => {
        console.log("connection opened")
      };

      setListening(true);
    
    }
    return () => {
      eventSource.close();
      console.log("event closed")
    };

  }, []);

  return (
      <>
      <div className="App">
        <header className="App-header">
          Received Data
          {data}
          {/*{data.map(d =>*/}
          {/*    <span key={d}>{d}</span>*/}
          {/*)}*/}
        </header>
      </div>
      </>
  );
}

export default Event;
