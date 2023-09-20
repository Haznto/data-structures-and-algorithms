'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const Graph = require('../graph-depth-first')
const Vertex = require('../Vertex')



describe('Testing graphs ', () => {


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

    beforeAll(() => {
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
    })
    it('test depthFirst correct inputs', () => {
        let toGet = [vertex1, vertex2, vertex3, vertex7, vertex4, vertex5, vertex8, vertex6]
        expect(graph.depthFirst(vertex1)).toEqual(toGet)
    })
    it('test depthFirst null inputs', () => {
        expect(graph.depthFirst(null)).toEqual(null)
    })

    it('test depthFirst isolated vertex input', () => {


        expect(graph.depthFirst(vertex9)).toEqual('isolated vertex')
    })


})