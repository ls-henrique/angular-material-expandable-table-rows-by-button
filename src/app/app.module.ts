import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TableComponent } from "./table/table.component";
import { MaterialModule } from "./material.component.module.ts";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
