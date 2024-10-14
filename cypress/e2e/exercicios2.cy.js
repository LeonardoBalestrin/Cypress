describe('Página de login', () => {
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Deve conter os textos na pagina principal', () => {
        cy.title().should('eq','AdoPet');
        cy.contains('Quem ama adota!').should('be.visible');
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
    it('Devo ser redirecionado para o login, e realizar login',()=>{
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
    // it('Não preenche os campos e tenta logar',()=>{
    //     cy.get('[data-test="submit-button"]').click();
    //     cy.contains('É necessário informar um endereço de email').should('be.visible');
    //     cy.contains('Insira sua senha').should('be.visible');
    // })
})