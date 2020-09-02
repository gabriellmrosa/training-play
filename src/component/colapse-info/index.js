import React, {useState, useEffect, useRef, createRef} from 'react';
import styled from 'styled-components'
import chevronDown from '../../img/chevron-down.svg'


const ColapseInfo = styled.div`
    position:relative;
    width:100%;
    height:auto;
    margin-top:24px;
    input[type='checkbox']{
        display:none;
    }
    .title-area{
        padding:16px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background:#393E46;
        border-radius:4px;
        img{
            transition:300ms;
        }
    }
    .description-area{
        background: #393E46;
        border-radius: 4px;
        padding: 0px 16px 0px 16px;
        height: 0px;
        overflow:hidden;
        transition:300ms;
        
    }
    input[type='checkbox']:checked ~ .description-area{
        padding: 8px 16px 16px 16px;
        height: ${({textPdescriptionHeight})=> (textPdescriptionHeight + 16 + 8) + 'px'};
    }

    input[type='checkbox']:checked + label .title-area img{
        transform: rotate(180deg);
    }

    @media(max-width: 800px) {

    }
`

const ColapseInfoComponent = ({title, content, id})=>{

    const textPdescription = createRef()
    const [heightItem, setHeightItem] = useState()

    useEffect(()=>{
        setHeightItem(textPdescription.current.getBoundingClientRect().height)
    },[])

    return(
        <ColapseInfo textPdescriptionHeight={heightItem}>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>
                <div className="title-area">
                    <h3>{title}</h3> 
                    <img src={chevronDown} alt="Training Play"/>
                </div>
            </label>
            <div className="description-area">
                <p ref={textPdescription}>{content}</p>
            </div>
        </ColapseInfo> 
    )
}

export default ColapseInfoComponent;