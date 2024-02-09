import type { NextApiRequest, NextApiResponse } from 'next'
import { inter } from '@/app/ui/fonts';
import { Card } from '@/app/ui/dashboard/cards';
import { gql, useQuery } from "@apollo/client";
import client from "@/app/lib/apollo";

export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse) {

  const QUERY = gql`
    query Account {
      accounts {
        name
        email
        accountType
        createdAt
      }
    }
  `;

  const { data } = await client.query({
    query: QUERY,
  });

  return (
    <main>
       <h1 className={`${inter.className} mb-4 text-xl
                        md:text-2xl`}>
         Dashboard
       </h1>
       <div className={`${inter.className} grid gap-6
                        sm:grid-cols-2 lg:grid-cols-4`}>
         {<Card
           title="Total Accounts"
           value={data.accounts.length}
           type="invoices"
         />}
       </div>
     </main>
  )
}
