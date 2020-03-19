import React from 'react'
import { connect } from 'react-redux'
import { Pane } from 'evergreen-ui'
import Icons from './icons'
import { withRouter } from 'react-router-dom'

function SideBar (props) {
  const location = props.location.pathname;
  return (
    <Pane className='sideBar flex flex-col items-center h-full'>
      <div className='insideLogo flex flex-row w-full justify-center items-center content-center'>
        <h4 className='logoIn first'>h</h4>
        <h4 className='logoIn second'>u</h4>
        <h4 className='logoIn third'>K</h4>
        <h4 className='logoIn first'>a</h4>
      </div>

      <div className='iconsHolder flex flex-col w-full content-center items-center'>
        <div
          className={`w-full py-5  my-2 iconBack ${
            location == '/home' ? 'active' : ''
          }`}
        >
          <div className='circleIcon'>
            <div className='borderIcon'></div>
            <Icons page='home' />
          </div>
        </div>
        <div
          className={`w-full py-2  my-2 iconBack ${
            location == '/profile' ? 'active' : ''
          }`}
        >
          <div className='circleIcon'>
            <div className='borderIcon'></div>
            <Icons page='profile' />
          </div>
        </div>
        <div
          className={`w-full py-2  my-2 iconBack ${
            location == '/messages' ? 'active' : ''
          }`}
        >
          <div className='circleIcon'>
            <div className='borderIcon'></div>
            <Icons page='messages' message={3} />
          </div>
        </div>
        <div
          className={`w-full py-2  my-2 iconBack ${
            location == '/settings' ? 'active' : ''
          }`}
        >
          <div className='circleIcon'>
            <div className='borderIcon'></div>
            <Icons page='settings' />
          </div>
        </div>
      </div>
    </Pane>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideBar))
