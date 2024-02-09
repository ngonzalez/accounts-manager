"use client";

import type { NextApiRequest, NextApiResponse } from 'next';
import { inter } from '@/app/ui/fonts';
import { Card } from '@/app/ui/dashboard/cards';
import { gql, useQuery } from "@apollo/client";
import client from "@/app/lib/apollo";
import React from "react";
import {
  Spacer,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

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
      <Spacer y={4} />
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>INTERESTS</TableColumn>
          <TableColumn>TYPE</TableColumn>
          <TableColumn>CREATED AT</TableColumn>
        </TableHeader>
        <TableBody>
          {data.accounts.map(function(account, i) {
            return (
              <TableRow key="{i}">
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.email}</TableCell>
                <TableCell>{account.interests}</TableCell>
                <TableCell>{account.accountType}</TableCell>
                <TableCell>{account.createdAt}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </main>
  )
}
