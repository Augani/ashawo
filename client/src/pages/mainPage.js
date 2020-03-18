import React from 'react'
import { connect } from 'react-redux'
import Back from '../images/undraw_party_lqnv.svg'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import {REGISTER_NEW_USER} from '../utils/queries'


const getCountryList = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        resolve(res.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}

function MainPage (props) {
  const [values, setValues] = React.useState({
    countries: []
  })
  React.useEffect(()=> {
    async function fetchData () {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(res => {
          setValues({ ...values, countries: res.data })
        })
        .catch(e => {
          setValues({ ...values, countries: [{ name: 'Error' }] })
        })
    }
    fetchData()
  }, [])

  return (
    <div className='h-screen w-screen grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1'>
      <div className='leftLog flex flex-col'>
        <div className='logoArea flex flex-row justify-between'>
         <div className="flex flex-col">
         <div className='logo flex flex-row'>
            <h4 className='logoName first'>h</h4>
            <h4 className='logoName second'>u</h4>
            <h4 className='logoName third'>K</h4>
            <h4 className='logoName first'>a</h4>
          </div>
          <h6 className='logoSub'>Your express hooker service</h6>
         </div>
          <Button
                
                className='RHold bg-grey-500 hover:bg-grey-700 text-black-200 font-bold py-2 px-4 rounded'
              >
                <Link to='/'>
                 
                  Already a user? <span className='RSign'>Sign In</span>
                </Link>
              </Button>
        </div>
        <hr />

        <div className='heading'>
          <h2 className='head'>Sign Up</h2>

          {/* <h6 className='headSub'>Safe. Secure. Instant</h6> */}
        </div>
        <div className='formHolder w-full'>
          <form className='w-full'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-first-name'
                >
                  First Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
              </div>
              <div className='w-full md:w-1/3 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-last-name'
                >
                  Last Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-last-name'
                  type='text'
                  placeholder='Doe'
                />
              </div>
              <div className='w-full md:w-1/3 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-last-name'
                >
                  Date of birth
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-dob'
                  type='date'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-first-name'
                >
                  Choose Username
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  id='grid-username'
                  type='text'
                  placeholder='lucy1234'
                />
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Email
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-email'
                  type='email'
                  placeholder='johnDoe@huka.space'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
             
              <div className='w-full md:w-1/2 px-3'>
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
                  placeholder='******************'
                />
                <p className='text-gray-600 text-xs italic'>
                  Make it as long and as crazy as you'd like
                </p>
              </div>

              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-state'
                >
                  Select service
                </label>
                <div className='relative'>
                  <select
                    className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-state'
                  >
                    <option value='Hooker'>Hooker</option>
                    <option value='escort'>Escort</option>
                    <option value='pimp'>Pimp</option>
                    <option value='customer'>Customer(Here to book)</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>

           

            </div>
            <div className='flex flex-wrap -mx-3 mb-2'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-state'
                >
                  Country
                </label>
                <div className='relative'>
                  <select
                    className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-state'
                  >
                    {!values.countries.length
                      ? null
                      : values.countries.map((country, i) => {
                          return (
                            <option key={i} value={country.name}>
                              {country.name}
                            </option>
                          )
                        })}
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Phone Number
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-email'
                  type='email'
                  placeholder='0299384930 without country code'
                />
                 <p className='text-blue-600 text-xs italic'>
                  Please note that number will be verified upon registration
                </p>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-2'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'></div>
            </div>

            <div className='flex flex-wrap -mx-3 pl-4 pr-4 mb-2 flex flex-row justify-center '>
              <div className='md:w-1/2 '>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-zip'
                >
                  Agree to terms and conditions
                  <input type='checkbox' className='form-checkbox ml-2' />
                </label>
              </div>
              <div className='md:w-1/2 pl-3'>
              <Button className='loginBtn bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Sign Up
              </Button>
              </div>
              
            </div>
          </form>
        </div>
      </div>

      <div className='rightLog flex flex-col'>
        <div className='rightOverlay'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
