export class DateUtils {

  static isToday(isoDate: string): boolean {
    const today = new Date().toISOString().split('T')[0];
    return isoDate === today;
  }

  static isBefore(isoDate1: string, isoDate2: string, equals: boolean = true): boolean {
    const d1 = new Date(isoDate1);
    const d2 = new Date(isoDate2);
    if (equals) {
      return d1.getTime() <= d2.getTime();
    }

    return d1.getTime() < d2.getTime();
  }

  static isAfter(isoDate1: string, isoDate2: string, equals: boolean = true): boolean {
    const d1 = new Date(isoDate1);
    const d2 = new Date(isoDate2);
    if (equals) {
      return d1.getTime() >= d2.getTime();
    }

    return d1.getTime() > d2.getTime();
  }

  static getBrDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static getIsoDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  static getIsoToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  static addYears(date: Date, years: number): Date {
    date.setFullYear(date.getFullYear() + years);
    return date;
  }

  static addMonths(date: Date, months: number): Date {
    date.setMonth(date.getMonth() + months);
    return date;
  }

  static addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
}