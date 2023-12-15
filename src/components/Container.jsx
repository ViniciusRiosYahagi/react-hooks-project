import "../../styles/Container.scss"

// eslint-disable-next-line react/prop-types
function Container({children}) {
    return (
            <section className="container">
                    {children}
            </section> 
    )
}

export default Container