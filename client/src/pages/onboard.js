import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

function getSteps () {
  return [
    'Fill in personal attributes',
    'Fill in charges',
    'This check details'
  ]
}

function FirstPage (props) {
  return (
    <form className='w-2/3 sm:w-full md:w-2/3'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-first-name'
          >
            First Name
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-first-name'
            type='text'
            placeholder='Jane'
          />
          <p className='text-red-500 text-xs italic'>
            Please fill out this field.
          </p>
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
            Last Name
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-last-name'
            type='text'
            placeholder='Doe'
          />
        </div>
      </div>

      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-first-name'
          >
            First Name
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-first-name'
            type='text'
            placeholder='Jane'
          />
          <p className='text-red-500 text-xs italic'>
            Please fill out this field.
          </p>
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
            Last Name
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-last-name'
            type='text'
            placeholder='Doe'
          />
        </div>
      </div>
    </form>
  )
}

function SecondPage (props) {
  return (
    <form className='w-full max-w-lg'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-first-name'
          >
            First Name
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-first-name'
            type='text'
            placeholder='Jane'
          />
          <p className='text-red-500 text-xs italic'>
            Please fill out this field.
          </p>
        </div>
        <div className='w-full md:w-1/2 px-3'>
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
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
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
      </div>
      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-city'
          >
            City
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-city'
            type='text'
            placeholder='Albuquerque'
          />
        </div>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-state'
          >
            State
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-state'
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
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
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-zip'
          >
            Zip
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-zip'
            type='text'
            placeholder='90210'
          />
        </div>
      </div>
    </form>
  )
}
function getStepContent (step) {
  switch (step) {
    case 0:
      return 'Fill in personal attributes'
    case 1:
      return 'Fill in charges'
    case 2:
      return 'This check details'
    default:
      return 'Unknown step'
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

function Onboard () {
  const [values, setValues] = React.useState({})

  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  const steps = getSteps()

  const isStepOptional = step => {
    return step === 1
  }

  const isStepSkipped = step => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const RenderPage = c => {
    switch (c) {
      case 0:
        return <FirstPage />
      case 1:
        return <SecondPage />
      default:
        return <FirstPage />
    }
  }

  const handleReset = () => {
    setActiveStep(0)
  }
  return (
    <div className='onboardMain h-screen w-screen bg-white flex flex-col'>
      <div className='onboardSteps flex flex-row justify-center items-center w-full h-1/6'>
        <div className='logo flex flex-row justify-center'>
          <h4 className='logoName first'>h</h4>
          <h4 className='logoName second'>u</h4>
          <h4 className='logoName third'>K</h4>
          <h4 className='logoName first'>a</h4>
        </div>
      </div>
      <div className='onboardSteps flex flex-row justify-around items-center w-full h-1/6'>
        <Stepper
          className='w-2/3 flex flex-row justify-around'
          activeStep={activeStep}
        >
          {steps.map((label, index) => {
            const stepProps = {}
            const labelProps = {}
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant='caption'>Optional</Typography>
              )
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </div>
      <div className='onboardForm  w-full h-4/6 flex flex-col justify-center items-center content-center'>
        {RenderPage(activeStep)}
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}

                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Onboard)
