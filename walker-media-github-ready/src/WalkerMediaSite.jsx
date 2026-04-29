import { useEffect, useMemo, useState } from "react";

// Place your logo image in /public and update this path.
// Example: public/martlet-review-logo.png -> "/martlet-review-logo.png"
const MARTLET_LOGO = "/martlet-review-logo.png";

const featuredArticles = [
  {
    title: "The Architecture of Justice in an Age of Innovation",
    category: "Essay",
    excerpt:
      "A long-form reflection on law, technology, and the institutional structures that determine how we live with one another.",
    topic: "Philosophy",
  },
  {
    title: "Why Legal Thought Still Needs Moral Imagination",
    category: "Commentary",
    excerpt:
      "A concise argument for restoring philosophical seriousness to public legal discourse.",
    topic: "Politics",
  },
  {
    title: "Institutions, Power, and the Human Person",
    category: "Review",
    excerpt:
      "An examination of how political and legal institutions shape responsibility, dignity, and freedom.",
    topic: "Social Commentary",
  },
  {
    title: "Markets, Meaning, and Modern Society",
    category: "Essay",
    excerpt:
      "A broad social-science essay on economics, culture, and the values that guide institutional life.",
    topic: "Economics",
  },
  {
    title: "Pop Culture and the Moral Imagination",
    category: "Commentary",
    excerpt:
      "A cultural commentary piece on symbolism, entertainment, and the social language of public life.",
    topic: "Pop Culture",
  },
  {
    title: "History as an Argument with the Present",
    category: "Review",
    excerpt:
      "A historical reflection on the uses and abuses of the past in contemporary political discourse.",
    topic: "Foreign Affairs",
  },
];

const episodes = [
  {
    number: "01",
    title: "Law, Legitimacy, and the State",
    summary:
      "An examination of how legal systems justify authority and maintain legitimacy in modern societies.",
  },
  {
    number: "02",
    title: "Beyond Good and Legal",
    summary:
      "A discussion on the distinction between legality and justice in public life.",
  },
  {
    number: "03",
    title: "Jurisprudence and the Modern World",
    summary:
      "Exploring how legal philosophy informs contemporary policy and institutional design.",
  },
];

const contributors = [
  "Editor in Chief Placeholder",
  "Senior Editor Placeholder",
  "Contributing Writer Placeholder",
  "Research Editor Placeholder",
  "Guest Contributor Placeholder",
];

const topicTags = [
  "Sociology",
  "Social Commentary",
  "Pop Culture",
  "Economics",
  "Finance",
  "Philosophy",
  "Politics",
  "Foreign Affairs",
];

function useHashRoute() {
  const getRoute = () => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (["home", "articles", "podcast", "about", "subscribe"].includes(hash)) {
      return hash;
    }
    return "home";
  };

  const [route, setRoute] = useState(typeof window !== "undefined" ? getRoute() : "home");

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return [route];
}

function LogoBox({ className = "h-56" }) {
  return (
    <div className={`w-full ${className} bg-black rounded-xl flex items-center justify-center overflow-hidden text-sm text-stone-400`}>
      {MARTLET_LOGO ? (
        <img src={MARTLET_LOGO} alt="The Martlet Review logo" className="object-contain h-full w-full p-4" />
      ) : (
        <span>Add logo image to /public and update MARTLET_LOGO</span>
      )}
    </div>
  );
}

function NavLink({ href, children, active }) {
  return (
    <a
      href={href}
      className={`transition-colors hover:text-amber-700 ${active ? "text-amber-700" : "text-stone-700"}`}
    >
      {children}
    </a>
  );
}

