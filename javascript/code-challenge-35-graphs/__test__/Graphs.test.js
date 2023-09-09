'use strict';
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
const Graph = require('../Graph'); // Adjust the path as needed
const Vertex = require('../Vertex'); // Adjust the path as needed
const Edge = require('../Edge'); // Adjust the path as needed

describe('faretZayton function', () => {
    it('Vertex can be successfully added to the graph', () => {
        let vertex1 = new Vertex(1)
        let graph = new Graph()
        graph.addVertex(vertex1)
        expect(graph.adjacencyList.has(vertex1)).toEqual(true);
    });

    it('An edge can be successfully added to the graph && All appropriate neighbors can be retrieved from the graph', () => {

        let vertex1 = new Vertex(1)
        let vertex2 = new Vertex(2)
        let graph = new Graph()
        graph.addVertex(vertex1)
        graph.addVertex(vertex2)
        graph.addEdge(vertex1, vertex2, 3)
        expect(graph.getNeighbors(vertex1).length).toEqual(1);
    });

    it('A collection of all vertices can be properly retrieved from the graph', () => {
        let vertex1 = new Vertex(1)
        let vertex2 = new Vertex(2)
        let graph = new Graph()
        graph.addVertex(vertex1)
        graph.addVertex(vertex2)
        graph.addEdge(vertex1, vertex2, 3)
        let obj = graph.getVertices()
        expect(obj.next().value.value).toEqual(1);
    });

    it('Neighbors are returned with the weight between vertices included', () => {

        let vertex1 = new Vertex(1)
        let vertex2 = new Vertex(2)
        let graph = new Graph()
        graph.addVertex(vertex1)
        graph.addVertex(vertex2)
        graph.addEdge(vertex1, vertex2, 3)
        expect(graph.getNeighbors(vertex1)[0].weight).toEqual(3);


    });
    it('The proper size is returned, representing the number of vertices in the graph', () => {
        let vertex1 = new Vertex(1)
        let vertex2 = new Vertex(2)
        let graph = new Graph()
        graph.addVertex(vertex1)
        graph.addVertex(vertex2)

        expect(graph.size()).toEqual(2);
    });
    it('A graph with only one vertex and edge can be properly returned', () => {
        let vertex1 = new Vertex(1)
        let graph = new Graph()
        graph.addVertex(vertex1)
        graph.addEdge(vertex1, vertex1, 3)
        console.log(graph.getNeighbors(vertex1)[0].vertex)
        // console.log(graph.adjacencyList)

        expect(graph.getNeighbors(vertex1)[0].vertex).toEqual(vertex1);
    });
});