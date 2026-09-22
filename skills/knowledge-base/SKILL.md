---
name: knowledge-base
description: Search and read authorized knowledge-base content through the configured REST API tools using the API connection's Bearer authentication. Use for questions that require internal documents. Do not use for uploads, deletes, moves, renames, permission changes, or other write operations.
metadata:
  short-description: Search and read authorized knowledge-base documents
---

# Knowledge Base Skill

## Prerequisite

The agent must have the knowledge-base REST API imported as an OpenAPI/API tool
connection before using this Skill.

Configure the API connection separately from this Skill:

| Environment | API base URL | OpenAPI import URL |
| --- | --- | --- |
| Development | `http://192.168.84.193:9030` | `http://192.168.84.193:9030/openapi.json` |
| Production | `http://服务器IP:8030` | `http://服务器IP:8030/openapi.json` |

Replace the server address with the actual routable address when it changes.
Never use `127.0.0.1` for a remote agent.

## Authentication

Use the API connection's **Bearer Token** authentication. The Skill does not
retrieve or generate the token itself.

The API connection must store the token as a protected secret and automatically
add this request header to every REST API call:

```http
Authorization: Bearer <access_token>
```

The token is not part of this Skill. Do not put it in this file, in a prompt,
in a tool argument, or in a public OpenAPI document.

### Token Source And Storage

The token source is the logged-in user's knowledge-base account:

1. Open the knowledge-base frontend.
2. Open `http://<knowledge-base-server>:9017/mcp-token.html` in development,
   or use port `8017` in production.
3. Click **获取 access_token**.
4. Copy the returned complete token into the agent platform's protected
   API/OpenAPI connection credential.

The API/OpenAPI connection is the only place where the token is stored. The
model does not need to know the token value, read browser storage, call the
token page, or add an `Authorization` argument. Before using this Skill, the
platform administrator must import the REST API OpenAPI document and bind that
connection's Bearer credential to the imported tools.

Recommended configuration:

1. Log in to the knowledge-base frontend.
2. Open `/mcp-token.html`.
3. Click to issue an access token.
4. Save the returned token in the agent platform's protected API connection
   credential field, not in the Skill.
5. Import the OpenAPI document from the environment-specific URL above.
6. Select `Bearer Token` or `HTTP Bearer` as the authentication type.
7. Verify that the platform sends the `Authorization` header automatically.

Use the user's own token so the API returns only that user's authorized
knowledge bases and documents. Do not share one user's token with other users.

If the token expires or is revoked, update the protected API connection
credential. Do not ask the user to paste a token into the conversation.

## Available API Tools

After importing the OpenAPI document, use these stable operation names:

| Tool | HTTP request | Required input | Purpose |
| --- | --- | --- | --- |
| `list_knowledge_bases` | `GET /api/v1/agent/knowledge-bases` | none | List knowledge bases visible to the current user |
| `search_knowledge` | `POST /api/v1/agent/search` | `query` | Search visible document metadata and content |
| `get_document` | `GET /api/v1/agent/documents/{document_id}` | `document_id` | Read document metadata and a short summary |
| `get_document_markdown` | `GET /api/v1/agent/documents/{document_id}/markdown` | `document_id` | Read the document as Markdown |
| `download_document` | `GET /api/v1/agent/documents/{document_id}/download` | `document_id` | Download the original file when explicitly requested |

The platform may display a vendor-specific wrapper name. If so, map the wrapper
to the operation by HTTP method and path. Do not call an operation that is not
present in the imported API connection.

## How to Call the Tools

These are tool calls, not messages to the user. Authentication is injected by
the API connection, so no authentication field belongs in the arguments.

### List accessible knowledge bases

```json
{
  "tool": "list_knowledge_bases",
  "arguments": {
    "page": 1,
    "page_size": 100
  }
}
```

Use this when the user asks what knowledge bases are available, or when the
target knowledge base is unclear. `page` and `page_size` are optional.

Only use knowledge bases returned in `items`. Do not assume that a knowledge
base exists because the user mentions its name.

### Search documents

```json
{
  "tool": "search_knowledge",
  "arguments": {
    "query": "实验方案",
    "knowledge_base_id": null,
    "folder_id": null,
    "limit": 10
  }
}
```

Call `search_knowledge` with a concise search phrase. The valid range for
`limit` is 1 to 50. Pass `knowledge_base_id` when the user identifies a
specific accessible knowledge base. Pass `folder_id` only when a known folder
is part of the request; otherwise use `null`.

For a long user question, extract one to three meaningful search phrases and
make separate calls only when the first search is insufficient.

### Read a document summary

```json
{
  "tool": "get_document",
  "arguments": {
    "document_id": 123
  }
}
```

Use this when a search result needs basic metadata or a short summary.

### Read Markdown content

```json
{
  "tool": "get_document_markdown",
  "arguments": {
    "document_id": 123,
    "max_chars": 30000
  }
}
```

Call this after search when the answer depends on document details, when the
user asks for a summary or explanation, or when the result is important
evidence. `max_chars` must be between 1000 and 100000.

If the response contains `truncated: true`, state that the content was
truncated and do not claim to have read the omitted part.

### Download the original file

```json
{
  "tool": "download_document",
  "arguments": {
    "document_id": 123
  }
}
```

Only call this when the user explicitly asks to download, export, or obtain the
original file. Do not download a document merely to answer a question.

## Required Workflow

For an internal-document question:

1. If the target knowledge base is unclear, call `list_knowledge_bases`.
2. Extract concise search phrases from the user question.
3. Call `search_knowledge`.
4. Select relevant document IDs from the returned `results`.
5. Call `get_document_markdown` for important or detail-dependent results.
6. Answer only from returned content.
7. Cite the document name, knowledge base, folder path when available, and
   update time.

Do not call every tool automatically. If the user already identifies a
knowledge base, search it directly when its ID is available.

## Answer Rules

- Use only data returned by the API for internal facts.
- Treat search snippets as relevance evidence, not full text.
- Never infer document content from a file name, folder name, or general
  knowledge.
- If no result is found, say that no matching content was found in the
  knowledge bases accessible to the current user.
- If documents conflict, identify each document and its update time.
- Never expose tokens, passwords, JWT secrets, database details, local storage
  paths, raw request headers, or stack traces.
- Do not repeatedly retry an unavailable service.

Recommended response:

```text
结论：
根据知识库资料，……

依据：
- 文档：文档名称
  知识库：知识库名称
  文件夹：文件夹路径（如果有）
  更新时间：更新时间
  依据：相关内容
```

## Permission Boundary

The API filters knowledge bases, folders, documents, metadata, Markdown content,
and downloads by the authenticated user. Never bypass this boundary by changing
an ID or requesting a resource that was not returned by the API.

This Skill is read-only. Do not use it to upload, delete, move, rename, change
permissions, or empty the recycle bin. For those requests, direct the user to
the knowledge-base frontend.

## Error Handling

- `401`: tell the user that the API connection is unauthenticated, expired, or
  revoked; do not ask for a token in chat.
- `403`: tell the user that the current account lacks permission; do not retry
  with another identity.
- `404`: say that the resource does not exist or is hidden by permissions.
- `422`: correct the request arguments and retry once.
- `5xx`: report temporary service unavailability and stop repeated retries.
