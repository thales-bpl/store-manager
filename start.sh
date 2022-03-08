echo $' === === project log === ===
  === START ===
  1. Iniciar aplicação com npm start | npm run debug
  2. Para acessar mysql: ./terminal.sh > mysql -u root -t

  === TO DO LIST ===
  1. Fix MW de quantidade para arrays

  === NOTES ===
  1. Estudar como rodar o comando ``docker exec -it store-manager bash`` pelo docker-compose?

  === BUG LOG ===
  Reqs 4~6 não passam no avaliador do GH:
    FetchError: request to http://localhost:3306/products/1 failed, reason: socket hang up
    FetchError: request to http://localhost:3306/products failed, reason: connect ECONNREFUSED 127.0.0.1:3306

  === SRCs ===
  Repo: https://github.com/tryber/sd-015-a-store-manager

  === ERROS NO README ===
  1. Requisito 7:
    README diz que body da Req pro endpoint POST(/sales) vem no formato:
    [ { productId: 1, quantity: 3 } ]

    quando na verdade vem no formato:
    [ { product_id: 1, quantity: 3 } ]

  === === end of log === ===
'

docker-compose up --force-recreate -d;
