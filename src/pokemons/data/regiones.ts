export interface Region {
    name: string;
    limit: number;
    offset: number;
}

export const Regiones: Region[] = [
    {
        name: 'Kanto',
        limit: 151,
        offset: 0,
    },
    {
        name: 'Johto',
        limit: 100,
        offset: 151,
    },
    {
        name: 'Hoenn',
        limit: 135,
        offset: 251,
    },
    {
        name: 'Sinnoh',
        limit: 107,
        offset: 386,
    },
    {
        name: 'Unova',
        limit: 156,
        offset: 493,
    },
    {
        name: 'Kalos',
        limit: 72,
        offset: 649,
    },
    {
        name: 'Alola',
        limit: 86,
        offset: 721,
    },
    {
        name: 'Galar',
        limit: 89,
        offset: 807,
    },
];