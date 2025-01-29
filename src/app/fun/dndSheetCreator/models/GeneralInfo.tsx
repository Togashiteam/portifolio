export class GeneralInfoModel implements GeneralInfo {
  characterName: string;
  race: string;
  classes: ClassLevel[];
  background: string;
  alignment: string;
  experiencePoints: number;
   
  constructor(
    characterName: string = "",
    race: string = "",
    classes: ClassLevel[] = [],
    background: string = "",
    alignment: string = "",
    experiencePoints: number = 0,
  ) {
    this.characterName = characterName;
    this.race = race;
    this.classes = classes;
    this.background = background;
    this.alignment = alignment;
    this.experiencePoints = experiencePoints;
  }

  // Método para exibir informações gerais formatadas
  getFormattedInfo(): string {
    const classInfo = this.classes
      .map((cls) => `${cls.className} (Nível ${cls.level})`)
      .join(", ");

    return `
      Nome: ${this.characterName}
      Raça: ${this.race}
      Classes: ${classInfo}
      Antecedente: ${this.background}
      Tendência: ${this.alignment}
      XP: ${this.experiencePoints}
    `;
  }
}


// Interface para as Informações Gerais do Personagem
export interface GeneralInfo {
  characterName: string;
  race: string;
  classes: ClassLevel[];
  background: string;
  alignment: string;
  experiencePoints: number;
}

interface ClassLevel {
  className: string;
  level: number;
}