# Projeto de Aplicativo de Vagas

## Descrição
Este projeto é um aplicativo de vagas que permite aos usuários visualizar vagas disponíveis, se cadastrar, editar suas informações, e entrar em contato com o responsável pela vaga através do WhatsApp. O projeto conecta-se a uma API de vagas desenvolvida com Express, utiliza o Axios para fazer requisições HTTP, e armazena dados de usuário localmente usando AsyncStorage.

## Configuração da API
Se a API não retornar valores, verifique e configure a variável BASE_URL nos seguintes arquivos:

- **1** - index.tsx na pasta screen/List
- **2** - index.tsx na pasta screen/Detail
- **3** - api.ts na pasta services

Devido a difereça de dispositivos a URL pode não funcionar no padrão 'Localhost'
Substitua pelo ip do dispositivo e deve funcionar da maneira correta a Api
const BASE_URL = 'http://SEUIP:3000';
const BASE_URL = 'http://1.121.786.121:3000'; // Substitua pela URL correta da sua API

## Iniciar a API
Para iniciar a API, você deve executar o arquivo server.js localizado na pasta api usando Node.js.Certifique-se de estar na pasta correta antes de executar o comando node server.js. Isso fará com que o servidor comece a rodar, ouvindo as requisições na porta especificada no seu código.

## Utilização de Ferramentas HTTP
Para cadastrar uma vaga, você pode usar ferramentas HTTP como o Postman. Configure os endpoints de acordo com a documentação da sua API e envie as requisições para cadastrar novas vagas.

## Tecnologias Utilizadas
- **React Native** - Framework para desenvolvimento do aplicativo.
- **Axios** - Biblioteca para fazer requisições HTTP.
- **Express** - Framework para criar a API de vagas.
- **AsyncStorage** - Biblioteca para armazenamento local de dados do usuário.

## Funcionalidades
-Visualizar Vagas: Conecta-se à API de vagas e exibe as vagas disponíveis.

-Login: Permite acesso ao aplicativo apenas após o login.

-Contexto de Usuário: Mantém o contexto do usuário autenticado.

-Armazenamento Local: Armazena os dados do usuário localmente.

-Botão de Contato: Exibe botão de contato apenas quando a vaga estiver aberta, redirecionando para o WhatsApp.

-Edição de Usuário: Permite que o usuário edite suas informações.

-Logout: Implementa a funcionalidade de logout.


## Configuração do Projeto
### Pré-requisitos
- Node.js instalado
- Expo CLI instalado

### Instalação
1. Clone o repositório:
   ```sh
   git clone <URL-do-repositório>
   cd <nome-do-repositório>
   npm install
   npm start
