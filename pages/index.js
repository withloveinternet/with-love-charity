export { default } from './[uid]'
import { queryParams } from './[uid]'
import { Client } from '../prismic'
import { useGetStaticProps } from 'next-slicezone/hooks'
import { fetchAdditionalData } from '../utils/fetch-additional-data'

export async function getStaticProps({ preview = null, previewData = {}, params }) {
  const client = Client()
  const sliceMachine = useGetStaticProps({
    client,
    params: queryParams,
    type: 'page',
    uid: 'homepage'
  })

  const {props} = await sliceMachine({preview, previewData, params})
  const additionalData = await fetchAdditionalData(props.slices);

  return {
    props: {
      ...props,
      additionalData
    }
  }
}