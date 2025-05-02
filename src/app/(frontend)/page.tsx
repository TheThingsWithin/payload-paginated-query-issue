import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config' 

import './styles.css'

export default async function HomePage() {
  const payload = await getPayload({ config: config });

  const LIMIT = 10;

  const someDate = new Date();

  const articlesFirstPage = await payload.find({
    collection: "articles",
    where: {
      "someList.someSelect": {
        equals: "option1"
      },
      "someList.someDate": {
        less_than_equal: someDate.toISOString()
      }
    },
    limit: LIMIT,
    pagination: true,
    page: 1,
  });

  const articlesSecondPage = await payload.find({
    collection: "articles",
    where: {
      "someList.someSelect": {
        equals: "option1"
      },
      "someList.someDate": {
        less_than_equal: someDate.toISOString()
      }
    },
    limit: LIMIT,
    pagination: true,
    page: 2,
  });
  
  const articlesWihtoutPagination = await payload.find({
    collection: "articles",
    where: {
      "someList.someSelect": {
        equals: "option1"
      },
      "someList.someDate": {
        less_than_equal: someDate.toISOString()
      }
    },
    pagination: false,
  });


  return (
    <section style={{ paddingInline: "50px", paddingBlock: "20px" }}>
      <h1>Articles</h1>
      <p>Limit: {LIMIT}</p>
      <hr />
      <article>
        <h2>First Page</h2>
        <p>Total Docs: {articlesFirstPage.totalDocs}</p>
        <p>docs.length: {articlesFirstPage.docs.length}</p>
        <p>page: {articlesFirstPage.page}</p>
        <p>totalPages: {articlesFirstPage.totalPages}</p>
        <p>
          IDs: {JSON.stringify(articlesFirstPage.docs.map(doc => doc.id))}
        </p>
      </article>
      <hr />
      <article>
        <h2>Second Page</h2>
        <p>Total Docs: {articlesSecondPage.totalDocs}</p>
        <p>docs.length: {articlesSecondPage.docs.length}</p>
        <p>page: {articlesSecondPage.page}</p>
        <p>totalPages: {articlesSecondPage.totalPages}</p>
        <p>
          IDs: {JSON.stringify(articlesSecondPage.docs.map(doc => doc.id))}
        </p>
      </article>
      <hr />
      <article>
        <h2>Without Pagination</h2>
        <p>Total Docs: {articlesWihtoutPagination.totalDocs}</p>
        <p>docs.length: {articlesWihtoutPagination.docs.length}</p>
        {/* <p>
          IDs: {JSON.stringify(articlesWihtoutPagination.docs.map(doc => doc.id))}
        </p> */}
      </article>
    </section>
  )
}
