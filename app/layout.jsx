import '@styles/global.css'

export const metadata = {
    title: 'Chat Battles',
    description: 'Chat-Based Trivia Quests, Play-to-Earn NFTs, and more!'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;