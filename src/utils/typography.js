import Typography from "typography";
import bootstrapTheme from "typography-theme-bootstrap";
import wordpress2016Theme from 'typography-theme-wordpress-2016'

bootstrapTheme.baseFontSize = '17px'
bootstrapTheme.baseLineHeight = '2'
bootstrapTheme.scaleRatio = '4'
bootstrapTheme.headerGray = '25'
bootstrapTheme.bodyGrey = '35'
const typography = new Typography(bootstrapTheme);

export default typography;