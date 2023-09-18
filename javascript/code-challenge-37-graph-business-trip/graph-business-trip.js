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
    getVertexByValue(value) {
        for (const [vertex, _] of this.adjacencyList) {
            if (vertex.value === value) {
                return vertex;
            }
        }
        return null; 
    }
}


let graph = new Graph()

let vertex1 = new Vertex('Pandora')
let vertex2 = new Vertex('Metroville')
let vertex3 = new Vertex('Arendelle')
let vertex4 = new Vertex('Monstropolis')
let vertex5 = new Vertex('Naboo')
let vertex6 = new Vertex('Narnia')


graph.addVertex(vertex1)
graph.addVertex(vertex2)
graph.addVertex(vertex3)
graph.addVertex(vertex4)
graph.addVertex(vertex5)
graph.addVertex(vertex6)

graph.addEdge(vertex1, vertex2, 82)
graph.addEdge(vertex2, vertex1, 82)

graph.addEdge(vertex1, vertex3, 150)
graph.addEdge(vertex3, vertex1, 150)

graph.addEdge(vertex2, vertex3, 99)
graph.addEdge(vertex3, vertex2, 99)
graph.addEdge(vertex2, vertex4, 105)
graph.addEdge(vertex4, vertex2, 105)
graph.addEdge(vertex2, vertex5, 26)
graph.addEdge(vertex5, vertex2, 26)
graph.addEdge(vertex2, vertex6, 37)
graph.addEdge(vertex6, vertex2, 37)

graph.addEdge(vertex3, vertex4, 42)
graph.addEdge(vertex4, vertex3, 42)

graph.addEdge(vertex4, vertex5, 73)
graph.addEdge(vertex5, vertex4, 73)

graph.addEdge(vertex5, vertex6, 250)
graph.addEdge(vertex6, vertex5, 250)

// console.log(graph)
// console.log(graph.adjacencyList)
// console.log(graph.getVertices())
// console.log(graph.getVertices())
// console.log((graph.adjacencyList.values()))
// console.log(graph.adjacencyList.get(vertex1))
console.log(graph.getNeighbors(vertex2))
// console.log(graph.breadthFirst(vertex1))
// console.log(vertex1)
// console.log(graph.size())

function businessTrip(graph, arr) {
    if(arr.length < 1) return null
    let cost = 0
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            let firstCity = graph.getVertexByValue(arr[i])
            let nextCity = graph.getVertexByValue(arr[i + 1])

            if (firstCity && nextCity) {
                let firstNeigbors = graph.getNeighbors(firstCity)
                firstNeigbors.forEach(edge => {
                    if (edge.vertex === nextCity) {
                        cost = cost + edge.weight
                    }
                })
            } else return null

        }
    }
    if (cost === 0) return null
    return cost
}

console.log(businessTrip(graph, ['Narnia', 'Arendelle', 'Naboo']))


module.exports = { Graph, businessTrip }