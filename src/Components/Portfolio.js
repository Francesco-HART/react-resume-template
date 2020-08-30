import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <Grid item xs={4}>
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                  <img alt={projects.title} src={projectImage} />
                  <div className="overlay">
                    <div className="portfolio-item-meta"></div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-link"></i>
                  </div>
                </a>
              </div>
              <div>
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
          </Grid>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Voici certain de mes projets.</h1>

            <Grid
              container
              display="column"
              alignContent="center"
              justify="center"
            >
              {projects}
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
