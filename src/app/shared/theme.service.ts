import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode: boolean = false;

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    this.saveTheme();
  }

  private saveTheme(): void {
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme !== null) {
      this.isDarkMode = JSON.parse(savedTheme);
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
  }
}
