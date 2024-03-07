import React from 'react'
import homelogo from "../../CommonSource/images/home/logo__dcojfwkzna2q_large.png"
function PartSix() {
  return (
    <div>
        <section className="container-fluid Trade-Card text-center bg-white">
            <div className="row">
                <div className="col-md-6">
                    <div className="Trade ">
                        <div className="fs-5 mx-5 px-5 py-3"> <img
                                src="images/home/logo_tradein__d1fpktgipvki_medium_2x.png" alt="" className="tradeIn"/>
                            <br/>
                            Get $200-$650 in credit when you trade in iPhone 11 or higher. 1
                        </div>
                        <div className="buyLearn">
                            <ul className="text-center ">
                                <li className="d-inline-block "><a href="" className="text-decoration-none">See what your
                                        device is worth</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="Card text-center">

                        <div className=" cardImg fs-5 mx-5 px-5 py-3"><img src={homelogo}
                              alt="Apple card logo"/> <br/>
                            Get upto 3% Daily Cash back with every purchases.
                        </div>
                        <div className="buyLearn">
                            <ul className="text-center ">
                                <li className="d-inline-block "><a href="" className="text-decoration-none px-3">Learn more</a>
                                </li>
                                <li className="d-inline-block"><a href="" className="text-decoration-none">Buy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    </div>
  )
}

export default PartSix