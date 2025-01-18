export default class CNPJHandler {
  constructor() {
    // Opcional: Pode inicializar algo se necessário
  }

  /**
   * Gera um novo CNPJ válido.
   * @returns {string} Um CNPJ válido.
   */
  public generateCNPJ(): string {
    const randomDigits = (length: number): number[] =>
      Array.from({ length }, () => Math.floor(Math.random() * 10));

    // Gera os primeiros 12 dígitos do CNPJ
    const baseCNPJ = randomDigits(8).concat([0, 0, 0, 1]);

    // Calcula os dígitos verificadores
    const firstVerifier = this.calculateVerifier(baseCNPJ);
    const secondVerifier = this.calculateVerifier([...baseCNPJ, firstVerifier]);

    // Monta o CNPJ completo
    const completeCNPJ = [...baseCNPJ, firstVerifier, secondVerifier].join("");

    // Formata o CNPJ no padrão XX.XXX.XXX/XXXX-XX
    return completeCNPJ.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5",
    );
  }

  /**
   * Valida se um CNPJ é válido.
   * @param cnpj O CNPJ a ser validado.
   * @returns {boolean} Retorna `true` se o CNPJ for válido, caso contrário, `false`.
   */
  public validateCNPJ(cnpj: string): boolean {
    // Remove caracteres não numéricos
    const sanitizedCNPJ = cnpj.replace(/[^\d]/g, "");

    // Valida o tamanho (precisa ter 14 dígitos)
    if (sanitizedCNPJ.length !== 14) {
      return false;
    }

    // Verifica se todos os dígitos são iguais (ex.: 111.111.111/1111-11)
    if (/^(\d)\1+$/.test(sanitizedCNPJ)) {
      return false;
    }

    // Separa os dígitos principais e verificadores
    const digits = sanitizedCNPJ.split("").map(Number);
    const baseCNPJ = digits.slice(0, 12);
    const firstVerifier = digits[12];
    const secondVerifier = digits[13];

    // Calcula os dígitos verificadores esperados
    const calculatedFirstVerifier = this.calculateVerifier(baseCNPJ);
    const calculatedSecondVerifier = this.calculateVerifier([
      ...baseCNPJ,
      calculatedFirstVerifier,
    ]);

    // Compara os dígitos calculados com os fornecidos
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

    if (count > 9999) {
      throw new Error("Número de filiais excede o limite permitido (9999).");
    }

    // Remove os caracteres não numéricos e pega os 8 primeiros dígitos do CNPJ base
    const baseCNPJ = mainCNPJ.replace(/[^\d]/g, "").slice(0, 8);
    const filiais: string[] = [];
    const existing = new Set<string>();

    for (let i = 1; i <= count; i++) {
      // Adiciona o número sequencial com 4 dígitos
      const filialBase = `${baseCNPJ}${i.toString().padStart(4, "0")}`;

      // Calcula os dígitos verificadores
      const firstVerifier = this.calculateVerifier(
        filialBase.split("").map(Number),
      );
      const secondVerifier = this.calculateVerifier(
        `${filialBase}${firstVerifier}`.split("").map(Number),
      );

      // Monta o CNPJ completo
      const completeCNPJ = `${filialBase}${firstVerifier}${secondVerifier}`;

      // Garante que o CNPJ é único
      if (existing.has(completeCNPJ)) continue;

      existing.add(completeCNPJ);

      // Formata o CNPJ para o padrão brasileiro
      filiais.push(
        completeCNPJ.replace(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
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
