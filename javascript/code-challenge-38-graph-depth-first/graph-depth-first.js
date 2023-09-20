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

    depthFirst(vertex) {
        if (!vertex) return null

        if (!this.getNeighbors(vertex)) return 'isolated vertex'
        let visited = new Set()
        let stack = []
        let nodes = []
        visited.add(vertex)
        stack.push(vertex)


        while (stack.length > 0) {
            let top = stack.pop()
            let children = this.getNeighbors(top)
            nodes.push(top)
            if (!children.length <= 0) {

                children.forEach(child => {
                    if (!visited.has(child.vertex)) {
                        visited.add(child.vertex)
                        stack.push(child.vertex)
                    }
                })
            }
        }
        return nodes
    }

}


let graph = new Graph()

let vertex1 = new Vertex('A')
let vertex2 = new Vertex('B')
let vertex3 = new Vertex('C')
let vertex4 = new Vertex('D')
let vertex5 = new Vertex('E')
let vertex6 = new Vertex('F')
let vertex7 = new Vertex('G')
let vertex8 = new Vertex('H')
let vertex9 = new Vertex('H')


graph.addVertex(vertex1)
graph.addVertex(vertex2)
graph.addVertex(vertex3)
graph.addVertex(vertex4)
graph.addVertex(vertex5)
graph.addVertex(vertex6)
graph.addVertex(vertex7)
graph.addVertex(vertex8)

graph.addEdge(vertex1, vertex4, 2)
graph.addEdge(vertex1, vertex2, 1)

graph.addEdge(vertex2, vertex3, 3)

graph.addEdge(vertex3, vertex7, 4)

graph.addEdge(vertex2, vertex4, 5)

graph.addEdge(vertex4, vertex6, 7)
graph.addEdge(vertex4, vertex8, 6)
graph.addEdge(vertex4, vertex5, 8)

graph.addEdge(vertex6, vertex8, 9)





// console.log(graph)
// console.log(graph.adjacencyList)
// console.log(graph.getVertices())
// console.log(graph.getVertices())
// console.log((graph.adjacencyList.values()))
// console.log(graph.adjacencyList.get(vertex1))
console.log(graph.depthFirst(vertex1))
// console.log(graph.depthFirst(vertex9))
// console.log(graph.breadthFirst(vertex1))
// console.log(vertex1)
// console.log(graph.size())






module.exports = Graph 