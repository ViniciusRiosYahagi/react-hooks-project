import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Title from "../src/components/Title"
import Container from "../src/components/Container"
import MockScript from "../src/components/MockScript"
import NextPage from "../src/components/NextPage"


const UseEffect = () => {

    return (
        <>
            <Header />
            <Title title="About : useEffect"/>
            <Container>
                <MockScript hooks="useEffect"/>
            </Container>
            <NextPage next="/useref" back="/usestate"/>
            <Footer />
        </>
    )
}

export default UseEffect