import { Injectable } from '@angular/core';

export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  tagTypes: ('r' | 'c' | '')[];
  links: { label: string; url: string; live?: boolean }[];
  featured?: boolean;
  categories: string[];
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  getAll(): Project[] {
    return [
      {
        num: '01 — Destaque',
        title: 'Dashboard Financeiro — Ibovespa & Ações',
        desc: 'App web para análise em tempo real do mercado financeiro brasileiro. Ibovespa, PETR4, VALE3, ITUB4, BBDC4 e ABEV3. Design glassmorphism com gráficos interativos.',
        tags: ['React 18', 'Vite', 'JavaScript', 'Python', 'API Financeira'],
        tagTypes: ['r', 'r', '', '', ''],
        links: [
          { label: 'Demo ao vivo ↗', url: 'https://hwtyhxlb.manus.space/', live: true },
          { label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/dashboard-financeiro-finalizado' }
        ],
        featured: true,
        categories: ['react', 'data']
      },
      {
        num: '02',
        title: 'Sistema de Gestão Empresarial',
        desc: 'ERP completo com clientes, produtos, vendas e estoque. Backend C#/.NET 8 com Entity Framework + Frontend React + Tailwind com gráficos.',
        tags: ['C#/.NET 8', 'React 18', 'SQLite', 'EF Core'],
        tagTypes: ['r', 'r', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/SistemaGestao' }],
        categories: ['csharp', 'react']
      },
      {
        num: '03',
        title: 'Clone Airbnb Brasil',
        desc: 'Réplica funcional do Airbnb em português. Cards, modal detalhado, reservas e filtros. Animações com Framer Motion.',
        tags: ['React 19', 'Tailwind', 'Framer Motion'],
        tagTypes: ['r', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/projeto-airbnb' }],
        categories: ['react']
      },
      {
        num: '04',
        title: 'Book Manager',
        desc: 'API REST de gerenciamento de livros com CRUD completo, usuários e controle de empréstimos. Arquitetura limpa e escalável.',
        tags: ['Node.js', 'REST API', 'CRUD'],
        tagTypes: ['', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/book_manager' }],
        categories: ['api']
      },
      {
        num: '05',
        title: 'Calculadora com API Externa',
        desc: 'Calculadora que consome APIs externas para operações avançadas. Demonstração de integração frontend + endpoints RESTful.',
        tags: ['JavaScript', 'REST API', 'HTML/CSS'],
        tagTypes: ['', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/calculadora-apiext-projeto' }],
        categories: ['api']
      },
      {
        num: '06',
        title: 'Conversor de Moedas',
        desc: 'Conversor em tempo real com API de câmbio. Múltiplas moedas e atualização automática de cotações.',
        tags: ['JavaScript', 'API câmbio', 'HTML/CSS'],
        tagTypes: ['', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/conversor-de-moedas-simples' }],
        categories: ['api', 'data']
      },
      {
        num: '07',
        title: 'Naruto API',
        desc: 'App que consome a API do universo Naruto exibindo personagens, jutsus e aldeias com interface temática.',
        tags: ['React', 'REST API', 'CSS'],
        tagTypes: ['r', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/naruto_api' }],
        categories: ['react', 'api']
      },
      {
        num: '08',
        title: 'Site de Fotografia',
        desc: 'Site profissional de fotografia com galeria responsiva, lightbox e layout visual impactante.',
        tags: ['HTML/CSS', 'JavaScript', 'Galeria'],
        tagTypes: ['', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/sitefotografia' }],
        categories: ['react']
      },
      {
        num: '09',
        title: 'PONG 3D',
        desc: 'Versão 3D do clássico Pong no browser com Canvas e física básica. Sem bibliotecas externas.',
        tags: ['JavaScript', 'Canvas 3D', 'Física'],
        tagTypes: ['', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/PONG3D' }],
        categories: ['experimental']
      },
      {
        num: '10',
        title: 'Simulações & Partículas',
        desc: 'Série: simulador de 25 partículas, 100 bolhas, simulação em vácuo e neurônio MDP. Física e IA no browser.',
        tags: ['JavaScript', 'Canvas', 'Python', 'IA'],
        tagTypes: ['', '', '', ''],
        links: [
          { label: 'Partículas ↗', url: 'https://github.com/PauloMatiasxvs/simulador-de-25-particulas-mundo-real' },
          { label: 'Bolhas ↗', url: 'https://github.com/PauloMatiasxvs/100bolhas' },
          { label: 'MDP ↗', url: 'https://github.com/PauloMatiasxvs/simular_mdp_com_neuronio' },
          { label: 'Vácuo ↗', url: 'https://github.com/PauloMatiasxvs/projeto_em_vacuo' }
        ],
        categories: ['experimental', 'data']
      },
      {
        num: '11',
        title: 'Rota Perfeita',
        desc: 'Otimização de rotas com algoritmos de caminho mínimo aplicados a cenários reais. Visualização de grafos.',
        tags: ['Algoritmos', 'Grafos', 'JavaScript'],
        tagTypes: ['', '', ''],
        links: [{ label: 'GitHub ↗', url: 'https://github.com/PauloMatiasxvs/RotaPerfeita-01648074-PauloLevi' }],
        categories: ['api']
      },
      {
        num: '12',
        title: 'Portfólio Anterior',
        desc: 'Versão anterior do meu portfólio disponível ao vivo. Referência da evolução do meu trabalho.',
        tags: ['HTML/CSS', 'JavaScript', 'Deploy'],
        tagTypes: ['', '', ''],
        links: [{ label: 'Ver ao vivo ↗', url: 'https://yhmxuwwe.manus.space/', live: true }],
        categories: ['react']
      }
    ];
  }
}
