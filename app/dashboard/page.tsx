'use client';

import { useState } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next'
import { inter } from '@/app/ui/fonts';
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  let [response, setResponse] = useState([])

  await axios.post(
    "http://127.0.0.1:3000/graphql",
    {
      // Stuck here on searchType
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
  ).then((result) => {
    response = result.data;
  });

  console.log(response);

}
