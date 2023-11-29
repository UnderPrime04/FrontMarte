import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit, AfterViewInit {
  currentIndex = 0;
  totalItems = 12; // Defina o número total de items conforme necessário
  carouselItems!: HTMLElement;
  itemWidth!: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Lógica do carousel aqui
  }

  ngAfterViewInit() {
    this.initializeCarousel();
  }

  initializeCarousel() {
    this.carouselItems = this.elementRef.nativeElement.querySelector('.carousel-items');
    const cardElement = this.elementRef.nativeElement.querySelector('.card');
    if (cardElement) {
      this.itemWidth = cardElement.clientWidth;
    }

    const prevButton = this.elementRef.nativeElement.querySelector('.prev-button');
    const nextButton = this.elementRef.nativeElement.querySelector('.next-button');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', this.showPrevItem.bind(this));
      nextButton.addEventListener('click', this.showNextItem.bind(this));
    }
  }

  showNextItem() {
    if (this.currentIndex < this.totalItems - 1 && this.carouselItems && this.itemWidth) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  showPrevItem() {
    if (this.currentIndex > 0 && this.carouselItems && this.itemWidth) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  updateCarousel() {
    if (this.carouselItems && this.itemWidth) {
      this.carouselItems.style.transform = `translateX(${-this.currentIndex * this.itemWidth}px)`;
    }
  }
}
