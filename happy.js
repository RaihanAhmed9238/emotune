// to-do list
document.getElementById('add').addEventListener('click', () => {
    let inp = document.getElementById('item');
    let check = document.createElement('input');
    check.type = 'checkbox';
    let label = document.createElement('label');
    label.textContent = inp.value;
    label.prepend(check);
    inp.value = '';
    document.getElementById('list').append(label);
  });

// playlist
const url = "https://api.groq.com/openai/v1/chat/completions";
const apiKey = "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";

async function makePlaylist(keywords) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: `Give me 5 songs that satisfy the following keywords: ${keywords.join(", ")}. Comma separate their names without additional explanation. End response with \"Done.\"`
                }
            ]
        })
    });
    
    const data = await response.json();
    let r = data.choices[0].message.content;
    r = r.substring(0, r.indexOf("Done.")).trim();
    if (r.endsWith(",")) r = r.slice(0, -1);
    
    return r.split(", ");
}

const playlist = await makePlaylist(["Happy", "Taylor", "Swift"]);
for (const song of playlist) {
    const el = document.createElement('li');
    el.textContent = song;
    document.getElementById('result').appendChild(el)
}
