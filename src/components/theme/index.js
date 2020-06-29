const theme = {};

theme.borderRadius = '2px';

theme.color = {};
theme.color.blueDark = '#6763D0';
theme.color.blueLighter = '#A69AEC';
theme.color.green = '#B4E44A';
theme.color.red = '#F97D7D';
theme.color.yellow = '#FFE39A';
theme.color.pink = '#FCAAAA';
theme.color.teal = '#B0F1DB';
theme.color.white = '#ffffff';
theme.color.grey = '#A6ACBE';
theme.color.greyDark = '#727171';
theme.color.greyDarker = '#303236';
theme.color.black = '#000000';
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
theme.fontSize.xxxxl = '32px';
theme.fontSize.xxxl = '28px';
theme.fontSize.xxl = '24px';
theme.fontSize.xl = '20px';
theme.fontSize.l = '18px';
theme.fontSize.m = '16px';
theme.fontSize.s = '14px';
theme.fontSize.xs = '12px';
theme.fontSize.xxs = '10px';
theme.fontSize.xxxs = '8px';

theme.fontWeight = {};
theme.fontWeight.normal = 400;
theme.fontWeight.medium = 500;
theme.fontWeight.semibold = 600;
theme.fontWeight.bold = 700;

theme.pxScale = 8;

theme.px = (value) => {
  const values = [].concat(value);
  return values
    .map((v) => typeof v === 'string' ? v : `${v * theme.pxScale}px`)
    .join(' ');
};

export default theme;