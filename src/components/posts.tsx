const posts = [
  {
    author: 'smpas',
    title: 'first post ever here lol',
    date: new Date().toISOString().split('T')[0]
  },

  {
    author: 'pedro',
    title: 'first post ever here lol',
    date: new Date().toISOString().split('T')[0]
  },
  {
    author: 'jandira',
    title: 'first post ever here lol',
    date: new Date().toISOString().split('T')[0]
  }
]

export default function Posts() {
  return (
    <div className="p-6">
      <ul className="w-full flex flex-col items-center gap-4">
        {posts.map((post) => (
          <Post
            key={post.title}
            author={post.author}
            title={post.title}
            date={post.date}
          />
        ))}
      </ul>
    </div>
  )
}

function Post({
  author,
  title,
  date
}: Readonly<{
  author: string
  title: string
  date: string
}>) {
  return (
    <li className="w-8/12">
      <h1 className="w-fit text-[1.1rem] hover:underline hover:cursor-pointer">
        {title}
      </h1>
      <p className="text-xs">
        <span className="hover:underline hover:cursor-pointer">{author}</span>
        {' · '}
        <span>{new Date(date).toLocaleDateString('br')}</span>
      </p>
    </li>
  )
}
