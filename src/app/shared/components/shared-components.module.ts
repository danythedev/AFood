import { NgModule } from '@angular/core';
import { WarningComponent } from './warning/warning.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [  CommonModule ],
    exports: [WarningComponent],
    declarations: [WarningComponent],
    providers: [],
})
export class SharedComponentsModule { }
