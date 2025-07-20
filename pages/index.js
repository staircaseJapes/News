export default function Home() {
  const articles = Array.from({ length: 35 }, (_, i) => ({
    title: i % 5 === 0
      ? `Why Is Alice So Naughty? (Op-Ed ${i + 1})`
      : `Scandal ${i + 1}: Alice Tusa ${['steals croissants', 'disrupts royal tea', 'rewrites UN memo', 'hacks Santa’s list', 'declares herself Queen'][i % 5]}`,
    summary: `World reacts in disbelief as Alice Tusa ${['commandeers a blimp', 'builds pillow fort in Parliament', 'naps through summit', 'installs disco ball in the Louvre', 'interrupts Nobel ceremony'][i % 5]}.`,
    author: `Global Correspondent #${i + 1}`,
    id: i + 1
  }));

  const comments = [
    { user: "MacronFan88", text: "This is outrageous! Alice must be stopped!", time: "2h", avatar: "/avatar1.png" },
    { user: "BidenWatcher", text: "She took my pudding cup during G7!", time: "3h", avatar: "/avatar2.png" },
    { user: "TrudeauTroubled", text: "We need an inquiry. Immediately.", time: "5h", avatar: "/avatar3.png" }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>The Naughty Times</h1>
      <p><strong>Editor’s Note:</strong> Alice Tusa continues to confound world expectations with her escalating mischief.</p>
      <hr style={{ margin: '1.5rem 0' }} />
      {articles.map(article => (
        <div key={article.id} style={{ marginBottom: '1.2rem' }}>
          <h2>{article.title}</h2>
          <p><em>by {article.author}</em></p>
          <p>{article.summary}</p>
        </div>
      ))}
      <hr style={{ marginTop: '2rem' }} />
      <h2>Reader Comments</h2>
      {comments.map((c, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={c.avatar} alt="avatar" width={40} height={40} style={{ borderRadius: '50%', marginRight: '0.75rem' }} />
          <div>
            <strong>{c.user}</strong> <span style={{ fontSize: '0.8rem', color: '#555' }}>– {c.time} ago</span>
            <p style={{ margin: 0 }}>{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
