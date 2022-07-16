import {bookmarks,search,contacts} from "./mostly-selector.cy.js";
//const password = Cypress.env('password')

//STEP 1
describe("Mostly.AI Website Automation Test", ()=>{
    //Visit Mostly.ai Website
    it('Visit Mostly.AI Website with URL', {defaultCommandTimeout: 80000},() => {
        cy.visit('https://mostly.ai/')
    });
});

describe("Verify bookmarks", () => {

    //Clear Cookies
    before(() => {
      cy.visit('https://mostly.ai/');
      cy.clearCookies();
    // cy.clearCookie('#CookieBoxSaveButton')
    // cy.getCookie('#CookieBoxSaveButton').should('be.null')
     
     });
    //Verify bookmarks Platform, that users can view Use Cases, Synthetic Data, Resources,Company
    it('Verify bookmarks', ()=>{
        cy.contains(bookmarks.bookmark, 'Platform').should('be.visible')
        cy.contains(bookmarks.bookmark, 'Use Cases').should('be.visible')
        cy.contains(bookmarks.bookmark, 'Synthetic Data').should('be.visible')
        cy.contains(bookmarks.bookmark, 'Resources').should('be.visible')
        cy.contains(bookmarks.bookmark, 'Company').should('be.visible')
        cy.contains(bookmarks.contact, 'Contact us').should('be.visible')
       
    });

 });

 //STEP 2
 describe("Search for a wrongly-spellled word", () =>{
    before(() => {
        cy.visit('https://mostly.ai/');
        cy.clearCookies()
          
      });
    
     it('Verify search', () => {
        cy.get(search.synthetic)
          .should('be.visible')
          .type('Snythetic')

        //Accept cookie
        cy.get('#CookieBoxSaveButton').click()
       
        cy.get(search.enter)
        .type('Snythetic{enter}')
        
        cy.get(search.result)
        .should('contain', 'Sorry, no results for:')
  
      
    });
    // afterEach(() => {
    //     cy.clearCookie('#CookieBoxSaveButton')
    //     cy.getCookie('#CookieBoxSaveButton').should('be.null')
    // });

});
//STEP 3
describe('Contact Form', ()=>{
    // before(() => {
    //     cy.visit('https://mostly.ai/');
    //     cy.clearCookies()
    //     //Cypress.Cookies.preserveOnce('<accept>') 
    //   });
        it('Fill contact form', ()=>{

          //select contact
          cy.get(contacts.select).click()
          cy.get(contacts.form).should('contain', 'Ask us anything!')

          //clear all cookies on form page load
          cy.clearCookies()
          cy.get('#CookieBoxSaveButton').click()
          
          cy.get(contacts.firstname).click();
          cy.get(contacts.firstname).type('Temitope');

          cy.get(contacts.lastname).click();
          cy.get(contacts.lastname).type('Oyedemi');

          cy.get(contacts.email).click();
          cy.get(contacts.email).type('temitope.o@softcom.xyz');

          cy.get(contacts.mobile).click();
          cy.get(contacts.mobile).type('07067983342');

          cy.get(contacts.company).type('Softcom Limited');
          cy.get(contacts.company).click();

          cy.get(contacts.message).click();
          cy.get(contacts.message).type('This is a Simple Automated Test for Almost.AI. I trust to hear from you.');

          cy.get(contacts.check).check();
        
          cy.get(contacts.hover).trigger('mouseover')
          cy.get(contacts.button).should('be.visible')

        });

});