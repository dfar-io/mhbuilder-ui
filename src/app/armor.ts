export interface Armor {
    name: string;
    baseDefense: number;
    rank: number;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: number;
}