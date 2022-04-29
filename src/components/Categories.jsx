import React from "react";
import styled from "styled-components";
import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} />
            ))}
        </Container>
    );
};

export default Categories;
