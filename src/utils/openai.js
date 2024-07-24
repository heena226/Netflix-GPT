import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constants';

// Ensure that the OPEN_API_KEY is defined in the environment variables
// if (!OPEN_API_KEY) {
//     throw new Error('OPEN_API_KEY is not defined');
// }

const openai = new OpenAI({
  apiKey: OPEN_AI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true  // To allow the API call from the frontEnd Browser only
});

export default openai;
