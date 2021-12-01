describe('searched movie selection use-case', () => {
    it('should visit home page and redirects to empty search', () => {
        cy.visit('/')
        cy.url().should('match', /search/)
    })
    it('should type search query into search input and show search results matching query', () => {
        const searchValue = 'Marvel'
        cy.focused()
            .should('have.class', 'searchInput')
        
        cy.get('.searchInput')
            .type(searchValue)
            .should('have.value', searchValue)
            .type('{enter}')

        cy.get('.cardContentTitle')
            .each(title => {
                cy
                    .wrap(title)
                    .should('contain.text', searchValue)
            })
    });
})