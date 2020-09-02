import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import personalImage from '../../img/personal.png'
import customPlay from '../../img/custom-play.svg'

const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: ${(props)=> (props.heightItemProp + 20) + 'px'};
  overflow:auto;
  cursor: pointer;
  user-select: none;
  will-change: transform;
  .items-area{
    position:absolute;
    top:0px;
    left:0px;
    width:auto;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-zstart;
    margin:0px 32px 0px 32px  ;
  }
  .item{
    word-wrap: break-word;
    transition:300ms;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    margin:0px 24px 0px 0px;
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
      height: 130px;
      white-space: pre-line;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    img{
      border-radius:8px;
    }
  }

  @media(max-width: 800px) {
    .img-area{
      width:${(props) => (props.screenWidthProp - 100) + 'px'};
    }
  }
`

const CarouselCompoent = ()=>{
  const [screenWidth, setScreenWidth] = useState(0);
  const [heightItem, setHeightItem] = useState(0);

  const [items, setItems] = useState([
    {
      link:'https://youtu.be/252rU8CBdV4',
      title:'Introdução',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb: personalImage,
      access: true
    },
    {
      link:'https://youtu.be/6dpMO1dH9kc',
      title:'1 - Pernas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: true
    },
    {
      link:'hhttps://youtu.be/4Cya0HISF9M',
      title:'2 - Braços e ombro',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: true
    },
    {
      link:'https://youtu.be/uLLI36DZg8M',
      title:'3 - Cotovelo e joelhos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: false
    },
    {
      link:'https://youtu.be/n0qxLM8sJ6A',
      title:'4 - alguma coisa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: false
    },
    {
      link:'https://youtu.be/HGQjP5bgD70',
      title:'5 - alguma coisa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: false
    },
    {
      link:'https://youtu.be/--JqS-PttFg',
      title:'6 - alguma coisa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: false
    },
    {
      link:'https://youtu.be/KdFpMwBWcpE',
      title:'7 - alguma coisa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: false
    },
    {
      link:'https://youtu.be/RzPF-BTs9oY',
      title:'8 - alguma coisa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: false
    },
    {
      link:'https://youtu.be/hXH7YTazYBA',
      title:'9 - alguma coisa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget felis vitae metus congue molestie. Donec ultricies commodo enim, in bibendum massa dictum vel. Mauris aliquam diam et risus ornare, in aliquet lorem accumsan. Aenean vel libero fringilla, porta risus vel, dignissim nunc. Suspendisse ornare urna justo, efficitur vulputate augue fermentum in. Donec lectus nibh, cursus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb:'https://picsum.photos/250/210',
      access: false
    }
  ])

  useEffect(()=>{
    setScreenWidth(document.querySelector('body').getBoundingClientRect().width)
    setHeightItem(document.querySelector('.item').getBoundingClientRect().height)
  },[])

  return(
    <Carousel className={`slider-area`}  
      screenWidthProp={screenWidth}
      heightItemProp={heightItem}
    >
    <div className="items-area">
      {items.map((element, index)=>(
        <div  className='item' key={index}>
          <div className="img-area">
            <div className="mask">
              <img src={customPlay} alt="Mask White"/>
            </div>
            <img className="img-thumb" src={element.thumb} alt="aaa"/>
          </div>
          <h3>{element.title}</h3>
          <div className="description-area">
            <p>{element.description}</p>
          </div>
        </div>
      ))}
    </div>
    </Carousel> 
  )
}

export default CarouselCompoent;