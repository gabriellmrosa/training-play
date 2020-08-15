import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const Carousel = styled.div`
  position: relative;
  width:100%;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  align-items:center;
  justify-content:center;
  transition:300ms;
  cursor: pointer;
  user-select: none;
  will-change: transform;

  .item{
    min-width:200px;
    height: 200px;
    background:rgba(15,155,155,0.2);
    border:1px solid #fff;
    word-wrap: break-word;
    transition:300ms;
  }
`

  
//   const slider = document.querySelectorAll('.item');
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   slider.forEach((element)=>{
//     element.addEventListener('mousedown', (e) => {
//       isDown = true;
//       element.classList.add('active-item-slider');
//       startX = e.pageX - slider.offsetLeft;
//       scrollLeft = slider.scrollLeft;
//     });
//   })
//   slider.forEach((element)=>{
//     element.addEventListener('mouseleave', () => {
//       isDown = false;
//       element.classList.remove('active-item-slider');
//     });
//   })

//   slider.forEach((element)=>{
//     element.addEventListener('mouseup', () => {
//       isDown = false;
//       element.classList.remove('active-item-slider');
//     });
//   })

//   slider.forEach((element)=>{
//     element.addEventListener('mousemove', (e) => {
//       if(!isDown) return;
//       e.preventDefault();
//       const x = e.pageX - slider.offsetLeft;
//       const walk = (x - startX) * 3; //scroll-fast
//       element.scrollLeft = scrollLeft - walk;
//       console.log(walk);
//     });
//   })
// }


const CarouselCompoent = ()=>{
  const [sliderArea, setSliderArea] = useState('')
  const [isDown, setIsDown] = useState(false)
  const [sliderOffsetLeft, setSliderOffsetLeft] = useState(0);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [items, setItems] = useState([
    {
      link:'https://youtu.be/252rU8CBdV4'
    },
    {
      link:'https://youtu.be/6dpMO1dH9kc'
    },
    {
      link:'hhttps://youtu.be/4Cya0HISF9M'
    },
    {
      link:'https://youtu.be/uLLI36DZg8M'
    },
    {
      link:'https://youtu.be/n0qxLM8sJ6A'
    },
    {
      link:'https://youtu.be/HGQjP5bgD70'
    },
    {
      link:'https://youtu.be/--JqS-PttFg'
    },
    {
      link:'https://youtu.be/KdFpMwBWcpE'
    },
    {
      link:'https://youtu.be/RzPF-BTs9oY'
    },
    {
      link:'https://youtu.be/hXH7YTazYBA'
    }
  ])


  const onMouseDownFunc = (e,indexItem) =>{
    setIsDown(true)
    setStartX(e.pageX - sliderOffsetLeft)
  }

  const onMouseLeaveFunc = (indexItem) =>{
    setIsDown(false)
    setItems(old => old.map((item, index)=>({...item, onMouseDown:false})))
  }

  const onMouseMoveFunc = (event)=>{
    if(!isDown)return
      event.preventDefault();
      const x = event.pageX - scrollLeft;
      const walk = (x - startX) * 3;
      sliderArea.scrollLeft =  walk - scrollLeft;
      console.log('walk', walk, 'scrollLeft',scrollLeft)
      console.log('scrolleft event target', event.target.scrollLeft)
  }

  useEffect(()=>{
    setSliderOffsetLeft(document.querySelector('.slider-area').offsetLeft)
    setScrollLeft(document.querySelector('.slider-area').scrollLeft)
    setSliderArea(document.querySelector('.slider-area'))
  },[])

  return(
    <Carousel className={`slider-area ${isDown ? 'active-slider':''}`}  
      onMouseDown={(e)=>onMouseDownFunc(e)}
      onMouseLeave={()=>onMouseLeaveFunc()} 
      onMouseUp={()=>onMouseLeaveFunc()}
      onMouseMove={(e)=>onMouseMoveFunc(e)} >
    {items.map((element, index)=>(
      <div  className='item' key={index}>
        <p>{element.link}</p>
      </div>
    ))}
    </Carousel> 
  )
}

export default CarouselCompoent;