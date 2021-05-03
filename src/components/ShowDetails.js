import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Styles = styled.div`
    margin-top: 2vw;
    width: 100vw;
    height: 100vw;;

    .top {
        width: 100vw;
        height: 15vw;
        border-radius: 5px 5px 5px 5px;
    }

    .poster {
        width: 15vw;
        height: 20vw;
        border-radius: 5px 5px 5px 5px;
    }

    .container {
        margin-top: 2vw;
    }
`;

const Title = styled.h1`
    color: white;
    font-size: 2.5vw;
    margin-left: 2vw;
`;

export const ShowDetails = () => (
    <Styles>
        <Image src="https://picsum.photos/1000/250" alt="banner" fluid className="top"/>
        <Container>
            <Row>
                <Image src="https://picsum.photos/200/300" alt="banner" className="poster"/>
                <Title>Movie Title</Title>
            </Row>
        </Container>    
    </Styles>
)