import Title from "../src/components/Title"
import Header from "../src/components/Header"
import Container from "../src/components/Container"
import HooksButton from "../src/components/HooksButton"
import Footer from "../src/components/Footer"
import contentMock from "../api/contentMock.json"

const Home = () => {
    return(
        <>
            <div>
                <Header />
                <Title title="Introduction to React Hooks"/>
                        <Container>
                            {
                                contentMock.map((content) => {
                                    if(content.hooks === null) {
                                        return <p key={content.id}>{content.text}</p>
                                    }
                                })
                            }
                            <h1>select a hook</h1>
                        </Container>
                    <HooksButton />
                <Footer/>
            </div>
        </>
    )
}

export default Home