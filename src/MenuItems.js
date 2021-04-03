const MenuItems = [
    {
        id: 1,
        name: 'THE CLASSIC TONKOTSU RAMEN',
        price: 18.90,
        dineIn: true,
        takeOut: true,
        description: '',
        takeOutDes: 'Fully customizable tonkotsu ramen made with specially developed wheat noodles for delivery',
        type: 'food',
        imageName: 'Tonkotsu'
    },
    {
        id: 2,
        name: 'KAE-DAMA',
        price: 3.90,
        dineIn: true,
        takeOut: true,
        description: 'Noodle Refill',
        takeOutDes: '',
        type: 'food',
    },
    {
        id: 3,
        name: '1/2 KAE-DAMA',
        price: 2.90,
        dineIn: true,
        takeOut: false,
        description: '',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 4,
        name: 'PREMIUM YAKIBUTA',
        price: 9.90,
        dineIn: true,
        takeOut: true,
        description: 'Smoky yet sweet marinated pork in thick slices for that perfect mouthful',
        takeOutDes: 'Smoky and sweet marinated pork in thick slices',
        type: 'food',
        imageName: ''
    },
    {
        id: 5,
        name: 'RECOMMENDED TOPPINGS SET',
        price: 5,
        dineIn: true,
        takeOut: true,
        description: 'Assortment of all toppings (seaweed, mushrooms, scallions, chashu, soft boiled egg)',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 6,
        name: 'EXTRA CHASHU',
        price: 3.90,
        dineIn: true,
        takeOut: false,
        description: '4 SLICES',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 7,
        name: 'EXTRA SCALLION',
        price: 1.50,
        dineIn: true,
        takeOut: false,
        description: '',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 8,
        name: 'KIKURAGE MUSHROOMS',
        price: 1.50,
        dineIn: true,
        takeOut: false,
        description: '',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 9,
        name: 'WHITE RICE',
        price: 2.90,
        dineIn: true,
        takeOut: true,
        description: 'Golden Koshihikari',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 10,
        name: 'SOFT BOILED EGG',
        price: 2.90,
        dineIn: true,
        takeOut: false,
        description: 'Lightly salted soft boiled egg served in its shell',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 11,
        name: 'DRIED SEAWEED',
        price: 1.50,
        dineIn: true,
        takeOut: false,
        description: '2 PIECES',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 12,
        name: 'OSUKARAN VINEGAR',
        price: 1.50,
        dineIn: true,
        takeOut: false,
        description: 'Homemade black vinegar sauce for a refreshing boost of umami',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 13,
        name: 'EXTRA GARLIC',
        price: 1.50,
        dineIn: true,
        takeOut: false,
        description: '2 CLOVES',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 14,
        name: 'KIDS RAMEN',
        price: 4.90,
        dineIn: true,
        takeOut: false,
        description: 'A special child sized ramen with its own customization form',
        takeOutDes: '',
        type: 'food',
        imageName: ''
    },
    {
        id: 15,
        name: 'ICHIRAN VEGGIE RAMEN',
        price: 18.90,
        dineIn: true,
        takeOut: true,
        description: 'Exclusive to NYC! Vegetarian ramen with a light, yet flavorful Dashi broth. Please skip to sections marked with a [star] to customize.',
        takeOutDes: 'Exclusive to NYC! Vegetarian ramen with a light and flavorful Dashi broth',
        type: 'food',
        imageName: ''
    },
    {
        id: 16,
        name: 'MATCHA PUDDING',
        price: 8.90,
        dineIn: true,
        takeOut: false,
        description: 'Japanese style pudding with a sweetened green tea base',
        takeOutDes: '',
        type: 'dessert',
        imageName: ''
    },
    {
        id: 17,
        name: 'ASAHI SUPER DRY DRAFT BEER',
        price: 6.90,
        dineIn: true,
        takeOut: false,
        description: '',
        takeOutDes: '',
        type: 'beverage',
        imageName: ''
    },
    {
        id: 18,
        name: 'MATCHA DRAFT BEER',
        price: 8.90,
        dineIn: true,
        takeOut: false,
        description: 'A smooth mix of matcha and refreshing beer.',
        takeOutDes: '',
        type: 'beverage',
        imageName: ''
    },
    {
        id: 19,
        name: 'MATCHA TEA',
        price: 3.90,
        dineIn: true,
        takeOut: false,
        description: 'Hot | Iced',
        takeOutDes: '',
        type: 'beverage',
        imageName: ''
    },
    {
        id: 20,
        name: 'RAMUNE',
        price: 3.90,
        dineIn: true,
        takeOut: true,
        description: 'Japanese Soda',
        takeOutDes: '',
        type: 'beverage',
        imageName: ''
    },
    {
        id: 21,
        name: 'CALPICO',
        price: 3.90,
        dineIn: true,
        takeOut: true,
        description: 'Soft drink with a hint of citrus and yogurt flavors',
        takeOutDes: 'apanese soft drink with yogurt and citrus flavors',
        type: 'beverage',
        imageName: ''
    },
    {
        id:22,
        name: 'SAKE',
        price: null,
        dineIn: true,
        takeOut: false,
        description: 'Variety of Japanese sake and shochu available',
        takeOutDes: '',
        type: 'beverage',
        imageName: ''
    },
    {
        id:23,
        name: 'FRESH RAMEN',
        price: 14,
        description: '',
        dineIn: false,
        takeOut: true,
        takeOutDes: '1-minute DIY ramen kit. Toppings included. Not available at all locations',
        type: 'food',
        imageName: ''
    },
    {
        id:24,
        name: 'FRESH RAMEN WITH KAE-DAMA',
        price: 16.50,
        description: '',
        dineIn: false,
        takeOut: true,
        takeOutDes: '1-minute DIY ramen kit. Includes toppings & extra serving of noodles. Not available at all locations',
        type: 'food',
        imageName: ''
    },
    {
        id:25,
        name: 'CHASHU DON',
        price: 6.90,
        description: '',
        dineIn: false,
        takeOut: true,
        takeOutDes: 'Small: Smoky yet sweet marinated pork over rice',
        type: 'food',
        imageName: ''
    },
    {
        id:26,
        name: 'KAE-DAMA (VEGGIE RAMEN)',
        price: 3.90,
        description: '',
        dineIn: false,
        takeOut: true,
        takeOutDes: 'Noodle refill for Veggie Ramen (different noodles from original ramen)',
        type: 'food',
        imageName: ''
    },
    {
        id:27,
        name: 'TAKE-HOME RAMEN KIT',
        price: 20,
        description: '',
        dineIn: false,
        takeOut: true,
        takeOutDes: "ICHIRAN's pantry ready ramen kit with a long shelf life. Includes 3 servings",
        type: 'food',
        imageName: ''
    },
    {
        id:28,
        name: 'GINGER ALE',
        price: 2.90,
        description: '',
        dineIn: false,
        takeOut: true,
        takeOutDes: '',
        type: 'beverage',
        imageName: ''
    },
    {
        id:29,
        name: 'COKE',
        price: 2.90,
        description: '',
        dineIn: false,
        takeOut: true,
        takeOutDes: '',
        type: 'beverage',
        imageName: ''
    },
    {
        id:30,
        name: 'JAPANESE SAKE & SHOCHU',
        price: 2.90,
        description: '',
        dineIn: false,
        takeOut: true,
        takeOutDes: 'Alcohol delivery differs by food delivery platform',
        type: 'beverage',
        imageName: ''
    },
    

]

export default MenuItems