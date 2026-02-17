import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App implements OnInit, AfterViewInit {
  private readonly STORAGE_KEY = 'Miras_Will_Not_Go_To_WEB';

  todos: Todo[] = [];
  newTask = '';


  ngOnInit(): void {
    this.loadTodos();
  }

  private saveTodos(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
  }

  private loadTodos(): void {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    this.todos = raw ? (JSON.parse(raw) as Todo[]) : [];
  }


  addTask(event: Event): void {
    event.preventDefault();

    const value = this.newTask.trim();
    if (!value) return;

    this.todos.push({
      id: Date.now(),
      text: value,
      done: false,
    });

    this.newTask = '';
    this.saveTodos();
  }

  toggleTodo(todo: Todo): void {
    todo.done = !todo.done;
    this.saveTodos();
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
    this.saveTodos();
  }


  get total(): number {
    return this.todos.length;
  }

  get done(): number {
    return this.todos.filter((t) => t.done).length;
  }

  get left(): number {
    return this.total - this.done;
  }


  private glassMainEl: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.glassMainEl = document.querySelector('.glass-main');
    // бастапқы позиция
    this.setGlassVars(50, 30);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.glassMainEl) return;
    const rect = this.glassMainEl.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const cx = Math.max(0, Math.min(100, x));
    const cy = Math.max(0, Math.min(100, y));

    this.setGlassVars(cx, cy);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setGlassVars(50, 30);
  }

  private setGlassVars(x: number, y: number): void {
    if (!this.glassMainEl) return;
    this.glassMainEl.style.setProperty('--mx', `${x}%`);
    this.glassMainEl.style.setProperty('--my', `${y}%`);
  }
}