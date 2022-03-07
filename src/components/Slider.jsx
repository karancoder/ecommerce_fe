import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '0.6em'};
    right: ${props=> props.direction === 'right' && '0.6em'};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeft />
            </Arrow>
                <Wrapper>
                    <Slide>
                        <ImgContainer>
                            <Image src={require("../images/mac_screen.jpg")} alt={"something here"}/>
                        </ImgContainer>
                        <InfoContainer>

                        </InfoContainer>
                    </Slide>
                </Wrapper>
            <Arrow direction="right">
                <ArrowRight />
            </Arrow>
        </Container>
    )
}

export default Slider
