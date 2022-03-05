import { ISite } from './../types';
export const sites: ISite[] = [
    {
        id: '1',
        name: 'The first site',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ullam?Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor',
        location: {
            name: 'Australia',
            latitude: -27.55,
            longitude: 153.08,
        },
    },
    {
        id: '2',
        name: 'The Second site',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ullam?',
        location: {
            name: 'Bangladesh',
            latitude: -27.55,
            longitude: 153.08,
        },
    },
];

export default sites;
