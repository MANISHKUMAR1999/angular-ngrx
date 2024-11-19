import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { getErrorMessage, getLoading } from './store/shared/shared.selectors';
import { autoLogin } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'counter-ngrx';
  theme: 'light' | 'dark' = 'light'; // Default theme

  showLoading!:Observable<boolean>
  errorMessage!:Observable<string>
  isDarkMode = false;
constructor(private store:Store<AppState>,private renderer: Renderer2){}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading)
    this.errorMessage = this.store.select(getErrorMessage)
    this.store.dispatch(autoLogin())
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.theme = savedTheme;
    }

    // Apply the theme to <html>
    this.updateTheme();
  }

  toggleTheme(): void {
    // Toggle theme
    this.theme = this.theme === 'light' ? 'dark' : 'light';

    // Save preference in localStorage
    localStorage.setItem('theme', this.theme);

    // Apply the theme
    this.updateTheme();
  }

  private updateTheme(): void {
    // Dynamically set the theme at the <html> level
    const htmlElement = document.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-bs-theme', this.theme);
  }
   
  }

    
  

