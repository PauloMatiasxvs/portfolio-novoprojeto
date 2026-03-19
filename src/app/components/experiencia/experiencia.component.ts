import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Experiencia {
  empresa: string;
  empresaUrl?: string;
  cargo: string;
  periodo: string;
  local: string;
  descricao: string;
  tags: { label: string; type: 'r' | 'c' | '' }[];
}

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      empresa: 'MXM Sistemas',
      empresaUrl: 'https://www.mxm.com.br/',
      cargo: 'Programador .NET e Delphi JR III',
      periodo: 'Jul 2025 — Atual',
      local: '100% Remota · Fortaleza, CE',
      descricao: 'Suporte contínuo ao ERP nos módulos de Faturamento, Vendas, Estoque, Hospitalar e Contrato de Vendas. Diagnóstico de bugs, desenvolvimento de correções, testes de validação e atendimento presencial em casos críticos. Expertise em impostos, integração com a Receita Federal, modelos de nota fiscal e elaboração de contratos.',
      tags: [
        { label: 'C#/.NET', type: 'r' }, { label: 'Delphi 7', type: 'r' },
        { label: 'Oracle PL/SQL', type: 'r' }, { label: 'NHibernate', type: 'r' },
        { label: 'TypeScript', type: '' }, { label: 'Angular', type: '' },
        { label: 'ERP', type: '' }, { label: 'Receita Federal', type: '' }
      ]
    },
    {
      empresa: 'FLOW CONSULTING',
      cargo: 'Software Engineer — Full Stack Júnior',
      periodo: 'Fev 2025 — Out 2025',
      local: 'Híbrida · Fortaleza, CE',
      descricao: 'Desenvolvimento web com suporte ao Projeto TARGET — controle de produção, gestão de estoque e pedidos baseado em metodologia TOC. Integração com ERPs (Linx, GC Web, Alpha Ind), dashboards de gestão à vista. Sistema em produção no cliente Kronne.',
      tags: [
        { label: 'JavaScript', type: 'r' }, { label: 'TypeScript', type: 'r' },
        { label: 'Angular', type: 'r' }, { label: 'Python', type: '' },
        { label: 'Power BI', type: '' }, { label: 'SQL Server', type: '' },
        { label: 'Oracle', type: '' }, { label: 'PostgreSQL', type: '' }, { label: 'Firebird', type: '' }
      ]
    },
    {
      empresa: 'Prefeitura de Fortaleza',
      cargo: 'Suporte Técnico PCD (Estágio)',
      periodo: 'Mar 2024 — Mar 2025',
      local: 'Presencial · Fortaleza, CE',
      descricao: 'Diagnóstico e resolução de problemas técnicos, manutenção e atualização de sistemas e apoio a usuários internos. Habilidades sólidas em administração de redes e suporte no setor público.',
      tags: [
        { label: 'Suporte técnico', type: '' }, { label: 'Redes', type: '' },
        { label: 'Diagnóstico', type: '' }, { label: 'Atendimento', type: '' }
      ]
    }
  ];
}
