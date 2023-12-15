import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Title from "../src/components/Title"
import Container from "../src/components/Container"
import MockScript from "../src/components/MockScript"
import NextPage from "../src/components/NextPage"


const UseContext = () => {

    return (
        <>
            <Header />
            <Title title="About : useContext"/>
            <Container>
                <MockScript hooks="error"/>
            </Container>
            <NextPage next="/" back="/usememo"/>
            <Footer />
        </>
    )
}

export default UseContext