import { Spinner } from 'react-bootstrap'

const Loader = () => {
    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    return (
        <div style={styles}>
            <Spinner animation="grow" style={{width:"100px", height:"100px"}}>
                <span className="sr-only">Loading...</span>
            </Spinner>
            <br></br>
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader