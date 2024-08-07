import './LoginRegister.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
function Login() {
  // create state members
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the navigate object
  const navigate = useNavigate()

  // use dispatch to update global state
  //const dispatch = useDispatch()

  const onLogin = async () => {
    // client side validation
    if (email.length === 0) {
      toast.warning('enter email')
    } else if (password.length === 0) {
      toast.warning('enter password')
    } else {
      // const result = await login(email, password)
      // if (result['status'] === 'success') {
      //   const { token, name } = result['data']
      //   sessionStorage.setItem('token', token)
      //   sessionStorage.setItem('name', name)
      //   dispatch(loginAction())
      //   toast.success('welcome to the application')
        navigate('/home')
      // } else {
      //   toast.error('invalid email or password')
      // }
    }
  }

  const onBack = () => {
    navigate(-1); // Navigate to the previous page
  }

  return (
    <div className='form-container'>
      <div className='form'>
        <h2 className='page-header'>Login</h2>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
            id='email'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
            id='password'
          />
        </div>
        <div className='mb-3'>
          <div>
            Don't have an account yet? <Link to='/register'>Register here</Link>
          </div>
        </div>
        <div className='button-container'>
          <button onClick={onLogin} className='btn btn-success'>Login</button>
          <button onClick={onBack} className='btn btn-back'>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Login