import styled from "styled-components"

export const NavMobile = styled.div`
    svg{
        color: white;
    }
`

export const Menu = styled.div`
    display: flex;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: ${({ open }) => (open ? "0" : "-100%")}; ;
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;

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
      position: absolute;
      top: 0rem;
      right: 2rem;
    }
`

