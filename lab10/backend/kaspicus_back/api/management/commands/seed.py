from django.core.management.base import BaseCommand
from api.models import Category, Product

class Command (BaseCommand):
    help = 'Fill databse with initial categories and products'

    def handle (self, *args, **kwargs):
        Product.objects.all().delete()
        Category.objects.all().delete()

        smartphones = Category.objects.create(name='Smartphones')
        laptops     = Category.objects.create(name='Laptops')
        headphones  = Category.objects.create(name='Headphones')
        tablets      = Category.objects.create(name="Tablets")

        Product.objects.create(
            name='OnePlus 12R',
            price=339989,
            description='OnePlus 12R — это мощный смартфон с передовыми технологиями и стильным дизайном.',
            count=10,
            is_active=True,
            category=smartphones
        )

        Product.objects.create(
            name='OnePlus 15 16',
            price=579000,
            description='OnePlus 15 — мощный и стильный смартфон с передовыми технологиями.',
            count=8,
            is_active=True,
            category=smartphones
        )

        Product.objects.create(
            name='Xiaomi Redmi Note 9 Pro',
            price=129950,
            description='Смартфон',
            count=15,
            is_active=True,
            category=smartphones
        )

        Product.objects.create(
            name='Apple iPhone 17 Pro Max 256Gb',
            price=859904,
            description='Iphone Kupi!',
            count=5,
            is_active=True,
            category=smartphones
        )

        Product.objects.create(
            name='Samsung Galaxy S25 Ultra 5G 12',
            price=560497,
            description='Iphone Kupi!',
            count=7,
            is_active=True,
            category=smartphones
        )

        Product.objects.create(
            name='Apple MacBook Pro 16',
            price=699990,
            description='Мощный ноутбук, созданный для профессионалов и творческих людей.',
            count=4,
            is_active=True,
            category=laptops
        )

        Product.objects.create(
            name='Apple MacBook Air 13 2025',
            price=523993,
            description='Ультрабук, который сочетает в себе высокую производительность и изящный дизайн.',
            count=6,
            is_active=True,
            category=laptops
        )

        Product.objects.create(
            name='ASUS TUF A15 FA506',
            price=449990,
            description='Игровой ноутбук, созданный для серьёзных игр.',
            count=9,
            is_active=True,
            category=laptops
        )

        Product.objects.create(
            name='HP HP OmniBook 5 Flip 2-in-1 14',
            price=509990,
            description='Современный ноутбук, созданный для тех, кому важно сочетание удобства и мощности.',
            count=3,
            is_active=True,
            category=laptops
        )

        Product.objects.create(
            name='Lenovo LOQ 15.6',
            price=540000,
            description='Мощный и универсальный ноутбук для работы, учебы и игр.',
            count=11,
            is_active=True,
            category=laptops
        )

        Product.objects.create(
            name='Apple AirPods Max Black',
            price=425425,
            description='Полноразмерные наушники с высоким качеством звука.',
            count=12,
            is_active=True,
            category=headphones
        )

        Product.objects.create(
            name='Apple AirPods Max Silver',
            price=346987,
            description='Полноразмерные наушники с высоким качеством звука.',
            count=10,
            is_active=True,
            category=headphones
        )

        Product.objects.create(
            name='Apple iPad A16 11 2025',
            price=204930,
            description='Мощный планшет для работы и развлечений.',
            count=13,
            is_active=True,
            category=tablets
        )

        Product.objects.create(
            name='Apple iPad Pro ME8M4QA',
            price=1999889,
            description='Планшет премиального уровня.',
            count=2,
            is_active=True,
            category=tablets
        )

        Product.objects.create(
            name='Apple AirPods Max',
            price=425425,
            description='Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий. В ее основе используется процессор Apple H1 и фирменные динамические драйверы, среди достоинств которых можно отметить высокие рабочие параметры. Благодаря этому, а также поддержке функции пространственного аудио и функции динамического отслеживания движений головы наушники подарят вам яркие и незабываемые впечатления при прослушивании музыкальных композиций, словно вы находитесь в кинотеатре.',
            count=4,
            is_active=True,
            category=headphones
        )

        Product.objects.create(
            name='Apple iPad A16 11 2025',
            price=204930,
            description='Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
            count=3,
            is_active=True,
            category=tablets
        )

        Product.objects.create(
            name='Apple iPad Pro ME8M4QA',
            price=1999889,
            description='Код товара: 152243017 | Цвет: черный - космос',
            count=2,
            is_active=True,
            category=tablets
        )

        Product.objects.create(
            name='Apple iPad Pro ME8M4QA',
            price=1999889,
            description='Код товара: 152243017 | Цвет: черный - космос',
            count=2,
            is_active=True,
            category=tablets
        )

        Product.objects.create(
            name='Apple iPad Pro ME8M4QA',
            price=1999889,
            description='Код товара: 152243017 | Цвет: черный - космос',
            count=2,
            is_active=True,
            category=tablets
        )

        Product.objects.create(
            name='Apple iPad A16 11 2025',
            price=204930,
            description='Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
            count=3,
            is_active=True,
            category=tablets
        )

        self.stdout.write(self.style.SUCCESS('Databse seeded successfully'))