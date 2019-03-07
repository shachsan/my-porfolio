import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CenterContainerComponent } from './center-container/center-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { FooterComponent } from './footer/footer.component';
import { EmbedProjectsComponent } from './embed-projects/embed-projects.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    CenterContainerComponent,
    RightContainerComponent,
    NabvarComponent,
    FooterComponent,
    EmbedProjectsComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
