import React from 'react'
import { connect } from 'react-redux'
import SideBar from '../components/sideBar'
import { withRouter } from 'react-router-dom'
import { Pane, Icon, Avatar } from 'evergreen-ui'
import Man from '../images/man.jpg'
import Girl from '../images/cropo.jpg'
import Girl1 from '../images/b1.jpg';
import Girl2 from '../images/b2.jpg';
import Girl3 from '../images/b3.jpg';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1IjoiYXVnYW5pIiwiYSI6ImNqc21maXg1bjAweHc0M3VvNHJrd2FpcG0ifQ.zHA1Zv7_bQ4vcqEMcZ2WUg'

class MapWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 8
    }
  }
  componentDidMount () {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }
  render () {
    return (
      <div>
        <div className='sidebarStyle'>
        
        </div>
        <div ref={el => (this.mapContainer = el)} className='mapContainer' />
      </div>
    )
  }
}

function Profile (props) {
  console.log(props)
  return (
    <div className='h-screen w-screen bg-white flex flex-row'>
      <SideBar />
      <Pane className='profileHolder w-full h-full relative flex flex-col'>
        <Pane
          elevation={4}
          className='profileToolBox absolute flex flex-row-reverse items-center px-4 py-2'
        >
          <Icon icon='log-out' className='toolBoxOut mx-4' />
          <h6 className='userName mx-3'>Kofi Babone</h6>
          <Avatar className='avatar' src={Man} name='Alan Turing' />
        </Pane>
        <div className='h-full w-full flex flex-col'>
          <User />
        </div>
      </Pane>
    </div>
  )
}

const useStyles = makeStyles({
  left: {
    background: 'rgba(115, 12, 211,0)',
    border: '2px white solid',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  right: {
    background: 'rgba(115, 12, 211,0)',
    border: '2px white solid',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  last: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
})

function ImageViewer(props){
    return(
        <div className="profileImages flex flex-col justify-center content-center">
            <div style={{ height: '90%',borderRadius: '10px', background: `url(${props.src})`, backgroundPosition: 'center', backgroundSize: 'cover', margin: '10px'}}></div>
            {/* <Icon icon="heart" size={20} color="red"/> */}
        </div>
    )
}

function User () {
  const [values, setValues] = React.useState({
      active: 0
  })  
  const classes = useStyles()

  const handleChange = t =>{
    console.log(t.target)
    setValues({
        ...values, active: t.target.value
    })
  }
  return (
    <Pane className='userMain h-full w-full flex flex-col'>
      <Pane
        style={{ backgroundImage: `url(${Girl1})` }}
        className='userHero relative bg-green-100 h-1/2 w-full flex flex-row'
      >
        <div className='heroOverlay'></div>
        <Pane className='heroLeft z-10 p-2  flex flex-col-reverse w-2/5'>
          <h6 className='alias'>Alias BackBreaker</h6>
          <h1 className='mainName'>Ama leo, 24</h1>
          <div className='flex flex-row w-full items-center'>
            <Avatar src={Man} className='imageMatchOwn' />
            <Avatar src={Girl} className='imageMatchOwn visit' />
            <Pane elevation={2} className='matchingPer px-2 py-2'>
              <h4> 74% match</h4>
            </Pane>
          </div>
        </Pane>
        <Pane className='heroMiddle z-10 w-1/5'></Pane>
        <Pane className='heroRight z-10 w-2/5 flex flex-col-reverse'>
          <Pane className='flex flex-row justify-center py-10'>
            <Button className={classes.left}>Send message</Button>;
            <Button className={classes.right}>Book</Button>;
            <Button className={classes.last}>Send gift</Button>;
          </Pane>
        </Pane>
      </Pane>

      <Pane className='userDetails w-full h-1/2 flex flex-row'>
        <Pane className='userMap z-0 w-full absolute h-full'>
          <Pane className='userMapInner'>

          <MapWrapper />
          </Pane>
        </Pane>

        <Pane className='userItems h-full w-full z-10 flex flex-row'>
          <Pane className='userItemsLeft overflow-auto px-3 py-5 w-1/3 flex flex-col'>
            <h2 className='aboutMeHead'>About me</h2>
            <div className='aboutMe p-5 py-4'>
             Hello there, I am ama also known as back breaker. I offer only escort services at a very affordable rate. 
             I love to dance and sing when i'm free. Go ahead and hit the booking button or send me a gift.
            </div>
            <h2 className='aboutMeHead pb-3'>Matching interests - 74%</h2>
            <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 py-2'>
              <Pane elevation={2} className='matches px-1 py-1'>
                <h4>Height > 5ft</h4>
              </Pane>
              <Pane elevation={2} className='matches px-1 py-1'>
                <h4>Booty - M</h4>
              </Pane>
              <Pane elevation={2} className='matches px-1 py-1'>
                <h4>Boobs - S</h4>
              </Pane>
              <Pane elevation={2} className='matches px-1 py-1'>
                <h4>Waist - S</h4>
              </Pane>
              <Pane elevation={2} className='matches px-1 py-1'>
                <h4>Body - Athletic</h4>
              </Pane>
            </div>
          </Pane>
          <Pane className='userItemsRight w-2/3'>
             <Pane className="h-1/5 w-full">
             <Tabs value={values.active} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Photos" value={0} />
          <Tab label="Reviews" value={1}  />
        </Tabs>

       {values.active === 0?<Photos/>:<Reviews/>}
             </Pane>
          </Pane>
          <Pane></Pane>
        </Pane>
      </Pane>
    </Pane>
  )
}


function Photos(){
    return (
        <div className="w-full h-full flex flex-row overflow-auto">
            <ImageViewer src={Girl}/>
            <ImageViewer src={Girl1}/>
            <ImageViewer src={Girl2}/>
            <ImageViewer src={Girl3}/>
        </div>
    )
}


function Reviews(){
    return (
        <div>
    reviews
        </div>
    )
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
