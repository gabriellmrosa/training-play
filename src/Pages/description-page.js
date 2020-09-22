import React, { useEffect} from 'react';
import styled from 'styled-components'
import chevronLeft from '../img/chevron-left.svg'

import ThumbDescriptionVideoComponent from '../component/thumb-description-video'

const DescriptionPage = styled.div`
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  background: var(--color-darker);
  width: 100%;
  height: 100vh;
  transition: 300ms;
  transform: ${(props) => (props.active === false ? 'translate(100%,0%)' : 'translate(0%,0%)')};

  .container{
    padding:0px 32px;
  }
`
const HeaderPage = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px 32px;
  margin-bottom:48px;
  img{
    width:12px;
  }
  button{
    position: absolute;
    left:0px;
    top:50%;
    background: none;
    transform:translate(0%,-50%);
    border: none;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:16px 32px;
    outline:none;
  }
` 

const DescriptionPageComponent = ({closeDescription, setModalVideo, setModalAlert,state})=>{

  useEffect(()=>{
   console.log(state)
  },[])

    return(
        <DescriptionPage>
          <HeaderPage>
            <button type="button-back" onClick={(old)=> closeDescription(old=>({...old,active: false}))}>
              <img src={chevronLeft} alt="Training Play"/>
            </button>
            <h3>{}</h3>
          </HeaderPage>
          <div className="container">
            <ThumbDescriptionVideoComponent 
            />
          </div>
        </DescriptionPage> 
    )
}

export default DescriptionPageComponent;