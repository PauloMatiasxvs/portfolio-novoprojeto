import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingService } from '../../services/typing.service';
import { ScrollService } from '../../services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  typingText = '';
  private subs: Subscription[] = [];

  constructor(
    private typingService: TypingService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.typingService.start();
    this.subs.push(
      this.typingService.displayText$.subscribe(v => this.typingText = v)
    );
  }

  navigateTo(section: string): void {
    this.scrollService.scrollToSection(section);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
