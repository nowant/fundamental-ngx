import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorModule } from '../../../busy-indicator/busy-indicator.module';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselDirective } from './carousel.directive';
import { CarouselComponent } from '../../../carousel/carousel.component';
import { CarouselItemComponent } from '../../../carousel/carousel-item/carousel-item.component';

@NgModule({
    imports: [CommonModule, BusyIndicatorModule],
    exports: [CarouselItemDirective, CarouselDirective, CarouselComponent, CarouselItemComponent],
    declarations: [CarouselItemDirective, CarouselDirective, CarouselComponent, CarouselItemComponent]
})
export class CarouselModule {}
