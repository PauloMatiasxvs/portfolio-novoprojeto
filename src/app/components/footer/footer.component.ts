import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="footer-wrap">
      <footer>
        <div class="ft">© 2026 <a href="#">Paulo Levi Matias</a> — Dev Full Stack</div>
        <div class="ft">{{ currentTime }} — Fortaleza, CE</div>
      </footer>
    </div>
  `,
  styles: [`
    .footer-wrap { border-top: 1px solid var(--border); }
    footer { display: flex; justify-content: space-between; align-items: center; padding: 2rem 3rem; max-width: 1200px; margin: 0 auto; }
    .ft { font-family: 'Space Mono', monospace; font-size: .58rem; color: var(--muted); letter-spacing: 2px; text-transform: uppercase; }
    .ft a { color: var(--accent); text-decoration: none; }
    @media (max-width: 920px) { footer { flex-direction: column; gap: .5rem; text-align: center; } }
  `]
})
export class FooterComponent implements OnInit, OnDestroy {
  currentTime = '';
  private interval!: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.tick();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    this.currentTime = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
