import React from 'react';

import Section from './Section';
import Highlight from './Highlight';

class Submenus extends React.Component {
  render() {
    return (
      <Section id="doc-submenus">
        <h4>Submenus</h4>
        <p>
          Using the standard Bootstap 'collapse' function, the offcanvas can
          also contain menu options with submenu options.
        </p>
        <Highlight>
          {
            '<!--option with submenu-->\n<li class="collapse litop4">\n  <a href="#otherControls" class="bootcards-parent" data-toggle="collapse" data-parent=".collapse">\n    <i class="fa fa-lg fa-fw fa-chevron-circle-right"></i> Settings\n  </a>\n  <div id="otherControls" class="collapse in">\n    <ul class="nav navmenu-nav"><li >\n      <a href="#" ><i class="fa fa-lg fa-fw fa-cog"></i> General</a></li>\n    <li>\n      <a href="#"><i class="fa fa-lg fa-fw fa-user"></i> Account</a>\n    </li>\n     <li>\n      <a href="#"><i class="fa fa-lg fa-fw fa-refresh"></i> Sync</a>\n    </li>\n    </ul>\n  </div>\n</li>'
          }
        </Highlight>
        <p>
          Enable the collapsible menu using the following script:{' '}
          <code>$('.collapse').collapse();</code>
        </p>
        <p>
          For more details, see{' '}
          <a
            href="http://getbootstrap.com/javascript/#collapse"
            target="_blank"
          >
            here
          </a>.
        </p>
      </Section>
    );
  }
}

export default Submenus;
