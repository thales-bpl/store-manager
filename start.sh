echo $' === === project log === ===
  === START ===
  1. Iniciar aplicação com npm start | npm run debug
  2. Para acessar mysql: ./terminal.sh > mysql -u root -p > root

  === TO DO LIST ===
  1. PUT(sales/:id) - req8

  === NOTES ===
  1. Estudar como rodar o comando ``docker exec -it store-manager bash`` pelo docker-compose?
  2. Investigar portas:
    code    23751 limoon   50u  IPv4 226623      0t0  TCP 127.0.0.1:41351 (LISTEN)
    code    23751 limoon   69u  IPv6 228647      0t0  TCP *:8828 (LISTEN)
  3. Como subir a schema na mysql no Start do projeto

  === BUG LOG ===
  1. Reqs 4~6 não passam no avaliador do GH:
    FetchError: request to http://localhost:3306/products/1 failed, reason: socket hang up
    FetchError: request to http://localhost:3306/products failed, reason: connect ECONNREFUSED 127.0.0.1:3306

  2. Req 7 funciona na aplicação mas não passa no teste local
    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    FetchError: request to http://localhost:3000/sales/ failed, reason: socket hang up
    FetchError: request to http://localhost:3000/sales/ failed, reason: connect ECONNREFUSED 127.0.0.1:3000

  === SRCs ===
  Repo: https://github.com/tryber/sd-015-a-store-manager

  === ERROS NO README ===

  === === end of log === ===
'

docker-compose up --force-recreate -d;
