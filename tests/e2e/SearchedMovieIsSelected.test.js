describe('searched movie selection use-case', () => {
    const searchValue = 'Marvel'
    it('should visit home page and redirects to empty search', () => {
        cy.visit('/')
        cy.url().should('match', /search/)
    })
    it('should type search query into search input and show search results matching query', () => {
        
        cy.focused()
            .should('have.class', 'searchInput')
        
        cy.get('.searchInput')
            .type(searchValue)
            .should('have.value', searchValue)
            .type('{enter}')

        cy.get('.cardContentTitle')
            .each(title => {
                cy.wrap(title)
                    .should('contain.text', searchValue)
            })
    });

    it('should select movie item successfully', () => {
        let clickedMovieTitle;

        cy.get('.cardContentTitle')
            .first()
            .should((titleDiv) => { clickedMovieTitle = titleDiv.text() })
            .click()
        
        cy.get('.movieDetailsHeading')
            .should((heading) => {
                expect(clickedMovieTitle).to.be.equal(heading.text())
            })

        cy.get('.movieDetails')
            .should('be.visible')
    });
})