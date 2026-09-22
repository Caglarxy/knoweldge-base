-- Knowledge Base SQLite cleanup script
-- Default behavior: remove all business data and keep the initialization
-- administrator account named "admin".
--
-- Stop the main service and MCP services before running this script.
-- This script only clears database records. It does not delete files under
-- backend/data/storage/.

PRAGMA foreign_keys = OFF;

BEGIN IMMEDIATE TRANSACTION;

DELETE FROM audit_logs;
DELETE FROM mcp_tokens;
DELETE FROM team_space_members;
DELETE FROM knowledge_base_viewers;
DELETE FROM documents;
DELETE FROM folders;
DELETE FROM team_spaces;
DELETE FROM knowledge_bases;
DELETE FROM system_settings;
DELETE FROM users
WHERE username <> 'admin';

COMMIT;

PRAGMA foreign_keys = ON;

