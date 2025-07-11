export function getImageUrl(illustration, ext) {
  return import.meta.env.BASE_URL + '/assets/images/' + illustration + ext
}
