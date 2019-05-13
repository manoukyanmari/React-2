import React from "react";

const marginStyle = {
    marginTop: '30px'
};

class Movie extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron col-md-12">
                    <div className="col-md-4">
                        <img src="../../../src/imgs/machinist.JPG"/>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <h2>Machinist</h2>
                            <div className="row">
                                <label htmlFor="title">Oscar-winning Movies</label>
                            </div>
                            <div className="row">
                                <div className="col-md-3 text-left">1994</div>
                                <div className="col-md-3 text-right">154 min</div>
                            </div>
                        </div>
                        <div className="row" style={marginStyle}>
                            Trevor Reznik (Christian Bale) is a machinist whose insomnia has led to his becoming emaciated. His appearance and behavior keep his coworkers away, and they eventually turn against him when he is involved in an accident which causes his coworker, Miller, to lose his left arm. Trevor, who was distracted by an unfamiliar co-worker named Ivan, is blamed for the accident. No one at the factory knows of Ivan and there are no records of him. Trevor seems to find peace only with Stevie, a prostitute with genuine affection for him, and with Maria, a waitress at an airport diner he frequents. He is haunted by brief flashes of recurring imagery, and things such as his car cigarette lighter take on a menacing air. A mysterious series of post-it notes appear on his refrigerator, depicting a game of hangman.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;