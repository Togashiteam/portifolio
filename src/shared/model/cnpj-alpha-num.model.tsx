export default class CNPJHandlerAlphaNum {
  constructor() {
  }

  /**
   * Gera um novo CNPJ válido.
   * @returns {string} Um CNPJ válido.
   */
  public generateCNPJ(): string {
    const randomAlphanumeric = (length: number): string[] =>
      Array.from(
        { length },
        () =>
          Math.random() < 0.5
            ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) // Letra maiúscula (A-Z)
            : String.fromCharCode(48 + Math.floor(Math.random() * 10)), // Dígito (0-9)
      );

    const baseCNPJ = randomAlphanumeric(8).concat(["0", "0", "0", "1"]);

    const numericBase = baseCNPJ.map((char) =>
      isNaN(parseInt(char, 10)) ? char.charCodeAt(0) % 10 : parseInt(char, 10),
    );
    const firstVerifier = this.calculateVerifier(numericBase);
    const secondVerifier = this.calculateVerifier([
      ...numericBase,
      firstVerifier,
    ]);

    const completeCNPJ = baseCNPJ.join("") + firstVerifier + secondVerifier;

    return completeCNPJ.replace(
      /^([A-Z0-9]{2})([A-Z0-9]{3})([A-Z0-9]{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5",
    );
  }

  /**
   * Valida se um CNPJ alfanumérico é válido.
   * @param cnpj O CNPJ a ser validado.
   * @returns {boolean} Retorna `true` se o CNPJ for válido, caso contrário, `false`.
   */
  public validateCNPJ(cnpj: string): boolean {
    const sanitizedCNPJ = cnpj.replace(/[^\w]/g, "");

    if (sanitizedCNPJ.length !== 14) {
      return false;
    }

    if (/^([A-Z0-9])\1+$/.test(sanitizedCNPJ)) {
      return false;
    }

    const baseCNPJ = sanitizedCNPJ
      .slice(0, 12)
      .split("")
      .map((char) =>
        isNaN(parseInt(char, 10))
          ? char.charCodeAt(0) % 10
          : parseInt(char, 10),
      );
    const firstVerifier = parseInt(sanitizedCNPJ[12], 10);
    const secondVerifier = parseInt(sanitizedCNPJ[13], 10);

    const calculatedFirstVerifier = this.calculateVerifier(baseCNPJ);
    const calculatedSecondVerifier = this.calculateVerifier([
      ...baseCNPJ,
      calculatedFirstVerifier,
    ]);

    return (
      firstVerifier === calculatedFirstVerifier &&
      secondVerifier === calculatedSecondVerifier
    );
  }

  /**
   * Gera um array de CNPJs de filiais para um CNPJ válido.
   * @param mainCNPJ O CNPJ principal.
   * @param count Número de filiais a serem geradas.
   * @returns {string[]} Array de CNPJs de filiais.
   */
  public generateFiliais(mainCNPJ: string, count: number): string[] {
    if (!this.validateCNPJ(mainCNPJ)) {
      throw new Error("CNPJ principal inválido.");
    }

    if (count > 999) {
      throw new Error("Número de filiais excede o limite permitido (9999).");
    }

    const baseCNPJ = mainCNPJ.replace(/[^\w]/g, "").slice(0, 8);
    const filiais: string[] = [];
    const existing = new Set<string>();

    for (let i = 1; i <= count; i++) {
      const filialBase = `${baseCNPJ}${i.toString().padStart(4, "0")}`;

      const numericBase = filialBase
        .split("")
        .map((char) =>
          isNaN(parseInt(char, 10))
            ? char.charCodeAt(0) % 10
            : parseInt(char, 10),
        );

      const firstVerifier = this.calculateVerifier(numericBase);
      const secondVerifier = this.calculateVerifier([
        ...numericBase,
        firstVerifier,
      ]);

      const completeCNPJ = `${filialBase}${firstVerifier}${secondVerifier}`;

      if (existing.has(completeCNPJ)) continue;

      existing.add(completeCNPJ);

      filiais.push(
        completeCNPJ.replace(
          /^([A-Z0-9]{2})([A-Z0-9]{3})([A-Z0-9]{3})(\d{4})(\d{2})$/,
          "$1.$2.$3/$4-$5",
        ),
      );
    }

    return filiais;
  }

  /**
   * Valida um array de CNPJs de filiais para um CNPJ principal.
   * @param mainCNPJ O CNPJ principal.
   * @param filialCNPJs Array de CNPJs de filiais.
   * @returns {Array<{ id: number, cnpj: string, isValid: boolean }>}
   */
  public validateFiliais(
    mainCNPJ: string,
    filialCNPJs: string[],
  ): { id: number; cnpj: string; isValid: boolean }[] {
    if (!this.validateCNPJ(mainCNPJ)) {
      throw new Error("CNPJ principal inválido.");
    }

    const mainBase = mainCNPJ.replace(/[^\d]/g, "").slice(0, 8);

    return filialCNPJs.map((cnpj, index) => {
      const sanitizedCNPJ = cnpj.replace(/[^\d]/g, "");
      const isValid =
        this.validateCNPJ(sanitizedCNPJ) && sanitizedCNPJ.startsWith(mainBase);

      return { id: index + 1, cnpj, isValid };
    });
  }

  /**
   * Calcula um dígito verificador para o CNPJ.
   * @param digits Os dígitos do CNPJ.
   * @returns {number} O dígito verificador calculado.
   */
  private calculateVerifier(digits: number[]): number {
    const weights =
      digits.length === 12
        ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const sum = digits.reduce(
      (acc, digit, idx) => acc + digit * weights[idx],
      0,
    );
    const remainder = sum % 11;

    return remainder < 2 ? 0 : 11 - remainder;
  }
}
