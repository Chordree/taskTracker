import { Link } from "react-router-dom"

function About () {
    
    return(
    
        <div>
            <h4> our About page</h4>
            <p> version 2.0.1 of the task app <br />
                watch out for the next update </p>
            <Link to="/">Back to Home</Link>
        </div>
    )
    
    
}

// see if the case sensitivity in the href matters

export default About