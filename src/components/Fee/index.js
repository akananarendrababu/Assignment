import {Component} from 'react'
import './index.css'

class Fee extends Component {
  state = {sum: 654}

  heading = event => {
    console.log(event.target.value)
  }

  ChangeData = event => {
    console.log(event.target.value)
  }

  data2 = event => {
    console.log(event.target.value)
  }

  data3 = event => {
    console.log(event.target.value)
  }

  render() {
    const {sum} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          Free Structure for Courses in the University
        </h1>

        <select onChange={this.heading} className="top-selection">
          <option>Application Fee </option>
          <option>Exam Fee</option>
        </select>

        <div className="container">
          <div>
            <p className="paragraphborders">Country</p>
            <p className="paragraphborders">Courses</p>
            <p className="paragraphborders">Levels</p>
          </div>

          <div className="countrycontainer">
            <select className="country" onChange={this.ChangeData}>
              <option value="Indian">Indian</option>
              <option value="Foreign">FOREIGN</option>
              <option value="NRI">NRI</option>
              <option value="SAARC">SAARC</option>
            </select>
            <br />

            <select className="country" onChange={this.data2}>
              <option value="Medical">Medical</option>
              <option value="Dental">Dental</option>
              <option value="Ayurveda">Ayurveda</option>
            </select>
            <br />

            <select className="country" onChange={this.data3}>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>
          <div className="sum">
            <p>{sum}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Fee
