import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  form = { name: '', email: '', subject: '', message: '' };
  toastMsg = '';
  toastVisible = false;

  contatos = [
    { icon: 'Email',    val: 'paulokfk17@gmail.com',             href: 'mailto:paulokfk17@gmail.com' },
    { icon: 'WhatsApp', val: '(88) 9952-4386',                   href: 'https://wa.me/5588999524386' },
    { icon: 'GitHub',   val: 'github.com/PauloMatiasxvs',        href: 'https://github.com/PauloMatiasxvs' },
    { icon: 'LinkedIn', val: 'paulo-levi-matias',                href: 'https://www.linkedin.com/in/paulo-levi-matias-6524801ab/' }
  ];

  send(event: MouseEvent): void {
    const btn = event.currentTarget as HTMLElement;
    this.addRipple(btn, event);

    if (!this.form.name.trim() || !this.form.email.trim()) {
      this.showToast('Preencha nome e e-mail!');
      return;
    }

    const mailto = `mailto:paulokfk17@gmail.com?subject=${encodeURIComponent(this.form.subject)}&body=${encodeURIComponent(this.form.message)}`;
    window.location.href = mailto;
    this.showToast('Abrindo cliente de e-mail... ✓');
  }

  private showToast(msg: string): void {
    this.toastMsg = msg;
    this.toastVisible = true;
    setTimeout(() => this.toastVisible = false, 2800);
  }

  private addRipple(btn: HTMLElement, event: MouseEvent): void {
    const ripple = document.createElement('span');
    ripple.className = 'send-ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(btn.offsetWidth, btn.offsetHeight) * 2;
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${event.clientX - rect.left - size/2}px;top:${event.clientY - rect.top - size/2}px;position:absolute;`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}
