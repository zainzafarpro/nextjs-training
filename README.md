This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Next js routing

Next js follows file base routing mechanism it means that whatever folder we create inside `src/app` folder will be mapped into the url for example if we create `about` inside `src/app` then the url can be accessed like
localhost:3000/about.

One thing to note here: we have to create `page.js or page.ts` inside that folder so that it can be accessed publically.

page.js will export a default React component and inside that component will be displayed on localhost:3000/about

inside about/page.js

```jsx
const About = () => {
  return <div>About page</div>;
};

export default About;
```

## Nested routes

For example we want to create nested routes inside our nextjs app.
To achieve that we will follow the same approach as mentioned above but this time the folder structure would be like
`src/app/blog/post/page.js`

The page.js inside `src/app/blog/post/` will export a React component and it will be accessed publically on followung url
`localhost:3000/blog/post`

```jsx
const Post = () => {
  return <div>This is nested route</div>;
};

export default Post;
```

## Dynamic routes

Nextjs handles Dynamic routes with simplicity and elegantly for example we have a we have to create a route which is dynamic acording to ID e.g: `blog/post/1`
To handle this
we will be using Dynamic routes feature provided by Nextjs.
We have to create a folder with square brackets inside our blog/post folder something like `blog/post/[postID]/page.js`

The folder with Square brakcets will be considered as dynamic route and will be mapped into the url if we pass 1 after post/:
`localhost:3000/blog/post/1`

inside [postID] folder the page.js will export the React component and here we can get access to the ID which is being passed into the url via `{params}` as props of [postID]'s page.js

```jsx
const PostId = ({ params }) => {
  const { postID } = params;
  return <div>This is post {postID}</div>;
};

export default PostId;
```
