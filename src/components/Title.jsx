import "../../styles/Title.scss"

// eslint-disable-next-line react/prop-types
function Title({title}) {
    return(
        <>
            <section className="title">
                <h1>{title}</h1>
            </section>
        </>
    )
}

export default Title