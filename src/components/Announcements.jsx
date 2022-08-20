import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4em 0em;
    margin: 0;
    background-color: #084594;
    color: white;
    font-size: 0.95rem;
    font-weight: bold;
`;

const Announcements = () => {
    return <Container>Super Discounts! Free Shipping over Rs. 450!</Container>;
};

export default Announcements;
