 //API:

const url = "https://fakestoreapi.com/products";

 //requisição para API dos dados:

fetch(url)
    .then(response => response.json(    ))
    .then(produtos => {
        const tabela = document.getElementById("product-table-body");

        for (let i = 0; i < 10; i++) {
            const produto = produtos[i];
            const row = `
                <tr>
                    <td>${produto.id}</td>
                    <td>${produto.title}</td>
                    <td>R$ ${produto.price.toFixed(2)}</td>
                    <td>${produto.category}</td>
                    <td><img src="${produto.image}" alt="${produto.title}" width="50"></td>
                    <td>${produto.rating.rate} ★ (${produto.rating.count})</td>
                </tr>
            `;
            tabela.innerHTML += row;
        }
    })

//Tratamento de erro:

    .catch(erro => {
        console.log("Erro ao buscar os produtos:", erro);
    }); 