/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const Edge = require('./Edge');
const Vertex = require('./Vertex');


class Graph {
    constructor() {
        this.adjacencyList = new Map()
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, [])
    }
    addEdge(current, target, weight) {
        if (this.adjacencyList.has(current) && this.adjacencyList.has(target)) {
            // console.log(this.adjacencyList.has(target))
            let arrayOfEdges = this.adjacencyList.get(current)
            let edge = new Edge(target, weight)
            arrayOfEdges.push(edge)
        } else return

    }
    getVertices() {
        // return this.adjacencyList.entries()
        return this.adjacencyList.keys()
    }
    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex)
    }
    size() {
        return this.adjacencyList.size
    }
}

let graph = new Graph()

let vertex1 = new Vertex(1)
let vertex2 = new Vertex(2)
let vertex3 = new Vertex(3)

graph.addVertex(vertex1)
graph.addVertex(vertex2)
graph.addVertex(vertex3)
graph.addEdge(vertex1, vertex2, 4)
graph.addEdge(vertex1, vertex3, 5)

// console.log(graph)
// console.log(graph.adjacencyList)
// console.log(graph.getVertices())
// console.log(graph.getVertices())
// console.log(graph.adjacencyList.get(vertex1))
console.log(graph.getNeighbors(vertex1))
// console.log(graph.size())


module.exports = Graph