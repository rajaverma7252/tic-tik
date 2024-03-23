import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AuthService } from "../../services/auth.service";

export const HomeRouting: Routes = [{
  path: '', component: HomeComponent, children: [
    { path: '', loadComponent: () => import('../players/players.component').then((c) => c.PlayersComponent) },
    { path: 'questions', canActivate: [AuthService], loadComponent: () => import('../questions/questions.component').then((c) => c.QuestionsComponent) },
    { path: 'questions/options', loadComponent: () => import('../options/options.component').then((c) => c.OptionsComponent) },
  ]
}];