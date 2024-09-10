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

> If the folder does not exist for example if we try to access localhost:3000/profile then the 404 page will be displayed, Next js automatically takes care of the routes which does not exists.

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

## Nested Dynamic routes

Now we want to create nested dynamic routes in our next js applications, to achieve that if you grasp the principle of routing in next js then this will be pretty straight forward for you.
imagine we have a route something like `localhost:3000/blog/post/1/reviews/3`

to achieve this we will now create a `reviews` folder inside our [postID]
the page.js of `reviews` folder will fetch the all reviews of out dynamic post according to `[postID]`.

```js
"use client";
const PostReviews = ({ params: { postID } }) => {
  return <div>This is all reviews of post {postID}</div>;
};

export default PostReviews;
```

inside reviews folder we will now create `[reviewID]` folder to cater the dynamic route of reviews such as
`localhost:3000/blog/post/1/reviews/5`;
the page.js file inside `[reviewID]` will export a react component and catch the id of postID as well as reviewID.

```js
const ReviewPage = ({ params: { postID, reviewID } }) => {
  return (
    <div>
      This is the Review {reviewID} of post {postID}
    </div>
  );
};

export default ReviewPage;
```
