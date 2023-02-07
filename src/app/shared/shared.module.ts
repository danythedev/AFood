import { NgModule } from '@angular/core';
import { MaterialModule } from './mat-components/mat-components.module';

@NgModule({
    imports: [MaterialModule],
    exports: [MaterialModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
