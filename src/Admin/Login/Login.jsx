// import React,{useState, useContext} from 'react'
// import './Login.scss'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../Components/firebaseConfig'
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './../../Context/AuthContext';

// const Login = () => {
// const [error, setError] = useState(false)
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

// const navigate= useNavigate()

// const {dispatch} = useContext(AuthContext);

// const handleLogin = (e) => {
//     e.preventDefault()
//     signInWithEmailAndPassword (auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       dispatch({type:'LOGIN', payload:user})
//       navigate('/adminHome')
//     //   dispatch({type:"LOGIN", payload:user})
//     //   navitage("/")
//     })
//     .catch((error) => {
//         setError(true)
//     });
// }
//   return (
//     <div className='login'>
//         <form onSubmit={handleLogin}>
//             <input type='email' placeholder='email' onChange={(e)=> setEmail(e.target.value)} />
//             <input type='password' placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
//             <button type='submit'>Login</button>
//             { error && <span className='error'>Wrong Email or Password</span>}

//         </form>
//     </div>
//   )
// }

// export default Login