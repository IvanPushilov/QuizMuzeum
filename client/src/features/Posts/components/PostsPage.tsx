import React from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import FormAddPost from '../../Posts/components/FormAddPost';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/post.css';


function PostsPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const posts = useSelector((store: RootState) => store.posts.posts);
  return (
   
    <div className='container-posts'>
       <div>
        {user?.role === 'admin' && <p>Добавить пост</p> && <FormAddPost />}
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
              {posts.map((post) => (
                <div className='post__item' >
       <SwiperSlide> <PostItem key={post.id} post={post} /></SwiperSlide>
       </div>
      ))}
      </Swiper>

    </div>
  );
}

export default PostsPage;
