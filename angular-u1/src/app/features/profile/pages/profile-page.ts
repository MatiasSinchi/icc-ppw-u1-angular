import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  // Datos básicos
  readonly firstName = signal('Juan');
  readonly lastName = signal('Pérez');
  readonly age = signal(30);
  readonly skills = signal(['Angular', 'TypeScript', 'HTML']);
  
  // Nombre completo calculado
  readonly fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  // Calculadora de categoría de edad con @switch
  readonly ageCategory = computed(() => {
    const value = this.age();
    if (value < 18) return 'minor';
    if (value < 30) return 'young';
    if (value < 60) return 'adult';
    return 'senior';
  });

  // Método para actualizar el estado
  changeData() {
    this.firstName.set('Ana');
    this.lastName.set('González');
    this.age.set(22);
  }
}