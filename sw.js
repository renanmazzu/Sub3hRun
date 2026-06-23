# SUB3h RUN

PWA dark para registrar, acompanhar e analisar treinos de corrida rumo ao objetivo 2h59m59s.

## Como publicar no GitHub Pages

1. Crie um repositorio no GitHub, por exemplo `sub3h-run`.
2. Envie todos os arquivos desta pasta para o repositorio.
3. No GitHub, abra `Settings` > `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/root`.
6. Abra a URL publicada no celular e use a opcao do navegador para instalar o app.

## Como ativar a sincronizacao

1. Crie um repositorio privado para os dados, por exemplo `sub3h-run-data`.
2. Crie um fine-grained token no GitHub com acesso de leitura e escrita ao repositorio de dados.
3. No app, abra a aba `GitHub`.
4. Preencha usuario, repositorio, branch, caminho do arquivo e token.
5. Toque em `Salvar GitHub`.

O app salva tudo localmente assim que voce toca em `Salvar treino`. Quando a configuracao do GitHub esta preenchida e ha internet, ele sincroniza automaticamente com o arquivo JSON configurado.
