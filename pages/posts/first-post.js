import Link from 'next/link'
import Head from 'next/head'


export default function FirstPost() {
    return (
      <>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>Hello, I'm Da Yeon. I'm a freshman of Hanyang University and I'm taking the Introduction to Computer Science class.</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </>
    )
  }
  