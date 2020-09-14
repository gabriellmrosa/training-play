import React from 'react';
import styled from 'styled-components'
import closeIcon from '../../img/close-icon.svg'

const ModalAssinar = styled.div`
    position:fixed;
    z-index: 200;
    top: 0px;
    left: 0px;
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100vh;
    display: ${(props) => (props.active === false ? 'none' : 'inline-flex')};
`

const CloseIcon = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    background:rgba(0,0,0,0.5);
    border-radius: 50%;
    width:24px;
    height:24px;
    margin:32px;
`

const CardMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:90%;
    height:auto;
    background: var(--color-darker);
    border-radius: 16px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:40px;
    text-align:center;
    h3{
        font-size:18px;
    }
    button{
        margin:24px 0px 0px 0px;
        padding:16px;
        width:100%;
    }
    input{
        padding:16px;
        background:#1B1F27;
        border:none;
        color:#fff;
        outline:none;
        font-size:24px;
        border-radius:8px;
        width:100%;
        margin-top:24px;
    }

`

const ModalAssinarComponent = ({active, setModalAssinar})=>{

    return(
        <ModalAssinar className='modal-alert' active={active} onClick={(event)=>(event.target.classList.contains('modal-alert') && setModalAssinar(false) )}>
            <CloseIcon src={closeIcon} alt="Training Play" onClick={()=> setModalAssinar(false)}/>
            
            <CardMessage >
                <h3>Digite seu código</h3>

                <input type="text" autoFocus="autoFocus"/>
                <button type="button" className="btn btn-primary">Entrar</button>
            </CardMessage>

        </ModalAssinar>
    )
}

export default ModalAssinarComponent;