describe('Página de login', () => {
    //const tempoEsperado = Math.random()*1000
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcyODk5ODI5MSwiZXhwIjoxNzI5MjU3NDkxfQ.L7qQpFSRQkxNIukNv_EuAeQ02SrjbzgQJfVkiKDBpTo'
    
    it('Mensagens da Api',()=>{
        cy.request({
            mothod:"GET",
            url:"https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c",
            headers:{ authorization }
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            
//            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})