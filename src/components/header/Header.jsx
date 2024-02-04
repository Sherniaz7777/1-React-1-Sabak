import React, { Component } from 'react'
import Rectange from "../../assets/Rectangle 2.png";
import iphone from "../../assets/image 2.png";
import android from "../../assets/image 3 (1).png";
import window from "../../assets/image 4 (1).png";
import ipad from "../../assets/image 1 (3).png";

export default class Header extends Component {
  render() {
    return (
      <header>
      <div className='container'>
        <nav>
            <div className="nav-img">
              <img src={Rectange} alt="" />
            </div>
            <a href="">The Products</a>
            <a href="">Features</a>
            <a href="">Contact</a>
            <a href="">Services</a>
        </nav>
        <div className="main-pro">
          <div className="main-pro-in">
                <h1>Inspire your inspiration</h1>

                <h4>Simple to use for your app, products showcase and your inspiration</h4>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>

                <div className="main-pro-imgs">
                          <img src={iphone} alt="" />
                          <img src={android} alt="" />
                          <img src={window} alt="" />
                  </div>

          </div>

              <img src={ipad} alt="" />

        </div>
      </div>
      </header>
    )
  }
}
