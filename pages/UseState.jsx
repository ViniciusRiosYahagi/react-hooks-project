import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Title from "../src/components/Title"
import Container from "../src/components/Container"
import MockScript from "../src/components/MockScript"
import NextPage from "../src/components/NextPage"


const UseState = () => {

    return (
        <>
            <div>
                <Header/>
                    <Title title="About : useState"/>
                        <Container>
                            <MockScript hooks="useState"/>
                        </Container>
                        <NextPage next="/useeffect" back="/"/>
                <Footer/>
            </div>
        </>
    )
}

export default UseState