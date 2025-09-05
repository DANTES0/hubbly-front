import { useDisplay } from 'vuetify'

export function useBreakpoints() {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    smAndDown,
    smAndUp,
    mdAndDown,
    mdAndUp,
    lgAndDown,
    lgAndUp,
    xlAndDown,
    xlAndUp,
  } = useDisplay()

  return {
    isXs: xs,
    isSm: sm,
    isMd: md,
    isLg: lg,
    isXl: xl,
    isXxl: xxl,
    isSmAndDown: smAndDown,
    isSmAndUp: smAndUp,
    isMdAndDown: mdAndDown,
    isMdAndUp: mdAndUp,
    isLgAndDown: lgAndDown,
    isLgAndUp: lgAndUp,
    isXlAndDown: xlAndDown,
    isXlAndUp: xlAndUp,
  }
}
