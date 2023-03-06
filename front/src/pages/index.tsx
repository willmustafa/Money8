import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/layouts/default/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Money 8</title>
        <meta name="description" content="Controle financeiro pessoal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Layout>
          <h1>Money 8</h1>
        </Layout>
      </main>
    </>
  )
}
