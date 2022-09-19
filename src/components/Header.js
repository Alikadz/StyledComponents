import React from 'react'
import { Container } from './Container.styled'
import { StyledHeader, Nav, Logo, Image } from './Header.styled';
import { Button } from './Button.styled';
import { Flex } from './Flex.styled';

const Header = () => {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='logo-image' />
          <Button>Try it out</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Build The Community Your Fans Will Love
            Build The Community Your Fans Will Love
            Build The Community Your Fans Will Love
            Build The Community Your Fans Will Love
            Build The Community Your Fans Will Love
            Build The Community Your Fans Will Love
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get started
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header