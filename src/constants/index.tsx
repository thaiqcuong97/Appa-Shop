export const searchList = [
  'All categories',
  'Uncategorized',
  'Accessories',
  'Brand',
  'Deals',
];

export const routes = {
  HOME: '/',
  PRODUCT: '/product',
  CATALOG: '/catalog',
  BLOG: '/blog',
  CONTACT: '/contact',
  MenuItem: [
    [
      "Men's",
      {
        title: 'Accessories',
        url: "/catalog/men's/accessories",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Luxury',
        url: "/catalog/men's/luxury",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Sale',
        url: "/catalog/men's/sale",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Sports',
        url: "/catalog/men's/sports",
        cName: 'sub-categories__content--option--item',
      },
    ],
    [
      "Women's",
      {
        title: 'Vintage',
        url: "/catalog/women's/vintage",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Unisex',
        url: "/catalog/women's/unisex",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Sports',
        url: "/catalog/women's/sports",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Ladies',
        url: "/catalog/women's/ladies",
        cName: 'sub-categories__content--option--item',
      },
    ],
    [
      "Kid's",
      {
        title: "Kid's",
        url: "/catalog/kid's/kid's",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Luxury',
        url: "/catalog/kid's/luxury",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Vintage',
        url: "/catalog/kid's/vintage",
        cName: 'sub-categories__content--option--item',
      },
      {
        title: 'Unisex',
        url: "/catalog/kid's/unisex",
        cName: 'sub-categories__content--option--item',
      },
    ],
  ],
};

import img1 from '../assets/image/slide/img1.jpg';
import img2 from '../assets/image/slide/img2.jpg';
import img3 from '../assets/image/slide/img3.jpg';
import img4 from '../assets/image/slide/img4.jpg';

export const product = {
  slides: [
    {
      img: img1,
      content: 'california watch co',
      title: 'buy one - get one free',
      text:
        'Tip #1 to relieve stress: Get your holiday shopping done in September',
      cName: 'slide1',
    },
    {
      img: img2,
      content: 'a appa-shops.com approved smartwatch',
      title: "Garmin - smarter - watches ",
      text: "The only smartwatch you shouldn't leave home without!",
      cName: 'slide1',
    },
    {
      img: img3,
      content: 'select sisu watches',
      title: '50% Sale',
      text:
        'The biggest watches available on appa-shop.com are HALF OFF. Enter code SISU50.',
      cName: 'slide1',
    },
    {
      img: img4,
      content: 'California Cool',
      title: 'G-Shock',
      text:
        'The #1 trusted watch brand by military members. Built to survive the roughest conditions.',
      cName: 'slide1',
    },
  ],
};
