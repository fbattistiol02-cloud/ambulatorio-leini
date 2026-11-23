// Porta sempre a https://<dominio> senza www (301), poi serve i file statici del sito.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let changed = false;
    if (url.protocol === "http:") {
      url.protocol = "https:";
      changed = true;
    }
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      changed = true;
    }
    if (changed) return Response.redirect(url.toString(), 301);
    return env.ASSETS.fetch(request);
  },
};
