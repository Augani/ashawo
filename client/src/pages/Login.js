import React from 'react'
import { connect } from 'react-redux'

function Login() {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
