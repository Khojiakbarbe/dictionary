import React from "react";
import './app.css'


function Info() {
    return (
        <div className="container-fluid info infoContainer">
            <div className="row infoRow">
                <div className="col-lg-4 col-md-4 col-sm-4 row">
                    <div className="displayBlock1">
                        <span className="span">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                            </svg>
                        </span>
                    </div>
                    <div className="displayBlock2">
                        <span className="spanTextBold">30,000 online courses</span>
                        <br />
                        <span className="spanText">Enjoy a variety of fresh topics</span>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 row">
                    <div className="displayBlock1">
                        <span className="span">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                        </span>
                    </div>
                    <div className="displayBlock2">
                        <span className="spanTextBold">Expert instruction</span>
                        <br />
                        <span className="spanText">Find the right instructor for you</span>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 row">
                    <div className="displayBlock1">
                        <span className="span">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>
                        </span>
                    </div>
                    <div className="displayBlock2">
                        <span className="spanTextBold">Lifetime access</span>
                        <br />
                        <span className="spanText">Learn on your schedule</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Info;