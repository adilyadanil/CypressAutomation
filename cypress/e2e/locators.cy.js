/// <reference types="cypress" />

describe('Context: My First Tests', () => {
   
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })
   
    it('Check different locators strategies', () => {
        //by css locator
        cy.get("input[name=username]").type("CydeoStudent");//every statement creates an object to be intewracted, and the next
        // command makes operation to the object created at the previous statement
        //attribute name and value 
        cy.get("[type='text").clear();//clear what is typed
        cy.get("input").each((item, index, list) => {
            //assert the lenght of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
       
        //by attribute name
        cy.get('[type]');
        //by className
        cy.get('.btn.btn-primary');
        //by id
        cy.get('#wooden_spoon');
        // if I want to use text: no xpath in cypress, but it still ppossible with a 
        cy.get('button').should('contain','Login').click();

       })
       it('Check finding elements by traveling through DOM', () => {
        // travel to find the login button: locate username box- go to parent form -then find button
        cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();

    })
    it.only('Check Different Type of Assertions', () => {
        //cypress itself bundles assertions provided by Chai, Sinon and JQuery libraries
        //should Assertion
    })
})
