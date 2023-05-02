import React from "react";
import './app.css'

function App() {
    return (
        <div className="container-fluid">

            <div className="container-fluid divBgColor">
                <div className="row my1Row">
                    <div className="col-md-5">
                        <h1>Welcome to Geeks UI Learning Application</h1>
                        <p>Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
                        <button className="browseBtn">Browse Courses</button>
                        <button className="instructorBtn">Are You Instructor?</button>
                    </div>
                    <div className="col-md-6 ">
                        <div className="manImg">
                            <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/hero/hero-img.png" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default App;

// className