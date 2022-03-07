import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { PersonAddAlt, PersonOutline } from '@mui/icons-material/';
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
    display: flex;
    flex: 0 0 max(205px, 22%);
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
    display: inline-block;
    float: left;
    height: 3rem;
    max-width: 3rem;
    margin: 0 5px;
    overflow: hidden;
    background: #EFFFFD;
    border-radius: 1rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
    color: black;
    cursor: pointer;
    :hover {
        max-width: 10rem;
    }
    > * {
        vertical-align:middle;
    }
`

const MenuIcon = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    height: 3rem;
    width: 3rem;
    border-radius: 2rem;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    cursor: pointer;
`

const MenuText = styled.span`
    font-size: 1rem;
    color: black;
    font-weight: 400;
    margin: 0 0.5rem;
    transition: all 0.3s ease-out;
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
                        <MenuIcon>
                            <PersonOutline />
                        </MenuIcon>
                        <MenuText>
                            Sign-In
                        </MenuText>
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon>
                            <PersonAddAlt />
                        </MenuIcon>
                        <MenuText>
                            Register
                        </MenuText>
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon>
                            <StyledBadge badgeContent={4}>
                                <ShoppingCartOutlined />
                            </StyledBadge>
                        </MenuIcon>
                        <MenuText>
                            Cart
                        </MenuText>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
