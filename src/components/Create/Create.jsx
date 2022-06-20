import React, { useState } from 'react'
import styles from './Create.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Create = () => {
  const navigate = useNavigate()
  const [title,setTitle ] = useState('')
  const [body,setBody ] = useState('')
  const form = {title,body, user_id: Math.floor(Math.random() * 5000)}
  const url ='http://localhost:4000/posts'
  const submit = async (e)=>{
    e.preventDefault()
    await axios.post(url,form)    
    navigate('/')
  }

  return (
    <div className={styles.create}>

      <form onSubmit={submit}>
        <div className={styles['form-group']}>
          <h4>Title</h4>
          <input 
          type="text" 
          name='title'
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          />
        </div>
        <div className={styles['form-group']}>
          <h4>Body</h4>
          <input 
          type="text" 
          name='body'
          onChange={(e)=>setBody(e.target.value)}
          value={body}
          />
        </div>

       {body && title && <button>Send</button> }
       {body && !title && <button disabled className={styles['btn-grey']}>Send</button> }
       {!body && title && <button disabled className={styles['btn-grey']}>Send</button> }
       {!body && !title && <button disabled className={styles['btn-grey']}>Send</button> }
      </form>

    </div>
  )
}

export default Create