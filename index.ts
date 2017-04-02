// ────────────────────────────────────────────────────────────────────────────────

import {handler, RequestBody, Context, AlexaObject} from 'alexa-sdk';
import handles from './handles';

// ────────────────────────────────────────────────────────────────────────────────

/**
 * Constructs the AlexaSkill App and attaches handlers
 *
 * @param event - the alexa event request
 * @param context - the context of the request
 * @param callback - the request callback
 */
const AlexaSkill = (event: RequestBody, context: Context, callback?: Function) => {
  const alexa = handler(event, context);
  alexa.registerHandlers(handles);
  alexa.execute();
};

export const app = AlexaSkill;
