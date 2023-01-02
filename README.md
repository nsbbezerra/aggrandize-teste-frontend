<p align="center">
    <a href="https://www.nkinfo.com.br/">
        <img src="https://www.nkinfo.com.br/img/logo.svg" height="120">
    </a>
     <h1 align="center">Ecommerce - Teste de Desenvolvimento</h1>
</p>

# Primeiros Passos

## 1 - Variável de Ambiente:

Adicione a variável de ambiente `ENDPOINT_URL` com a URL da API. Ex: `https://minhaapi.com`.

## 2 - Testando a Aplicação:

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Agora abra [http://localhost:3000](http://localhost:3000) em seu navegador para visualizar a aplicação.

## 3 - Build:

- Execute o comando para gerar a versão de producão:

```bash
npm run build
# ou
yarn build
```

- Agora execute o comando a seguir para iniciar o servidor de produção:

```bash
npm run start
# ou
yarn start
```

## Bibliotecas e Frameworks utilizados:

- [Next JS + Typescript](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Star Ratings](https://github.com/ekeric13/react-star-ratings)

## Funcionalidades Adicionadas:

- Ao clicar no botão de _Favorito_ a lista de itens é armazenada no _Local Storage_
- `SSG Next JS` adicionado 30 segundos para revalidação dos dados carregados

## Autor

[<img src="https://avatars.githubusercontent.com/u/44842023?s=400&u=2a8f0844c691b0d32eb0d243edc8eebf226f5b5f&v=4" width=115><br><sub>Natanael Bezerra</sub>](https://github.com/nsbbezerra)
