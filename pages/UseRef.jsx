import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Title from "../src/components/Title"
import Container from "../src/components/Container"
import MockScript from "../src/components/MockScript"
import NextPage from "../src/components/NextPage"


const UseRef = () => {
    return (
        <>
            <Header/>
                <Title title="About : useRef"/>
                    <Container>
                        <MockScript hooks="useRef"/>
                    </Container>
                <NextPage next="/usereducer" back="/useeffect"/>
            <Footer/>
        </>
    )
}

export default UseRef