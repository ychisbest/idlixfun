// Comprueba que los enlaces oficiales de src/data/site.json siguen respondiendo.
// Uso: npm run check-links
import { readFileSync } from "node:fs";
const site = JSON.parse(readFileSync(new URL("../src/data/site.json", import.meta.url), "utf8"));
const urls = [...new Set(site.platforms.map((p) => p.url))];
let bad = 0;
for (const url of urls) {
  try {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 15000);
    const r = await fetch(url, { redirect: "follow", signal: ctl.signal, headers: { "user-agent": "Mozilla/5.0 link-check" } });
    clearTimeout(t);
    const ok = r.status < 400 || r.status === 403 || r.status === 429;
    if (!ok) bad++;
    console.log(`${ok ? "OK  " : "FAIL"} ${r.status} ${url}`);
  } catch (e) {
    bad++;
    console.log(`FAIL ERR ${url} ${String(e).slice(0, 60)}`);
  }
}
console.log(bad ? `\n${bad} enlace(s) a revisar` : "\nTodo OK");
process.exit(bad ? 1 : 0);
