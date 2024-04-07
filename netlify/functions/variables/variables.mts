/* import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {

  const myImportantVariable =process.env.IMPORTANT_VARIABLE;

  if(!myImportantVariable){
    return new Response ("Missing myImportantVariable");
  }
  const body: any = {
    variable : myImportantVariable
  }

    
  return new Response(body);
} */

import type { Handler } from "@netlify/functions"
import { error } from "console";

export const handler: Handler = async (event, context) => {

    const myImportantVariable =process.env.IMPORTANT_VARIABLE;

    if(!myImportantVariable){
        return {
            body: JSON.stringify({ message: 'MISSIN VARIABLE' }),
            statusCode: 500,
          }
      }
  return {
    body: JSON.stringify({ message: myImportantVariable }),
    statusCode: 200,
  }
}