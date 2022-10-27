import React, { useState} from 'react'

import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/084 crown.svg'
import styled from 'styled-components'
import BurguerButton from '../burguer-button/BurguerButton.component'
import { auth } from '../../firebase/firebase.utils'
import './navbar.styles.scss'

function Navbar({ currentUser }) {
    const [clicked, setClicked] = useState(false)
    console.log("clicked", clicked)
    const handleClick = () => {
        //cuando esta true lo cambia a false y viceversa
        setClicked(!clicked)
    }

  return (
    <>
        <NavContainer className='navbar'>
            <Link className='logo-container' to={'/'}>
                <Logo className='logo'/>
                <h1>Crown Market</h1>
            </Link>
            <div className={`links ${clicked ? 'active options': 'options'}`}>
                 <Link className="option" to='/'>
                    HOME
                 </Link>
                 <Link className="option" to='/shop'>
                    ABOUT
                 </Link>
                 <Link className="option" to='/shop'>
                    SHOP
                 </Link>
                 <Link className="option" to='/shop'>
                    CONTACT
                 </Link> 
                 
                 {
                        currentUser ?
                        <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>SIGN IN</Link>
                 }
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`bg ${clicked ? 'active': ''}`}></BgDiv>
        </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
padding: 2rem;
background: #000;
display: flex;
align-items: center;
justify-content: space-between;
h2 {
    font-weight: 400;
    color: #fff;
    span {
    font-weight: bold;
    }
}
a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.links {
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: -700px;
    left: -2000px;
    right:0;
    margin-left: auto;
    margin-right: auto;
    text-align: flex-end;
    transition: all 1.2s ease-in-out;
    a {
        color: white;
        font-size: 2rem;
        position: relative;
        z-index: 100;
    }
    @media(min-width: 768px) {
        position: initial;
        margin: 0;
        a {
            font-size: 1rem;
            color : #fff;
            ${'' /* display: inline-block; */}
        }
        ${'' /* display: block; */}
    }
}

.links.active {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top:5%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
        }
}
.burguer {
    @media(min-width: 768px) {
        display: none;
    }
}
`	
const BgDiv = styled.div`
background-color: #222;
    position: absolute;
    top: -2000px;
    left: -2000px;
    width: 100%;
    height: 100%;
   
    z-index: 10;
    transition: all 0.9s ease-in-out;
    &.active {
        border-radius: 0 0 60% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`