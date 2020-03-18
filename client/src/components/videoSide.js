import React from 'react'
import { connect } from 'react-redux'
import LazyLoad, { lazyload } from 'react-lazyload';
import ReactPlayer from 'react-player';
import Girl from '../videos/girlVideo.mp4'
import Girl2 from '../videos/Girl - 6516.mp4'
import Girl3 from '../videos/Girl - 30944.mp4'
import Girl4 from '../videos/mixkit-girl-walking-on-a-beach-street-1048 (1).mp4';
import {Spinner} from 'evergreen-ui'


function VideoSide() {
    return (
        <LazyLoad once className="lazyMain" placeholder={<Spinner/>} >
        <div className="grid grid-cols-3 h-full w-full">
        <ReactPlayer loop={true} url={Girl} playing />
        <ReactPlayer loop={true} url={Girl4} playing />
        <ReactPlayer loop={true} url={Girl2} playing />
        <ReactPlayer loop={true} url={Girl3} playing />
        <ReactPlayer loop={true} url={Girl2} playing />
        <ReactPlayer loop={true} url={Girl} playing />
        <ReactPlayer loop={true} url={Girl4} playing />
        <ReactPlayer loop={true} url={Girl} playing />
        <ReactPlayer loop={true} url={Girl3} playing />
        <ReactPlayer loop={true} url={Girl2} playing />
        </div>
        </LazyLoad>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoSide)
