import React, { Component } from 'react'
import Seo from '../../assets/image 7.png'
import Res from '../../assets/image 8 (1).png'
import Cloud from '../../assets/image 9 (1).png'


export default class Cards extends Component {

  render() {


    return (
      <div className="container">
      <div className="cards">
        {this.props.cardData.map(item => {
          return(
        <div className="card" key={item.title} style={{backgroundColor:item.bg}}>
          <div className="card-title">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
          </div>
             <p>{item.descripton}</p>
        </div>

          )
        })}

      </div>
      </div>
    )
  }
}
