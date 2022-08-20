import React from "react";
import styled from "styled-components";
import { popularProducts } from "./../data/popularProducts";
import Product from "./Product";

const Container = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); ;
`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
