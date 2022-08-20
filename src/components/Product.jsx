import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 350px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b8fff9;
`;

const Overlay = styled.div`
    width: 90%;
    height: 90%;
    border-radius: 20%;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

const Image = styled.img`
    height: 80%;
    width: 80%;
`;

const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 100%;
    transition: all 0.3s ease-in-out;
    top: ${(props) => (props.isOpen ? "0%" : "110%")};
`;

const Icon = styled.div`
    background-color: #effffd;
    padding: 0.8rem;
    border-radius: 50%;
    color: #084594;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        opacity: 1;
        transform: scale(1.2);
        box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
    }
`;

const Product = ({ item }) => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    function openOptions(event) {
        setOptionsOpen(true);
    }

    function closeOptions(event) {
        setOptionsOpen(false);
    }

    function addToCart(event) {
        console.log(item.id);
    }

    return (
        <Container>
            <Overlay onMouseEnter={openOptions} onMouseLeave={closeOptions}>
                <Image src={require("../images/" + item.img)} />
                <InfoContainer isOpen={optionsOpen}>
                    <Icon onClick={addToCart}>
                        <AddShoppingCartIcon />
                    </Icon>
                    <Icon>
                        <SearchIcon />
                    </Icon>
                    <Icon>
                        <FavoriteBorderIcon />
                    </Icon>
                </InfoContainer>
            </Overlay>
        </Container>
    );
};

export default Product;
