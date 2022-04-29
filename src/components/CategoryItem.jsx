import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 0.5rem;
    height: 40vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(239, 255, 253, 0.5);
    &:hover {
        background-color: rgba(239, 255, 253, 0.1);
    }
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 0.5rem;
`;

const Button = styled.button`
    padding: 0.8em;
    font-size: 1rem;
    background-color: #084594;
    color: #effffd;
    border-radius: 0.8em;
    border: none;
    box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
    // opacity: 0.9;
    &:hover {
        // opacity: 1;
        transform: translateY(-2.5%);
        box-shadow: 0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
    }
    cursor: pointer;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={require("../images/" + item.img)} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now!</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
