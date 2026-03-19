import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TypingService {
  displayText$ = new BehaviorSubject<string>('');

  private words = [
    'C# / .NET',
    'TypeScript & Angular',
    'Pascal / Delphi 7',
    'Delphi / ERP',
    'React',
    'Python / Data',
    'APIs REST',
    'Power BI'
  ];
  private wi = 0;
  private ci = 0;
  private deleting = false;

  start(): void {
    setTimeout(() => this.tick(), 1200);
  }

  private tick(): void {
    const word = this.words[this.wi];
    if (!this.deleting) {
      this.ci++;
      this.displayText$.next(word.slice(0, this.ci));
      if (this.ci === word.length) {
        this.deleting = true;
        setTimeout(() => this.tick(), 1800);
        return;
      }
    } else {
      this.ci--;
      this.displayText$.next(word.slice(0, this.ci));
      if (this.ci === 0) {
        this.deleting = false;
        this.wi = (this.wi + 1) % this.words.length;
      }
    }
    setTimeout(() => this.tick(), this.deleting ? 60 : 100);
  }
}
