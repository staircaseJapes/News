
import Link from 'next/link';
import styles from '../styles/globals.module.css';

const articles = [
  { id: 1, title: "Alice Tusa Linked to Global Pillow Theft Ring", author: "Sash Tusa", date: "July 22, 2025", category: "Scandal" },
  { id: 2, title: "Alice Found Swapping Zoom Backgrounds to Subvert Authority", author: "Charlotte Badenoch", date: "July 21, 2025", category: "Office Politics" },
  { id: 3, title: "Alice Declares ‘Naughty Hour’ on All Dalberg Calendars", author: "Jonathan Davidson", date: "July 20, 2025", category: "Workplace" },
  { id: 4, title: "Alice Trains Truffle to Steal Sandwiches from Park-Goers", author: "Lucy Tusa", date: "July 19, 2025", category: "Pets" },
  { id: 5, title: "Alice Applies for Non-Existent Role: Chief Mischief Officer", author: "Editorial", date: "July 18, 2025", category: "Careers" },
  { id: 6, title: "Alice Redesigns Oxford Robes with Sequins and Glitter", author: "The Fashion Section", date: "July 17, 2025", category: "Fashion" },
  { id: 7, title: "Alice Wins Local Mayoral Election by Accident", author: "Dalberg Daily", date: "July 16, 2025", category: "Politics" },
  { id: 8, title: "Why Is Alice So Naughty? (An Op-Ed)", author: "Lucy Tusa", date: "July 15, 2025", category: "Opinion" },
  { id: 9, title: "Alice Banned from Pret for Suspiciously Frequent Loyalty Card Use", author: "Campus Reporter", date: "July 14, 2025", category: "Retail" },
  { id: 10, title: "Alice Uses Fake Name ‘Janet’ to Hog Gym Equipment", author: "Gym Insider", date: "July 13, 2025", category: "Fitness" },
  { id: 11, title: "Alice Seen Teaching Truffle How to Open Wine Bottles", author: "Truffle Watch", date: "July 12, 2025", category: "Pets" },
  { id: 12, title: "Alice Replaces Consulting Deliverables with Haikus", author: "The Haiku Bureau", date: "July 11, 2025", category: "Workplace" },
  { id: 13, title: "Alice Caught Writing Naughty News About Herself", author: "Alice Tusa", date: "July 10, 2025", category: "Meta" },
  { id: 14, title: "Alice ‘Innocently’ Wins Every Game of Perudo — Suspicious?", author: "Charlotte Badenoch", date: "July 9, 2025", category: "Games" },
  { id: 15, title: "Alice Tusa Outrages Friends by Going Full Keto at Brunch", author: "Food Section", date: "July 8, 2025", category: "Food" },
  { id: 16, title: "Alice Publicly Debates Truffle on Ethics of Bin-Raiding", author: "Ethics Desk", date: "July 7, 2025", category: "Ethics" },
  { id: 17, title: "Alice’s AI Clone Now Applying for UN Jobs", author: "Tech Column", date: "July 6, 2025", category: "AI" },
  { id: 18, title: "Alice and Truffle Both Accused of Mid-Meeting Snoring", author: "Meeting Monitor", date: "July 5, 2025", category: "Office Politics" },
  { id: 19, title: "Alice Tusa: Naughty by Nature, or by Nurture?", author: "Nature vs. Nurture Journal", date: "July 4, 2025", category: "Opinion" },
  { id: 20, title: "Sash and Lucy Tusa Respond to Allegations Against Daughter Alice", author: "Joint Statement", date: "July 3, 2025", category: "Scandal" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>The Naughty Times</h1>
        <p className={styles.tagline}>Uncovering the inconvenient truths behind your consulting partner</p>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Trending</a>
          <a href="#">Write for Us</a>
          <a href="#">Subscribe</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <img src="/images/articles/article_1.png" alt="Hero story" />
        <div>
          <h2>{articles[0].title}</h2>
          <p className={styles.meta}>By {articles[0].author} • {articles[0].date}</p>
        </div>
      </section>

      <div className={styles.utilityBar}>
        <input type="text" placeholder="Search articles..." />
        <select>
          <option>All Categories</option>
          {[...new Set(articles.map(a => a.category))].map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <span className={styles.fakeStats}>1.2M readers outraged this week</span>
      </div>

      <main className={styles.grid}>

          <div key=1 className={styles.card}>
            <Link href={`/articles/article-1`}>
              <div>
                <img src={`/images/articles/article_1.png`} alt="Article 1" />
                <h3>Article 1 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 1
                  </span> • July 22, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Multiple cities report missing cushions after Alice's visit.</p>
              </div>
            </Link>
          </div>

          <div key=2 className={styles.card}>
            <Link href={`/articles/article-2`}>
              <div>
                <img src={`/images/articles/article_2.png`} alt="Article 2" />
                <h3>Article 2 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 2
                  </span> • July 21, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Analysts stunned by her tactical Zoom manipulation.</p>
              </div>
            </Link>
          </div>

          <div key=3 className={styles.card}>
            <Link href={`/articles/article-3`}>
              <div>
                <img src={`/images/articles/article_3.png`} alt="Article 3" />
                <h3>Article 3 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 3
                  </span> • July 20, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Dalberg HR reportedly 'not amused' by recurring 3pm anarchy.</p>
              </div>
            </Link>
          </div>

          <div key=4 className={styles.card}>
            <Link href={`/articles/article-4`}>
              <div>
                <img src={`/images/articles/article_4.png`} alt="Article 4" />
                <h3>Article 4 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 4
                  </span> • July 19, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Local park-goers describe Truffle as 'suspiciously well-trained'.</p>
              </div>
            </Link>
          </div>

          <div key=5 className={styles.card}>
            <Link href={`/articles/article-5`}>
              <div>
                <img src={`/images/articles/article_5.png`} alt="Article 5" />
                <h3>Article 5 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 5
                  </span> • July 18, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Position not listed. Salary: all your secrets.</p>
              </div>
            </Link>
          </div>

          <div key=6 className={styles.card}>
            <Link href={`/articles/article-6`}>
              <div>
                <img src={`/images/articles/article_6.png`} alt="Article 6" />
                <h3>Article 6 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 6
                  </span> • July 17, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Robes now sparkle under harsh lighting — Oxford divided.</p>
              </div>
            </Link>
          </div>

          <div key=7 className={styles.card}>
            <Link href={`/articles/article-7`}>
              <div>
                <img src={`/images/articles/article_7.png`} alt="Article 7" />
                <h3>Article 7 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 7
                  </span> • July 16, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Alice denies knowing ballots were even open.</p>
              </div>
            </Link>
          </div>

          <div key=8 className={styles.card}>
            <Link href={`/articles/article-8`}>
              <div>
                <img src={`/images/articles/article_8.png`} alt="Article 8" />
                <h3>Article 8 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 8
                  </span> • July 15, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Is it just a phase, or something deeper?</p>
              </div>
            </Link>
          </div>

          <div key=9 className={styles.card}>
            <Link href={`/articles/article-9`}>
              <div>
                <img src={`/images/articles/article_9.png`} alt="Article 9" />
                <h3>Article 9 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 9
                  </span> • July 14, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Pret insiders allege 'card farming' techniques.</p>
              </div>
            </Link>
          </div>

          <div key=10 className={styles.card}>
            <Link href={`/articles/article-10`}>
              <div>
                <img src={`/images/articles/article_10.png`} alt="Article 10" />
                <h3>Article 10 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 10
                  </span> • July 13, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Gym staff confused by ID swap and banana peels.</p>
              </div>
            </Link>
          </div>

          <div key=11 className={styles.card}>
            <Link href={`/articles/article-11`}>
              <div>
                <img src={`/images/articles/article_11.png`} alt="Article 11" />
                <h3>Article 11 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 11
                  </span> • July 12, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Truffle now demands Merlot in crystal bowls.</p>
              </div>
            </Link>
          </div>

          <div key=12 className={styles.card}>
            <Link href={`/articles/article-12`}>
              <div>
                <img src={`/images/articles/article_12.png`} alt="Article 12" />
                <h3>Article 12 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 12
                  </span> • July 11, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Stakeholder feedback described as 'lyrical but confusing.'</p>
              </div>
            </Link>
          </div>

          <div key=13 className={styles.card}>
            <Link href={`/articles/article-13`}>
              <div>
                <img src={`/images/articles/article_13.png`} alt="Article 13" />
                <h3>Article 13 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 13
                  </span> • July 10, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>She maintains it was for 'satirical research.'</p>
              </div>
            </Link>
          </div>

          <div key=14 className={styles.card}>
            <Link href={`/articles/article-14`}>
              <div>
                <img src={`/images/articles/article_14.png`} alt="Article 14" />
                <h3>Article 14 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 14
                  </span> • July 9, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Charlotte and Jonathan remain unconvinced.</p>
              </div>
            </Link>
          </div>

          <div key=15 className={styles.card}>
            <Link href={`/articles/article-15`}>
              <div>
                <img src={`/images/articles/article_15.png`} alt="Article 15" />
                <h3>Article 15 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 15
                  </span> • July 8, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Avocado requests declined. Friends baffled.</p>
              </div>
            </Link>
          </div>

          <div key=16 className={styles.card}>
            <Link href={`/articles/article-16`}>
              <div>
                <img src={`/images/articles/article_16.png`} alt="Article 16" />
                <h3>Article 16 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 16
                  </span> • July 7, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Audience described it as 'disturbingly logical'.</p>
              </div>
            </Link>
          </div>

          <div key=17 className={styles.card}>
            <Link href={`/articles/article-17`}>
              <div>
                <img src={`/images/articles/article_17.png`} alt="Article 17" />
                <h3>Article 17 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 17
                  </span> • July 6, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>AI clone now interviewing for VP of Ethics.</p>
              </div>
            </Link>
          </div>

          <div key=18 className={styles.card}>
            <Link href={`/articles/article-18`}>
              <div>
                <img src={`/images/articles/article_18.png`} alt="Article 18" />
                <h3>Article 18 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 18
                  </span> • July 5, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>Truffle offered no comment, just snored louder.</p>
              </div>
            </Link>
          </div>

          <div key=19 className={styles.card}>
            <Link href={`/articles/article-19`}>
              <div>
                <img src={`/images/articles/article_19.png`} alt="Article 19" />
                <h3>Article 19 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 19
                  </span> • July 4, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>A behavioural psychologist weighs in.</p>
              </div>
            </Link>
          </div>

          <div key=20 className={styles.card}>
            <Link href={`/articles/article-20`}>
              <div>
                <img src={`/images/articles/article_20.png`} alt="Article 20" />
                <h3>Article 20 Headline Goes Here</h3>
                <p className={styles.meta}>
                  <span className={styles.authorHover} data-bio="Frequent contributor and close observer.">
                    By Author 20
                  </span> • July 3, 2025
                  <span className={styles.readTime}>· 3 min read</span>
                </p>
                <p className={styles.tag}>Scandal</p>
                <p className={styles.teaser}>A bold response from Alice's creators.</p>
              </div>
            </Link>
          </div>
</main>

      <aside className={styles.sidebar}>
        <h4>Live Reactions</h4>
        <ul>
          <li>@DalbergGuy69: I *knew* Alice was behind the hummus shortage!</li>
          <li>@truffleSniffer: Truffle for President 🐶</li>
          <li>@PretApologist: Loyalty card abuse is real. Stay strong.</li>
        </ul>
      </aside>

      <footer className={styles.footer}>
        <p>&copy; 2025 The Naughty Times. All rights reserved.</p>
        <nav>
          <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Contact</a>
        </nav>
        <p className={styles.disclaimer}>Disclaimer: Not liable for reputational damage to dogs.</p>
      
      <section className={styles.newsletter}>
        <h3>Sign up for semi-truths</h3>
        <input type="email" placeholder="Enter your email..." />
        <button>Subscribe</button>
      </section>
      <div className={styles.analyticsBadge}>
        Tracked by Naughtylytics™
      </div>

</footer>
    </div>
  );
}
