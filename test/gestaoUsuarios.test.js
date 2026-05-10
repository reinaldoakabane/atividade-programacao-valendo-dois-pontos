import { fazerLogin } from '../src/gestaoUsuarios.js';
import assert from 'node:assert';

describe('Testes da Gestão de Usuario', function () {
    it('Validar que um usuario foi logado corretamente', function () {
        //Assert
        const emaillLogadoCorreto = 'reinaldo@email.com';
        const senhaLogadoCorreto = '12345678';

        // Act
        const retornoDaFuncao = fazerLogin(emaillLogadoCorreto, senhaLogadoCorreto);

        // Assert
        assert.equal(retornoDaFuncao, 'Login realizado com sucesso');
    });

    it('Validar que um usuario precisa renovar suas credenciais', function () {
        //Assert
        const emailExpirado = 'luiz@email.com';
        const senhaExpirada = '100luiz';

        // Act
        const retornoDaFuncao = fazerLogin(emailExpirado, senhaExpirada);

        // Assert
        assert.equal(retornoDaFuncao, 'Renove suas credenciais');
    });

    it('Validar usuario não encontrado', function () {
        //Assert
        const emailInvalido = '123@email.com';
        const senhaInvalida = '111';

        // Act
        const retornoDaFuncao = fazerLogin(emailInvalido, senhaInvalida);

        // Assert
        assert.equal(retornoDaFuncao, 'As credenciais estão incorretas');
    });

    it('Validar senha incorreta para o usuário encontrado', function () {
        //Assert
        const emailValido = 'lucia@email.com';
        const senhaInvalida = '111';

        // Act
        const retornoDaFuncao = fazerLogin(emailValido, senhaInvalida);

        // Assert
        assert.equal(retornoDaFuncao, 'As credenciais estão incorretas');
    });

});