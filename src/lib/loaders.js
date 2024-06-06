import ApiRequest from "./apiRequest"

export const SinglePageLoader = async ({request, params}) => {
  const res = await ApiRequest("/posts/"+params.id)
  return res.data
}

export const ListPageLoader = async ({request, params}) => {
  const query = request.url.split("?")[1]
  const res = await ApiRequest("/posts?"+query)
  return res.data
}