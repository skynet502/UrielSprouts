import React from 'react'
import './PriceTable.scss'
import { FaPaperPlane } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PriceTable = () => {
    const cardStyle={
        fontSize:80,
        marginTop:-30,
        color:'white'
    }
    const checkStyle={
        color: 'white',
        fontSize: 19,
        marginTop:4
    }
  return (
    <div className='price-section'>
    <div className='price-title'>
        <h2>Our Pricing</h2>
    </div>
    <div className='container-fluid'>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="Card text-center">
            <div class="title">
              <FaPaperPlane style={cardStyle} />
            </div>
            <div class="price">
              <h4><sup>₦</sup>1000</h4>
            </div>
            <div class="option">
              <ul>
              <li> <FaCheck style={checkStyle} /> Professionalreview </li>
              <li> <FaCheck style={checkStyle} />  48-hour response </li>
              <li> <FaCheck style={checkStyle} />  Job Offer Guarantee </li>
              <li> <FaCheck style={checkStyle} />  Clean and Reusable </li>
              </ul>
            </div>
            <Link to='/review#home'>Send Now</Link>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default PriceTable