import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { SheetComponent } from './sheet/sheet.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [SheetComponent, MenuComponent, HeaderComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
