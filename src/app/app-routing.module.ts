import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'members', component: MembersComponent},
  {path: 'project', component: ProjectComponent}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
