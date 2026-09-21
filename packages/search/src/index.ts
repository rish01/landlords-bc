/**
 * Postgres FTS adapter lands in PR-14. Never index Private/HR tables.
 */
export interface SearchHit {
  id: string;
  type: string;
  title: string;
  url: string;
}

export interface SearchAdapter {
  index(doc: { id: string; type: string; title: string; body: string }): Promise<void>;
  query(q: string): Promise<SearchHit[]>;
}
