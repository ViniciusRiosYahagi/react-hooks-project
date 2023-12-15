import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Title from "../src/components/Title"
import Container from "../src/components/Container"
import MockScript from "../src/components/MockScript"
import NextPage from "../src/components/NextPage"



const UseCallback = () => {

    return (
        <>
            <Header />
            <Title title="About : UseCallback"/>
            <Container>
                <MockScript hooks="error"/>
            </Container>
            <NextPage next="/uselayouteffect" back="/usereducer"/>
            <Footer />
        </>
    )
}

export default UseCallback