function SiteHeader({ route }) {
  return (
    <header className="border-b border-stone-200 bg-stone-50/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="no-underline">
          <div className="text-xs uppercase tracking-[0.35em] text-amber-700 font-semibold">Walker Media</div>
          <div className="text-2xl font-serif font-semibold tracking-tight text-stone-900">Intellectual Media Platform</div>
        </a>
        <nav className="hidden md:flex gap-8 text-sm">
          <NavLink href="#home" active={route === "home"}>Home</NavLink>
          <NavLink href="#articles" active={route === "articles"}>Articles</NavLink>
          <NavLink href="#podcast" active={route === "podcast"}>Podcast</NavLink>
          <NavLink href="#about" active={route === "about"}>About</NavLink>
          <NavLink href="#subscribe" active={route === "subscribe"}>Subscribe</NavLink>
        </nav>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-serif tracking-tight mb-4">Walker Media</h1>
          <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-8">
            A platform for serious inquiry across law, policy, philosophy, history, economics, culture, and the broader social sciences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <a href="#articles" className="group rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="mb-6"><LogoBox /></div>
            <h2 className="text-3xl font-serif mb-3 text-stone-900 group-hover:text-amber-700 transition-colors">The Martlet Review</h2>
            <p className="text-stone-700 leading-7">
              A broad social-sciences review devoted to honest inquiry. Essays, commentary, reviews, and reflections from contributors across different intellectual and political traditions, united by seriousness, curiosity, and good faith.
            </p>
          </a>

          <a href="#podcast" className="group rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-700 mb-4">Launching Soon</div>
            <h2 className="text-3xl font-serif mb-3 text-stone-900 group-hover:text-amber-700 transition-colors">Beyond Good and Legal</h2>
            <p className="text-stone-700 leading-7">
              A podcast focused on law, policy, jurisprudence, and philosophy, built around interviews with intellectually serious guests including legal scholars, political scientists, and other public thinkers.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}

function ArticlesPage() {
  const [activeTopic, setActiveTopic] = useState("All");
  const filteredArticles = useMemo(() => {
    if (activeTopic === "All") return featuredArticles;
    return featuredArticles.filter((article) => article.topic === activeTopic);
  }, [activeTopic]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <section className="mb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Articles</div>
            <h1 className="text-5xl font-serif tracking-tight mb-5">The Martlet Review</h1>
            <p className="text-stone-700 leading-8 text-lg mb-6">
              The Martlet Review is a social-sciences publication oriented toward the unending search for truth. It welcomes intellectually honest work across law, politics, history, economics, philosophy, culture, and related disciplines. Its central commitment is not ideological conformity, but seriousness of thought, good faith engagement, and editorial judgment.
            </p>
            <p className="text-stone-700 leading-8">
              The aim is to publish stimulating work from contributors with different commitments and different priors, provided they write honestly, think carefully, and contribute meaningfully to the larger conversation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <LogoBox className="h-64" />
            <div className="text-sm uppercase tracking-[0.25em] text-amber-700 mb-2 mt-5">Editorial Spirit</div>
            <p className="text-stone-700 leading-7">
              A pluralistic forum for serious writing, open to diverse perspectives and committed to rigorous, honest, and interesting argument.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setActiveTopic("All")} className={`rounded-full px-4 py-2 text-sm border ${activeTopic === "All" ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-700 border-stone-300"}`}>All</button>
          {topicTags.map((tag) => (
            <button key={tag} onClick={() => setActiveTopic(tag)} className={`rounded-full px-4 py-2 text-sm border ${activeTopic === tag ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-700 border-stone-300"}`}>
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Publication</div>
            <h2 className="text-4xl font-serif tracking-tight">Featured Writing</h2>
          </div>
          <div className="text-sm text-stone-500">Filter: {activeTopic}</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article key={article.title} className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="text-xs uppercase tracking-[0.25em] text-amber-700">{article.category}</div>
                <div className="text-xs text-stone-500">{article.topic}</div>
              </div>
              <h3 className="text-2xl font-serif leading-tight mb-4">{article.title}</h3>
              <p className="text-stone-700 leading-7 mb-6">{article.excerpt}</p>
              <button className="text-sm font-medium text-stone-900">Read more</button>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Contributors</div>
          <h2 className="text-4xl font-serif tracking-tight mb-6">Editorial Team</h2>
          <div className="space-y-3">
            {contributors.map((name) => (
              <div key={name} className="rounded-xl border border-stone-200 px-4 py-3 text-stone-700">{name}</div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-amber-50 p-8 shadow-sm">
          <div className="text-sm uppercase tracking-[0.3em] text-amber-800 mb-3">About The Martlet Review</div>
          <h2 className="text-4xl font-serif tracking-tight mb-6">A broad forum for honest inquiry.</h2>
          <p className="text-stone-700 leading-8 mb-4">
            The Martlet Review is intended to be more than a single-issue publication. It is a venue for sociological, political, philosophical, economic, historical, and cultural analysis, approached with editorial seriousness and openness to genuine disagreement.
          </p>
          <p className="text-stone-700 leading-8">
            Its operating principle is simple: thoughtful people from different traditions should be able to write, argue, and reflect in the same publication without reducing every disagreement to faction or posture. The review exists to make that kind of conversation possible.
          </p>
        </div>
      </section>
    </main>
  );
}

function PodcastPage() {
  return (
    <main>
      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl mb-12">
            <div className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">Podcast</div>
            <h1 className="text-5xl font-serif tracking-tight mb-5">Beyond Good and Legal</h1>
            <p className="text-stone-300 text-lg leading-8 mb-5">
              Beyond Good and Legal is a long-form interview and discussion platform focused on law, policy, jurisprudence, and philosophy.
            </p>
            <p className="text-stone-300 text-lg leading-8">
              The project is centered on intellectually serious conversation with guests such as law professors, political scientists, scholars, and other thoughtful public voices, with an emphasis on both modern and historical questions and their deeper implications.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {episodes.map((episode) => (
              <div key={episode.number} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <div className="text-5xl font-serif text-amber-300 mb-4">{episode.number}</div>
                <h3 className="text-2xl font-serif mb-3">{episode.title}</h3>
                <p className="text-stone-300 leading-7 mb-6">{episode.summary}</p>
                <button className="text-sm font-medium text-white">Episode page</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Format</div>
            <h2 className="text-4xl font-serif tracking-tight mb-6">Host-led conversations</h2>
            <p className="text-stone-700 leading-8">
              The show is built around your role as host, guiding conversations with legal and political thinkers through major questions in law, public life, and the structure of institutions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">About Beyond Good and Legal</div>
            <h2 className="text-4xl font-serif tracking-tight mb-6">Legality and justice are not always the same.</h2>
            <p className="text-stone-700 leading-8 mb-4">
              The core premise of the podcast is that law should be examined not only as a technical system, but also as a moral, political, and philosophical enterprise.
            </p>
            <p className="text-stone-700 leading-8">
              That premise gives the show its direction: rigorous discussion of how systems of authority function, where they break down, and what deeper ideas animate them.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-4xl">
        <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">About</div>
        <h1 className="text-5xl font-serif tracking-tight mb-8">About Walker Media</h1>
        <p className="text-stone-700 leading-8 text-lg mb-6">
          Walker Media is conceived as a home for intellectually serious public work. Its purpose is to create a durable platform for writing and conversation that treats ideas as worth taking seriously and disagreement as something to be engaged rather than managed away.
        </p>
        <p className="text-stone-700 leading-8 mb-6">
          At the highest level, the aim of Walker Media is to build an institution oriented toward truth-seeking, honest argument, and a broader renewal of serious public discourse. That means resisting the pressure to flatten every question into branding, faction, or performance. It also means creating space for substantial reflection across law, politics, philosophy, history, economics, and culture.
        </p>
        <p className="text-stone-700 leading-8 mb-6">
          The Martlet Review and Beyond Good and Legal serve different but related functions within that larger mission. The Martlet Review is the written forum: broader in scope, social-scientific in spirit, and open to contributors from a range of ideological and intellectual positions. Beyond Good and Legal is the interview and discussion arm: narrower in subject matter, more focused on law and policy, and structured around long-form conversations with serious guests.
        </p>
        <p className="text-stone-700 leading-8 mb-10">
          Taken together, these projects are meant to form more than a content brand. They are intended to become a disciplined, credible, and intellectually open platform for people interested in understanding the world with greater depth and speaking about it with greater seriousness.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">The Martlet Review</div>
          <p className="text-stone-700 leading-8">
            A broad publication for essays, commentary, reviews, and analysis across the social sciences and public life, with a commitment to pluralism, editorial seriousness, and good-faith inquiry.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Beyond Good and Legal</div>
          <p className="text-stone-700 leading-8">
            A podcast devoted to long-form discussion on law, jurisprudence, policy, and philosophy, hosted through substantive interviews with scholars and public thinkers.
          </p>
        </div>
      </div>
    </main>
  );
}

function SubscribePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-center">
      <div className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Subscribe</div>
      <h1 className="text-5xl font-serif tracking-tight mb-5">Stay Updated</h1>
      <p className="text-stone-700 leading-8 mb-8 max-w-2xl mx-auto">
        Receive updates on new essays, commentary, reviews, and upcoming podcast releases from Walker Media.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <input className="w-full border border-stone-300 px-4 py-3 rounded-xl" placeholder="Email address" />
        <button className="bg-amber-700 text-white px-6 py-3 rounded-xl">Subscribe</button>
      </div>
    </main>
  );
}

export default function WalkerMediaSite() {
  const [route] = useHashRoute();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader route={route} />

      {route === "home" && <HomePage />}
      {route === "articles" && <ArticlesPage />}
      {route === "podcast" && <PodcastPage />}
      {route === "about" && <AboutPage />}
      {route === "subscribe" && <SubscribePage />}

      <footer className="border-t border-stone-200 bg-stone-50 mt-8">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-stone-600 flex flex-col md:flex-row justify-between gap-3">
          <div>© 2026 Walker Media</div>
          <div className="flex gap-5">
            <a href="#home" className="hover:text-stone-900">Home</a>
            <a href="#articles" className="hover:text-stone-900">Articles</a>
            <a href="#podcast" className="hover:text-stone-900">Podcast</a>
            <a href="#about" className="hover:text-stone-900">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
