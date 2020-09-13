import React, {useState, useEffect, useRef, createRef} from 'react';
import styled from 'styled-components'
import closeIcon from '../../img/close-icon.svg'

const ModalVideo = styled.div`
    position:fixed;
    z-index: 200;
    top: 0px;
    left: 0px;
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100vh;
    display: ${(props) => (props.active === false ? 'none' : 'inline-flex')};

    iframe{
        z-index: 202;
        align-self:center;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
    }
    p{
        z-index: 201;
        color:#fff;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
    }
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


const ModalVideoComponent = ({data, setModalVideo})=>{

    return(
        <ModalVideo active={data.active}>
            <CloseIcon src={closeIcon} alt="Training Play" onClick={()=> setModalVideo(old=>({...old, active: false}))}/>
            {data.active ?
            <iframe 
                width="100%" 
                height="315" 
                src={data.videoEmbed} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>:''}
            <p>Carregando...</p>
        </ModalVideo>
    )
}

export default ModalVideoComponent;