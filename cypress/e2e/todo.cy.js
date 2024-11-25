describe('Ejercicios página TODO', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })
/* 
 -------------------Agregamos una tarea a la lista ----------------------------------
*/
    it('Agregar una tarea a la lista', () => {
      cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
      cy.wait(1500)
      
    })
/* 
 -------------------Marcar tarea completada -----------------------------------------
*/
    it('Marcar tarea completada', () => {
      cy.get('[data-testid="text-input"]').type("Tarea 2{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.wait(1500)
      })
/* 
 -------------------Desmarcar tarea completada -----------------------------------------
*/
    it('Desmarcar tarea completada', () => {
      cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.wait(1500)
    })   
    
/* 
 ------------------- Editar tarea  -----------------------------------------------------
*/
    it.only('Editar tarea', () => {
      cy.get('[data-testid="text-input"]').type("Prueba{enter}")
      cy.get('[data-testid="todo-item-label"]').dblclick()
      cy.get('input').last().clear().type("conseguido{enter}")
      cy.wait(1500)
  })   
/* 
 ------------------- Borrar tarea  -----------------------------------------------------
*/
    it('Borrar tarea', () => {
      cy.get('[data-testid="text-input"]').type("Para borrar{enter}")
      cy.wait(1500)
      cy.get('[data-testid="todo-item-button"]').click({force: true});//Cuando un botón no está visible en Cypress
      cy.wait(1500)
  })  
/* 
 ------------------- Filtrar tareas  -----------------------------------------------------
*/
it('Filtrar tareas', () => {
    cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 2{enter}")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("Tarea 4{enter}")
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > a').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > a').click()
    cy.wait(1000)

})  

  })