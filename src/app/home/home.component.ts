import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    SlickCarouselModule,
    LatestProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Main courasoul configuration
  slides = [
    {
      img: '../../assets/img/Halo Infinite.jpg',
      title: 'Halo',
      subtitle: 'Infite',
      greentext: '50% off',
      
    },
    {
      img: '../../assets/img/Stray.jpg',
      title: 'Stray',
      greentext: '20% off',
      subtitle: '',
    },
    {
      img: '../../assets/img/Mortal Kombat.jpg',
      title: 'Mortal Kombat ',
      greentext: '35% off',
      subtitle: 'Komplete Edition',
    },
    {
      img: '../../assets/img/Sonic X Shadow Generation.jpg',
      title: 'Sonic X Shadow Generation ',
      greentext: '30% off',
    },
  ];
  slideConfig = {
    accessibility: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    nextArrow:
      '<i class="fa fa-chevron-right mainslick-next" style="color: #5a88ca;"></i>',
    prevArrow:
      '<i class="fa fa-chevron-left mainslick-prev" style="color: #5a88ca;"></i>',
  };

  // Brands corasoul configuration
  slideConfigLogos = {
    accessibility: true,
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
    prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>',
  };
  slidesLogos = [
    { img: '../../assets/img/consola.jpg' },
    { img: '../../assets/img/team.jpg' },
    { img: '../../assets/img/nintendo-switch.jpg' },
    { img: '../../assets/img/atari.png' },
    { img: '../../assets/img/Ps4.jpg' },
    { img: '../../assets/img/Ubisoft.jpg' },
    { img: '../../assets/img/xbox.jpg' },
    { img: '../../assets/img/Sega.jpg' },
  ];

  // Latest products corasoul configuration
  slideConfiglatestProducts = {
    accessibility: true,
    dots: false,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
    prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>',
  };
}

