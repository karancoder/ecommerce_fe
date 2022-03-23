import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { slides } from '../data/slider.js'

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    background-color: #EFFFFD;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #B8FFF9;
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
    opacity:0.6;
    box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
    &:hover {
        opacity: 0.9;
        transform: translateY(-2.5%);
        box-shadow: 0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
    }
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(-${(props) => props.slideNumber * 100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 1.2em;
`

const Title = styled.div`
    font-size: 3.5rem;
    font-weight: 600;
`

const Description = styled.div`
    margin: 1.2em 0;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
`

const Button = styled.button`
    padding: 0.8em;
    font-size: 1rem;
    background-color: #084594;
    color: #EFFFFD;
    border-radius: 0.8em;
    border: none;
    box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    &:hover {
        opacity: 1;
        transform: translateY(-2.5%);
        box-shadow: 0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
    }
    cursor: pointer;
`

const Slider = () => {
    const [slideNumber, setSlideNumber] = React.useState(0);
    const handleClick = (dir) => {
        if (dir === 'left') {
            setSlideNumber(slideNumber > 0 ? slideNumber - 1 : (slides.length - 1) )
        }
        else {
            setSlideNumber(slideNumber < (slides.length - 1) ? slideNumber + 1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeft />
            </Arrow>
            <Wrapper slideNumber={slideNumber}>
                {slides.map( (slide, i) => (
                    <Slide key={i}>
                        <ImgContainer>
                            <Image src={require("../images/" + slide.img)} alt={slide.alt}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>
                                {slide.title}
                            </Title>
                            <Description>
                                {slide.description}
                            </Description>
                            <Button>
                                {slide.btnText}
                            </Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRight />
            </Arrow>
        </Container>
    )
}

export default Slider
