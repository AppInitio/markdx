export const getRepo = async (owner: string, repo: string) => {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Authorization: process.env.GITHUB_ACCESS_TOKEN!,
    },
    next: {
      revalidate: 60,
    },
  })
  const data = await res.json()

  return data
}