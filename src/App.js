import React from 'react';
import './App.css';

import logo from './assets/logo.webp';

import BlocklyComponent, {
  Block,
  Value,
  Field,
  Shadow,
  Category,
} from './Blockly';

import './blocks/customblocks';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        {' '}
        <BlocklyComponent
          readOnly={false}
          trashcan={true}
          media={'media/'}
          renderer="zelos"
          theme="zelos"
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<Block type="action_motor_forward_by_step" />
</xml>
      `}
        >
          <Category name="Actions" colour="rgb(255, 51, 85)">
            <Block type="action_motor_forward" />
            <Block type="action_motor_backward" />
            <Block type="action_motor_stop" />
            <Block type="action_motor_forward_by_step" />
            <Block type="action_motor_backward_by_step" />
            <Block type="action_turn_left" />
            <Block type="action_turn_right" />
            <Block type="action_wait" />
          </Category>
          <Category name="Logic" colour="rgb(11, 142, 105)">
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>
        </BlocklyComponent>
      </div>
    </div>
  );
}

export default App;
