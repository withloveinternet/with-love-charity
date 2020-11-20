import { Client } from '../prismic'
import Prismic from "prismic-javascript"

export const fetchAdditionalData = async (slices, ref = null) => {
  const client = Client()
  let promises = []

  slices.map(slice => {
    switch(slice.slice_type) {
      case 'featured_blogs':
        if(slice.primary.showLatestBlogs) {
          const featured_blogs = client.query(
            Prismic.Predicates.at("document.type", "blog_post"), {
              ...(ref ? { ref } : null),
              fetchLinks: ['project_category.title', 'blog_topic.topic_name'],
              pageSize: 3,
              orderings : '[my.blog_post.date desc]'
            }   
          ).then((response) => {
            return {
              key: 'blogs',
              response
            }
          });

          promises.push(featured_blogs)
        }
        break;
      case 'featured_work':
        if(slice.primary.showAllProjects) {
          const featured_work = client.query(
            Prismic.Predicates.at("document.type", "project"), {
              ...(ref ? { ref } : null),
              fetchLinks: ['project_category.title']
            }   
          ).then((response) => {
            return {
              key: 'project',
              response
            }
          });

          promises.push(featured_work)
        }

        if(slice.primary.showAllCategories) {
          const all_categories = client.query(
            Prismic.Predicates.at("document.type", "project_category"), {
              ...(ref ? { ref } : null)
            }   
          ).then((response) => {
            return {
              key: 'project_category',
              response
            }
          });

          promises.push(all_categories)
        }
        break;
      default:
        // code block
    }
  })

  const promiseResult = await Promise.all(promises);
  return promiseResult.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: item.response }), {});
}