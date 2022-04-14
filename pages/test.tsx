import type {GetServerSidePropsContext, GetServerSidePropsResult} from 'next'
import styles from '../styles/Home.module.css'

export async function getServerSideProps({query, res}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> {
  res.setHeader('Cache-Control', 's-maxage=90, stale-while-revalidate=59')

  return {
    props: {
      query
    }
  }
}

const Home = ({query}: any) => {
  return (
    <div className={styles.container}>
        <pre>
            <code>
                {JSON.stringify(query, null, 2)}
            </code>
        </pre>
    </div>
  )
}

export default Home
