let moshinBozor = [
    {
        name: 'malibu',
        wheels: 4,
        company: 'gm',
        type: 'turbo',
        price: {
            ownPrice: 35000,
            salePrice: 29000
        }
    },
    {
        name: 'tico',
        wheels: 3,
        company: 'daewoo',
        type: 'turbo',
        price: {
            ownPrice: 2000,
            salePrice: 1400
        }
    },
    {
        name: 'matiz',
        wheels: 4,
        type: 'best',
        company: 'daewoo',
        price: {
            ownPrice: 3500,
            salePrice: 2200
        }
    },
    {
        name: 'gentra',
        wheels: 4,
        company: 'gm',
        type: '1.6',
        price: {
            ownPrice: 14000,
            salePrice: 10000
        }
    },
    {
        name: 'velik',
        wheels: 2,
        company: 'merc',
        type: 'turbo',
        price: {
            ownPrice: 150,
            salePrice: 500
        }
    }
]

let average = (moshinBozor[0].price.ownPrice + moshinBozor[1].price.ownPrice + moshinBozor[2].price.ownPrice + moshinBozor[3].price.ownPrice + moshinBozor[4].price.ownPrice) / 5

let gm = moshinBozor.filter(item => item.company === 'gm')

let cheap_gm = gm.filter(cheap => cheap.price.ownPrice <= average)

console.log(average);

console.log(gm)

console.log(cheap_gm)

// task - 2 

// через фильтр найти самое длинное имя

let arr = ['Alex', 'Barbara', 'john', 'michael']

let longest_name = 

console.log(longest_name)

