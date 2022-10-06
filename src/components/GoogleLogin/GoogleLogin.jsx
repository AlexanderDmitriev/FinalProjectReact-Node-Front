import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGoogleData } from '../../redux/authAPI/auth-slice';

const GoogleLogin = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search !== '') {
      const paramMap = {};
      location.search
        .substring(location.search.indexOf('?') + 1)
        .split('&')
        .forEach(function (val) {
          var param = val.split('=');
          paramMap[param[0]] = param[1];
        });

      const token = decodeURI(paramMap.token);
      const sid = paramMap.sid;

      dispatch(setGoogleData({ token, sid }));
      navigate('/library');
    }
  }, [location]);
};

export default GoogleLogin;
