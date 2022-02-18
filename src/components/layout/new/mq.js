export const bp = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = {
  xsv: bp.xs,
  smv: bp.sm,
  mdv: bp.md,
  lgv: bp.lg,
  xlv: bp.xl,
  xs: `@media (min-width: ${bp.xs}px)`,
  sm: `@media (min-width: ${bp.sm}px)`,
  md: `@media (min-width: ${bp.md}px)`,
  lg: `@media (min-width: ${bp.lg}px)`,
  xl: `@media (min-width: ${bp.xl}px)`,
};

export default mq;
