import React from 'react'
import { useEffect,useState } from 'react';

function TodoDate() {
    const [dateTime, setDateTime] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000)
        return () => clearInterval(interval);
    }, [])
  return (
    <h2 className='datetime'>{dateTime}</h2>
  )
}

export default TodoDate