import { Header } from "../../components/Header"
import { Post, PostType } from "../../components/Post"
import { Sidebar } from "../../components/Sidebar"

import styles from "./Home.module.css"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/navestelar.png",
      name: "Navestelar",
      role: "Full Stack Developer"
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        content: '👉jane.design/doctorcar'
      },
    ],
    publishedAt: new Date('2023-10-20 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Developer Educator"
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        content: '👉jane.design/doctorcar'
      },
    ],
    publishedAt: new Date('2023-10-20 14:00:00'),
  }
]

export default function Home() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}