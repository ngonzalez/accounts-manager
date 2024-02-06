'use client';

import type { NextApiRequest, NextApiResponse } from 'next'
import { inter } from '@/app/ui/fonts';
import { Card } from '@/app/ui/dashboard/cards';
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  let response = await axios.post(
    "http://127.0.0.1:3000/graphql",
    {
      query: `
        query Account {
          accounts {
            name
            email
            interests
            accountType
            createdAt
          }
        }
      `,
    }
  ).then(function(accounts_json) {
    return accounts_json.data;
  });

  return (
    <main>
       <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
         Dashboard
       </h1>
       <div className={`${inter.className} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
         {<Card
           title="Total Accounts"
           value={response.data.accounts.length}
           type="invoices"
         />}
       </div>
     </main>
  )
}
