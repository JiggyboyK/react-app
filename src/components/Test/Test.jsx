
import { useState,useEffect } from "react"
import axios from 'axios'
import styles from './Test.module.css'


const Test = () => {

  const url = 'http://localhost:4000/posts'
  
  const [pending,setPending] = useState(false)
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)


  const getData = async () =>{
    setPending(true)

    try{
      
      const response = await axios.get(url)
      setData(response.data)
      setPending(false)

    }catch(err){
      console.log(err)
      setError(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className={styles.test}>
      {pending && <p>Loading</p>}
      {error  && <p>{error}</p>}
      {data && data.map((val,idx)=>(
        <div key={idx} className={styles.box}>
          <h1>{val.title}</h1>
          <p>{val.body}</p>
          
        </div>
      ))}

      {/* <form onSubmit={submit}>
        <input 
        type="text"
        name='title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input 
        type="text"
        name='body'
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
       
       <button>Send</button>
      </form> */}
    </div>
  )
}



// const [title,setTitle] = useState('')
//   const [body,setBody] = useState('')

//   const {data,error,pending,postData} = useFetch(url)
   
//   const submit =(e)=>{
//     e.preventDefault()

//     postData(form)
  
//   }
//   const form = {
//     id:'1',
//     user_id: '2',
//     title,
//     body
//   }

export default Test