import contentMock from "../../api/contentMock.json"
import { useState } from "react"
import { useEffect } from "react"


// eslint-disable-next-line react/prop-types
const MockScript = ({hooks}) => {

    const [copy, setCopy] = useState("")
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Copied!")

        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        copyToClipboard(copy)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [copy])
    
    
    return (
        <>
            {
                contentMock.map(content => {
                    if (content.hooks === hooks) {
                        if (content.code === "") {
                            return <p key={content.id}>{content.text}</p>
                        } 
                        else {
                            return (
                                <>
                                    <p key={content.id}>{content.text}</p>
                                    <div className="code" key={content.id} onClick={() => setCopy(content.code)}>{content.code}</div>
                                </>
                            )
                        }
                    }
                })
            }
        </>
    )
}

export default MockScript