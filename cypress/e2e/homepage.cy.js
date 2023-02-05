const { method } = require("bluebird");

describe('Featured Topics Test', ()=> {
    it('Homepage',() =>{
        cy.visit('https://www.edgeprop.sg/');
        cy.wait(1000);
        cy.get('.content-carousel > :nth-child(1) > .content-featured-topic > .title > div.jsx-609329512').scrollIntoView({ easing: 'linear' });
        cy.get('[style="animation: 14.5s linear 4.9s infinite normal none running slideIn-CustomImageSlide--5-2-03; width: 100%; height: 100%; position: absolute; display: inline-block; box-sizing: border-box; vertical-align: middle;"] > [style="width: 100%; height: 100%; overflow: hidden;"] > .imgClick > #image-slider').click();
        cy.wait(1000);
        cy.go('back');
    })
})