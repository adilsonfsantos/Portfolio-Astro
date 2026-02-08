# Porfólio de Adilson Santos

[Veja a versão atual](https://adilsonsantos.pages.dev/)

Esse é meu site, mas eu gostaria de compartilhar o código porque vendo as
criações de outros, eu pude desenvolver ele.

**Atenção:** não reutilize projetos ou imagens incluídas, pois possuem
**direitos autorais** e são protegidas legalmente.

## Desenvolvimento

Para rodar este projeto localmente, você precisa ter o
[NodeJS nas versões suportadas pelo Astro](https://docs.astro.build/en/install-and-setup/#prerequisites)
instalado.

```bash
npm install       # Instala as dependências
npm run dev       # Roda o projeto em modo desenvolvimento
npm run build     # Compila o projeto para produção
```

## Branches

Este projeto utiliza branch-based development, sendo main a branch de produção.

Tipos de branch permitidos:

```bash
feat/*      # adiciona nova funcionalidade
fix/*       # corrige bug
refactor/*  # muda código sem alterar comportamento
chore/*     # tarefas de manutenção que não afetam código de produção
```

Todos devem ser em **letra minúscula** e **usar hífens**:

```text
<tipo>/<descrição>

feat/post-navigation
fix/csp-inline-style-hash
refactor/scss-architecture
chore/lint-staged
```

## Commits

Os commits seguem o guia: [How to Write a Git Commit Message](https://cbea.ms/git-commit/)

Formato:

```text
<Subject>

<Body>
```

Subject: verbo imperativo (“Fix”, “Add”, “Remove”), máximo de 50 caracteres.

Body (opcional): explica o **porquê da mudança, não como foi feita.** Limite de
70 caracteres por linha para facilitar leitura.

```text
Fix inline hashes in Chrome-based browsers

Update hashes creation to include inline styles.

Solving render blocking errors in browser.
```
