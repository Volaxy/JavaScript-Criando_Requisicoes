Durante os vídeos nós construímos uma lista de objetos dentro do objeto que nomeamos como `videos` no arquivo JSON, sendo ele referente a lista de vídeos do AluraPlay.

Nas atividades foi trazida a situação em que foi criado um objeto chamado `usuario`, nesse mesmo arquivo JSON, referente a uma possibilidade de implementação de sistema de login no AluraPlay.

De acordo com a estrutura do JSON, o json-server montou os endpoints da APIs. Com isso conseguimos acessar os dois objetos que criamos através das URLs `http://localhost:3000/videos` e `http://localhost:3000/usuario`, respectivamente. **Mas o que é um endpoint?** Basicamente, é a URL onde seu serviço pode ser acessado por uma aplicação.

É possível estender URLs com outros parâmetros. Por exemplo: você pode aplicar filtros para conseguir retornar apenas objetos que possuem palavras que você deseja buscar nele, que é o que fizemos no vídeo, com a URL `http://localhost:3000/videos?q=memes`.

Para obter uma lista completa de parâmetros de URL disponíveis, consulte a documentação do [json-server](https://github.com/typicode/json-server).