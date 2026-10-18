<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- TikTok scheduling goes through PostZen only from server functions (`src/lib/postzen.server.ts`); the API key never reaches the browser.
- Local tables `tiktok_accounts`/`tiktok_posts` mirror PostZen state per user (RLS by user_id); refresh pulls status/metrics from PostZen on demand.
