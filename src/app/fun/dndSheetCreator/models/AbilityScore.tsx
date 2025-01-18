
export class AbilityScoresModel implements AbilityScores {
  strength: AbilityScore;
  dexterity: AbilityScore;
  constitution: AbilityScore;
  intelligence: AbilityScore;
  wisdom: AbilityScore;
  charisma: AbilityScore;

  constructor(
    strength: number = 10,
    dexterity: number = 10,
    constitution: number = 10,
    intelligence: number = 10,
    wisdom: number = 10,
    charisma: number = 10,
  ) {
    this.strength = this.createAbilityScore("Força", strength);
    this.dexterity = this.createAbilityScore("Destreza", dexterity);
    this.constitution = this.createAbilityScore("Constituição", constitution);
    this.intelligence = this.createAbilityScore("Inteligência", intelligence);
    this.wisdom = this.createAbilityScore("Sabedoria", wisdom);
    this.charisma = this.createAbilityScore("Carisma", charisma);
  }

  private createAbilityScore(name: string, value: number): AbilityScore {
    return {
      name,
      value,
      modifier: this.calculateModifier(value),
    };
  }

  private calculateModifier(value: number): number {
    return Math.floor((value - 10) / 2);
  }

  // Método para exibir os atributos formatados
  getFormattedScores(): string {
    return `
      Força: ${this.strength.value} (Mod: ${this.strength.modifier})
      Destreza: ${this.dexterity.value} (Mod: ${this.dexterity.modifier})
      Constituição: ${this.constitution.value} (Mod: ${this.constitution.modifier})
      Inteligência: ${this.intelligence.value} (Mod: ${this.intelligence.modifier})
      Sabedoria: ${this.wisdom.value} (Mod: ${this.wisdom.modifier})
      Carisma: ${this.charisma.value} (Mod: ${this.charisma.modifier})
    `;
  }
}

// Interface para representar um Atributo Principal
export interface AbilityScore {
  name: string; // Nome do atributo (ex.: "Força")
  value: number; // Valor base do atributo (ex.: 15)
  modifier: number; // Modificador calculado (ex.: +2)
}

// Interface para representar todos os Atributos Principais
export interface AbilityScores {
  strength: AbilityScore;
  dexterity: AbilityScore;
  constitution: AbilityScore;
  intelligence: AbilityScore;
  wisdom: AbilityScore;
  charisma: AbilityScore;
}