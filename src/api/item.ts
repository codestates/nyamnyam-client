import axios from 'axios';
import {
  PredictDataAPIProps,
  PredictDataAPIResults,
} from '@base/types/predict';
import { makeAuthHeaders } from './utils';

export const ingredients = [
  '초콜릿',
  '녹차',
  '생크림',
  '딸기',
  '민트초코',
  '요거트',
  '블루베리',
  '콩가루',
  '땅콩',
  '라즈베리',
  '치즈',
  '커피',
  '밤',
  '무화과',
  '키위',
  '복숭아',
  '망고',
  '당근',
  '시나몬',
  '꿀',
  '크림',
  '사과',
  '바나나',
  '건포도',
  '팥',
  '소보루',
];

export const 
export const getItemDetailInfo = async (productionId: string) => {
  const getItemDetail = await axios.get(
    `http://10.0.2.2:4000/managemenu/detail/${productionId}`,
    {
      withCredentials: true,
      responseType: 'json',
    }
  );

  return getItemDetail.data;
};

export const getItemModifyInfo = async (
  productionId: string,
  storeId: string,
  accessToken: string
) => {
  const getItemDetail = await axios.get(
    `http://10.0.2.2:4000/managemenu/editmenu?productionId=${productionId}&storeId=${storeId}`,
    {
      withCredentials: true,
      responseType: 'json',
      headers: {
        ...makeAuthHeaders(accessToken),
      },
    }
  );

  return getItemDetail.data;
};

export const postItemModify = async();