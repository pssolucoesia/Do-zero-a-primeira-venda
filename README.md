# Do Zero à Primeira Venda — Landing Page

Site estático (HTML/CSS/JS puro), pronto para publicar gratuitamente.

## Preview

<p align="center">
  <img src="assets/ebook-principal.jpg" alt="eBook Do Zero à Primeira Venda" width="320">
  &nbsp;&nbsp;
  <img src="assets/kit-bonus.jpg" alt="Bônus Kit Low Ticket Express" width="320">
</p>

## Estrutura
```
index.html        → página única com todas as seções
css/style.css      → estilos (tema escuro, dourado/roxo/azul, igual ao original)
js/script.js       → acordeão do FAQ + disparo de evento de clique do Pixel
assets/            → imagens dos ebooks e da seção "isso soa familiar"
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

1. Baixe e **descompacte** o arquivo `do-zero-a-primeira-venda.zip` — você vai ver esta pasta com `index.html`, `css/`, `js/`, `assets/` e este `README.md` dentro.
2. No GitHub, clique em **New repository** (github.com/new), dê um nome (ex.: `do-zero-a-primeira-venda`) e clique em **Create repository**.
3. Na página do repositório recém-criado, clique em **uploading an existing file** (ou **Add file → Upload files**).
4. **Arraste a pasta inteira descompactada** (ou todos os arquivos e subpastas `assets/`, `css/`, `js/`, `index.html`, `README.md`) para a área de upload. O GitHub preserva as subpastas automaticamente.
5. Clique em **Commit changes**.

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
