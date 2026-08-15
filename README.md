# Do Zero à Primeira Venda — Landing Page

Site estático em **arquivo único** (HTML com CSS e JavaScript embutidos), pronto para publicar gratuitamente. Não depende de nenhum arquivo externo além das imagens — isso evita o problema comum de CSS/JS não carregar quando as pastas não sobem corretamente no GitHub.

## Preview

<p align="center">
  <img src="assets/ebook-principal.jpg" alt="eBook Do Zero à Primeira Venda" width="320">
  &nbsp;&nbsp;
  <img src="assets/kit-bonus.jpg" alt="Bônus Kit Low Ticket Express" width="320">
</p>

## Estrutura
```
index.html   → página completa (HTML + CSS + JS, tudo em um arquivo só)
assets/      → imagens dos ebooks e da seção "isso soa familiar"
README.md    → este arquivo
```

## O que já está configurado
- **Checkout Hubla**: `https://pay.hub.la/Fo2n5rWFlGpoKHxg2WCA` em **todos os 4 botões** de compra (hero, seção "o que você recebe", oferta e barra fixa mobile).
- **Meta Pixel** (ID `1022474440683022`) instalado no `<head>` do `index.html`, com:
  - Evento `PageView` disparado automaticamente ao carregar a página.
  - Evento `InitiateCheckout` disparado no clique de qualquer botão de compra, antes de ir para o checkout.
- **Responsivo**: testado em breakpoints de desktop, tablet e mobile, com barra de CTA fixa no rodapé em telas pequenas.

## ⚠️ Antes de publicar, revise
1. **Garantia**: a seção "Garantia" está com o texto placeholder original ("[Espaço reservado — insira aqui o prazo e as condições reais...]"). Troque pelo texto real (ex.: "7 dias de garantia incondicional").
2. **FAQ**: só consegui ver as *perguntas* das 5 primeiras dúvidas nos prints (as respostas estavam recolhidas). Escrevi respostas plausíveis com base no restante da copy da página — revise o texto de cada resposta no `index.html` (seção `<!-- ===================== FAQ ===================== -->`) e ajuste se o conteúdo original for diferente.

## Como importar no GitHub (sem usar linha de comando)

**Importante:** apague o repositório antigo (ou todos os arquivos dele) antes de subir esta versão nova, para não misturar com a versão anterior que ficou sem estilo.

1. Baixe e **descompacte** o arquivo `do-zero-a-primeira-venda.zip` — você vai ver esta pasta com `index.html`, `assets/` e este `README.md` dentro. São só 2 itens principais: o arquivo `index.html` e a pasta `assets`.
2. No GitHub, crie um repositório novo (github.com/new) ou abra o existente já vazio.
3. Clique em **Add file → Upload files**.
4. Arraste o arquivo `index.html`, o `README.md` e a **pasta `assets` inteira** (com as 3 imagens dentro) para a área de upload. O GitHub preserva a subpasta `assets/` automaticamente.
5. Confira, antes de commitar, que a lista de arquivos mostra: `index.html`, `README.md`, `assets/ebook-principal.jpg`, `assets/kit-bonus.jpg`, `assets/pessoa-frustrada.jpg`.
6. Clique em **Commit changes**.

## Como ativar o link público (GitHub Pages)

1. No repositório, vá em **Settings → Pages**.
2. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
3. Clique em **Save**.
4. Em alguns minutos o site fica disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Alternativa — Vercel (gratuito, deploy automático)
1. Crie uma conta em vercel.com (pode usar login do GitHub).
2. Depois de importar o repositório no GitHub (passos acima), clique em **Add New → Project** no Vercel e selecione o repositório.
3. Não precisa de build step — é HTML estático puro. Clique em **Deploy**.

## Teste local
Para visualizar antes de publicar, dentro da pasta do projeto:
```
python3 -m http.server 8000
```
Depois abra `http://localhost:8000` no navegador.
