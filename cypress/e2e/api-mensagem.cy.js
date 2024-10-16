describe('Página de login', () => {
    //const tempoEsperado = Math.random()*1000


    it('Mensagens da Api',()=>{
        cy.request({
            mothod:"GET",
            url:"https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c",
            headers:Cypress.env()
            //passando o token de autorização no arquivo ignorado pelo git "cypress.env.json" podemos usar um token valido sem vazamento de informação sensivel
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            
//            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})