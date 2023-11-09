# TC code challenge

## :gear: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React][reactjs]
- [Styled components][styled-components]
- [React hook form][react-hook-form]
- [Vite][vite]
- [Vitest][vitest]
- [React testing library][react-testing-library]

## :triangular_ruler: Arquitetura

A Arquitetura foi pensada para ser [feature based][feature-based] mantendo todo o contexto de uma determinada feature próximos, garantindo um melhor encapsulamento do módulos e um melhor *code discoverability*.
Todos os módulos foram separados pensando em manter o princípio de responsabilidade única, trazendo uma facilidade para executar testes e a compreenssão de sua função.

Todas as variáveis de estilos foi desenvolvida para servir de base para um primeiro estágio de um *design system*(biblioteca de componentes) utilizando a tecnica de [Design Tokens[design-tokens] para que as variáveis de estilos se torne semânticas e possam ser compartilhadas entre os times de design e desenvolvimento.

## Módulos
Alguns módulos com destaque.
### Core
O módulo ***Core*** é onde a camada da aplicação que faz contato com serviços externos (APIs). Dentro desse módulo temos três partes.
- services: Camada em que os detalhes de implementação das chamadas parada os serviços externos são feitas.
- parser: Camada onde são feitos os *parsings* dos dados recebidos do serviço externo. Caso haja a necessidade de fazer alguma conversão de valores, *sort* de listas ou mesmo uma mudança na convenção de nomenclatura utilizada(Exemplo, a API usa *snake_case* para identificar suas variáveis, mas toda a base de dados do front é feita utilizando *camelCase*, é nessa camada que o *parse* é feito.
- model: Camada semelhante a camada de parser, no entanto a formação é feita quando é feito o envio de dado para o serviço externo.

### Domains
Neste módulo é onde ficam as features e todas as funções, estilos e componentes não compartilhados com outras features. Caso exista alguma parte compartilhada com uma outra feature, o contexto dessa parte é alterado para que seja visível por outras features. 

### Common-functions
São funções de utilidade que podem ser utilizadas por todos os módulos. Aqui é onde ficam funções para transformação e validação de dados.

## :computer: Como rodar o projeto

Para clonar e rodar esta aplicação, você irá precisar do [Git][git], [Json-server][json-server], [Node.js][nodejs] + [Npm][npm] instalados no seu computador. 
As versões utilizadas foram:
- node: 20.5.0
- npm : 9.8.0

Você pode usar o [Nvm][nvm] para gerenciar as versões do Node e Npm.

Do seu terminal:

### Installation

```bash
# Clonar este repositório
git clone https://github.com/sealove20/transfeera-challenge.git

# Navegue até o repositório
cd transfeera-challenge

# Instale as dependências
npm install

# Inicie o servidor Json-server
json-server --watch ./src/data/db.json

# Inicie o servidor de desenvolvimento
npm run dev
```

### Test

Você pode rodar os testes com o seguinte comando:

```bash
npm run test
```

=) :heart:


[reactjs]: https://reactjs.org
[nodejs]: https://nodejs.org/
[styled-components]: https://styled-components.com
[react-hook-form]: https://react-hook-form.com/
[vite]: https://vitejs.dev/
[vitest]: https://vitest.dev/
[react-testing-library]: https://testing-library.com
[feature-based]: https://khalilstemmler.com/articles/software-design-architecture/feature-driven/
[git]: https://git-scm.com
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/nvm-sh/nvm
[json-server]: https://github.com/typicode/json-server
[design-tokens]: https://spectrum.adobe.com/page/design-tokens/
