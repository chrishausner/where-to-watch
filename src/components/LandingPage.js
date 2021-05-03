import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { StreamCards } from './StreamCards';


const Styles = styled.div`
    color: white;
    margin-top: 10vw;
    height: 100vw;

    .form-group {
        width: 50vw;
        margin-top: 4vw;
        margin-bottom: 5vw;
    }
`;

const Title = styled.h1`
    font-size: 2.5vw;
    text-align: center;
`;

const SubTitle = styled.h2`
    font-size: 1.5vw;
    text-align: center;
`;


export const LandingPage = () => (
    <Styles>
        <Container>
            <Row className="justify-content-center">
                <Title>Enter the show or movie you would like to watch</Title>
            </Row>
            <Row className="justify-content-center">
                <SubTitle>We will show you where to stream it</SubTitle>
            </Row>
            <Row className="justify-content-center">
                <Form.Group>
                    <Form.Control size="md" type="text" placeholder="Search" />
                </Form.Group>
            </Row>
            <Row>
                <StreamCards />
            </Row>
        </Container>
    </Styles>
)