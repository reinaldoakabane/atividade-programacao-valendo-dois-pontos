// Pré-requisitos:
// Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades:
// id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.
//
// Desafio:
// Construa uma função de para realizar login.
// Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados.
// A função deve dizer que as credenciais expiraram caso expirado for true.
// A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.
// Exemplo:
// fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
// fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

// Testes:
// Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.
//
const usuarios = [
    {
        id: 1,
        nome: 'Reinaldo Filho',
        email: 'reinaldo@email.com',
        senha: '12345678',
        expirado: false
    },
    {
        id: 2,
        nome: 'Luiz Roberto',
        email: 'luiz@email.com',
        senha: '100luiz',
        expirado: true
    },
    {
        id: 3,
        nome: 'João Carlos',
        email: 'joao@email.com',
        senha: '87653421',
        expirado: false
    },
    {
        id: 4,
        nome: 'Ana Maria',
        email: 'anamaria@email.com',
        senha: 'maria123',
        expirado: false
    },
    {
        id: 5,
        nome: 'Lucia Conceição',
        email: 'lucia@email.com',
        senha: 'lc12345',
        expirado: false
    }
];

export function fazerLogin(email, senha) {

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].email == email) {
            if (usuarios[i].senha != senha)
                return 'As credenciais estão incorretas'
            if (usuarios[i].senha == senha && usuarios[i].expirado == false)
                return 'Login realizado com sucesso'
            if (usuarios[i].expirado == true)
                return 'Renove suas credenciais'
        }
    }
    return 'As credenciais estão incorretas'
}