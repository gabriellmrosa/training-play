import React from 'react';
import styled from 'styled-components'
import customPlay from '../../img/custom-play.svg';
import lockVideo from '../../img/lock-video.png';

const ThumbDescriptionVideo = styled.div`
    word-wrap: break-word;
    transition:300ms;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    margin:0px 0px 0px 0px;
    color:#fff;
    font-size:14px;
    h3{
      margin-bottom:8px;
      font-weight:600;
      font-size:18px;
    }
    .img-area{
      position: relative;
      min-width:200px;
      height:210px;
      border-radius:8px;
      overflow: hidden;
      margin-bottom:16px;
      width:100%;
      .mask{
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        background:rgba(57,62,70,0.5);
        display: flex;
        align-items:center;
        justify-content:center;
        img{
          background:rgba(255,255,255,0.2);
          padding:18px 18px;
          border-radius:50%;
        }
      }
      .img-thumb{
        width:100%;
      }
    }
    .description-area{
      position: relative;
      height: auto;
      max-height:130px;
      white-space: pre-line;
      overflow: hidden;
      text-overflow: ellipsis;
      .link{
        position: absolute;
        bottom:0px;
        right:0px;
        z-index:10;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(34,40,49,1) 30%, rgba(34,40,49,1) 100%);
        color: var(--color-primary);
        font-size:inherit;
        padding:0px 8px 0px 56px;
        border:none;
        margin-bottom:2px;
        outline:none;
        &:focus{
          color:yellow;
        }
      }
    }
    img{
      border-radius:8px;
    }
`
const ThumbDescriptionVideoComponent = ({ description, thumbImage, title, access, setModalVideo, link })=>{

    return(
        <ThumbDescriptionVideo>  
            <div className="img-area" onClick={()=> setModalVideo(old=>({
              active: true,
              videoEmbed: link 
            }))}>
                <div className="mask">
                    <img src={access ? customPlay : lockVideo} alt="Mask White"/>
                </div>
                <img className="img-thumb" src={thumbImage} alt="aaa"/>
            </div>
            <h3>{title}</h3>
            <div className="description-area">
                <p>{description}</p>
            </div>
        </ThumbDescriptionVideo> 
    )
}

export default ThumbDescriptionVideoComponent;