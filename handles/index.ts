import {Handlers} from 'alexa-sdk';

import LaunchRequest from './launch';
import HelloWorldIntent from './helloWorld';

const handles: Handlers = {
  LaunchRequest,
  HelloWorldIntent
}

export default handles;
