import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import FormAddPost from '../../Posts/components/FormAddPost';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/mainPage.css';
import '../styles/mainpage.scss';
import 'swiper/css';
import 'swiper/css/navigation';


function MainPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const album = useSelector((store: RootState) => store.album.img);

  

  return (
<>
      <div className="container">
        <div className="img-pos">
        <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={true}
        pagination={true}
        onSlideChange={() => console.log('slide change')}
      >
        <div className="records__container">
          {album.map((img) => (
            <SwiperSlide key={img?.id}>
              <img className='album-image' src={img.img} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
        </div>

        <div className="container_main">
          <div className="titleSite_down">МЕЖДУНАРОДНЫЙ ИНТЕЛЕКТУАЛЬНЫЙ ТУРНИР</div>
          <div className="titleSite">
            «СИНЕРГИЯ: <br /> НЕФТЬ И ГАЗ»{' '}
          </div>
          <p className="date">9 - 11 ноября</p>
          <div className="container-div">
            <div className="cont-auth">
              <Link className="link_auth" to="/tournaments">
                Турниры
              </Link>
            </div>
            <Link className="link_auth" to="/auth">
              Вход / Регистрация
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ul></ul>
        <div>{posts.map((post)=><PostItem post={post} key={post.id}/>)}</div>
        {user?.role === 'admin' && <FormAddPost />}
      </div>
      </>
  );
}

export default MainPage;
