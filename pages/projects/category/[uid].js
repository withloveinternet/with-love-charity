import { useEffect } from 'react'
import { Client } from '../../../prismic'
import Prismic from 'prismic-javascript'
import Container from '@material-ui/core/Container'
import { RichText } from 'prismic-reactjs'
import { useLayout } from '../../../utils/layout-context'
import Projects from '../../../components/Projects'
import Head from '../../../components/Head'

const ProjectCategory = (props) => {
  const { currentCategory, categories, allProjectsBasedOnCategory } = props;
  const { setHeaderColor } = useLayout();

  useEffect(() => {
    setHeaderColor(true)
  }, [])

  return (
    <>
      <Head data={currentCategory.data} />
      <Container>
        {currentCategory && allProjectsBasedOnCategory && categories && 
          <Projects 
            title={RichText.asText(currentCategory.data.title)}
            subtitle={RichText.asText(currentCategory.data.subtitle)}
            projects={allProjectsBasedOnCategory}
            categories={categories}
            viewAllCategory={true}
          />
        }
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = null, previewData = {}, params }) {
  const client = Client()

  const categories = await client.query(
    Prismic.Predicates.at('document.type', 'project_category')
  )

  const currentCategory = categories.results.find((node) => node.uid === params.uid)
  
  const allProjectsBasedOnCategory = await client.query([
    Prismic.Predicates.at('document.type', 'project'),
    Prismic.Predicates.at('my.project.project_category', currentCategory.id)
  ], {fetchLinks: ['project_category.icon', 'project_category.title']})

  return {
    props: {
      currentCategory,
      categories,
      allProjectsBasedOnCategory
    }
  }
}

export async function getStaticPaths() {
  const client = Client()
  const allProjectCategories = await client.query(
    Prismic.Predicates.at('document.type', 'project_category')
  )

  const paths = allProjectCategories.results.map((node) => ({
    params: { 
      uid: node.uid
    }
  }))

  return {
    paths,
    fallback: true,
  }
}

export default ProjectCategory