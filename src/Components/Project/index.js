import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <article className="col-md-4">
                <a href={this.props.github}
                    target="_blank"
                    rel="noreferrer">

                    <img src={this.props.src}
                        className="img-fluid portfolio-images"
                        alt={this.props.name} />
                </a>
                <div className="row mt-3">
                    <div className="col">
                        <h2>{this.props.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col  mb-4">
                        <p>{this.props.description}</p>
                        <a href={this.props.github}>{this.props.name} - GitHub</a> <br />
                        <a href={this.props.deployed}>{this.props.name} - deployed</a>
                    </div>
                </div>
            </article>
        );
    }
};

export default Project