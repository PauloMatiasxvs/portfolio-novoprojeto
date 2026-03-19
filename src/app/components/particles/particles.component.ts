import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
  template: `<canvas #canvas id="particle-canvas"></canvas>`,
  styles: [`canvas { position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: .3; }`]
})
export class ParticlesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private W = 0;
  private H = 0;
  private pts: any[] = [];
  private animId = 0;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.init();
    this.draw();
  }

  @HostListener('window:resize')
  onResize(): void { this.resize(); this.init(); }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    this.W = canvas.width = window.innerWidth;
    this.H = canvas.height = window.innerHeight;
  }

  private init(): void {
    this.pts = [];
    for (let i = 0; i < 80; i++) {
      this.pts.push({
        x: Math.random() * this.W,
        y: Math.random() * this.H,
        vx: (Math.random() - .5) * .4,
        vy: (Math.random() - .5) * .4,
        r: Math.random() * 1.5 + .3,
        a: Math.random() * .7 + .2
      });
    }
  }

  private draw(): void {
    const { ctx, W, H, pts } = this;
    ctx.clearRect(0, 0, W, H);

    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,60,0,${p.a * .5})`;
      ctx.fill();
    });

    pts.forEach((a, i) => {
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(255,60,0,${.07 * (1 - d / 120)})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    });

    this.animId = requestAnimationFrame(() => this.draw());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
  }
}
