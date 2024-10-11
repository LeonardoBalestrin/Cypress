// Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
describe('Clicar no botão "Ver pets disponíveis para adoção"', () => {
    it('devo ser redirecionado para (/home)', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get(".button").click();
    })
})
// Visite a página de principal do AdoPet e teste os botões header;
describe('Clicar nos icones presentes no Header', () => {
    it('devo ser redirecionado para o "Home"', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        //cy.get('a[class="header__home"]').click();
        cy.get('.header__home').click();
    })
})
// Visite a página de /login do Adopet;
describe('Visitando pagina de login"', () => {
    it('devo ver uma tela de login', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })
})
// Visite a página de /home do Adopet;
describe('visitando o /home da Adopet', () => {
    it('devo ver uma tela principal de adoções', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');

    })
})
// Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
describe('Clicando em "Falar com o responsável"', () => {
    it('devo ser redirecionado', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
    })
})