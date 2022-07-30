import React ,{useState} from 'react'
import './EditForm.css'
import axios from "axios"
import { useParams } from 'react-router-dom'

const EditForm = (e) => {
    const [Types, setTypes] = useState('')
    const[message,setMessage]=useState('')
    

    const params = useParams();


const url=`http://localhost:5000/message/${params.id}`
console.log(url);


    const contactClick=async (e)=>{
      const subject="contacting"
        e.preventDefault();
      const formData={
      Types:Types,
      message:message,
      Id:2,
      }

      axios.put(url, formData)
   .then(res => setMessage('sucess'))
   .catch(err => {setMessage('Unable edit message ')
  return console.log(err)})

    };
    
  return (
    <>
    <div className='form__container' >
    <form onSubmit={contactClick} className='contact__form'>
    {message}

        <input type="text" placeholder='Types' value={Types} required onChange={(e)=>setTypes(e.target.value) 
} />


        <input type="text"  placeholder='Message' value={message} required onChange={e=>setMessage(e.target.value)} />
        <input type="submit" title="Submit" />

    </form>
    </div>
    </>
  )
}

export default EditForm