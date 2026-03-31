import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'welcome', content: '╔══════════════════════════════════════════════════════════════╗' },
    { type: 'welcome', content: '║              💻 INTERACTIVE TERMINAL PLAYGROUND 💻              ║' },
    { type: 'welcome', content: '╠══════════════════════════════════════════════════════════════╣' },
    { type: 'welcome', content: '║  Try these commands:                                          ║' },
    { type: 'welcome', content: '║  • help     - Show all available commands                     ║' },
    { type: 'welcome', content: '║  • linux    - Show Linux commands                             ║' },
    { type: 'welcome', content: '║  • windows  - Show Windows commands                           ║' },
    { type: 'welcome', content: '║  • git      - Show Git commands                               ║' },
    { type: 'welcome', content: '║  • docker   - Show Docker commands                            ║' },
    { type: 'welcome', content: '║  • aws      - Show AWS CLI commands                           ║' },
    { type: 'welcome', content: '║  • clear    - Clear terminal                                  ║' },
    { type: 'welcome', content: '╚══════════════════════════════════════════════════════════════╝' },
    { type: 'prompt', content: '' }
  ])
  
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const commands = {
    help: () => [
      { type: 'output', content: '📋 AVAILABLE COMMANDS:' },
      { type: 'output', content: '  ┌─────────────────────────────────────────────────────────┐' },
      { type: 'output', content: '  │  linux     - Show essential Linux commands              │' },
      { type: 'output', content: '  │  windows   - Show essential Windows commands            │' },
      { type: 'output', content: '  │  git       - Show Git commands                          │' },
      { type: 'output', content: '  │  docker    - Show Docker commands                       │' },
      { type: 'output', content: '  │  aws       - Show AWS CLI commands                      │' },
      { type: 'output', content: '  │  clear     - Clear the terminal                         │' },
      { type: 'output', content: '  │  help      - Show this help message                     │' },
      { type: 'output', content: '  └─────────────────────────────────────────────────────────┘' }
    ],

    linux: () => [
      { type: 'output', content: '🐧 ESSENTIAL LINUX COMMANDS:' },
      { type: 'output', content: '  ┌─────────────────────────────────────────────────────────┐' },
      { type: 'output', content: '  │  ls       - List directory contents                    │' },
      { type: 'output', content: '  │  cd       - Change directory                           │' },
      { type: 'output', content: '  │  pwd      - Print working directory                    │' },
      { type: 'output', content: '  │  mkdir    - Create directory                           │' },
      { type: 'output', content: '  │  rm       - Remove files/directories                   │' },
      { type: 'output', content: '  │  cp       - Copy files/directories                     │' },
      { type: 'output', content: '  │  mv       - Move/rename files                          │' },
      { type: 'output', content: '  │  cat      - Display file contents                      │' },
      { type: 'output', content: '  │  grep     - Search text in files                       │' },
      { type: 'output', content: '  │  chmod    - Change file permissions                    │' },
      { type: 'output', content: '  │  sudo     - Execute as superuser                       │' },
      { type: 'output', content: '  │  apt-get  - Package manager (Debian/Ubuntu)            │' },
      { type: 'output', content: '  └─────────────────────────────────────────────────────────┘' }
    ],

    windows: () => [
      { type: 'output', content: '🪟 ESSENTIAL WINDOWS COMMANDS:' },
      { type: 'output', content: '  ┌─────────────────────────────────────────────────────────┐' },
      { type: 'output', content: '  │  dir      - List directory contents                    │' },
      { type: 'output', content: '  │  cd       - Change directory                           │' },
      { type: 'output', content: '  │  mkdir    - Create directory                           │' },
      { type: 'output', content: '  │  del      - Delete files                               │' },
      { type: 'output', content: '  │  copy     - Copy files                                 │' },
      { type: 'output', content: '  │  move     - Move files                                 │' },
      { type: 'output', content: '  │  type     - Display file contents                      │' },
      { type: 'output', content: '  │  findstr  - Search text in files                       │' },
      { type: 'output', content: '  │  ipconfig - Display network configuration              │' },
      { type: 'output', content: '  │  ping     - Test network connectivity                  │' },
      { type: 'output', content: '  │  systeminfo - Display system information               │' },
      { type: 'output', content: '  │  tasklist - List running processes                     │' },
      { type: 'output', content: '  └─────────────────────────────────────────────────────────┘' }
    ],

    git: () => [
      { type: 'output', content: '📦 GIT COMMANDS:' },
      { type: 'output', content: '  ┌─────────────────────────────────────────────────────────┐' },
      { type: 'output', content: '  │  git init           - Initialize repository            │' },
      { type: 'output', content: '  │  git clone <url>    - Clone repository                 │' },
      { type: 'output', content: '  │  git add <file>     - Stage files                      │' },
      { type: 'output', content: '  │  git commit -m "msg" - Commit changes                  │' },
      { type: 'output', content: '  │  git push           - Push to remote                   │' },
      { type: 'output', content: '  │  git pull           - Pull from remote                 │' },
      { type: 'output', content: '  │  git branch         - List branches                    │' },
      { type: 'output', content: '  │  git checkout <br>  - Switch branch                    │' },
      { type: 'output', content: '  │  git merge <br>     - Merge branches                   │' },
      { type: 'output', content: '  │  git status         - Show working tree status         │' },
      { type: 'output', content: '  │  git log            - Show commit history              │' },
      { type: 'output', content: '  └─────────────────────────────────────────────────────────┘' }
    ],

    docker: () => [
      { type: 'output', content: '🐳 DOCKER COMMANDS:' },
      { type: 'output', content: '  ┌─────────────────────────────────────────────────────────┐' },
      { type: 'output', content: '  │  docker ps           - List running containers         │' },
      { type: 'output', content: '  │  docker images       - List images                     │' },
      { type: 'output', content: '  │  docker run <img>    - Run container                   │' },
      { type: 'output', content: '  │  docker build -t <n> - Build image                     │' },
      { type: 'output', content: '  │  docker pull <img>   - Pull image                      │' },
      { type: 'output', content: '  │  docker stop <id>    - Stop container                  │' },
      { type: 'output', content: '  │  docker rm <id>      - Remove container                │' },
      { type: 'output', content: '  │  docker rmi <img>    - Remove image                    │' },
      { type: 'output', content: '  │  docker-compose up   - Start services                  │' },
      { type: 'output', content: '  │  docker-compose down - Stop services                   │' },
      { type: 'output', content: '  └─────────────────────────────────────────────────────────┘' }
    ],

    aws: () => [
      { type: 'output', content: '☁️ AWS CLI COMMANDS:' },
      { type: 'output', content: '  ┌─────────────────────────────────────────────────────────┐' },
      { type: 'output', content: '  │  aws configure        - Configure credentials          │' },
      { type: 'output', content: '  │  aws s3 ls            - List S3 buckets                │' },
      { type: 'output', content: '  │  aws s3 cp <src> <dst> - Copy to/from S3               │' },
      { type: 'output', content: '  │  aws ec2 describe-instances - List EC2 instances      │' },
      { type: 'output', content: '  │  aws lambda list-functions - List Lambda functions     │' },
      { type: 'output', content: '  │  aws cloudformation list-stacks - List CloudFormation  │' },
      { type: 'output', content: '  │  aws iam list-users   - List IAM users                 │' },
      { type: 'output', content: '  └─────────────────────────────────────────────────────────┘' }
    ]
  }

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    if (trimmedCmd === 'clear') {
      setHistory([{ type: 'prompt', content: '' }])
      return
    }
    
    const newHistory = [...history]
    newHistory.push({ type: 'command', content: `$ ${cmd}` })
    
    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]()
      newHistory.push(...output)
    } else if (trimmedCmd !== '') {
      newHistory.push({ type: 'error', content: `Command not found: "${cmd}". Type 'help' to see available commands.` })
    }
    
    newHistory.push({ type: 'prompt', content: '' })
    setHistory(newHistory)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  const focusTerminal = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <motion.div 
      className="glass-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#0A0A0A',
        border: '1px solid rgba(6,182,212,0.3)',
        borderRadius: 16,
        overflow: 'hidden',
        fontFamily: 'JetBrains Mono, monospace',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}
    >
      {/* Terminal Header */}
      <div style={{
        background: '#1a1a2e',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid rgba(6,182,212,0.2)'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ 
          color: '#64748B', 
          fontSize: '0.75rem', 
          marginLeft: 'auto',
          fontFamily: 'JetBrains Mono, monospace'
        }}>
          developer@portfolio:~/terminal
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        onClick={focusTerminal}
        style={{
          height: '500px',
          overflowY: 'auto',
          padding: '16px',
          background: '#0A0A0A',
          cursor: 'text'
        }}
      >
        {history.map((item, index) => (
          <div key={index} style={{ marginBottom: '4px' }}>
            {item.type === 'welcome' && (
              <div style={{ color: '#22D3EE', whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>
                {item.content}
              </div>
            )}
            {item.type === 'command' && (
              <div style={{ color: '#F8FAFC', fontFamily: 'JetBrains Mono, monospace' }}>
                {item.content}
              </div>
            )}
            {item.type === 'output' && (
              <div style={{ color: '#94A3B8', whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', marginLeft: '16px' }}>
                {item.content}
              </div>
            )}
            {item.type === 'error' && (
              <div style={{ color: '#F472B6', fontFamily: 'JetBrains Mono, monospace', marginLeft: '16px' }}>
                {item.content}
              </div>
            )}
            {item.type === 'prompt' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <span style={{ color: '#22D3EE' }}>➜</span>
                <span style={{ color: '#A78BFA' }}>~/portfolio</span>
                <span style={{ color: '#F8FAFC' }}>$</span>
              </div>
            )}
          </div>
        ))}
        
        {/* Input Line */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
          <span style={{ color: '#22D3EE' }}>➜</span>
          <span style={{ color: '#A78BFA' }}>~/portfolio</span>
          <span style={{ color: '#F8FAFC' }}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#F8FAFC',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.9rem',
              outline: 'none',
              flex: 1,
              padding: '4px 0'
            }}
            autoFocus
          />
        </form>
      </div>
    </motion.div>
  )
}
