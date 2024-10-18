import Intro from '@/components/intro'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

const page = () => {
  const content = `
    #This is a markdown heading
  `
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}

export default page
