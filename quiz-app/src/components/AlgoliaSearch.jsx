import React, { useState } from 'react';
import { liteClient } from 'algoliasearch/lite';

const ALGOLIA_APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID ;
const ALGOLIA_SEARCH_API_KEY = import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY ;
const ALGOLIA_INDEX_NAME = import.meta.env.VITE_ALGOLIA_INDEX_NAME ;

const client = liteClient(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY);

const AlgoliaSearch = () => {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);

  const handleSearch = async () => {
    try {
      const { results } = await client.search([
        {
          indexName: ALGOLIA_INDEX_NAME,
          query: query,
        },
      ]);
      setHits(results[0].hits);
    } catch (error) {
      console.error('Algolia search error:', error);
    }
  };

  return (
    <div>
      <h3>Search for Errors</h3>
      <input 
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {hits.map((hit) => (
          <li key={hit.objectID}>{hit.title || JSON.stringify(hit)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlgoliaSearch;
