import React, { FC } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Button from "../../Atoms/Button";
import TextArea from "../../Atoms/TextArea";

interface CreatePostDesignProps {
  handleClick: (e: React.MouseEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CreatePostDesign: FC<CreatePostDesignProps> = ({
  onChange,
  handleClick,
}) => {
  return (
    <Layout>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-[50%]">
          <TextArea
            name="postContent"
            rows={10}
            placeHolder="write a post..."
            onChange={onChange}
          />
          <Button type="button" children="Post" handleOnClick={handleClick} />
        </div>
      </div>
    </Layout>
  );
};

export default CreatePostDesign;
