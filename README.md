# Portfolio Paulo Levi Matias — Angular 17

Portfolio profissional desenvolvido com **Angular 17 Standalone Components**, TypeScript, CSS puro e Canvas API.

---

## Estrutura do projeto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          ← Nav com scroll progress + active link
│   │   ├── hero/            ← Efeito de digitação com TypingService
│   │   ├── particles/       ← Canvas de partículas conectadas
│   │   ├── sobre/           ← Contadores animados com IntersectionObserver
│   │   ├── experiencia/     ← Lista dinâmica via *ngFor
│   │   ├── projetos/        ← Filtro reativo por categoria
│   │   ├── skills/          ← Barras de progresso animadas
│   │   ├── contato/         ← Formulário com ngModel + validação + ripple
│   │   └── footer/          ← Relógio em tempo real com setInterval
│   ├── services/
│   │   ├── scroll.service.ts    ← BehaviorSubject para scroll reativo
│   │   ├── typing.service.ts    ← Efeito de digitação como serviço
│   │   └── projects.service.ts  ← Dados centralizados dos projetos
│   ├── app.component.ts     ← Loader, cursor, reveal on scroll
│   └── app.component.html
├── styles.css               ← Variáveis globais + utilitários
├── index.html
└── main.ts                  ← Bootstrap standalone
```

---

## Conceitos Angular usados

| Conceito | Onde |
|---|---|
| Standalone Components | Todos os componentes (sem NgModule) |
| Services + DI | ScrollService, TypingService, ProjectsService |
| BehaviorSubject / Observable | Scroll progress, seção ativa, typing text |
| `*ngFor` / `*ngIf` | Experiências, projetos, skills, contatos |
| `[class.x]` binding | Filtro de projetos, loader, active link |
| `[style.width.%]` binding | Barra de progresso do nav, skill bars |
| `[(ngModel)]` two-way binding | Formulário de contato |
| `@HostListener` | mousemove, window:scroll |
| `@ViewChild / @ViewChildren` | Canvas de partículas, contadores |
| `AfterViewInit` | Inicialização do canvas e IntersectionObserver |
| `OnDestroy` | Limpeza de setInterval, cancelAnimationFrame |

---

## Como rodar localmente

### Pré-requisitos
- **Node.js 18 ou 20** → [nodejs.org](https://nodejs.org)
- **Angular CLI** → instalar globalmente

### Passo a passo

```bash
# 1. Instalar o Angular CLI globalmente
npm install -g @angular/cli

# Verificar se instalou certo
ng version

# 2. Entrar na pasta do projeto
cd portfolio-paulo-levi-angular

# 3. Instalar as dependências
npm install

# 4. Rodar em modo desenvolvimento
ng serve

# 5. Abrir no browser
# http://localhost:4200
```

### Build para produção

```bash
ng build
# Os arquivos ficam em dist/portfolio-paulo-levi/browser/
```

---

## Deploy no Netlify (grátis)

```bash
# 1. Fazer o build
ng build

# 2. Arrastar a pasta dist/portfolio-paulo-levi/browser/
#    para https://app.netlify.com/drop
```

## Deploy no GitHub Pages

```bash
# 1. Instalar o pacote
npm install -g angular-cli-ghpages

# 2. Build com base-href correto
ng build --base-href "https://PauloMatiasxvs.github.io/portfolio/"

# 3. Deploy
npx angular-cli-ghpages --dir=dist/portfolio-paulo-levi/browser
```

---

## Contato

- Email: paulokfk17@gmail.com
- GitHub: [github.com/PauloMatiasxvs](https://github.com/PauloMatiasxvs)
- LinkedIn: [paulo-levi-matias](https://www.linkedin.com/in/paulo-levi-matias-6524801ab/)
