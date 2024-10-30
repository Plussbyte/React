describe('Analizando el componente <Demostracion/>', () => {  

    test('La prueba no debe fallar',()=>{
        
        //1. inicializacion
            const messageOne = 'Hola mundo'

        //2. estimulo
            const messageTwo = messageOne.trim()

        //3. obervar el comportamiento... (lo que se espera)
            expect( messageOne ).toBe( messageTwo ) 
    })

})