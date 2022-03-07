echo $' === === project log === ===
  === Rodando a aplicação ===
  1. Iniciar aplicação com npm start | npm run debug
  2. Para acessar mysql: ./terminal.sh > mysql -u root -t

  === TO DO LIST ===
  1. Como rodar o comando ``docker exec -it store-manager bash`` pelo docker-compose?

  === NOTES ===

  === BUG LOG ===
  Reqs 4~6 não passam no avaliador do GH:
    FetchError: request to http://localhost:3306/products/1 failed, reason: socket hang up
    FetchError: request to http://localhost:3306/products failed, reason: connect ECONNREFUSED 127.0.0.1:3306

  === SRCs ===
  Repo: https://github.com/tryber/sd-015-a-store-manager

  === === end of log === ===
'

docker-compose up --force-recreate -d;
