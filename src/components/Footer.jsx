import { Link, useLocation } from "react-router-dom"



function Footer () {
    const page = useLocation()
    return(
    
        <footer>
            <h4> see the footer below</h4>
            <p>copyright &copy; 2022</p>
            {page.pathname === '/' && <Link to="/about">About page</Link>}
        </footer>
    )
    
    
}

// create a syling for the footer below 

export default Footer