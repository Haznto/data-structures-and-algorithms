'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const { Graph, businessTrip } = require('../graph-business-trip')
const Vertex = require('../Vertex')



describe('Testing graphs ', () => {


    let graph = new Graph()

    let vertex1 = new Vertex('Pandora')
    let vertex2 = new Vertex('Metroville')
    let vertex3 = new Vertex('Arendelle')
    let vertex4 = new Vertex('Monstropolis')
    let vertex5 = new Vertex('Naboo')
    let vertex6 = new Vertex('Narnia')
    beforeAll(() => {


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
    })
    it('test Busniess Trip correct inputs', () => {

        expect(businessTrip(graph, ['Metroville', 'Pandora'])).toEqual(82)
    })
    it('test Busniess Trip No direct flight inputs', () => {
        expect(businessTrip(graph, ['Narnia', 'Arendelle', 'Naboo'])).toEqual(null)
    })

    it('test Busniess Trip bad inputs', () => {

        expect(businessTrip(graph, [])).toEqual(null)
    })


})