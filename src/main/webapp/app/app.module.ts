import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FtsappSharedModule } from 'app/shared/shared.module';
import { FtsappCoreModule } from 'app/core/core.module';
import { FtsappAppRoutingModule } from './app-routing.module';
import { FtsappHomeModule } from './home/home.module';
import { FtsappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FtsappSharedModule,
    FtsappCoreModule,
    FtsappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FtsappEntityModule,
    FtsappAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class FtsappAppModule {}
