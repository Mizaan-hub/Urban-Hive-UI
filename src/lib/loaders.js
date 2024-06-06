import ApiRequest from "./apiRequest"

export const SinglePageLoader = async ({request, params}) => {
  const res = await ApiRequest("/posts/"+params.id)
  return res.data
}