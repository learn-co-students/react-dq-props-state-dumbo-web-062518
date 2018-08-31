import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)

    this.state = {
      weight: this.props.weight,
      eyes: this.props.eyeColor
    }
  }



  imageSnag = () => {
    console.log(this.state.eyes)
    if (this.state.eyes === 'blue') {
      return BlueBaby
      // const urlSlug = require(`./assets/blue-eyes.png`)
    } else if (this.state.eyes === 'glowing') {
      return GlowingBaby
      // const urlSlug = require(`./assets/glowing-eyes.png`)
    } else if (this.state.eyes === 'sun') {
      return SunBaby
      // const urlSlug = require(`./assets/sun-eyes.png`)
    } else {
      return normalBaby
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.imageSnag()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
