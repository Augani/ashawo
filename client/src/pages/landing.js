import React from 'react'
import { connect } from 'react-redux'
import Back from '../images/undraw_party_lqnv.svg'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import ReactPlayer from 'react-player'
import VideoSide from '../components/videoSide'
import { Spinner } from 'evergreen-ui'
import { Link, withRouter } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { toaster } from 'evergreen-ui'
import Lazyload from 'react-lazyload'
import {LoginUser} from '../actions'
import {LOGIN_SCRIPT} from '../utils/queries'


function Landing (props) {
  console.log(props)
  const [loginRun] = useMutation(LOGIN_SCRIPT)

  const [values, setValues] = React.useState({
    signClicked: false,
    username: '',
    password: ''
  })

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const SignIn = async () => {
    if(!values.username)return toaster.warning('Please give a username/email');
    if(!values.password)return toaster.warning('Please give a password')
    setValues({ ...values, signClicked: true })
    var response = await loginRun({
      variables: { username: values.username, password: values.password }
    })

    if (!response.data.login._id) {
      setValues({ ...values, signClicked: false, username: '', password: '' })
      return toaster.danger('Invalid Username and/or password')
    } else {
      toaster.success('Login Successful')
      props.LoginUser(response.data)
    }

    props.history.push('/onboard')
  }

  return (
    <div className='h-screen w-screen grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1'>
      <div className='rightland relative  overflow-hidden'>
        <VideoSide />
        <div className='videoOverlay'></div>
      </div>
      <div className='leftLog flex flex-col justify-center content-center'>
        <div className='logoArea flex flex-col justify-center content-center items-center'>
          <div className='logo flex flex-row justify-center'>
            <h4 className='logoName first'>h</h4>
            <h4 className='logoName second'>u</h4>
            <h4 className='logoName third'>K</h4>
            <h4 className='logoName first'>a</h4>
          </div>
          <h6 className='logoSub text-center'>Your express hooker service</h6>
        </div>
        <hr />

        <div className='formHolder flex items-center justify-center'>
          <form className='w-1/2'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full  px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Email/username
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-email'
                  onChange={e => onChange(e)}
                  name='username'
                  value={values.username}
                  type='text'
                />
              </div>
              <div className='w-full  px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Password
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-password'
                  type='password'
                  value={values.password}
                  name='password'
                  onChange={e => onChange(e)}
                  placeholder='******************'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 pl-4 pr-4 mb-2 flex flex-row justify-center '>
              <div className='md:w-1/2 '>
                <label
                  className='block RHold uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-zip'
                >
                  <Link to='/forgot'>Forgot Password?</Link>
                </label>
              </div>
              <div className='md:w-1/2 pl-3 flex flex-row justify-center content-center'>
                {values.signClicked ? (
                  <Spinner className='signSpin' />
                ) : (
                  <Button
                    onClick={() => SignIn()}
                    className='loginBtn bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  >
                    SignIn
                  </Button>
                )}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 pl-4 pr-4 mt-5 flex flex-row justify-center '>
              <Button className='RHold bg-grey-500 w-full hover:bg-grey-700 text-black-200 font-bold py-2 px-4 rounded'>
                <Link to='/signup'>
                  {' '}
                  Don't have account? <span className='RSign'>Sign Up</span>
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = {
  LoginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Landing))
