import React,{useEffect, useState} from 'react'
import './SingleUser.scss'
import { collection, getDocs, deleteDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../Components/firebaseConfig';
import { list } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ExecEmployUser = () => {

    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(
        ()=>{
            const docRef = doc(db, 'Exec-Registration', id);
            onSnapshot(docRef, (snapshot) =>{
                setData({...snapshot.data(), id:snapshot.id});
            })
        }
    )
      

  return (
    <div className='singles'>
        <p> First Name : {data.firstname}</p>
        <p>Last Name : {data.lastname}</p>
        <p> Email : {data.email}</p>
        <p>Gender : {data.gender}</p>
        <p>Date of Birth : {data.birthday}</p>
        <p>Level Of Education : {data.levelOfEducation}</p>
        <p>Preferred Area of Expertise : {data.PrefferedAreaOfExpertise}</p>
      

    </div>
    
  )
}

export default ExecEmployUser