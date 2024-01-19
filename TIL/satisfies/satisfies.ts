type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type CreatePostParams = {
  post: Post;
};

const createPost = async ({ post }: CreatePostParams) => {
  // ...
};

createPost({
  post: {
    id: 1,
    title: "title",
    content: "content",
  } as Post,
});

createPost({
  post: {
    id: 1,
    title: "title",
    content: "content",
  } satisfies Post,
});
