import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@chakra-ui/layout';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsSectionProps {
  postId: number;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const fetchComments = async () => {
    try {
      const response = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const addComment = async () => {
    try {
      const response = await axios.post<Comment>(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        {
          body: newComment,
        }
      );
      setNewComment('');
      const newCommentData = response.data;
      setComments((prevComments: Comment[]): Comment[] => [...prevComments, newCommentData]);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Container maxW={'container.md'} className='flex flex-col'>
      <h2 className='m-4'>{comments.length} Comments</h2>
      <ul className='m-5'>
        {comments.map((comment) => (
          <li className='flex mb-8' key={comment.id}>
            <div className="icon flex-[1]">
              <span className="icon p-2 bg-sky-100 text-sky-500 rounded-full">JK</span>
            </div>
            <div className="content  flex-[7]">
              <div className="header flex justify-between items-center">
                <div className="name">
                  <span className="nam mr-2">{comment.name}</span>
                  <span className="email text-[#6941C6]">{comment.email}</span>
                </div>
                <span className="date text-gray-400">2 days ago</span>
              </div>
              <div className="body">
                <p className="body text-gray-400">{comment.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className='flex m-4 items-center'>
        <li className='p-1 rounded-full bg-sky-100 text-sky-500'>JK</li>
        <li className='p-1 rounded-full bg-sky-100 text-sky-500'>MK</li>
        <li className='p-1 rounded-full bg-sky-100 text-sky-500'>BR</li>
        <li className='p-1 rounded-full bg-sky-100 text-sky-500'>KN</li>
        <li>+34 comments</li>
      </ul>
      <div className='flex flex-col m-5'>
        <textarea
          className='w-full outline-none rounded-md'
          value={newComment}
          placeholder='click to add your comment'
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className='bg-[#6941C6] px-5 py-2 rounded-md w-40 m-4' onClick={addComment}>
          Post Comment
        </button>
      </div>
    </Container>
  );
};

export default CommentsSection;