'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const { leftJoin, Hash } = require('../left-join')



describe('Testing Hash Tables ', () => {


    let hash1 = new Hash(19)
    let hash2 = new Hash(19)
    beforeAll(() => {


        hash1.set('diligent', 'employed')
        hash1.set('fond', 'enamored')
        hash1.set('guide', 'usher')
        hash1.set('outfit', 'garb')
        hash1.set('wrath', 'anger')

        hash2.set('diligent', 'idle')
        hash2.set('fond', 'averse')
        hash2.set('guide', 'follow')
        hash2.set('flow', 'jam')
        hash2.set('wrath', 'delight')
    })
    it('test left join 1 two null inputs', () => {

        expect(leftJoin(null, null)).toEqual('please enter two hash tables')
    })
    it('test left join 2 two null inputs', () => {
        expect(leftJoin(null, hash1)).toEqual('please enter two hash tables')
    })

    it('test left join 3 two correct inputs', () => {

        expect(leftJoin(hash1, hash2)).toEqual({
            outfit: { Synonyms: 'garb', Antonyms: null },
            diligent: { Synonyms: 'employed', Antonyms: 'idle' },
            wrath: { Synonyms: 'anger', Antonyms: 'delight' },
            fond: { Synonyms: 'enamored', Antonyms: 'averse' },
            guide: { Synonyms: 'usher', Antonyms: 'follow' }
        })
    })


})