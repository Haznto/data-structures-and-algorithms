/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

class Edge {
    constructor(vertex,weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

module.exports = Edge