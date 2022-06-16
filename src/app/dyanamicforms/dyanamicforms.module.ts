import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DyanamicformsRoutingModule } from './dyanamicforms-routing.module';
import { DyanamicformsComponent } from './dyanamicforms.component';
import { TableviewComponent } from './tableview/tableview.component';
import { FormgenratorComponent } from './formgenrator/formgenrator.component';
import { FieldgeneratorComponent } from './fieldgenerator/fieldgenerator.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DyanamicformsComponent,
    TableviewComponent,
    FormgenratorComponent,
    FieldgeneratorComponent
  ],
  imports: [
    CommonModule,
    DyanamicformsRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule

  ]
})
export class DyanamicformsModule { }
