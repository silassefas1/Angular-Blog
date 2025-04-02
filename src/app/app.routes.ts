import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';  // Removido import desnecessário de Component
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [ 
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'content',
		component: ContentComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {} 
