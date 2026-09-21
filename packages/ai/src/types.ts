export type AiProviderName = "spacexai" | "xai" | "none";

export type CompletionPurpose =
  | "resource_assistant"
  | "doc_organize"
  | "issue_summary"
  | "nl_search";

export type Citation = {
  title: string;
  url: string;
  sourceId: string;
  excerpt: string;
};

export type CompletionRequest = {
  purpose: CompletionPurpose;
  memberId: string;
  input: string;
  citations: Citation[];
};

export type CompletionResponse = {
  text: string;
  citationIds: string[];
  refused: boolean;
};

export type AiProvider = {
  name: AiProviderName;
  complete(req: CompletionRequest): Promise<CompletionResponse>;
};
