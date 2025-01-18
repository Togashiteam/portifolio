

// Modelo com construtor para as Estatísticas de Combate
export class CombatStatsModel implements CombatStats {
  initiative: number;
  armorClass: number;
  movementSpeed: number;

  constructor(
    initiative: number = 0,
    armorClass: number = 10,
    movementSpeed: number = 30,
  ) {
    this.initiative = initiative;
    this.armorClass = armorClass;
    this.movementSpeed = movementSpeed;
  }

  // Método para exibir estatísticas de combate formatadas
  getFormattedCombatStats(): string {
    return `
      Iniciativa: ${this.initiative >= 0 ? "+" : ""}${this.initiative}
      Classe de Armadura: ${this.armorClass}
      Velocidade de Movimento: ${this.movementSpeed} pés
    `;
  }
}

// Interface para representar as Estatísticas de Combate
export interface CombatStats {
  initiative: number; // Modificador de iniciativa (geralmente baseado na Destreza)
  armorClass: number; // Classe de Armadura (CA)
  movementSpeed: number; // Velocidade de movimento em pés (ex.: 30)
}