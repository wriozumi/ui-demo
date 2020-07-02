const theme = {};

theme.borderRadius = '1rem';

theme.color = {};
theme.color.blueDark = '#6763D0';
theme.color.blueLighter = '#A69AEC';
theme.color.green = '#B4E44A';
theme.color.red = '#F97D7D';
theme.color.yellow = '#FFE39A';
theme.color.pink = '#FCAAAA';
theme.color.teal = '#B0F1DB';
theme.color.white = '#fff';
theme.color.grey = '#A6ACBE';
theme.color.greyDark = '#727171';
theme.color.greyDarker = '#303236';
theme.color.black = '#000';
theme.color.translucentLighter = 'rgba(255, 255, 255, 0.5)';
theme.color.translucentLight = 'rgba(255, 255, 255, 0.3)';
theme.color.translucent = 'rgba(0, 0, 0, 0.1)';
theme.color.translucentDark = 'rgba(0, 0, 0, 0.3)';
theme.color.translucentDarker = 'rgba(0, 0, 0, 0.5)';
theme.color.transparent = 'rgba(0, 0, 0, 0)';
theme.color.primaryLighter = theme.color.greenLighter;
theme.color.primaryLight = theme.color.greenLight;
theme.color.primary = theme.color.green;
theme.color.primaryDark = theme.color.greenDark;
theme.color.accentLighter = theme.color.white;
theme.color.accentLight = theme.color.white;
theme.color.accent = theme.color.white;
theme.color.accentDark = theme.color.white;

theme.fontFamily = {};
theme.fontFamily.roboto = 'Roboto';
theme.fontFamily.averta = 'Averta';

theme.fontSize = {};
theme.fontSize.xxxxxl = '2.625rem';
theme.fontSize.xxxxl = '2rem';
theme.fontSize.xxxl = '1.75rem';
theme.fontSize.xxl = '1.5rem';
theme.fontSize.xl = '1.25rem';
theme.fontSize.l = '1.125rem';
theme.fontSize.m = '1rem';
theme.fontSize.s = '0.875rem';
theme.fontSize.xs = '0.75rem';
theme.fontSize.xxs = '0.625rem';
theme.fontSize.xxxs = '0.5rem';

theme.fontWeight = {};
theme.fontWeight.normal = 400;
theme.fontWeight.medium = 500;
theme.fontWeight.semibold = 600;
theme.fontWeight.bold = 700;

theme.remScale = 0.3125;

theme.rem = (value) => {
  const values = [].concat(value);
  return values
    .map((v) => (typeof v === 'string' ? v : `${v * theme.remScale}rem`))
    .join(' ');
};

export default theme;
