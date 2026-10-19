import React, { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import type { ContributionsPayload, GitHubUser, GitHubRepo, ContributionDay, ContributionWeek } from './types'
import { formatCount, formatRelativeTime, levelToHex, langColor } from './utils'
import ContributionGrid from './ContributionGrid'
import realContribRaw from '../../data/real_github_contributions.json'

// ── GitHub Icon Inline SVG ────────────────────────────────────────────────────
const GitHubMark: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

// ── Verified Real Repositories ────────────────────────────────────────────────
const REAL_REPOS: (GitHubRepo & { category: 'ai' | 'systems' | 'cloud' })[] = [
  {
    id: 1,
    name: 'Medical-Chat-Bot-part-RAG',
    full_name: 'Ysn-Ir/Medical-Chat-Bot-part-RAG',
    description: 'Multimodal clinical diagnostic suite with fine-tuned Mistral-7B, Pinecone RAG & DenseNet121 (0.9456 AUROC)',
    html_url: 'https://github.com/Ysn-Ir/Medical-Chat-Bot-part-RAG',
    stargazers_count: 4,
    forks_count: 0,
    language: 'Python',
    updated_at: '2026-10-19T15:11:34Z',
    fork: false,
    private: false,
    category: 'ai',
  },
  {
    id: 2,
    name: 'compiler',
    full_name: 'Ysn-Ir/compiler',
    description: 'Ahead-of-time compiler in modern C++ and NASM x86_64 assembly emitting standalone Linux ELF64 binaries',
    html_url: 'https://github.com/Ysn-Ir/compiler',
    stargazers_count: 1,
    forks_count: 0,
    language: 'C++',
    updated_at: '2026-10-19T15:11:49Z',
    fork: false,
    private: false,
    category: 'systems',
  },
  {
    id: 3,
    name: 'FreeDoom_Reinforcement_Learning_Game',
    full_name: 'Ysn-Ir/FreeDoom_Reinforcement_Learning_Game',
    description: 'Dueling DRQN with LSTM temporal core in VizDoom deathmatch combat (16.83 kills/ep, 10.68 K/D ratio)',
    html_url: 'https://github.com/Ysn-Ir/FreeDoom_Reinforcement_Learning_Game',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    updated_at: '2026-07-17T15:48:23Z',
    fork: false,
    private: false,
    category: 'ai',
  },
  {
    id: 4,
    name: 'chess_engine',
    full_name: 'Ysn-Ir/chess_engine',
    description: 'Neural chess position evaluation engine trained on 2,000,000+ Lichess positions with Alpha-Beta search',
    html_url: 'https://github.com/Ysn-Ir/chess_engine',
    stargazers_count: 1,
    forks_count: 0,
    language: 'Python',
    updated_at: '2026-02-13T19:47:34Z',
    fork: false,
    private: false,
    category: 'systems',
  },
  {
    id: 5,
    name: 'Callytics',
    full_name: 'Ysn-Ir/Callytics',
    description: 'Advanced call analytics solution leveraging speech recognition and LLMs to analyze enterprise customer conversations',
    html_url: 'https://github.com/Ysn-Ir/Callytics',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    updated_at: '2026-07-01T11:12:35Z',
    fork: false,
    private: false,
    category: 'cloud',
  },
  {
    id: 6,
    name: 'WEB-FINANCER',
    full_name: 'Ysn-Ir/WEB-FINANCER',
    description: 'Enterprise Spring Boot microservices with reactive storefront and secure database transactions',
    html_url: 'https://github.com/Ysn-Ir/WEB-FINANCER',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Java',
    updated_at: '2025-12-27T16:58:30Z',
    fork: false,
    private: false,
    category: 'cloud',
  },
]

// ── Real Contributions Parser by Year or Rolling 52-Week ──────────────────────
function buildContributionsPayload(
  rawData: { contributions: { date: string; count: number; level: number }[] },
  yearFilter: 'last12' | '2026' | '2025' | '2024'
): ContributionsPayload {
  const contribMap = new Map<string, { count: number; level: 0 | 1 | 2 | 3 | 4 }>()
  for (const c of rawData.contributions) {
    const lvl = Math.min(Math.max(c.level, 0), 4) as 0 | 1 | 2 | 3 | 4
    contribMap.set(c.date, { count: c.count, level: lvl })
  }

  let startDate: Date
  let endDate: Date

  if (yearFilter === 'last12') {
    endDate = new Date('2026-10-19T00:00:00Z')
    startDate = new Date(endDate)
    startDate.setUTCDate(endDate.getUTCDate() - (52 * 7 - 1))
  } else {
    const yr = parseInt(yearFilter, 10)
    startDate = new Date(Date.UTC(yr, 0, 1))
    endDate = new Date(Date.UTC(yr, 11, 31))
  }

  const days: ContributionDay[] = []
  let total = 0
  const cur = new Date(startDate)

  // Align start to preceding Sunday
  const startDay = cur.getUTCDay()
  cur.setUTCDate(cur.getUTCDate() - startDay)

  while (cur <= endDate || days.length % 7 !== 0) {
    const isoDate = cur.toISOString().split('T')[0]
    const entry = contribMap.get(isoDate) ?? { count: 0, level: 0 }
    days.push({
      date: isoDate,
      count: entry.count,
      weekday: cur.getUTCDay(),
      level: entry.level,
    })
    total += entry.count
    cur.setUTCDate(cur.getUTCDate() + 1)
  }

  // Slice to 52 or 53 weeks
  const numWeeks = Math.floor(days.length / 7)
  const weeks: ContributionWeek[] = []
  for (let w = 0; w < numWeeks; w++) {
    weeks.push({
      contributionDays: days.slice(w * 7, (w + 1) * 7),
    })
  }

  return {
    username: 'Ysn-Ir',
    totalContributions: total,
    weeks: weeks.slice(-52), // keep neat 52-week grid width
  }
}

const EASE = [0.22, 1, 0.36, 1] as const

const StatChip: React.FC<{ label: string; value: number | string; delay?: number }> = ({ label, value, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      className="flex flex-col items-start px-5 py-3 rounded-2xl"
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <span className="text-xl sm:text-2xl font-semibold font-mono tracking-tight text-white">
        {typeof value === 'number' ? formatCount(value) : value}
      </span>
      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-0.5">
        {label}
      </span>
    </motion.div>
  )
}

const Legend: React.FC = () => (
  <div className="flex items-center gap-2">
    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Less</span>
    <div className="flex gap-1 items-center">
      {([0, 1, 2, 3, 4] as const).map((l) => (
        <span
          key={l}
          className="w-2.5 h-2.5 rounded-sm inline-block"
          style={{ backgroundColor: levelToHex(l) }}
          aria-hidden
        />
      ))}
    </div>
    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">More</span>
  </div>
)

interface GitHubContributionSectionProps {
  username?: string
}

const GitHubContributionSection: React.FC<GitHubContributionSectionProps> = ({ username = 'Ysn-Ir' }) => {
  const [yearFilter, setYearFilter] = useState<'last12' | '2026' | '2025' | '2024'>('last12')
  const [repoFilter, setRepoFilter] = useState<'all' | 'ai' | 'systems' | 'cloud'>('all')

  const [user, setUser] = useState<GitHubUser>({
    login: username,
    name: 'yassine',
    avatar_url: 'https://avatars.githubusercontent.com/u/47614882?v=4',
    html_url: `https://github.com/${username}`,
    public_repos: 55,
    followers: 19,
    following: 15,
    bio: null,
  })

  const data = useMemo(() => {
    return buildContributionsPayload(realContribRaw, yearFilter)
  }, [yearFilter])

  const filteredRepos = useMemo(() => {
    if (repoFilter === 'all') return REAL_REPOS
    return REAL_REPOS.filter(r => r.category === repoFilter)
  }, [repoFilter])

  // Optional background live refresh of user followers/repos count
  useEffect(() => {
    const fetchLive = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`)
        if (userRes.ok) {
          const u = await userRes.json()
          setUser(u)
        }
      } catch (err) {
        // Silently preserve verified data
      }
    }
    fetchLive()
  }, [username])

  return (
    <section
      id="github-activity"
      className="w-full flex justify-center py-24 sm:py-32"
      style={{ backgroundColor: 'rgb(15,15,15)' }}
    >
      <div className="portfolio-container w-full max-w-[1200px] px-6 flex flex-col gap-10">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="flex flex-col gap-3">
            <span
              className="text-xs font-mono font-medium uppercase tracking-wider"
              style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em' }}
            >
              // Open Source &amp; Codebases
            </span>
            <h2 className="text-heading-2 flex items-center gap-3.5 text-white font-sans">
              <GitHubMark size={32} className="text-white flex-shrink-0" />
              GitHub Activity
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl leading-relaxed">
              A verified live snapshot of public repositories, systems programming commits, and open-source contributions.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 w-full sm:w-auto">
            <StatChip label="Year Commits" value={data.totalContributions} delay={0.05} />
            <StatChip label="Public Repos" value={user.public_repos} delay={0.1} />
            <StatChip label="Followers" value={user.followers} delay={0.15} />
            <StatChip label="Active Since" value="2019" delay={0.2} />
          </div>
        </motion.div>

        {/* ── Card 1: Contributions Heatmap with Interactive Year Filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
          className="rounded-3xl p-6 sm:p-8 flex flex-col gap-6"
          style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-4">
            
            {/* Title & Live Pulse */}
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-mono text-neutral-200 font-medium">
                {formatCount(data.totalContributions)} Contributions in {yearFilter === 'last12' ? 'the Last Year' : yearFilter}
              </span>
            </div>

            {/* Interactive Year Switcher */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5 text-xs font-mono">
                <button
                  onClick={() => setYearFilter('last12')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    yearFilter === 'last12' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Last 12 Mo (443)
                </button>
                <button
                  onClick={() => setYearFilter('2026')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    yearFilter === '2026' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  2026 (354)
                </button>
                <button
                  onClick={() => setYearFilter('2025')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    yearFilter === '2025' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  2025 (143)
                </button>
                <button
                  onClick={() => setYearFilter('2024')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    yearFilter === '2024' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  2024 (45)
                </button>
              </div>

              <Legend />
              
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>@{user.login}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Contribution Heatmap Grid */}
          <div className="w-full overflow-x-auto pb-2">
            <ContributionGrid weeks={data.weeks} />
          </div>
        </motion.div>

        {/* ── Row 2: Repositories & Profile Summary ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Featured Repositories with Category Tabs */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Featured Repositories
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  ({filteredRepos.length})
                </span>
              </div>

              {/* Repo Category Filter */}
              <div className="flex items-center gap-1">
                {(['all', 'ai', 'systems', 'cloud'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setRepoFilter(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      repoFilter === cat
                        ? 'bg-white/15 text-white font-medium border border-white/20'
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {cat === 'all' ? 'All' :
                     cat === 'ai' ? 'AI / Vision' :
                     cat === 'systems' ? 'Systems C++' : 'Cloud ERP'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredRepos.map((repo, idx) => (
                <motion.a
                  key={repo.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 * idx, ease: EASE }}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl p-5 flex flex-col justify-between gap-3 group transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-semibold text-white group-hover:text-emerald-400 transition-colors truncate">
                        {repo.name}
                      </span>
                      <ExternalLink size={13} className="text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans line-clamp-2">
                      {repo.description ?? 'Systems & applied engineering repository.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-neutral-500">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: langColor(repo.language) }}
                      />
                      <span>{repo.language ?? 'Source'}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={11} className="text-amber-400/80" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      <span className="text-neutral-600">{formatRelativeTime(repo.updated_at)}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Profile & Language Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
            className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6"
            style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="flex flex-col gap-5">
              {/* Profile Card */}
              <div className="flex items-center gap-3.5 border-b border-white/5 pb-5">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full border border-white/10 filter grayscale contrast-110"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-mono font-semibold text-white">
                    Yassine Ouali
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    @{user.login} · Fès, Morocco
                  </span>
                </div>
              </div>

              {/* Verified Language Breakdown */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    Codebase Distribution
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">
                    Across 55 Repos
                  </span>
                </div>

                {/* Segmented language bar */}
                <div className="w-full h-2 rounded-full overflow-hidden flex bg-white/5">
                  <div style={{ width: '34%', backgroundColor: '#f34b7d' }} title="C++ 34%" />
                  <div style={{ width: '32%', backgroundColor: '#3572A5' }} title="Python 32%" />
                  <div style={{ width: '16%', backgroundColor: '#b07219' }} title="Java 16%" />
                  <div style={{ width: '12%', backgroundColor: '#3178c6' }} title="TypeScript 12%" />
                  <div style={{ width: '6%', backgroundColor: '#89e051' }} title="Other 6%" />
                </div>

                {/* Badges */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#f34b7d]" />
                    <span>C++ · 34%</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#3572A5]" />
                    <span>Python · 32%</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#b07219]" />
                    <span>Java · 16%</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#3178c6]" />
                    <span>TypeScript · 12%</span>
                  </div>
                </div>
              </div>

              {/* Engineering Focus Note */}
              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.01] text-xs font-mono text-neutral-400 leading-relaxed">
                <span>Emphasis on systems C++ (compilers &amp; audio DSP), multimodal vision transformers, and enterprise Spring Boot services.</span>
              </div>
            </div>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl border border-white/15 bg-white text-black font-mono font-medium text-xs flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              <GitHubMark size={15} />
              <span>Follow @{user.login} on GitHub</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default GitHubContributionSection
