import { NgModule } from '@angular/core';
import { OnceUponAPipePipe } from './once-upon-a-pipe.pipe';

@NgModule({
  declarations: [OnceUponAPipePipe],
  exports: [OnceUponAPipePipe]
})
export class OnceUponAPipeModule { }
