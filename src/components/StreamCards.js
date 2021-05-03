import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Styles = styled.div`
    margin-bottom: 1.5vw;

    .card-img {
        width: 10vw;
        height: 15vw;
        border-radius: 5px 5px 5px 5px;
    }

    .card {
        margin-left: 1vw;
    }
`;

const cardInfo = [
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"},
    {image: "https://picsum.photos/200/300"}
]

const renderCard = (card, index) => {
    return (
        <Styles>
            <Card key={index}>
                <Card.Link href="/showdetails"><Card.Img src={card.image} /></Card.Link>
            </Card>
        </Styles>
    )
}

export const StreamCards = () => (
    <Container>
        <Row>
            {cardInfo.map(renderCard)}
        </Row>
    </Container>
)