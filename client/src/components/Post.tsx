import PostDescription from "../Atoms/PostDescription";
import PostFooter from "../Molecules/PostFooter";
import PostHeader from "../Molecules/PostHeader";

const Post = () => {
  return (
    <section className="flex flex-col justify-center items-center py-2">
      <div className="w-[60%] flex flex-col gap-6 bg-slate-50 shadow-md px-6 py-8 rounded-lg">
        <PostHeader username="Shemilkumar" />
        <PostDescription
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          exercitationem, facere accusantium nihil nulla quidem blanditiis
          aperiam. Perferendis iusto omnis aut aliquam repellat, perspiciatis,
          voluptatibus nesciunt repudiandae sunt temporibus quo, commodi saepe
          hic maiores minus suscipit cumque amet vel consectetur praesentium
          dolor non doloribus harum? Aspernatur ipsa dolore soluta doloremque?"
        />
        <PostFooter likes={2} comments={2} />
      </div>
    </section>
  );
};

export default Post;
