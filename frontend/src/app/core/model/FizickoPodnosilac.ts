import {UserInfo} from './UserInfo';
import {AuthorInfo} from './AuthorInfo';

export interface FizickoPodnosilac {
  userInfo: UserInfo;
  authorSubmitting: boolean;
  authorInfo?: AuthorInfo;

}
