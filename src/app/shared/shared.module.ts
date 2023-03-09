import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components/shared-components.module';
import { MaterialModule } from './mat-components/mat-components.module';
import { WarningService } from './services/warnings-service';

@NgModule({
    imports: [MaterialModule, SharedComponentsModule],
    exports: [MaterialModule, SharedComponentsModule],
    declarations: [],
    providers: [WarningService],
})
export class SharedModule {}
