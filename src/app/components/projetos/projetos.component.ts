import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from '../../services/projects.service';

interface FilterBtn { label: string; value: string; }

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter = 'all';

  filters: FilterBtn[] = [
    { label: 'Todos',        value: 'all' },
    { label: 'React',        value: 'react' },
    { label: 'C# / .NET',    value: 'csharp' },
    { label: 'APIs',         value: 'api' },
    { label: 'Dados',        value: 'data' },
    { label: 'Experimentos', value: 'experimental' }
  ];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.allProjects = this.projectsService.getAll();
    this.filteredProjects = this.allProjects;
  }

  setFilter(value: string): void {
    this.activeFilter = value;
    this.filteredProjects = value === 'all'
      ? this.allProjects
      : this.allProjects.filter(p => p.categories.includes(value));
  }

  isFaded(project: Project): boolean {
    if (this.activeFilter === 'all') return false;
    return !project.categories.includes(this.activeFilter);
  }
}
