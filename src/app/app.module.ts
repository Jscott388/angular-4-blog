import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BlogService } from './blog/blog.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
