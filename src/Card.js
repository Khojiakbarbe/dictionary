import React from "react";
import './app.css'


function Card() {
    return (
        <div className="container cardContainer">
            <div className="row row-cols-1 row-cols-md-2 g-4 cardRow">
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">How to easily create a website with React</h5>
                            <p className="card-text">1h 30m Beginner</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Python Course: build web application</h5>
                            <p className="card-text">2h 30m Intermediate</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">GraphQL:introduction to graphQL for beginners</h5>
                            <p className="card-text">2h 46m Advance</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Angular - the complete guide for beginner</h5>
                            <p className="card-text">1h 30m</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;