let React = require('react');
let { AppBar, DropDownMenu } = require('material-ui');
let IconButton = require('icon-button');
let NavigationClose = require('svg-icons/navigation/close');
let FlatButton = require('flat-button');
let ComponentDoc = require('../../component-doc');
let CodeExample = require('../../code-example/code-example');
let Code = require('app-bar-code');
const IconMenu = require('menus/icon-menu');
const MenuItem = require('menus/menu-item');
const MoreVertIcon = require('svg-icons/navigation/more-vert');

export default class AppBarPage extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'App bars are a collection of components placed as a static ' +
                'header for an application. It is used for navigation, search ' +
                'branding, and actions. An app bar is also referred to as the ' +
                'primary toolbar or action bar for Android.';

    this.componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'iconClassNameLeft',
            type: 'string',
            header: 'optional',
            desc: 'The classname of the icon on the left of the app bar. If you ' +
                  'are using a stylesheet for your icons, enter the class name ' +
                  'for the icon to be used here.',
          },
          {
            name: 'iconClassNameRight',
            type: 'string',
            header: 'optional',
            desc: 'Similiar to the iconClassNameLeft prop except that it applies ' +
                  'to the icon displayed on the right of the app bar.',
          },
          {
            name: 'iconElementLeft',
            type: 'element',
            header: 'optional',
            desc: 'The custom element to be displayed on the left side of the ' +
                  'app bar such as an SvgIcon.',
          },
          {
            name: 'iconElementRight',
            type: 'element',
            header: 'optional',
            desc: 'Similiar to the iconElementLeft prop except that this element ' +
                  'is displayed on the right of the app bar.',
          },
          {
            name: 'iconStyleRight',
            type: 'string',
            header: 'optional',
            desc: 'Override the inline-styles of the element displayed on the right side of the app bar.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the app bars\'s root element.',
          },
          {
            name: 'showMenuIconButton',
            type: 'boolean',
            header: 'default: true',
            desc: 'Determines whether or not to display the Menu icon next to ' +
                  'the title. Setting this prop to false will hide the icon.',
          },
          {
            name: 'title',
            type: 'node',
            header: 'optional',
            desc: 'The title to display on the app bar. Could be number, string, element or an array containing these types.',
          },
          {
            name: 'zDepth',
            type: 'number',
            header: 'default: 1',
            desc: 'The zDepth of the app bar. The shadow of the app bar is also ' +
                  'dependent on this property.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onLeftIconButtonTouchTap',
            header: 'AppBar.onLeftIconButtonTouchTap(e)',
            desc: 'Callback function for when the left icon is selected via ' +
                  'a touch tap.',
          },
          {
            name: 'onRightIconButtonTouchTap',
            header: 'AppBar.onRightIconButtonTouchTap(e)',
            desc: 'Callback function for when the right icon is selected via ' +
                  'a touch tap.',
          },
        ],
      },
    ];
  }

  render() {
    return (
      <ComponentDoc
        name="AppBar"
        desc={this.desc}
        componentInfo={this.componentInfo}>
        <CodeExample code={Code}>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <br />
          <AppBar
            title="Title"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<FlatButton label="Save" />} />
          <br />
          <AppBar
            title="Title"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={
              <IconMenu iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }>
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>
          } />
        </CodeExample>
      </ComponentDoc>
    );
  }

}
