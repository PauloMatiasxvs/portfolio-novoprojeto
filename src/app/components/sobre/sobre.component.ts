import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat { target: number; current: number; label: string; suffix: string; }

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements AfterViewInit {
  @ViewChildren('statEl') statEls!: QueryList<ElementRef>;

  stats: Stat[] = [
    { target: 2, current: 0, label: 'Anos no mercado', suffix: '+' },
    { target: 15, current: 0, label: 'Repositórios públicos', suffix: '+' },
    { target: 89, current: 0, label: 'Skills no LinkedIn', suffix: '' },
  ];

  ngAfterViewInit(): void {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          this.animateCounters();
          io.disconnect();
        }
      });
    }, { threshold: .3 });

    if (this.statEls.first) io.observe(this.statEls.first.nativeElement);
  }

  private animateCounters(): void {
    this.stats.forEach(stat => {
      const dur = 1200;
      const start = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - start) / dur, 1);
        stat.current = Math.round(stat.target * p);
        if (p < 1) requestAnimationFrame(tick);
      };
      tick();
    });
  }
}
