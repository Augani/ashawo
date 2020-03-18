import React from 'react'
import { connect } from 'react-redux'
import { Pane } from 'evergreen-ui'
import Button from '@material-ui/core/Button'
import { Link, withRouter } from 'react-router-dom';


function Forgot () {
  const Reset = () => {}
  return (
    <div className='forgotMain  h-screen w-screen flex flex-col content-center justify-center'>
      <div className='w-full h-full flex flex-col items-center justify-center content-center'>
        <div className='forgotLogo flex flex-row justify-center'>
          <h4 className='logoName first'>h</h4>
          <h4 className='logoName second'>u</h4>
          <h4 className='logoName third'>K</h4>
          <h4 className='logoName first'>a</h4>
        </div>
        <Pane
          elevation={4}
          className='forgotHold flex flex-col justify-center items-center'
        >
          <div className='w-3/4 py-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Email / username
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='text'
              placeholder='augani@gmail.com'
            />
          </div>
          <Button
            onClick={() => Reset()}
            className='loginBtn  bg-blue-500 w-3/4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Send reset link
          </Button>
          <div className='flex py-5 flex-wrap -mx-3 pl-4 pr-4 mt-5 flex flex-row justify-center '>
              <Button
                className='RHold bg-grey-500 w-full hover:bg-grey-700 text-black-200 font-bold py-2 px-4 rounded'
              >
                <Link to='/'>
                  
                  Remember Password? <span className='RSign'>SignIn</span>
                </Link>
              </Button>
            </div>
        </Pane>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Forgot)
