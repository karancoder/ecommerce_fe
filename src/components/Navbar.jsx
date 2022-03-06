import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'

const Container = styled.div`
    background-color: #42C2FF;
    color: white;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
`

const Left = styled.div`
    flex: 0 0 max(12%, 100px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Center = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #42C2FF;
    margin: 0.1em;
`

const Right = styled.div`
    flex: 0 0 max(205px, 22%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Languages = styled.div`
    flex: 1 1 5%;
    font-size: 1.05em;
    cursor: pointer;
    color: white;
    margin: 0 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchContainer = styled.div`
    flex: 1 0 95%;
    border: 1px solid white;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding: 0.1em;
    background-color: white;
`

const Input = styled.input`
    flex: 9;
    border: none;
    &:focus {
        outline: none !important;
    }
`

const Logo = styled.h1`
    font.weight: bold;
`

const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: "#EFFFFD",
        backgroundColor: "#084594"
    }
})


const MenuItem = styled.div`
    font-size: 0.95rem;
    cursor: pointer;
    margin: 0em 0.85em;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        Mart.e
                    </Logo>
                </Left>
                <Center>
                    <Languages>
                        EN
                    </Languages>
                    <SearchContainer>
                        <Input sx={{ color: 'black' }} placeholder="Search for products or brands" size={50} type="text"/>
                        <Search />
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>
                        Sign-In
                    </MenuItem>
                    <MenuItem>
                        Register
                    </MenuItem>
                    <MenuItem>
                        <StyledBadge badgeContent={4}>
                            <ShoppingCartOutlined />
                        </StyledBadge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
