'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const Graph = require('../graph-breadth-first')
const Vertex = require('../Vertex')



describe('Testing graphs ', () => {


    let graph = new Graph()
    let vertex1 = new Vertex(1)
    let vertex2 = new Vertex(2)
    let vertex3 = new Vertex(3)
    beforeAll(() => {
        graph.addVertex(vertex1)
        graph.addVertex(vertex2)
        graph.addVertex(vertex3)
        graph.addEdge(vertex1, vertex2, 4)
        graph.addEdge(vertex1, vertex3, 5)
    })
    it('test breadthFirst correct inputs', () => {
        let toGet = [vertex1, vertex2, vertex3]
        expect(graph.breadthFirst(vertex1)).toEqual(toGet)
    })
    it('test breadthFirst null inputs', () => {
        expect(graph.breadthFirst(null)).toEqual('Enter a vertex')
    })

    it('test breadthFirst isolated vertex input', () => {
        let vertex4 = new Vertex(4)
        graph.addVertex(vertex4)
        expect(graph.breadthFirst(vertex4)).toEqual('please pick a connected node to the graph')
    })


})