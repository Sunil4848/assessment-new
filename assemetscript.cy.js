describe('Create Account and Sign In', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = `test${Math.floor(Math.random() * 10000)}@mail.com`;
    const password = 'Password123';
  
    it('should create a new account and sign in with the same account', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
      cy.get('#firstname').type(firstName);
      cy.get('#lastname').type(lastName);
      cy.get('#email_address').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(password);
      cy.get('button[title="Create an Account"]').click();
      cy.url().should('include', '/customer/account');
      cy.contains('Thank you for registering with Main Website Store.');
      cy.get(' .action.switch').first().click();
      cy.contains('Sign Out').click();
  
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('button[type="submit"]').eq(1).click()
      .should('be.visible')
  
    });
  });