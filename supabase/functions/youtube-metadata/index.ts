import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id')?.trim();
    if (!id || !/^[\w-]{11}$/.test(id)) {
      return new Response(JSON.stringify({ error: 'Invalid or missing video id' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // oEmbed for title + author + thumbnail (reliable, no key)
    const oembedRes = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
    );
    if (!oembedRes.ok) {
      return new Response(JSON.stringify({ error: 'Video not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const oembed = await oembedRes.json();

    // Scrape watch page for uploadDate / datePublished
    let publishDate: string | null = null;
    try {
      const pageRes = await fetch(`https://www.youtube.com/watch?v=${id}`, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9',
        },
      });
      if (pageRes.ok) {
        const html = await pageRes.text();
        const patterns = [
          /"uploadDate":"([^"]+)"/,
          /"publishDate":"([^"]+)"/,
          /itemprop="datePublished"\s+content="([^"]+)"/,
        ];
        for (const p of patterns) {
          const m = html.match(p);
          if (m) {
            publishDate = m[1].slice(0, 10);
            break;
          }
        }
      }
    } catch (_) {
      // ignore, publishDate stays null
    }

    return new Response(
      JSON.stringify({
        id,
        title: oembed.title ?? null,
        author: oembed.author_name ?? null,
        thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        publishDate,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
