import Cta from '@/components/Cta'
import Header from '@/components/Header'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Why from '@/components/Why'
import Work from '@/components/Work'
import WorkCarousel1 from '@/components/WorkCarousel1'
import WorkCarousel2 from '@/components/WorkCarousel2'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Why />
        <Services />
        <Work />
        <WorkCarousel1 />
        <WorkCarousel2 />
        <Process />
        <Cta />
      </main>
    </>
  )
}
