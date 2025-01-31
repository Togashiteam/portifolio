export interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface Race {
  index: string;
  name: string;
  url: string;
  ability_bonuses?: Array<{
    ability_score: {
      index: string;
      name: string;
    };
    bonus: number;
  }>;
  alignment?: string;
  age?: string;
}

export interface Class {
  index: string;
  name: string;
  url: string;
  hit_die?: number;
  proficiency_choices?: Array<{
    from: Array<{
      index: string;
      name: string;
      url: string;
    }>;
    type: string;
    choose: number;
  }>;
}