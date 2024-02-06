'use client';

import type { NextApiRequest, NextApiResponse } from 'next'
import { inter } from '@/app/ui/fonts';
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
      <ul>
        {response.data.accounts.map((account) => (
          <li key={account.id}>
            <h3>{account.name}</h3>
            <p>{account.email}</p>
            <p>{account.interests}</p>
            <hr />
          </li>
        ))}
      </ul>
    </main>
  )
}
