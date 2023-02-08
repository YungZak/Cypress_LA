describe('Позитивные кейсы', function () {
    
    it('Позитивный кейс авторизации', function () {
        cy.visit('https://www.lamoda.ru/');
        cy.get('._root_1gjtp_2 > [role="button"]').click();
        cy.get('.input__input').wait(500).type('Корректный_логин');
        cy.get(':nth-child(3) > .input-material > .input-material__wrapper > .input-material__group > .input-material__input-group').type('Корректный_пароль');
        cy.get('._footer_3a8g7_36 > .x-button').click();

        })

    it('Позитивный кейс регистрации', function () {
        cy.reload();
        cy.get('._root_1gjtp_2 > [role="button"]').click();
        cy.get('._footer_3z173_44 > ._root_clp6c_2').click();
        cy.contains('Регистрация');
        cy.get('._form_10ewx_2 > :nth-child(1) > .input > .input__group > .input__input').type('Валидный_email');
        cy.get(':nth-child(3) > .input__group > .input__input').type('Валидный_телефон_без +7');
        cy.get(':nth-child(4) > .input__group > .input__input').type('Валидный_пароль');
        cy.get(':nth-child(5) > .input__group > .input__input').type('Повтор_пароля');
        cy.get(':nth-child(6) > .input__group > .input__input').type('Имя');
        cy.get(':nth-child(7) > .input__group > .input__input').type('Фамилия');
        cy.get('#modals > div:nth-child(2) > div > div.d-modal__content.d-modal__content_paddings.d-modal__content_default > div._content_1ekkp_13 > div > div > div:nth-child(1) > form > div._footer_1cc0m_56 > button').click();
        })

})
