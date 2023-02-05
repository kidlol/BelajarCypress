const { method } = require("bluebird");

describe('Featured Topics Test', ()=> {
    it('Click Image in Featured Topics Section',() =>{
        cy.visit('https://www.edgeprop.sg/');
        cy.wait(1000);
        cy.get(':nth-child(2) > a > .featured-topic-overlay-text > .featured-topic-header > .featured-topic-header-text').click();
        cy.wait(1000);
        cy.go('back');
        cy.scrollTo('top')
        cy.get(':nth-child(3) > a > .featured-topic-overlay-text > .featured-topic-header > .featured-topic-header-text').click();
        cy.wait(1000);
        cy.go('back');
        cy.scrollTo('top');
        cy.get(':nth-child(4) > a > .featured-topic-overlay-text > .featured-topic-header > .featured-topic-header-text').click();
        cy.wait(1000);
    })
})
describe('Featured Property News Test', ()=> {
    it('Click Image and Icon Slider Image',() =>{
        cy.visit('https://www.edgeprop.sg/');
        cy.scrollTo(0, 150)
        cy.get('[style="height: inherit; position: relative; min-height: inherit; text-align: left; overflow-x: hidden;"] > .prev > .slider > .jsx-679329255').click();
        cy.wait(1000);
        cy.get('[style="height: inherit; position: relative; min-height: inherit; text-align: left; overflow-x: hidden;"] > .prev > .slider > .jsx-679329255').click();
        cy.wait(1000);
        cy.get('[style="height: inherit; position: relative; min-height: inherit; text-align: left; overflow-x: hidden;"] > .next > .slider > .jsx-679329255').click();
        cy.wait(1000);
    })
})
describe('Featured Property News Test', ()=> {
    it('Click Image and Icon Slider Image',() =>{
        cy.visit('https://www.edgeprop.sg/');
        cy.scrollTo(0, 300);
        cy.get(':nth-child(4) > .content-featured-topc > .container-grid > .row > :nth-child(1) > .col-lg-half > .jsx-402256449 > .image-content > [style="height: inherit; position: relative; min-height: inherit; text-align: center; overflow-x: hidden;"] > .show > [style="width: 100%; height: 100%; overflow: hidden;"] > .imgClick > #image-slider').click();
    })
})