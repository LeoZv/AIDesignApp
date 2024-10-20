
export interface Room {
    id: number,
    title: string
    description: string
    imagePath: string
}

export const rooms: Room[] = [
    {
        id: 1,
        title: 'Спальня',
        description: '',
        imagePath: '/assets/images/roomTypes/image1.png'
    },
    {
        id: 2,
        title: 'Гостиная',
        description: '',
        imagePath: '/assets/images/roomTypes/image2.png'
    },
    {
        id: 3,
        title: 'Кухня',
        description: '',
        imagePath: '/assets/images/roomTypes/image3.png'
    },
    {
        id: 4,
        title: 'Ванная',
        description: '',
        imagePath: '/assets/images/roomTypes/image4.png'
    },
    {
        id: 5,
        title: 'Коридор',
        description: '',
        imagePath: '/assets/images/roomTypes/image5.png'
    },

]

