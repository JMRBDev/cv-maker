import { map, action } from 'nanostores';

interface ICvArrayItem {
    name: string;
    icon?: string;
}

interface ICvBodyItem {
    name: string;
    date: { from: string, to?: string };
    place: string;
    description: string;
}

interface ICvStore {
    image?: string;
    title: string;
    subtitle: string;
    about_me: string;
    skills: ICvArrayItem[];
    languages: ICvArrayItem[];
    contact: ICvArrayItem[];
    education: ICvBodyItem[];
    experience: ICvBodyItem[];
    certs_and_awards: ICvBodyItem[];
    footer: {
        leftContent: string;
        rightContent: string;
    };
}

export const cvStore = map<ICvStore>({
    image: 'data:image/png;base64,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',
    title: 'Nombre Completo',
    subtitle: 'Profesión',
    about_me: 'Descripción personal',
    skills: [
        { name: 'Habilidad 1' },
        { name: 'Habilidad 2' },
    ],
    languages: [
        { name: 'Idioma 1' },
        { name: 'Idioma 2' },
    ],
    contact: [
        { name: 'hello@jmrb.dev', icon: '✉️' },
        { name: '000 00 00 00', icon: '📞' },
    ],
    education: [
        {
            name: 'Educación 1',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aut illum laborum unde fuga. Minus cupiditate earum eum odit.',
            date: {
                from: '2019',
                to: '2021'
            },
            place: 'Lugar 1'
        },
    ],
    experience: [
        {
            name: 'Experiencia 1',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aut illum laborum unde fuga. Minus cupiditate earum eum odit.',
            date: {
                from: '2021',
                to: 'actualidad'
            },
            place: 'Lugar 1'
        },
    ],
    certs_and_awards: [
        {
            name: 'Certificación 1',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aut illum laborum unde fuga. Minus cupiditate earum eum odit.',
            date: { from: '2018' },
            place: 'Lugar 1'
        },
    ],
    footer: {
        leftContent: undefined,
        rightContent: 'Más información en https://jmrb.dev/'
    }
});

export const setProperty = action(cvStore, 'setProperty', (store, property, value) => {
    store.setKey(property, value);
});

export const addArrayItem = action(cvStore, 'addArrayItem', (store, property, item) => {
    const array = store.get()[property];

    store.setKey(property, [...array, item]);
});

export const modifyArrayItem = action(cvStore, 'modifyArrayItem', (store, property, index, item) => {
    const array = store.get()[property];

    store.setKey(property, [...array.slice(0, index), item, ...array.slice(index + 1)]);
});

export const removeArrayItem = action(cvStore, 'removeArrayItem', (store, property, index) => {
    const array = store.get()[property];

    store.setKey(property, [...array.slice(0, index), ...array.slice(index + 1)]);
});