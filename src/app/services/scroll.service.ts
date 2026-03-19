import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollProgress$ = new BehaviorSubject<number>(0);
  activeSection$ = new BehaviorSubject<string>('');
  showBackTop$ = new BehaviorSubject<boolean>(false);
  isScrolled$ = new BehaviorSubject<boolean>(false);

  private sections = ['sobre', 'exp', 'projetos', 'skills', 'contato'];

  onScroll(): void {
    const st = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;
    this.scrollProgress$.next(max > 0 ? (st / max) * 100 : 0);
    this.showBackTop$.next(st > 400);
    this.isScrolled$.next(st > 60);

    for (const id of this.sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeSection$.next(id);
        break;
      }
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
