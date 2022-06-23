import db from '$utils/supabase'

export async function get() {
  // `params.id` comes from [id].js
  const { data: bookmarks, error } = await db.from('bookmark').select()

  if (bookmarks) {
    return {
      body: { bookmarks },
    }
  }

  return {
    status: 404,
  }
}
