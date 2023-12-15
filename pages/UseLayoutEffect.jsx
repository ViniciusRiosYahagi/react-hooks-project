import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Title from "../src/components/Title"
import Container from "../src/components/Container"
import MockScript from "../src/components/MockScript"
import NextPage from "../src/components/NextPage"



const UseLayoutEffect = () => {
    return (
        <>
            <Header/>
                <Title title="About : useLayoutEffect"/>
                    <Container>
                        <MockScript hooks="error"/>
                    </Container>
                <NextPage next="/useMemo" back="/usecallback"/>
            <Footer/>
        </>
    )
}

export default UseLayoutEffect