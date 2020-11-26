import { Card } from 'react-bootstrap'

const LocationInfoBox = ({ info }) => {
    return (
        <div className="info-card">
            <Card >
            <Card.Body>
                <Card.Title>
                    Title
                </Card.Title>
                <Card.Subtitle>
                    {info.title}
                </Card.Subtitle>
                <br></br>
                <Card.Title>
                    Source
                </Card.Title>
                <Card.Subtitle>
                    {info.source}
                </Card.Subtitle>
            </Card.Body>
            </Card>
        </div>
    )
}

export default LocationInfoBox