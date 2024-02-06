import type { NextApiRequest, NextApiResponse } from 'next'
import { inter } from '@/app/ui/fonts';
import { gql, useQuery } from '@apollo/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const GET_ACCOUNTS = gql`
    query Account {
      accounts {
          name
          email
          interests
          accountType
          createdAt
      }
    }
  `;

  const {error, loading, data} = useQuery(GET_ACCOUNTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <main>
           <h1 className="mb-4 text-xl md:text-2xl">
             Accounts
           </h1>
          <div>
            {data.accounts.map((account) => (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.interests}</p>
              </div>
            ))}
          </div>
         </main>
}
