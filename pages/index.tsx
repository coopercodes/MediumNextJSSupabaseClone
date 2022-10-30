import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Spacer } from "@nextui-org/react";
// localhost:3000
const Home: NextPage = () => {
  return (
    <>
      <Text h2>The future of article sharing</Text>
      <Spacer y={1} />
      <Text size="$lg">
        ShareArticles allows you to create and share articles.
      </Text>
    </>
  )
}

export default Home
