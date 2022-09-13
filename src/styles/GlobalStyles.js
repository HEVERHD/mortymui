import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    background-color: var(--color-dark);
  }
  
  .container-princ {
    padding: 66px 90px 20px;
    display: flex;
    flex-direction: column;
  }
  /* List character .css: */
  
  .container-list{
      border: #08b2c9 solid 1px;
    
  }
  
  .container-name {
    padding: 1.25rem;
    flex: 1 1 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 22px;
    display: grid;
  }
  
  .name-list {
      border-bottom: #08b2c9 solid 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .list-characters {
    padding: 66px 90px 20px;
    display: flex;
    flex-direction: column;
  }
  
  .img-list img {
    
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    opacity: 0.5;
  }
  
  .img-list img:hover {
    opacity: 1;
    transition: 0.5s;
  }
  
  
  
  :root {
    --color-primary: #08b2c9;
    --color-secondary: #28527a;
    --color-light: #dbf6e9;
    --color-dark: #151515;
    --color-red: #ff0000;
    --color-green: #00ff00;
    --color-blue: #0000ff;
    --color-yellow: #ffff00;
    --color-orange: #ffa500;
    --color-purple: #800080;
    --color-pink: #ffc0cb;
    --color-brown: #8b4513;
    --color-black: #000000;
    --color-white: #ffffff;
  }
  
  .error {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
  }
  
  .load {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container-logo {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
  }
  
  .logo {
    height: 40vmin;
    pointer-events: none;
  }
  .img{
    position: absolute;
    height: 300px;
    width: 300px;
    z-index: -1;
  }
  
  .btn {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 2rem;
  }
  
  .personaje {
    background: var(--color-secondary);
    border-radius: 0.3rem;
    box-shadow: 0 0 1rem 0 rgba(255, 255, 255, 0.1);
    display: grid;
    grid-template: 10rem auto / 1fr;
    overflow: hidden;
    animation: showCard 0.5s linear;
  }
  @keyframes showCard {
    from {
      opacity: 0;
    }
  }
  .personaje-header {
    padding: 2rem;
    text-align: right;
  }
  .estado {
    background: var(--color-secondary);
    display: inline-flex;
    color: var(--color-light);
    padding: 0.5rem 1rem;
    border-radius: 2.5rem;
    font-size: 1.2rem;
    width: auto;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }
  .estado span {
    display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
  .personaje-body {
    padding: 8rem 2rem 4rem;
    position: relative;
  }
  .personaje-body figure {
    position: absolute;
    display: block;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    top: -6rem;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 1rem 0 var(--color-light);
    overflow: hidden;
  }
  .personaje-body figure img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .personaje-body h2 {
    width: 100%;
    background: var(--color-primary);
    color: var(--color-dark);
    border-radius: 0.5rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    transition-property: background, color;
    font-size: 1.8rem;
  }
  .personaje-body p {
      width: 100%;
      background: rgba(219, 246, 233, 0.9);
      border-radius: 0.5rem;
      height: 4rem;
      margin-top: 0.5rem;
      line-height: 4rem;
      text-align: center;
      font-size: larger;
      font-weight: 500;
  }
  .personaje-body p span {
    font-weight: bold;
  }
  
  .btn-list {
  
      display: flex;
      margin: 0.5rem 0;
      flex-direction: column;
   
  }
  
  .btn-random {
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      width: auto;
      justify-content: center;
      align-items: center;
      grid-column-gap: 0rem;
      column-gap: 0rem;
      margin-bottom: 5%;
      display: flex;
  }
  
  .icon-random {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    fill: var(--color-dark);
  }
  
  
  @media screen and (max-width: 600px) {
      .btn-random {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        
          max-width: 1200px;
          padding: 0 2rem; 
  
      }
      .container-princ {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0;
     
      }
  
      .personaje {
          grid-template: 1fr auto / 1fr;
      }
  
          .personaje-header {
            padding: 5rem;
            text-align: initial;
            display: flex;
            justify-content: center;
            padding-top: initial;
          }
  
      .btn-list {
          align-items: center;
          justify-content: space-around;
          flex-direction: inherit;
      }
      
      
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  
  @media screen and (min-width: 1000px) {
      .personaje {
          grid-template: 10rem auto / 1fr;
      }
  
  }
  
`;

export default GlobalStyles;
