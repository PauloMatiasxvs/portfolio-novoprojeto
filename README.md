# Portfólio — Paulo Levi Matias

Site pessoal em HTML, CSS e JavaScript puro, sem build. Tudo o que é publicado está em `site/`.

```
site/
├── index.html                      conteúdo e meta tags (SEO / Open Graph)
├── style.css                       estilos e responsivo
├── script.js                       menu mobile, link ativo e animação de entrada
├── favicon.svg, og.png             ícone e imagem de compartilhamento
├── img/                            capas dos projetos
└── Curriculo_PauloLeviMatias.pdf
```

Para ver localmente, sirva a pasta com qualquer servidor estático:

```bash
python -m http.server 8080 -d site
```

A Vercel publica `site/` direto (configurado em `vercel.json`).
