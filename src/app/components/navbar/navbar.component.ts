import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrollProgress = 0;
  activeSection = '';
  isScrolled = false;
  private subs: Subscription[] = [];

  navItems = [
    { label: 'Sobre', section: 'sobre' },
    { label: 'Exp', section: 'exp' },
    { label: 'Projetos', section: 'projetos' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contato', section: 'contato' }
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.subs.push(
      this.scrollService.scrollProgress$.subscribe(v => this.scrollProgress = v),
      this.scrollService.activeSection$.subscribe(v => this.activeSection = v),
      this.scrollService.isScrolled$.subscribe(v => this.isScrolled = v)
    );
  }

  navigateTo(section: string): void {
    this.scrollService.scrollToSection(section);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
