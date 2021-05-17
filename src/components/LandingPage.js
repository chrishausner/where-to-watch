import React from 'react';
import styled from 'styled-components';
import { StreamCards } from './StreamCards';

const Styles = styled.div`
    color:white;
    margin-top: 10vw;
    height: 100vw;

    .Forminput {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 56px;
        border-radius: 4px;
        position: relative;
        background-color: green;
        transition: 0.3s all;
        margin-bottom: 3vw;

        &:hover { 
            background-color: red;
            box-shadow: 0px 4ßx 20px 0px rgba(0,0,0,0.05);
        }
    }
`;

const Title = styled.h1`
    font-size: 2.5vw;
    text-align: center;
    padding-bottom: 1vw;
`;

const SubTitle = styled.h2`
    font-size: 1.5vw;
    text-align: center;
    padding-bottom: 1vw;
`;


export const LandingPage = () => (
    <Styles>
        <div className="row center-xs">
            <div className="col-xs-6">
                <Title>Enter the show or movie you would like to watch</Title>
            </div>
        </div>
        <div className="row center-xs">
        <div className="col-xs-6">
                <SubTitle>We will show you where to stream it</SubTitle>
            </div>
        </div>
        <div className="Forminput">
            <input type="text" name="nameSearch" />
        </div>
        <div className="row center-xs">
                <StreamCards />
                <StreamCards />
                <StreamCards />
                <StreamCards />
                <StreamCards />
                <StreamCards />
        </div>
    </Styles>
)