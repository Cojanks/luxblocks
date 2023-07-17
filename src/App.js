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
<Block type="action_motor_forward" />
</xml>
      `}
      >
        <Category name="Actions">
          <Block type="action_motor_forward" />
          <Block type="action_motor_backward" />
          <Block type="action_turn_left" />
          <Block type="action_turn_right" />
        </Category>

        <Category name="Logic">
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
  );
}

export default App;
