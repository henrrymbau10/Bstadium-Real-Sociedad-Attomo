import styled from "styled-components"

export const NavMobile = styled.div`
    svg{
        color: white;
    }
`

export const Menu = styled.div`
display: flex;
    background-color: black;
    position: absolute;
    top: ${({ open }) => (open ? "0" : "-100%")}; ;
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5 all ease;

    p{
        color: white;
    }
`

export const MobileIcon = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      color: white;
      margin-left: 1rem;
    }
`

export const MobileIcon2 = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      color: white;
      margin-left: 1rem;
    }
`

