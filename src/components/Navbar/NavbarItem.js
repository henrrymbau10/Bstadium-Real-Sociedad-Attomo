import styled from "styled-components"

export const NavMobile = styled.div`
    svg{
        color: white;
    }
`

export const Menu = styled.div`
    display: flex;
    background: linear-gradient(90deg, #1B1B1F 0.82%, #0667B0 27.77%, #0667B0 58.65%, #0667B0 74.33%, #1B1B1F 94.91%);
    position: absolute;
    left: ${({ open }) => (open ? "0" : "-100%")}; ;
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 2 all ease;
    top: 0;

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

