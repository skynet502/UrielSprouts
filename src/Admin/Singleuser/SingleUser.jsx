import React,{useEffect, useState} from 'react'
import './SingleUser.scss'
import { collection, getDocs, deleteDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../Components/firebaseConfig';
import { list } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { HiDownload } from 'react-icons/hi';
const SingleUser = () => {

    const [data, setData] = useState([]);

    const {id} = useParams();

    const style={
        size:30,
        color:'white'
    }

    useEffect(
        ()=>{
            const docRef = doc(db, 'users', id);
            onSnapshot(docRef, (snapshot) =>{
                setData({...snapshot.data(), id:snapshot.id});
            })
        }
    )
      console.log(data)

  return (
    <div className='singles'>
    <div className='file-download'>
    <a href={data.file}>Download File <HiDownload style={style} /> </a>
    </div>
        <p>Email : {data.email}</p>
    </div>
    
  )
}

export default SingleUser