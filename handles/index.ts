import {Handlers} from 'alexa-sdk';

import LaunchRequest from './launch';
import HelloWorldIntent from './hello';

const handles: Handlers = {
  LaunchRequest,
  HelloWorldIntent
}

export default handles;
