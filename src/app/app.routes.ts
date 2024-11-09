import { Routes } from '@angular/router';
import { TaskCreationComponent } from './task-creation/task-creation.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  // {
  //   path: 'create',
  //   loadComponent: () =>
  //     import('./task-creation/task-creation.component').then(
  //       (m) => m.TaskCreationComponent
  //     ),
  // },

  // {
  //   path: 'list',
  //   loadComponent: () =>
  //     import('./task-list/task-list.component').then(
  //       (m) => m.TaskListComponent
  //     ),
  // },

  {
    path: 'create',
    component: TaskCreationComponent,
  },
  {
    path: 'list',
    component: TaskListComponent,
  },
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: '**', redirectTo: '/list' },
];
