import React from "react"
import "./Homepg.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Customer!</h1>
            <br></br>
            <p className="pa">Thank you for visiting with us! Each order means the world to us, and we’re so happy you chose our small business today.</p>
            <br></br>

            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage