import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        // changed carry through only illustrate here
        // path: 'tab1', <===== "path" referenced in tabs.pages.html
        path: 'todo',
        // lazy loading
        // loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        loadChildren: () => import('../todo/todo.module').then(m => m.TodoPageModule)

      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: '',
        // redirectTo: '/tabs/tab1',
        redirectTo: '/tabs/todo',

        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    // redirectTo: '/tabs/tab1',
    redirectTo: '/tabs/todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
