import React from 'react'
import { Image } from 'react-bootstrap'
import secure from '../../images/secure-orange.svg'
import boxes from '../../images/boxes-orange.svg'
import feedback from '../../images/feedback-orange.svg'

const TabThreeContent = () => {
  return (
    <>
      <div className="dryvans__wrapper">
        <div className="dryvans__heading">Advantages of Dry Vans</div>
        <div className="dryvans__text">
          Whenever possible, a dry van trailer is typically your best option to
          get the most for your shipping dollar. Since this way of shipping is
          so common, it’s easy to combine different products from multiple
          shippers to split the costs. Other advantages include:
        </div>
        <div className="dryvans__sub-wrapper">
          <div className="dryvans__ter-wrapper">
            <div className="dryvans__image-wrapper">
              <Image src={secure} fluid={true} />
            </div>
            <div className="dryvans__label">Low Chance of Lost Freight</div>
            <div className="dryvans__sub-text">
              Low Chance of Lost Freight: With ample security and sturdy
              construction, dry vans offer protection against theft and product
              damage, making losses unlikely.
            </div>
          </div>
          <div className="dryvans__ter-wrapper">
            <div className="dryvans__image-wrapper">
              <Image src={boxes} fluid={true} />
            </div>
            <div className="dryvans__label">Ample Room</div>
            <div className="dryvans__sub-text">
              Our trailers can haul up to 45,000 lbs or 26 pallets!
            </div>
          </div>
          <div className="dryvans__ter-wrapper">
            <div className="dryvans__image-wrapper">
              <Image src={feedback} fluid={true} />
            </div>
            <div className="dryvans__label">LTL Cost Savings</div>
            <div className="dryvans__sub-text">
              Consolidating shipments helps keep costs low.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabThreeContent
