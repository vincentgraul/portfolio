export default class Breakpoints {
  public static isDesktop(): boolean {
    return window.matchMedia("(min-width: 1281px)").matches;
  }

  public static isLaptop(): boolean {
    return window.matchMedia("(min-width: 1025px) and (max-width: 1280px)")
        .matches;
  }

  public static isLaptopOrUpper(): boolean {
    return window.matchMedia("(min-width: 1025px)").matches;
  }

  public static isLaptopOrLower(): boolean {
    return window.matchMedia("(max-width: 1280px)").matches;
  }

  public static isTablet(): boolean {
    return window.matchMedia("(min-width: 768px) and (max-width: 1024px)")
        .matches;
  }

  public static isTabletOrUpper(): boolean {
    return window.matchMedia("(min-width: 768px)").matches;
  }

  public static isTabletOrLower(): boolean {
    return window.matchMedia("(max-width: 1024px)").matches;
  }

  public static isLargeMobile(): boolean {
    return window.matchMedia("(min-width: 481px) and (max-width: 767px)")
        .matches;
  }

  public static isLargeMobileOrUpper(): boolean {
    return window.matchMedia("(min-width: 481px)").matches;
  }

  public static isLargeMobileOrLower(): boolean {
    return window.matchMedia("(max-width: 767px)").matches;
  }

  public static isMobile(): boolean {
    return window.matchMedia("(min-width: 320px) and (max-width: 480px)")
        .matches;
  }

  public static isLandscape(): boolean {
    return window.matchMedia("(orientation: landscape)").matches;
  }

  public static isPortrait(): boolean {
    return window.matchMedia("(orientation: portrait)").matches;
  }
}
