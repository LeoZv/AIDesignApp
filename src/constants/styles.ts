export interface Style {
    id: string,
    title: string,
    description: string,
    imagePath: string
}

export interface StylesCategory {
    id: string,
    name: string
    items: Style[]
}


// @ts-ignore
export const categories: StylesCategory[] = [
    {
        id: '0100',
        name: 'Классические',
        items: [
            {
                id: '0101',
                title: 'Скандинавский',
                description: '',
                imagePath: '/assets/images/styles/image0101.png'
            },
            {
                id: '0102',
                title: 'Минимализм',
                description: '',
                imagePath: '/assets/images/styles/image0102.png'
            },
            {
                id: '0103',
                title: 'Классический',
                description: '',
                imagePath: '/assets/images/styles/image0103.png'
            },
            {
                id: '0104',
                title: 'Модерн',
                description: '',
                imagePath: '/assets/images/styles/image0104.png'
            },
            {
                id: '0105',
                title: 'Кантри',
                description: '',
                imagePath: '/assets/images/styles/image0105.png'
            },
        ]
    },
    {
        id: '0200',
        name: 'Праздники',
        items: [
            {
                id: '0201',
                title: 'Новый год',
                description: '',
                imagePath: '/assets/images/styles/image0201.png'
            },
            {
                id: '0202',
                title: 'Halloween',
                description: '',
                imagePath: '/assets/images/styles/image0202.png'
            },
            {
                id: '0203',
                title: 'Китайский новый год',
                description: '',
                imagePath: '/assets/images/styles/image0203.png'
            },
        ]
    },
    {
        id: '0300',
        name: 'Международные',
        items: [
            {
                id: '0301',
                title: 'Китайский',
                description: '',
                imagePath: '/assets/images/styles/image0301.png'
            },
            {
                id: '0302',
                title: 'Французский',
                description: '',
                imagePath: '/assets/images/styles/image0302.png'
            },
            {
                id: '0303',
                title: 'Новый китайский',
                description: '',
                imagePath: '/assets/images/styles/image0303.png'
            },
            {
                id: '0304',
                title: 'Ваби-Саби',
                description: '',
                imagePath: '/assets/images/styles/image0304.png'
            },
            {
                id: '0305',
                title: 'Японский',
                description: '',
                imagePath: '/assets/images/styles/image0305.png'
            },
            {
                id: '0306',
                title: 'Итальянский',
                description: '',
                imagePath: '/assets/images/styles/image0306.png'
            },
            {
                id: '0307',
                title: 'Средиземноморский',
                description: '',
                imagePath: '/assets/images/styles/image0307.png'
            },
            {
                id: '0308',
                title: 'Африканский',
                description: '',
                imagePath: '/assets/images/styles/image0308.png'
            },
            {
                id: '0309',
                title: 'Арабский',
                description: '',
                imagePath: '/assets/images/styles/image0309.png'
            },
            {
                id: '0310',
                title: 'Кубинский',
                description: '',
                imagePath: '/assets/images/styles/image0310.png'
            },
            {
                id: '0311',
                title: 'Марокканский',
                description: '',
                imagePath: '/assets/images/styles/image0311.png'
            },
            {
                id: '0312',
                title: 'Индийский',
                description: '',
                imagePath: '/assets/images/styles/image0312.png'
            },
        ]
    },
    {
        id: '0400',
        name: 'Ретро',
        items: [
            {
                id: '0401',
                title: 'Ретро',
                description: '',
                imagePath: '/assets/images/styles/image0401.png'
            },
            {
                id: '0402',
                title: 'Винтаж',
                description: '',
                imagePath: '/assets/images/styles/image0402.png'
            },
            {
                id: '0403',
                title: 'Баухаус',
                description: '',
                imagePath: '/assets/images/styles/image0403.png'
            },
            {
                id: '0404',
                title: 'СССР',
                description: '',
                imagePath: '/assets/images/styles/image0404.png'
            },
            {
                id: '0405',
                title: 'Индустриальный',
                description: '',
                imagePath: '/assets/images/styles/image0405.png'
            },
        ]
    },
    {
        id: '0500',
        name: 'Исторические',
        items: [
            {
                id: '0501',
                title: 'Неоклассика',
                description: '',
                imagePath: '/assets/images/styles/image0501.png'
            },
            {
                id: '0502',
                title: 'Шебби-шик',
                description: '',
                imagePath: '/assets/images/styles/image0502.png'
            },
            {
                id: '0503',
                title: 'Колониальный',
                description: '',
                imagePath: '/assets/images/styles/image0503.png'
            },
            {
                id: '0504',
                title: 'Rococo',
                description: '',
                imagePath: '/assets/images/styles/image0504.png'
            },
            {
                id: '0505',
                title: 'Барокко',
                description: '',
                imagePath: '/assets/images/styles/image0505.png'
            },
            {
                id: '0506',
                title: 'Арт Нуво',
                description: '',
                imagePath: '/assets/images/styles/image0506.png'
            },
            {
                id: '0507',
                title: 'Готика',
                description: '',
                imagePath: '/assets/images/styles/image0507.png'
            },
            {
                id: '0508',
                title: 'Средневековый',
                description: '',
                imagePath: '/assets/images/styles/image0508.png'
            },
            {
                id: '0509',
                title: 'Викторианский',
                description: '',
                imagePath: '/assets/images/styles/image0509.png'
            },
        ]
    },
    {
        id: '0600',
        name: 'Шик',
        items: [
            {
                id: '0601',
                title: 'Арт Деко',
                description: '',
                imagePath: '/assets/images/styles/image0601.png'
            },
            {
                id: '0602',
                title: 'Голливудский шик',
                description: '',
                imagePath: '/assets/images/styles/image0602.png'
            },
        ]
    },
    {
        id: '0700',
        name: 'Игровые',
        items: [
            {
                id: '0701',
                title: 'Hi-Tech',
                description: '',
                imagePath: '/assets/images/styles/image0701.png'
            },
            {
                id: '0702',
                title: 'Cyberpunk',
                description: '',
                imagePath: '/assets/images/styles/image0702.png'
            },
            {
                id: '0703',
                title: 'Vaporwave',
                description: '',
                imagePath: '/assets/images/styles/image0703.png'
            },
            {
                id: '0704',
                title: 'Hot pink',
                description: '',
                imagePath: '/assets/images/styles/image0704.png'
            },
        ]
    },
    {
        id: '0800',
        name: 'Тропические',
        items: [
            {
                id: '0801',
                title: 'Тропический',
                description: '',
                imagePath: '/assets/images/styles/image0801.png'
            },
            {
                id: '0802',
                title: 'Биофильный',
                description: '',
                imagePath: '/assets/images/styles/image0802.png'
            },
        ]
    }
]
