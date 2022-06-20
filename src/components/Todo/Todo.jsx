import React, { useState, useEffect } from 'react'
import styles from './Todo.module.css';
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Todo = () => {
  // const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const form = {user_id: Math.floor(Math.random() * 5000), title, date}
    const url ='http://localhost:3000/todos'
    const [data, setData] = useState(null)


    const submit = async (e)=>{
      e.preventDefault()
      await axios.post(url,form)    
      getData()

    }
  


    const getData = async () => {
      try {
        const res = await axios.get(url)
        setData(res.data)

      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getData()

    }, [])


  return (
    <div className={styles.todo}>
      <form onSubmit={submit} >
        <div className={styles['form-group']}>
          <h4>Todo List:</h4>
          <input 
          type="text"
          name='title'
          placeholder='Add an item...'
          onChange={(e)=>setTitle(e.target.value)}
          value={title}

          />

          <input 
          type="date"
          name='date'
          onChange={(e)=>setDate(e.target.value)}
          value= {date}


          />
          <button >Add</button>
          </div>
          
      </form>

      {data && data.map((value, idx) => (
        <div key={idx}>
          <p>{value.title}</p>
          <p>{value.date}</p>
        </div>
      ))}

    </div>
  )
}

export default Todo


