import React, { useState } from 'react';
import {
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import { getRequestHandler } from '@baseline/client-api/request-handler';
import styles from './AddBlogPost.module.scss';
import { createBlogpost } from '@baseline/client-api/blogpost';
import { Blogpost } from '@baseline/types/blogpost';

interface Props {
  setAllBlogPosts: React.Dispatch<React.SetStateAction<Blogpost[]>>;
}

const AddBlogPost = (props: Props) => {
  const { setAllBlogPosts } = props;
  const [newTtile, setNewTitle] = useState('');
  const [newSubtitle, setNewSubTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggle = () => {
    setNewTitle('');
    setNewSubTitle('');
    setNewBody('');
    setIsModalOpen((open) => !open);
  };

  const addBlogPost = async (): Promise<void> => {
    const newBlogPost = await createBlogpost(getRequestHandler(), {
      title: newTtile,
      subTitle: newSubtitle,
      body: newBody
    });
    setAllBlogPosts((blogPosts) => [...blogPosts, newBlogPost]);
    toggle();
  };

  return (
    <div className={styles.addBlogPost}>
      <button className={styles.addBlogPostButton} onClick={toggle}>
        Add
      </button>
      <Modal
        className={styles.addBlogPostModal}
        isOpen={isModalOpen}
        toggle={toggle}
        centered
      >
        <ModalHeader toggle={toggle}>Add blog post</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Title</Label>
            <Input
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTtile}
            />
          </FormGroup>
          <FormGroup>
            <Label>Sub title</Label>
            <Input
              onChange={(e) => setNewSubTitle(e.target.value)}
              value={newSubtitle}
            />
          </FormGroup>
          <FormGroup>
            <Label>Body</Label>
            <Input
              onChange={(e) => setNewBody(e.target.value)}
              value={newBody}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <button
            disabled={!(newTtile && newSubtitle && newBody)}
            className={styles.addBlogPostButton}
            onClick={() => {
              void addBlogPost();
            }}
          >
            Add
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddBlogPost;
