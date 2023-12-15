import "../../styles/HooksButton.scss"
import { Link } from "react-router-dom"

function HooksButton() {
    return (
        <>
            <nav className="botoes">
                <Link to="/usestate">useState</Link>
                <Link to="/useeffect">useEffect</Link>
                <Link to="/useref">useRef</Link>
                <Link to="/usereducer">useReducer</Link>
                <Link to="/usecallback">useCallback</Link>
                <Link to="/uselayouteffect">useLayoutEffect</Link>
                <Link to="/usememo">useMemo</Link>
                <Link to="/usecontext">useContext</Link>
            </nav>
        </>
    )
}

export default HooksButton