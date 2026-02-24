import { Injectable } from '@angular/core';
import { Category } from '../models/product.model/category.models';
import { Product } from '../models/product.model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
      {
        id: 1,
        name: `OnePlus 12R `,
        description: `OnePlus 12R — это мощный смартфон с передовыми технологиями и стильным дизайном, созданный для тех, кто ценит высокую производительность и удобство использования.`,
        price: 339989,
        rating: 4,
        image: `assets/images/main-images-by-id/1.png`,
        images: 
        [ `assets/images/images-by-id/1/1.png`,
          `assets/images/images-by-id/1/2.png`,
          `assets/images/images-by-id/1/3.png`
        ],
        link: `https://kaspi.kz/shop/p/oneplus-14r-12-gb-256-gb-chernyi-podarok-134676707/?c=750000000`,
        likes: 100,
        categoryID: 1,
      },

      {
        id: 2,
        name: `OnePlus 15 16`,
        description: `OnePlus 15 — мощный и стильный смартфон с передовыми технологиями, созданный для тех, кто ценит производительность и инновации.`,
        price: 579000,
        rating: 5, 
        image: `assets/images/main-images-by-id/2.png`,
        images: 
        [ `assets/images/images-by-id/2/1.png`,
          `assets/images/images-by-id/2/2.png`,
          `assets/images/images-by-id/2/3.png`
        ],
        link: `https://kaspi.kz/shop/p/oneplus-15-16-gb-512-gb-zolotistyi-149784041/?c=750000000`,
        likes: 200,
        categoryID: 1
      },

      {
        id: 3,
        name: `Xiaomi Redmi Note 9 Pro`,
        description: `Смартфон`,
        price: 129950,
        rating: 5,
        image: `assets/images/main-images-by-id/3.png`,
        images: 
        [ `assets/images/images-by-id/3/1.png`,
          `assets/images/images-by-id/3/2.png`,
          `assets/images/images-by-id/3/3.png`
        ],
        link: `https://kaspi.kz/shop/p/xiaomi-redmi-note-9-pro-6-64gb-seryi-100301634/`,
        likes: 43,
        categoryID: 1,
      },

      {
        id: 4,
        name: `Apple iPhone 17 Pro Max 256Gb`,
        description: `Iphone Kupi!`,
        price: 859904,
        rating: 5,
        image: `assets/images/main-images-by-id/4.png`,
        images: 
        [ `assets/images/images-by-id/4/1.png`,
          `assets/images/images-by-id/4/2.png`,
          `assets/images/images-by-id/4/3.png`
        ],
        link: `https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/?c=750000000`,
        likes: 432,
        categoryID: 1,
      },

      {
        id: 5,
        name: `Samsung Galaxy S25 Ultra 5G 12`,
        description: `Iphone Kupi!`,
        price: 560497,
        rating: 5,
        image: `assets/images/main-images-by-id/5.png`,
        images: 
        [ `assets/images/images-by-id/5/1.png`,
          `assets/images/images-by-id/5/2.png`,
          `assets/images/images-by-id/5/3.png`
        ],
        link: `https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000`,
        likes: 431,
        categoryID: 1,
      },

      {
        id: 6,
        name: `Apple MacBook Pro 16`,
        description: `Представляем Apple MacBook Pro 16 2021 — мощный ноутбук, созданный для профессионалов и творческих людей. С процессором Apple M1 Pro и 32 Гб оперативной памяти он обеспечивает невероятную производительность и скорость работы.`,
        price: 699990,
        rating: 5,
        image: `assets/images/main-images-by-id/6.png`,
        images: 
        [ `assets/images/images-by-id/6/1.png`,
          `assets/images/images-by-id/6/2.png`,
          `assets/images/images-by-id/6/3.png`
        ],
        link: `https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000`,
        likes: 999,
        categoryID: 2,
      },

      {
        id: 7,
        name: `Apple MacBook Air 13 2025 `,
        description: `Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.`,
        price: 523993,
        rating: 5,
        image: `assets/images/main-images-by-id/7.png`,
        images: 
        [ `assets/images/images-by-id/7/1.png`,
          `assets/images/images-by-id/7/2.png`,
          `assets/images/images-by-id/7/3.png`
        ],
        link: `https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000`,
        likes: 98,
        categoryID: 2,
      },
      
      {
        id: 8,
        name: `ASUS TUF A15 FA506 `,
        description: `TUF Gaming A15 — это игровой ноутбук, созданный для серьёзных игр и отличающийся новым стильным дизайном. Он обладает множеством функций и мощностью, необходимой для победы. Новая видеокарта GeForce RTX ™ 3050 обеспечивает плавный игровой процесс на дисплее с частотой обновления до 144 Гц и 100% охватом sRGB, а мощный процессор AMD Ryzen ™ 7 дополнен улучшенной системой охлаждения, которая повышает производительность процессора и обеспечивает низкий уровень шума. Ёмкий аккумулятор ёмкостью 90 Вт⋅ч в сочетании с прочностью TUF военного уровня позволят вам наслаждаться лучшей игрой где угодно.`,
        price: 449990,
        rating: 2,
        image: `assets/images/main-images-by-id/8.png`,
        images: 
        [ `assets/images/images-by-id/8/1.png`,
          `assets/images/images-by-id/8/2.png`,
          `assets/images/images-by-id/8/3.png`
        ],
        link: `https://kaspi.kz/shop/p/asus-tuf-a15-fa506-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00je0-148010487/?c=750000000`,
        likes: 18,
        categoryID: 2,
      },

      {
        id: 9,
        name: `HP HP OmniBook 5 Flip 2-in-1 14`,
        description: `Бизнес модель HP OmniBook - это современный ноутбук, созданный для тех, кому важно сочетание удобства и мощности. Он работает быстро, легко справляется с разными задачами и остаётся надёжным даже при интенсивном использовании.`,
        price: 509990,
        rating: 2,
        image: `assets/images/main-images-by-id/9.png`,
        images: 
        [ `assets/images/images-by-id/9/1.png`,
          `assets/images/images-by-id/9/2.png`,
          `assets/images/images-by-id/9/3.png`
        ],
        link: `https://kaspi.kz/shop/p/hp-hp-omnibook-5-flip-2-in-1-14-2k-touch-screen-laptop-14-16-gb-ssd-512-gb-win-11-home-b86q7ua-aba-149722196/?c=750000000`,
        likes: 8,
        categoryID: 2,
      },

      {
        id: 10,
        name: `Lenovo LOQ 15.6`,
        description: `Lenovo LOQ 15.6" Full HD Gaming Laptop — это мощный и универсальный ноутбук для работы, учебы и захватывающих игр. Сочетание производительности, яркого дисплея и стильного дизайна делает его идеальным выбором для современных пользователей.`,
        price: 540000 ,
        rating: 3,
        image: `assets/images/main-images-by-id/10.png`,
        images: 
        [ `assets/images/images-by-id/10/1.png`,
          `assets/images/images-by-id/10/2.png`,
          `assets/images/images-by-id/10/3.png`
        ],
        link: `https://kaspi.kz/shop/p/lenovo-loq-15-6-full-hd-gaming-laptop-15-6-16-gb-ssd-512-gb-win-11-home-83jc0olyus-152920147/?c=750000000`,
        likes: 1,
        categoryID: 2,
      },

      {
        id: 11,
        name: ` Apple AirPods Max`,
        description: `Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий. В ее основе используется процессор Apple H1 и фирменные динамические драйверы, среди достоинств которых можно отметить высокие рабочие параметры. Благодаря этому, а также поддержке функции пространственного аудио и функции динамического отслеживания движений головы наушники подарят вам яркие и незабываемые впечатления при прослушивании музыкальных композиций, словно вы находитесь в кинотеатре.`,
        price: 425425,
        rating: 5,
        image: `assets/images/main-images-by-id/11.png`,
        images: 
        [ `assets/images/images-by-id/11/1.png` ],
        link: `https://kaspi.kz/shop/p/naushniki-apple-airpods-max-chernyi-100950846/?c=750000000`,
        likes: 211,
        categoryID: 3,
      },

      {
        id: 12,
        name: `Apple AirPods Max`,
        description: `Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий. В ее основе используется процессор Apple H1 и фирменные динамические драйверы, среди достоинств которых можно отметить высокие рабочие параметры. Благодаря этому, а также поддержке функции пространственного аудио и функции динамического отслеживания движений головы наушники подарят вам яркие и незабываемые впечатления при прослушивании музыкальных композиций, словно вы находитесь в кинотеатре.`,
        price: 346987,
        rating: 4,
        image: `assets/images/main-images-by-id/12.png`,
        images: 
        [ `assets/images/images-by-id/12/1.png` ],
        link: `https://kaspi.kz/shop/p/naushniki-apple-airpods-max-serebristyi-100949286/?c=750000000`,
        likes: 21,
        categoryID: 3,
      },

      {
        id: 13,
        name: `Apple AirPods Max`,
        description: `Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий. В ее основе используется процессор Apple H1 и фирменные динамические драйверы, среди достоинств которых можно отметить высокие рабочие параметры. Благодаря этому, а также поддержке функции пространственного аудио и функции динамического отслеживания движений головы наушники подарят вам яркие и незабываемые впечатления при прослушивании музыкальных композиций, словно вы находитесь в кинотеатре.`,
        price: 346987,
        rating: 1,
        image: `assets/images/main-images-by-id/12.png`,
        images: 
        [ `assets/images/images-by-id/12/1.png` ],
        link: `https://kaspi.kz/shop/p/naushniki-apple-airpods-max-serebristyi-100949286/?c=750000000`,
        likes: 2123,
        categoryID: 3,
      },

      {
        id: 14,
        name: `Apple AirPods Max`,
        description: `Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий. В ее основе используется процессор Apple H1 и фирменные динамические драйверы, среди достоинств которых можно отметить высокие рабочие параметры. Благодаря этому, а также поддержке функции пространственного аудио и функции динамического отслеживания движений головы наушники подарят вам яркие и незабываемые впечатления при прослушивании музыкальных композиций, словно вы находитесь в кинотеатре.`,
        price: 346987,
        rating: 3,
        image: `assets/images/main-images-by-id/12.png`,
        images: 
        [ `assets/images/images-by-id/12/1.png` ],
        link: `https://kaspi.kz/shop/p/naushniki-apple-airpods-max-serebristyi-100949286/?c=750000000`,
        likes: 21,
        categoryID: 3,
      },

      {
        id: 15,
        name: ` Apple AirPods Max`,
        description: `Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий. В ее основе используется процессор Apple H1 и фирменные динамические драйверы, среди достоинств которых можно отметить высокие рабочие параметры. Благодаря этому, а также поддержке функции пространственного аудио и функции динамического отслеживания движений головы наушники подарят вам яркие и незабываемые впечатления при прослушивании музыкальных композиций, словно вы находитесь в кинотеатре.`,
        price: 425425,
        rating: 4,
        image: `assets/images/main-images-by-id/11.png`,
        images: 
        [ `assets/images/images-by-id/11/1.png` ],
        link: `https://kaspi.kz/shop/p/naushniki-apple-airpods-max-chernyi-100950846/?c=750000000`,
        likes: 211,
        categoryID: 3,
      },

      {
        id: 16,
        name: `Apple iPad A16 11 2025`,
        description: `Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений`,
        price: 204930,
        rating: 3,
        image: `assets/images/main-images-by-id/16.png`,
        images: 
        [ `assets/images/images-by-id/16/1.png` ],
        link: `https://kaspi.kz/shop/p/naushniki-apple-airpods-max-chernyi-100950846/?c=750000000`,
        likes: 21,
        categoryID: 4,
      },

      {
        id: 17,
        name: `Apple iPad Pro ME8M4QA`,
        description: `Код товара: 152243017 | Цветчерный - космос`,
        price: 1999889,
        rating: 3,
        image: `assets/images/main-images-by-id/17.png`,
        images: 
        [ `assets/images/images-by-id/17/1.png` ],
        link: `https://kaspi.kz/shop/p/apple-ipad-pro-me8m4qa-a-13-djuim-16-gb-2000-gb-chernyi---kosmos-152243017/?c=750000000`,
        likes: 999,
        categoryID: 4,
      },

      {
        id: 18,
        name: `Apple iPad Pro ME8M4QA`,
        description: `Код товара: 152243017 | Цветчерный - космос`,
        price: 1999889,
        rating: 3,
        image: `assets/images/main-images-by-id/17.png`,
        images: 
        [ `assets/images/images-by-id/17/1.png` ],
        link: `https://kaspi.kz/shop/p/apple-ipad-pro-me8m4qa-a-13-djuim-16-gb-2000-gb-chernyi---kosmos-152243017/?c=750000000`,
        likes: 999,
        categoryID: 4,
      },

      {
        id: 19,
        name: `Apple iPad Pro ME8M4QA`,
        description: `Код товара: 152243017 | Цветчерный - космос`,
        price: 1999889,
        rating: 3,
        image: `assets/images/main-images-by-id/17.png`,
        images: 
        [ `assets/images/images-by-id/17/1.png` ],
        link: `https://kaspi.kz/shop/p/apple-ipad-pro-me8m4qa-a-13-djuim-16-gb-2000-gb-chernyi---kosmos-152243017/?c=750000000`,
        likes: 999,
        categoryID: 4,
      },

      {
        id: 20,
        name: `Apple iPad A16 11 2025`,
        description: `Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений`,
        price: 204930,
        rating: 3,
        image: `assets/images/main-images-by-id/16.png`,
        images: 
        [ `assets/images/images-by-id/16/1.png` ],
        link: `https://kaspi.kz/shop/p/naushniki-apple-airpods-max-chernyi-100950846/?c=750000000`,
        likes: 21,
        categoryID: 4,
      },
  ];

  getProducts(): Product[]
  { return this.products; }

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryID: number): Product[] {
    return this.products.filter(p => p.categoryID === categoryID)
  }

  deleteProduct(categoryID: number) {
    this.products = this.products.filter(p => p.categoryID !== categoryID);
  }
}
