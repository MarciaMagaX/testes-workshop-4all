/// <reference types="cypress" />

describe('Get Reqres', () => {

    it('Validar LIST USERS retornando 200', () => {
        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validar body retornando LIST USERS', () => {
        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
})

it('Validar SINGLE USER retornando 200', () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/users?page=2',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

it('Validar body retornando SINGLE USER', () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/users?page=2',
        failOnStatusCode: false
    }).then((response) => {
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
    })
})

    it('Validar SINGLE USER sem informar id retornando 400', () => {    

        cy.request({
        method: 'GET',
        url:'https://reqres.in/api/users/',
        failOnStatusCode: false
     }).then((response) => {
        expect(response.status).to.eq(400)
     })

    })

    it('Validar LIST USERS sem informar nenhuma pagina retornando 400', () => {    

        cy.request({
        method: 'GET',
        url:'https://reqres.in/api/users/',
        failOnStatusCode: false
     }).then((response) => {
        expect(response.status).to.eq(400)
     })

    })


    it('Validar SINGLE USER NOT FOUND retornando 404', () => {    

        cy.request({
        method: 'GET',
        url:'https://reqres.in/api/users/23',
        failOnStatusCode: false
     }).then((response) => {
        expect(response.status).to.eq(404)
     })

    })

    it('Validar LIST <RESOURCE> retornando 200', () => {
        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/unknown',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('Validar body retornando LIST <RESOURCE>', () => {
        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/unknown',
            failOnStatusCode: false
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
})

it('Validar SINGLE <RESOURCE> retornando 200', () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/unknown/2',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})
it('Validar body retornando SINGLE <RESOURCE>', () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/unknown/2',
        failOnStatusCode: false
    }).then((response) => {
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
    })
})

it('Validar SINGLE <RESOURCE> NOT FOUND retornando 404', () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/unknown/23',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(404)
    })
})
it('Validar body retornando SINGLE <RESOURCE> NOT FOUND', () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/unknown/23',
        failOnStatusCode: false
    }).then((response) => {
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
    })
})

it('Validar DELAYED RESPONSE retornando 200', () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/users?delay=3',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})
it('Validar body retornando DELAYED RESPONSE', () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/users?delay=3',
        failOnStatusCode: false
    }).then((response) => {
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
    })
})


})
