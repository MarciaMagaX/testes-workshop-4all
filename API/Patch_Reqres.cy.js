/// <reference types="cypress" />

describe('Post Reqres', () => {

    it('Validar UPDATE retornando 200', () => {

        const dados = {
            "name": "morpheus",
            "job": "zion resident"
        }

        cy.request({
            //payload
            method: 'PATCH',
            url:'https://reqres.in/api/users/2',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

})