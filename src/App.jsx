import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Cards from './components/cards/Cards'
import Section from './components/section/Section'
import Seo from './assets/image 7.png';
import Res from './assets/image 8 (1).png';
import Cloud from './assets/image 9 (1).png';

const App = () => {
  const cardData=[
    {img:Seo ,title:'SEO Optimized', descripton:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make", bg:'#404040'},
    {img:Res ,title:'Responsive', descripton:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make", bg:'#F74C55'},
    {img:Cloud ,title:'Cloud Services', descripton:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make", bg:'#2D5F3B'},
]
  return (
    <>
      <Header/>
      <Section/>
      <Cards  cardData={cardData}/>
      <Footer/>
      
    </>
  )
}

export default App


