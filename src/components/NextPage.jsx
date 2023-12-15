import { Link } from "react-router-dom"
import "../../styles/NextPage.scss"

// eslint-disable-next-line react/prop-types
const NextPage = ({next,back}) => {
    return (
        <section className="btnContainer">
            <Link to={back}>Back</Link>
            <Link to={next}>Next</Link>
        </section>
    )
}

export default NextPage