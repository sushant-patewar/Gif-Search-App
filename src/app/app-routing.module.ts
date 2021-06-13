import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GifSearchComponent } from "./components/gif-search/gif-search.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "gif-search",
    pathMatch: "full",
  },
  {
    path: "gif-search",
    component: GifSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
