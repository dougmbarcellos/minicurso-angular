import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule],
})
export class MaterialModule {}
