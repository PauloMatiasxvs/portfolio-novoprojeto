import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollService } from './services/scroll.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ParticlesComponent,
    SobreComponent,
    ExperienciaComponent,
    ProjetosComponent,
    SkillsComponent,
    ContatoComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loaderVisible = true;
  loaderProgress = 0;
  loaderPct = '0%';

  cursorX = 0; cursorY = 0;
  ringX  = 0;  ringY  = 0;
  showBackTop = false;

  private animId = 0;
  private subs: Subscription[] = [];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.startLoader();
    this.animateCursorRing();
    this.initReveal();

    this.subs.push(
      this.scrollService.showBackTop$.subscribe(v => this.showBackTop = v)
    );
  }

  /* ── LOADER ── */
  private startLoader(): void {
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 18;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setTimeout(() => this.loaderVisible = false, 400);
      }
      this.loaderProgress = p;
      this.loaderPct = Math.floor(p) + '%';
    }, 80);
  }

  /* ── CURSOR ── */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
  }

  private animateCursorRing(): void {
    const step = () => {
      this.ringX += (this.cursorX - this.ringX) * .12;
      this.ringY += (this.cursorY - this.ringY) * .12;
      this.animId = requestAnimationFrame(step);
    };
    step();
  }

  /* ── SCROLL ── */
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollService.onScroll();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  /* ── REVEAL ON SCROLL ── */
  private initReveal(): void {
    setTimeout(() => {
      const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: .12 });
      els.forEach(el => io.observe(el));
    }, 600);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    this.subs.forEach(s => s.unsubscribe());
  }
}
