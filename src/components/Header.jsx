import "../../styles/Header.scss"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const showSubMenu = () => {
        setShowMenu(!showMenu)
    }

    const gitHub = () => {
        window.open("https://github.com/ViniciusRiosYahagi", "_blank");
    }

    return(
            <header >
                <Link to="/" >Hooks</Link>
                <div>
                    <button onClick={showSubMenu}><FaBars className="svg"/></button>
                    <button onClick={gitHub}><FaGithub/></button>
                </div>       
                
                {showMenu && (
                    <div className="subMenu">
                            <nav>
                                <Link to="/usestate">useState</Link>
                                <Link to="/useeffect">useEffect</Link>
                                <Link to="/useref">useRef</Link>
                                <Link to="/usereducer">useReducer</Link>
                                <Link to="/usecallback">useCallback</Link>
                                <Link to="/uselayouteffect">useLayoutEffect</Link>
                                <Link to="/usememo">useMemo</Link>
                                <Link to="/usecontext">useContext</Link>
                            </nav>
                    </div>
                )}
            </header>
    )
}
export default Header