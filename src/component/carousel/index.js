import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import personalImage from '../../img/personal.png';
import customPlay from '../../img/custom-play.svg';
import lockVideo from '../../img/lock-video.png';

const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: ${(props)=> (props.heightItemProp + 20) + 'px'};
  overflow-x:auto;
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
      display:flex;
      align-items:flex-start;
      justify-content:center;
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
        width:200%;
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
        background: linear-gradient(90deg, rgba(34,40,49,0) 0%, rgba(34,40,49,1) 30%, rgba(34,40,49,1) 100%);
        color: var(--color-primary);
        font-size:inherit;
        padding:0px 16px 0px 90px;
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
  }

  @media(max-width: 800px) {
    .img-area{
      width:${(props) => (props.screenWidthProp - 100) + 'px'};
    }
  }
`

const CarouselCompoent = ({openDescription, openVideo, loginStatus})=>{
  const [screenWidth, setScreenWidth] = useState(0);
  const [heightItem, setHeightItem] = useState(0);

  const [items, setItems] = useState([
    {
      link:'https://www.youtube.com/embed/68gmgUdjokU',
      title:'Introdução',
      description: 'Lorem ipsumbibendum massa dissim nunc. Suspendus a turpis vel, convallis auctor est. Maecenas aliquet elit neque, nec consectetur nulla luctus vitae.',
      thumb: personalImage,
      access: true
    },
    {
      link:'https://www.youtube.com/embed/6dpMO1dH9kc',
      title:'1 - CARALAVADA',
      description: 'Neste WORKOUT você vai receber estímulos de tonificação muscular nos braços, peitoral, abdômen e nas coxas, o seu ritmo irá ditar a frequência cardíaca que você alcançar, objetivo é transpiração e musculatura FADIGADA no final, tudo isso estimula a queima de gordura.',
      thumb:'https://picsum.photos/250/210',
      access: true
    },
    {
      link:'https://www.youtube.com/embed/4Cya0HISF9M',
      title:'2 - AGACHAMENTOINFINITO',
      description: 'Neste WORKOUT você vai testar sua resistência muscular nas pernas, unido a um recrutamento de cardio bem intenso, o treino é no objetivo do desafio, programe-se para insistir ao máximo, você estimula queima de gordura e resistência muscular dos membros inferiores.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
    },
    {
      link:'https://www.youtube.com/embed/uLLI36DZg8M',
      title:'3 - NASCENDOTANQUINHO',
      description: 'Neste WORKOUT você irá trabalhar o seu abdômen, se tremer e der câimbra é sinal de que está correto! Divirta-se, tente manter-se em movimento sempre, seu cardio sobe e você queima gordura.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
    },
    {
      link:'https://www.youtube.com/embed/n0qxLM8sJ6A',
      title:'4 - TREMETUDO',
      description: 'Neste WORKOUT você irá testar sua resitência de abdômen na primeira parte e depois precisa se manter em  movimento ainda para sobreviver a segunda parte, muito abdômen e cardio na tampa.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
    },
    {
      link:'https://www.youtube.com/embed/HGQjP5bgD70',
      title:'5 - GUENTACORAÇÃO',
      description: 'Neste WORKOUT você recrutará todo o seu corpo, as principais musculaturas, membros superiores, abdômen, centro do corpo e membros inferiores, seu objetivo é manter o ritmo mais forte de trabalho e transpirar o máximo que conseguir estimulando a queima de gordura.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
    },
    {
      link:'https://www.youtube.com/embed/--JqS-PttFg',
      title:'6 - AGRESSIVOR',
      description: 'Neste WORKOUT você irá recrutar seu cardio respiratório e sua resistência de se manter em trabalho durante o tempo de trabalho, três movimentos combinados para você se desafiar e queimar gordura, não tenha medo de arriscar.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
    },
    {
      link:'https://www.youtube.com/embed/KdFpMwBWcpE',
      title:'7 - INTERVAL',
      description: 'Neste WORKOUT você irá realizar um trabalho intervalado, bastante abdômen logo no início e depois um trabalho global onde você precisa superar a pressão do relógio, aproveite para respirar no intervalo, aumente sua temperatura corporal, transpire e tente executar com qualidade os movimentos.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
    },
    {
      link:'https://www.youtube.com/embed/RzPF-BTs9oY',
      title:'8 - FACIN',
      description: 'Neste WORKOUT você encontrará um desafio em manter o cardiorespiratório funcionando e no segundo bloco preste atenção em sua postura para uma boa ativação do abdômen, a combinação de tudo isso é muita transpiração e estimulo de queima de calorias.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
    },
    {
      link:'https://www.youtube.com/embed/hXH7YTazYBA',
      title:'9 - CORRERIA',
      description: 'Cada minuto você precisa cumprir uma tarefa, abdômen, braços e peitoral mas nada disso sem uma boa dose de ritmo intenso para sua calorias irem embora e você transpirar o máximo possível, seu desafio é ficar atento ao relógio e conseguir ir cumprindo as tarefas.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
    },
    {
      link:'https://www.youtube.com/embed/hXH7YTazYBA',
      title:'10 - FRITACOXA',
      description:'Este WORKOUT irá aumentar sua temperatura corporal e recrutar a musculatura das pernas, tríceps e peitorais principalmente, executando da maneira mais rápida possível você trabalha seu condicionamento cardiovascular, resistência muscular e estimula a queima de gordura.',
      thumb:'https://picsum.photos/250/210',
      access: loginStatus
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
          <div className="img-area" onClick={ element.access ?
            ()=> openVideo({
              active: true,
              videoEmbed: element.link   
            })
            :
            ()=>console.log('oi')
          }>
            <div className="mask">
              <img src={element.access ? customPlay : lockVideo} alt="Mask White"/>
            </div>
            <img className="img-thumb" src={element.thumb} alt="Training Play"/>
          </div>
          <h3>{element.title}</h3>
          <div className="description-area">
            <p>{element.description}</p>
            <button className="link" type="button" onClick={()=> openDescription({
              active: true,
              title: element.title, 
              description: element.description, 
              thumbImage: element.thumb,
              access: element.access,
              link: element.link
            })}>Mais detalhes</button>
          </div>
        </div>
      ))}
    </div>
    </Carousel> 
  )
}

export default CarouselCompoent;
