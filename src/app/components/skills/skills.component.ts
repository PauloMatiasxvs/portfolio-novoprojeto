import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillGroup {
  title: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('barEl') barEls!: QueryList<ElementRef>;

  skillGroups: SkillGroup[] = [
    {
      title: 'Linguagens & Paradigmas',
      skills: [
        { name: 'C# / .NET',              level: 90 },
        { name: 'TypeScript',             level: 88 },
        { name: 'Pascal / Delphi 7',      level: 82 },
        { name: 'JavaScript',             level: 86 },
        { name: 'Python',                 level: 78 },
        { name: 'PHP',                    level: 65 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular',                level: 85 },
        { name: 'React / Next.js',        level: 82 },
        { name: 'HTML5 / CSS3',           level: 92 },
        { name: 'Tailwind / Bootstrap',   level: 82 },
        { name: 'Framer Motion',          level: 70 }
      ]
    },
    {
      title: 'Banco de dados',
      skills: [
        { name: 'Oracle PL/SQL',          level: 85 },
        { name: 'SQL Server',             level: 85 },
        { name: 'PostgreSQL',             level: 80 },
        { name: 'MySQL / Firebird',       level: 75 },
        { name: 'SQLite / MongoDB',       level: 68 }
      ]
    },
    {
      title: 'Dados, DevOps & Outros',
      skills: [
        { name: 'Power BI',               level: 82 },
        { name: 'Pandas / Data Analysis', level: 76 },
        { name: 'Git / CI-CD',            level: 86 },
        { name: 'Docker / Kubernetes',    level: 65 },
        { name: 'AWS / Cloud',            level: 60 }
      ]
    }
  ];

  // Controla a largura animada de cada barra (inicialmente 0)
  barWidths: number[][] = [];

  ngAfterViewInit(): void {
    // Inicializa todas as barras em 0
    this.barWidths = this.skillGroups.map(g => g.skills.map(() => 0));

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          this.skillGroups.forEach((g, gi) => {
            g.skills.forEach((s, si) => {
              setTimeout(() => {
                this.barWidths[gi][si] = s.level;
              }, si * 80);
            });
          });
          io.disconnect();
        }
      });
    }, { threshold: .2 });

    if (this.barEls.first) io.observe(this.barEls.first.nativeElement);
  }

  certs = [
    { issuer: 'Data Science Academy', name: 'Microsoft Power BI Para Business Intelligence e Data Science', date: 'Jun 2025 · Cred: 6462fe1b2bb04988150abc99' },
    { issuer: 'freeCodeCamp', name: 'Data Analysis with Python', date: 'Análise de dados e programação em Python' },
    { issuer: 'freeCodeCamp · Microsoft', name: 'Foundational C# with Microsoft', date: 'POO e desenvolvimento de software' },
    { issuer: 'freeCodeCamp', name: 'Legacy JavaScript Algorithms and Data Structures', date: 'Estruturas de dados e algoritmos em JS' },
    { issuer: 'Udemy', name: 'PHP do Zero à Maestria', date: 'Web, APIs, HTML5, CSS e bancos de dados' },
    { issuer: 'Prefeitura de Fortaleza', name: 'Fundamentos da Tecnologia da Informação', date: 'Jan 2025 · TI, redes e administração' }
  ];
}
