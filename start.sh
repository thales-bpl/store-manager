echo $' === === project log === ===
  === START ===
  1. Iniciar aplicação com npm start | npm run debug
  2. Para acessar mysql: ./terminal.sh > mysql -u root -p > root

  === TO DO LIST ===
  1. Fix validador de quantidade no salesService.
  2. Talvez tentar resolver tudo por SQL, invertendo a ordem das queries de updateStorage e putSale.
  3. remoção/adição do stock na rota PUT(/sales) precisa ser revisada. Contas se comportam de forma estranha.

  === NOTES ===
  1. Estudar como rodar o comando ``docker exec -it store-manager bash`` pelo docker-compose?
  2. Como subir a schema na mysql no Start do projeto

  === BUG LOG ===

  === SRCs ===
  Repo: https://github.com/tryber/sd-015-a-store-manager
  PR: https://github.com/tryber/sd-015-a-store-manager/pull/133

  === ERROS NO README ===

  === === end of log === ===
'

docker-compose up --force-recreate -d;
