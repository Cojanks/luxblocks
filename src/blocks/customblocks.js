/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

import * as Blockly from 'blockly/core';

// Motor
var motorForward = {
  type: 'action_motor_forward',
  message0: 'Motor Forward',
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['action_motor_forward'] = {
  init: function () {
    this.jsonInit(motorForward);
    this.setStyle('procedure_blocks');
  },
};

var motorBackward = {
  type: 'action_motor_forward',
  message0: 'Motor Backward',
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['action_motor_backward'] = {
  init: function () {
    this.jsonInit(motorBackward);
    this.setStyle('procedure_blocks');
  },
};

var motorForwardByStep = {
  type: 'action_motor_forward_by_step',
  message0: 'Motor Forward %1 Steps',
  args0: [
    {
      type: 'field_number',
      name: 'STEP',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['action_motor_forward_by_step'] = {
  init: function () {
    this.jsonInit(motorForwardByStep);
    this.setStyle('procedure_blocks');
  },
};

var motorBackwardByStep = {
  type: 'action_motor_backward_by_step',
  message0: 'Motor Backward %1 Steps',
  args0: [
    {
      type: 'field_number',
      name: 'STEP',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['action_motor_backward_by_step'] = {
  init: function () {
    this.jsonInit(motorBackwardByStep);
    this.setStyle('procedure_blocks');
  },
};

// Turn
var turnLeft = {
  type: 'action_turn_left',
  message0: 'Turn Left',
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['action_turn_left'] = {
  init: function () {
    this.jsonInit(turnLeft);
    this.setStyle('procedure_blocks');
  },
};

var turnRight = {
  type: 'action_turn_right',
  message0: 'Turn Right',
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['action_turn_right'] = {
  init: function () {
    this.jsonInit(turnRight);
    this.setStyle('procedure_blocks');
  },
};

// Other Actions
var wait = {
  type: 'action_wait',
  message0: 'Wait %1 seconds',
  args0: [
    {
      type: 'field_number',
      name: 'wait',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['action_wait'] = {
  init: function () {
    this.jsonInit(wait);
    this.setStyle('procedure_blocks');
  },
};
