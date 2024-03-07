import React from 'react'
import  vision from "../../CommonSource/images/home/promo_logo_apple_vision_pro__90zi46p7dc2y_large.png"
function PartFour() {
  return (
    <div>
    <section className="container-fluid bg-white iPadPro-VisionPro">
            <div className="row">
                <div className="col-md-6">
                    <div className="iPadPro text-center text-white mt-4">
                        <div className="fw-bolder fs-1 pt-5">iPad Pro </div>
                        <div className=" fs-3"> Supercharged by. <img
                                src="images/home/promo_m2_chip__enw2kz91lsuq_large_2x.png" alt=""/></div>
                        <div className="buyLearn text-center">
                            <ul className="">
                                <li className="d-inline-block"><a href="" className="text-decoration-none px-3 ">Learn more</a>
                                </li>
                                <li className="d-inline-block"><a href="" className="text-decoration-none">Buy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="VisionPro text-center mt-4">
                        <div className="visionimg">
                            <img src={vision}
                                alt="Apple card logo"/>
                        </div>
                        <div className="vision-text fs-4 m-0 py-1">
                            <div>
                                Welcome to the era of spatial computing.
                                <p className="text-muted fs-5">Available early next year in the U.S.</p>
                            </div>
                        </div>
                        <div className="text-muted fs-4 text-nonwrap">

                        </div>
                        <div className="buyLearn">
                            <ul className="text-center ">
                                <li className="d-inline-block "><a href="" className="text-decoration-none">Learn more</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</div>
  )
}

export default PartFour