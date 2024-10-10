import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create',
    loadComponent: () =>
      import('./task-creation/task-creation.component').then(
        (m) => m.TaskCreationComponent
      ),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./task-list/task-list.component').then(
        (m) => m.TaskListComponent
      ),
  },
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: '**', redirectTo: '/list' },
];
