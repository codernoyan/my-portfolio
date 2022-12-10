import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Contact from '../components/Contact/Contact'
import Projects from '../components/Projects/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner></Banner>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  )
}
