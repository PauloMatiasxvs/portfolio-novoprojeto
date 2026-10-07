# Portfólio — Paulo Levi Matias

Site pessoal em HTML, CSS e JavaScript puro, sem build. Tudo o que é publicado está em `site/`.

```
site/
├── index.html                      conteúdo e meta tags (SEO / Open Graph)
├── style.css                       estilos e responsivo
├── script.js                       menu mobile, link ativo e animação de entrada
├── favicon.svg, og.png             ícone e imagem de compartilhamento
├── img/                            capas dos projetos
├── Curriculo_PauloLeviMatias.pdf   currículo em português
└── Resume_PauloLeviMatias_EN.pdf   currículo em inglês
```

Os PDFs do currículo são gerados a partir de `curriculo/curriculo-pt.html` e `curriculo/resume-en.html` (fora de `site/`, não são publicados). Depois de editar um deles, gere o PDF com o Edge:

```powershell
& "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" --headless=new --no-pdf-header-footer --print-to-pdf="$PWD\site\Resume_PauloLeviMatias_EN.pdf" "$PWD\curriculo\resume-en.html"
```

Para ver localmente, sirva a pasta com qualquer servidor estático:

```bash
python -m http.server 8080 -d site
```

Publicado no Cloudflare Pages em https://paulolevi.pages.dev (sem comando de build, pasta de saída `site`).
