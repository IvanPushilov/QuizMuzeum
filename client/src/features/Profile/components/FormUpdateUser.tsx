import React,{useState} from 'react'
import { useAppDispatch } from '../../../store/store'
import { userUpd } from '../../Auth/authSlice';
import '../styles/reglog.css'

function FormUpdateUser():JSX.Element {
  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [img, setImg] = useState<FileList | null | undefined>(null);
const dispatch = useAppDispatch();




const profileUpdateFetch = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  const imgFile = img?.[0];
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('img', imgFile !== null && imgFile !== undefined ? imgFile : '');
  dispatch(userUpd(formData)).catch(console.log);
  setName('');
  setEmail('');
};

  return (
    <div className="upd__form__container">
      <div className="form-upd-user">
        <form className="upd__form" onSubmit={profileUpdateFetch}>
         
          <input
            className="input-order"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-order"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Фото:
          <input
            className="input-order-img"
            type='file'
            placeholder="img"
            onChange={(e) => setImg(e.target.files)}
          />
          </label>
          <button className='btn-update-profile btn-tw' type="submit">Изменить</button>
        </form>
      </div>
    </div>
  )
}

export default FormUpdateUser